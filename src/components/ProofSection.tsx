import { Reveal } from './Reveal';
import { ArrowUpRight } from './Icons';

interface ProofCard {
  label: string;
  title: string;
  body: string;
  href?: string;
  hrefLabel?: string;
  external?: boolean;
}

const CARDS: ProofCard[] = [
  {
    label: 'Product · live',
    title: 'LocalMemory',
    body: 'An open-source memory server for AI assistants. It gives Claude and other models memory that persists across conversations, running on your machine instead of a vendor’s. Sixty people pay for it.',
    href: 'https://localmemory.co',
    hrefLabel: 'localmemory.co',
    external: true,
  },
  {
    label: 'Personal · daily',
    title: 'My home agents',
    body: 'A Claude Code agent that runs my training, sleep, and health logging over Telegram. The clearest proof I have of the whole thesis: I built it, I own it, and it guards the mornings I care about instead of billing them to someone else.',
  },
  {
    label: 'Open source',
    title: 'zvec-go · agent-harness · othello-agent',
    body: 'The smaller pieces, built in the open, that the larger systems stand on.',
    href: 'https://github.com/danieleugenewilliams',
    hrefLabel: 'GitHub',
    external: true,
  },
  {
    label: 'Product · paid',
    title: 'WARE',
    body: 'A workforce-automation resilience assessment. A real product with paying customers, built and sold on its own.',
    href: 'https://automationresilience.com',
    hrefLabel: 'automationresilience.com',
    external: true,
  },
  {
    label: 'Before it was mine to own',
    title: 'Twenty-five years at scale',
    body: 'I did this for other people first: $2.5M saved at TaxAct, an account grown from $28K to $4M in nine months, $5M in annual savings at NFL Digital Media.',
    href: '#about',
    hrefLabel: 'Read the arc',
  },
];

export function ProofSection() {
  return (
    <section className="section rule-top" id="proof">
      <div className="shell proof__head">
        <Reveal>
          <span className="eyebrow">// PROOF</span>
          <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '22ch' }}>
            I don't just write about this. I{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>run my life on it.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="t-lead t-muted-new">
            The argument only counts if I'm living it, so here is the stack I actually own.
          </p>
        </Reveal>
      </div>

      <div className="shell">
        <Reveal className="sp-proof__grid">
          {CARDS.map((c) => (
            <article key={c.title} className="sp-proof__card">
              <span className="sp-proof__label">{c.label}</span>
              <h3 className="sp-proof__title">{c.title}</h3>
              <p className="sp-proof__body">{c.body}</p>
              {c.href && (
                <a
                  className="sp-proof__link"
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {c.hrefLabel} <ArrowUpRight size={13} />
                </a>
              )}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
