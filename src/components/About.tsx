import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <>
      <SEO
        title="Daniel E. Williams — Fractional CTO & Chief AI Officer"
        description="20+ years leading technology initiatives at Booz Allen Hamilton, Pariveda Solutions, Toyota/Lexus, and more. Fractional CTO helping companies move from AI experiments to AI results."
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
            {/* Gradient overlay — dark from bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            {/* Subtle grid pattern overlay to maintain terminal feel */}
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
              Fractional CTO | Chief AI Officer | Technology Executive
            </p>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl animate-fade-in-4">
              I help companies cut through the AI noise and ship real solutions. 20+ years
              of enterprise technology work across financial services, automotive, healthcare,
              nonprofit, and government—from hands-on engineering to executive advisory.
            </p>
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
                { metric: '$10M', desc: 'Data monetization investment authorized at OMERS' },
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

        {/* Career */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // CAREER
              </h2>
            </Reveal>
            <div className="space-y-6 text-foreground leading-relaxed">
              <Reveal delay={1}>
                <p>
                  I started my career as a software engineer at the Federal Reserve Board,
                  building data platforms and web services in Java and C#. That's where I learned
                  that the hardest problems in technology aren't technical—they're about getting
                  the right people aligned on what to build and why.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-muted-foreground">
                  At Booz Allen Hamilton, I moved into consulting—winning $9M+ in new business
                  by deploying Enterprise 2.0 solutions for federal agencies, including a
                  collaboration platform used by 2,400+ senior VA executives. I learned to
                  translate technology capabilities into language that decision-makers act on.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="text-muted-foreground">
                  I then led the Lexus digital portfolio at Beyondsoft (formerly TPG), managing
                  $35M in programs with 11 direct reports. The LexusPlus transformation—a $10M
                  initiative that had failed multiple times—succeeded because I talked to every
                  stakeholder across brands, dealers, and regions to build a coherent strategy.
                  That pattern—initiatives fail from misalignment, not technology—has defined
                  my career.
                </p>
              </Reveal>
              <Reveal delay={4}>
                <p className="text-muted-foreground">
                  At Pariveda Solutions, I grew accounts, built a national nonprofit vertical
                  generating $6M+ annually, and led complex engagements for the NFL, TaxAct,
                  OMERS, and Daylight Transport. In late 2024, I founded D. E. Williams + Co.
                  to focus full-time on helping companies move from AI experiments to AI results.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // HOW_I_WORK
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-foreground leading-relaxed mb-8 max-w-2xl">
                Fractional keeps incentives aligned—minimal investment from you, focused on
                outcomes and value delivered. I create enough momentum on engagement days to
                keep things moving between sessions. No slideware, just real products and solutions.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={1}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Fractional CTO
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Embedded technology leadership. Architecture decisions, team building,
                    and technical strategy—typically 2-3 days per week.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Fractional Chief AI Officer
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AI strategy and implementation leadership. From opportunity assessment
                    through production deployment and team enablement.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Advisory
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategic guidance on a regular cadence. Board-level input on technology
                    direction, AI readiness, and digital transformation.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding section-alt">
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
        <section className="section-padding">
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
                  <span className="font-semibold">Prominent Patriot Award</span>
                  <span className="text-muted-foreground"> — George Mason University, May 2024</span>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Published */}
        <section className="section-padding section-alt">
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

        {/* Also */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // ALSO
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-muted-foreground leading-relaxed">
                Beyond consulting, I build AI products.{' '}
                <Link to="/lab" className="font-mono text-terminal-cyan hover:underline">
                  See what's in the lab →
                </Link>
              </p>
            </Reveal>
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
                  href="https://claudecodefornoncoders.substack.com/"
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
