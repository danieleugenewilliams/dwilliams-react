import { Reveal } from './Reveal';
import { SubscribeForm } from './SubscribeForm';

export function SubscribeSection() {
  return (
    <section className="section rule-top" id="subscribe">
      <div className="shell sp-subscribe-cta">
        <Reveal>
          <span className="eyebrow">// SUBSCRIBE</span>
          <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '18ch' }}>
            New here? Start with the{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>newsletter.</em>
          </h2>
          <p className="t-lead t-muted-new" style={{ marginTop: '1.25rem', maxWidth: '42ch' }}>
            One consequential idea, twice a week, free. Thirty-four thousand people read it.
          </p>
          <div style={{ marginTop: '1.75rem' }}>
            <SubscribeForm caption="Routes to Claude Code for Non-Coders on Substack. Unsubscribe anytime." />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
