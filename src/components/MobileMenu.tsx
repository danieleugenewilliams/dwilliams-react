import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 text-foreground hover:text-terminal-cyan focus:outline-none focus:ring-2 focus:ring-terminal-cyan"
        aria-label="Open main menu"
        onClick={toggleMenu}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={closeMenu}
          />

          {/* Menu panel */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-zinc-900 border-l border-border shadow-xl">
            <div className="p-6 h-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-sm text-muted-foreground">// MENU</span>
                <button
                  type="button"
                  className="p-1 text-muted-foreground hover:text-foreground"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-1 bg-background">
                <Link
                  to="/"
                  className="block font-mono text-sm py-3 text-foreground hover:text-terminal-cyan transition-colors"
                  onClick={closeMenu}
                >
                  [home]
                </Link>
                <Link
                  to="/consulting"
                  className="block font-mono text-sm py-3 text-foreground hover:text-terminal-cyan transition-colors"
                  onClick={closeMenu}
                >
                  [consulting]
                </Link>
                <Link
                  to="/newsletters"
                  className="block font-mono text-sm py-3 text-foreground hover:text-terminal-cyan transition-colors"
                  onClick={closeMenu}
                >
                  [newsletters]
                </Link>
                <Link
                  to="/about"
                  className="block font-mono text-sm py-3 text-foreground hover:text-terminal-cyan transition-colors"
                  onClick={closeMenu}
                >
                  [about]
                </Link>
                <Link
                  to="/contact"
                  className="block font-mono text-sm py-3 text-foreground hover:text-terminal-cyan transition-colors"
                  onClick={closeMenu}
                >
                  [contact]
                </Link>
              </nav>

              {/* Divider */}
              <div className="my-8 border-t border-border"></div>

              {/* Social links */}
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/danieleugenewilliams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-xs text-muted-foreground hover:text-terminal-cyan transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://twitter.com/dewilliamsco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-xs text-muted-foreground hover:text-terminal-cyan transition-colors"
                >
                  Twitter →
                </a>
                <a
                  href="https://github.com/danieleugenewilliams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-xs text-muted-foreground hover:text-terminal-cyan transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
