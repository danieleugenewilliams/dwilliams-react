import { Reveal } from './Reveal';

interface Belief {
  title: string;
  body: string;
}

const BELIEFS: Belief[] = [
  {
    title: 'Value should accrue to the person, not the platform.',
    body: "The leverage is real. The only fight that matters is over who keeps it. Build so the upside lands on you and the people you serve, not on whoever rents you the model. The platforms earn their cut by making hard things easy, and I pay it gladly. It stops being a fair trade the day the rent runs higher than the value and you have no way out.",
  },
  {
    title: 'Stay the operator, not the assistant.',
    body: "The risk isn't that AI replaces you. It's that it quietly demotes you: you feed the machine, it decides, you rubber-stamp what it returns. Anthropic's own research has a name for that pattern, the reverse-centaur, and I've watched sharp people slide into it without noticing. Keep your hands on the decisions that carry consequences and hand off the rest on purpose. Sometimes the model really is better at a task than you are, and pretending otherwise is just ego; the discipline is knowing which times those are.",
  },
  {
    title: 'Own the architecture.',
    body: "Sovereignty isn't self-hosting purism. Run the frontier model if it's the best tool for the job; I do. What keeps you sovereign is owning the architecture around it and building the knowledge to move, so when a vendor changes the price or the terms you swap the model underneath and keep working. The labs are genuinely ahead, and rolling your own from scratch is slower and worse. So use them. Just don't build a house you can never move out of.",
  },
  {
    title: 'The gate is effort, not permission.',
    body: "Nobody is coming to authorize you. The barrier here was never a credential or a title; it's whether you'll put in the reps to learn. That gate you control, which is the good news and the uncomfortable news at once. Access and capital still tilt the field hard, and an afternoon of practice doesn't erase that. But the part that's genuinely yours to take has never been this large.",
  },
  {
    title: 'This is the first tool an individual can own outright.',
    body: 'The printing press, the factory, the mainframe, the cloud: an institution captured every earlier jump in productivity, because every one of them needed an institution’s capital to run. A capable model on hardware you already own is the first that doesn’t. The frontier still belongs to a handful of labs, and it will for a while. That’s fine. Good enough and yours beats best and rented more often than the frontier wants you to believe.',
  },
];

export function WhatIBelieve() {
  return (
    <section className="sp-believe" id="believe">
      <div className="shell">
        <div className="sp-believe__head">
          <Reveal>
            <span className="eyebrow">// WHAT_I_BELIEVE</span>
          </Reveal>
          <Reveal delay={1}>
            <p className="sp-believe__lead">
              A handful of things I'm convinced of. The rest of this page is me trying to
              prove them.
            </p>
          </Reveal>
        </div>

        <ol className="sp-believe__list">
          {BELIEFS.map((b, i) => (
            <Reveal key={b.title} as="li" className="sp-believe__item" delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <span className="sp-believe__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="sp-believe__copy">
                <h3 className="sp-believe__title">{b.title}</h3>
                <p className="sp-believe__body">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="sp-believe__bridge">
          <p>
            None of this is the point on its own. Owning the tools only matters because of
            what you can finally aim them at: your health, your family, the problems money
            and access used to gate. Keeping your judgment valuable is the foundation.
            Building a life worth living is the point.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
