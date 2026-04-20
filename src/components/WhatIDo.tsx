import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const CELLS = [
  {
    num: 'A — Process → Architecture',
    title: <>Find where AI <em>actually</em> creates value.</>,
    desc: "Operations mapping to locate the leverage points — not where it sounds impressive, where it moves the business.",
  },
  {
    num: 'B — Implementation',
    title: <>Ship <em>production</em> systems, not prototypes.</>,
    desc: "Architecture, build, integration, and hardening. The work ends when something is making money — not when the slide deck ships.",
  },
  {
    num: 'C — Team enablement',
    title: <>Train your people to <em>own</em> it.</>,
    desc: "Knowledge transfer isn't a phase, it's the whole point. You walk away with an internal team that can maintain and extend.",
  },
];

export function WhatIDo() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="what__intro">
          <Reveal>
            <span className="eyebrow">02 — Services</span>
            <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '18ch' }}>
              I don't advise from the{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>sidelines</em>.
              I architect, build, and deploy.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <Link to="/services" className="btn btn--ghost">
              Full services <ArrowUpRight />
            </Link>
          </Reveal>
        </div>

        <Reveal className="what__grid">
          {CELLS.map((c) => (
            <div key={c.num} className="what__cell">
              <span className="what__cell__arrow"><ArrowUpRight /></span>
              <span className="what__cell__num">{c.num}</span>
              <h3 className="what__cell__title">{c.title}</h3>
              <p className="what__cell__desc">{c.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
