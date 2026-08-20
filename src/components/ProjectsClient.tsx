"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import { projects, type Project } from "@/data/projects";

export default function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;

    const query = searchQuery.toLowerCase().trim();
    return projects.filter(
      (project: Project) =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.domain.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))
    );
  }, [searchQuery]);

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

      <div className="mb-8">
        <SearchBar onSearch={setSearchQuery} placeholder="Search by name, description, domain, or technology..." />
      </div>

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
          <p className="text-lg">No projects found matching &quot;{searchQuery}&quot;</p>
          <p className="mt-2">Try adjusting your search terms</p>
        </div>
      )}
    </>
  );
}