import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

const partners = [
  {
    name: 'IncioX',
    description: 'Strategic partner for workforce transformation delivery and enterprise client engagements.',
  },
  {
    name: 'Tandemly',
    description: 'Channel partner for co-branded workforce intelligence assessments and consulting services.',
  },
];

const ecosystem = [
  { name: 'JFF / JFFLabs', description: 'Workforce development fellowship and research collaboration' },
  { name: 'Britebound', description: 'Potential integration partner for workforce analytics' },
  { name: 'GitLab Foundation', description: 'EQOS funding success and ongoing collaboration' },
];

export default function Partners() {
  return (
    <>
      <SEO
        title="Partners — D. E. Williams + Co."
        description="Partner with D. E. Williams + Co. to deliver workforce intelligence at scale. White-label assessments, co-branded reports, and referral programs."
        url="/partners"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="section-padding bg-grid">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> cat partners.md
            </div>
            <h1 className="text-page-hero font-mono font-bold mb-6 animate-fade-in-2">
              Partners
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              We work with consultancies, workforce development organizations, and technology
              companies to deliver workforce intelligence at scale.
            </p>
          </div>
        </section>

        {/* What We Offer Partners */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // PARTNER_WITH_US
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={1}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    White-Label Assessments
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deliver WARE-powered workforce assessments under your own brand.
                    Full API access to our scoring engine.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Co-Branded Reports
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Joint workforce intelligence reports combining our analytics with
                    your industry expertise and client relationships.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="border border-border bg-card p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-3">
                    Referral Program
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Earn revenue by connecting organizations with our assessment and
                    advisory services. Simple, transparent terms.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // CURRENT_PARTNERS
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, i) => (
                <Reveal key={partner.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div className="border border-border bg-card p-6 h-full">
                    <h3 className="font-mono text-lg font-semibold mb-3">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // ECOSYSTEM
              </h2>
            </Reveal>
            <div className="space-y-4">
              {ecosystem.map((org, i) => (
                <Reveal key={org.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div className="border border-border p-5">
                    <p className="font-semibold text-foreground">{org.name}</p>
                    <p className="text-sm text-muted-foreground">{org.description}</p>
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
                // BECOME_A_PARTNER
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-lg text-foreground mb-6 max-w-xl mx-auto">
                Interested in partnering with us? Let's explore how we can deliver
                workforce intelligence together.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <Link to="/contact" className="btn-primary inline-block">
                [Become a Partner]
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
