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

        {/* Credentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Reveal delay={1}>
            <div className="border border-border bg-card p-6 h-full">
              <h3 className="font-mono text-base font-semibold text-foreground mb-3">
                Experience
              </h3>
              <p className="text-metric-display text-foreground font-semibold mb-2">
                20+ years in enterprise technology
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Federal Reserve, Booz Allen Hamilton, Pariveda Solutions, Beyondsoft/TPG, SAIC
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Clients include Toyota/Lexus, NFL, OMERS, TaxAct, Daylight Transport, Stop Soldier Suicide
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
                Founder & AI Transformation Officer
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Board advisor, George Mason University
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="border border-border bg-card p-6 h-full">
              <h3 className="font-mono text-base font-semibold text-foreground mb-3">
                Distribution
              </h3>
              <p className="text-metric-display text-foreground font-semibold mb-2">
                14,000+ subscribers
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Claude Code for Non-Coders — AI transformation thinking at scale
              </p>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="border border-border bg-card p-6 h-full">
              <h3 className="font-mono text-base font-semibold text-foreground mb-3">
                Governance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                NIST AI RMF · Responsible AI · Algorithmic Impact Assessment · AI Operating Model Design
              </p>
            </div>
          </Reveal>
        </div>

        {/* Scale note */}
        <Reveal>
          <div className="mt-8 text-center border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              I take on 2–3 embedded engagements at a time. Let's see if there's a fit.{' '}
              <Link to="/services" className="font-mono text-terminal-cyan hover:underline">
                See services →
              </Link>
            </p>
          </div>
        </Reveal>

        {/* Lab cross-link */}
        <Reveal>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              See what I'm building.{' '}
              <Link to="/lab" className="font-mono text-terminal-cyan hover:underline">
                Visit the Lab →
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
