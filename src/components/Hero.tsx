import { Reveal } from './Reveal';
import { SubscribeForm } from './SubscribeForm';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';
import headshot from '../assets/headshot.jpg';

export function Hero() {
  return (
    <section className="sp-hero" id="top">
      <div className="shell sp-hero__inner">
        <div className="sp-hero__text">
          <Reveal className="sp-hero__eyebrows">
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" /> Architect / Operator · Coastal Virginia
            </span>
            <span className="eyebrow eyebrow--dim">
              Claude Code for Non-Coders · {CC4NC_SUBSCRIBERS.full} readers
            </span>
          </Reveal>

          <Reveal delay={1} as="h1" className="sp-hero__title">
            Point it at <span className="brand-accent">what matters.</span>
          </Reveal>

          <Reveal delay={2} className="sp-hero__dek">
            <p>
              For twenty-five years I built software and led consulting teams. Now I build
              my own agents: the one that runs my training and sleep over Telegram, the
              memory layer behind my writing, the systems that hand me back my mornings.
              AI collapsed the cost of expertise. What's left is the question of what you
              point it at, and I write about that every week.
            </p>
          </Reveal>

          <Reveal delay={3} className="sp-hero__cta">
            <SubscribeForm caption="Claude Code for Non-Coders. Free, Tuesdays and Thursdays." />
            <a href="#believe" className="sp-hero__scroll">
              Read what I believe ↓
            </a>
          </Reveal>
        </div>

        <Reveal delay={2} className="sp-hero__portrait">
          <img src={headshot} alt="Daniel E. Williams" loading="eager" />
        </Reveal>
      </div>
    </section>
  );
}
