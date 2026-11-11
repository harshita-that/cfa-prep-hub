# ADR 0001 — Start with a static site

> **ADR** = Architecture Decision Record. A short note explaining a big technical choice and *why* we made it. Months later, when someone asks "why didn't we just use X?", the answer is written down.

- **Status:** Accepted
- **Date:** 2026-11-11

## Context

- We want to learn Git, GitHub, and a professional workflow while building something useful for CFA candidates.
- One of us is completely new to programming. Every line of code needs to be readable.
- The MVP features (flashcards, quiz, tracker) don't need user accounts or shared data.
- We have no budget and want zero setup friction.

## Decision

Build Phase 1 as a **static website**: plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no npm, no backend. Content lives in JavaScript data files. Tracker progress is saved in the browser's `localStorage`.

## Consequences

**Good:**
- Open `index.html` and it works. Nothing to install.
- A beginner can read every file and understand it.
- Free to host; nothing to break on a server.
- Teaches the fundamentals (HTML/CSS/JS) that every framework is built on.

**Bad / trade-offs:**
- No accounts; progress doesn't sync across devices.
- Adding content requires editing code (fine for now, good Git practice).
- Quiz answers are visible in the source code — no good for real exams.
- When we move to Next.js (Phase 3), the pages will be rewritten. That's acceptable: the content, design, and lessons carry over.
