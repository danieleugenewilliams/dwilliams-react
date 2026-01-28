import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export default function Consulting() {
  return (
    <>
      <SEO
        title="AI Consulting — D. E. Williams + Co."
        description="AI advisory consulting: strategy, architecture, and implementation. I help companies move from AI pilots to production systems that deliver results."
        url="/consulting"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-grid border-b border-border">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-terminal-cyan">$</span> cat services.md
            </div>
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6">
              AI Advisory Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I don't advise from the sidelines. I architect, build, and deploy AI solutions
              that work—then train your team to own them.
            </p>
          </div>
        </section>

        {/* The Difference */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // THE_DIFFERENCE
            </h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Most AI consultants either <span className="font-semibold">advise</span>—strategy
                decks, never touch code—or <span className="font-semibold">build</span>—code,
                no business context. I do both.
              </p>
              <p className="text-muted-foreground">
                20+ years of enterprise technology work taught me that sustainable solutions
                require understanding the business, not just the tech. The best AI implementation
                in the world fails if it doesn't fit how your organization actually works.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // SERVICES
            </h2>
            <div className="space-y-12">
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
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16 md:py-20 border-t border-border bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // ENGAGEMENT_MODELS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border bg-background p-6">
                <h3 className="font-mono text-base font-semibold mb-3">
                  Advisory Retainer
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ongoing strategic guidance. Regular check-ins, architecture reviews,
                  and on-call support as your team executes.
                </p>
              </div>
              <div className="border border-border bg-background p-6">
                <h3 className="font-mono text-base font-semibold mb-3">
                  Project Engagement
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scoped deliverables with defined outcomes. Strategy development,
                  implementation, or both.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl text-center">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // GET_STARTED
            </h2>
            <p className="text-lg text-foreground mb-6 max-w-xl mx-auto">
              Ready to move from AI experiments to AI results? Let's start with a conversation.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              [Schedule a Discovery Call]
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
