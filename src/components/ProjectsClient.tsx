"use client";

import { useState, useMemo, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ domain: "", technology: "", difficulty: "" });
  const [sortBy, setSortBy] = useState<"stars" | "name">("stars");
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (project) =>
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.domain.toLowerCase().includes(query) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    // Apply domain filter
    if (filters.domain) {
      result = result.filter((project) => project.domain === filters.domain);
    }

    // Apply technology filter
    if (filters.technology) {
      result = result.filter((project) => project.technologies.includes(filters.technology));
    }

    // Apply difficulty filter
    if (filters.difficulty) {
      result = result.filter((project) => project.difficulty === filters.difficulty);
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      if (sortBy === "stars") {
        return b.stars - a.stars;
      }
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [searchQuery, filters, sortBy]);

  // Simulate loading state when filters change
  useEffect(() => {
    const startTimer = setTimeout(() => setIsLoading(true), 0);
    const endTimer = setTimeout(() => setIsLoading(false), 300);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [searchQuery, filters, sortBy]);

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-2 text-muted">
          {filteredProjects.length} of {projects.length} open source projects to explore and contribute to.
        </p>
      </header>

      <div className="mb-6">
        <SearchBar onSearch={setSearchQuery} placeholder="Search by name, description, domain, or technology..." />
      </div>

      <FilterBar
        projects={projects}
        onFilterChange={setFilters}
        onSortChange={setSortBy}
      />

      {isLoading ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <li key={i}>
              <ProjectCardSkeleton />
            </li>
          ))}
        </ul>
      ) : filteredProjects.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground">No projects found</h3>
          <p className="mt-2 text-muted">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
        </div>
      )}
    </>
  );
}