import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export default function About() {
  return (
    <>
      <SEO
        title="Daniel E. Williams — Fractional CTO & Chief AI Officer"
        description="20+ years leading technology initiatives at Booz Allen Hamilton, Pariveda Solutions, Toyota/Lexus, and more. Fractional CTO helping companies move from AI experiments to AI results."
        url="/about"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-grid border-b border-border">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-terminal-cyan">$</span> cat about.md
            </div>
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              Daniel E. Williams
            </h1>
            <p className="font-mono text-lg text-terminal-cyan mb-6">
              Fractional CTO | Chief AI Officer | Technology Executive
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I help companies cut through the AI noise and ship real solutions. 20+ years
              of enterprise technology work across financial services, automotive, healthcare,
              nonprofit, and government—from hands-on engineering to executive advisory.
            </p>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // IMPACT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border bg-card p-5">
                <p className="font-mono text-lg font-semibold text-foreground mb-1">$9M+</p>
                <p className="text-sm text-muted-foreground">New business won at Booz Allen Hamilton</p>
              </div>
              <div className="border border-border bg-card p-5">
                <p className="font-mono text-lg font-semibold text-foreground mb-1">$35M</p>
                <p className="text-sm text-muted-foreground">Digital portfolio managed for Lexus</p>
              </div>
              <div className="border border-border bg-card p-5">
                <p className="font-mono text-lg font-semibold text-foreground mb-1">$10M</p>
                <p className="text-sm text-muted-foreground">Data monetization investment authorized at OMERS</p>
              </div>
              <div className="border border-border bg-card p-5">
                <p className="font-mono text-lg font-semibold text-foreground mb-1">$6M+</p>
                <p className="text-sm text-muted-foreground">Annual revenue from nonprofit vertical at Pariveda</p>
              </div>
              <div className="border border-border bg-card p-5">
                <p className="font-mono text-lg font-semibold text-foreground mb-1">$28K → $4M</p>
                <p className="text-sm text-muted-foreground">Grew Daylight Transport engagement in 9 months</p>
              </div>
              <div className="border border-border bg-card p-5">
                <p className="font-mono text-lg font-semibold text-foreground mb-1">#1 AWS Partner</p>
                <p className="text-sm text-muted-foreground">Revenue driver for Southern California in 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // CAREER
            </h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                I started my career as a software engineer at the Federal Reserve Board,
                building data platforms and web services in Java and C#. That's where I learned
                that the hardest problems in technology aren't technical—they're about getting
                the right people aligned on what to build and why.
              </p>
              <p className="text-muted-foreground">
                At Booz Allen Hamilton, I moved into consulting—winning $9M+ in new business
                by deploying Enterprise 2.0 solutions for federal agencies, including a
                collaboration platform used by 2,400+ senior VA executives. I learned to
                translate technology capabilities into language that decision-makers act on.
              </p>
              <p className="text-muted-foreground">
                I then led the Lexus digital portfolio at Beyondsoft (formerly TPG), managing
                $35M in programs with 11 direct reports. The LexusPlus transformation—a $10M
                initiative that had failed multiple times—succeeded because I talked to every
                stakeholder across brands, dealers, and regions to build a coherent strategy.
                That pattern—initiatives fail from misalignment, not technology—has defined
                my career.
              </p>
              <p className="text-muted-foreground">
                At Pariveda Solutions, I grew accounts, built a national nonprofit vertical
                generating $6M+ annually, and led complex engagements for the NFL, TaxAct,
                OMERS, and Daylight Transport. In late 2024, I founded D. E. Williams + Co.
                to focus full-time on helping companies move from AI experiments to AI results.
              </p>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // HOW_I_WORK
            </h2>
            <p className="text-foreground leading-relaxed mb-8 max-w-2xl">
              Fractional keeps incentives aligned—minimal investment from you, focused on
              outcomes and value delivered. I create enough momentum on engagement days to
              keep things moving between sessions. No slideware, just real products and solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border bg-card p-6">
                <h3 className="font-mono text-base font-semibold mb-3">
                  Fractional CTO
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Embedded technology leadership. Architecture decisions, team building,
                  and technical strategy—typically 2-3 days per week.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <h3 className="font-mono text-base font-semibold mb-3">
                  Fractional Chief AI Officer
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI strategy and implementation leadership. From opportunity assessment
                  through production deployment and team enablement.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <h3 className="font-mono text-base font-semibold mb-3">
                  Advisory
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strategic guidance on a regular cadence. Board-level input on technology
                  direction, AI readiness, and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // CREDENTIALS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono text-base font-semibold mb-4">Education</h3>
                <div className="font-mono text-sm text-muted-foreground space-y-2">
                  <p>MS, Technology Management — George Mason University</p>
                  <p>BS, Computer Science Technology — Bowie State University</p>
                  <p>CIO University Certificate — George Mason University</p>
                </div>
              </div>
              <div>
                <h3 className="font-mono text-base font-semibold mb-4">Certifications</h3>
                <div className="font-mono text-sm text-muted-foreground space-y-2">
                  <p>Lean Six Sigma Green Belt — Dartmouth College</p>
                  <p>Project Management Professional (PMP)</p>
                  <p>Certified Scrum Master</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // ADVISORY
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                <span className="font-semibold">George Mason University Alumni Association</span>
                <span className="text-muted-foreground"> — At-Large Director</span>
              </p>
              <p>
                <span className="font-semibold">George Mason Costello College of Business Alumni Board</span>
                <span className="text-muted-foreground"> — Incoming President</span>
              </p>
              <p>
                <span className="font-semibold">Prominent Patriot Award</span>
                <span className="text-muted-foreground"> — George Mason University, May 2024</span>
              </p>
            </div>
          </div>
        </section>

        {/* Published */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // PUBLISHED
            </h2>
            <div className="space-y-4">
              <a
                href="https://www.techrepublic.com/article/how-cios-can-approach-digital-transformation-investments-to-increase-value/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-terminal-cyan transition-colors"
              >
                <span className="font-semibold">"How CIOs can approach digital transformation investments to increase value"</span>
                <span className="text-sm text-muted-foreground ml-2">— TechRepublic</span>
              </a>
              <a
                href="https://readwrite.com/the-impact-of-ai-as-companies-address-the-skilled-labor-shortage/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-terminal-cyan transition-colors"
              >
                <span className="font-semibold">"The Impact of AI as Companies Address the Skilled Labor Shortage"</span>
                <span className="text-sm text-muted-foreground ml-2">— ReadWrite</span>
              </a>
              <a
                href="https://readwrite.com/create-symbiotic-relationships-with-ai-in-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-terminal-cyan transition-colors"
              >
                <span className="font-semibold">"Create Symbiotic Relationships with AI in Business"</span>
                <span className="text-sm text-muted-foreground ml-2">— ReadWrite</span>
              </a>
              <a
                href="https://dewilliamsco.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-terminal-cyan transition-colors"
              >
                <span className="font-semibold">D. E. Williams + Co. Insights</span>
                <span className="text-sm text-muted-foreground ml-2">— Substack</span>
              </a>
              <a
                href="https://claudecodefornoncoders.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-terminal-cyan transition-colors"
              >
                <span className="font-semibold">Claude Code for Non-Coders</span>
                <span className="text-sm text-muted-foreground ml-2">— Substack</span>
              </a>
            </div>
          </div>
        </section>

        {/* Also */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // ALSO
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Beyond consulting, I build AI products.{' '}
              <Link to="/lab" className="font-mono text-terminal-cyan hover:underline">
                See what's in the lab →
              </Link>
            </p>
          </div>
        </section>

        {/* Connect */}
        <section className="py-16 md:py-20 border-t border-border bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // CONNECT
            </h2>
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
            <Link to="/contact" className="btn-primary inline-block">
              [Get in Touch]
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
