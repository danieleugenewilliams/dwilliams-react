import { Reveal } from './Reveal';

export function Thesis() {
  return (
    <section className="sp-thesis" id="thesis">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">// THESIS</span>
        </Reveal>
        <Reveal delay={1}>
          <blockquote className="sp-thesis__quote">
            We automate tasks that enhance human flourishing. We resist automation that
            encroaches on <span className="brand-accent">human judgment.</span>
          </blockquote>
        </Reveal>
        <Reveal delay={2}>
          <p className="sp-thesis__gloss">
            That is not a position against AI. It is a position against handing over the one
            part of the work that was always yours: the judgment that made you worth listening
            to in the first place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
