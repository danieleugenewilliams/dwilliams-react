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
              Most organizations have no idea which roles AI will reshape next.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-muted-foreground">
              AI tools can theoretically automate 94% of tasks across industries — but only 33%
              are seeing real adoption today. That gap is closing fast, and most companies are
              either panicking or ignoring it. Both responses are expensive.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <p className="text-foreground font-mono text-xl md:text-2xl border-l-2 border-terminal-cyan pl-4">
              We close that gap with data, not guesswork.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
