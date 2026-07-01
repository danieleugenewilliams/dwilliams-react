import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';

export function WorkWithMe() {
  return (
    <section className="section rule-top" id="work-with-me">
      <div className="shell">
        <div className="sp-work__head">
          <Reveal>
            <span className="eyebrow">// WORK WITH ME</span>
            <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '24ch' }}>
              The writing comes first. This is what happens{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>after you've read enough of it.</em>
            </h2>
          </Reveal>
        </div>

        <div className="sp-work__grid">
          <Reveal delay={1} className="sp-work__block">
            <h3 className="sp-work__label">Advisory</h3>
            <p>
              A few companies a year bring me in on their specific problem: what to build,
              what to buy, where AI actually belongs in the operation, and how to keep their
              people the operators instead of the assistants. I take the ones I can genuinely
              move. It's inbound only, and it sits downstream of everything I publish here.
            </p>
          </Reveal>
          <Reveal delay={2} className="sp-work__block">
            <h3 className="sp-work__label">Speaking</h3>
            <p>
              I also give talks and run workshops: keynotes for leadership teams, hands-on
              sessions for the people who have to build the thing. If you want me in the room,
              start here.
            </p>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <a href="#contact" className="btn" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Start a conversation <ArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
