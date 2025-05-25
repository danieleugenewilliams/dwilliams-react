# dewilliamsco-react

This project is a Vite + React (TypeScript) app, set up for migration from a Next.js codebase. It uses Tailwind CSS for styling and React Router for routing.

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Start the dev server:**
   ```sh
   pnpm run dev
   ```
   The app will be available at http://localhost:5173/

3. **Build for production:**
   ```sh
   pnpm run build
   ```
4. **Preview production build:**
   ```sh
   pnpm run preview
   ```

## Tailwind CSS Setup
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- Tailwind directives are included in `src/index.css`.

## Routing
- Use [React Router](https://reactrouter.com/) for all navigation and routing.
- No Next.js routing or SSR.

## Migration Notes
- Migrate pages/components from the old Next.js app as React components and add routes.
- No API routes or SSR: this is a static SPA.

## Contributing
- Use TypeScript for all code.
- Use Tailwind CSS for styling.
- Use `pnpm` for dependency management.

---

*Update this README as migration progresses.*
