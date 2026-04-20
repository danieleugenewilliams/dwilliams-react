import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { ArrowUpRight } from './Icons';

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

function formatPostDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

export function WritingSection() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    fetch('/data/posts.json')
      .then((r) => r.ok ? r.json() : Promise.reject(new Error(`${r.status} ${r.url}`)))
      .then((data: PostsData) => {
        const cc4nc = data.feeds.find((f) => f.id === 'cc4nc');
        setPosts(cc4nc?.posts.slice(0, 3) ?? []);
      })
      .catch((e) => {
        if (import.meta.env.DEV) console.warn('WritingSection fetch failed', e);
        setPosts([]);
      });
  }, []);

  if (posts !== null && posts.length === 0) return null;

  return (
    <section className="section rule-top" id="writing">
      <div className="shell">
        <div className="what__intro">
          <Reveal>
            <span className="eyebrow">06 — Writing</span>
            <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '22ch' }}>
              Field notes from the <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>build.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <Link to="/insights" className="btn btn--ghost">
              See all writing <ArrowUpRight />
            </Link>
          </Reveal>
        </div>

        {posts === null ? (
          <div className="writing__grid writing__grid--skeleton" aria-busy="true" aria-label="Loading recent posts">
            {[0, 1, 2].map((i) => (
              <div key={i} className="writing__item writing__item--skeleton" />
            ))}
          </div>
        ) : (
          <Reveal className="writing__grid">
            {posts.map((p) => (
              <a
                key={p.link}
                className="writing__item"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="writing__item__date">{formatPostDate(p.pubDate)}</span>
                <h3 className="writing__item__title">{p.title}</h3>
                <span className="writing__item__read">
                  Read essay <ArrowUpRight size={14} />
                </span>
              </a>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
