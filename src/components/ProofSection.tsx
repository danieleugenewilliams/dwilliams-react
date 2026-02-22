import { Reveal } from './Reveal';

export function ProofSection() {
  const proofPoints = [
    {
      metric: '$2.5M saved in year one',
      description: 'Led TaxAct\'s legacy modernization—automatically converting 20-year-old C++ to modern C# and React, then scaling the solution across their codebase.',
    },
    {
      metric: '$28K → $4M in 9 months',
      description: 'Accelerated a transportation client\'s business transformation through integrated product strategy, technical architecture, and executive alignment.',
    },
    {
      metric: '$5M annual operational savings',
      description: 'Reimagined NFL Digital Media\'s organizational design and product engineering strategy.',
    },
    {
      metric: '$250K partner funding secured',
      description: 'Guided Daylight Transport\'s 3-year cloud infrastructure strategy through comprehensive process mapping and stakeholder collaboration.',
    },
    {
      metric: 'Zero loss of life',
      description: 'Led customer strategy for Stop Soldier Suicide\'s platform rearchitecture, enabling AI-driven signals of suicidality for clinicians serving veterans.',
    },
  ];

  return (
    <section className="section-padding section-alt">
      <div className="container max-w-4xl">
        <Reveal>
          <h2 className="font-mono text-sm text-muted-foreground mb-8">
            // PROOF
          </h2>
        </Reveal>

        <div className="space-y-8">
          {proofPoints.map((point, index) => (
            <Reveal key={index} delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4}>
              <div className="border-l-2 border-terminal-cyan pl-6 py-2">
                <p className="font-mono text-metric-display font-semibold text-foreground mb-2">
                  {point.metric}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
