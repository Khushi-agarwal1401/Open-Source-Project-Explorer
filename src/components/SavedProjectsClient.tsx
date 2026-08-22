"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import { projects } from "@/data/projects";
import { useBookmarks } from "@/hooks/useBookmarks";

export default function SavedProjectsClient() {
  const { bookmarkedIds, isLoaded } = useBookmarks();
  const savedProjects = projects.filter((p) => bookmarkedIds.includes(p.id));

  if (!isLoaded) {
    return (
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Saved Projects
          </h1>
        </header>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <li key={i}>
              <ProjectCardSkeleton />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Saved Projects
        </h1>
        <p className="mt-2 text-muted">
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
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 rounded-full bg-muted/20 p-4">
            <svg
              className="h-12 w-12 text-muted"
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
          </div>
          <h3 className="text-lg font-semibold text-foreground">No saved projects yet</h3>
          <p className="mt-2 text-muted">
            Start exploring and bookmark projects you find interesting.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-105 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 active:scale-95"
          >
            Explore Projects
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      )}
    </main>
  );
}