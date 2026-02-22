import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

export function WorkWithMe() {
  return (
    <section className="section-padding section-alt">
      <div className="container max-w-4xl text-center">
        <Reveal>
          <h2 className="font-mono text-sm text-muted-foreground mb-8">
            // WORK_WITH_ME
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-lg text-foreground mb-6 max-w-xl mx-auto">
            I take on 2-3 clients at a time. If you're serious about moving from AI experiments
            to AI results, let's talk.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              [Get in Touch]
            </Link>
            <a
              href="https://www.linkedin.com/in/danieleugenewilliams/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Connect on LinkedIn →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
