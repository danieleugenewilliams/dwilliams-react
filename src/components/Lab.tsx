import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ProductGrid } from './ProductGrid';

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
        <section className="py-16 md:py-24 bg-grid border-b border-border">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-terminal-cyan">$</span> ls lab/
            </div>
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6">
              The Lab
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              AI products built from real enterprise problems. Every tool here started as a
              gap I saw while working with clients—something that should exist but doesn't.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // PHILOSOPHY
            </h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                AI should extend human judgment, not replace it. The best AI implementations
                handle the mechanical work—remembering, connecting, organizing—so people can
                focus on what matters: decisions, relationships, and creative work.
              </p>
              <p className="text-muted-foreground">
                Every engagement starts with a real problem. I'm not interested in AI for
                its own sake—only AI that creates measurable value for the business and
                the people in it.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // APPROACH
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-mono text-base font-semibold mb-3">
                  [01] Build to learn
                </h3>
                <p className="text-sm text-muted-foreground">
                  Working software teaches more than planning. Ship early, instrument
                  everything, talk to users.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-base font-semibold mb-3">
                  [02] Practical AI
                </h3>
                <p className="text-sm text-muted-foreground">
                  Not AI for its own sake. Every feature should solve a real problem
                  better than the alternative.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-base font-semibold mb-3">
                  [03] User sovereignty
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your data is yours. Tools should empower, not extract. Local-first
                  when possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <ProductGrid />

        {/* CTA */}
        <section className="py-16 md:py-20 border-t border-border bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // GET_IN_TOUCH
            </h2>
            <p className="text-foreground leading-relaxed mb-6 max-w-2xl">
              Interested in a product, want to collaborate, or just want to connect?
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              [Contact]
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
