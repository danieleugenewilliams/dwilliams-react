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
- `npm run deploy` - Build and deploy to S3 + CloudFront
- `npm run aws:setup` - One-time AWS infrastructure provisioning

## Local Memory

Proactively use local-memory MCP to store, retrieve, update, and analyze memories to maintain context and build expertise over time. Store key insights including lessons learned, architectural decisions, development strategies, and project outcomes. Use semantic search and relationship mapping to find relevant memories across all projects and sessions.

## Architecture Overview

This is a Vite + React (TypeScript) single-page application. The site serves as the online presence for D. E. Williams + Co., a fractional CTO and AI advisory practice founded by Daniel E. Williams.

### Positioning

The primary audience is CEOs, COOs, and board members evaluating fractional technology leadership. The site positions Daniel as a Fractional CTO and Chief AI Officer with 20+ years of enterprise technology experience. Products live on a secondary `/lab` page; the homepage focuses on consulting credentials and proof points.

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
- **ConsultingHero.tsx** - Homepage hero section (workforce intelligence positioning)
- **CredentialsBanner.tsx** - Social proof strip on homepage (experience, impact, roles)
- **Services.tsx** - 6-tier workforce intelligence services page
- **Insights.tsx** - Newsletter/Substack links page
- **About.tsx** - Founder story with AI-native thesis
- **Lab.tsx** - WARE Framework showcase, LocalMemory, and ProductGrid
- **Partners.tsx** - Channel partner information
- **Assessment.tsx** - WARE assessment waitlist page
- **ProductGrid.tsx** - Product portfolio display (lives on /lab page)
- **ProductCard.tsx** - Individual product card
- **StatusBadge.tsx** - Product status indicator (LIVE, BETA, IN DEV, PRE-PILOT)
- **ThemeProvider.tsx** - Dark/light theme management

### Routing Structure
Routes are defined in App.tsx using React Router:
- `/` - Homepage with workforce intelligence hero, credentials, and proof points
- `/services` - 6-tier workforce intelligence services (Free → Enterprise)
- `/insights` - Newsletter links (Substack)
- `/about` - Founder story and company info
- `/lab` - WARE Framework, LocalMemory, and open source projects
- `/contact` - Contact form with audience-specific CTAs
- `/assessment` - WARE assessment waitlist
- `/partners` - Channel partner information
- `/privacy` - Privacy policy

Legacy routes redirect to new pages:
- `/bio` → `/about`
- `/consulting` → `/services`
- `/newsletters` → `/insights`
- `/case-studies` → `/`

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
Product information is defined in `ProductGrid.tsx` and displayed on the `/lab` page. Current products:
1. LocalMemory (LIVE) - localmemory.co - 60 paying customers
2. ReckonGrid (IN DEV) - consulting estimation via GenAI
3. Yasuke (PRE-PILOT) - managed personal AI agents (co-founded with Landon Gray)

Open source projects also listed on `/lab`: Othello Agent, Agent Harness, zvec-go

### Deployment
- Hosted on S3 + CloudFront (deployed via `npm run deploy`)
- Infrastructure provisioned via `npm run aws:setup` (one-time)
- Build artifacts output to `dist/` directory
- S3 bucket: `dewilliamsco-site` (all public access blocked, OAC only)
- CloudFront handles HTTPS, caching, SPA routing, and security headers
- Tiered cache-control: immutable for hashed assets, no-cache for index.html
- `.env.production` contains real values (gitignored); `.env.production.example` is the template
