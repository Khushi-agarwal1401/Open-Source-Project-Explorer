"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/data/projects";


interface FilterBarProps {
  projects: Project[];
  onFilterChange: (filters: { domain: string; technology: string; difficulty: string }) => void;
  onSortChange: (sort: "stars" | "name") => void;
}

export default function FilterBar({ projects, onFilterChange, onSortChange }: FilterBarProps) {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [sortBy, setSortBy] = useState<"stars" | "name">("stars");

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
    const value = e.target.value;
    setSelectedDomain(value);
    onFilterChange({ domain: value, technology: selectedTechnology, difficulty: selectedDifficulty });
  };

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedTechnology(value);
    onFilterChange({ domain: selectedDomain, technology: value, difficulty: selectedDifficulty });
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedDifficulty(value);
    onFilterChange({ domain: selectedDomain, technology: selectedTechnology, difficulty: value });
  };

  const handleSortChange = (value: "stars" | "name") => {
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="domain-filter" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Domain:
        </label>
        <select
          id="domain-filter"
          value={selectedDomain}
          onChange={handleDomainChange}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400"
        >
          <option value="">All Domains</option>
          {domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="tech-filter" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Technology:
        </label>
        <select
          id="tech-filter"
          value={selectedTechnology}
          onChange={handleTechnologyChange}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400"
        >
          <option value="">All Technologies</option>
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="difficulty-filter" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Difficulty:
        </label>
        <select
          id="difficulty-filter"
          value={selectedDifficulty}
          onChange={handleDifficultyChange}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400"
        >
          <option value="">All Difficulties</option>
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {diff}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-2 ml-auto">
        <label htmlFor="sort-filter" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Sort by:
        </label>
        <select
          id="sort-filter"
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value as "stars" | "name")}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400"
        >
          <option value="stars">Stars (High to Low)</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>
    </div>
  );
}