import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';
import { ArrowRight } from './Icons';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';

export function ConsultingHero() {
  return (
    <section className="hero" id="top">
      <svg className="hero__glyph" viewBox="0 0 600 600" aria-hidden="true">
        <defs>
          <linearGradient id="gGlyph" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--brand)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--fg)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="260" fill="none" stroke="url(#gGlyph)" strokeWidth="1.2" />
        <circle cx="300" cy="300" r="180" fill="none" stroke="var(--fg)" strokeWidth="0.8" opacity="0.45" />
        <circle cx="300" cy="300" r="100" fill="none" stroke="var(--fg)" strokeWidth="0.8" opacity="0.6" />
        <line x1="40" y1="300" x2="560" y2="300" stroke="var(--fg)" strokeWidth="0.5" opacity="0.3" />
        <line x1="300" y1="40" x2="300" y2="560" stroke="var(--fg)" strokeWidth="0.5" opacity="0.3" />
      </svg>

      <div className="shell">
        <Reveal className="hero__meta">
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
            <span className="dot" aria-hidden="true" />
            Selective engagements · 2026
          </span>
          <span className="eyebrow">Est. 2024 &nbsp;·&nbsp; Coastal VA</span>
        </Reveal>

        <Reveal delay={1} as="h1" className="t-hero hero__title">
          AI Transformation Leadership,{' '}
          <span className="brand-accent">Embedded</span>
        </Reveal>

        <Reveal delay={2} className="hero__sub">
          <div>
            <p className="t-lead t-muted-new">
              I serve as Fractional CTO &amp; AI Transformation Officer for organizations
              navigating the shift from AI experimentation to AI operations. Strategy,
              governance, architecture, and implementation. I connect executive vision
              to engineering execution, then train your team to own it.
            </p>
            <div className="hero__ctas" style={{ marginTop: '1.75rem' }}>
              <Link className="btn" to="/contact">
                Book a discovery call <ArrowRight />
              </Link>
              <Link className="btn btn--ghost" to="/services">
                See services
              </Link>
            </div>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="n">
                20+ <span style={{ fontSize: '0.6em', fontFamily: 'var(--font-mono-new)', color: 'var(--fg-muted)' }}>yrs</span>
              </span>
              <span className="l">Tech leadership</span>
            </div>
            <div className="hero__stat">
              <span className="n">
                $<CountUp to={35} format={(n) => Math.round(n).toString()} />M+
              </span>
              <span className="l">Managed portfolios</span>
            </div>
            <div className="hero__stat">
              <span className="n">
                $<CountUp to={9} format={(n) => Math.round(n).toString()} />M+
              </span>
              <span className="l">New business won</span>
            </div>
            <div className="hero__stat">
              <span className="n">
                <CountUp to={CC4NC_SUBSCRIBERS.count} format={(n) => Math.round(n).toString()} />K+
              </span>
              <span className="l">Newsletter subscribers</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
