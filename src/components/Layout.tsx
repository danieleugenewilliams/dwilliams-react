import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Lenis from "lenis";

function Nav() {
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
        <Link to="/" className="nav__brand" aria-label="Daniel E. Williams, home">
          <b>Daniel E. Williams</b>
        </Link>

        <div className="nav__links">
          <a className="nav__link" href="/#writing">Writing</a>
          <a className="nav__link" href="/#proof">Proof</a>
          <a className="nav__link" href="/#work">Work with me</a>
          <a className="nav__link" href="/#about">About</a>
        </div>

        <div className="nav__actions">
          <a className="btn" href="/#subscribe" style={{ padding: "0.6rem 1.05rem" }}>
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__sign">
          <div className="footer__word">Daniel E. Williams</div>
          <p className="footer__tag">
            Architect and operator. Building in the open on the coast of Virginia.
          </p>
        </div>
        <div className="footer__links">
          <a className="footer__link" href="/#top">dewilliams.co</a>
          <a className="footer__link" href="https://localmemory.co" target="_blank" rel="noreferrer">localmemory.co</a>
          <a className="footer__link" href="https://claudecodefornoncoders.substack.com/" target="_blank" rel="noreferrer">Claude Code for Non-Coders</a>
          <a className="footer__link" href="https://linkedin.com/in/danieleugenewilliams" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="footer__link" href="https://github.com/danieleugenewilliams" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="footer__legal">
          <span>Shipping &gt; Pitching. — Daniel</span>
          <a className="footer__link" href="/#top" style={{ color: "var(--faint-on-dark)" }}>Back to top ↑</a>
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
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Nav />
      <main className="flex-1 w-full overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
