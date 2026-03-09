import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          Learn anything.{" "}
          <span className="text-primary">The right way.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
          Structured roadmaps with real resources — books, articles, videos, and
          projects curated by quality, not quantity. No AI-rewritten fluff.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/onboarding"
            className="rounded-xl bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Get Started — It&apos;s Free
          </Link>
          <Link
            href="/explore"
            className="rounded-xl border border-border px-8 py-3 text-lg font-semibold transition-colors hover:bg-card"
          >
            Browse Topics
          </Link>
        </div>
      </section>

      {/* Topics preview */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Start with what interests you
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: "</>",
              name: "Programming & CS",
              paths: 3,
              slug: "programming-cs",
            },
            {
              icon: "🧠",
              name: "Psychology",
              paths: 2,
              slug: "psychology",
            },
            {
              icon: "💰",
              name: "Finance & Business",
              paths: 2,
              slug: "finance-business",
            },
          ].map((topic) => (
            <Link
              key={topic.slug}
              href="/explore"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-3 text-3xl">{topic.icon}</div>
              <h3 className="mb-1 text-lg font-semibold group-hover:text-primary">
                {topic.name}
              </h3>
              <p className="text-sm text-muted">{topic.paths} learning paths</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Example roadmap preview */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          See the full picture before you start
        </h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <p className="mb-6 text-sm font-medium text-muted">
            Example: Web Development Roadmap
          </p>
          <div className="flex flex-col items-center gap-3">
            {[
              { name: "How the Internet Works", status: "done" },
              { name: "HTML Basics", status: "done" },
              { name: "CSS Fundamentals", status: "current" },
              { name: "JavaScript Basics", status: "locked" },
              { name: "React", status: "locked" },
            ].map((node, i) => (
              <div key={node.name} className="flex flex-col items-center">
                <div
                  className={`flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium ${
                    node.status === "done"
                      ? "border-success bg-success/10 text-success"
                      : node.status === "current"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-locked"
                  }`}
                >
                  {node.status === "done" && "✅ "}
                  {node.status === "current" && "🔵 "}
                  {node.status === "locked" && "🔒 "}
                  {node.name}
                </div>
                {i < 4 && (
                  <div className="my-1 h-4 w-px bg-border" />
                )}
              </div>
            ))}
            <p className="mt-2 text-xs text-muted">
              ...continues to Node.js, Databases, and more
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold">How it works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Pick what to learn",
              desc: "Choose from topics like Programming, Psychology, or Finance.",
            },
            {
              step: "2",
              title: "Get your roadmap",
              desc: "A dependency-aware graph shows you exactly what to learn and in what order.",
            },
            {
              step: "3",
              title: "Study with real resources",
              desc: "Curated books, articles, videos, and projects — not AI summaries.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {item.step}
              </div>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <p>Pathwise — Learn anything, the right way.</p>
      </footer>
    </div>
  );
}
