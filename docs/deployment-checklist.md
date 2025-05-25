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

## AWS Amplify Configuration
- [ ] Verify that the correct `amplify.yml` is in use
- [ ] Confirm compute bundle is properly configured in `amplify-nextjs.yml`
- [ ] Check that CSS MIME types are correctly configured in the build spec
- [ ] Verify the compute bundle output structure is correct
- [ ] Confirm that server.js and required-server-files.json are present in the compute bundle
- [ ] Run `pnpm run verify:amplify` before deployment to check configuration
- [ ] Run `pnpm run test:css` to verify correct MIME types for CSS files

## Post-Deployment
- [ ] Monitor AWS Amplify console for any build errors
- [ ] Check AWS CloudWatch logs for any backend errors
- [ ] Monitor Google Analytics for user activity
- [ ] Verify HubSpot is receiving form submissions
- [ ] Inspect browser network requests to confirm CSS files have text/css MIME type
- [ ] Test site again after 24 hours to ensure caching is working properly

## CSS Troubleshooting (If Styling Issues Occur)
- [ ] Check browser console for 404 errors related to CSS files
- [ ] Verify that Tailwind CSS is compiled properly in the deployment
- [ ] Check that content security policy is not blocking CSS resources
- [ ] Inspect AWS Amplify build logs for CSS compilation issues
- [ ] Verify all required static files are included in the deployment
- [ ] Check that CSS files are correctly located in the standalone output
- [ ] Test clearing browser cache to ensure latest styles are loaded
- [ ] Verify that custom fonts are loading correctly

## Notes
- Date of deployment verification: ________________
- Verified by: ________________
- Issues identified: ________________
- Follow-up actions required: ________________
