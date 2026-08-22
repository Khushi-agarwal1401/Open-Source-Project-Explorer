"use client";

import Link from "next/link";
import BookmarkButton from "@/components/BookmarkButton";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const difficultyColors = {
    Beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Advanced: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  };

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card-bg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/10"
    >
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wide">
              {project.domain}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.beginnerFriendly && (
              <span className="shrink-0 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success dark:bg-success/20">
                Beginner
              </span>
            )}
            <BookmarkButton
              projectId={project.id}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
        
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary dark:bg-primary/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md bg-muted/20 px-2 py-0.5 text-xs font-medium text-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t border-border bg-card-bg/50 px-5 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-1 text-muted">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-sm font-medium">{project.stars.toLocaleString()}</span>
        </div>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${difficultyColors[project.difficulty as keyof typeof difficultyColors]}`}>
          {project.difficulty}
        </span>
      </div>
    </Link>
  );
}