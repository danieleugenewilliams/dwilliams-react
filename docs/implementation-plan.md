# Implementation Plan for D. E. Williams & Company Website Migration

**Date**: May 24, 2025  
**Author**: GitHub Copilot (assisting Daniel E. Williams)  
**Project**: Migration of `dewilliams.co` from Next.js to Vite + React (TypeScript), with Tailwind CSS and React Router, as a static SPA.

---

## 1. Overview

This plan outlines the migration of the D. E. Williams & Company website from a Next.js codebase to a modern Vite + React (TypeScript) single-page application. The new app will use React Router for all routing, Tailwind CSS for styling, and pnpm for dependency management. The migration will ensure all business goals, features, and design standards are preserved or improved, while removing all SSR and API route dependencies.

### Migration Objectives
- **Migrate all pages and logic** from the old Next.js app to React functional components and React Router routes.
- **Preserve all features**: services, case studies (with PDF downloads), professional bio, insights/blog (Substack RSS), contact form (HubSpot integration), analytics, and accessibility.
- **Adopt new conventions**: Use `src/assets/` for assets, `src/components/` for components, and update all code to TypeScript.
- **Remove all Next.js-specific code**: No SSR, no API routes, no Next.js routing or config files.
- **Update documentation**: Reflect new conventions, migration steps, and any changes in workflows.

---

## 2. Migration Phases

### Phase 1: Project Setup & Core Infrastructure
- [x] Initialize Vite + React (TypeScript) project
- [x] Integrate Tailwind CSS
- [x] Set up React Router for SPA routing
- [x] Configure pnpm for dependency management
- [x] Establish folder structure: `src/assets/`, `src/components/`, etc.

### Phase 2: Component & Page Migration
- [x] Migrate homepage as React component
- [x] Migrate About, Services, Case Studies, Bio, Insights, and Contact pages as React components
- [x] Implement navigation and layout using React Router
- [x] Move all static assets (images, PDFs) to `src/assets/` or `public/`
- [x] Recreate all forms (contact, case study download) as client-side React components
  - [x] contact
  - [x] case study downloads
- [x] Integrate HubSpot forms and Substack RSS (client-side only)

### Phase 3: Feature Parity & Enhancements
- [ ] Ensure all business logic, validation, and UI features are preserved
- [ ] Implement PDF download functionality for case studies
- [ ] Integrate Google Analytics and Hotjar (client-side)
- [ ] Apply all Tailwind CSS styles and ensure design matches UI guidelines
- [ ] Add dark/light mode toggle and ensure smooth transitions
- [ ] Test all routes, navigation, and forms for SPA behavior

### Phase 4: Testing & QA
- [ ] Set up Jest and React Testing Library for unit/component tests
- [ ] Write/port tests for all major components and pages
- [ ] Perform manual QA for accessibility, responsiveness, and browser compatibility
- [ ] Validate all analytics and tracking integrations

### Phase 5: Documentation & Launch Preparation
- [ ] Update README.md with migration steps, new conventions, and scripts
- [ ] Update or rewrite all project documentation to remove Next.js references
- [ ] Review deployment-checklist.md for Vite/React specifics
- [ ] Prepare for deployment to AWS Amplify or other static hosting
- [ ] Final manual QA and launch

---

## 3. Migration Priorities & Conventions
- Use React functional components and hooks throughout
- Use React Router for all navigation (no file-based routing)
- Use Tailwind CSS utility classes for all styling
- All new code must be TypeScript
- Place assets in `src/assets/` and components in `src/components/`
- Use pnpm for all scripts and dependency management
- Remove all SSR, API routes, and Next.js-specific files/config
- Document any changes or issues in `docs/agent-work.md`

---

## 4. Risks & Mitigations
- **Feature gaps**: Compare each migrated page/component to the old app to ensure nothing is missed
- **API/SSR dependencies**: Refactor any logic that depended on server-side code to work client-side or via third-party services
- **Testing gaps**: Port or rewrite tests to ensure coverage in the new stack
- **Documentation drift**: Update all docs as migration progresses

---

## 5. Next Steps
1. Complete migration of all core pages and components
2. Validate feature parity and design consistency
3. Update documentation and checklists
4. Prepare for deployment and launch

---

*This plan supersedes all previous Next.js-specific implementation steps. All future work should follow the conventions and stack described above.*