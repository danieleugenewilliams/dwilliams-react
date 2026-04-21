import { useState, useEffect, useMemo } from 'react';
import { SEO } from './SEO';
import { Reveal } from './Reveal';
import { ArrowUpRight } from './Icons';

interface Post {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  coverUrl?: string;
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

interface FlatPost extends Post {
  feedId: string;
  feedName: string;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return '';
  }
}

function allSortedPosts(data: PostsData): FlatPost[] {
  const flat: FlatPost[] = [];
  for (const feed of data.feeds) {
    for (const post of feed.posts) {
      flat.push({ ...post, feedId: feed.id, feedName: feed.name });
    }
  }
  flat.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  return flat;
}

// Derive topic counts by keyword-matching titles and excerpts
function countByTopic(posts: FlatPost[]): Record<string, number> {
  const topics: Array<{ key: string; patterns: RegExp }> = [
    { key: 'Claude Code', patterns: /claude code|claude\b|coding agent/i },
    { key: 'Agents & MCP', patterns: /\bagent|orchestrat|mcp\b|synthesis agent|worker/i },
    { key: 'Workforce', patterns: /workforce|displacement|resilience|job categor|identity|parallel/i },
    { key: 'AI Strategy', patterns: /ai strategy|enterprise|consulting|transform|pilot|stack/i },
    { key: 'Memory & Data', patterns: /memory|local.memory|rag\b|data|systems of record/i },
    { key: 'Product & Craft', patterns: /build|product|craft|ship|velocity|taste/i },
  ];

  const counts: Record<string, number> = {};
  for (const topic of topics) {
    counts[topic.key] = posts.filter((p) =>
      topic.patterns.test(p.title) || topic.patterns.test(p.excerpt)
    ).length;
  }
  return counts;
}

const TOPICS = [
  { name: 'Claude Code', desc: 'Hands-on tutorials and architecture patterns' },
  { name: 'Agents & MCP', desc: 'Orchestration, hooks, synthesis' },
  { name: 'Workforce', desc: 'Displacement, resilience, identity' },
  { name: 'AI Strategy', desc: 'Consulting, enterprise AI, stacks' },
  { name: 'Memory & Data', desc: 'Local-Memory, RAG, systems of record' },
  { name: 'Product & Craft', desc: 'Taste, velocity, the builder mindset' },
];

const FILTERS = [
  { key: 'all', label: 'All essays' },
  { key: 'cc4nc', label: 'Claude Code for Non-Coders' },
  { key: 'dewco', label: 'D. E. Williams + Co.' },
] as const;

export default function Insights() {
  const [postsData, setPostsData] = useState<PostsData | null>(null);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [filter, setFilter] = useState<'all' | 'cc4nc' | 'dewco'>('all');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/data/posts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load posts');
        return res.json();
      })
      .then(setPostsData)
      .catch(() => setFetchFailed(true));
  }, []);

  const allPosts = useMemo(() => (postsData ? allSortedPosts(postsData) : []), [postsData]);
  const latest = allPosts[0] ?? null;
  const cc4nc = postsData?.feeds.find((f) => f.id === 'cc4nc');
  const dewco = postsData?.feeds.find((f) => f.id === 'dewco');
  const cc4ncCount = cc4nc?.posts.length ?? 0;
  const dewcoCount = dewco?.posts.length ?? 0;

  const filteredPosts = useMemo(() => {
    if (filter === 'all') return allPosts;
    return allPosts.filter((p) => p.feedId === filter);
  }, [allPosts, filter]);

  const topicCounts = useMemo(() => countByTopic(allPosts), [allPosts]);
  const latestDate = latest ? formatDate(latest.pubDate) : '';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const url =
      'https://claudecodefornoncoders.substack.com/subscribe?email=' +
      encodeURIComponent(email);
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
      <SEO
        title="Insights — D. E. Williams + Co."
        description="Analysis, tutorials, and dispatches from the space between ambitious AI strategy and the teams who actually have to ship it."
        url="/insights"
      />

      <main style={{ background: 'var(--bg)', color: 'var(--fg)' }}>

        {/* ── Hero ── */}
        <section className="ins-hero" id="top">
          <div className="ins-hero__bg" />
          <div className="ins-hero__grid" />
          <div className="shell ins-hero__inner">
            <Reveal>
              <div className="ins-hero__meta">
                <span className="dot" />
                <span>Insights — vol. 03</span>
                <span style={{ color: 'var(--fg-dim)' }}>/</span>
                <span>{latestDate ? `Updated ${latestDate}` : 'Field notes'}</span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="ins-hero__title">
                <em>Field</em> notes<br />
                from the <span className="ins-accent">gap.</span>
              </h1>
            </Reveal>

            <div className="ins-hero__sub">
              <Reveal delay={2}>
                <p className="ins-hero__lede">
                  Analysis, tutorials, and dispatches from the space between{' '}
                  <strong>ambitious AI strategy</strong> and the teams who actually have to
                  ship it. Two newsletters, written weekly. Read on Substack.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <div className="ins-hero__stats">
                  <div className="ins-hero__stat">
                    <div className="n">{allPosts.length > 0 ? `${allPosts.length}+` : '—'}</div>
                    <span className="l">Essays fetched</span>
                  </div>
                  <div className="ins-hero__stat">
                    <div className="n">23k</div>
                    <span className="l">Subscribers · CC4NC</span>
                  </div>
                  <div className="ins-hero__stat">
                    <div className="n">Weekly</div>
                    <span className="l">New posts, Tue + Thu</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Featured ── */}
        {latest && (
          <section className="feat" id="featured">
            <div className="shell">
              <div className="feat__head">
                <Reveal>
                  <span className="eyebrow">Featured — this week</span>
                </Reveal>
                <Reveal delay={2}>
                  <a
                    className="t-mono t-muted"
                    href={
                      latest.feedId === 'cc4nc'
                        ? 'https://claudecodefornoncoders.substack.com/'
                        : 'https://dewilliamsco.substack.com/'
                    }
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: 'var(--fs-small)' }}
                  >
                    View all essays →
                  </a>
                </Reveal>
              </div>

              <Reveal delay={1}>
                <a
                  className="feat__card"
                  href={latest.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="feat__cover"
                    style={
                      latest.coverUrl
                        ? {
                            backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--bg-sunken) 70%, transparent), var(--bg-elev)), url(${latest.coverUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : undefined
                    }
                  >
                    <span className="feat__cover__tag">
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          background: 'currentColor',
                          borderRadius: '50%',
                          display: 'inline-block',
                        }}
                      />
                      {latest.feedId === 'cc4nc'
                        ? 'Claude Code for Non-Coders'
                        : 'D. E. Williams + Co.'}
                    </span>
                    <div className="feat__cover__index">
                      <em>Latest</em>
                      <br />essay
                    </div>
                  </div>

                  <div className="feat__body">
                    <div className="feat__kicker">
                      <span className="pub">
                        {latest.feedId === 'cc4nc' ? 'CC4NC' : 'DEWCO'}
                      </span>
                      <span style={{ color: 'var(--fg-dim)' }}>·</span>
                      <span>{formatDate(latest.pubDate)}</span>
                    </div>
                    <h3 className="feat__title">"{latest.title}"</h3>
                    <p className="feat__dek">
                      {latest.excerpt ||
                        (latest.feedId === 'cc4nc'
                          ? 'Part of the weekly series on practical AI development for business leaders — without deep technical expertise.'
                          : 'Workforce intelligence analysis and commentary on how AI is reshaping roles and industries.')}
                    </p>
                    <div className="feat__footer">
                      <span className="feat__read">
                        Read on Substack
                        <span className="feat__read__arrow">
                          <ArrowUpRight />
                        </span>
                      </span>
                      <span
                        className="t-mono t-dim"
                        style={{
                          fontSize: 'var(--fs-micro)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        ~ 6 min
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            </div>
          </section>
        )}

        {/* ── Publications ── */}
        <section className="pubs" id="publications">
          <div className="shell">
            <Reveal>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'end',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <span className="eyebrow">Two publications</span>
                  <h2
                    className="t-display"
                    style={{ marginTop: '1.25rem', maxWidth: '20ch' }}
                  >
                    Built to be read —{' '}
                    <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>
                      on purpose.
                    </em>
                  </h2>
                </div>
                <p className="t-lead t-muted" style={{ maxWidth: '36ch' }}>
                  Each has a distinct remit. Subscribe to one, both, or neither — everything
                  is public.
                </p>
              </div>
            </Reveal>

            <div className="pubs__grid">
              <Reveal delay={1}>
                <a
                  className="pub-card"
                  data-primary="true"
                  href="https://claudecodefornoncoders.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pub-card__kicker">
                    <span className="tag">Weekly</span>
                    <span>23,000+ subscribers</span>
                  </div>
                  <h3 className="pub-card__title">
                    Claude Code <em>for</em> Non-Coders.
                  </h3>
                  <p className="pub-card__desc">
                    The largest independent newsletter demystifying AI-native development for
                    business leaders. Practical tutorials on building with Claude Code —
                    without deep technical expertise.
                  </p>
                  <div className="pub-card__footer">
                    <div className="pub-card__stats">
                      {cc4ncCount > 0 && (
                        <span>
                          <strong>{cc4ncCount}+</strong>RECENT ESSAYS
                        </span>
                      )}
                      <span>
                        <strong>Tue · Thu</strong>
                      </span>
                    </div>
                    <span className="feat__read">
                      Subscribe
                      <span className="feat__read__arrow">
                        <ArrowUpRight />
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={2}>
                <a
                  className="pub-card"
                  href="https://dewilliamsco.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pub-card__kicker">
                    <span className="tag">Archive</span>
                    <span>Active, occasional</span>
                  </div>
                  <h3 className="pub-card__title">
                    D. E. Williams <em>+</em> Co. Insights.
                  </h3>
                  <p className="pub-card__desc">
                    Workforce-intelligence analysis, lessons from building WARE and Local
                    Memory, and commentary on how AI is reshaping roles and industries. The
                    archive still reads.
                  </p>
                  <div className="pub-card__footer">
                    <div className="pub-card__stats">
                      {dewcoCount > 0 && (
                        <span>
                          <strong>{dewcoCount}+</strong>ESSAYS
                        </span>
                      )}
                      <span>
                        <strong>Long-form</strong>
                      </span>
                    </div>
                    <span className="feat__read">
                      Read archive
                      <span className="feat__read__arrow">
                        <ArrowUpRight />
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Topics ── */}
        {allPosts.length > 0 && (
          <section className="topics" id="topics">
            <div className="shell">
              <Reveal>
                <span className="eyebrow">Topics</span>
                <h2
                  className="t-display"
                  style={{ marginTop: '1.25rem', maxWidth: '22ch' }}
                >
                  Six obsessions. In rotation.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <div className="topics__grid">
                  {TOPICS.map((t) => {
                    const count = topicCounts[t.name] ?? 0;
                    return (
                      <div key={t.name} className="topic">
                        {count > 0 && <div className="topic__count">{count}</div>}
                        <div className="topic__desc">{t.desc}</div>
                        <div className="topic__name">// {t.name}</div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ── Archive ── */}
        <section className="arch" id="archive">
          <div className="shell">
            <div className="arch__head">
              <Reveal>
                <div>
                  <span className="eyebrow">Archive</span>
                  <h2
                    className="t-display"
                    style={{ marginTop: '1.25rem', maxWidth: '20ch' }}
                  >
                    Every essay.{' '}
                    <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>
                      In reverse.
                    </em>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="arch__filters" role="tablist" aria-label="Filter posts">
                  {FILTERS.map((f) => (
                    <button
                      key={f.key}
                      role="tab"
                      aria-selected={filter === f.key}
                      data-active={filter === f.key}
                      className="arch__chip"
                      onClick={() => setFilter(f.key)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="arch__list">
              {fetchFailed && (
                <div className="arch__empty">
                  Posts available on{' '}
                  <a
                    href="https://claudecodefornoncoders.substack.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--brand)' }}
                  >
                    Substack
                  </a>
                  .
                </div>
              )}
              {!fetchFailed && filteredPosts.length === 0 && allPosts.length === 0 && (
                <div className="arch__empty">Loading essays…</div>
              )}
              {!fetchFailed && filteredPosts.length === 0 && allPosts.length > 0 && (
                <div className="arch__empty">No essays match this filter.</div>
              )}
              {filteredPosts.map((p, i) => (
                <Reveal key={p.link + i}>
                  <a
                    className="arch__row"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="arch__date">{formatDate(p.pubDate)}</span>
                    <h3 className="arch__title">"{p.title}"</h3>
                    <span className="arch__meta">
                      <span className={`pub-dot ${p.feedId}`} />
                      {p.feedId === 'cc4nc' ? 'CC4NC' : 'DEWCO'}
                    </span>
                    <span className="arch__arrow">
                      <ArrowUpRight />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subscribe CTA ── */}
        <section className="sub-cta" id="subscribe">
          <div className="shell">
            <Reveal>
              <div className="sub-cta__card">
                <div className="sub-cta__inner">
                  <span className="eyebrow">Subscribe</span>
                  <h2 className="sub-cta__title">
                    New essays <em>land</em> in your inbox —<br />
                    <span className="ins-accent">twice a week.</span>
                  </h2>
                  <form className="sub-cta__form" onSubmit={handleSubscribe}>
                    <input
                      className="sub-cta__input"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      aria-label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="sub-cta__btn">
                      Subscribe <ArrowUpRight />
                    </button>
                  </form>
                  <p className="sub-cta__fine">
                    Routes to Claude Code for Non-Coders on Substack · No spam, unsubscribe
                    any time.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </>
  );
}
