import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

// Minimal header for navigation
function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm shadow-sm transition-colors duration-300" role="banner" aria-label="Site Header">
      <div className="container mx-auto px-4 flex h-16 items-center">
        {/* Logo on the left */}
        <div className="flex-shrink-0 mr-auto md:mr-0 md:w-1/4">
          <Link to="/" className="font-bold text-2xl tracking-tight text-primary font-sans" aria-label="D. E. Williams & Co. Logo">
            D. E. Williams + Co.
          </Link>
        </div>
        
        {/* Centered navigation with theme toggle */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          <nav className="flex items-center gap-8" role="navigation" aria-label="Main Navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/case-studies" className="nav-link">Work</Link>
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
            <ThemeToggle />
          </nav>
        </div>
        
        {/* Mobile menu on the right */}
        <div className="md:hidden flex items-center ml-auto">
          <MobileMenu />
        </div>
        
        {/* Balancing space on the right for desktop */}
        <div className="hidden md:block md:w-1/4"></div>
      </div>
    </header>
  );
}

// Minimal footer
function Footer() {
  return (
    <footer className="mt-auto bg-muted text-muted-foreground w-full">
      <div className="container py-10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} D. E. Williams and Company. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/danieleugenewilliams/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://twitter.com/dewilliamsco" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

// Layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans transition-colors duration-300 w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 fade-in w-full overflow-x-hidden">
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
