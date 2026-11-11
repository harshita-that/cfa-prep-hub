# 03 — Roadmap

> **What is this doc?** A **roadmap** splits the project into **phases**, done in order. Like building a house: foundation first, then walls, then paint. Each phase delivers something that works on its own, so we can stop, learn, and adjust.
>
> **Definition of done** = the agreed checklist that says a phase is finished. No "almost done".

---

## Phase 0 — Planning ✅

**Goal:** Agree on what we're building and how, before writing code.

**Deliverables:**
- `docs/00-idea.md`, `01-requirements.md`, `02-architecture.md`, `03-roadmap.md`, `04-plan.md`
- Two ADRs in `docs/decisions/`

**Definition of done:**
- [x] All docs exist and are committed to Git
- [ ] Both founders have read them and answered the open questions in `00-idea.md`

---

## Phase 1 — MVP (this repo) ✅

**Goal:** A working static site with flashcards, quiz, and study tracker, deployed on Vercel.

**Deliverables:**
- Home, Flashcards, Quiz, Study Tracker pages
- Shared stylesheet, mobile-friendly
- `vercel.json`, live URL
- Contributing guide, PR and issue templates

**Definition of done:**
- [x] Every acceptance criterion in `01-requirements.md` passes
- [ ] Site is live on Vercel and auto-deploys from `main`
- [ ] `main` is protected: changes only via Pull Request

---

## Phase 2 — Content and polish

**Goal:** Make the MVP richer and let Aayush practise the full Git workflow on real, small tasks.

**Deliverables:**
- More flashcards and quiz questions
- Formula Sheet page
- Custom colour theme, personalised title/footer
- Optional dark mode
- Answered open questions; drafted Phase 3 plan

**Definition of done:**
- [ ] All Phase 2 issues closed via merged Pull Requests (milestone at 100%)
- [ ] At least 20 flashcards and 13 quiz questions
- [ ] Every change went through a PR with at least one review

---

## Phase 3 — Accounts and saved progress

**Goal:** Users can sign up, log in, and see their progress on any device.

**Deliverables:**
- Move the site to **Next.js** on Vercel
- **Supabase** project: database + auth (email and Google login)
- Tracker and quiz results saved per user in the database
- Basic profile page

**Definition of done:**
- [ ] A new user can sign up, log in, tick topics, log out, log in on another device, and see the same progress
- [ ] No passwords or secret keys are committed to Git (they live in Vercel environment variables)
- [ ] Old static pages redirect to new ones

---

## Phase 4 — Question bank and mock exams

**Goal:** A real, growing question bank and timed exams that feel like the real thing.

**Deliverables:**
- Questions stored in the database, tagged by topic, sub-topic, difficulty
- Admin page for content editors to add/edit questions (no code)
- Topic-wise practice sets (e.g. 20 Fixed Income questions)
- Timed mock exam mode (e.g. 90 questions / 135 minutes) with a results breakdown
- Content-review workflow (questions checked before going live)

**Definition of done:**
- [ ] At least 300 original, reviewed questions across all 10 topics
- [ ] A user can take a full timed mock and see a score per topic
- [ ] Answers are checked on the server (not visible in the browser)

---

## Phase 5 — Analytics and spaced repetition

**Goal:** The platform tells each user what to study next.

**Deliverables:**
- Performance dashboard: accuracy per topic, weighted by exam weight, trend over time
- "Weakest topics" recommendations
- Spaced repetition for flashcards (FSRS algorithm): daily review queue
- Product analytics (which features are used, where people drop off)

**Definition of done:**
- [ ] Each user sees a daily review queue that adapts to their answers
- [ ] Dashboard shows per-topic accuracy and a readiness estimate
- [ ] Founders can see weekly active users and feature usage
