import { SEO } from './SEO';
import { Reveal } from './Reveal';

export default function Newsletters() {
  return (
    <>
      <SEO
        title="Newsletters — D. E. Williams + Co."
        description="Subscribe to insights on AI implementation, Claude Code tutorials, and lessons from building AI-native products."
        url="/newsletters"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="section-padding bg-grid">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> ls newsletters/
            </div>
            <h1 className="text-page-hero font-mono font-bold mb-6 animate-fade-in-2">
              Newsletters
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              Two newsletters. Different focuses. Both practical.
            </p>
          </div>
        </section>

        {/* Newsletter Grid */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Claude Code for Non-Coders */}
              <Reveal delay={1}>
                <div className="border border-border p-8 hover:border-terminal-cyan/50 transition-colors h-full">
                  <div className="font-mono text-xs text-terminal-cyan mb-4">
                    [WEEKLY]
                  </div>
                  <h2 className="font-mono text-xl font-semibold mb-4">
                    Claude Code for Non-Coders
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Weekly tutorials on building with AI—practical guides for business leaders
                    who want to leverage Claude Code without deep technical expertise.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Step-by-step tutorials
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Real-world use cases
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      No coding background required
                    </li>
                  </ul>
                  <a
                    href="https://claudecodefornoncoders.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    [Explore]
                  </a>
                </div>
              </Reveal>

              {/* D. E. Williams + Co. Insights */}
              <Reveal delay={2}>
                <div className="border border-border p-8 hover:border-terminal-cyan/50 transition-colors h-full">
                  <div className="font-mono text-xs text-terminal-amber mb-4">
                    [PERIODIC]
                  </div>
                  <h2 className="font-mono text-xl font-semibold mb-4">
                    D. E. Williams + Co. Insights
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Updates from the lab—product launches, lessons learned, and thoughts on
                    building AI-native tools. Less frequent, more in-depth.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Product development insights
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      AI industry analysis
                    </li>
                    <li className="flex gap-2">
                      <span className="text-terminal-cyan">→</span>
                      Lessons from building in public
                    </li>
                  </ul>
                  <a
                    href="https://dewilliamsco.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    [Explore]
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
