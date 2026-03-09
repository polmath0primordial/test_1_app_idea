"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  webDevNodes,
  getResourcesForNode,
  getNodeStatus,
} from "@/lib/mock-data";

const typeIcons: Record<string, string> = {
  article: "📄",
  book: "📚",
  video: "🎬",
  podcast: "🎙️",
  course: "🎓",
  project: "🔨",
};

export default function NodeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const node = webDevNodes.find((n) => n.id === id);
  const [notes, setNotes] = useState("");

  if (!node) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Topic not found</h1>
        <Link
          href="/roadmap/web-development"
          className="text-primary hover:underline"
        >
          ← Back to Roadmap
        </Link>
      </div>
    );
  }

  const nodeResources = getResourcesForNode(node.id);
  const progress = getNodeStatus(node.id);
  const statusLabel = progress?.status === "completed"
    ? "✅ Completed"
    : progress?.status === "in_progress"
      ? "🔵 In Progress"
      : "⚪ Not Started";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Back link */}
      <Link
        href="/roadmap/web-development"
        className="mb-6 inline-flex items-center text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Back to Roadmap
      </Link>

      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-bold">{node.title}</h1>
          <p className="text-muted">{node.description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">{statusLabel}</div>
          {node.estimated_hours && (
            <div className="mt-1 text-xs text-muted">
              ~{node.estimated_hours} hours
            </div>
          )}
        </div>
      </div>

      {/* AI Overview */}
      {node.ai_overview && (
        <div className="mb-6 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-2 text-sm font-semibold text-muted">Overview</h2>
          <p className="text-sm leading-relaxed">{node.ai_overview}</p>
        </div>
      )}

      {/* Resources */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-semibold">Resources</h2>
        <div className="flex flex-col gap-3">
          {nodeResources.map((nr) => (
            <div
              key={nr.id}
              className={`rounded-xl border bg-card p-4 transition-all ${
                nr.is_primary
                  ? "border-primary/30 bg-primary/5"
                  : "border-border"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {nr.is_primary && (
                      <span className="text-xs font-medium text-primary">
                        ⭐ Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium">{nr.resource.title}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {nr.resource.description}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted">
                    <span>
                      {typeIcons[nr.resource.type]} {nr.resource.type}
                    </span>
                    {nr.resource.platform && (
                      <span>{nr.resource.platform}</span>
                    )}
                    {nr.resource.author && <span>by {nr.resource.author}</span>}
                    <span
                      className={`rounded-full px-2 py-0.5 ${
                        nr.resource.is_free
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {nr.resource.is_free ? "Free" : "Paid"}
                    </span>
                  </div>
                </div>
                {nr.resource.url && (
                  <a
                    href={nr.resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 shrink-0 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    Open →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notes (paid feature preview) */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-semibold">
          My Notes{" "}
          <span className="text-xs font-normal text-muted">(paid feature)</span>
        </h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Type your notes here..."
          className="h-32 w-full rounded-xl border border-border bg-card p-4 text-sm focus:border-primary focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
        <button className="rounded-lg bg-success px-6 py-2.5 font-medium text-white transition-opacity hover:opacity-90">
          ✅ Mark as Complete
        </button>
        <button className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary">
          📝 Take Quiz (optional)
        </button>
      </div>
    </div>
  );
}
