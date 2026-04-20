import { Reveal } from './Reveal';

const STEPS = [
  {
    n: '01',
    badge: '30 min · free',
    title: <>Discovery <em>call</em></>,
    desc: "You tell me what's stuck. I tell you if I can help. No deck, no pitch. Just a direct read on fit.",
    note: '→ Low friction by design',
  },
  {
    n: '02',
    badge: 'Paid engagement',
    title: <>Scoping <em>session</em></>,
    desc: "We map the problem, define success metrics, and build a work plan. You get a document you could hand to any implementer.",
    note: '→ Value on day one',
  },
  {
    n: '03',
    badge: 'Execution',
    title: <>Build, ship, <em>enable</em></>,
    desc: "I build. You ship. Your team learns. The engagement ends when something is live, measured, and owned internally.",
    note: '→ No lock-in, ever',
  },
];

export function HowItWorks() {
  return (
    <section className="section rule-top" id="how">
      <div className="shell">
        <div className="what__intro">
          <Reveal>
            <span className="eyebrow">05 · How it works</span>
            <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '20ch' }}>
              Three steps. No mystery.
            </h2>
          </Reveal>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i + 1) as 1 | 2 | 3} className="step">
              <span className="step__num">{s.n}</span>
              <span className="step__badge">{s.badge}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
              <span className="step__note">{s.note}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
