# Pathwise — Database Schema (Supabase / PostgreSQL)

## Entity Relationship Overview

```
users ─────────── user_roadmaps ─────────── roadmaps
                       │                       │
                       │                    roadmap_nodes
                       │                       │
                  user_node_progress      node_edges (prerequisites)
                       │                       │
                       │                  node_resources
                       │                       │
                  user_notes              resources
                                              │
                                         resource_ratings (Phase 2)
```

---

## Tables

### 1. `profiles` (extends Supabase auth.users)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | References auth.users(id) |
| display_name | text | |
| avatar_url | text | nullable |
| tier | enum | 'free' / 'paid' |
| streak_count | int | Default 0 |
| last_active_date | date | For streak calculation |
| created_at | timestamptz | |
| updated_at | timestamptz | |

### 2. `topics` (top-level subjects)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| name | text | e.g. "Programming/CS", "Psychology" |
| slug | text UNIQUE | URL-friendly: "programming-cs" |
| description | text | |
| icon | text | Icon name or URL |
| is_published | boolean | Default false |
| created_at | timestamptz | |

### 3. `roadmaps` (a specific learning path within a topic)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| topic_id | uuid FK → topics | |
| title | text | e.g. "Web Development", "Cognitive Psychology" |
| slug | text UNIQUE | |
| description | text | |
| difficulty | enum | 'beginner' / 'intermediate' / 'advanced' |
| estimated_duration | text | e.g. "3-6 months" |
| is_published | boolean | |
| created_at | timestamptz | |
| updated_at | timestamptz | |

### 4. `roadmap_nodes` (individual topic nodes in the graph)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| roadmap_id | uuid FK → roadmaps | |
| title | text | e.g. "HTML Basics" |
| slug | text | Unique within roadmap |
| description | text | Brief overview of the topic |
| ai_overview | text | AI-generated "what this is & why it matters" |
| estimated_hours | int | nullable |
| position_x | float | For React Flow graph rendering |
| position_y | float | For React Flow graph rendering |
| order_index | int | For structured mode sequencing |
| created_at | timestamptz | |

### 5. `node_edges` (prerequisite relationships between nodes)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| roadmap_id | uuid FK → roadmaps | |
| source_node_id | uuid FK → roadmap_nodes | Prerequisite node |
| target_node_id | uuid FK → roadmap_nodes | Dependent node |

**Constraint**: UNIQUE(source_node_id, target_node_id)

### 6. `resources` (learning materials)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| title | text | |
| url | text | Link to the resource |
| type | enum | 'book' / 'article' / 'video' / 'podcast' / 'course' / 'project' |
| platform | text | nullable — "YouTube", "Coursera", "MDN", etc. |
| author | text | nullable |
| difficulty | enum | 'beginner' / 'intermediate' / 'advanced' |
| is_free | boolean | |
| affiliate_url | text | nullable — affiliate link version |
| description | text | Short description |
| last_checked_at | timestamptz | For automated link checking |
| is_active | boolean | Default true, false if broken/removed |
| created_at | timestamptz | |

### 7. `node_resources` (many-to-many: nodes ↔ resources)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| node_id | uuid FK → roadmap_nodes | |
| resource_id | uuid FK → resources | |
| sort_order | int | Display order within node |
| is_primary | boolean | Highlighted/recommended resource |

**Constraint**: UNIQUE(node_id, resource_id)

### 8. `user_roadmaps` (user's active learning paths)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| user_id | uuid FK → profiles | |
| roadmap_id | uuid FK → roadmaps | |
| goal | text | nullable — user's free-text goal |
| timeline | enum | '3_months' / '6_months' / '1_year' / 'no_rush' / null |
| study_mode | enum | 'self_guided' / 'structured' |
| started_at | timestamptz | |
| completed_at | timestamptz | nullable |

**Constraint**: UNIQUE(user_id, roadmap_id)

### 9. `user_node_progress` (per-node progress tracking)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| user_id | uuid FK → profiles | |
| node_id | uuid FK → roadmap_nodes | |
| status | enum | 'not_started' / 'in_progress' / 'completed' / 'skipped' |
| started_at | timestamptz | nullable |
| completed_at | timestamptz | nullable |

**Constraint**: UNIQUE(user_id, node_id)

### 10. `user_notes` (paid feature — note-taking alongside content)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| user_id | uuid FK → profiles | |
| node_id | uuid FK → roadmap_nodes | |
| resource_id | uuid FK → resources | nullable — note tied to specific resource |
| content | text | Markdown content |
| created_at | timestamptz | |
| updated_at | timestamptz | |

### 11. `quiz_questions` (optional assessment)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| node_id | uuid FK → roadmap_nodes | |
| question | text | |
| options | jsonb | Array of {text, is_correct} |
| explanation | text | Shown after answering |
| sort_order | int | |

### 12. `resource_ratings` (Phase 2 — community ratings)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | |
| user_id | uuid FK → profiles | |
| resource_id | uuid FK → resources | |
| rating | int | 1-5 |
| review | text | nullable |
| created_at | timestamptz | |

**Constraint**: UNIQUE(user_id, resource_id)

---

## Indexes

```sql
-- Fast lookups for user progress
CREATE INDEX idx_user_node_progress_user ON user_node_progress(user_id);
CREATE INDEX idx_user_node_progress_node ON user_node_progress(node_id);

-- Fast lookups for roadmap browsing
CREATE INDEX idx_roadmap_nodes_roadmap ON roadmap_nodes(roadmap_id);
CREATE INDEX idx_node_edges_roadmap ON node_edges(roadmap_id);
CREATE INDEX idx_node_resources_node ON node_resources(node_id);

-- Fast lookups for user's roadmaps
CREATE INDEX idx_user_roadmaps_user ON user_roadmaps(user_id);

-- Resource link checking
CREATE INDEX idx_resources_last_checked ON resources(last_checked_at) WHERE is_active = true;
```

## Row Level Security (Supabase RLS)

- `profiles`: Users can read/update their own profile
- `topics`, `roadmaps`, `roadmap_nodes`, `node_edges`, `resources`, `node_resources`: Public read (where is_published = true)
- `user_roadmaps`, `user_node_progress`, `user_notes`: Users can only read/write their own data
- `quiz_questions`: Public read
- `resource_ratings`: Public read, users can only write their own
