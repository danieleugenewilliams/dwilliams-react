import { Reveal } from './Reveal';

export function ProblemSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container max-w-4xl">
        <Reveal>
          <h2 className="font-mono text-sm text-muted-foreground mb-8">
            // THE_PROBLEM
          </h2>
        </Reveal>

        <div className="space-y-6 text-lg leading-relaxed">
          <Reveal delay={1}>
            <p className="text-foreground font-semibold text-section-display">
              Most companies are stuck between AI ambition and AI execution.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-muted-foreground">
              MIT research confirms it: despite $30–40 billion in enterprise GenAI investment,
              95% of organizations are getting zero return. Only 5% have crossed from pilot
              to production. The barrier isn't the technology — it's brittle workflows,
              lack of contextual learning, and misalignment with day-to-day operations.
              Closing that gap requires someone who has done it before.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <p className="text-foreground font-mono text-xl md:text-2xl border-l-2 border-terminal-cyan pl-4">
              That's the work I do.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
