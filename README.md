# CFA Prep Hub

A small study website for CFA Level 1 candidates: flashcards, a practice quiz, and a study tracker.

It's also a **practice project**. It exists so we can learn how professional teams plan, build, review, and ship software — before building the real CFA prep platform.

> ⚠️ **Practice only.** The content here is written for learning and practice. It is **not** official CFA Institute material and may contain simplifications. Always study from official CFA Institute curriculum.

---

## What's inside

| Page | What it does |
|---|---|
| Home | Intro and links to everything |
| Flashcards | 15 key CFA Level 1 terms. Tap a card to flip it. |
| Quiz | 10 multiple-choice questions with instant feedback and a final score |
| Study Tracker | Tick off the 10 topic areas. Progress is saved in your browser. |

## Start here: the planning docs

Before reading any code, read the docs **in order**. This is how real projects are planned:

1. [`docs/00-idea.md`](docs/00-idea.md) — what are we building and why?
2. [`docs/01-requirements.md`](docs/01-requirements.md) — exactly what must it do?
3. [`docs/02-architecture.md`](docs/02-architecture.md) — how is it put together?
4. [`docs/03-roadmap.md`](docs/03-roadmap.md) — what order do we build it in?
5. [`docs/04-plan.md`](docs/04-plan.md) — the actual task list (linked to GitHub issues)
6. [`docs/decisions/`](docs/decisions/) — why we made the big choices
7. [`docs/TEACHING.md`](docs/TEACHING.md) — lesson plan for learning Git, GitHub, and this workflow

## How to run it on your computer

There's nothing to install. No build step.

**Option A (simplest):** open the `public/` folder and double-click `index.html`.

**Option B (better, auto-refreshes):**
1. Open this folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `public/index.html` → **Open with Live Server**.

## Project structure

```
cfa-prep-hub/
├── README.md              ← you are here
├── CONTRIBUTING.md        ← rules for making changes
├── CHANGELOG.md           ← list of what changed in each version
├── .gitignore             ← files Git should ignore
├── vercel.json            ← settings for our hosting (Vercel)
├── docs/                  ← planning documents (the "thinking")
│   └── decisions/         ← records of big decisions and why
├── public/                ← the actual website (the "doing")
│   ├── *.html             ← one file per page
│   ├── css/style.css      ← all the styling
│   └── js/                ← data files + page logic
└── .github/               ← templates GitHub uses for issues and PRs
```

Docs, code, and config live in separate folders so anyone can find things fast.

## How to contribute

Short version (full version in [CONTRIBUTING.md](CONTRIBUTING.md)):

1. Pick an **issue** on GitHub (start with ones labelled `good first issue`).
2. Create a **branch**: `git checkout -b feature/short-name`
3. Make small **commits** with clear messages.
4. **Push** and open a **Pull Request** (PR).
5. Someone reviews it. Once approved, it's merged into `main`.
6. Vercel deploys `main` automatically.

**Never push directly to `main`.**

## Roadmap (summary)

| Phase | Goal |
|---|---|
| 0. Planning | Idea, requirements, architecture written down |
| 1. MVP | This static site (flashcards, quiz, tracker) |
| 2. Content & polish | More questions, formula sheet, theming |
| 3. Accounts | User logins, progress saved across devices |
| 4. Question bank | Big question database, timed mock exams |
| 5. Smart studying | Analytics and spaced repetition |

Details: [`docs/03-roadmap.md`](docs/03-roadmap.md)
