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
              Most companies are stuck in AI purgatory.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-muted-foreground">
              They've run pilots. They've seen demos. They have a Slack channel full of
              ChatGPT screenshots. But nothing's in production. Nothing's making money.
              The gap between "this is cool" and "this runs our business" feels impossibly wide.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <p className="text-foreground font-mono text-xl md:text-2xl border-l-2 border-terminal-cyan pl-4">
              That gap is where I work.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
