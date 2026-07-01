import { Reveal } from './Reveal';

interface Chapter {
  years: string;
  org: string;
  role: string;
  line: string;
}

const TIMELINE: Chapter[] = [
  {
    years: '2024 →',
    org: 'D. E. Williams + Co.',
    role: 'Founder · builder-writer',
    line: 'Claude Code for Non-Coders, LocalMemory, WARE, and the tools I run my own life on.',
  },
  {
    years: '2019–2024',
    org: 'Pariveda Solutions',
    role: 'Managing Principal',
    line: 'Built a national practice from nothing to $6M a year; grew one account from $28K to $4M in nine months.',
  },
  {
    years: '2017–2019',
    org: 'Beyondsoft Consulting',
    role: 'Senior Advisor',
    line: 'Ran Toyota and Lexus digital properties across a $35M portfolio.',
  },
  {
    years: '2010–2013',
    org: 'Booz Allen Hamilton',
    role: 'Associate',
    line: 'Won $9M+ in new business; built a FISMA-compliant cloud that cut a research program’s data-center cost by two thirds.',
  },
  {
    years: '2003–2010',
    org: 'SAIC · Federal Reserve Board',
    role: 'Senior Software Engineer',
    line: 'Built the platform that let the Federal Reserve, World Bank, IMF, and BLS share statistical data.',
  },
];

export function AboutSection() {
  return (
    <section className="section rule-top" id="about">
      <div className="shell">
        <div className="sp-about__head">
          <Reveal>
            <span className="eyebrow">// ABOUT</span>
            <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '20ch' }}>
              Twenty-five years building things for other people. Now I build them{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>for myself, in the open.</em>
            </h2>
          </Reveal>
        </div>

        <div className="sp-about__grid">
          <Reveal delay={1} className="sp-about__body">
            <p>
              I started as a software engineer on the platform that let the Federal Reserve,
              the World Bank, the IMF, and the BLS share statistical data. From there it was
              consulting. At Booz Allen I won more than $9M in new business and built a
              FISMA-compliant internal cloud that cut a research program's data-center cost by
              two thirds. Then Toyota and Lexus, whose digital properties I ran across a $35M
              portfolio. Then Pariveda, where I built a national practice from nothing to $6M a
              year and grew one account from $28K to $4M in nine months.
            </p>
            <p>
              Somewhere in there the job changed. I stopped being the person who writes the code
              and became the person who decides what gets built and why. That seam is exactly
              what AI is now tearing open for everyone who made the same move.
            </p>
            <p>
              So I do both again. I build my own tools, I write about how, and I advise the
              companies that want the same thing for their teams. I work in a window from early
              afternoon to evening, on purpose, because the mornings belong to my family, to
              fitness, to reading, and to being in the room instead of half inside a meeting in
              my head. I live on the coast of Virginia with my wife and two sons. I would rather
              ship than pitch.
            </p>
          </Reveal>

          <Reveal delay={2} as="ol" className="sp-about__timeline">
            {TIMELINE.map((c) => (
              <li key={c.org} className="sp-about__chapter">
                <span className="sp-about__years">{c.years}</span>
                <div>
                  <h3 className="sp-about__org">{c.org}</h3>
                  <span className="sp-about__role">{c.role}</span>
                  <p className="sp-about__line">{c.line}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
