# Pathwise — Wireframes (ASCII)

## 1. Landing Page

```
┌──────────────────────────────────────────────────────────────┐
│  🧭 Pathwise                          [Log In]  [Sign Up]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│          Learn anything. The right way.                      │
│                                                              │
│    Structured roadmaps with real resources —                 │
│    not AI-rewritten fluff.                                   │
│                                                              │
│              [ Get Started — It's Free ]                     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Browse Topics:                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │   </> CS   │  │  🧠 Psych  │  │  💰 Finance│             │
│  │            │  │            │  │            │             │
│  │ 12 paths  │  │  8 paths   │  │  6 paths   │             │
│  └────────────┘  └────────────┘  └────────────┘             │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Example Roadmap Preview:                                    │
│  ┌──────────────────────────────────────────┐                │
│  │                                          │                │
│  │   [Internet] ──→ [HTML] ──→ [CSS]        │                │
│  │                     │         │          │                │
│  │                     └────→ [JavaScript]  │                │
│  │                              │           │                │
│  │                         [React] [Node]   │                │
│  │                                          │                │
│  └──────────────────────────────────────────┘                │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  Pathwise  |  About  |  Pricing  |  Contact                 │
└──────────────────────────────────────────────────────────────┘
```

## 2. Onboarding Flow

```
┌──────────────────────────────────────────────────────────────┐
│  🧭 Pathwise                              Step 1 of 4       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  What do you want to learn?                                  │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐                    │
│  │  </> Programming │  │  🧠 Psychology  │                    │
│  │     & CS         │  │                 │                    │
│  │  ✓ Selected      │  │                 │                    │
│  └─────────────────┘  └─────────────────┘                    │
│  ┌─────────────────┐                                         │
│  │  💰 Finance &   │                                         │
│  │    Business      │                                         │
│  │                  │                                         │
│  └─────────────────┘                                         │
│                                                              │
│                                        [Next →]              │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  🧭 Pathwise                              Step 2 of 4       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Pick a learning path:                                       │
│                                                              │
│  ┌──────────────────────────────────────────┐                │
│  │  Web Development              Beginner   │                │
│  │  HTML, CSS, JS, React, Node    ~6 months │                │
│  └──────────────────────────────────────────┘                │
│  ┌──────────────────────────────────────────┐                │
│  │  Data Science                  Beginner  │                │
│  │  Python, Stats, ML, Pandas     ~8 months │                │
│  └──────────────────────────────────────────┘                │
│  ┌──────────────────────────────────────────┐                │
│  │  Systems Programming        Intermediate │                │
│  │  C, OS, Networks, Distributed  ~1 year   │                │
│  └──────────────────────────────────────────┘                │
│                                                              │
│                                 [← Back]  [Next →]           │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  🧭 Pathwise                              Step 3 of 4       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  What's your current level?                                  │
│                                                              │
│  ( ) Complete beginner — never done this before              │
│  (•) Some knowledge — know the basics                        │
│  ( ) Intermediate — comfortable but have gaps                │
│  ( ) Advanced — looking to fill specific gaps                │
│                                                              │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─                 │
│                                                              │
│  Optional — help us personalize:                             │
│                                                              │
│  Your goal: [become a frontend developer_______]             │
│                                                              │
│  Timeline:  (•) No rush  ( ) 3 mo  ( ) 6 mo  ( ) 1 yr      │
│                                                              │
│                                 [← Back]  [Next →]           │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  🧭 Pathwise                              Step 4 of 4       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Quick knowledge check (optional)                            │
│                                                              │
│  This helps us figure out where to start you.                │
│                                                              │
│  Q1: What does HTML stand for?                               │
│  ( ) Hyper Text Making Language                              │
│  (•) Hyper Text Markup Language                              │
│  ( ) High Tech Modern Language                               │
│                                                              │
│  Q2: What is CSS used for?                                   │
│  ( ) Server-side logic                                       │
│  ( ) Database queries                                        │
│  (•) Styling web pages                                       │
│                                                              │
│                                                              │
│  [Skip — I'll self-report]       [← Back]  [See My Roadmap] │
└──────────────────────────────────────────────────────────────┘
```

## 3. Roadmap View (Main Screen)

```
┌──────────────────────────────────────────────────────────────────────┐
│  🧭 Pathwise    [My Roadmaps ▾]    [Explore]         [Avatar ▾]    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Web Development Roadmap                    Progress: ████░░ 35%     │
│  Goal: Become a frontend developer          🔥 7 day streak         │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │      ┌──────────┐                                            │    │
│  │      │ Internet │ ✅                                         │    │
│  │      │  Basics  │                                            │    │
│  │      └────┬─────┘                                            │    │
│  │           │                                                  │    │
│  │      ┌────▼─────┐                                            │    │
│  │      │  HTML    │ ✅                                         │    │
│  │      │  Basics  │                                            │    │
│  │      └────┬─────┘                                            │    │
│  │           │                                                  │    │
│  │      ┌────▼─────┐                                            │    │
│  │      │   CSS    │ 🔵 IN PROGRESS                             │    │
│  │      │  Basics  │                                            │    │
│  │      └────┬─────┘                                            │    │
│  │           │                                                  │    │
│  │      ┌────▼─────┐     ┌──────────┐                           │    │
│  │      │   JS     │ 🔒  │  Git &   │ 🔒                       │    │
│  │      │  Basics  │────→│  GitHub  │                           │    │
│  │      └────┬─────┘     └──────────┘                           │    │
│  │           │                                                  │    │
│  │      ┌────▼─────┐     ┌──────────┐                           │    │
│  │      │  React   │ 🔒  │  Node.js │ 🔒                       │    │
│  │      │          │     │          │                           │    │
│  │      └──────────┘     └──────────┘                           │    │
│  │                                                              │    │
│  │  [+ / - zoom]                    [Fit view]                  │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  Study Mode: [Self-Guided ▾]        [📊 View Stats] (paid)          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Node Detail View (clicking a topic node)

```
┌──────────────────────────────────────────────────────────────────────┐
│  🧭 Pathwise    ← Back to Roadmap                    [Avatar ▾]    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  CSS Fundamentals                           Status: 🔵 In Progress  │
│  Estimated: ~2 weeks                                                 │
│                                                                      │
│  ┌─ Overview ─────────────────────────────────────────────────────┐  │
│  │ CSS (Cascading Style Sheets) controls the visual presentation │  │
│  │ of web pages. You'll learn selectors, the box model, flexbox, │  │
│  │ grid, responsive design, and basic animations.                │  │
│  │                                                               │  │
│  │ Why it matters: Without CSS, every website would look like    │  │
│  │ a plain text document from 1995.                              │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  📚 Resources                                                        │
│  ┌───────────────────────────────────────────────────────────────┐   │
│  │ ⭐ MDN CSS Guide                              article | free │   │
│  │    developer.mozilla.org                       beginner      │   │
│  │                                           [Open Resource →]  │   │
│  ├───────────────────────────────────────────────────────────────┤   │
│  │    "HTML & CSS" by Jon Duckett              book | ~$25      │   │
│  │    Beautifully designed intro book          beginner         │   │
│  │                                           [View on Amazon →] │   │
│  ├───────────────────────────────────────────────────────────────┤   │
│  │    CSS Tricks — Flexbox Guide                article | free  │   │
│  │    css-tricks.com                           intermediate     │   │
│  │                                           [Open Resource →]  │   │
│  ├───────────────────────────────────────────────────────────────┤   │
│  │    Kevin Powell CSS Crash Course            video | free     │   │
│  │    YouTube — 1hr 20min                      beginner         │   │
│  │                                           [Watch on YT →]   │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  🔨 Project                                                          │
│  ┌───────────────────────────────────────────────────────────────┐   │
│  │  Style your personal bio page                                │   │
│  │  Apply what you learned: use flexbox for layout, add colors, │   │
│  │  typography, and make it responsive.                         │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  📝 My Notes (paid)                                                  │
│  ┌───────────────────────────────────────────────────────────────┐   │
│  │  Type your notes here...                                     │   │
│  │                                                               │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  [ ✅ Mark as Complete ]          [📝 Take Quiz (optional)]          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## 5. Stats / Progress Dashboard (Paid Feature)

```
┌──────────────────────────────────────────────────────────────────────┐
│  🧭 Pathwise    [My Roadmaps ▾]    [Explore]         [Avatar ▾]    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  📊 Your Progress — Web Development                                  │
│                                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │  🔥 Streak  │  │ ✅ Completed│  │ ⏱ Time      │  │ 📈 Level   │ │
│  │   7 days    │  │  5 / 14     │  │  23 hours   │  │ Beginner+  │ │
│  │             │  │  topics     │  │  total      │  │            │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘ │
│                                                                      │
│  Weekly Activity                                                     │
│  ┌───────────────────────────────────────────────────┐               │
│  │  Mon  Tue  Wed  Thu  Fri  Sat  Sun                │               │
│  │  ██   ██   ██   ░░   ██   ██   ██                 │               │
│  │  2h   1h   3h   --   2h   1h   1h                 │               │
│  └───────────────────────────────────────────────────┘               │
│                                                                      │
│  Upcoming (Structured Mode)                                          │
│  ┌───────────────────────────────────────────────────┐               │
│  │  Today:     Finish CSS Flexbox Guide              │               │
│  │  Tomorrow:  Start CSS Grid article                │               │
│  │  This week: Complete CSS Fundamentals project     │               │
│  └───────────────────────────────────────────────────┘               │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## 6. Explore / Browse Topics

```
┌──────────────────────────────────────────────────────────────────────┐
│  🧭 Pathwise    [My Roadmaps]    [Explore ▾]         [Avatar ▾]    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Explore Learning Paths                 [Search____________ 🔍]     │
│                                                                      │
│  ── Programming & CS ────────────────────────────────────────        │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐           │
│  │ Web Dev        │ │ Data Science   │ │ Mobile Dev     │           │
│  │ Beginner       │ │ Beginner       │ │ Intermediate   │           │
│  │ ~6 months      │ │ ~8 months      │ │ ~4 months      │           │
│  │ 14 topics      │ │ 18 topics      │ │ 10 topics      │           │
│  │ [Start →]      │ │ [Start →]      │ │ [Start →]      │           │
│  └────────────────┘ └────────────────┘ └────────────────┘           │
│                                                                      │
│  ── Psychology ──────────────────────────────────────────            │
│  ┌────────────────┐ ┌────────────────┐                               │
│  │ Cognitive Psych│ │ Behavioral     │                               │
│  │ Beginner       │ │ Beginner       │                               │
│  │ ~4 months      │ │ ~3 months      │                               │
│  │ 10 topics      │ │ 8 topics       │                               │
│  │ [Start →]      │ │ [Start →]      │                               │
│  └────────────────┘ └────────────────┘                               │
│                                                                      │
│  ── Finance & Business ──────────────────────────────────            │
│  ┌────────────────┐ ┌────────────────┐                               │
│  │ Stock Markets  │ │ Personal       │                               │
│  │ Beginner       │ │ Finance        │                               │
│  │ ~3 months      │ │ Beginner       │                               │
│  │ 8 topics       │ │ ~2 months      │                               │
│  │ [Start →]      │ │ [Start →]      │                               │
│  └────────────────┘ └────────────────┘                               │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Screen Summary

| # | Screen | Free/Paid | Priority |
|---|--------|-----------|----------|
| 1 | Landing Page | Public | MVP |
| 2 | Onboarding (4 steps) | Free | MVP |
| 3 | Roadmap View (graph) | Free | MVP |
| 4 | Node Detail View | Free (notes = paid) | MVP |
| 5 | Stats Dashboard | Paid | MVP |
| 6 | Explore / Browse | Free | MVP |
