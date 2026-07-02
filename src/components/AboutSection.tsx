import { Reveal } from './Reveal';

interface Chapter {
  yr: string;
  org: string;
  role: string;
  line: string;
}

const CHAPTERS: Chapter[] = [
  { yr: '2024 —', org: 'D.E. Williams + Co.', role: 'Builder · Writer', line: 'Own tools, in the open. Newsletter, agents, advisory.' },
  { yr: '2019–24', org: 'Pariveda Solutions', role: 'Managing Principal', line: 'Built a national practice $0 → $6M/yr; one account $28K → $4M in nine months.' },
  { yr: '2013–19', org: 'Beyondsoft', role: 'Product Lead', line: 'Ran Toyota & Lexus digital properties across a $35M portfolio.' },
  { yr: '2010–13', org: 'Booz Allen Hamilton', role: 'Associate', line: 'Won $9M+ new business; FISMA cloud that cut data-center cost two-thirds.' },
  { yr: '2003–10', org: 'Federal Reserve · SAIC', role: 'Software Engineer', line: 'The platform FRB, World Bank, IMF and BLS used to share statistical data.' },
];

const CREDS = ['MS Tech Management · GMU', 'BS Computer Science · Bowie State', 'PMP', 'Lean Six Sigma', 'GMU Alumni Board'];

export function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <div className="folio">
          <span className="folio__no">§ 07</span>
          <span className="folio__name">About</span>
          <span className="folio__rule" />
        </div>

        <div className="about__grid">
          <Reveal>
            <p className="about__lede">
              Twenty-five years building things for other people. Now I build them
              <em> for myself, in the open.</em>
            </p>
            <div className="about__body">
              <p>
                I started as a software engineer on the platform that let the Federal Reserve, the
                World Bank, the IMF, and the BLS share statistical data. From there it was
                consulting. At <b>Booz Allen</b> I won more than $9M in new business and built a
                FISMA-compliant internal cloud that cut a research program's data-center cost by two
                thirds. Then <b>Toyota and Lexus</b>, whose digital properties I ran across a $35M
                portfolio. Then <b>Pariveda</b>, where I built a national practice from nothing to
                $6M a year and grew one account from $28K to $4M in nine months.
              </p>
              <p>
                Somewhere in there the job changed. I stopped being the person who writes the code
                and became the person who decides what gets built and why. That seam is exactly what
                AI is now tearing open for everyone who made the same move.
              </p>
              <p>
                So I do both again. I build my own tools, I write about how, and I advise the
                companies that want the same thing for their teams. I work in a window from early
                afternoon to evening, on purpose, because the mornings belong to my family, to
                fitness, to reading, and to being in the room instead of half inside a meeting in my
                head. I live on the coast of Virginia with my wife and two sons. <b>I would rather
                ship than pitch.</b>
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="mark" style={{ display: 'block', marginBottom: '1.25rem' }}>
              // The condensed record
            </span>
            <ul className="ledger">
              {CHAPTERS.map((c) => (
                <li key={c.org} className="ledger__row">
                  <span className="ledger__yr">{c.yr}</span>
                  <div>
                    <div className="ledger__org">{c.org}</div>
                    <span className="ledger__role">{c.role}</span>
                    <span className="ledger__line">{c.line}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="creds">
              {CREDS.map((t) => (
                <span key={t} className="creds__tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
