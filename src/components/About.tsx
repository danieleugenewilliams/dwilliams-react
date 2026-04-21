import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';

const TIMELINE = [
  {
    year: '2024 →',
    company: 'D. E. Williams + Co.',
    role: 'Founder · AI Transformation Officer',
    desc: 'Strategic technology advisory specializing in AI product development, digital transformation, and workforce resilience. Built the WARE Framework and LocalMemory.co (85% weekly retention at beta).',
    tags: ['AI Strategy', 'WARE Framework', 'LocalMemory', 'Fractional CTO'],
    accentFirst: true,
  },
  {
    year: '2019–2024',
    company: 'Pariveda Solutions',
    role: 'Managing Principal · National Segment Lead',
    desc: 'Built a national nonprofit vertical generating $6M+ annually. Grew a T&L account from $28K to $4M+ in nine months. Drove $10M+ in AWS net-new revenue, #1 AWS partner driver in SoCal (2021).',
    tags: ['NFL Digital Media', 'TaxAct', 'OMERS', 'Daylight Transport'],
  },
  {
    year: '2017–2019',
    company: 'Beyondsoft Consulting',
    role: 'Senior Advisor · Product Lead, Key Accounts',
    desc: 'Managed Toyota & Lexus digital properties: 6M+ monthly visits, 564K leads annually. Led Lexus Retail Transformation discovery securing $1.5M dev/implementation budget. Managed $35M Lexus portfolio.',
    tags: ['Toyota', 'Lexus', '$35M portfolio'],
  },
  {
    year: '2010–2013',
    company: 'Booz Allen Hamilton',
    role: 'Associate · Enterprise Collaboration & Technology',
    desc: 'Won $9M+ new business as technical lead. Built the award-winning "Hello" employee networking app. Implemented FISMA-compliant internal cloud cutting data-center cost 66% across a $100M+ research program.',
    tags: ['Federal', 'Enterprise 2.0', '$9M+ won'],
  },
  {
    year: '2003–2010',
    company: 'SAIC · Federal Reserve Board',
    role: 'Senior Software Engineer · Senior Applications Analyst',
    desc: 'Led Federal Reserve Data Download, the first platform enabling statistical data sharing among the FRB, World Bank, IMF, and BLS.',
    tags: ['Federal Reserve', 'Data platforms'],
  },
];

const IMPACT = [
  { n: '$9M+', l: 'New business won', d: 'Technical lead on winning bids at Booz Allen Hamilton.' },
  { n: '$35M', l: 'Digital portfolio', d: 'Managed Lexus digital portfolio and retail transformation initiatives.' },
  { n: '$10M', l: 'Annual revenue enabled', d: 'Data rationalization strategy unlocking new financial data products across OMERS business units, approved by CEO executive team and board.' },
  { n: '$6M+', l: 'Annual revenue', d: "Built Pariveda's national nonprofit vertical from scratch." },
  { n: '$28K → $4M', l: 'In 9 months', d: 'Grew a Daylight Transport engagement through integrated strategy and build.' },
  { n: '#1 AWS', l: 'Partner driver · SoCal 2021', d: 'Drove recognition as top AWS revenue driver in Southern California.' },
];

const PUBLISHED = [
  { date: 'Sep 2023', title: 'A Framework for Building a Future-Ready Nonprofit', src: 'Pariveda Perspectives', href: 'https://parivedasolutions.com/resources/a-framework-for-building-a-future-ready-nonprofit/' },
  { date: 'Feb 2023', title: 'The Impact of AI as Companies Address the Skilled Labor Shortage', src: 'ReadWrite', href: 'https://readwrite.com/the-impact-of-ai-as-companies-address-the-skilled-labor-shortage/' },
  { date: 'Aug 2022', title: 'How CIOs can approach digital transformation investments to increase value', src: 'TechRepublic', href: 'https://www.techrepublic.com/article/how-cios-can-approach-digital-transformation-investments-to-increase-value/' },
  { date: 'Apr 2020', title: 'Create Symbiotic Relationships with AI in Business', src: 'ReadWrite', href: 'https://readwrite.com/create-symbiotic-relationships-with-ai-in-business/' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About — D. E. Williams + Co."
        description="D. E. Williams + Co. is an AI-native services company delivering workforce intelligence at scale. Founded by Daniel E. Williams, a 20+ year technology executive."
        url="/about"
      />

      {/* Hero */}
      <section className="about-hero" id="top">
        <div className="about-hero__bg" />
        <div className="about-hero__grid" />
        <div
          className="about-hero__portrait"
          style={{ backgroundImage: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--bg) 60%, transparent)), url('/images/profile/headshot2-hero.jpg')" }}
          aria-hidden="true"
        />
        <div className="shell about-hero__inner">
          <Reveal>
            <span className="eyebrow about-hero__eyebrow">
              <span>About</span>
              <span style={{ color: 'var(--fg-dim)' }}>— 01 / 07</span>
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="about-hero__title">
              Daniel E.<br />
              <span className="about-accent">Williams</span><em>.</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <div className="about-hero__role">
              Founder &amp; AI Transformation Officer · D. E. Williams + Co.
            </div>
          </Reveal>
          <Reveal delay={3}>
            <p className="about-hero__lede">
              I founded this company because I kept seeing the same pattern: organizations
              with ambitious AI strategies and very few people with the skills and experience
              to execute them. Pilots that never ship. Decks that collect dust. I built
              D. E. Williams + Co. to close that gap: embedded leadership that architects,
              builds, and delivers value.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <div className="about-hero__meta">
              <div><span className="k">Based</span><span className="v">Coastal Virginia</span></div>
              <div><span className="k">Founded</span><span className="v">2024</span></div>
              <div><span className="k">Focus</span><span className="v">AI · Workforce · Transformation</span></div>
              <div><span className="k">Capacity</span><span className="v">2–3 clients, by design</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Thesis */}
      <section className="thesis" id="thesis">
        <div className="shell thesis__grid">
          <Reveal>
            <span className="eyebrow">02 · The thesis</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="thesis__quote">
              AI isn't coming for jobs in some abstract <em>future.</em> It's reshaping them <span className="about-accent">now.</span>
            </h2>
            <p style={{ marginTop: '1.75rem', color: 'var(--fg-muted)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, maxWidth: '58ch' }}>
              The Anthropic Economic Index shows 94% theoretical AI capability against only
              33% observed usage. That gap is closing fast, and most organizations have no plan
              for what happens when it does.
            </p>
            <p style={{ marginTop: '1.25rem', color: 'var(--fg-muted)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, maxWidth: '58ch' }}>
              The answer isn't <span style={{ color: 'var(--fg)' }}>"upskill everyone"</span> or <span style={{ color: 'var(--fg)' }}>"automate everything."</span> It's understanding,
              at the task level, which roles will transform, which are at risk, and what to do
              about it, with timelines, not guesses.
            </p>
            <div className="stat-strip">
              <div className="stat-strip__item"><span className="n">94%</span><span className="l">AI capability (theory)</span></div>
              <div className="stat-strip__item"><span className="n">33%</span><span className="l">Observed usage</span></div>
              <div className="stat-strip__item"><span className="n">61pt</span><span className="l">Adoption gap</span></div>
              <div className="stat-strip__item"><span className="n">24 mo</span><span className="l">Closure window</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline" id="path">
        <div className="shell">
          <div className="timeline__head">
            <Reveal>
              <span className="eyebrow">03 · The path here</span>
              <h2 className="t-display" style={{ marginTop: '1.25rem', maxWidth: '18ch' }}>
                Twenty years in <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>five chapters</em>.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="t-lead t-muted-new">
                Engineer → consultant → operator → founder. Each chapter added a layer:
                code, delivery, P&amp;L, product. The stack is the point.
              </p>
            </Reveal>
          </div>

          <div className="tl">
            {TIMELINE.map((e, i) => (
              <Reveal key={e.company} className="tl__entry-wrap" delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="tl__entry">
                  <div className="tl__year">{e.year}</div>
                  <div className="tl__card">
                    <h3 className="tl__company">{e.company}</h3>
                    <span className="tl__role">{e.role}</span>
                    <p className="tl__desc">{e.desc}</p>
                    <div className="tl__tags">
                      {e.tags.map((t, j) => (
                        <span key={t} className={`tl__tag${e.accentFirst && j === 0 ? ' is-accent' : ''}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="about-impact" id="impact">
        <div className="shell impact__head">
          <Reveal>
            <span className="eyebrow">04 · Impact</span>
            <h2 className="t-display" style={{ marginTop: '1.25rem', maxWidth: '16ch' }}>
              The work, in <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>numbers.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="t-lead t-muted-new">
              Outcomes shipped, not activities billed. Each number came with a signed-off metric and a successor team trained to keep it going.
            </p>
          </Reveal>
        </div>
        <div className="shell">
          <Reveal className="impact__grid">
            {IMPACT.map((x) => (
              <div key={x.l} className="impact__cell">
                <span className="impact__cell__l">{x.l}</span>
                <div className="impact__cell__n">{x.n}</div>
                <p className="impact__cell__d">{x.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="about-creds" id="credentials">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">05 · Credentials</span>
            <h2 className="t-display" style={{ marginTop: '1.25rem', maxWidth: '24ch' }}>
              Table stakes, on the record.
            </h2>
          </Reveal>
          <div className="creds__grid">
            <Reveal delay={1}>
              <div className="creds__col">
                <h3>Education</h3>
                <ul>
                  <li>M.S. Technology Management<span className="muted">George Mason University</span></li>
                  <li>B.S. Computer Science Technology<span className="muted">Bowie State University</span></li>
                  <li>CIO University Certificate<span className="muted">George Mason University</span></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="creds__col">
                <h3>Certifications</h3>
                <ul>
                  <li>PMP<span className="muted">Project Management Professional</span></li>
                  <li>Lean Six Sigma Green Belt<span className="muted">Dartmouth College</span></li>
                  <li>Certified Scrum Master</li>
                  <li>AWS Solutions Architect</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="creds__col">
                <h3>Advisory &amp; Service</h3>
                <ul>
                  <li>At-Large Director<span className="muted">George Mason Alumni Association</span></li>
                  <li>Incoming President<span className="muted">Costello College of Business Alumni Board</span></li>
                  <li>Fractional CPO<span className="muted">JFF Solutions · JFFLabs</span></li>
                  <li>Prominent Patriot Award<span className="muted">George Mason, 2024</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Off the clock */}
      <section className="about-offhours" id="offhours">
        <div className="shell offhours__grid">
          <Reveal>
            <span className="eyebrow">06 · Off the clock</span>
            <div className="offhours__prose" style={{ marginTop: '1.5rem' }}>
              <p>Engineer's mind. <span className="about-accent">Artist's soul.</span></p>
              <p style={{ marginTop: '1.25rem' }}>
                Reading, writing, training, and time with my wife and two sons on the
                <em> beaches of coastal Virginia.</em> Startups, tech investing, and strong
                opinions about movies and TV.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="offhours__tiles">
              <div className="offhours__tile">
                <span className="k">Family</span>
                <span className="v">Wife &amp; two sons · VA beach</span>
              </div>
              <div className="offhours__tile">
                <span className="k">Craft</span>
                <span className="v">Reading, writing, training</span>
              </div>
              <div className="offhours__tile">
                <span className="k">Interests</span>
                <span className="v">Startups · tech investing</span>
              </div>
              <div className="offhours__tile">
                <span className="k">Guilty pleasure</span>
                <span className="v">Film &amp; TV commentary</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Published */}
      <section className="about-pub" id="published">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">07 · Published</span>
            <h2 className="t-display" style={{ marginTop: '1.25rem', maxWidth: '20ch' }}>
              Written and read. <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>Repeatedly.</em>
            </h2>
          </Reveal>
          <div className="pub__list">
            {PUBLISHED.map((p) => (
              <Reveal key={p.title}>
                <a className="pub__item" href={p.href} target="_blank" rel="noreferrer">
                  <span className="pub__date">{p.date}</span>
                  <span className="pub__title">"{p.title}"</span>
                  <span className="pub__source">→ {p.src}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Close */}
      <section className="about-cta-close" id="connect">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Connect</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="cta-close__title" style={{ marginTop: '1.5rem' }}>
              If this <em>sounds</em> like the shape of the<br />
              problem you're working on,<br />
              <span className="about-accent">let's talk.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="cta-close__ctas">
              <Link to="/contact" className="btn">Book a discovery call <ArrowRight /></Link>
              <a href="mailto:DanielEugeneWilliams@gmail.com" className="btn btn--ghost">Email directly</a>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="cta-close__socials">
              <a href="https://linkedin.com/in/danieleugenewilliams" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com/dewilliamsco" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://github.com/danieleugenewilliams" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://dewilliamsco.substack.com/" target="_blank" rel="noreferrer">Substack</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
