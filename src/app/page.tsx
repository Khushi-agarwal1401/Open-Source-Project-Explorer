import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  const totalStars = projects.reduce((sum, p) => sum + p.stars, 0);
  const domains = Array.from(new Set(projects.map((p) => p.domain)));
  const featured = [...projects].sort((a, b) => b.stars - a.stars).slice(0, 3);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h1 className="max-w-2xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl animate-gradient">
            Open Source Project Explorer
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Discover open source projects, filter by domain and difficulty, and
            bookmark the ones you want to contribute to.
          </p>
        </div>
        <Link
          href="/projects"
          className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-105 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 active:scale-95"
        >
          Explore Projects
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card-bg p-6 transition-colors duration-300 hover:border-black dark:hover:border-white">
          <p className="text-4xl font-bold text-foreground">
            {projects.length}
          </p>
          <p className="mt-2 text-sm font-medium text-muted uppercase tracking-wide">
            Projects
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card-bg p-6 transition-colors duration-300 hover:border-black dark:hover:border-white">
          <p className="text-4xl font-bold text-foreground">
            {domains.length}
          </p>
          <p className="mt-2 text-sm font-medium text-muted uppercase tracking-wide">
            Domains
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card-bg p-6 transition-colors duration-300 hover:border-black dark:hover:border-white">
          <p className="text-4xl font-bold text-foreground">
            {totalStars.toLocaleString()}
          </p>
          <p className="mt-2 text-sm font-medium text-muted uppercase tracking-wide">
            GitHub Stars
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
          >
            View all →
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card-bg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/10"
              >
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wide">
                    {project.domain}
                  </p>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-border bg-card-bg/50 px-5 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-1 text-muted">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-sm font-medium">{project.stars.toLocaleString()}</span>
                  </div>
                  <span className="text-xs font-medium text-muted">
                    {project.difficulty}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Browse by Domain
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {domains.map((domain) => (
            <li key={domain}>
              <Link
                href={`/projects?domain=${encodeURIComponent(domain)}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-border bg-card-bg px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-black dark:hover:border-white"
              >
                {domain}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}