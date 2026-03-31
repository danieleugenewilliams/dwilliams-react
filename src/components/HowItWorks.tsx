import { Reveal } from './Reveal';

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <Reveal>
          <h2 className="font-mono text-sm text-muted-foreground mb-8">
            // HOW_IT_WORKS
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={1}>
            <div className="flex gap-6">
              <div className="font-mono text-4xl md:text-5xl text-terminal-cyan font-bold">01</div>
              <div>
                <h3 className="font-mono text-lg font-semibold mb-2">
                  Discovery Call (30 min, free)
                </h3>
                <p className="text-muted-foreground">
                  You tell me what's stuck. I tell you if I can help.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="flex gap-6">
              <div className="font-mono text-4xl md:text-5xl text-terminal-cyan font-bold">02</div>
              <div>
                <h3 className="font-mono text-lg font-semibold mb-2">
                  Scoping Session
                </h3>
                <p className="text-muted-foreground">
                  We map the problem, define success metrics, and build a work plan.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex gap-6">
              <div className="font-mono text-4xl md:text-5xl text-terminal-cyan font-bold">03</div>
              <div>
                <h3 className="font-mono text-lg font-semibold mb-2">
                  Execution
                </h3>
                <p className="text-muted-foreground">
                  I embed, build, and transfer. Your team ships. Your organization learns.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
