# Product Vision: Learning Roadmap Platform

## One-Line Description
A learning platform that creates structured, dependency-aware study roadmaps using original resources — not AI-rewritten content.

## Core Problem
After the AI revolution, people study using AI tools that customize and simplify information. Users understand concepts *superficially* but not *deeply*. There's no originality — just AI-paraphrased content. Users need the **real** information, not a dumbed-down version.

## Solution
An app/website that:
1. Understands what the user wants to learn
2. Builds a **knowledge dependency graph** (prerequisite-aware roadmap)
3. Points users to **original, high-quality resources** (books, articles, podcasts, courses, projects)
4. Lets users study within the app
5. Tracks progress and adapts the path

## Core Philosophy
> AI assists with **structure and navigation**, not with **rewriting content**. The app is a curator and guide, not a content generator.

---

## Key Features

### 1. Goal Setting
- User defines what they want to learn (e.g., "Machine Learning", "Finance", "Psychology")
- Optional: set a timeline (3 months, 6 months, 1 year)
- Optional: define end goal ("become a data scientist", "understand stock markets")

### 2. Knowledge Dependency Graph
- The core innovation: a visual graph of topics with prerequisite relationships
- Example (Math): Addition → Multiplication → Algebra → Calculus → Differential Equations
- User can mark their current knowledge level → app calculates where to start
- Visual map view so users see the full learning landscape

### 3. Resource Curation
- For each topic node, the app recommends **real resources**:
  - Books (linked to stores/libraries)
  - Articles (linked to original sources)
  - Podcasts (linked to Spotify/Apple Podcasts/etc.)
  - Videos (linked to YouTube/course platforms)
  - Projects (hands-on exercises to build real things)
- Resources are curated for quality, not quantity
- Multiple difficulty levels per resource

### 4. Study Modes
- **Self-Guided Mode**: User sees the full roadmap, browses freely, picks what to study
- **Structured Mode**: App creates a daily/weekly study plan with tasks, reminders, and streaks

### 5. In-App Study Experience
- Read articles and view content within the app (where licensing allows)
- Embed podcast/video players
- Link out to external resources when needed
- Note-taking alongside content

### 6. Optional Assessment
- Quick quizzes to assess current knowledge level
- Helps the app determine where to place users on the roadmap
- Users can skip assessment and self-report their level instead

### 7. Project-Based Learning
- For practical topics (coding, design, etc.), the app emphasizes building real projects
- "Don't just watch videos — build something"
- Suggested projects at each skill level

---

## Target Audience
- Students (academic learning)
- Professionals (upskilling, career switching)
- Self-learners (hobbies, personal growth)
- Anyone who wants to learn anything in a structured way

## Initial Launch Scope
- Start with **1-3 broad topics** (TBD — candidates: Programming, Mathematics, Finance/Business)
- Build high-quality, expert-reviewed dependency graphs for these topics
- Expand to more topics based on user demand

---

## What This App is NOT
- NOT an AI tutor that explains everything (it points you to real sources)
- NOT a course platform (it curates existing courses, doesn't create its own)
- NOT a replacement for books/articles (it helps you find and navigate them)
- NOT a social media platform (though community features may come later)

---

## Decisions Made
- **Platform**: Web app first (responsive), mobile app later
- **Launch Topics**: Programming/CS, Psychology, Finance/Business
- **Content Approach**: Curator + AI Guide — Links to real resources + AI provides topic overviews, study tips, and "what to focus on" guidance. AI never replaces the actual learning material.
- **Name**: TBD

## Open Questions (To Be Decided)
- [ ] Business model: Freemium, fully free, affiliate-based?
- [ ] Tech stack
- [ ] AI provider for roadmap generation
- [ ] How to source and maintain quality resource recommendations
- [ ] App name

---

## User Flow (Draft)

### First-Time User Experience
1. **Landing Page** → User sees what the app does, example roadmaps
2. **Sign Up** → Minimal info (email/Google)
3. **Onboarding**:
   - "What do you want to learn?" → Pick a topic (Programming, Psychology, Finance)
   - "What's your current level?" → Beginner / Some knowledge / Intermediate / Advanced
   - (Optional) "What's your goal?" → Free text (e.g., "become a backend developer")
   - (Optional) "Timeline?" → 3 months / 6 months / 1 year / No rush
   - (Optional) Quick assessment quiz to place them accurately
4. **Roadmap Generated** → User sees their personalized dependency graph

### Core Loop (Daily Use)
1. User opens app → sees their roadmap with current position highlighted
2. **Self-Guided Mode**: Browse the map, pick any unlocked topic, see resources
3. **Structured Mode**: "Today's task" — the app suggests what to study next
4. User clicks a topic node → sees:
   - Brief overview (what this topic is, why it matters)
   - Curated resources (books, articles, videos, podcasts)
   - Suggested projects (for practical topics)
   - (Optional) Quick quiz to test understanding
5. User studies using linked/embedded resources
6. User marks topic as complete → next topics unlock on the graph
7. Progress tracked over time (streaks, completion %, time spent)

### Example: "I want to learn Web Development" (Beginner)
```
Roadmap generated:
├── 1. How the Internet Works (1 week)
│   ├── Resource: "How the Web Works" - MDN Docs
│   └── Resource: Fireship YouTube video
├── 2. HTML Basics (1-2 weeks)
│   ├── Resource: MDN HTML Guide
│   ├── Resource: "HTML & CSS" by Jon Duckett (book)
│   └── Project: Build a personal bio page
├── 3. CSS Fundamentals (2 weeks)
│   ├── Resource: CSS Tricks - Flexbox Guide
│   └── Project: Style your bio page
├── 4. JavaScript Basics (3-4 weeks)
│   ├── Resource: "Eloquent JavaScript" (free book)
│   ├── Resource: JavaScript.info
│   └── Project: Build a calculator app
├── 5. Git & GitHub (1 week)
│   └── ...
└── ... continues to React, Node.js, databases, etc.
```
