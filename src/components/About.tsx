import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <>
      <SEO
        title="About — D. E. Williams + Co."
        description="D. E. Williams + Co. is an AI-native services company delivering workforce intelligence at scale. Founded by Daniel E. Williams, a 20+ year technology executive."
        url="/about"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero — photo background */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/profile/headshot2-hero.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 25%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-grid opacity-20" />
          </div>

          {/* Content — pinned to bottom */}
          <div className="relative z-10 container max-w-5xl pb-10 md:pb-16 pt-36 md:pt-44">
            <div className="font-mono text-sm text-white/60 mb-4 md:mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> cat about.md
            </div>
            <h1 className="text-page-hero font-mono font-bold text-white mb-3 md:mb-4 animate-fade-in-2">
              Daniel E. Williams
            </h1>
            <p className="font-mono text-sm md:text-lg text-terminal-cyan mb-4 md:mb-6 animate-fade-in-3">
              Founder & Chief AI Officer, D. E. Williams + Co.
            </p>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl animate-fade-in-4">
              I founded this company because I saw a gap. Organizations were either panicking
              about AI replacing their workforce or ignoring the problem entirely. Both responses
              are expensive. I built DE Williams + Co. to give organizations the data and clarity
              they need to navigate the transition.
            </p>
          </div>
        </section>

        {/* The Thesis */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // THE_THESIS
              </h2>
            </Reveal>
            <div className="space-y-6 text-foreground leading-relaxed">
              <Reveal delay={1}>
                <p>
                  AI is not coming for jobs in some abstract future—it's reshaping them now.
                  The Anthropic Economic Index shows 94% theoretical AI capability against only
                  33% observed usage. That gap is closing fast, and most organizations have no plan
                  for what happens when it does.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-muted-foreground">
                  The answer isn't "upskill everyone" or "automate everything." It's understanding,
                  at the task level, which roles will transform, which are at risk, and what
                  to do about it—with timelines, not guesses. That's what we built the{' '}
                  <Link to="/lab" className="text-terminal-cyan hover:underline">WARE Framework</Link>{' '}
                  to deliver.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Career Path */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // THE_PATH_HERE
              </h2>
            </Reveal>
            <div className="space-y-6 text-foreground leading-relaxed">
              <Reveal delay={1}>
                <p>
                  I started as a software engineer at <span className="font-semibold">SPS Technologies</span>,
                  then moved to the <span className="font-semibold">Federal Reserve Board</span> building
                  data platforms and web services. That's where I learned that the hardest problems in
                  technology aren't technical—they're about getting the right people aligned on what
                  to build and why.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-muted-foreground">
                  At <span className="font-semibold">SAIC</span> and then{' '}
                  <span className="font-semibold">Booz Allen Hamilton</span>, I moved into
                  consulting—winning $9M+ in new business by deploying Enterprise 2.0 solutions
                  for federal agencies, including a collaboration platform used by 2,400+ senior
                  VA executives.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="text-muted-foreground">
                  I led the Lexus digital portfolio at{' '}
                  <span className="font-semibold">Beyondsoft (formerly TPG)</span>, managing
                  $35M in programs. Then at{' '}
                  <span className="font-semibold">Pariveda Solutions</span>, I grew accounts, built
                  a national nonprofit vertical generating $6M+ annually, and led engagements
                  for the NFL, TaxAct, OMERS, and Daylight Transport.
                </p>
              </Reveal>
              <Reveal delay={4}>
                <p className="text-muted-foreground">
                  As a <span className="font-semibold">JFF/JFFLabs Fellow</span>, I worked at the
                  intersection of AI and workforce development—building GenAI prototypes for veteran
                  mobility initiatives and developing the thinking that became the WARE Framework.
                  In late 2024, I founded D. E. Williams + Co. to bring that work to market.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // IMPACT
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { metric: '$9M+', desc: 'New business won at Booz Allen Hamilton' },
                { metric: '$35M', desc: 'Digital portfolio managed for Lexus' },
                { metric: '$10M', desc: 'Data monetization investment at OMERS' },
                { metric: '$6M+', desc: 'Annual revenue from nonprofit vertical at Pariveda' },
                { metric: '$28K → $4M', desc: 'Grew Daylight Transport engagement in 9 months' },
                { metric: '#1 AWS Partner', desc: 'Revenue driver for Southern California in 2021' },
              ].map((item, i) => (
                <Reveal key={i} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div className="border border-border bg-card p-5 h-full">
                    <p className="font-mono text-metric-display font-semibold text-foreground mb-1">{item.metric}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The Company */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // THE_COMPANY
              </h2>
            </Reveal>
            <div className="space-y-6 text-foreground leading-relaxed">
              <Reveal delay={1}>
                <p>
                  D. E. Williams + Co. is an AI-native services company. We use AI to deliver
                  workforce intelligence at scale—from individual resilience assessments to
                  enterprise-wide transformation programs.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-muted-foreground">
                  Founded in 2024 and based in Virginia. Every time AI models improve, our
                  assessments get more accurate and our delivery gets faster. That's not a
                  marketing claim—it's how we built the stack.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-border bg-card p-6">
                    <h3 className="font-mono text-base font-semibold mb-3">What We've Built</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-terminal-cyan">→</span>
                        <Link to="/lab" className="hover:text-terminal-cyan transition-colors">
                          WARE Framework — workforce automation resilience engine
                        </Link>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-terminal-cyan">→</span>
                        <a href="https://localmemory.co" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-cyan transition-colors">
                          Local Memory — persistent AI knowledge management (open source)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-border bg-card p-6">
                    <h3 className="font-mono text-base font-semibold mb-3">Clients Served</h3>
                    <p className="text-sm text-muted-foreground">
                      NFL Digital Media, OMERS, TaxAct, Toyota/Lexus, Daylight Transport,
                      Stop Soldier Suicide
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // CREDENTIALS
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal delay={1}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-4">Education</h3>
                  <div className="font-mono text-sm text-muted-foreground space-y-2">
                    <p>MS, Technology Management — George Mason University</p>
                    <p>BS, Computer Science Technology — Bowie State University</p>
                    <p>CIO University Certificate — George Mason University</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-4">Certifications</h3>
                  <div className="font-mono text-sm text-muted-foreground space-y-2">
                    <p>Lean Six Sigma Green Belt — Dartmouth College</p>
                    <p>Project Management Professional (PMP)</p>
                    <p>Certified Scrum Master</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Advisory */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // ADVISORY
              </h2>
            </Reveal>
            <div className="space-y-4 text-foreground leading-relaxed">
              <Reveal delay={1}>
                <p>
                  <span className="font-semibold">George Mason University Alumni Association</span>
                  <span className="text-muted-foreground"> — At-Large Director</span>
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  <span className="font-semibold">George Mason Costello College of Business Alumni Board</span>
                  <span className="text-muted-foreground"> — Incoming President</span>
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p>
                  <span className="font-semibold">JFF/JFFLabs Fellow</span>
                  <span className="text-muted-foreground"> — AI + Workforce Development</span>
                </p>
              </Reveal>
              <Reveal delay={4}>
                <p>
                  <span className="font-semibold">Prominent Patriot Award</span>
                  <span className="text-muted-foreground"> — George Mason University, May 2024</span>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Published */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // PUBLISHED
              </h2>
            </Reveal>
            <div className="space-y-4">
              {[
                { href: 'https://www.techrepublic.com/article/how-cios-can-approach-digital-transformation-investments-to-increase-value/', title: '"How CIOs can approach digital transformation investments to increase value"', source: 'TechRepublic' },
                { href: 'https://readwrite.com/the-impact-of-ai-as-companies-address-the-skilled-labor-shortage/', title: '"The Impact of AI as Companies Address the Skilled Labor Shortage"', source: 'ReadWrite' },
                { href: 'https://readwrite.com/create-symbiotic-relationships-with-ai-in-business/', title: '"Create Symbiotic Relationships with AI in Business"', source: 'ReadWrite' },
                { href: 'https://dewilliamsco.substack.com/', title: 'D. E. Williams + Co. Insights', source: 'Substack' },
                { href: 'https://claudecodefornoncoders.substack.com/', title: 'Claude Code for Non-Coders', source: 'Substack' },
              ].map((item, i) => (
                <Reveal key={i} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground hover:text-terminal-cyan transition-colors"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-sm text-muted-foreground ml-2">— {item.source}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // CONNECT
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://www.linkedin.com/in/danieleugenewilliams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-terminal-cyan hover:underline"
                >
                  [LinkedIn]
                </a>
                <a
                  href="https://twitter.com/dewilliamsco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-terminal-cyan hover:underline"
                >
                  [Twitter]
                </a>
                <a
                  href="https://github.com/danieleugenewilliams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-terminal-cyan hover:underline"
                >
                  [GitHub]
                </a>
                <a
                  href="https://dewilliamsco.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-terminal-cyan hover:underline"
                >
                  [Newsletter]
                </a>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <Link to="/contact" className="btn-primary inline-block">
                [Get in Touch]
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
