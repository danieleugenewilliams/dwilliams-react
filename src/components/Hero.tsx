import { Reveal } from './Reveal';
import { SubscribeForm } from './SubscribeForm';
import { ArrowDown } from './Icons';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';

export function Hero() {
  return (
    <header className="cover" id="top">
      <div className="cover__bg" aria-hidden="true" />
      <div className="cover__gridlines" aria-hidden="true" />
      <div className="cover__portrait" aria-hidden="true" />
      <div className="cover__caption d-only" aria-hidden="true">
        <span>Daniel E. Williams · </span>
        <span className="coral">Fig. 1</span>
      </div>

      <div className="shell cover__inner">
        <Reveal className="cover__folio">
          <span className="mark">Daniel E. Williams</span>
          <span className="mark d-only">Vol. I · Coastal Virginia · Est. MMXXV</span>
          <span className="mark m-only">Vol. I · MMXXV</span>
        </Reveal>

        <Reveal className="cover__eyebrows">
          <span className="mark mark--coral">Architect / Operator · Coastal Virginia</span>
          <span className="mark">{`Claude Code for Non-Coders · ${CC4NC_SUBSCRIBERS.full} readers`}</span>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="cover__title">
            Point it<br />
            at what<br />
            <span className="coral">matters.</span>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="cover__dek">
            <span className="d-only">
              For twenty-five years I built software and led consulting teams. Now I build my
              own agents: the one that runs my training and sleep over Telegram, the memory
              layer behind my writing, the systems that hand me back my mornings. <b>AI collapsed
              the cost of expertise.</b> What's left is the question of what you point it at, and
              I write about that every week.
            </span>
            <span className="m-only">
              Twenty-five years building software for other people. Now I build my own
              agents. <b>AI collapsed the cost of expertise</b> — what's left is what you
              point it at. I write about that every week.
            </span>
          </p>
        </Reveal>

        <Reveal delay={2} className="cover__cta">
          <SubscribeForm
            caption={
              <>
                Claude Code for Non-Coders.
                <em className="subform__cadence"> Thursdays: one consequential idea, free. Tuesdays: the hands-on build, paid.</em>
              </>
            }
          />
          <a className="cover__scroll" href="#believe">
            Read what I believe <ArrowDown />
          </a>
        </Reveal>

        <Reveal delay={3} className="cover__meta">
          <div>
            <span className="k">Based</span>
            <span className="v">Coastal Virginia</span>
          </div>
          <div>
            <span className="k">Newsletter</span>
            <span className="v">{`${CC4NC_SUBSCRIBERS.full} readers`}</span>
          </div>
          <div>
            <span className="k">Focus</span>
            <span className="v">Writing · Agents · Advisory</span>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
