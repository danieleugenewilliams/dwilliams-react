#!/bin/bash
set -euo pipefail

# =============================================================================
# D. E. Williams + Co. — Deploy to S3 + CloudFront
# Builds the site and syncs to production.
# =============================================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
RESOURCES_FILE="$SCRIPT_DIR/.aws-resources.env"

# Load resource IDs from setup
if [ ! -f "$RESOURCES_FILE" ]; then
  echo "Error: $RESOURCES_FILE not found."
  echo "Run ./scripts/aws-setup.sh first to provision infrastructure."
  exit 1
fi

source "$RESOURCES_FILE"

echo "================================================"
echo "  D. E. Williams + Co. — Deploy"
echo "================================================"
echo ""
echo "  Bucket: $S3_BUCKET"
echo "  Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
echo ""

# Load production env vars if available
ENV_FILE="$PROJECT_DIR/.env.production"
if [ -f "$ENV_FILE" ]; then
  echo "Loading production env vars from .env.production"
  set -a
  source "$ENV_FILE"
  set +a
else
  echo "Warning: .env.production not found. Build will use default/dev values."
  echo "Create .env.production from .env.production.example for production builds."
  echo ""
fi

# Build
echo "--- Building ---"
cd "$PROJECT_DIR"
npm run build
echo ""

# Sync hashed assets (long cache) — with retry for large files
echo "--- Syncing to S3 ---"
echo "Uploading hashed assets (immutable cache)..."
MAX_RETRIES=3
for attempt in $(seq 1 $MAX_RETRIES); do
  if aws s3 sync dist/ "s3://$S3_BUCKET" \
    --delete \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "index.html" \
    --exclude "*.json" \
    --exclude "*.xml" \
    --exclude "*.txt" \
    --cli-read-timeout 120; then
    break
  fi
  if [ "$attempt" -eq "$MAX_RETRIES" ]; then
    echo "Error: S3 sync failed after $MAX_RETRIES attempts"
    exit 1
  fi
  echo "Sync attempt $attempt failed, retrying in 5s..."
  sleep 5
done

# Upload index.html (no cache)
echo "Uploading index.html (no cache)..."
aws s3 cp dist/index.html "s3://$S3_BUCKET/index.html" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"

# Upload JSON files (short cache)
echo "Uploading JSON files (1 hour cache)..."
aws s3 sync dist/ "s3://$S3_BUCKET" \
  --exclude "*" \
  --include "*.json" \
  --cache-control "public, max-age=3600"

# Upload XML files (short cache — sitemap)
echo "Uploading XML files (1 hour cache)..."
aws s3 sync dist/ "s3://$S3_BUCKET" \
  --exclude "*" \
  --include "*.xml" \
  --cache-control "public, max-age=3600"

# Upload txt files (short cache — robots.txt)
echo "Uploading text files (1 hour cache)..."
aws s3 sync dist/ "s3://$S3_BUCKET" \
  --exclude "*" \
  --include "*.txt" \
  --cache-control "public, max-age=3600"

echo ""

# Invalidate CloudFront
echo "--- Invalidating CloudFront ---"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/index.html" "/" \
  --query "Invalidation.Id" \
  --output text)

echo "Invalidation created: $INVALIDATION_ID"
echo ""

# Summary
echo "================================================"
echo "  Deploy complete!"
echo "================================================"
echo ""
echo "  S3: s3://$S3_BUCKET"
echo "  CloudFront: $CLOUDFRONT_DISTRIBUTION_ID"
echo "  Invalidation: $INVALIDATION_ID"
echo ""
echo "  Site: https://dewilliams.co"
echo "  (CloudFront invalidation takes ~30-60 seconds)"
echo ""
