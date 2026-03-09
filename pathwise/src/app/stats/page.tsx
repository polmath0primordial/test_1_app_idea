"use client";

export default function StatsPage() {
  // Mock stats data
  const stats = {
    streak: 7,
    completed: 5,
    total: 14,
    hours: 23,
    level: "Beginner+",
  };

  const weeklyActivity = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 1 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 0 },
    { day: "Fri", hours: 2 },
    { day: "Sat", hours: 1 },
    { day: "Sun", hours: 1 },
  ];

  const maxHours = Math.max(...weeklyActivity.map((d) => d.hours));

  const upcoming = [
    { label: "Today", task: "Finish CSS Flexbox Guide" },
    { label: "Tomorrow", task: "Start CSS Grid article" },
    { label: "This week", task: "Complete CSS Fundamentals project" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold">Your Progress</h1>
      <p className="mb-8 text-muted">Web Development Roadmap</p>

      {/* Stat cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <div className="mb-1 text-2xl font-bold text-accent">
            🔥 {stats.streak}
          </div>
          <div className="text-sm text-muted">day streak</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <div className="mb-1 text-2xl font-bold text-success">
            ✅ {stats.completed}/{stats.total}
          </div>
          <div className="text-sm text-muted">topics done</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <div className="mb-1 text-2xl font-bold text-primary">
            ⏱ {stats.hours}h
          </div>
          <div className="text-sm text-muted">total time</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <div className="mb-1 text-2xl font-bold">📈 {stats.level}</div>
          <div className="text-sm text-muted">current level</div>
        </div>
      </div>

      {/* Weekly activity */}
      <div className="mb-8 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold">Weekly Activity</h2>
        <div className="flex items-end justify-between gap-2">
          {weeklyActivity.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-full rounded-md transition-all ${
                  d.hours > 0 ? "bg-primary" : "bg-border"
                }`}
                style={{
                  height: `${d.hours > 0 ? (d.hours / maxHours) * 120 : 8}px`,
                }}
              />
              <span className="text-xs text-muted">{d.day}</span>
              <span className="text-xs font-medium">
                {d.hours > 0 ? `${d.hours}h` : "—"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 font-semibold">Overall Progress</h2>
        <div className="mb-2 h-3 w-full rounded-full bg-border">
          <div
            className="h-3 rounded-full bg-primary transition-all"
            style={{ width: `${(stats.completed / stats.total) * 100}%` }}
          />
        </div>
        <p className="text-sm text-muted">
          {Math.round((stats.completed / stats.total) * 100)}% complete —{" "}
          {stats.total - stats.completed} topics remaining
        </p>
      </div>

      {/* Upcoming tasks (structured mode) */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold">
          Upcoming{" "}
          <span className="text-xs font-normal text-muted">
            (Structured Mode)
          </span>
        </h2>
        <div className="flex flex-col gap-3">
          {upcoming.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-lg border border-border p-3"
            >
              <span className="w-20 text-xs font-medium text-primary">
                {item.label}
              </span>
              <span className="text-sm">{item.task}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        Stats dashboard is a paid feature. Currently showing demo data.
      </p>
    </div>
  );
}
