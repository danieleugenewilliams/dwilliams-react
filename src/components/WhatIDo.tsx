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
            I architect, build, and deploy.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <Reveal delay={1}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [01] Process Mapping → AI Architecture
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I find where AI actually creates value in your operations—not where it sounds impressive.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [02] Implementation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I build production systems, not prototypes. Working software that ships and scales.
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="border border-border p-6 hover:border-terminal-cyan/50 transition-colors h-full">
              <h3 className="font-mono text-base font-semibold mb-3">
                [03] Team Enablement
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I train your people to maintain and extend what we build, so you're not dependent on me forever.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="font-mono text-sm text-muted-foreground">
            This isn't a 6-month discovery phase. It's focused execution with measurable outcomes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
