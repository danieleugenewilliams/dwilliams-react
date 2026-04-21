import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { useTheme } from "./ThemeProvider";
import { MobileMenu } from "./MobileMenu";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" data-scrolled={scrolled ? "true" : "false"} aria-label="Primary">
      <div className="shell nav__inner">
        <Link to="/" className="nav__brand" aria-label="D. E. Williams + Co., home">
          <span>D. E. Williams</span>
          <span className="mark">+</span>
          <span>Co.</span>
        </Link>

        <div className="nav__links">
          <Link className="nav__link" to="/services">Services</Link>
          <Link className="nav__link" to="/about">About</Link>
          <Link className="nav__link" to="/insights">Insights</Link>
          <Link className="nav__link" to="/lab">Lab</Link>
          <Link className="nav__link" to="/contact">Contact</Link>
        </div>

        <div className="nav__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link className="btn btn--ghost nav__cta-desktop" to="/contact" style={{ padding: "0.55rem 1rem" }}>
            Let's talk
          </Link>
          <div className="nav__mobile-toggle">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer-new">
      <div className="shell">
        <div className="footer-new__top">
          <div>
            <div className="footer-new__wordmark">
              D. E. Williams <em>+</em> Co.
            </div>
            <p className="footer-new__tagline">
              AI transformation leadership, embedded. Strategy, architecture, implementation,
              and team enablement from a single operator.
            </p>
          </div>
          <div className="footer-new__col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/lab">Lab</Link></li>
            </ul>
          </div>
          <div className="footer-new__col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:DanielEugeneWilliams@gmail.com">Email</a></li>
              <li><a href="https://linkedin.com/in/danieleugenewilliams" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://claudecodefornoncoders.substack.com" target="_blank" rel="noreferrer">Newsletter</a></li>
              <li><a href="https://github.com/danieleugenewilliams" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className="footer-new__col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-new__bottom">
          <span>© {new Date().getFullYear()} D. E. Williams and Company</span>
          <span>AI Transformation Leadership, Embedded.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden" style={{ background: "var(--bg)", color: "var(--fg)" }}>
      <Nav />
      <main className="flex-1 w-full overflow-x-hidden" style={{ paddingTop: "var(--nav-h)" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
