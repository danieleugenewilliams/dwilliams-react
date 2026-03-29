import { SEO } from './SEO';
import { Reveal } from './Reveal';

const recentPosts = [
  {
    title: 'Accenture Is Building Reverse-Centaurs. Here\'s How to Survive If You\'re One of Them.',
    newsletter: 'Claude Code for Non-Coders',
    url: 'https://claudecodefornoncoders.substack.com/p/accenture-is-building-reverse-centaurs',
  },
  {
    title: 'Most People Use Claude Like a Slot Machine. Here\'s the Software Engineer Approach.',
    newsletter: 'Claude Code for Non-Coders',
    url: 'https://claudecodefornoncoders.substack.com/p/most-people-use-claude-like-a-slot',
  },
  {
    title: 'The Question Isn\'t How to 10x Your Productivity. It\'s How to 10x Getting to the Life You Want.',
    newsletter: 'Claude Code for Non-Coders',
    url: 'https://claudecodefornoncoders.substack.com/p/the-question-isnt-how-to-10x-your',
  },
  {
    title: 'I Stopped Writing Code Months Ago. I\'ve Never Been More Involved.',
    newsletter: 'Claude Code for Non-Coders',
    url: 'https://claudecodefornoncoders.substack.com/p/i-stopped-writing-code-months-ago',
  },
  {
    title: 'Your Expertise is a Product. AI Can Help Create Leverage. You Just Haven\'t Packaged It Yet.',
    newsletter: 'Claude Code for Non-Coders',
    url: 'https://claudecodefornoncoders.substack.com/p/your-expertise-is-a-product-ai-can',
  },
];

export default function Insights() {
  return (
    <>
      <SEO
        title="Insights — D. E. Williams + Co."
        description="Workforce intelligence insights, AI implementation guides, and analysis of how automation is reshaping roles and industries."
        url="/insights"
      />
      <main className="bg-background text-foreground w-full">
        {/* Hero */}
        <section className="section-padding bg-grid">
          <div className="container max-w-4xl">
            <div className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in-1">
              <span className="text-terminal-cyan">$</span> ls insights/
            </div>
            <h1 className="text-page-hero font-mono font-bold mb-6 animate-fade-in-2">
              Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-3">
              Analysis, tutorials, and field notes on workforce intelligence, AI adoption,
              and building AI-native tools. Published on Substack.
            </p>
          </div>
        </section>

        {/* Newsletter Grid */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // NEWSLETTERS
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {/* D. E. Williams + Co. Insights */}
              <Reveal delay={1}>
                <div className="border border-border p-8 hover:border-terminal-cyan/50 transition-colors h-full flex flex-col">
                  <div className="font-mono text-xs text-terminal-amber mb-4">
                    [PERIODIC]
                  </div>
                  <h3 className="font-mono text-xl font-semibold mb-4">
                    D. E. Williams + Co.
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    Workforce intelligence analysis, lessons from building WARE and Local Memory,
                    and commentary on how AI is reshaping roles and industries.
                    For leaders navigating workforce transformation.
                  </p>
                  <a
                    href="https://dewilliamsco.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block self-start"
                  >
                    [Read on Substack]
                  </a>
                </div>
              </Reveal>

              {/* Claude Code for Non-Coders */}
              <Reveal delay={2}>
                <div className="border border-border p-8 hover:border-terminal-cyan/50 transition-colors h-full flex flex-col">
                  <div className="font-mono text-xs text-terminal-cyan mb-4">
                    [WEEKLY]
                  </div>
                  <h3 className="font-mono text-xl font-semibold mb-4">
                    Claude Code for Non-Coders
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    Weekly tutorials on building with AI—practical guides for business leaders
                    who want to leverage Claude Code without deep technical expertise.
                  </p>
                  <a
                    href="https://claudecodefornoncoders.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block self-start"
                  >
                    [Read on Substack]
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="section-padding section-alt">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="font-mono text-sm text-muted-foreground mb-8">
                // RECENT
              </h2>
            </Reveal>
            <div className="space-y-4">
              {recentPosts.map((post, i) => (
                <Reveal key={i} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-border p-5 hover:border-terminal-cyan/50 transition-colors"
                  >
                    <p className="font-semibold text-foreground mb-1">{post.title}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {post.newsletter} →
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
