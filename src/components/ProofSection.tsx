import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight } from './Icons';

interface Spec {
  no: string;
  label: string;
  name: ReactNode;
  body: string;
  link?: string;
  href?: string;
  bridge?: boolean;
  metrics?: string[];
}

const SPECS: Spec[] = [
  {
    no: 'SP-01',
    label: 'Open source · paid',
    name: <>LocalMemory</>,
    body: "An open-source memory server for AI assistants. It gives Claude and other models memory that persists across conversations, running on your machine instead of a vendor's. Sixty people pay for it.",
    link: 'localmemory.co',
    href: 'https://localmemory.co',
  },
  {
    no: 'SP-02',
    label: 'Personal agent',
    name: (
      <>
        My home <em>agents</em>
      </>
    ),
    body: "A Claude Code agent that runs my training, sleep, and health logging over Telegram. It's the clearest proof I have of the whole thesis: I built it, I own it, and it guards the mornings I care about instead of billing them to someone else.",
  },
  {
    no: 'SP-03',
    label: 'Built in the open',
    name: (
      <>
        Open <em>source</em>
      </>
    ),
    body: 'zvec-go, agent-harness, othello-agent. The smaller pieces, built in the open, that the larger systems stand on.',
    link: 'github.com/danieleugenewilliams',
    href: 'https://github.com/danieleugenewilliams',
  },
  {
    no: 'SP-04',
    label: 'Product · paying customers',
    name: <>WARE</>,
    body: "A workforce-automation resilience assessment. It's a real product with paying customers, and it lives at automationresilience.com.",
    link: 'automationresilience.com',
    href: 'https://automationresilience.com',
  },
  {
    bridge: true,
    no: 'SP-05',
    label: 'Before it was mine to own',
    name: (
      <>
        At scale, for <em>others</em> first
      </>
    ),
    body: 'I did this at scale for other people before I did it for myself. That story is below, in About.',
    metrics: ['$2.5M saved · TaxAct', '$28K → $4M · 9 mo', '$5M/yr · NFL Digital Media'],
  },
];

export function ProofSection() {
  return (
    <section className="section" id="proof">
      <div className="shell">
        <div className="folio">
          <span className="folio__no">§ 05</span>
          <span className="folio__name">Proof</span>
          <span className="folio__rule" />
        </div>
        <Reveal>
          <h2 className="believe__lead" style={{ maxWidth: '20ch', marginTop: 0 }}>
            I don't just write about this. <em>I run my life on it.</em>
          </h2>
          <p className="serif-lead" style={{ marginTop: '1.25rem' }}>
            The argument only counts if I'm living it, so here is the stack I actually own.
          </p>
        </Reveal>

        <Reveal className="proof__grid">
          {SPECS.map((s) => (
            <div key={s.no} className={'spec' + (s.bridge ? ' spec--bridge' : '')}>
              <div className="spec__cat">
                <span className="spec__label">{s.label}</span>
                <span className="spec__no">{s.no}</span>
              </div>
              <h3 className="spec__name">{s.name}</h3>
              <p className="spec__body">{s.body}</p>
              {s.link && (
                <a className="spec__link" href={s.href} target="_blank" rel="noreferrer">
                  {s.link} <ArrowUpRight size={13} />
                </a>
              )}
              {s.metrics && (
                <div className="spec__metrics">
                  {s.metrics.map((m) => (
                    <span key={m} className="chip">
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
