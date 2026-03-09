"use client";

import { use } from "react";
import Link from "next/link";
import RoadmapGraph from "@/components/RoadmapGraph";
import {
  roadmaps,
  webDevNodes,
  webDevEdges,
  mockUserProgress,
} from "@/lib/mock-data";

export default function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const roadmap = roadmaps.find((r) => r.slug === slug);

  if (!roadmap) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Roadmap not found</h1>
        <Link href="/explore" className="text-primary hover:underline">
          ← Browse all roadmaps
        </Link>
      </div>
    );
  }

  // For the MVP, only the Web Dev roadmap has full node data
  const nodes = roadmap.slug === "web-development" ? webDevNodes : [];
  const edges = roadmap.slug === "web-development" ? webDevEdges : [];
  const progress =
    roadmap.slug === "web-development" ? mockUserProgress : [];

  const completedCount = progress.filter(
    (p) => p.status === "completed"
  ).length;
  const totalNodes = nodes.length;
  const progressPercent =
    totalNodes > 0 ? Math.round((completedCount / totalNodes) * 100) : 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-bold">{roadmap.title} Roadmap</h1>
          <p className="text-muted">{roadmap.description}</p>
        </div>
        <div className="text-right">
          <div className="mb-1 text-sm text-muted">Progress</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-32 rounded-full bg-border">
              <div
                className="h-2 rounded-full bg-primary transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-sm font-medium">{progressPercent}%</span>
          </div>
          <div className="mt-1 text-sm text-accent">🔥 7 day streak</div>
        </div>
      </div>

      {/* Graph */}
      {nodes.length > 0 ? (
        <RoadmapGraph nodes={nodes} edges={edges} progress={progress} />
      ) : (
        <div className="flex h-96 items-center justify-center rounded-xl border border-border bg-card text-muted">
          <div className="text-center">
            <p className="text-lg font-medium">Roadmap coming soon</p>
            <p className="mt-1 text-sm">
              This roadmap is being built. Check back later!
            </p>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted">
          <span>✅ {completedCount} completed</span>
          <span>
            🔵{" "}
            {progress.filter((p) => p.status === "in_progress").length} in
            progress
          </span>
          <span>
            🔒 {totalNodes - completedCount - progress.filter((p) => p.status === "in_progress").length} locked
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">Study Mode:</span>
          <select className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm focus:border-primary focus:outline-none">
            <option>Self-Guided</option>
            <option>Structured</option>
          </select>
          <Link
            href="/stats"
            className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            📊 View Stats
          </Link>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        Click any node to see resources, overview, and projects.
      </p>
    </div>
  );
}
