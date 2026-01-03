import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export default function Lab() {
  return (
    <>
      <SEO 
        title="The Lab — D. E. Williams + Co."
        description="A product lab building AI-native tools for knowledge, productivity, and growth. Founded by Daniel E. Williams, technologist with 20+ years building enterprise software."
        url="/lab"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-grid border-b border-border">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-terminal-cyan">$</span> cat README.md
            </div>
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6">
              About the Lab
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              D. E. Williams + Co. is a product lab focused on building AI-native tools 
              that augment human capability. We ship working software, learn from users, 
              and iterate.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // PHILOSOPHY
            </h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                We believe AI should extend human judgment, not replace it. Our products 
                are designed to handle the mechanical work—remembering, connecting, organizing—so 
                people can focus on what matters: decisions, relationships, and creative work.
              </p>
              <p>
                Every product in our portfolio starts with a real problem. LocalMemory exists 
                because AI assistants forgetting context between conversations is genuinely 
                frustrating. World Memory exists because knowledge buried in documents and 
                conversations is knowledge wasted.
              </p>
              <p>
                We build in public when we can, write about what we learn, and prioritize 
                shipping over perfecting. The lab model means we can pursue ideas that 
                interest us—some will work, some won't.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // APPROACH
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-mono text-base font-semibold mb-3">
                  [01] Build to learn
                </h3>
                <p className="text-sm text-muted-foreground">
                  Working software teaches more than planning. Ship early, instrument 
                  everything, talk to users.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-base font-semibold mb-3">
                  [02] Practical AI
                </h3>
                <p className="text-sm text-muted-foreground">
                  Not AI for its own sake. Every feature should solve a real problem 
                  better than the alternative.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-base font-semibold mb-3">
                  [03] User sovereignty
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your data is yours. Our tools should empower, not extract. Local-first 
                  when possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-8">
              // FOUNDER
            </h2>
            <div className="md:flex md:gap-12">
              <div className="flex-1">
                <h3 className="font-mono text-xl font-semibold mb-4">
                  Daniel E. Williams
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Technologist with 20+ years building enterprise software. Started coding 
                    Java, C#, and Python—shipped everything from collaboration tools to 
                    data platforms at the Federal Reserve.
                  </p>
                  <p>
                    Previously: Managing Principal at Pariveda Solutions (grew accounts 
                    from $28K to $4M+, led the team that became #1 AWS revenue driver in 
                    Southern California). Before that, Booz Allen Hamilton, Beyondsoft 
                    (Toyota/Lexus digital), SAIC.
                  </p>
                  <p>
                    Founded D. E. Williams + Co. in late 2024. Shipped LocalMemory in 2025. 
                    Building the rest of the portfolio now.
                  </p>
                  <p>
                    George Mason alum (CS undergrad and grad). Currently on the GMU Alumni 
                    Board. Based in coastal Virginia.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a 
                    href="https://www.linkedin.com/in/danieleugenewilliams/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-terminal-cyan hover:underline"
                  >
                    [LinkedIn]
                  </a>
                  <a 
                    href="https://twitter.com/dewilliamsco" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-terminal-cyan hover:underline"
                  >
                    [Twitter]
                  </a>
                  <a 
                    href="https://claudecodefornoncoders.substack.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-terminal-cyan hover:underline"
                  >
                    [Newsletter]
                  </a>
                  <a 
                    href="https://github.com/danieleugenewilliams" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-terminal-cyan hover:underline"
                  >
                    [GitHub]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory */}
        <section className="py-16 md:py-20 border-t border-border bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="font-mono text-sm text-muted-foreground mb-6">
              // ADVISORY SERVICES
            </h2>
            <p className="text-foreground leading-relaxed mb-6 max-w-2xl">
              Selective consulting for organizations navigating AI adoption, cloud 
              transformation, or product strategy.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              [Get in Touch]
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
