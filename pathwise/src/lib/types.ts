export type Tier = "free" | "paid";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type ResourceType =
  | "book"
  | "article"
  | "video"
  | "podcast"
  | "course"
  | "project";
export type NodeStatus = "not_started" | "in_progress" | "completed" | "skipped";
export type StudyMode = "self_guided" | "structured";
export type Timeline = "3_months" | "6_months" | "1_year" | "no_rush";

export interface Profile {
  id: string;
  display_name: string;
  avatar_url: string | null;
  tier: Tier;
  streak_count: number;
  last_active_date: string | null;
  created_at: string;
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  is_published: boolean;
}

export interface Roadmap {
  id: string;
  topic_id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: Difficulty;
  estimated_duration: string;
  is_published: boolean;
}

export interface RoadmapNode {
  id: string;
  roadmap_id: string;
  title: string;
  slug: string;
  description: string;
  ai_overview: string | null;
  estimated_hours: number | null;
  position_x: number;
  position_y: number;
  order_index: number;
}

export interface NodeEdge {
  id: string;
  roadmap_id: string;
  source_node_id: string;
  target_node_id: string;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: ResourceType;
  platform: string | null;
  author: string | null;
  difficulty: Difficulty;
  is_free: boolean;
  affiliate_url: string | null;
  description: string;
  is_active: boolean;
}

export interface NodeResource {
  id: string;
  node_id: string;
  resource_id: string;
  sort_order: number;
  is_primary: boolean;
  resource?: Resource;
}

export interface UserRoadmap {
  id: string;
  user_id: string;
  roadmap_id: string;
  goal: string | null;
  timeline: Timeline | null;
  study_mode: StudyMode;
  started_at: string;
  completed_at: string | null;
}

export interface UserNodeProgress {
  id: string;
  user_id: string;
  node_id: string;
  status: NodeStatus;
  started_at: string | null;
  completed_at: string | null;
}

export interface UserNote {
  id: string;
  user_id: string;
  node_id: string;
  resource_id: string | null;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface QuizQuestion {
  id: string;
  node_id: string;
  question: string;
  options: { text: string; is_correct: boolean }[];
  explanation: string;
  sort_order: number;
}

// Supabase Database type (simplified for client usage)
export interface Database {
  public: {
    Tables: {
      profiles: { Row: Profile };
      topics: { Row: Topic };
      roadmaps: { Row: Roadmap };
      roadmap_nodes: { Row: RoadmapNode };
      node_edges: { Row: NodeEdge };
      resources: { Row: Resource };
      node_resources: { Row: NodeResource };
      user_roadmaps: { Row: UserRoadmap };
      user_node_progress: { Row: UserNodeProgress };
      user_notes: { Row: UserNote };
      quiz_questions: { Row: QuizQuestion };
    };
  };
}
