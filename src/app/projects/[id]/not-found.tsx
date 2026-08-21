import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6">
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Project Not Found
      </h2>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn&apos;t find the project you&apos;re looking for.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
      >
        Back to Projects
      </Link>
    </div>
  );
}
