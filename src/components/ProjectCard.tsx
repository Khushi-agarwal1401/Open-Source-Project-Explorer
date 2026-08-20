"use client";

import Link from "next/link";
import BookmarkButton from "@/components/BookmarkButton";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-foreground group-hover:underline">
          {project.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.beginnerFriendly && (
            <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
              Beginner Friendly
            </span>
          )}
          <BookmarkButton
            projectId={project.id}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <span>{project.domain}</span>
        <span className="flex items-center gap-2">
          <span>★ {project.stars.toLocaleString()}</span>
          <span>{project.difficulty}</span>
        </span>
      </div>
    </Link>
  );
}