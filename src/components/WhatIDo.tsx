import { Reveal } from './Reveal';

export function WhatIDo() {
  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <Reveal>
          <h2 className="font-mono text-sm text-muted-foreground mb-8">
            // WHAT_WE_DO
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-lg text-foreground mb-10 max-w-2xl">
            <span className="font-semibold">We don't guess which roles are at risk.</span>{' '}
            We score them, map the timeline, and build the playbook.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <Reveal delay={1}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [01] Assess
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered workforce resilience scoring. Every role analyzed against automation capability, observed adoption, and industry-specific factors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [02] Advise
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategic playbooks for workforce transition. Not generic "upskill everyone" advice — role-specific, timeline-aware action plans.
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [03] Transform
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Organizational readiness programs. Restructuring, reskilling roadmaps, and ongoing monitoring as AI capabilities evolve.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="font-mono text-sm text-muted-foreground">
            Powered by the WARE Framework — workforce analytics backed by real data, not consultant intuition.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
