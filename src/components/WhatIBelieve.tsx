import { Reveal } from './Reveal';
import { Condense } from './Condense';

interface Belief {
  no: string;
  title: string;
  short: string;
  body: string;
}

const BELIEFS: Belief[] = [
  {
    no: '01',
    title: "The value should be yours, not the platform's.",
    short: "When AI saves hours, someone keeps them, and by default it is the firm, not the person who did the work. The fight isn't AI versus jobs. It's who keeps what the machine saves. Build so it's you.",
    body: "When the work gets faster, someone gets that time back. A deck that took an analyst three days now takes an afternoon, and those two days are real. By default the analyst does not keep them: the firm bills the same fee, staffs her on another deck, and the gain shows up on its margin instead of in her week. No one in the building ever calls that a fight. What gets argued about as \"AI versus jobs\" is not really about whether the machine can do the work. It is about who gets to keep what the machine saves. It does not have to be the firm. Build so that it is you: keep the setup and the skill in your own hands, and spend the hours you get back on your own work and the people you serve, rather than handing them to your employer or to the lab you rent the model from.",
  },
  {
    no: '02',
    title: 'Stay the operator, not the assistant.',
    short: "The risk isn't that AI replaces you. It's that it quietly demotes you to sign-off. Keep your hands on the decisions that carry weight.",
    body: "The real risk is not that AI replaces you. It is that it quietly demotes you. You feed the machine, it makes the call, and you sign off on whatever it hands back. The writer Cory Doctorow named that pattern the reverse-centaur, and I have watched capable people drift into it without noticing. Keep your hands on the decisions that carry weight, and pass off the rest on purpose. Sometimes the model really is better at a task than you are. The skill is being honest about which times those are.",
  },
  {
    no: '03',
    title: 'Own the architecture.',
    short: "Use the frontier models. I do. Just understand how your system fits together so you can always move, and never build on a foundation you can't leave.",
    body: "Owning your setup does not mean running everything yourself. Use the frontier model when it is the best tool for the job; I do. What keeps you independent is understanding how your system fits together and being able to move. When a vendor changes its price or its terms, you swap the model underneath and keep working. The labs are far ahead, and building your own from scratch is slower and worse. So use them. Just do not build on a foundation you can never leave.",
  },
  {
    no: '04',
    title: 'The gate is effort, not permission.',
    short: "No one is coming to authorize you. The barrier was never a credential. It's the hours, and those are yours to control.",
    body: "No one is coming to authorize you. The barrier was never a credential or a title. It is whether you will put in the hours to learn, and that part is yours to control. That is the good news and the hard news at once. Money and access still tilt the field, and an afternoon of practice will not change that. But the part that is genuinely yours to take has never been this large.",
  },
  {
    no: '05',
    title: 'This is the first tool an individual can own outright.',
    short: "Every earlier productivity jump needed an institution's money to run. A capable model on hardware you already own is the first that doesn't.",
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
                <p className="believe__body">
                  <Condense short={b.short}>{b.body}</Condense>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="believe__bridge">
          <p>
            <span className="d-only">
              None of this is the point on its own. Owning the tools only matters for what you can
              finally aim them at: your health, your family, the problems that money and access used
              to put out of reach. Keeping your judgment valuable is the foundation.
              <span className="coral"> Building a life worth living is the point.</span>
            </span>
            <span className="m-only">
              Owning the tools is the foundation.
              <span className="coral"> Building a life worth living is the point.</span>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
