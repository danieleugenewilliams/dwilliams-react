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
            From individual assessments to enterprise transformation, we meet you where you are.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/assessment" className="btn-primary">
              [Start Your Free Assessment]
            </Link>
            <Link to="/contact" className="btn-ghost">
              Talk to Our Team →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
