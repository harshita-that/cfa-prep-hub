# TEACHING.md — Lesson plan


## Part 1 — How real projects are built

### The pipeline

```
Idea → Requirements → Architecture → Roadmap → Plan → Issues → Branch → Pull Request → Review → Deploy → Iterate
```

### The house analogy

| Step | In a house | In software | Where it lives in this repo |
|---|---|---|---|
| **Idea** | "I want a house" | "CFA candidates need cheap, focused practice" | `docs/00-idea.md` |
| **Requirements** | What rooms, who lives there, budget | What the app must do, for whom (user stories) | `docs/01-requirements.md` |
| **Architecture** | The blueprint: where walls, pipes, wires go | How pages, data, storage, hosting connect | `docs/02-architecture.md` |
| **Roadmap** | Foundation first, then walls, then paint | Phase 1 MVP, Phase 2 polish, Phase 3 logins… | `docs/03-roadmap.md` |
| **Plan / Issues** | Job tickets for each worker: "Install kitchen sink" | GitHub issues: "Add 5 flashcards" | `docs/04-plan.md` + Issues tab |
| **Branch** | A worker builds the cabinet in the workshop, not in the living room | You make changes on a copy, not on the live site | `git checkout -b …` |
| **Pull Request** | "Inspector, please check my work" | "Please review my changes before they go live" | GitHub PR |
| **Review** | Inspector approves or asks for fixes | Teammate approves or requests changes | PR review |
| **Deploy** | Move-in day | Change goes live on the website | Vercel |
| **Iterate** | Live in it, then renovate | Get feedback, plan the next phase | back to Roadmap |



### Why messy projects fail

1. **Rework** — you build the wrong thing, then rebuild it. Planning is cheaper than rebuilding.
2. **No shared understanding** — you and your friend have different pictures in your heads. Docs make the picture shared.
3. **Can't split work** — without small, clear tasks (issues), two people can't work at the same time without stepping on each other.
4. **No safety net** — without Git, one bad change can wreck everything with no way back.
5. **Nobody knows what "done" means** — acceptance criteria and definitions of done fix that.


## Session 0 — Planning like a pro (~60 min)

**Goal:** He understands *why* each planning doc exists and edits the idea doc with his real platform idea.

**Analogy:** "Before you cook a big meal, you decide the menu, write a shopping list, and plan what goes in the oven first. These docs are the menu and the shopping list."

**Setup:** share your screen on GitHub, open the repo, click into `docs/`.

### Steps

| Time | You SAY / do | He does |
|---|---|---|
| 5 min | "This repo has two halves: `docs/` is the thinking, `public/` is the doing. We read the thinking first." Show the folder tree in the README. | Watches |
| 10 min | Open `00-idea.md`. "Could you explain the business to an investor in one sentence?" Read the problem + target users together. | Reads aloud, says what he'd change |
| 10 min | Open `01-requirements.md`. Explain a **user story**: *As a… I want… so that…*. Explain **MoSCoW**. Point at the **Won't have** list: "Writing down what we're NOT doing is how projects actually finish." | Writes one user story of his own (verbally or in chat) |
| 10 min | Open `02-architecture.md`. GitHub draws the Mermaid diagrams automatically. Walk through the table of pieces. Then the future diagram: "This is where we're heading — logins, a database." | Asks questions |
| 10 min | Open `03-roadmap.md` and `04-plan.md`. "Roadmap = phases. Plan = tasks. Each task becomes an issue." Click the **Issues** tab and show the real issues. | Clicks around Issues and Milestones |
| 10 min | **Show docs are code too:** open `00-idea.md` on GitHub, click the clock icon **History**. "Every change to this doc is saved and has a message. Same as code." | Clicks History, opens one commit |
| 5 min | Homework: Issue "Answer the Open questions" — he and his friend discuss them this week. He'll submit the answers as a PR in Session 3+. | Writes the questions down |

**Common confusions**
- *"Why markdown files and not Google Docs?"* → Because they live next to the code, are versioned by Git, and changes go through review like everything else.
- *"The diagram shows as code"* → Mermaid renders on github.com. In VS Code you need a Mermaid preview extension (optional).

---

## Session 1 — Tools: VS Code, Git, GitHub, terminal 

**Goal:** Everything installed, repo cloned, site running locally, one tiny edit seen in the browser.

**Analogies (say these):**
- **Git** = a save-game system. Every commit is a save point you can go back to.
- **GitHub** = Google Drive for code. A shared online copy everyone syncs with.
- **VS Code** = Microsoft Word, but for code.
- **Terminal** = texting your computer. You type a command, it replies.
- **Repo** (repository) = the project folder, plus its whole history.
- **Clone** = download a repo *with* its history and a link back to GitHub.

### Before the call (send him these links)
1. Install **VS Code**: https://code.visualstudio.com
2. Install **Git**: https://git-scm.com/downloads (Windows: keep all defaults; it includes Git Credential Manager, which handles GitHub login)
3. Accept your GitHub collaborator invite (check email or https://github.com/notifications)

### Steps

| Time | You SAY | He TYPES / does |
|---|---|---|
| 10 min | "Let's check Git is installed. Open VS Code → menu **Terminal → New Terminal**." | `git --version` → should print e.g. `git version 2.4x` |
| 5 min | "Git needs to know who you are, so your save points have your name on them. One-time setup." | `git config --global user.name "Aayush ..."`<br>`git config --global user.email "his-github-email@example.com"` |
| 10 min | "Now we download the project. First go to a folder where you keep projects." | `cd Documents`<br>`git clone https://github.com/harshita-that/cfa-prep-hub.git`<br>`cd cfa-prep-hub`<br>`code .` (opens VS Code in that folder; if it doesn't work, use **File → Open Folder**) |
| 10 min | "Install the Live Server extension: click the squares icon on the left (Extensions), search **Live Server** by Ritwick Dey, click Install." | Installs it |
| 5 min | "Right-click `public/index.html` → **Open with Live Server**." | Browser opens the site |
| 15 min | Tour the structure in the Explorer sidebar. "Each HTML file is a page. CSS = how it looks. JS = how it behaves. `flashcards.js` is just a list — open it." | Opens files, clicks around site pages |
| 10 min | "Tiny edit: open `public/index.html`, find `Study smarter for CFA Level 1`, change it to anything. Save with Ctrl+S (Cmd+S on Mac)." | Edits, saves, browser auto-refreshes 🎉 |
| 5 min | "Git noticed! Type this." | `git status` → shows `modified: public/index.html` |
| 5 min | "We won't keep this change. Undo it." (preview of Session 2) | `git restore public/index.html` |

**Common errors and fixes**

| Error | Fix |
|---|---|
| `git: command not found` / `'git' is not recognized` | Git isn't installed, or VS Code was open during install. Close and reopen VS Code. |
| `code: command not found` | Use **File → Open Folder** instead. (Mac: in VS Code press Cmd+Shift+P → "Shell Command: Install 'code' command in PATH".) |
| `Repository not found` on clone | He hasn't accepted the collaborator invite, or the URL has a typo. |
| A login window pops up | Normal. Sign in with GitHub in the browser. |
| No "Open with Live Server" option | Extension not installed, or he right-clicked a folder instead of `index.html`. |

---

## Session 2 — Git basics: status, add, commit, log, restore (~60 min)

**Goal:** He can make save points and undo mistakes without fear.

**Analogy:** "Git has three places. Your **desk** (working folder: files you're editing), a **box** (staging area: what you're about to save), and the **shelf** (history: saved commits). `git add` puts things in the box. `git commit` seals the box with a label and puts it on the shelf."

- **Commit** = a save point with a message.
- **Staging** = choosing which changes go into the next commit.

### Steps

| Time | You SAY | He TYPES |
|---|---|---|
| 5 min | "Always start by asking Git what's going on. You'll type this 1,000 times." | `git status` |
| 5 min | "Let's see the history. Each line is a save point." | `git log --oneline` (press `q` to exit) |
| 10 min | "Make a branch to practise on, so we don't touch main." | `git checkout -b practice/my-first-commit` |
| 5 min | "Open `public/js/flashcards.js` and change one definition slightly. Save." | edits, then `git status` (red = not in the box yet) |
| 5 min | "See exactly what changed." | `git diff` |
| 5 min | "Put it in the box." | `git add public/js/flashcards.js` then `git status` (green = in the box) |
| 5 min | "Seal it with a message. Short, like giving an order." | `git commit -m "Reword mosaic theory definition"` |
| 5 min | "There's your save point." | `git log --oneline` |
| 10 min | **Undo magic.** "Break something on purpose: delete a whole line in `quiz.js`, save. Site breaks. Don't panic." | Deletes a line, sees the quiz broken in the browser, then `git restore public/js/quiz.js` → it's back |
| 5 min | "Restore puts a file back to the last save point. It's your 'undo all my unsaved mess' button." | — |
| 5 min | Clean up: "This was practice. Go back to main and delete the practice branch." | `git checkout main`<br>`git branch -D practice/my-first-commit` |

**Exercise (5 min, he does alone):** on a new branch, edit two files, commit only *one* of them, then `git restore` the other. Ask him to explain what happened.

**Common errors and fixes**

| Error / situation | Fix |
|---|---|
| Stuck in a screen with `:` or `(END)` | That's the pager. Press `q`. |
| Stuck in a weird editor after `git commit` (no `-m`) | It's Vim. Press `Esc`, type `:q!`, Enter. Then commit again with `-m "message"`. |
| `nothing to commit, working tree clean` | Nothing changed, or the file wasn't saved (look for a dot on the VS Code tab). |
| `pathspec did not match any files` | Typo in the file path. Use Tab to autocomplete. |
| Committed with a typo in the message (not pushed yet) | `git commit --amend -m "Correct message"` |

> ⚠️ `git restore` throws away unsaved changes permanently. Use it only when you really want them gone.

---

## Session 3 — Branches, Pull Requests, and Vercel previews (~75 min)

**Goal:** He completes a real issue end-to-end: branch → commit → push → PR → review → merge → see it live.

**Analogy:**
- **Branch** = a parallel copy of the project where you can experiment. `main` is the live show. Your branch is the rehearsal room.
- **Push** = upload your commits to GitHub.
- **Pull Request (PR)** = "I'd like to merge my branch into main, please review it."
- **Vercel Preview** = a **rehearsal stage**. Every PR gets its own temporary website, so you can watch the performance before it goes on the **live show** (`main`).
- **Merge** = combine the branch into main.

### Steps

| Time | You SAY | He TYPES / does |
|---|---|---|
| 5 min | "Go to the Issues tab, open the issue *Change the site title and add your name in the footer*. Assign yourself (right side, **Assignees**)." | Assigns himself |
| 5 min | "Always start from a fresh main." | `git checkout main`<br>`git pull` |
| 5 min | "Make a branch named after the task." | `git checkout -b feature/site-title` |
| 15 min | Follow the steps in the issue. He edits the HTML files. "Check it in Live Server after each change." | Edits `public/*.html`, saves, checks browser |
| 5 min | "Save point." | `git status`<br>`git add public`<br>`git commit -m "Change site title and add name to footer"` |
| 5 min | "Upload the branch to GitHub." | `git push -u origin feature/site-title` |
| 10 min | "Go to GitHub. Click the yellow **Compare & pull request** button. Fill in the template. In *Linked issue*, write `Closes #1`." | Opens the PR |
| 5 min | "Wait ~1 minute. The **Vercel bot** comments with a **Preview** link. That's the rehearsal stage — only this PR's changes, live on the internet. The real site is untouched." | Opens the preview link on his phone |
| 10 min | **You review:** click **Files changed**, leave one comment on a line ("nice!" or a small request), then **Review changes → Approve**. | Watches; replies to your comment |
| 5 min | **Merge:** click **Squash and merge** → **Confirm**, then **Delete branch**. "Watch the issue: it closed by itself because of `Closes #1`." | Checks the issue is closed |
| 3 min | "Vercel sees main changed and deploys it. Open the real site in ~1 minute." | Refreshes the live site — his name is there 🎉 |
| 2 min | "Update your computer's copy of main." | `git checkout main`<br>`git pull` |

**Common errors and fixes**

| Error | Fix |
|---|---|
| `fatal: The current branch has no upstream branch` | He typed `git push` without `-u origin branch-name`. Copy the command Git suggests. |
| `Permission denied` / `403` on push | Collaborator invite not accepted, or signed into the wrong GitHub account. |
| `rejected ... protected branch` | He tried to push to main. Good — protection works. Make a branch. |
| No "Compare & pull request" button | Go to **Pull requests → New pull request**, set *compare* to his branch. |
| No Vercel comment on the PR | The repo isn't connected to Vercel yet, or the Vercel GitHub app lacks access to the repo. |
| Preview shows 404 | Output directory in Vercel isn't set to `public` (it's set in `vercel.json`; check the project settings didn't override it). |

---

## Session 4 — Merge conflicts, pulling updates, reviewing PRs (~60 min)

**Goal:** Conflicts stop being scary. He can update his copy and review someone else's PR.

**Analogy:** "Two people edit the *same sentence* in the same document at the same time. Git can't guess which version wins, so it asks you. That's a **merge conflict**. It's not an error — it's a question."

### Part A — Make a safe conflict on purpose (all on his computer, nothing touches main)

| You SAY | He TYPES |
|---|---|
| "Start fresh." | `git checkout main`<br>`git pull` |
| "Branch A changes the home page heading one way." | `git checkout -b practice/title-a`<br>Edit `public/index.html`: change the `<h1>` in the hero to `CFA prep made simple`<br>`git commit -am "Change heading to version A"` |
| "Go back to main and make branch B, which changes the SAME line differently." | `git checkout main`<br>`git checkout -b practice/title-b`<br>Edit the same `<h1>` to `Pass CFA Level 1`<br>`git commit -am "Change heading to version B"` |
| "Now try to combine A into B." | `git merge practice/title-a` → `CONFLICT (content): Merge conflict in public/index.html` |
| "Open the file. See the markers? `<<<<<<<` is your version, `>>>>>>>` is theirs, `=======` divides them. VS Code gives buttons: **Accept Current**, **Accept Incoming**, **Accept Both**. Or just edit it by hand to what you want, and delete the markers." | Picks a version or writes a combined one, saves |
| "Tell Git it's solved." | `git add public/index.html`<br>`git commit -m "Resolve heading conflict"` |
| "Practice done. Clean up." | `git checkout main`<br>`git branch -D practice/title-a practice/title-b` |

> `git commit -am` = add all *already-tracked* changed files and commit, in one step.

### Part B — Pulling updates (real teamwork)

**SAY:** "When someone else merges a PR, your computer doesn't know yet. `git pull` downloads the latest main."

1. **You** merge any small PR on GitHub (or make one live while he watches).
2. **He types:** `git checkout main` then `git pull` → sees the new commit with `git log --oneline`.
3. If he's in the middle of his own branch: `git checkout main`, `git pull`, `git checkout his-branch`, `git merge main` — brings the new work into his branch.

### Part C — Reviewing a PR

1. **You** open a small PR (e.g. add one flashcard with a deliberate typo).
2. **He** opens it → **Files changed** → hovers a line → clicks the blue **+** → writes a comment.
3. He clicks **Review changes** and tries each option:
   - **Comment** — general feedback, no decision
   - **Request changes** — "please fix before merging"
   - **Approve** — "good to go"
4. You fix the typo with a new commit; he sees the PR update and approves.

**SAY:** "Good reviews are kind and specific. Not 'this is wrong' — but 'this definition says X, I think it's Y because… what do you think?'"

**Common errors and fixes**

| Situation | Fix |
|---|---|
| Panic mid-conflict, wants to start over | `git merge --abort` — puts everything back to before the merge |
| Forgot to delete a `<<<<<<<` marker and committed | Edit the file, remove the markers, commit again |
| `git pull` says `Your local changes would be overwritten` | Commit the changes first, or `git stash` (put them aside), pull, then `git stash pop` |
| `error: cannot delete branch ... checked out` | Switch to main first: `git checkout main` |

---

## Session 5 — Where it goes next 




| Concept | Plain English | Analogy |
|---|---|---|
| **Frontend** | What users see and click | The shop floor |
| **Backend** | Code on a server that users can't see or tamper with | The kitchen / back office |
| **API** | The list of things the frontend can ask the backend for | The menu at the counter |
| **Database** | Organised permanent storage of users, questions, scores | A giant filing cabinet |
| **Authentication (auth)** | Logging in; proving who you are | ID check at the door |
| **Serverless functions** | Small bits of backend code that Vercel runs only when needed — no server to manage | A chef who only comes in when an order arrives |
| **Environment variables** | Secret keys stored in Vercel, never in Git | The safe in the back office |

### Walk through the roadmap together (`docs/03-roadmap.md`)
- **Phase 3:** move to Next.js + Supabase → logins, progress saved across devices.
- **Phase 4:** question bank in the database, timed mock exams, answers checked on the server.
- **Phase 5:** dashboard, weak-topic recommendations, spaced repetition.

### How Vercel grows with us
- Same GitHub → Vercel flow. Same preview links per PR.
- Next.js **API routes** become **serverless functions** automatically.
- Secrets (database keys) go in **Vercel → Project → Settings → Environment Variables**.
- Vercel has a marketplace to connect databases (e.g. Supabase, Postgres) to the project.



---

## Glossary

| Term | Meaning |
|---|---|
| **Repo** (repository) | A project folder tracked by Git, including its full history. |
| **Commit** | A save point: a snapshot of changes with a message. |
| **Branch** | A parallel line of work. You experiment on a branch without touching `main`. |
| **PR** (Pull Request) | A request to merge a branch into `main`, with space for review and discussion. |
| **Clone** | Download a copy of a repo from GitHub to your computer, with history. |
| **Push** | Upload your local commits to GitHub. |
| **Pull** | Download new commits from GitHub to your computer. |
| **Merge** | Combine changes from one branch into another. |
| **Merge conflict** | When two changes touch the same lines and Git needs a human to choose. |
| **Issue** | A ticket on GitHub describing a task, bug, or idea. |
| **Milestone** | A group of issues that together make up a goal (e.g. "Phase 2"). Shows % complete. |
| **Label** | A coloured tag on an issue (e.g. `good first issue`, `docs`). |
| **Fork** | Your own copy of *someone else's* repo on GitHub. (We don't need forks — we're collaborators.) |
| **README** | The front page of a repo: what it is and how to use it. |
| **PRD** | Product Requirements Document — what the product must do. |
| **Architecture** | How the pieces of a system fit together (the blueprint). |
| **ADR** | Architecture Decision Record — a short note on a big decision and why it was made. |
| **Roadmap** | The order of phases we'll build in. |
| **MVP** | Minimum Viable Product — the smallest version that's actually useful. |
| **Deploy** | Put a version of the site live on the internet. |
| **Preview deployment** | A temporary live version of a PR, made by Vercel, for review. |
| **localStorage** | Small storage inside a browser where a site can save data for that user. |
| **Terminal** | A text window where you type commands to your computer. |
