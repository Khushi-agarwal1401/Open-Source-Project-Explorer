"use client";

import { useMemo } from "react";
import type { Project } from "@/data/projects";


interface FilterBarProps {
  projects: Project[];
  filters: { domain: string; technology: string; difficulty: string };
  sortBy: "stars" | "name";
  onFilterChange: (filters: { domain: string; technology: string; difficulty: string }) => void;
  onSortChange: (sort: "stars" | "name") => void;
}

export default function FilterBar({ projects, filters, sortBy, onFilterChange, onSortChange }: FilterBarProps) {

  const domains = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.domain))].sort();
    return unique;
  }, [projects]);

  const technologies = useMemo(() => {
    const unique = [...new Set(projects.flatMap((p) => p.technologies))].sort();
    return unique;
  }, [projects]);

  const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, domain: e.target.value });
  };

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, technology: e.target.value });
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, difficulty: e.target.value });
  };

  const handleSortChange = (value: "stars" | "name") => {
    onSortChange(value);
  };

  const clearFilters = () => {
    onFilterChange({ domain: "", technology: "", difficulty: "" });
  };

  const hasActiveFilters = filters.domain || filters.technology || filters.difficulty;

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-1 min-w-[200px] flex-col gap-1.5">
          <label htmlFor="domain-filter" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Domain
          </label>
          <select
            id="domain-filter"
            value={filters.domain}
            onChange={handleDomainChange}
            className="rounded-lg border border-border bg-card-bg px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-card-bg"
          >
            <option value="">All Domains</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 min-w-[200px] flex-col gap-1.5">
          <label htmlFor="tech-filter" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Technology
          </label>
          <select
            id="tech-filter"
            value={filters.technology}
            onChange={handleTechnologyChange}
            className="rounded-lg border border-border bg-card-bg px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-card-bg"
          >
            <option value="">All Technologies</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 min-w-[200px] flex-col gap-1.5">
          <label htmlFor="difficulty-filter" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Difficulty
          </label>
          <select
            id="difficulty-filter"
            value={filters.difficulty}
            onChange={handleDifficultyChange}
            className="rounded-lg border border-border bg-card-bg px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-card-bg"
          >
            <option value="">All Difficulties</option>
            {difficulties.map((diff) => (
              <option key={diff} value={diff}>
                {diff}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 min-w-[180px] flex-col gap-1.5">
          <label htmlFor="sort-filter" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Sort By
          </label>
          <select
            id="sort-filter"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value as "stars" | "name")}
            className="rounded-lg border border-border bg-card-bg px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-card-bg"
          >
            <option value="stars">Stars</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}