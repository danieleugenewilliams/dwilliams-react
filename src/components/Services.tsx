import { useState, useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';
import { ArrowRight, ArrowUpRight } from './Icons';

interface ServiceMeta {
  k: string;
  v: string;
}

interface ServiceScope {
  t: string;
  s: string;
}

interface ServiceItem {
  id: string;
  num: string;
  shape: string;
  nameHtml: ReactNode;
  headline?: boolean;
  line: ReactNode;
  meta: ServiceMeta[];
  scope: ServiceScope[];
  bestFor: string;
  cta: string;
  href: string;
  note?: string;
  anchor?: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'fractional',
    num: '01',
    shape: 'Retained · monthly',
    nameHtml: <>Fractional <em>CTO</em></>,
    headline: true,
    line: <><strong>Embedded AI transformation leadership</strong> for teams that need ongoing accountability — not a one-time deck.</>,
    meta: [
      { k: 'Cadence', v: '2–3 days / week' },
      { k: 'Min. term', v: '3 months' },
      { k: 'Framework', v: 'WARE' },
      { k: 'Price', v: 'Inquire' },
    ],
    scope: [
      { t: 'Architecture decisions', s: 'System design, platform selection, build-vs-buy calls' },
      { t: 'AI governance', s: 'Policy, guardrails, risk framing for regulated orgs' },
      { t: 'Vendor orchestration', s: 'RFPs, model procurement, integration oversight' },
      { t: 'Team building', s: 'Hiring bars, org design, IC enablement' },
      { t: 'Hands-on implementation', s: 'I ship code. Agents, pipelines, prototypes in-repo' },
    ],
    bestFor: 'Companies in the scale-up or transformation phase that need one accountable operator holding strategy and execution.',
    cta: 'Book a discovery call',
    href: '/contact',
  },
  {
    id: 'office-hours',
    num: '02',
    shape: '1:1 · ongoing',
    nameHtml: <>Office <em>Hours</em></>,
    line: <><strong>Weekly 1:1 consulting</strong> for founders and senior operators. One hour, unvarnished, on whatever's live.</>,
    meta: [
      { k: 'Cadence', v: 'Weekly · 60 min' },
      { k: 'Format', v: 'Video + Slack' },
      { k: 'Min. term', v: 'Month-to-month' },
      { k: 'Price', v: 'Inquire' },
    ],
    scope: [
      { t: 'Weekly hour', s: 'Standing 60-min call, agenda set by you' },
      { t: 'Shared Slack channel', s: 'Async between sessions, within reason' },
      { t: 'Doc review', s: 'I read strategy docs, PRDs, architecture drafts' },
      { t: 'Intro network', s: 'Access to operators, hires, and vendors I trust' },
    ],
    bestFor: 'Founders and heads-of who want a sparring partner — not a consultant, not a committee.',
    cta: 'Request a slot',
    href: '/contact',
    note: 'Six seats, replaced as they open.',
  },
  {
    id: 'workshop',
    num: '03',
    shape: '1–3 days · on-site',
    nameHtml: <>Keynote <em>/</em> Workshop</>,
    line: <><strong>Team training and keynotes</strong> on AI-native development, the WARE framework, and what's actually working in the field.</>,
    meta: [
      { k: 'Length', v: '1–3 days' },
      { k: 'Audience', v: 'Exec · Eng · Ops' },
      { k: 'Format', v: 'On-site or remote' },
      { k: 'Price', v: 'Inquire' },
    ],
    scope: [
      { t: 'Exec keynote', s: '45–60 min + Q&A. AI strategy, workforce impact' },
      { t: 'Eng workshop', s: '1–2 days hands-on. Claude Code, agents, eval' },
      { t: 'Ops playbook', s: 'Half-day. Governance, guardrails, vendor selection' },
      { t: 'Custom', s: "Tell me your agenda; I'll shape the session" },
    ],
    bestFor: 'Leadership offsites, engineering all-hands, and customer events where you need credible AI content — not slideware.',
    cta: 'Check a date',
    href: '/contact',
    note: 'Travel billed at cost.',
  },
  {
    id: 'ware',
    num: '04',
    shape: 'Self-serve · from $0',
    nameHtml: <>WARE <em>Assessments</em></>,
    anchor: 'ware',
    line: <>The <strong>WARE framework</strong> as a self-serve product. Score your role — or your whole org — at three tiers.</>,
    meta: [
      { k: 'Delivery', v: 'Self-serve' },
      { k: 'From', v: '$0' },
      { k: 'Hosted at', v: 'automationresilience.com' },
      { k: 'Volume', v: '50/mo (Pro)' },
    ],
    scope: [
      { t: 'Free tier', s: '$0 · resilience score + 2 analyses' },
      { t: 'Single Report', s: '$9.99 · full task breakdown, PDF, $6 for .edu' },
      { t: '5-Pack bundle', s: '$40 · five reports, 20% off per report' },
      { t: '10-Pack bundle', s: '$70 · ten reports, 30% off per report' },
      { t: 'Professional', s: '$99.99/mo · up to 50 analyses for coaches & workforce leaders' },
    ],
    bestFor: 'Individuals, students, and workforce-development leaders who want the framework without a retainer.',
    cta: 'See tiers below',
    href: '#ware',
    note: 'Full framework at automationresilience.com.',
  },
];

function ServicesHero() {
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollToService = (id: string) => {
    const el = document.getElementById('svc-' + id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('svc:expand', { detail: { id } }));
  };

  return (
    <section className="sv-hero" id="top">
      <div className="sv-hero__bg" />
      <div className="sv-hero__grid" />
      <div className="shell sv-hero__inner">
        <Reveal>
          <div className="sv-hero__meta">
            <span className="dot" />
            <span>Advisory &amp; Transformation</span>
            <span style={{ color: 'var(--fg-dim)' }}>/</span>
            <span>Four ways to work together</span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="sv-hero__title">
            Four ways <em>to</em> put one<br />
            <span className="accent">operator</span> on the floor.
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="sv-hero__lede">
            From a <strong>$0 self-serve assessment</strong> to a <strong>retained Fractional CTO
            engagement</strong>. Pick the shape that fits the week you're in. Click a row to jump
            straight to the detail.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="idx" role="list" aria-label="Service index">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                role="listitem"
                className="idx__row"
                data-active={hovered === s.id ? 'true' : 'false'}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => scrollToService(s.id)}
                onKeyDown={(e) => { if (e.key === 'Enter') scrollToService(s.id); }}
                tabIndex={0}
              >
                <span className="idx__num">{s.num}</span>
                <span className="idx__label">{s.nameHtml}</span>
                <span className="idx__shape">{s.shape}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  svc: ServiceItem;
  expanded: boolean;
  onToggle: () => void;
}

function ServiceCard({ svc, expanded, onToggle }: ServiceCardProps) {
  const isExternal = svc.href.startsWith('http') || svc.href.startsWith('#');

  return (
    <article
      className="svc"
      data-expanded={expanded ? 'true' : 'false'}
      data-headline={svc.headline ? 'true' : 'false'}
      id={'svc-' + svc.id}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
    >
      <div className="svc__top">
        <span className="svc__num">// {svc.num}</span>
        {svc.headline && <span className="svc__headline-tag">Most requested</span>}
      </div>
      <h3 className="svc__name">{svc.nameHtml}</h3>
      <p className="svc__line">{svc.line}</p>

      <div className="svc__meta">
        {svc.meta.map((m, i) => (
          <div key={i}>
            <div className="svc__meta__k">{m.k}</div>
            <div className="svc__meta__v">{m.v}</div>
          </div>
        ))}
      </div>

      <div className="svc__expand">
        <span className="svc__expand__plus">{expanded ? '×' : '+'}</span>
        <span>{expanded ? 'Hide details' : 'Expand'}</span>
      </div>

      {expanded && (
        <div className="svc__drawer" onClick={(e) => e.stopPropagation()}>
          <div>
            <h4>What's in scope</h4>
            <ul>
              {svc.scope.map((it, i) => (
                <li key={i}>
                  {it.t}
                  <span>{it.s}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="svc__drawer__side">
            <div className="svc__drawer__for">
              <span className="label">Best for</span>
              {svc.bestFor}
            </div>
            {isExternal ? (
              <a className="svc__drawer__cta" href={svc.href}>
                {svc.cta} <ArrowRight />
              </a>
            ) : (
              <Link className="svc__drawer__cta" to={svc.href}>
                {svc.cta} <ArrowRight />
              </Link>
            )}
            {svc.note && <div className="svc__drawer__note">{svc.note}</div>}
          </aside>
        </div>
      )}
    </article>
  );
}

function Catalog() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const onExpand = (e: Event) => {
      const id = (e as CustomEvent<{ id: string }>).detail.id;
      setExpandedId(id);
    };
    window.addEventListener('svc:expand', onExpand);
    return () => window.removeEventListener('svc:expand', onExpand);
  }, []);

  const toggle = (id: string) => setExpandedId((cur) => (cur === id ? null : id));

  return (
    <section className="cat" id="catalog">
      <div className="shell">
        <div className="cat__head">
          <Reveal>
            <div>
              <span className="eyebrow">// THE_CATALOG</span>
              <h2 className="t-display" style={{ marginTop: '1.25rem', maxWidth: '22ch' }}>
                Click any card <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>to expand.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="t-lead t-muted" style={{ maxWidth: '38ch' }}>
              One operator, four engagement shapes. Scope and cadence are listed up
              front. No decks required.
            </p>
          </Reveal>
        </div>

        <div className="cat__grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
              <ServiceCard
                svc={s}
                expanded={expandedId === s.id}
                onToggle={() => toggle(s.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WareTiers() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      unit: '',
      for: 'Anyone',
      desc: 'AI resilience score and a basic risk summary. Two free analyses to explore.',
      features: ['AI resilience score (0–100)', 'Risk category assessment', 'Limited recommendations', '2 analyses included'],
      cta: 'Try it free',
      popular: false,
    },
    {
      name: 'Single Report',
      price: '$9.99',
      unit: 'one-time',
      for: 'Individuals & students',
      desc: 'Full task-level breakdown with strategic recs and exportable PDF. $6 student rate with .edu.',
      features: ['Full task-level risk breakdown', 'All strategic recommendations', 'Exportable PDF report', 'Scoring transparency', '$6 student rate with .edu'],
      cta: 'Get your report',
      popular: true,
    },
    {
      name: 'Professional',
      price: '$99.99',
      unit: '/ month',
      for: 'Coaches & workforce leaders',
      desc: 'Up to 50 analyses per month for coaches, career advisors, and workforce development leaders assessing multiple roles.',
      features: ['50 analyses / month', 'All report features', 'Analysis history & tracking', 'Priority support', 'Cancel anytime'],
      cta: 'Go Professional',
      popular: false,
    },
  ];

  const bundles = [
    {
      name: '5-Pack',
      price: '$40',
      unit: 'one-time',
      per: '$8.00 / report',
      save: 'Save 20%',
      desc: 'Five complete reports. For advisors running a small cohort or teams piloting the framework.',
    },
    {
      name: '10-Pack',
      price: '$70',
      unit: 'one-time',
      per: '$7.00 / report',
      save: 'Save 30%',
      desc: 'Ten complete reports. Best value per report — ideal for a department, class, or workshop.',
    },
  ];

  return (
    <section className="ware" id="ware">
      <div className="shell">
        <div className="ware__head">
          <Reveal>
            <div>
              <span className="eyebrow">// WARE_TIERS</span>
              <h2 className="ware__lede" style={{ marginTop: '1.25rem' }}>
                The framework — <em>self-serve,</em> <span className="accent">three tiers.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="ware__side">
              <p>
                <strong>WARE</strong> powers every engagement above. It's also a standalone
                product at{' '}
                <a href="https://automationresilience.com" target="_blank" rel="noopener noreferrer">
                  automationresilience.com
                </a>
                {' '}— from a free score to unlimited analyses for workforce leaders.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="tiers">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
              <div className="tier" data-popular={t.popular ? 'true' : 'false'}>
                <div>
                  <div className="tier__name">{t.name}</div>
                  <div className="tier__price" style={{ marginTop: '0.6rem' }}>
                    {t.price}{t.unit && <span className="unit">{t.unit}</span>}
                  </div>
                </div>
                <div className="tier__for">For — {t.for}</div>
                <p className="tier__desc">{t.desc}</p>
                <ul className="tier__list">
                  {t.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a className="tier__cta" href="https://automationresilience.com" target="_blank" rel="noopener noreferrer">
                  {t.cta} <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <div className="bundles">
            <div className="bundles__head">
              <span className="eyebrow">// BUNDLES</span>
              <h3 className="bundles__title">
                Buying more than one? <em>Save per report.</em>
              </h3>
              <p className="bundles__sub">
                Prepaid credits on the Single Report tier. No subscription. Use anytime.
              </p>
            </div>
            <div className="bundles__grid">
              {bundles.map((b) => (
                <a
                  key={b.name}
                  className="bundle"
                  href="https://automationresilience.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bundle__top">
                    <span className="bundle__name">{b.name}</span>
                    <span className="bundle__save">{b.save}</span>
                  </div>
                  <div className="bundle__price">
                    {b.price}<span className="unit">{b.unit}</span>
                  </div>
                  <div className="bundle__per">{b.per}</div>
                  <p className="bundle__desc">{b.desc}</p>
                  <div className="bundle__cta">
                    Buy bundle <ArrowUpRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SvClose() {
  return (
    <section className="sv-close" id="get-started">
      <div className="shell">
        <Reveal>
          <div className="sv-close__card">
            <div className="sv-close__inner">
              <div>
                <span className="eyebrow">// GET_STARTED</span>
                <h2 className="sv-close__title" style={{ marginTop: '1.25rem' }}>
                  Not sure which <em>shape</em> fits?<br />
                  <span className="accent">Thirty minutes</span> settles it.
                </h2>
              </div>
              <div>
                <p className="sv-close__side">
                  Book a discovery call — no obligation. We'll walk the problem, decide
                  whether WARE is the right entry point, and whether a retainer makes sense.
                </p>
                <div className="sv-close__ctas">
                  <Link className="btn" to="/contact">
                    Book a discovery call <ArrowRight />
                  </Link>
                  <a className="btn btn--ghost" href="https://automationresilience.com" target="_blank" rel="noopener noreferrer">
                    Try free WARE <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <SEO
        title="Services — D. E. Williams + Co."
        description="Fractional CTO & AI Transformation Officer. Embedded advisory leadership and WARE Framework-powered assessment services."
        keywords="fractional CTO, AI transformation, embedded advisory, WARE Framework, workforce intelligence"
        url="/services"
      />
      <main>
        <ServicesHero />
        <Catalog />
        <WareTiers />
        <SvClose />
      </main>
    </>
  );
}
