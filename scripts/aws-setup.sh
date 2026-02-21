#!/bin/bash
set -euo pipefail

# =============================================================================
# D. E. Williams + Co. — AWS Infrastructure Setup
# One-time script to provision S3, CloudFront, ACM, and Route 53 resources.
# =============================================================================

REGION="us-east-1"
BUCKET_NAME="dewilliamsco-site"
DOMAIN="dewilliams.co"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RESOURCES_FILE="$SCRIPT_DIR/.aws-resources.env"

echo "================================================"
echo "  D. E. Williams + Co. — AWS Infrastructure Setup"
echo "================================================"
echo ""

# Get account ID
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo "AWS Account: $ACCOUNT_ID"
echo "Region: $REGION"
echo ""

# Look up hosted zone ID
echo "Looking up Route 53 hosted zone for $DOMAIN..."
HOSTED_ZONE_ID=$(aws route53 list-hosted-zones-by-name \
  --dns-name "$DOMAIN" \
  --query "HostedZones[?Name=='$DOMAIN.'].Id" \
  --output text | sed 's|/hostedzone/||')

if [ -z "$HOSTED_ZONE_ID" ] || [ "$HOSTED_ZONE_ID" = "None" ]; then
  echo "Error: Could not find hosted zone for $DOMAIN"
  exit 1
fi
echo "Hosted Zone: $HOSTED_ZONE_ID"
echo ""

# =============================================================================
# Step 1: ACM Certificate
# =============================================================================
echo "--- Step 1: ACM Certificate ---"

# Check for existing cert
EXISTING_CERT=$(aws acm list-certificates --region "$REGION" \
  --query "CertificateSummaryList[?DomainName=='$DOMAIN' && Status!='FAILED'].CertificateArn" \
  --output text 2>/dev/null || true)

if [ -n "$EXISTING_CERT" ] && [ "$EXISTING_CERT" != "None" ]; then
  CERT_ARN="$EXISTING_CERT"
  echo "Certificate already exists: $CERT_ARN"
else
  echo "Requesting ACM certificate for $DOMAIN + *.$DOMAIN..."
  CERT_ARN=$(aws acm request-certificate \
    --domain-name "$DOMAIN" \
    --subject-alternative-names "*.$DOMAIN" \
    --validation-method DNS \
    --region "$REGION" \
    --query CertificateArn \
    --output text)
  echo "Certificate requested: $CERT_ARN"

  # Wait for validation records to be available
  echo "Waiting for DNS validation records..."
  sleep 10

  # Get validation records
  VALIDATION_RECORDS=$(aws acm describe-certificate \
    --certificate-arn "$CERT_ARN" \
    --region "$REGION" \
    --query "Certificate.DomainValidationOptions[0].ResourceRecord" \
    --output json)

  VALIDATION_NAME=$(echo "$VALIDATION_RECORDS" | python3 -c "import sys,json; print(json.load(sys.stdin)['Name'])")
  VALIDATION_VALUE=$(echo "$VALIDATION_RECORDS" | python3 -c "import sys,json; print(json.load(sys.stdin)['Value'])")

  echo "Adding DNS validation record to Route 53..."
  aws route53 change-resource-record-sets \
    --hosted-zone-id "$HOSTED_ZONE_ID" \
    --change-batch "{
      \"Changes\": [{
        \"Action\": \"UPSERT\",
        \"ResourceRecordSet\": {
          \"Name\": \"$VALIDATION_NAME\",
          \"Type\": \"CNAME\",
          \"TTL\": 300,
          \"ResourceRecords\": [{\"Value\": \"$VALIDATION_VALUE\"}]
        }
      }]
    }" --output text > /dev/null

  echo "Waiting for certificate validation (this may take a few minutes)..."
  aws acm wait certificate-validated \
    --certificate-arn "$CERT_ARN" \
    --region "$REGION"
  echo "Certificate validated!"
fi
echo ""

# =============================================================================
# Step 2: S3 Bucket
# =============================================================================
echo "--- Step 2: S3 Bucket ---"

if aws s3api head-bucket --bucket "$BUCKET_NAME" 2>/dev/null; then
  echo "Bucket $BUCKET_NAME already exists"
else
  echo "Creating S3 bucket: $BUCKET_NAME..."
  aws s3 mb "s3://$BUCKET_NAME" --region "$REGION"

  echo "Blocking all public access..."
  aws s3api put-public-access-block \
    --bucket "$BUCKET_NAME" \
    --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
  echo "Bucket created and locked down"
fi
echo ""

# =============================================================================
# Step 3: CloudFront Function — SPA Router
# =============================================================================
echo "--- Step 3: CloudFront Function (SPA Router) ---"

SPA_FUNCTION_NAME="dewilliamsco-spa-router"

# Write the function code to a temp file
SPA_FUNCTION_CODE=$(cat <<'JSEOF'
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.includes('.')) {
    return request;
  }
  request.uri = '/index.html';
  return request;
}
JSEOF
)

EXISTING_SPA_FN=$(aws cloudfront list-functions \
  --query "FunctionList.Items[?Name=='$SPA_FUNCTION_NAME'].Name" \
  --output text 2>/dev/null || true)

if [ -n "$EXISTING_SPA_FN" ] && [ "$EXISTING_SPA_FN" != "None" ]; then
  echo "CloudFront function $SPA_FUNCTION_NAME already exists"
  SPA_FN_ARN=$(aws cloudfront describe-function \
    --name "$SPA_FUNCTION_NAME" \
    --query "FunctionSummary.FunctionMetadata.FunctionARN" \
    --output text)
else
  echo "Creating CloudFront function: $SPA_FUNCTION_NAME..."

  # Write function code to temp file
  TMPFILE=$(mktemp)
  echo "$SPA_FUNCTION_CODE" > "$TMPFILE"

  SPA_FN_ETAG=$(aws cloudfront create-function \
    --name "$SPA_FUNCTION_NAME" \
    --function-config '{"Comment":"SPA routing - rewrite non-file paths to /index.html","Runtime":"cloudfront-js-2.0"}' \
    --function-code "fileb://$TMPFILE" \
    --query "ETag" \
    --output text)

  rm -f "$TMPFILE"

  echo "Publishing function to LIVE stage..."
  aws cloudfront publish-function \
    --name "$SPA_FUNCTION_NAME" \
    --if-match "$SPA_FN_ETAG" > /dev/null

  SPA_FN_ARN=$(aws cloudfront describe-function \
    --name "$SPA_FUNCTION_NAME" \
    --query "FunctionSummary.FunctionMetadata.FunctionARN" \
    --output text)
  echo "Function created and published: $SPA_FN_ARN"
fi
echo ""

# =============================================================================
# Step 4: Response Headers Policy
# =============================================================================
echo "--- Step 4: Response Headers Policy ---"

HEADERS_POLICY_NAME="dewilliamsco-security-headers"

EXISTING_POLICY=$(aws cloudfront list-response-headers-policies \
  --query "ResponseHeadersPolicyList.Items[?ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name=='$HEADERS_POLICY_NAME'].ResponseHeadersPolicy.Id" \
  --output text 2>/dev/null || true)

if [ -n "$EXISTING_POLICY" ] && [ "$EXISTING_POLICY" != "None" ]; then
  HEADERS_POLICY_ID="$EXISTING_POLICY"
  echo "Response headers policy already exists: $HEADERS_POLICY_ID"
else
  echo "Creating response headers policy: $HEADERS_POLICY_NAME..."
  HEADERS_POLICY_ID=$(aws cloudfront create-response-headers-policy \
    --response-headers-policy-config "{
      \"Name\": \"$HEADERS_POLICY_NAME\",
      \"Comment\": \"Security headers for dewilliams.co\",
      \"SecurityHeadersConfig\": {
        \"StrictTransportSecurity\": {
          \"Override\": true,
          \"AccessControlMaxAgeSec\": 31536000,
          \"IncludeSubdomains\": true,
          \"Preload\": true
        },
        \"ContentTypeOptions\": {
          \"Override\": true
        },
        \"FrameOptions\": {
          \"Override\": true,
          \"FrameOption\": \"DENY\"
        },
        \"ReferrerPolicy\": {
          \"Override\": true,
          \"ReferrerPolicy\": \"strict-origin-when-cross-origin\"
        },
        \"XSSProtection\": {
          \"Override\": true,
          \"Protection\": true,
          \"ModeBlock\": true
        }
      }
    }" \
    --query "ResponseHeadersPolicy.Id" \
    --output text)
  echo "Policy created: $HEADERS_POLICY_ID"
fi
echo ""

# =============================================================================
# Step 5: CloudFront Origin Access Control
# =============================================================================
echo "--- Step 5: CloudFront OAC ---"

OAC_NAME="dewilliamsco-site-oac"

EXISTING_OAC=$(aws cloudfront list-origin-access-controls \
  --query "OriginAccessControlList.Items[?Name=='$OAC_NAME'].Id" \
  --output text 2>/dev/null || true)

if [ -n "$EXISTING_OAC" ] && [ "$EXISTING_OAC" != "None" ]; then
  OAC_ID="$EXISTING_OAC"
  echo "OAC already exists: $OAC_ID"
else
  echo "Creating Origin Access Control: $OAC_NAME..."
  OAC_ID=$(aws cloudfront create-origin-access-control \
    --origin-access-control-config "{
      \"Name\": \"$OAC_NAME\",
      \"Description\": \"OAC for dewilliamsco-site S3 bucket\",
      \"SigningProtocol\": \"sigv4\",
      \"SigningBehavior\": \"always\",
      \"OriginAccessControlOriginType\": \"s3\"
    }" \
    --query "OriginAccessControl.Id" \
    --output text)
  echo "OAC created: $OAC_ID"
fi
echo ""

# =============================================================================
# Step 6: CloudFront Distribution
# =============================================================================
echo "--- Step 6: CloudFront Distribution ---"

S3_ORIGIN="$BUCKET_NAME.s3.$REGION.amazonaws.com"

# Check if distribution already exists (by CNAME)
EXISTING_DIST=$(aws cloudfront list-distributions \
  --query "DistributionList.Items[?contains(Aliases.Items, '$DOMAIN')].Id" \
  --output text 2>/dev/null || true)

if [ -n "$EXISTING_DIST" ] && [ "$EXISTING_DIST" != "None" ]; then
  DISTRIBUTION_ID="$EXISTING_DIST"
  DISTRIBUTION_DOMAIN=$(aws cloudfront get-distribution \
    --id "$DISTRIBUTION_ID" \
    --query "Distribution.DomainName" \
    --output text)
  echo "Distribution already exists: $DISTRIBUTION_ID ($DISTRIBUTION_DOMAIN)"
else
  echo "Creating CloudFront distribution..."

  DIST_CONFIG=$(cat <<DISTEOF
{
  "CallerReference": "dewilliamsco-site-$(date +%s)",
  "Comment": "dewilliams.co website",
  "DefaultRootObject": "index.html",
  "Aliases": {
    "Quantity": 2,
    "Items": ["$DOMAIN", "www.$DOMAIN"]
  },
  "Origins": {
    "Quantity": 1,
    "Items": [{
      "Id": "S3-$BUCKET_NAME",
      "DomainName": "$S3_ORIGIN",
      "OriginAccessControlId": "$OAC_ID",
      "S3OriginConfig": {
        "OriginAccessIdentity": ""
      }
    }]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-$BUCKET_NAME",
    "ViewerProtocolPolicy": "redirect-to-https",
    "AllowedMethods": {
      "Quantity": 2,
      "Items": ["GET", "HEAD"],
      "CachedMethods": {
        "Quantity": 2,
        "Items": ["GET", "HEAD"]
      }
    },
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
    "ResponseHeadersPolicyId": "$HEADERS_POLICY_ID",
    "Compress": true,
    "FunctionAssociations": {
      "Quantity": 1,
      "Items": [{
        "FunctionARN": "$SPA_FN_ARN",
        "EventType": "viewer-request"
      }]
    }
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      {
        "ErrorCode": 403,
        "ResponsePagePath": "/index.html",
        "ResponseCode": "200",
        "ErrorCachingMinTTL": 0
      },
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/index.html",
        "ResponseCode": "200",
        "ErrorCachingMinTTL": 0
      }
    ]
  },
  "ViewerCertificate": {
    "ACMCertificateArn": "$CERT_ARN",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "PriceClass": "PriceClass_100",
  "Enabled": true,
  "HttpVersion": "http2and3"
}
DISTEOF
)

  DIST_RESULT=$(aws cloudfront create-distribution \
    --distribution-config "$DIST_CONFIG" \
    --output json)

  DISTRIBUTION_ID=$(echo "$DIST_RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['Id'])")
  DISTRIBUTION_DOMAIN=$(echo "$DIST_RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['DomainName'])")
  echo "Distribution created: $DISTRIBUTION_ID"
  echo "Domain: $DISTRIBUTION_DOMAIN"
fi
echo ""

# =============================================================================
# Step 7: S3 Bucket Policy
# =============================================================================
echo "--- Step 7: S3 Bucket Policy ---"

echo "Applying bucket policy for CloudFront OAC access..."
aws s3api put-bucket-policy \
  --bucket "$BUCKET_NAME" \
  --policy "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [{
      \"Sid\": \"AllowCloudFrontOAC\",
      \"Effect\": \"Allow\",
      \"Principal\": {
        \"Service\": \"cloudfront.amazonaws.com\"
      },
      \"Action\": \"s3:GetObject\",
      \"Resource\": \"arn:aws:s3:::$BUCKET_NAME/*\",
      \"Condition\": {
        \"StringEquals\": {
          \"AWS:SourceArn\": \"arn:aws:cloudfront::$ACCOUNT_ID:distribution/$DISTRIBUTION_ID\"
        }
      }
    }]
  }"
echo "Bucket policy applied"
echo ""

# =============================================================================
# Step 8: Route 53 Records
# =============================================================================
echo "--- Step 8: Route 53 DNS Records ---"

echo "Creating A and AAAA alias records for $DOMAIN and www.$DOMAIN..."

# CloudFront hosted zone ID is always Z2FDTNDATAQYW2
CF_HOSTED_ZONE="Z2FDTNDATAQYW2"

aws route53 change-resource-record-sets \
  --hosted-zone-id "$HOSTED_ZONE_ID" \
  --change-batch "{
    \"Changes\": [
      {
        \"Action\": \"UPSERT\",
        \"ResourceRecordSet\": {
          \"Name\": \"$DOMAIN\",
          \"Type\": \"A\",
          \"AliasTarget\": {
            \"HostedZoneId\": \"$CF_HOSTED_ZONE\",
            \"DNSName\": \"$DISTRIBUTION_DOMAIN\",
            \"EvaluateTargetHealth\": false
          }
        }
      },
      {
        \"Action\": \"UPSERT\",
        \"ResourceRecordSet\": {
          \"Name\": \"$DOMAIN\",
          \"Type\": \"AAAA\",
          \"AliasTarget\": {
            \"HostedZoneId\": \"$CF_HOSTED_ZONE\",
            \"DNSName\": \"$DISTRIBUTION_DOMAIN\",
            \"EvaluateTargetHealth\": false
          }
        }
      },
      {
        \"Action\": \"UPSERT\",
        \"ResourceRecordSet\": {
          \"Name\": \"www.$DOMAIN\",
          \"Type\": \"A\",
          \"AliasTarget\": {
            \"HostedZoneId\": \"$CF_HOSTED_ZONE\",
            \"DNSName\": \"$DISTRIBUTION_DOMAIN\",
            \"EvaluateTargetHealth\": false
          }
        }
      },
      {
        \"Action\": \"UPSERT\",
        \"ResourceRecordSet\": {
          \"Name\": \"www.$DOMAIN\",
          \"Type\": \"AAAA\",
          \"AliasTarget\": {
            \"HostedZoneId\": \"$CF_HOSTED_ZONE\",
            \"DNSName\": \"$DISTRIBUTION_DOMAIN\",
            \"EvaluateTargetHealth\": false
          }
        }
      }
    ]
  }" --output text > /dev/null

echo "DNS records created"
echo ""

# =============================================================================
# Step 9: Save Resource IDs
# =============================================================================
echo "--- Step 9: Saving Resource IDs ---"

cat > "$RESOURCES_FILE" <<EOF
# D. E. Williams + Co. AWS Resources — generated by aws-setup.sh
# Do not commit this file (it's in .gitignore)
CLOUDFRONT_DISTRIBUTION_ID=$DISTRIBUTION_ID
S3_BUCKET=$BUCKET_NAME
ACM_CERT_ARN=$CERT_ARN
DISTRIBUTION_DOMAIN=$DISTRIBUTION_DOMAIN
EOF

echo "Resource IDs saved to: $RESOURCES_FILE"
echo ""

# =============================================================================
# Done
# =============================================================================
echo "================================================"
echo "  Infrastructure setup complete!"
echo "================================================"
echo ""
echo "  Distribution ID: $DISTRIBUTION_ID"
echo "  Distribution URL: https://$DISTRIBUTION_DOMAIN"
echo "  S3 Bucket: $BUCKET_NAME"
echo "  Certificate: $CERT_ARN"
echo ""
echo "  Next steps:"
echo "  1. Run ./scripts/deploy.sh to deploy the site"
echo "  2. Wait for CloudFront distribution to deploy (~5-15 min)"
echo "  3. Visit https://$DOMAIN to verify"
echo ""
