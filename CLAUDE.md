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

This is a Vite + React (TypeScript) single-page application. The site serves as the umbrella brand for D. E. Williams + Co., a product lab building AI-native tools.

### Tech Stack
- **React 19** with functional components and hooks
- **TypeScript** for all code
- **Vite** for build tooling and dev server
- **React Router** for client-side routing (no SSR)
- **Tailwind CSS** for styling
- **Vitest** with jsdom and React Testing Library for testing

### Design System: "Lab Terminal"

The site uses a Terminal/CLI + Maker Space aesthetic:

- **Typography**: JetBrains Mono for headings/UI, Inter for body text
- **Colors**: Neutral base with terminal accent colors (cyan, green, amber)
- **Visual elements**: Subtle grid background, ASCII box-drawing accents, status badges
- **Components**: Terminal-style navigation, product cards with status indicators

### Project Structure
- `src/components/` - All React components
- `src/assets/` - Static assets (images, etc.)
- `src/test/` - Test setup and test files
- `src/main.tsx` - Application entry point
- `src/App.tsx` - Main app component with routing

### Key Components
- **Layout.tsx** - Main layout wrapper with navigation and footer
- **LabHero.tsx** - Homepage hero section
- **ProductGrid.tsx** - Product portfolio display
- **ProductCard.tsx** - Individual product card
- **StatusBadge.tsx** - Product status indicator (LIVE, BETA, IN DEV)
- **Lab.tsx** - About the lab page
- **ThemeProvider.tsx** - Dark/light theme management

### Routing Structure
Routes are defined in App.tsx using React Router:
- `/` - Homepage with product showcase
- `/lab` - About the lab, philosophy, founder bio
- `/contact` - Contact form
- `/privacy` - Privacy policy

Legacy routes redirect to new pages:
- `/about`, `/bio` → `/lab`
- `/services`, `/case-studies` → `/`

### Styling Conventions
- Use Tailwind CSS utility classes
- Monospace font (`font-mono`) for headings and UI elements
- Terminal-style status badges with bracket notation: `[LIVE]`, `[BETA]`
- Section headers use comment style: `// SECTION_NAME`
- Responsive design with mobile-first approach
- Dark/light theme support via ThemeProvider context

### Component Patterns
- Navigation links: `[text]` bracket style
- Buttons: `btn-primary` (bordered cyan) or `btn-ghost` (text only)
- Cards: `product-card` class with hover glow effect
- Status: `status-badge` with `status-live`, `status-beta`, `status-dev` variants

### Products Data
Product information is defined in `ProductGrid.tsx`. Current products:
1. LocalMemory (LIVE) - localmemory.co
2. World Memory (BETA)
3. ReckonGrid (IN DEV)
4. OutcomeStack (IN DEV)
5. AssessKit (IN DEV)

### Deployment
- Configured for AWS Amplify deployment
- Build artifacts output to `dist/` directory
- Uses `--legacy-peer-deps` for npm install compatibility
