import { Reveal } from './Reveal';
import { SubscribeForm } from './SubscribeForm';

export function SubscribeSection() {
  return (
    <section className="section subscribe" id="subscribe">
      <div className="shell">
        <Reveal className="subscribe__inner">
          <span className="mark subscribe__mark">// Start here</span>
          <h2 className="subscribe__title">
            New here? <em>Start with the newsletter.</em>
          </h2>
          <p className="subscribe__lead">
            One consequential idea, free every Thursday. Thirty-four thousand people read it.
          </p>
          <SubscribeForm />
          <p className="subscribe__fine">
            Routes to Claude Code for Non-Coders on Substack. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
