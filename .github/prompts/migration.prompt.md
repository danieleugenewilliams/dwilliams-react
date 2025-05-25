# Legacy Application Migration Specification

## Overview
Convert a Next.js application to a React SPA while preserving existing functionality and assets. Source materials are available in the `/.old-app/html/` directory.

See docs/implementation-plan.md for the full implementation plan.
See docs/prd.md for the full product requirements document.
See docs/frd.md for the full functional requirements document.
See docs/ui-guidelines.md for the UI guidelines.

## Source Structure
- HTML templates: `/.old-app/html/`
- Styling: `/.old-app/html/styles/`
- Static assets: `/.old-app/html/public/`

## Page Requirements

### Core Pages
1. Home (Entry point)
2. About
3. Services (with service descriptions and contact links)
4. Case Studies (with gated PDF downloads)
5. Bio (tabbed interface)
   - Background
   - Expertise
   - Experience
   - Education
   - Publications
6. Contact (HubSpot form integration)

### External Integrations
- Insights section links to Substack
- HubSpot forms for:
  - Contact page
  - Case study downloads
  - Newsletter subscriptions

## Technical Requirements

1. Framework & Tools
   - React SPA architecture
   - TypeScript for all components
   - Tailwind CSS with dark mode support
   - React Helmet for metadata
   
2. Asset Management
   - Move all assets to `src/assets/` or `public/`
   - Implement lazy loading for PDFs and large assets
   - Optimize all static assets for performance

3. Forms & Integration
   - Client-side only form handling
   - Maintain HubSpot integration via client-side JavaScript
   - Preserve all form functionality and validation

4. Accessibility & Standards
   - Implement WCAG accessibility standards
   - Follow provided UI guidelines
   - Maintain consistent cross-page layout (header, footer, main content)
   - Preserve dark mode theming

## Documentation
Include migration steps and new conventions in updated documentation.