import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { ArrowRight } from "./Icons";

const NAV_LINKS = [
  { no: "02", label: "What I believe", href: "/#believe" },
  { no: "03", label: "Writing", href: "/#writing" },
  { no: "05", label: "Proof", href: "/#proof" },
  { no: "06", label: "Work with me", href: "/#work" },
  { no: "07", label: "About", href: "/#about" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div
        className="nav__scrim"
        data-open={open ? "true" : "false"}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="nav__menu" data-open={open ? "true" : "false"} id="mobile-menu" aria-hidden={!open}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} className="nav__menu__link" href={l.href} onClick={() => setOpen(false)}>
            <span>{l.label}</span>
            <span className="no">{`§ ${l.no}`}</span>
          </a>
        ))}
        <a className="btn" href="/#subscribe" onClick={() => setOpen(false)}>
          Subscribe
          <span className="btn__arrow">
            <ArrowRight />
          </span>
        </a>
      </div>

      <nav className="nav" data-scrolled={scrolled ? "true" : "false"} aria-label="Primary">
        <div className="shell nav__inner">
          <Link
            to="/"
            className="nav__brand"
            aria-label="Daniel E. Williams, home"
            onClick={() => setOpen(false)}
          >
            <b>Daniel E. Williams</b>
          </Link>

          <div className="nav__links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} className="nav__link" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav__actions">
            <a className="btn btn--sm d-only" href="/#subscribe">
              Subscribe
            </a>
            <button
              type="button"
              className="nav__burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
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
          <a className="footer__link footer__link--end" href="/#top">Back to top ↑</a>
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
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Lenis owns the scroll position, so native in-page anchor jumps (and
    // scrollIntoView) get reverted on the next frame. Route same-page hash
    // links ("#work" or "/#work") through lenis.scrollTo so the nav, mobile
    // menu, hero CTA, and footer "back to top" actually scroll — then sync the
    // URL hash ourselves, since preventDefault stops the browser from doing it.
    const onAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const hash = href.slice(href.indexOf("#"));
      if (hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return; // section isn't on this page — let the router navigate
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement);
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
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
