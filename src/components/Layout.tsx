import React from "react";
import { Link } from "react-router-dom";

// Minimal header for navigation
function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm" role="banner" aria-label="Site Header">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-bold text-2xl tracking-tight text-brand-primary dark:text-brand-primary-dark transition-colors">
          D. E. Williams + Co.
        </Link>
        <nav className="hidden md:flex gap-8" role="navigation" aria-label="Main Navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/case-studies" className="nav-link">Case Studies</Link>
          <Link to="/bio" className="nav-link">Bio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a
            href="https://dewilliamsco.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Insights
          </a>
        </nav>
        {/* Mobile menu button (hamburger) */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-brand-primary dark:text-brand-primary-dark hover:bg-brand-primary/10 dark:hover:bg-brand-primary-dark/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
            aria-label="Open main menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

// Minimal footer
function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} D. E. Williams and Company. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/danieleugenewilliams/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://twitter.com/dewilliamsco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

// Layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 font-sans">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// Add to index.css:
// .nav-link {
//   @apply text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-primary-dark transition-colors px-2 py-1 rounded;
// }
// .text-brand-primary { @apply text-blue-900; }
// .text-brand-primary-dark { @apply text-blue-300; }
// .bg-brand-primary { @apply bg-blue-900; }
// .bg-brand-primary-dark { @apply bg-blue-300; }
