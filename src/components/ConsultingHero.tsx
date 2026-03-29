import { Link } from 'react-router-dom';

export function ConsultingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-grid">
      <div className="container max-w-6xl section-padding">
        <div className="max-w-4xl">
          {/* Terminal-style intro */}
          <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
            <span className="text-terminal-cyan">$</span> ware --init
          </div>

          {/* Main heading */}
          <h1 className="text-hero font-mono font-bold text-foreground mb-6 animate-fade-in-2">
            Workforce Intelligence, Delivered
          </h1>

          {/* Subhead */}
          <p className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-3">
            Know which roles automation will reshape, when, and what to do about it<span className="cursor-blink"></span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in-4">
            We help organizations get ahead of AI-driven workforce change with
            clear, role-level intelligence — not abstract strategy decks.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 animate-fade-in-4">
            <Link to="/assessment" className="btn-primary">
              [Take the Free Assessment]
            </Link>
            <Link to="/services" className="btn-ghost">
              See Our Services →
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-8 right-8 font-mono text-xs text-muted-foreground/30 hidden lg:block">
        <div>┌──────────────────────────┐</div>
        <div>│ WORKFORCE INTELLIGENCE   │</div>
        <div>│ WARE FRAMEWORK           │</div>
        <div>└──────────────────────────┘</div>
      </div>
    </section>
  );
}
