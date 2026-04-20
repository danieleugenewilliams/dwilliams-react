import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

function formatPostDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function WritingSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/data/posts.json')
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((data: PostsData) => {
        const cc4nc = data.feeds.find((f) => f.id === 'cc4nc');
        setPosts(cc4nc?.posts.slice(0, 3) ?? []);
      })
      .catch(() => {});
  }, []);

  if (posts.length === 0) return null;

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

        <Reveal className="writing__grid">
          {posts.map((p, i) => (
            <a
              key={i}
              className="writing__item"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="writing__item__date">{formatPostDate(p.pubDate)}</span>
              <h3 className="writing__item__title">{p.title}</h3>
              <span className="writing__item__read">
                Read essay <ArrowUpRight />
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
