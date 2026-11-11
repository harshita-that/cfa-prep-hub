# ADR 0002 — Host on Vercel

- **Status:** Accepted
- **Date:** 2026-11-11

## Context

- We need a free place to put the site online.
- We want every Pull Request to get its own preview link, so reviewers can *see* a change before it goes live.
- The future product will likely use Next.js and serverless functions (see [architecture](../02-architecture.md)).
- Options considered: **GitHub Pages**, **Netlify**, **Vercel**.

## Decision

Host on **Vercel**, connected to the GitHub repo. Vercel serves the `public/` folder. Every push to `main` deploys to production; every PR gets an automatic preview deployment.

We are **not** using GitHub Pages.

## Consequences

**Good:**
- **Preview deployments per PR** — the "rehearsal stage vs live show" concept, built in. GitHub Pages doesn't do this.
- Same platform we'll use later for Next.js and serverless functions, so no migration.
- Free hobby tier is enough for this project.
- `cleanUrls` gives nice links (`/quiz` instead of `/quiz.html`).

**Bad / trade-offs:**
- One more account to manage.
- The free Hobby plan is for non-commercial use. When the real product starts charging money, we'll need the Pro plan (or reassess).
- Some config (`vercel.json`) is Vercel-specific.
