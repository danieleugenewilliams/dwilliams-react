import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

const tiers = [
  {
    name: 'Free',
    audience: 'Anyone',
    price: '$0',
    description: 'Get your AI resilience score and a basic risk summary. 2 free analyses to explore.',
    features: [
      'AI resilience score (0–100)',
      'Risk category assessment',
      'Limited recommendations',
      '2 analyses included',
    ],
    cta: 'Try It Free',
    ctaLink: 'https://automationresilience.com',
    external: true,
    highlight: false,
  },
  {
    name: 'Single Report',
    audience: 'Individual professionals & students',
    price: '$9.99',
    description: 'Complete task-level breakdown with strategic recommendations and exportable PDF. Students get a discounted rate with a valid .edu email.',
    features: [
      'Full task-level risk breakdown',
      'All strategic recommendations',
      'Exportable PDF report',
      'Scoring transparency',
      '$6 student rate with .edu email',
    ],
    cta: 'Get Your Report',
    ctaLink: 'https://automationresilience.com',
    external: true,
    highlight: true,
  },
  {
    name: 'Professional',
    audience: 'Coaches, advisors & workforce leaders',
    price: '$99.99/mo',
    description: 'Unlimited analyses for executive coaches, career advisors, and workforce development leaders who need to assess multiple roles.',
    features: [
      'Unlimited analyses',
      'All report features',
      'Analysis history & tracking',
      'Priority support',
      'Cancel anytime',
    ],
    cta: 'Go Professional',
    ctaLink: 'https://automationresilience.com',
    external: true,
    highlight: false,
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services — D. E. Williams + Co."
        description="Fractional CTO & AI Transformation Officer. Embedded advisory leadership and WARE Framework-powered assessment services."
        keywords="fractional CTO, AI transformation, embedded advisory, WARE Framework, workforce intelligence"
        url="/services"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="section-padding bg-grid">
          <div className="container max-w-5xl">
            <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> cat services.md
            </div>
            <h1 className="text-page-hero font-mono font-bold mb-6 animate-fade-in-2">
              Advisory & Transformation Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              I embed with leadership teams as Fractional CTO & AI Transformation Officer.
              Every engagement is powered by the{' '}
              <Link to="/lab" className="text-terminal-cyan hover:underline">WARE Framework</Link>.
              Assessments are also available as standalone services.
            </p>
          </div>
        </section>

        {/* Fractional Leadership — Primary Offering */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // FRACTIONAL_LEADERSHIP
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="border border-terminal-cyan/30 bg-terminal-cyan/5 p-8">
                <h3 className="font-mono text-lg font-semibold mb-4">
                  Fractional CTO & AI Transformation Officer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I embed with your leadership team on a retained basis — typically 2–3 days per week.
                  Architecture decisions, AI governance, vendor orchestration, team building, and
                  hands-on implementation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This is for organizations that need ongoing technology leadership and
                  accountability, not a one-time assessment.
                </p>
                <Link to="/contact" className="btn-primary inline-block">
                  [Book a Discovery Call]
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WARE Assessment Tiers */}
        <section className="section-padding">
          <div className="container max-w-6xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-4">
                // WARE_ASSESSMENTS
              </h2>
              <p className="text-lg text-foreground mb-10 max-w-2xl">
                The WARE Framework powers task-level automation resilience assessments.
                Available as a standalone service at{' '}
                <a
                  href="https://automationresilience.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-cyan hover:underline"
                >
                  automationresilience.com
                </a>.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <Reveal key={tier.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div
                    className={`border p-6 h-full flex flex-col ${
                      tier.highlight
                        ? 'border-terminal-cyan bg-terminal-cyan/5'
                        : 'border-border bg-card'
                    }`}
                  >
                    {/* Tier header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-mono text-lg font-semibold">{tier.name}</h3>
                        {tier.highlight && (
                          <span className="font-mono text-xs text-terminal-cyan">[POPULAR]</span>
                        )}
                      </div>
                      <p className="font-mono text-2xl font-bold text-foreground mt-1">
                        {tier.price}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        {tier.audience}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {tier.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-terminal-cyan">→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {tier.external ? (
                      <a
                        href={tier.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-center block"
                      >
                        [{tier.cta}]
                      </a>
                    ) : (
                      <Link
                        to={tier.ctaLink}
                        className="btn-primary text-center block"
                      >
                        [{tier.cta}]
                      </Link>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl text-center">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // GET_STARTED
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-lg text-foreground mb-6 max-w-xl mx-auto">
                Not sure where to start? Book a discovery call — 30 minutes, no obligation.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary inline-block">
                  [Book a Discovery Call]
                </Link>
                <a
                  href="https://automationresilience.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-block"
                >
                  Try the Free WARE Assessment &gt;
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
