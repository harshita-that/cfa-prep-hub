# 01 — Requirements (lightweight PRD)

> **What is this doc?** A **PRD** (Product Requirements Document) lists *exactly* what the product must do. The idea doc says "why"; this doc says "what". It's the contract everyone agrees on before building, so nobody builds the wrong thing.

## Scope

This doc covers the **MVP** (Minimum Viable Product): the smallest version that's actually useful. For us that's Phase 1 — a static website.

## User stories

> **User story** = a requirement written from the user's point of view: *"As a [who], I want to [do what], so that [why]."* It keeps us focused on real people, not features for their own sake.

1. As a candidate, I want to **flip through flashcards of key terms**, so that I can memorise definitions in short sessions.
2. As a candidate, I want to **answer multiple-choice practice questions**, so that I can test whether I actually understand the material.
3. As a candidate, I want to **see immediately if my answer was right**, with an explanation, so that I learn from mistakes right away.
4. As a candidate, I want to **see my final quiz score**, so that I know how I'm doing overall.
5. As a candidate, I want to **tick off topics I've finished studying**, so that I can see my progress.
6. As a candidate, I want my **progress to be remembered when I come back**, so that I don't lose my place.
7. As a candidate, I want to **see how much each topic counts on the exam**, so that I can prioritise the heavy ones.
8. As a candidate, I want the site to **work well on my phone**, so that I can study anywhere.

## Prioritisation (MoSCoW)

> **MoSCoW** is a way to sort requirements: **M**ust have, **S**hould have, **C**ould have (nice-to-have), **W**on't have (this time).

### Must have
- Home page with links to all pages
- Flashcards page: 15 cards covering all 10 topic areas, tap/click to flip
- Quiz page: 10 questions, instant feedback, final score, restart
- Study tracker: 10 topics with exam weights, checkboxes, progress bar, saved in browser
- Mobile-friendly layout
- Visible "practice only, not official CFA material" disclaimer

### Should have
- Explanation shown after each quiz answer
- Flashcard navigation (next / previous) and a topic label on each card
- Consistent navigation bar on every page
- Keyboard accessible (cards and buttons usable without a mouse)

### Could have (nice-to-have)
- Shuffle flashcards / questions
- Filter flashcards by topic
- Dark mode
- Formula sheet page

### Won't have (explicitly OUT of scope for the MVP)
- ❌ User accounts or logins
- ❌ A backend server or database
- ❌ Payments
- ❌ Timed mock exams
- ❌ Levels 2 and 3
- ❌ Analytics or spaced repetition
- ❌ Native mobile app

Writing down what we're **not** doing is just as important — it stops "scope creep" (the project slowly growing until it never ships).

## Acceptance criteria

> **Acceptance criteria** = a checklist that says "this feature is done when…". If every box is ticked, the feature is finished. No arguing.

### Home page
- [ ] Shows the site title and a 1–2 sentence intro
- [ ] Has links/cards to Flashcards, Quiz, and Study Tracker that work
- [ ] Shows the practice-only disclaimer

### Flashcards
- [ ] Shows one card at a time with the term on the front
- [ ] Clicking/tapping (or pressing Enter/Space) flips the card to show the definition
- [ ] "Next" and "Previous" buttons move between cards; a counter shows e.g. "3 / 15"
- [ ] Each card shows its topic area
- [ ] All 15 cards come from `public/js/flashcards.js`, and all 10 topics are covered

### Quiz
- [ ] Shows one question at a time with 3 or 4 answer options
- [ ] After choosing, the correct answer turns green; a wrong choice turns red
- [ ] An explanation appears after answering; options are locked
- [ ] "Next" moves to the next question; after the last one, the final score is shown
- [ ] A "Try again" button restarts the quiz
- [ ] All 10 questions come from `public/js/questions.js`

### Study tracker
- [ ] Lists all 10 topic areas with their approximate exam weight
- [ ] Each topic has a checkbox
- [ ] A progress bar shows % of topics done, and a weighted % (by exam weight)
- [ ] Refreshing the page keeps the ticked boxes (saved in `localStorage`)
- [ ] A "Reset" button clears progress

### General
- [ ] Every page works on a 375px-wide phone screen without sideways scrolling
- [ ] Every page has the same navigation bar and footer disclaimer
- [ ] No build tools: opening `public/index.html` in a browser just works
