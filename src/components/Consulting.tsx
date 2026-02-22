import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

export default function Consulting() {
  return (
    <>
      <SEO
        title="Fractional CTO & AI Advisory — D. E. Williams + Co."
        description="AI advisory consulting: strategy, architecture, and implementation. I help companies move from AI pilots to production systems that deliver results."
        url="/consulting"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="section-padding bg-grid">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> cat services.md
            </div>
            <h1 className="text-page-hero font-mono font-bold mb-6 animate-fade-in-2">
              AI Advisory Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              As your Fractional CTO or Chief AI Officer, I architect, build, and deploy AI solutions
              that work—then train your team to own them.
            </p>
          </div>
        </section>

        {/* The Difference */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // THE_DIFFERENCE
              </h2>
            </Reveal>
            <div className="space-y-6 text-foreground leading-relaxed">
              <Reveal delay={1}>
                <p>
                  Most AI consultants either <span className="font-semibold">advise</span>—strategy
                  decks, never touch code—or <span className="font-semibold">build</span>—code,
                  no business context. I do both.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-muted-foreground">
                  20+ years of enterprise technology work taught me that sustainable solutions
                  require understanding the business, not just the tech. The best AI implementation
                  in the world fails if it doesn't fit how your organization actually works.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="text-muted-foreground">
                  That's why I work as a fractional executive—embedded in your team enough to
                  understand the real dynamics, independent enough to challenge assumptions.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // SERVICES
              </h2>
            </Reveal>
            <div className="space-y-12">
              <Reveal delay={1}>
                <div>
                  <h3 className="font-mono text-lg font-semibold mb-4">
                    [01] AI Strategy & Process Mapping
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Not every process benefits from AI. I map your operations to identify where
                    AI actually creates value—reducing costs, improving speed, or enabling
                    capabilities that weren't possible before.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Process documentation and workflow analysis
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      AI opportunity assessment and prioritization
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      ROI modeling and business case development
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={2}>
                <div>
                  <h3 className="font-mono text-lg font-semibold mb-4">
                    [02] Architecture & Implementation
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    I build production systems, not prototypes. This means considering security,
                    scalability, integration with existing systems, and long-term maintainability
                    from day one.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Technical architecture and system design
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      LLM integration (Claude, GPT, open-source models)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Cloud infrastructure (AWS, Azure, GCP)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Data pipeline and workflow automation
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={3}>
                <div>
                  <h3 className="font-mono text-lg font-semibold mb-4">
                    [03] Team Enablement
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The goal is for your team to own and extend what we build. I train your
                    people on the systems, document everything, and ensure you're not dependent
                    on me forever.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Technical training and documentation
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      AI literacy workshops for leadership
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Handoff and transition planning
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // ENGAGEMENT_MODELS
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal delay={1}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Fractional CTO / CAIO
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Embedded technology leadership, 2-3 days per week. Architecture decisions,
                    team building, AI strategy, and hands-on implementation.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Advisory Retainer
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ongoing strategic guidance. Regular check-ins, architecture reviews,
                    and on-call support as your team executes.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Project Engagement
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Scoped deliverables with defined outcomes. Strategy development,
                    implementation, or both.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={4}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Interim Leadership
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Full-time executive coverage for 3-6 months during transitions.
                    Stabilize, build, and hand off to your permanent hire.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl text-center">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // GET_STARTED
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-lg text-foreground mb-6 max-w-xl mx-auto">
                Ready to move from AI experiments to AI results? Let's start with a conversation.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <Link to="/contact" className="btn-primary inline-block">
                [Schedule a Discovery Call]
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
