#!/usr/bin/env node

/**
 * Fetches recent posts from Substack RSS feeds and writes them
 * to public/data/posts.json for use by the Insights page.
 *
 * Runs automatically before each build via the "prebuild" npm script.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'public', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'posts.json');

const FEEDS = [
  {
    id: 'cc4nc',
    name: 'Claude Code for Non-Coders',
    url: 'https://claudecodefornoncoders.substack.com/feed',
  },
  {
    id: 'dewco',
    name: 'D. E. Williams + Co.',
    url: 'https://dewilliamsco.substack.com/feed',
  },
];

// Capture all posts the RSS feed provides (Substack returns up to 20)
const MAX_POSTS_PER_FEED = 50;

function parseItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const title = extractCdata(block, 'title') || extractTag(block, 'title');
    const link = extractTag(block, 'link');
    const pubDate = extractTag(block, 'pubDate');
    const description = extractCdata(block, 'description') || extractTag(block, 'description');

    // Strip HTML from description for a plain-text excerpt
    const excerpt = description
      ? description.replace(/<[^>]+>/g, '').replace(/&#\d+;/g, ' ').trim().slice(0, 200)
      : '';

    // Cover image from <enclosure url="...">
    const enclosureMatch = block.match(/<enclosure url="([^"]+)"/);
    const coverUrl = enclosureMatch ? enclosureMatch[1] : '';

    if (title && link) {
      items.push({ title, link, pubDate, excerpt, coverUrl });
    }
  }

  return items;
}

function extractCdata(xml, tag) {
  const re = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`);
  const m = xml.match(re);
  return m ? m[1].trim() : null;
}

function extractTag(xml, tag) {
  const re = new RegExp(`<${tag}>([^<]*)</${tag}>`);
  const m = xml.match(re);
  return m ? m[1].trim() : null;
}

async function fetchFeed(feed) {
  console.log(`  Fetching ${feed.name}...`);
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': 'dewilliamsco-site-builder/1.0' },
    });

    if (!res.ok) {
      console.warn(`  Warning: ${feed.name} returned ${res.status}`);
      return { id: feed.id, name: feed.name, posts: [] };
    }

    const xml = await res.text();
    const posts = parseItems(xml).slice(0, MAX_POSTS_PER_FEED);
    console.log(`  ✓ ${feed.name}: ${posts.length} posts`);

    return { id: feed.id, name: feed.name, posts };
  } catch (err) {
    console.warn(`  Warning: Failed to fetch ${feed.name}: ${err.message}`);
    return { id: feed.id, name: feed.name, posts: [] };
  }
}

async function main() {
  console.log('Fetching newsletter posts...');

  const feeds = await Promise.all(FEEDS.map(fetchFeed));

  const output = {
    fetchedAt: new Date().toISOString(),
    feeds,
  };

  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`Posts written to ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error('Failed to fetch posts:', err);
  // Non-fatal — build continues with stale or no data
  process.exit(0);
});
