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
                  Start Free
                </h3>
                <p className="text-muted-foreground">
                  Take the individual assessment. Get your AI resilience score in 5 minutes.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="flex gap-6">
              <div className="font-mono text-4xl md:text-5xl text-terminal-cyan font-bold">02</div>
              <div>
                <h3 className="font-mono text-lg font-semibold mb-2">
                  Go Deeper
                </h3>
                <p className="text-muted-foreground">
                  Upgrade to Pro for a detailed role analysis with a personalized action plan.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex gap-6">
              <div className="font-mono text-4xl md:text-5xl text-terminal-cyan font-bold">03</div>
              <div>
                <h3 className="font-mono text-lg font-semibold mb-2">
                  Scale Up
                </h3>
                <p className="text-muted-foreground">
                  Organizational assessments, executive advisory, and enterprise programs for teams and companies.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
