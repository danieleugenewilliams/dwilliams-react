import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ProductGrid } from './ProductGrid';
import { Reveal } from './Reveal';

export default function Lab() {
  return (
    <>
      <SEO
        title="The Lab — D. E. Williams + Co."
        description="Home of the WARE Framework and LocalMemory. AI products built from real enterprise problems."
        url="/lab"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="section-padding bg-grid">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> ls lab/
            </div>
            <h1 className="text-page-hero font-mono font-bold mb-6 animate-fade-in-2">
              The Lab
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              AI products built from real enterprise problems. The research and tools
              that power our workforce intelligence services.
            </p>
          </div>
        </section>

        {/* WARE Framework — Dedicated Section */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // WARE_FRAMEWORK
              </h2>
            </Reveal>
            <div className="border border-terminal-cyan/30 bg-terminal-cyan/5 p-8 mb-8">
              <Reveal delay={1}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-mono text-2xl font-bold">WARE</h3>
                  <span className="font-mono text-xs text-terminal-amber border border-terminal-amber/30 px-2 py-0.5">
                    [IN DEV]
                  </span>
                </div>
                <p className="font-mono text-sm text-terminal-cyan mb-6">
                  Workforce Automation Resilience Engine
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={2}>
                  <div>
                    <h4 className="font-mono text-sm font-semibold mb-3">What It Is</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      A hybrid scoring engine that combines O*NET structural data, LLM semantic
                      analysis, industry adoption factors, and observed AI usage data (including
                      the Anthropic Economic Index) to assess role-level automation resilience.
                      Task-level analysis, not job-title guessing.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={3}>
                  <div>
                    <h4 className="font-mono text-sm font-semibold mb-3">What It Powers</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Every assessment tier—from the free individual score to enterprise-wide
                      workforce audits. The same engine, scaled to fit. As AI models improve,
                      WARE's assessments get more accurate automatically.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={4}>
                  <div>
                    <h4 className="font-mono text-sm font-semibold mb-3">Methodology</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-terminal-cyan">→</span>
                        Task decomposition using O*NET occupational data
                      </li>
                      <li className="flex gap-2">
                        <span className="text-terminal-cyan">→</span>
                        AI capability matching via LLM semantic analysis
                      </li>
                      <li className="flex gap-2">
                        <span className="text-terminal-cyan">→</span>
                        Industry-specific adoption weighting
                      </li>
                      <li className="flex gap-2">
                        <span className="text-terminal-cyan">→</span>
                        Observed usage calibration (Anthropic Economic Index data)
                      </li>
                      <li className="flex gap-2">
                        <span className="text-terminal-cyan">→</span>
                        Composite resilience scoring (0–100)
                      </li>
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={4}>
                  <Link to="/assessment" className="btn-primary inline-block">
                    [Try It Yourself]
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Local Memory — Dedicated Section */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // LOCAL_MEMORY
              </h2>
            </Reveal>
            <div className="border border-border bg-card p-8">
              <Reveal delay={1}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-mono text-2xl font-bold">LocalMemory</h3>
                  <span className="font-mono text-xs text-terminal-green border border-terminal-green/30 px-2 py-0.5">
                    [LIVE]
                  </span>
                </div>
                <p className="font-mono text-sm text-muted-foreground mb-6">
                  Open-source MCP server for AI persistent knowledge management
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={2}>
                  <p className="text-muted-foreground leading-relaxed">
                    LocalMemory gives Claude and other AI assistants the ability to store, search,
                    and build on knowledge across conversations. 60 paying customers and growing.
                  </p>
                </Reveal>

                <Reveal delay={3}>
                  <p className="text-muted-foreground leading-relaxed">
                    Building Local Memory taught us how AI systems actually retain and apply
                    knowledge. That R&D directly shapes how we design workforce assessments—the
                    same principles of structured knowledge, semantic search, and contextual
                    retrieval power the WARE Framework's analysis engine.
                  </p>
                </Reveal>

                <Reveal delay={4}>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://localmemory.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      [localmemory.co]
                    </a>
                    <a
                      href="https://github.com/danieleugenewilliams"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-block"
                    >
                      [GitHub]
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // PHILOSOPHY
              </h2>
            </Reveal>
            <div className="space-y-6 text-foreground leading-relaxed">
              <Reveal delay={1}>
                <p>
                  AI should extend human judgment, not replace it. The best AI implementations
                  handle the mechanical work—remembering, connecting, organizing—so people can
                  focus on what matters: decisions, relationships, and creative work.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-muted-foreground">
                  Every engagement starts with a real problem. We're not interested in AI for
                  its own sake—only AI that creates measurable value for the business and
                  the people in it.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Products & Open Source */}
        <ProductGrid />

        {/* CTA */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // GET_IN_TOUCH
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-foreground leading-relaxed mb-6 max-w-2xl">
                Interested in the WARE Framework, want to collaborate, or just want to connect?
              </p>
            </Reveal>
            <Reveal delay={2}>
              <Link to="/contact" className="btn-primary inline-block">
                [Contact]
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
