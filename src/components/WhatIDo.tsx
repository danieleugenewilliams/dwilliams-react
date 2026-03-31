import { Reveal } from './Reveal';

export function WhatIDo() {
  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <Reveal>
          <h2 className="font-mono text-sm text-muted-foreground mb-8">
            // WHAT_I_DO
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-lg text-foreground mb-10 max-w-2xl">
            <span className="font-semibold">I don't advise from the sidelines.</span>{' '}
            I embed, build, and lead.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <Reveal delay={1}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [01] Embed
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I join your leadership team as Fractional CTO or AI Transformation Officer.
                Architecture decisions, vendor orchestration, AI governance, and the
                stakeholder alignment that makes transformation stick.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [02] Build
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Production systems, not prototypes. From AI-augmented workflows to
                full platform modernization, I architect and ship alongside your team.
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [03] Transfer
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I train your people to maintain and extend what we build. The goal is
                organizational capability, not consultant dependency.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="font-mono text-sm text-muted-foreground">
            Powered by the WARE Framework and 20+ years of enterprise delivery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
