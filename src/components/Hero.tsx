import { Reveal } from './Reveal';
import { SubscribeForm } from './SubscribeForm';
import { ArrowDown } from './Icons';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';
import headshot from '../assets/headshot.jpg';

export function Hero() {
  return (
    <header className="cover" id="top">
      <div className="shell">
        <Reveal className="cover__folio">
          <span className="mark">Daniel E. Williams</span>
          <span className="mark">Vol. I · Coastal Virginia · Est. MMXXV</span>
        </Reveal>

        <div className="cover__grid">
          <div>
            <Reveal className="cover__eyebrows">
              <span className="mark mark--coral">Architect / Operator · Coastal Virginia</span>
              <span className="mark">Claude Code for Non-Coders · {CC4NC_SUBSCRIBERS.full} readers</span>
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
                For twenty-five years I built software and led consulting teams. Now I build my
                own agents: the one that runs my training and sleep over Telegram, the memory
                layer behind my writing, the systems that hand me back my mornings. <b>AI collapsed
                the cost of expertise.</b> What's left is the question of what you point it at, and
                I write about that every week.
              </p>
            </Reveal>

            <Reveal delay={2} className="cover__cta">
              <SubscribeForm
                caption={
                  <>
                    Claude Code for Non-Coders. <em>Tuesdays and Thursdays.</em>
                  </>
                }
              />
              <a className="cover__scroll" href="#believe">
                Read what I believe <ArrowDown />
              </a>
            </Reveal>
          </div>

          <Reveal delay={1} className="plate">
            <div className="plate__frame">
              <div className="plate__img">
                <img src={headshot} alt="Daniel E. Williams" />
              </div>
            </div>
            <div className="plate__cut">
              <span>Daniel E. Williams</span>
              <span className="coral">Fig. 1</span>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
