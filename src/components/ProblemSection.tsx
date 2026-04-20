import { Reveal } from './Reveal';

export function ProblemSection() {
  return (
    <section className="section rule-top" id="problem">
      <div className="shell problem__grid">
        <Reveal>
          <span className="eyebrow">01 — The problem</span>
          <h2 className="problem__quote" style={{ marginTop: '1.5rem' }}>
            Most companies are stuck between <em>AI</em> ambition and AI{' '}
            <span className="brand-accent">execution.</span>
          </h2>
        </Reveal>

        <Reveal delay={2} className="problem__body">
          <p>
            MIT research confirms it: despite $30–40 billion in enterprise GenAI investment,
            95% of organizations are getting zero return. Only 5% have crossed from pilot
            to production. The barrier isn't the technology — it's brittle workflows,
            lack of contextual learning, and misalignment with day-to-day operations.
          </p>
          <p>
            Closing that gap requires someone who has done it before.
          </p>
          <p style={{ color: 'var(--fg)', fontWeight: 500 }}>
            That's the work I do.
          </p>
          <span className="kicker">→ I've shipped through it. Repeatedly.</span>
        </Reveal>
      </div>
    </section>
  );
}
