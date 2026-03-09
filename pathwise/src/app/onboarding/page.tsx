"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { topics, getRoadmapsForTopic } from "@/lib/mock-data";
import type { Roadmap } from "@/lib/types";

const levels = [
  { value: "beginner", label: "Complete beginner", desc: "Never done this before" },
  { value: "some", label: "Some knowledge", desc: "Know the basics" },
  { value: "intermediate", label: "Intermediate", desc: "Comfortable but have gaps" },
  { value: "advanced", label: "Advanced", desc: "Looking to fill specific gaps" },
];

const timelines = [
  { value: "no_rush", label: "No rush" },
  { value: "3_months", label: "3 months" },
  { value: "6_months", label: "6 months" },
  { value: "1_year", label: "1 year" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);
  const [level, setLevel] = useState("beginner");
  const [goal, setGoal] = useState("");
  const [timeline, setTimeline] = useState("no_rush");

  const topicRoadmaps = selectedTopic
    ? getRoadmapsForTopic(selectedTopic)
    : [];

  const handleFinish = () => {
    if (selectedRoadmap) {
      router.push(`/roadmap/${selectedRoadmap.slug}`);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      {/* Progress indicator */}
      <div className="mb-8 flex items-center justify-between text-sm text-muted">
        <span>Step {step} of 4</span>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 w-8 rounded-full ${
                s <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1: Pick topic */}
      {step === 1 && (
        <div>
          <h1 className="mb-2 text-2xl font-bold">What do you want to learn?</h1>
          <p className="mb-6 text-muted">Pick a topic to get started.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`rounded-xl border p-5 text-left transition-all ${
                  selectedTopic === topic.id
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="mb-2 text-2xl">{topic.icon}</div>
                <h3 className="font-semibold">{topic.name}</h3>
                <p className="mt-1 text-sm text-muted">{topic.description}</p>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => selectedTopic && setStep(2)}
              disabled={!selectedTopic}
              className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Pick roadmap */}
      {step === 2 && (
        <div>
          <h1 className="mb-2 text-2xl font-bold">Pick a learning path</h1>
          <p className="mb-6 text-muted">
            Choose the specific path you want to follow.
          </p>
          <div className="flex flex-col gap-3">
            {topicRoadmaps.map((roadmap) => (
              <button
                key={roadmap.id}
                onClick={() => setSelectedRoadmap(roadmap)}
                className={`rounded-xl border p-5 text-left transition-all ${
                  selectedRoadmap?.id === roadmap.id
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{roadmap.title}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      roadmap.difficulty === "beginner"
                        ? "bg-green-100 text-green-700"
                        : roadmap.difficulty === "intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {roadmap.difficulty}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{roadmap.description}</p>
                <p className="mt-2 text-xs text-muted">
                  ~{roadmap.estimated_duration}
                </p>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="rounded-lg border border-border px-6 py-2.5 font-medium transition-colors hover:bg-card"
            >
              ← Back
            </button>
            <button
              onClick={() => selectedRoadmap && setStep(3)}
              disabled={!selectedRoadmap}
              className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Level & goal */}
      {step === 3 && (
        <div>
          <h1 className="mb-2 text-2xl font-bold">
            What&apos;s your current level?
          </h1>
          <p className="mb-6 text-muted">
            This helps us personalize your starting point.
          </p>
          <div className="flex flex-col gap-3">
            {levels.map((l) => (
              <button
                key={l.value}
                onClick={() => setLevel(l.value)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  level === l.value
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <span className="font-medium">{l.label}</span>
                <span className="ml-2 text-sm text-muted">— {l.desc}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="mb-4 text-sm font-medium text-muted">
              Optional — help us personalize:
            </p>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">Your goal</label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g., become a frontend developer"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Timeline</label>
              <div className="flex gap-2">
                {timelines.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTimeline(t.value)}
                    className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                      timeline === t.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(2)}
              className="rounded-lg border border-border px-6 py-2.5 font-medium transition-colors hover:bg-card"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Quick quiz (optional) */}
      {step === 4 && (
        <div>
          <h1 className="mb-2 text-2xl font-bold">Quick knowledge check</h1>
          <p className="mb-6 text-muted">
            Optional — helps us figure out where to start you.
          </p>

          <div className="mb-6 rounded-xl border border-border bg-card p-5">
            <p className="mb-3 font-medium">
              Q1: What does HTML stand for?
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Hyper Text Making Language",
                "Hyper Text Markup Language",
                "High Tech Modern Language",
              ].map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3 text-sm transition-colors hover:border-primary/50"
                >
                  <input type="radio" name="q1" className="accent-primary" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6 rounded-xl border border-border bg-card p-5">
            <p className="mb-3 font-medium">Q2: What is CSS used for?</p>
            <div className="flex flex-col gap-2">
              {[
                "Server-side logic",
                "Database queries",
                "Styling web pages",
              ].map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3 text-sm transition-colors hover:border-primary/50"
                >
                  <input type="radio" name="q2" className="accent-primary" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(3)}
              className="rounded-lg border border-border px-6 py-2.5 font-medium transition-colors hover:bg-card"
            >
              ← Back
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleFinish}
                className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-card"
              >
                Skip — I&apos;ll self-report
              </button>
              <button
                onClick={handleFinish}
                className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-colors hover:bg-primary-hover"
              >
                See My Roadmap
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
