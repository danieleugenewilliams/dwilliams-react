import { useState, useEffect } from 'react';
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

const CC4NC_URL = 'https://claudecodefornoncoders.substack.com/';

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

  return (
    <section className="section rule-top" id="writing">
      <div className="shell">
        <div className="what__intro">
          <Reveal>
            <span className="eyebrow">// WRITING</span>
            <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '24ch' }}>
              The writing is the main thing. Everything else runs{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>downstream of it.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <a href={CC4NC_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Read on Substack <ArrowUpRight />
            </a>
          </Reveal>
        </div>

        <Reveal delay={1} className="writing__lead">
          <p>
            I publish Claude Code for Non-Coders twice a week for senior technical people who
            built careers on judgment, stopped writing code years ago, and are working out what
            coding agents change for them. Tuesdays are the practical build. Thursdays are one
            idea I think is consequential, developed in full. Both are worth reading; only one
            costs anything.
          </p>
          <p>
            There's an older publication too, D.E. Williams + Co. Insights, where I first worked
            out the philosophy underneath all of this: using AI to protect your life instead of
            feeding it to your employer. The archive still holds up.
          </p>
        </Reveal>

        {posts === null ? (
          <div className="writing__grid writing__grid--skeleton" aria-busy="true" aria-label="Loading recent posts">
            {[0, 1, 2].map((i) => (
              <div key={i} className="writing__item writing__item--skeleton" />
            ))}
          </div>
        ) : posts.length === 0 ? null : (
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
