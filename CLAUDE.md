# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start development server (available at http://localhost:5173/)
- `npm run build` - Build for production (outputs to dist/)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint on all TypeScript files
- `npm run test` - Run tests in watch mode with Vitest
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report

## Local Memory

Proactively use local-memory MCP to store, retrieve, update, and analyze memories to maintain context and build expertise over time. Store key insights including lessons learned, architectural decisions, development strategies, and project outcomes. Use semantic search and relationship mapping to find relevant memories across all projects and sessions.

## Architecture Overview

This is a Vite + React (TypeScript) single-page application migrated from Next.js. Key architectural decisions:

### Tech Stack
- **React 19** with functional components and hooks
- **TypeScript** for all code
- **Vite** for build tooling and dev server
- **React Router** for client-side routing (no SSR)
- **Tailwind CSS** with Typography plugin for styling
- **Vitest** with jsdom and React Testing Library for testing

### Project Structure
- `src/components/` - All React components
- `src/assets/` - Static assets (images, etc.)
- `src/test/` - Test setup and test files
- `src/main.tsx` - Application entry point
- `src/App.tsx` - Main app component with routing

### Key Components
- **Layout.tsx** - Main layout wrapper with navigation
- **ThemeProvider.tsx** - Dark/light theme management
- **Analytics.tsx** - Web vitals and analytics tracking
- **SEO.tsx** - React Helmet for meta tags
- **MobileMenu.tsx** - Mobile navigation

### Routing Structure
Routes are defined in App.tsx using React Router:
- `/` - Home page
- `/about` - About page
- `/services` - Services overview
- `/case-studies` - Case studies
- `/bio` - Bio page
- `/contact` - Contact page

### Styling Conventions
- Use Tailwind CSS utility classes
- Responsive design with mobile-first approach
- Dark/light theme support via ThemeProvider context
- Typography plugin for rich text content

### Testing Setup
- Vitest configured with jsdom environment
- React Testing Library for component testing
- Test setup file at `src/test/setup.ts`
- Global test configuration in vitest.config.ts

### Deployment
- Configured for AWS Amplify deployment
- Build artifacts output to `dist/` directory
- Uses `--legacy-peer-deps` for npm install compatibility