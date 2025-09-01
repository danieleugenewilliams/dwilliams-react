import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
        aria-label="Open main menu"
        onClick={toggleMenu}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={closeMenu} />
          <div className="fixed top-0 right-0 w-64 h-full bg-card shadow-lg">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-xl text-primary">Menu</span>
                <button
                  type="button"
                  className="p-2 rounded-md text-primary hover:bg-accent"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-4 bg-background p-4 rounded-lg">
                <Link 
                  to="/" 
                  className="block nav-link text-lg py-2" 
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className="block nav-link text-lg py-2" 
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link 
                  to="/case-studies" 
                  className="block nav-link text-lg py-2" 
                  onClick={closeMenu}
                >
                  Work
                </Link>
                <Link 
                  to="/bio" 
                  className="block nav-link text-lg py-2" 
                  onClick={closeMenu}
                >
                  Bio
                </Link>
                <Link 
                  to="/contact" 
                  className="block nav-link text-lg py-2" 
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <a
                  href="https://dewilliamsco.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block nav-link text-lg py-2"
                  onClick={closeMenu}
                >
                  Insights
                </a>
                <div className="mt-4 pt-4 border-t border-border flex items-center">
                  <span className="text-muted-foreground mr-3">Theme:</span>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
