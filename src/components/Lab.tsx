import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ProductGrid } from './ProductGrid';
import { Reveal } from './Reveal';

export default function Lab() {
  return (
    <>
      <SEO
        title="The Lab — D. E. Williams + Co."
        description="AI products built from real enterprise problems. Home of LocalMemory, ReckonGrid, Yasuke, and open-source AI tools."
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
              AI products built from real enterprise problems. Every tool here started as a
              gap I saw while working with clients—something that should exist but doesn't.
            </p>
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
                  Every engagement starts with a real problem. I'm not interested in AI for
                  its own sake—only AI that creates measurable value for the business and
                  the people in it.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // APPROACH
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={1}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-3">
                    [01] Build to learn
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Working software teaches more than planning. Ship early, instrument
                    everything, talk to users.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-3">
                    [02] Practical AI
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Not AI for its own sake. Every feature should solve a real problem
                    better than the alternative.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div>
                  <h3 className="font-mono text-base font-semibold mb-3">
                    [03] User sovereignty
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your data is yours. Tools should empower, not extract. Local-first
                    when possible.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Products */}
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
                Interested in a product, want to collaborate, or just want to connect?
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
