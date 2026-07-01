import { useState } from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';
import headshot from '../assets/headshot.jpg';

const CC4NC_SUBSCRIBE = 'https://claudecodefornoncoders.substack.com/subscribe';

export function Hero() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const url = email
      ? `${CC4NC_SUBSCRIBE}?email=${encodeURIComponent(email)}`
      : CC4NC_SUBSCRIBE;
    window.open(url, '_blank', 'noreferrer');
  };

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
            <form className="sp-subscribe" onSubmit={handleSubscribe}>
              <input
                className="sp-subscribe__input"
                type="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@work.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn sp-subscribe__btn">
                Subscribe <ArrowRight />
              </button>
            </form>
            <p className="sp-subscribe__caption">
              Claude Code for Non-Coders. Free, Tuesdays and Thursdays.
            </p>
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
