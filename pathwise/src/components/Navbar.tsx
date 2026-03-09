"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href
        ? "text-primary"
        : "text-muted hover:text-foreground"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-primary">🧭</span> Pathwise
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/explore" className={linkClass("/explore")}>
            Explore
          </Link>
          <Link href="/roadmap/web-development" className={linkClass("/roadmap/web-development")}>
            My Roadmap
          </Link>
          <Link href="/stats" className={linkClass("/stats")}>
            Stats
          </Link>
          <Link
            href="/auth"
            className="rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
