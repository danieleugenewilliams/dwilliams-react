import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

export function CredentialsBanner() {
  return (
    <section className="section-padding section-accent">
      <div className="container max-w-6xl">
        {/* Section header */}
        <Reveal>
          <div className="mb-12">
            <h2 className="font-mono text-sm text-muted-foreground mb-2">
              // CREDENTIALS
            </h2>
          </div>
        </Reveal>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={1}>
            <div className="border border-border bg-card p-6 h-full">
              <h3 className="font-mono text-base font-semibold text-foreground mb-3">
                Experience
              </h3>
              <p className="text-metric-display text-foreground font-semibold mb-2">
                20+ years in enterprise technology
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Federal Reserve, Booz Allen Hamilton, Toyota/Lexus, Pariveda Solutions, NFL, OMERS
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="border border-border bg-card p-6 h-full">
              <h3 className="font-mono text-base font-semibold text-foreground mb-3">
                Impact
              </h3>
              <p className="text-metric-display text-foreground font-semibold mb-2">
                $35M+ in managed portfolios
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                $9M+ in new business won
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="border border-border bg-card p-6 h-full">
              <h3 className="font-mono text-base font-semibold text-foreground mb-3">
                Roles
              </h3>
              <p className="text-metric-display text-foreground font-semibold mb-2">
                Fractional CTO & Chief AI Officer
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Board advisor, George Mason University
              </p>
            </div>
          </Reveal>
        </div>

        {/* Lab cross-link */}
        <Reveal>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              I also build AI products.{' '}
              <Link to="/lab" className="font-mono text-terminal-cyan hover:underline">
                See the Lab →
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
