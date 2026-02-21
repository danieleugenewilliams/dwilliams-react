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
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;

const ROUTES = [
  '/',
  '/consulting',
  '/about',
  '/lab',
  '/newsletters',
  '/contact',
  '/privacy',
];

// Simple static file server for the dist directory
function createStaticServer() {
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
    let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

    // SPA fallback — serve index.html for routes without extensions
    if (!filePath.includes('.')) {
      filePath = join(DIST_DIR, 'index.html');
    }

    try {
      const content = readFileSync(filePath);
      const ext = '.' + filePath.split('.').pop();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      // Fallback to index.html for SPA routes
      try {
        const content = readFileSync(join(DIST_DIR, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    }
  });
}

async function prerender() {
  console.log('Starting prerender...');

  // Start static server
  const server = createStaticServer();
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

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 10000 });

    const html = await page.content();

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
