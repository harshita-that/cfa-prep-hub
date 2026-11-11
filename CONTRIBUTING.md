# Contributing to CFA Prep Hub

Thanks for helping! This file explains **how** we make changes, so everyone works the same way and nobody overwrites anyone else's work.

## The golden rule

> 🚫 **Never push directly to `main`.** `main` is the live website. Every change goes through a Pull Request and gets reviewed first.

## The full flow (issue → merge)

```
1. Issue  →  2. Branch  →  3. Commits  →  4. Push  →  5. Pull Request  →  6. Review  →  7. Merge  →  8. Auto-deploy
```

### 1. Pick (or create) an issue
- Go to the **Issues** tab on GitHub. New? Filter by the `good first issue` label.
- Comment "I'll take this" and **assign yourself**, so nobody else starts the same work.
- No issue for what you want to do? Create one first using the **Task** template.

### 2. Create a branch
Always start from an up-to-date `main`:

```bash
git checkout main
git pull
git checkout -b feature/site-title
```

**Branch names:** `type/short-name`, lowercase, words joined with dashes.

| Prefix | Use it for | Example |
|---|---|---|
| `feature/` | New things | `feature/formula-sheet` |
| `fix/` | Fixing something broken | `fix/quiz-score-typo` |
| `docs/` | Docs only | `docs/answer-open-questions` |

### 3. Make small commits
Commit each meaningful step, not everything at the end.

```bash
git status
git add public/index.html
git commit -m "Change site title on home page"
```

**Commit message style:** a short sentence, in the **imperative** (like giving an order), starting with a capital letter, no full stop.

| ✅ Good | ❌ Bad |
|---|---|
| `Add 5 Fixed Income flashcards` | `added stuff` |
| `Fix wrong answer in question 4` | `fixed.` |
| `Update colour palette to dark blue` | `changes` |

Tip: it should complete the sentence *"If applied, this commit will… ___"*.

### 4. Push your branch
```bash
git push -u origin feature/site-title
```
(`-u` is only needed the first time you push a new branch.)

### 5. Open a Pull Request (PR)
- GitHub shows a yellow **Compare & pull request** button. Click it.
- Fill in the template. Write `Closes #1` (with the real issue number) so the issue closes automatically when merged.
- Vercel will comment with a **Preview** link. Open it and check your change works.

### 6. Review
- At least **one other person** reviews every PR.
- Reviewer: look at **Files changed**, open the preview, then **Approve** or **Request changes**.
- Author: fix any requested changes with new commits on the same branch and push again. The PR updates automatically.

### 7. Merge
- Once approved, click **Squash and merge** (or **Merge pull request**).
- Delete the branch (GitHub offers a button).

### 8. Update your local copy
```bash
git checkout main
git pull
```

## Before you open a PR — checklist
- [ ] I tested my change in the browser (Live Server or the Vercel preview)
- [ ] It works on a narrow (phone-sized) window
- [ ] My commits have clear messages
- [ ] I linked the issue (`Closes #…`)
- [ ] I didn't commit secrets, passwords, or personal files

## Content rules
- Write **original** questions and definitions. Never copy from CFA Institute or paid prep providers (copyright).
- Keep the "practice only" disclaimer on every page.
