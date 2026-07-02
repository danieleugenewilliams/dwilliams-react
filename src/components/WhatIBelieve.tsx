import { Reveal } from './Reveal';

interface Belief {
  no: string;
  title: string;
  body: string;
}

const BELIEFS: Belief[] = [
  {
    no: '01',
    title: 'Value should accrue to the person, not the platform.',
    body: "When the work gets faster, it hands time back. A deck that took an analyst three days now takes an afternoon, and those saved days come loose and sit on the table. The fight everyone mislabels as AI versus jobs is really an older one, over who picks that time up. By default it rolls to whoever owns the business, quietly, without anyone in the building calling it a fight. It does not have to. Build so the freed value lands on you and the people you serve, not on whoever rents you the model.",
  },
  {
    no: '02',
    title: 'Stay the operator, not the assistant.',
    body: "The real risk is not that AI replaces you. It is that it quietly demotes you. You feed the machine, it makes the call, and you sign off on whatever it hands back. The writer Cory Doctorow named that pattern the reverse-centaur, and I have watched capable people drift into it without noticing. Keep your hands on the decisions that carry weight, and pass off the rest on purpose. Sometimes the model really is better at a task than you are. The skill is being honest about which times those are.",
  },
  {
    no: '03',
    title: 'Own the architecture.',
    body: "Owning your setup does not mean running everything yourself. Use the frontier model when it is the best tool for the job; I do. What keeps you independent is understanding how your system fits together and being able to move. When a vendor changes its price or its terms, you swap the model underneath and keep working. The labs are far ahead, and building your own from scratch is slower and worse. So use them. Just do not build on a foundation you can never leave.",
  },
  {
    no: '04',
    title: 'The gate is effort, not permission.',
    body: "No one is coming to authorize you. The barrier was never a credential or a title. It is whether you will put in the hours to learn, and that part is yours to control. That is the good news and the hard news at once. Money and access still tilt the field, and an afternoon of practice will not change that. But the part that is genuinely yours to take has never been this large.",
  },
  {
    no: '05',
    title: 'This is the first tool an individual can own outright.',
    body: "The printing press, the factory, the mainframe, the cloud. An institution captured every earlier jump in productivity, because every one of them needed an institution's money to run. A capable model on hardware you already own is the first that does not. The frontier still belongs to a few labs, and it will for a while. That is fine. Good enough and yours beats best and rented more often than the frontier wants you to believe.",
  },
];

export function WhatIBelieve() {
  return (
    <section className="section" id="believe">
      <div className="shell">
        <Reveal className="believe__head">
          <span className="mark mark--coral">// What I Believe</span>
          <p className="believe__lead">
            A handful of things I'm <em>convinced of.</em> The rest of this page is me trying to
            prove them.
          </p>
        </Reveal>

        <div>
          {BELIEFS.map((b) => (
            <Reveal key={b.no} className="believe__item">
              <div className="believe__no">{b.no}</div>
              <div>
                <h3 className="believe__title">{b.title}</h3>
                <p className="believe__body">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="believe__bridge">
          <p>
            None of this is the point on its own. Owning the tools only matters for what you can
            finally aim them at: your health, your family, the problems that money and access used
            to put out of reach. Keeping your judgment valuable is the foundation.{' '}
            <span className="coral">Building a life worth living is the point.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
