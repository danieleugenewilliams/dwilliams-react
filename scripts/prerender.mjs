#!/usr/bin/env node

/**
 * Prerender script — runs after `vite build` to generate static HTML
 * for each route. This makes content visible to crawlers, AI agents,
 * and social media link previews that don't execute JavaScript.
 *
 * Usage: node scripts/prerender.mjs
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, relative, isAbsolute } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;

// Build-time posts snapshot. Serialized into each prerendered page as
// window.__POSTS__ so the client's first render matches the prerendered DOM
// (WritingSection seeds its initial state from it), avoiding a hydration
// mismatch + stale-content flicker. See src/components/WritingSection.tsx.
let POSTS_SNAPSHOT = null;
try {
  POSTS_SNAPSHOT = readFileSync(join(DIST_DIR, 'data', 'posts.json'), 'utf8');
} catch {
  // posts.json absent — the client falls back to fetch + inline seed.
}

const ROUTES = [
  '/',
  '/privacy',
];

// Simple static file server for the dist directory.
// `pristineHtml` is the untouched, empty-#root build shell; every route/SPA
// request is served THAT (not a file from disk) so each route renders fresh via
// the app's client render. Serving from disk would leak the '/' capture — which
// overwrites dist/index.html — into '/privacy' and any route prerendered after
// it, producing home-page HTML under the wrong route and a hydration mismatch.
function createStaticServer(pristineHtml) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  };

  return createServer((req, res) => {
    const urlPath = (req.url || '/').split('?')[0];
    const ext = urlPath.includes('.') ? '.' + urlPath.split('.').pop() : '';

    // Route / SPA request (no extension, or an .html document) → pristine shell.
    if (!ext || ext === '.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(pristineHtml);
      return;
    }

    // Real asset (.js/.css/.json/img/font) → serve from disk.
    // The request URL is untrusted and join() may resolve `..` outside dist/.
    // Confine to DIST_DIR via relative()+`..` check (CodeQL js/path-injection).
    const filePath = join(DIST_DIR, urlPath);
    const rel = relative(DIST_DIR, filePath);
    if (rel.startsWith('..') || isAbsolute(rel)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }
    try {
      const content = readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(pristineHtml);
    }
  });
}

async function prerender() {
  console.log('Starting prerender...');

  // Snapshot the pristine build shell BEFORE any route capture overwrites
  // dist/index.html, so every route is served an empty #root and renders fresh.
  const pristineHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf8');

  // Start static server
  const server = createStaticServer(pristineHtml);
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server running on http://localhost:${PORT}`);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    console.log(`  Prerendering ${route}...`);
    const page = await browser.newPage();

    // Block third-party marketing/analytics scripts during prerender. They run under
    // networkidle0 and mutate the DOM inside #root (e.g. HubSpot collectedforms adds
    // data-hs-cf-bound to <form>), which bakes into the static HTML and then fails
    // hydration against React's clean client render. Real users still load them at runtime.
    const BLOCKED_HOSTS = [
      'hs-scripts.com', 'hs-analytics.net', 'hscollectedforms.net', 'hs-banner.com',
      'googletagmanager.com', 'google-analytics.com', 'static.hotjar.com', 'contentsquare.net',
    ];
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (BLOCKED_HOSTS.some((h) => req.url().includes(h))) req.abort();
      else req.continue();
    });

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 10000 });

    let html = await page.content();

    // Seed the client with the same posts the prerender rendered from, so
    // hydration doesn't patch fresh rows down to a stale inline fallback.
    if (POSTS_SNAPSHOT) {
      const safe = POSTS_SNAPSHOT.replace(/</g, '\\u003c');
      html = html.replace('</head>', `<script>window.__POSTS__=${safe}</script></head>`);
    }

    // Reveal elements gain the `in` class via a client effect, which puppeteer runs and
    // bakes into the captured HTML. React's first client render doesn't have it yet, so
    // strip it here to keep the static HTML in sync (avoids a hydration className mismatch).
    // The `in` class is always appended last by classList.add. A <noscript> style in
    // index.html keeps the stripped-hidden content visible when JS is off.
    html = html.replace(/(class="reveal[^"]*) in"/g, '$1"');

    // Write the rendered HTML to the appropriate file
    const outputDir = route === '/'
      ? DIST_DIR
      : join(DIST_DIR, route);

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = join(outputDir, 'index.html');
    writeFileSync(outputPath, html);
    console.log(`  ✓ ${outputPath}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Prerender complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
