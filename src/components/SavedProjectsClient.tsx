"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useBookmarks } from "@/hooks/useBookmarks";

export default function SavedProjectsClient() {
  const { bookmarkedIds, isLoaded } = useBookmarks();
  const savedProjects = projects.filter((p) => bookmarkedIds.includes(p.id));

  if (!isLoaded) {
    return (
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Saved Projects
          </h1>
        </header>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <li key={i}>
              <div className="h-full animate-pulse rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
                <div className="h-6 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="mt-4 h-12 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="mt-4 flex gap-1.5">
                  <div className="h-5 w-16 rounded bg-zinc-200 dark:bg-zinc-700" />
                  <div className="h-5 w-16 rounded bg-zinc-200 dark:bg-zinc-700" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Saved Projects
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {savedProjects.length} saved project{savedProjects.length !== 1 ? "s" : ""}.
        </p>
      </header>

      {savedProjects.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">
          <svg
            className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <p className="mt-4 text-lg">No saved projects yet</p>
          <p className="mt-2">Start exploring and bookmark projects you find interesting</p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Explore Projects
          </Link>
        </div>
      )}
    </main>
  );
}