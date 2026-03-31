import { Link } from 'react-router-dom';

export function ConsultingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-grid">
      <div className="container max-w-6xl section-padding">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="text-hero font-mono font-bold text-foreground mb-6 animate-fade-in-2">
            AI Transformation Leadership, Embedded
          </h1>

          {/* Subhead */}
          <p className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-3">
            I serve as Fractional CTO & AI Transformation Officer for organizations
            navigating the shift from AI experimentation to AI operations<span className="cursor-blink"></span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in-4">
            Strategy, governance, architecture, and implementation. I connect
            executive vision to engineering execution, then train your team to own it.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 animate-fade-in-4">
            <Link to="/contact" className="btn-primary">
              [Book a Discovery Call]
            </Link>
            <a href="#proof" className="btn-ghost">
              See Proof Points {'>'}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-8 right-8 font-mono text-xs text-muted-foreground/30 hidden lg:block">
        <div>┌──────────────────────────┐</div>
        <div>│ AI TRANSFORMATION        │</div>
        <div>│ EMBEDDED ADVISORY        │</div>
        <div>└──────────────────────────┘</div>
      </div>
    </section>
  );
}
