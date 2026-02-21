# D.E. Williams & Co. Website Deployment Checklist

Use this checklist to verify that the website deployment has been successful and everything is functioning properly.

## Domain Configuration
- [ ] Root domain (dewilliams.co) resolves correctly
- [ ] www subdomain (www.dewilliams.co) resolves correctly
- [ ] SSL certificate is valid and secure (shows lock icon in browser)
- [ ] Domain redirects are working properly
- [ ] HTTPS is enforced across the entire site

## Core Website Functionality
- [ ] Home page loads correctly with all images and styles
- [ ] All pages correctly load CSS styles (no unstyled content)
- [ ] CSS files are served with the correct MIME type (text/css)
- [ ] JavaScript files are served with the correct MIME type (application/javascript)
- [ ] Tailwind CSS styles are correctly applied across all pages
- [ ] Font loading is working correctly across the site
- [ ] Navigation works across all pages
- [ ] Mobile navigation toggle works properly
- [ ] All internal links function correctly
- [ ] All external links open in new tabs
- [ ] Case Studies page loads with all entries
- [ ] Services page displays all services correctly
- [ ] About page loads with team information
- [ ] Blog loads with all posts (if applicable)
- [ ] Theme switching (light/dark mode) works correctly
- [ ] CSS transitions and animations work properly

## Forms and API Integrations
- [ ] Contact form submits successfully to HubSpot
- [ ] Contact form validation works correctly
- [ ] Form submission shows appropriate success message
- [ ] Case study request form works correctly
- [ ] Email notifications for form submissions are working
- [ ] Rate limiting is functioning properly (test with rapid submissions)

## Analytics and Tracking
- [ ] Google Analytics is tracking page views (G-SX25T7LSRE)
- [ ] Hotjar is recording sessions (ID: 6395622)
- [ ] Event tracking for important interactions is working

## Performance and Optimization
- [ ] Page loads in under 3 seconds on desktop
- [ ] Page loads in under 5 seconds on mobile
- [ ] Images are properly optimized and responsive
- [ ] Core Web Vitals metrics are good (use PageSpeed Insights)
- [ ] No console errors in browser developer tools
- [ ] No broken images or 404s across the site

## Responsive Design
- [ ] Site displays correctly on mobile devices (320px+)
- [ ] Site displays correctly on tablets (768px+)
- [ ] Site displays correctly on desktop (1024px+)
- [ ] Site displays correctly on large screens (1440px+)
- [ ] No horizontal scrolling on any screen size
- [ ] Touch targets are appropriately sized for mobile

## Browser Compatibility
- [ ] Site works in Chrome (latest)
- [ ] Site works in Firefox (latest)
- [ ] Site works in Safari (latest)
- [ ] Site works in Edge (latest)
- [ ] Site works in iOS Safari
- [ ] Site works in Android Chrome

## SEO and Metadata
- [ ] All pages have appropriate title tags
- [ ] All pages have meta descriptions
- [ ] OG tags are properly set for social sharing
- [ ] robots.txt allows appropriate crawling
- [ ] sitemap.xml is accessible and includes all pages
- [ ] Structured data is correctly implemented (if applicable)

## Security
- [ ] Content Security Policy is properly configured
- [ ] No sensitive data exposed in client-side code
- [ ] All third-party scripts are loaded securely
- [ ] API endpoints are protected with rate limiting

## S3 + CloudFront Configuration
- [ ] Verify S3 bucket `dewilliamsco-site` has all public access blocked
- [ ] Confirm CloudFront OAC is attached and bucket policy allows it
- [ ] Check CloudFront Function (SPA router) is published and associated
- [ ] Verify response headers policy includes HSTS, X-Frame-Options, X-Content-Type-Options
- [ ] Confirm ACM certificate covers `dewilliams.co` and `*.dewilliams.co`
- [ ] Verify Route 53 A + AAAA alias records point to CloudFront distribution
- [ ] Run `npm run deploy` and confirm S3 sync + CloudFront invalidation succeed

## Post-Deployment
- [ ] Verify site loads at https://dewilliams.co
- [ ] Test deep links (/consulting, /about, /contact) for SPA routing
- [ ] Confirm www.dewilliams.co resolves correctly
- [ ] Inspect response headers (HSTS, X-Frame-Options, etc.)
- [ ] Check CloudWatch logs for any errors
- [ ] Monitor Google Analytics for user activity
- [ ] Verify HubSpot is receiving form submissions
- [ ] Confirm hashed assets have immutable cache headers
- [ ] Confirm index.html has no-cache headers
- [ ] Test site again after 24 hours to ensure caching is working properly

## Troubleshooting
- [ ] Check browser console for 404 errors or failed resource loads
- [ ] Verify that Tailwind CSS is compiled properly in the build output
- [ ] Run `npm run build` locally to confirm clean build
- [ ] Check S3 bucket contents match dist/ output
- [ ] Test clearing browser cache to ensure latest version is served
- [ ] Verify that custom fonts are loading correctly

## Notes
- Date of deployment verification: ________________
- Verified by: ________________
- Issues identified: ________________
- Follow-up actions required: ________________
