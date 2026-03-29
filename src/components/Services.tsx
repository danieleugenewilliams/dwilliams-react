import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

const tiers = [
  {
    name: 'Free',
    audience: 'Anyone',
    description: 'Get your AI resilience score and a basic risk summary in 5 minutes.',
    features: [
      'AI resilience score (0–100)',
      'Risk category assessment',
      'Top 3 most-exposed tasks',
      'Top 3 automation-resistant tasks',
    ],
    cta: 'Join the Waitlist',
    ctaLink: '/assessment',
    highlight: false,
  },
  {
    name: 'Pro',
    audience: 'Individual professionals',
    description: 'Detailed role analysis with task-level breakdown and a personalized action plan.',
    features: [
      'Full task-level risk breakdown',
      'Personalized reskilling roadmap',
      'Industry-specific factors',
      'Exportable PDF report',
    ],
    cta: 'Join the Waitlist',
    ctaLink: '/assessment',
    highlight: false,
  },
  {
    name: 'Advisory',
    audience: 'Teams / small organizations',
    description: 'Multi-role assessment with department heat maps and a live strategy session.',
    features: [
      'Up to 25 role assessments',
      'Department-level heat map',
      '2-hour strategy session',
      'Priority action plan',
    ],
    cta: 'Talk to Our Team',
    ctaLink: '/contact',
    highlight: false,
  },
  {
    name: 'Executive',
    audience: 'C-suite / board',
    description: 'Workforce transformation roadmap with board-ready reporting and ongoing advisory.',
    features: [
      'Workforce transformation roadmap',
      'Board-ready reporting',
      'Monthly advisory sessions',
      'Quarterly capability updates',
    ],
    cta: 'Talk to Our Team',
    ctaLink: '/contact',
    highlight: true,
  },
  {
    name: 'Organizational',
    audience: 'Mid-market companies',
    description: 'Full workforce audit across 50–500 roles with transition playbooks and change management.',
    features: [
      'Full workforce audit (50–500 roles)',
      'Role-by-role transition playbook',
      'Change management framework',
      'Reskilling roadmaps by department',
    ],
    cta: 'Talk to Our Team',
    ctaLink: '/contact',
    highlight: false,
  },
  {
    name: 'Enterprise',
    audience: 'Large organizations',
    description: 'Continuous workforce monitoring, API integration, and a dedicated advisory team.',
    features: [
      'Continuous monitoring dashboard',
      'API integration with HR systems',
      'Dedicated advisory team',
      'Custom model training on your data',
    ],
    cta: 'Talk to Our Team',
    ctaLink: '/contact',
    highlight: false,
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services — D. E. Williams + Co."
        description="Workforce intelligence services from free AI resilience assessments to enterprise transformation programs. Powered by the WARE Framework."
        keywords="workforce intelligence, AI resilience assessment, workforce transformation, automation readiness, WARE Framework"
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
              Workforce Intelligence Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              From a free individual assessment to enterprise-wide transformation programs.
              Every tier is powered by the{' '}
              <Link to="/lab" className="text-terminal-cyan hover:underline">WARE Framework</Link>
              —task-level analysis, not job-title guessing.
            </p>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="section-padding">
          <div className="container max-w-6xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-10">
                // SERVICE_TIERS
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <Link
                      to={tier.ctaLink}
                      className="btn-primary text-center block"
                    >
                      [{tier.cta}]
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Fractional CTO / CAO */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // FRACTIONAL_LEADERSHIP
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="border border-border bg-card p-8">
                <h3 className="font-mono text-lg font-semibold mb-4">
                  Need a Fractional CTO or Chief AI Officer?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We also embed with leadership teams on a retained basis. Architecture decisions,
                  team building, AI strategy, and hands-on implementation—typically 2-3 days per week.
                  This is for organizations that need ongoing technology leadership, not just a
                  one-time assessment.
                </p>
                <Link to="/contact" className="btn-primary inline-block">
                  [Let's Talk]
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container max-w-4xl text-center">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-6">
                // GET_STARTED
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-lg text-foreground mb-6 max-w-xl mx-auto">
                Not sure which tier fits? Start with the free assessment—it takes 5 minutes
                and you'll know where you stand.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/assessment" className="btn-primary inline-block">
                  [Take the Free Assessment]
                </Link>
                <Link to="/contact" className="btn-ghost inline-block">
                  [Talk to Our Team]
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
