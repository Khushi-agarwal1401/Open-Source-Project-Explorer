"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ domain: "", technology: "", difficulty: "" });
  const [sortBy, setSortBy] = useState<"stars" | "name">("stars");

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

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
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

      {filteredProjects.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">
          <p className="text-lg">No projects found matching your criteria</p>
          <p className="mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </>
  );
}