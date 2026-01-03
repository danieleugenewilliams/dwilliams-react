import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

function Header() {
  return (
    <header 
      className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-sm"
      role="banner" 
      aria-label="Site Header"
    >
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-mono text-sm font-semibold text-foreground hover:text-terminal-cyan transition-colors"
          aria-label="D. E. Williams + Co. Home"
        >
          DEW+Co
        </Link>
        
        {/* Desktop navigation */}
        <nav 
          className="hidden md:flex items-center gap-1" 
          role="navigation" 
          aria-label="Main Navigation"
        >
          <Link to="/" className="nav-link">home</Link>
          <Link to="/lab" className="nav-link">lab</Link>
          <a
            href="https://dewilliamsco.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            newsletter
          </a>
          <Link to="/contact" className="nav-link">contact</Link>
          <div className="ml-2 pl-2 border-l border-border">
            <ThemeToggle />
          </div>
        </nav>
        
        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} D. E. Williams and Company
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/danieleugenewilliams/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/dewilliamsco" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/danieleugenewilliams" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <Link 
              to="/privacy" 
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
