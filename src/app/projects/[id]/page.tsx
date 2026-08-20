import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import ProjectDetailHeader from "@/components/ProjectDetailHeader";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | Open Source Project Explorer`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/projects"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Projects
      </Link>

      <ProjectDetailHeader project={project} />

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            View on GitHub
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 truncate max-w-xs">
            {project.githubUrl}
          </p>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
        >
          Open Repository
        </a>
      </div>
    </main>
  );
}