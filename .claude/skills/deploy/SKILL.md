---
name: deploy
description: Deploy dewilliamsco-react (dewilliams.co) to production — static SPA on S3 + CloudFront via npm run deploy. Runs preflight checks, then builds and deploys.
---

# Deploy to Production (dewilliamsco-react)

Deploy the D. E. Williams + Co. site (https://dewilliams.co) to production. It is a static Vite/React SPA hosted on **S3 + CloudFront** — no server, no SSH, no PM2, no Stripe.

`npm run deploy` runs `scripts/deploy.sh`, which loads `.env.production`, runs `npm run build`, syncs `dist/` to S3 with tiered cache-control, and creates a CloudFront invalidation.

## Preflight Checks

Before deploying, verify the following. If a check fails, STOP and report the issue.

### 1. Clean working tree
Run `git status` — tracked changes for this deploy should already be committed. Untracked files are OK.

### 2. Branch check
Confirm you are on `main` and pushed to `origin/main`. Small content updates (e.g. subscriber-count bumps) go straight to main with no PR; larger changes should land via PR first.

### 3. Build sanity (optional)
`npm run build` must succeed — the deploy script runs it anyway, but running it first catches TypeScript/Vite errors before touching S3.

## Deploy
```bash
npm run deploy
```
This builds and pushes to production in one step. Requires AWS credentials and `scripts/.aws-resources.env` (created by `npm run aws:setup`). `.env.production` supplies production env vars; if missing, the build falls back to dev values (the script warns).

## Verify
Confirm the deploy output shows:
- `Deploy complete!` banner
- An `Invalidation: <id>` line
- Site: https://dewilliams.co

CloudFront invalidation covers `/index.html`, `/`, and `/data/*`, so changes (including freshly fetched newsletter posts in `posts.json`) appear within ~30–60 seconds.

## Output
Report: preflight status, S3/CloudFront targets, invalidation ID, and the live URL.
