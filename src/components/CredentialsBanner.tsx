import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

const TAGS = [
  'MS Tech Management · GMU',
  'BS Computer Science · Bowie State',
  'PMP',
  'Lean Six Sigma Green Belt',
  'Certified Scrum Master',
  'GMU Alumni Board',
  'NIST AI RMF',
  'Responsible AI',
];

export function CredentialsBanner() {
  return (
    <section className="section bg-section" id="background">
      <div className="shell bg-section__inner">
        <Reveal>
          <span className="eyebrow">04 — Background</span>
          <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '16ch' }}>
            Two decades. One{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>operating system.</em>
          </h2>
          <p
            className="t-mono-sm t-muted-new"
            style={{ marginTop: '2rem', maxWidth: '30ch' }}
          >
            Engineer's mind, artist's soul.
            <br />
            Consulting rigor, founder instincts.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="bg-section__prose">
            <p>
              20+ years leading technology initiatives at Booz Allen Hamilton, Pariveda
              Solutions, and enterprise clients including Toyota/Lexus, NFL, OMERS,
              Federal Reserve Board, and TaxAct.
            </p>
            <p>
              I've won <span className="brand-accent">$9M+</span> in new business,
              built and led consulting practices generating $6M+ annually, and
              shipped solutions across financial services, transportation, healthcare,
              nonprofit, and media.
            </p>
          </div>
          <div className="credentials-tags">
            {TAGS.map((t) => (
              <span key={t} className="credentials-tag">{t}</span>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/about" className="btn btn--ghost" style={{ display: 'inline-flex' }}>
              Full background →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
