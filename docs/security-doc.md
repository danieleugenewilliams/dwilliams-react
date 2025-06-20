# Security Documentation for D. E. Williams & Company Website

## Overview
This document summarizes the security architecture, controls, and compliance features implemented for dewilliams.co as of May 2025.

## 1. Content Security Policy (CSP) & CORS
- Strict CSP headers are enforced for all API routes and static assets to prevent XSS and code injection.
- CORS headers restrict cross-origin requests to trusted origins only.

## 2. Cookie Security
- All cookies use Secure, HttpOnly, and SameSite attributes.
- Analytics and HubSpot cookies have proper domain and max-age settings.
- Middleware and utility libraries sanitize and restrict cookie access.

## 3. Rate Limiting
- Upstash Redis-based rate limiting is implemented on all API routes to prevent abuse and DoS attacks.
- 77%+ test coverage for rate limiting logic.

## 4. Data Protection
- HTTPS is enforced site-wide (SSL certificates configured).
- All user input is sanitized using DOMPurify and validation utilities.
- Sensitive data is never stored client-side.
- API endpoints are protected against path traversal and injection.

## 5. GDPR & Privacy Compliance
- Cookie consent and privacy policy are implemented and visible to users.
- Users can request access to or deletion of their data via a dedicated page.
- All data retention and deletion mechanisms are tested and documented.
- Email verification is required for data requests.

## 6. Audit & Monitoring
- Security audit completed (May 2025).
- Ongoing monitoring and regular security patching are part of the maintenance plan.

### Vulnerability Investigations
#### tar-fs Vulnerability (GHSA-8cj5-5rvv-wf4v) - June 2025
- **Status**: Not Affected
- **Investigation Date**: June 3, 2025
- **Findings**: 
  - tar-fs package is not used directly or indirectly in the project
  - npm audit shows 0 vulnerabilities
  - All dependencies are secure and up to date
- **Action**: No action required - project is not vulnerable to this issue
- **Reference**: CVE-2025-48387, affects tar-fs versions < 1.16.5, >= 2.0.0 < 2.1.3, >= 3.0.0 < 3.0.9

## 7. Additional Notes
- All security features are described and tested in the implementation plan and supporting documentation.
- Security documentation will be updated as new features or compliance requirements are added.
