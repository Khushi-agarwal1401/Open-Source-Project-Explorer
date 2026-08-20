"use client";

import BookmarkButton from "@/components/BookmarkButton";
import type { Project } from "@/data/projects";

interface ProjectDetailHeaderProps {
  project: Project;
}

export default function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 110 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 110-4h-1a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
              {project.domain}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 fill-current text-amber-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {project.stars.toLocaleString()} stars
            </span>
            <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
              project.difficulty === "Beginner"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                : project.difficulty === "Intermediate"
                ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                : "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300"
            }`}>
              {project.difficulty}
            </span>
            {project.beginnerFriendly && (
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Beginner Friendly
              </span>
            )}
          </div>
        </div>
        <BookmarkButton projectId={project.id} size="lg" />
      </div>
    </header>
  );
}