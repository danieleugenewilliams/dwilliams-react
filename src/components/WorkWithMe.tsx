import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';

export function WorkWithMe() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="folio">
          <span className="folio__no">§ 06</span>
          <span className="folio__name">Work with me</span>
          <span className="folio__rule" />
        </div>
        <Reveal>
          <h2 className="believe__lead" style={{ maxWidth: '24ch', marginTop: 0 }}>
            The writing comes first. This is what happens <em>after you've read enough of it.</em>
          </h2>
        </Reveal>

        <div className="work__grid">
          <Reveal className="work__block">
            <span className="work__label">Advisory</span>
            <h3 className="work__title">
              A few companies <em>a year.</em>
            </h3>
            <p className="work__body">
              A few companies a year bring me in on their specific problem: what to build, what to
              buy, where AI actually belongs in the operation, and how to keep their people the
              operators instead of the assistants. I take the ones I can genuinely move. It's
              inbound only, and it sits downstream of everything I publish here.
            </p>
          </Reveal>

          <Reveal delay={1} className="work__block">
            <span className="work__label">Speaking</span>
            <h3 className="work__title">
              In the <em>room.</em>
            </h3>
            <p className="work__body">
              I also give talks and run workshops: keynotes for leadership teams, hands-on sessions
              for the people who have to build the thing. If you want me in the room, start here.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} style={{ marginTop: 'clamp(2.5rem,5vw,3.5rem)' }}>
          <a className="btn" href="#contact">
            One note, for both
            <span className="btn__arrow">
              <ArrowRight />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
