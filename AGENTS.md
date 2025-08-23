# Agent Guidelines for dewilliamsco-react

## Local Memory

Proactively use local-memory MCP to store, retrieve, update, and analyze memories to maintain context and build expertise over time. Store key insights including lessons learned, architectural decisions, development strategies, and project outcomes. Use semantic search and relationship mapping to find relevant memories across all projects and sessions.

## Build/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript check + Vite build)
- `npm run lint` - Run ESLint
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage
- `vitest src/test/Home.test.tsx` - Run single test file

## Code Style
- **TypeScript**: All new code must be TypeScript with proper types
- **Components**: Use React functional components with hooks, export default
- **Imports**: Use named imports from React (`import React, { useState }`) when using hooks
- **Styling**: Use Tailwind CSS utility classes exclusively
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Error handling**: Use try/catch with setError state for async operations
- **State**: Use useState for local state, proper TypeScript types for state objects

## Architecture
- Vite + React SPA (no SSR)
- React Router for routing
- Components in `src/components/`
- Tests in `src/test/` using Vitest + Testing Library
- Assets in `src/assets/` and `public/`