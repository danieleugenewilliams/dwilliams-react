import { Reveal } from './Reveal';

export function ProofSection() {
  const proofPoints = [
    {
      metric: '$2.5M saved in year one',
      description: 'Led TaxAct\'s legacy modernization, advising the CTO and President directly. Built custom ML-driven crawler to map 20-year-old C++ logic paths, then automated conversion to modern C# and React.',
    },
    {
      metric: '$28K → $4M in 9 months',
      description: 'Grew Daylight Transport from pilot to $4M engagement through integrated product strategy, executive alignment, and a logistics OS incorporating ML into route planning.',
    },
    {
      metric: '$5M annual operational savings',
      description: 'Reimagined NFL Digital Media\'s organizational design for a 1,000+ person org in 12 weeks. Redesigned roles, team structure, and technology platform strategy. Pariveda remains embedded to this day.',
    },
    {
      metric: 'Zero loss of life',
      description: 'Led customer strategy for Stop Soldier Suicide\'s Black Box Project; rearchitected AWS platform using AI/ML to identify markers for suicidality for clinicians serving veterans.',
    },
    {
      metric: '9,000+ newsletter subscribers',
      description: 'Claude Code for Non-Coders is the largest independent newsletter demystifying AI-native development for business leaders. Direct distribution channel converting readers into advisory clients and workshop attendees.',
    },
  ];

  return (
    <section id="proof" className="section-padding section-alt">
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

        <Reveal delay={4}>
          <div className="mt-10 border border-terminal-cyan/30 bg-terminal-cyan/5 p-6 text-center">
            <p className="font-mono text-sm text-terminal-cyan mb-1">
              Powered by the WARE Framework
            </p>
            <p className="text-sm text-muted-foreground">
              Workforce analytics built on O*NET structural data, LLM semantic analysis, and real-world adoption signals.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
