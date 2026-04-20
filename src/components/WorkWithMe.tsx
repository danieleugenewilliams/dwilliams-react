import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function WorkWithMe() {
  return (
    <section className="section cta-section" id="contact-cta">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">07 — Work with me</span>
          <h2 className="cta-section__title" style={{ marginTop: '1.5rem' }}>
            Serious about AI transformation?
            <br />
            <span className="brand-accent">Let's talk.</span>
          </h2>
          <p className="cta-section__sub">
            I take 2–3 clients at a time. If your organization needs AI transformation
            leadership — not just AI tools — tell me what's stuck. I'll reply within
            two business days.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn">
              Book a discovery call <ArrowRight />
            </Link>
            <a
              href="https://automationresilience.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Take the Free WARE Assessment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
