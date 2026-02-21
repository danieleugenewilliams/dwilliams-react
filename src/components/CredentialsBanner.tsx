import { Link } from 'react-router-dom';

export function CredentialsBanner() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="font-mono text-sm text-muted-foreground mb-2">
            // CREDENTIALS
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="border border-border bg-card p-6">
            <h3 className="font-mono text-base font-semibold text-foreground mb-3">
              Experience
            </h3>
            <p className="text-lg text-foreground font-semibold mb-2">
              20+ years in enterprise technology
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Federal Reserve, Booz Allen Hamilton, Toyota/Lexus, Pariveda Solutions, NFL, OMERS
            </p>
          </div>

          {/* Impact */}
          <div className="border border-border bg-card p-6">
            <h3 className="font-mono text-base font-semibold text-foreground mb-3">
              Impact
            </h3>
            <p className="text-lg text-foreground font-semibold mb-2">
              $35M+ in managed portfolios
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              $9M+ in new business won
            </p>
          </div>

          {/* Roles */}
          <div className="border border-border bg-card p-6">
            <h3 className="font-mono text-base font-semibold text-foreground mb-3">
              Roles
            </h3>
            <p className="text-lg text-foreground font-semibold mb-2">
              Fractional CTO & Chief AI Officer
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Board advisor, George Mason University
            </p>
          </div>
        </div>

        {/* Lab cross-link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            I also build AI products.{' '}
            <Link to="/lab" className="font-mono text-terminal-cyan hover:underline">
              See the Lab →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
