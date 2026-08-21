import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  const totalStars = projects.reduce((sum, p) => sum + p.stars, 0);
  const domains = Array.from(new Set(projects.map((p) => p.domain)));
  const featured = [...projects].sort((a, b) => b.stars - a.stars).slice(0, 3);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Open Source Project Explorer
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Discover open source projects, filter by domain and difficulty, and
          bookmark the ones you want to contribute to.
        </p>
        <Link
          href="/projects"
          className="rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-95"
        >
          Explore Projects
        </Link>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 p-6 transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:hover:shadow-zinc-900/50">
          <p className="text-3xl font-semibold text-foreground">
            {projects.length}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Projects
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6 transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:hover:shadow-zinc-900/50">
          <p className="text-3xl font-semibold text-foreground">
            {domains.length}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Domains
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6 transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:hover:shadow-zinc-900/50">
          <p className="text-3xl font-semibold text-foreground">
            {totalStars.toLocaleString()}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            GitHub stars
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Featured Projects
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="flex h-full flex-col rounded-lg border border-zinc-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
              >
                <h3 className="font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {project.domain}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Browse by Domain
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {domains.map((domain) => (
            <li key={domain}>
              <Link
                href={`/projects?domain=${encodeURIComponent(domain)}`}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-foreground hover:text-foreground dark:border-zinc-800 dark:text-zinc-300"
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