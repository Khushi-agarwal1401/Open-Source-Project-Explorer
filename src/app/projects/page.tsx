import { metadata } from "./metadata";
import ProjectsClient from "@/components/ProjectsClient";

export { metadata };

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
      <ProjectsClient />
    </main>
  );
}