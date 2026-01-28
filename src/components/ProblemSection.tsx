export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-sm text-muted-foreground mb-8">
          // THE_PROBLEM
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground font-semibold text-xl md:text-2xl">
            Most companies are stuck in AI purgatory.
          </p>

          <p className="text-muted-foreground">
            They've run pilots. They've seen demos. They have a Slack channel full of
            ChatGPT screenshots. But nothing's in production. Nothing's making money.
            The gap between "this is cool" and "this runs our business" feels impossibly wide.
          </p>

          <p className="text-foreground font-mono text-lg border-l-2 border-terminal-cyan pl-4">
            That gap is where I work.
          </p>
        </div>
      </div>
    </section>
  );
}
