import { useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight } from './Icons';
import { CC4NC_SUBSCRIBERS } from '../lib/constants';

interface Post {
  title: string;
  link: string;
  pubDate: string;
}

interface Feed {
  id: string;
  name: string;
  posts: Post[];
}

interface PostsData {
  fetchedAt?: string;
  feeds: Feed[];
}

declare global {
  interface Window {
    // Prerender seeds this with the build-time posts snapshot (see scripts/prerender.mjs).
    __POSTS__?: PostsData;
  }
}

const CC4NC_URL = 'https://claudecodefornoncoders.substack.com/';
const DEWCO_URL = 'https://dewilliamsco.substack.com/';

// Inline fallback if the RSS pipeline output is unavailable.
const INLINE_POSTS: PostsData = {
  feeds: [
    {
      id: 'cc4nc',
      name: 'Claude Code for Non-Coders',
      posts: [
        { title: 'Difficult Takes a Day. What Are You Doing With the Rest of the Week?', link: CC4NC_URL, pubDate: 'Thu, 16 Apr 2026 12:00:00 GMT' },
        { title: "Prompts Don't Enforce Rules. Hooks Do.", link: CC4NC_URL, pubDate: 'Tue, 14 Apr 2026 12:00:00 GMT' },
        { title: "Your Agents Can Run Parallel. You Can't.", link: CC4NC_URL, pubDate: 'Thu, 09 Apr 2026 12:00:00 GMT' },
        { title: 'I Built a Tool to Measure AI Displacement Risk. Then I Ran It on Myself.', link: CC4NC_URL, pubDate: 'Fri, 03 Apr 2026 12:00:00 GMT' },
        { title: "They've Already Told You What You're For", link: CC4NC_URL, pubDate: 'Thu, 02 Apr 2026 12:00:00 GMT' },
      ],
    },
    {
      id: 'dewco',
      name: 'D. E. Williams + Co.',
      posts: [
        { title: "Why the Smartest People in Consulting Can't Deliver on AI", link: DEWCO_URL, pubDate: 'Tue, 17 Feb 2026 12:00:00 GMT' },
        { title: 'English is All You Need', link: DEWCO_URL, pubDate: 'Tue, 27 Jan 2026 12:00:00 GMT' },
      ],
    },
  ],
};

function formatPostDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function WritingSection() {
  // Seed from the prerender-injected snapshot so the first client render
  // matches the prerendered DOM; fall back to the inline list in dev / no-JS builds.
  const [data, setData] = useState<PostsData>(
    () => (typeof window !== 'undefined' && window.__POSTS__) || INLINE_POSTS
  );

  useEffect(() => {
    fetch('/data/posts.json')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`${r.status} ${r.url}`))))
      .then((json: PostsData) => {
        if (json && json.feeds) setData(json);
      })
      .catch((e) => {
        if (import.meta.env.DEV) console.warn('WritingSection fetch failed', e);
      });
  }, []);

  const flat = data.feeds.flatMap((f) => f.posts.map((p) => ({ ...p, feedId: f.id })));
  flat.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  const latest = flat.slice(0, 6);

  return (
    <section className="section writing" id="writing">
      <div className="shell">
        <div className="writing__head">
          <Reveal>
            <span className="mark mark--coral">// Writing</span>
            <h2 className="writing__title u-mt-lead">
              The writing is the <em>main thing.</em>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="serif-lead">
              Everything else runs downstream of it. I publish twice a week for senior technical
              people who built careers on judgment, stopped writing code years ago, and are working
              out what coding agents change for them. Thursdays are one idea developed in full, free
              and open to everyone. Tuesdays are the hands-on build, for paid subscribers.
            </p>
          </Reveal>
        </div>

        <Reveal className="writing__pubs">
          <a className="pub pub--primary" href={CC4NC_URL} target="_blank" rel="noreferrer">
            <div className="pub__kicker">
              <span className="pub__badge">Primary · Weekly</span>
              <span className="pub__count">{`${CC4NC_SUBSCRIBERS.full} readers`}</span>
            </div>
            <h3 className="pub__name">
              Claude Code <em>for</em> Non-Coders
            </h3>
            <p className="pub__desc">
              Twice a week. Thursdays are free and open to everyone: one consequential idea,
              developed in full. Tuesdays are the hands-on build, for paid subscribers.
            </p>
            <span className="pub__link">
              Subscribe on Substack <ArrowUpRight size={13} />
            </span>
          </a>

          <a className="pub" href={DEWCO_URL} target="_blank" rel="noreferrer">
            <div className="pub__kicker">
              <span className="pub__badge pub__badge--forest">Archive</span>
            </div>
            <h3 className="pub__name">
              D.E. Williams <em>+</em> Co. Insights
            </h3>
            <p className="pub__desc">
              Where I first worked out the philosophy underneath all of this: using AI to protect
              your life instead of feeding it to your employer. The archive still holds up.
            </p>
            <span className="pub__link">
              Read the archive <ArrowUpRight size={13} />
            </span>
          </a>
        </Reveal>

        <Reveal className="toc">
          <div className="toc__head">
            <span className="mark">Latest dispatches</span>
            <a
              className="txt-link"
              href="https://claudecodefornoncoders.substack.com/archive"
              target="_blank"
              rel="noreferrer"
            >
              Full archive
            </a>
          </div>
          {latest.map((p) => (
            <a key={p.link + p.pubDate} className="toc__row" href={p.link} target="_blank" rel="noreferrer">
              <span className="toc__date">{formatPostDate(p.pubDate)}</span>
              <span className="toc__title">{p.title}</span>
              <span className="toc__pub">{p.feedId === 'cc4nc' ? 'CC4NC' : 'DEWCO'}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
