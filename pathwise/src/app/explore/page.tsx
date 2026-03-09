"use client";

import Link from "next/link";
import { topics, getRoadmapsForTopic } from "@/lib/mock-data";

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Explore Learning Paths</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border border-border bg-card px-4 py-2 pl-9 text-sm focus:border-primary focus:outline-none"
          />
          <span className="absolute left-3 top-2.5 text-muted">🔍</span>
        </div>
      </div>

      {topics.map((topic) => {
        const topicRoadmaps = getRoadmapsForTopic(topic.id);
        return (
          <div key={topic.id} className="mb-10">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <span>{topic.icon}</span> {topic.name}
            </h2>
            <p className="mb-4 text-sm text-muted">{topic.description}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topicRoadmaps.map((roadmap) => (
                <Link
                  key={roadmap.id}
                  href={`/roadmap/${roadmap.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold group-hover:text-primary">
                    {roadmap.title}
                  </h3>
                  <div className="mb-2 flex items-center gap-2 text-xs">
                    <span
                      className={`rounded-full px-2 py-0.5 font-medium ${
                        roadmap.difficulty === "beginner"
                          ? "bg-green-100 text-green-700"
                          : roadmap.difficulty === "intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {roadmap.difficulty}
                    </span>
                    <span className="text-muted">~{roadmap.estimated_duration}</span>
                  </div>
                  <p className="text-sm text-muted">{roadmap.description}</p>
                  <div className="mt-4 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Start learning →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
