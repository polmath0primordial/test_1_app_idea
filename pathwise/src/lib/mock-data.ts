import type {
  Topic,
  Roadmap,
  RoadmapNode,
  NodeEdge,
  Resource,
  NodeResource,
  UserNodeProgress,
} from "./types";

// ─── Topics ──────────────────────────────────────────────────
export const topics: Topic[] = [
  {
    id: "t1",
    name: "Programming & CS",
    slug: "programming-cs",
    description:
      "Learn to code from scratch, build web apps, dive into data structures, and understand computer science fundamentals.",
    icon: "</>",
    is_published: true,
  },
  {
    id: "t2",
    name: "Psychology",
    slug: "psychology",
    description:
      "Explore the human mind — cognitive processes, behavioral patterns, mental health, and the science of decision-making.",
    icon: "🧠",
    is_published: true,
  },
  {
    id: "t3",
    name: "Finance & Business",
    slug: "finance-business",
    description:
      "Master personal finance, understand stock markets, learn accounting, and build business acumen.",
    icon: "💰",
    is_published: true,
  },
];

// ─── Roadmaps ────────────────────────────────────────────────
export const roadmaps: Roadmap[] = [
  {
    id: "r1",
    topic_id: "t1",
    title: "Web Development",
    slug: "web-development",
    description:
      "Go from zero to building full-stack web applications. Covers HTML, CSS, JavaScript, React, Node.js, and databases.",
    difficulty: "beginner",
    estimated_duration: "6 months",
    is_published: true,
  },
  {
    id: "r2",
    topic_id: "t1",
    title: "Data Science & ML",
    slug: "data-science-ml",
    description:
      "Learn Python, statistics, data analysis, and machine learning from the ground up.",
    difficulty: "beginner",
    estimated_duration: "8 months",
    is_published: true,
  },
  {
    id: "r3",
    topic_id: "t1",
    title: "Systems Programming",
    slug: "systems-programming",
    description:
      "Deep dive into C, operating systems, networking, and distributed systems.",
    difficulty: "intermediate",
    estimated_duration: "1 year",
    is_published: true,
  },
  {
    id: "r4",
    topic_id: "t2",
    title: "Cognitive Psychology",
    slug: "cognitive-psychology",
    description:
      "Understand how people think, learn, remember, and make decisions.",
    difficulty: "beginner",
    estimated_duration: "4 months",
    is_published: true,
  },
  {
    id: "r5",
    topic_id: "t2",
    title: "Behavioral Psychology",
    slug: "behavioral-psychology",
    description:
      "Study human behavior, conditioning, habits, and behavioral change.",
    difficulty: "beginner",
    estimated_duration: "3 months",
    is_published: true,
  },
  {
    id: "r6",
    topic_id: "t3",
    title: "Stock Market Investing",
    slug: "stock-market-investing",
    description:
      "Learn how markets work, fundamental analysis, portfolio building, and risk management.",
    difficulty: "beginner",
    estimated_duration: "3 months",
    is_published: true,
  },
  {
    id: "r7",
    topic_id: "t3",
    title: "Personal Finance",
    slug: "personal-finance",
    description:
      "Budgeting, saving, debt management, taxes, and building long-term wealth.",
    difficulty: "beginner",
    estimated_duration: "2 months",
    is_published: true,
  },
];

// ─── Nodes (Web Development roadmap) ────────────────────────
export const webDevNodes: RoadmapNode[] = [
  {
    id: "n1",
    roadmap_id: "r1",
    title: "How the Internet Works",
    slug: "internet-basics",
    description:
      "DNS, HTTP, servers, browsers — understand the plumbing before you build on it.",
    ai_overview:
      "The internet is a global network of connected computers. When you type a URL, your browser sends an HTTP request to a server via DNS lookup. Understanding this foundation makes everything else click.",
    estimated_hours: 5,
    position_x: 250,
    position_y: 0,
    order_index: 1,
  },
  {
    id: "n2",
    roadmap_id: "r1",
    title: "HTML Basics",
    slug: "html-basics",
    description:
      "The skeleton of every web page — learn to structure content with semantic HTML.",
    ai_overview:
      "HTML (HyperText Markup Language) defines the structure of web content. You'll learn elements, attributes, forms, and semantic tags. Focus on writing clean, accessible markup.",
    estimated_hours: 12,
    position_x: 250,
    position_y: 150,
    order_index: 2,
  },
  {
    id: "n3",
    roadmap_id: "r1",
    title: "CSS Fundamentals",
    slug: "css-fundamentals",
    description:
      "Make things look good — selectors, box model, flexbox, grid, and responsive design.",
    ai_overview:
      "CSS controls the visual presentation of HTML. Master the box model first, then flexbox for 1D layouts and grid for 2D. Responsive design ensures your sites work on all screen sizes.",
    estimated_hours: 20,
    position_x: 250,
    position_y: 300,
    order_index: 3,
  },
  {
    id: "n4",
    roadmap_id: "r1",
    title: "JavaScript Basics",
    slug: "javascript-basics",
    description:
      "The language of the web — variables, functions, DOM manipulation, events, and async.",
    ai_overview:
      "JavaScript makes web pages interactive. Start with variables, data types, and functions. Then learn DOM manipulation to make pages respond to user actions. Async/await and promises come next.",
    estimated_hours: 40,
    position_x: 150,
    position_y: 450,
    order_index: 4,
  },
  {
    id: "n5",
    roadmap_id: "r1",
    title: "Git & GitHub",
    slug: "git-github",
    description:
      "Version control — track changes, collaborate, and never lose your work.",
    ai_overview:
      "Git tracks changes to your code over time. GitHub hosts your repositories online. Learn commits, branches, merges, and pull requests. This is essential for any developer workflow.",
    estimated_hours: 8,
    position_x: 400,
    position_y: 450,
    order_index: 5,
  },
  {
    id: "n6",
    roadmap_id: "r1",
    title: "React",
    slug: "react",
    description:
      "Build modern UIs with components, state, props, hooks, and the React ecosystem.",
    ai_overview:
      "React is a JavaScript library for building user interfaces. Think in components — small, reusable pieces that manage their own state. Hooks (useState, useEffect) are the modern way to add logic.",
    estimated_hours: 50,
    position_x: 100,
    position_y: 600,
    order_index: 6,
  },
  {
    id: "n7",
    roadmap_id: "r1",
    title: "Node.js & Express",
    slug: "nodejs-express",
    description:
      "Server-side JavaScript — build APIs, handle requests, connect to databases.",
    ai_overview:
      "Node.js lets you run JavaScript on the server. Express is the most popular framework for building APIs. You'll learn routing, middleware, request handling, and connecting to databases.",
    estimated_hours: 35,
    position_x: 350,
    position_y: 600,
    order_index: 7,
  },
  {
    id: "n8",
    roadmap_id: "r1",
    title: "Databases (SQL)",
    slug: "databases-sql",
    description:
      "Store and query data — tables, relationships, joins, and database design.",
    ai_overview:
      "Databases store your application's data persistently. SQL (Structured Query Language) lets you create tables, insert data, and query it. Learn normalization, joins, and indexing for efficient data access.",
    estimated_hours: 25,
    position_x: 250,
    position_y: 750,
    order_index: 8,
  },
];

// ─── Edges (prerequisites) ──────────────────────────────────
export const webDevEdges: NodeEdge[] = [
  { id: "e1", roadmap_id: "r1", source_node_id: "n1", target_node_id: "n2" },
  { id: "e2", roadmap_id: "r1", source_node_id: "n2", target_node_id: "n3" },
  { id: "e3", roadmap_id: "r1", source_node_id: "n3", target_node_id: "n4" },
  { id: "e4", roadmap_id: "r1", source_node_id: "n3", target_node_id: "n5" },
  { id: "e5", roadmap_id: "r1", source_node_id: "n4", target_node_id: "n6" },
  { id: "e6", roadmap_id: "r1", source_node_id: "n4", target_node_id: "n7" },
  { id: "e7", roadmap_id: "r1", source_node_id: "n5", target_node_id: "n7" },
  { id: "e8", roadmap_id: "r1", source_node_id: "n6", target_node_id: "n8" },
  { id: "e9", roadmap_id: "r1", source_node_id: "n7", target_node_id: "n8" },
];

// ─── Resources ───────────────────────────────────────────────
export const resources: Resource[] = [
  {
    id: "res1",
    title: "How the Web Works — MDN",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
    type: "article",
    platform: "MDN",
    author: null,
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description: "Mozilla's clear, authoritative explanation of how the web works.",
    is_active: true,
  },
  {
    id: "res2",
    title: "The Internet Explained — Fireship",
    url: "https://www.youtube.com/watch?v=7_LPdttKXPc",
    type: "video",
    platform: "YouTube",
    author: "Fireship",
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description: "Fast-paced 12-minute overview of how the internet works.",
    is_active: true,
  },
  {
    id: "res3",
    title: "MDN HTML Guide",
    url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    type: "article",
    platform: "MDN",
    author: null,
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description: "The definitive HTML learning path — structured and thorough.",
    is_active: true,
  },
  {
    id: "res4",
    title: "HTML & CSS by Jon Duckett",
    url: "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189",
    type: "book",
    platform: "Amazon",
    author: "Jon Duckett",
    difficulty: "beginner",
    is_free: false,
    affiliate_url: null,
    description: "Beautifully designed book — great visual learner's introduction.",
    is_active: true,
  },
  {
    id: "res5",
    title: "Build a Personal Bio Page",
    url: "",
    type: "project",
    platform: null,
    author: null,
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description:
      "Create a simple personal page with your name, bio, links, and a photo. Practice semantic HTML.",
    is_active: true,
  },
  {
    id: "res6",
    title: "CSS Tricks — A Complete Guide to Flexbox",
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    type: "article",
    platform: "CSS-Tricks",
    author: null,
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description: "The go-to flexbox reference. Visual diagrams for every property.",
    is_active: true,
  },
  {
    id: "res7",
    title: "Kevin Powell — CSS Crash Course",
    url: "https://www.youtube.com/watch?v=1PnVor36_40",
    type: "video",
    platform: "YouTube",
    author: "Kevin Powell",
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description: "Excellent 1.5-hour CSS fundamentals walkthrough with real examples.",
    is_active: true,
  },
  {
    id: "res8",
    title: "Style Your Bio Page",
    url: "",
    type: "project",
    platform: null,
    author: null,
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description:
      "Apply CSS to your bio page — use flexbox for layout, add colors, typography, and make it responsive.",
    is_active: true,
  },
  {
    id: "res9",
    title: "Eloquent JavaScript",
    url: "https://eloquentjavascript.net/",
    type: "book",
    platform: null,
    author: "Marijn Haverbeke",
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description: "Free online book — one of the best introductions to JavaScript.",
    is_active: true,
  },
  {
    id: "res10",
    title: "JavaScript.info",
    url: "https://javascript.info/",
    type: "article",
    platform: "JavaScript.info",
    author: null,
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description: "Comprehensive modern JavaScript tutorial — from basics to advanced.",
    is_active: true,
  },
  {
    id: "res11",
    title: "Build a Calculator App",
    url: "",
    type: "project",
    platform: null,
    author: null,
    difficulty: "beginner",
    is_free: true,
    affiliate_url: null,
    description:
      "Build a functional calculator with HTML, CSS, and JavaScript. Practice DOM manipulation and event handling.",
    is_active: true,
  },
];

// ─── Node-Resource mappings ──────────────────────────────────
export const nodeResources: NodeResource[] = [
  { id: "nr1", node_id: "n1", resource_id: "res1", sort_order: 1, is_primary: true },
  { id: "nr2", node_id: "n1", resource_id: "res2", sort_order: 2, is_primary: false },
  { id: "nr3", node_id: "n2", resource_id: "res3", sort_order: 1, is_primary: true },
  { id: "nr4", node_id: "n2", resource_id: "res4", sort_order: 2, is_primary: false },
  { id: "nr5", node_id: "n2", resource_id: "res5", sort_order: 3, is_primary: false },
  { id: "nr6", node_id: "n3", resource_id: "res6", sort_order: 1, is_primary: true },
  { id: "nr7", node_id: "n3", resource_id: "res7", sort_order: 2, is_primary: false },
  { id: "nr8", node_id: "n3", resource_id: "res8", sort_order: 3, is_primary: false },
  { id: "nr9", node_id: "n4", resource_id: "res9", sort_order: 1, is_primary: true },
  { id: "nr10", node_id: "n4", resource_id: "res10", sort_order: 2, is_primary: false },
  { id: "nr11", node_id: "n4", resource_id: "res11", sort_order: 3, is_primary: false },
];

// ─── Mock user progress ──────────────────────────────────────
export const mockUserProgress: UserNodeProgress[] = [
  {
    id: "up1",
    user_id: "user1",
    node_id: "n1",
    status: "completed",
    started_at: "2025-01-01",
    completed_at: "2025-01-07",
  },
  {
    id: "up2",
    user_id: "user1",
    node_id: "n2",
    status: "completed",
    started_at: "2025-01-08",
    completed_at: "2025-01-20",
  },
  {
    id: "up3",
    user_id: "user1",
    node_id: "n3",
    status: "in_progress",
    started_at: "2025-01-21",
    completed_at: null,
  },
];

// Helper to get resources for a given node
export function getResourcesForNode(nodeId: string): (NodeResource & { resource: Resource })[] {
  return nodeResources
    .filter((nr) => nr.node_id === nodeId)
    .map((nr) => ({
      ...nr,
      resource: resources.find((r) => r.id === nr.resource_id)!,
    }))
    .sort((a, b) => a.sort_order - b.sort_order);
}

// Helper to get node status
export function getNodeStatus(nodeId: string): UserNodeProgress | undefined {
  return mockUserProgress.find((p) => p.node_id === nodeId);
}

// Helper to get roadmaps for a topic
export function getRoadmapsForTopic(topicId: string): Roadmap[] {
  return roadmaps.filter((r) => r.topic_id === topicId);
}
