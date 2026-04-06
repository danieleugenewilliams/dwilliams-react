import { useState, useEffect } from 'react';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

interface Post {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
}

interface Feed {
  id: string;
  name: string;
  posts: Post[];
}

interface PostsData {
  fetchedAt: string;
  feeds: Feed[];
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function Insights() {
  const [postsData, setPostsData] = useState<PostsData | null>(null);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    fetch('/data/posts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load posts');
        return res.json();
      })
      .then(setPostsData)
      .catch(() => setFetchFailed(true));
  }, []);

  const cc4nc = postsData?.feeds.find((f) => f.id === 'cc4nc');
  const recentPosts = cc4nc?.posts.slice(0, 8) ?? [];

  return (
    <>
      <SEO
        title="Insights — D. E. Williams + Co."
        description="AI transformation insights, Claude Code tutorials, and analysis of how automation is reshaping roles and industries."
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
              Analysis, tutorials, and field notes on AI transformation, workforce
              intelligence, and building with AI. Published on Substack.
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
              {/* Claude Code for Non-Coders — Primary */}
              <Reveal delay={1}>
                <div className="border border-terminal-cyan/30 bg-terminal-cyan/5 p-8 hover:border-terminal-cyan/50 transition-colors h-full flex flex-col">
                  <div className="font-mono text-xs text-terminal-cyan mb-4">
                    [WEEKLY] · 14,000+ subscribers
                  </div>
                  <h3 className="font-mono text-xl font-semibold mb-4">
                    Claude Code for Non-Coders
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    The largest independent newsletter demystifying AI-native development
                    for business leaders. Practical tutorials on building with Claude Code
                    without deep technical expertise.
                  </p>
                  <a
                    href="https://claudecodefornoncoders.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block self-start"
                  >
                    [Subscribe on Substack]
                  </a>
                </div>
              </Reveal>

              {/* D. E. Williams + Co. Insights — Archive */}
              <Reveal delay={2}>
                <div className="border border-border p-8 hover:border-terminal-cyan/50 transition-colors h-full flex flex-col">
                  <div className="font-mono text-xs text-muted-foreground mb-4">
                    [ARCHIVE]
                  </div>
                  <h3 className="font-mono text-xl font-semibold mb-4">
                    D. E. Williams + Co.
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    Workforce intelligence analysis, lessons from building WARE and Local Memory,
                    and commentary on how AI is reshaping roles and industries.
                    The archive is still worth reading.
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
            {fetchFailed ? (
              <div className="border border-border p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Latest posts are available on Substack.
                </p>
                <a
                  href="https://claudecodefornoncoders.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  [Read on Substack]
                </a>
              </div>
            ) : recentPosts.length > 0 ? (
              <div className="space-y-4">
                {recentPosts.map((post, i) => (
                  <Reveal key={post.link} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-border p-5 hover:border-terminal-cyan/50 transition-colors"
                    >
                      <p className="font-semibold text-foreground mb-1">{post.title}</p>
                      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                        <span>Claude Code for Non-Coders</span>
                        {post.pubDate && (
                          <>
                            <span>·</span>
                            <span>{formatDate(post.pubDate)}</span>
                          </>
                        )}
                        <span>→</span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground font-mono text-sm">Loading recent posts...</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
