"use client";

import { useBookmarks } from "@/hooks/useBookmarks";

interface BookmarkButtonProps {
  projectId: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BookmarkButton({ projectId, className = "", size = "md", onClick }: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
  const bookmarked = isBookmarked(projectId);

  const buttonSizes = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
    toggleBookmark(projectId);
  };

  if (!isLoaded) {
    return (
      <button
        className={`${className} relative flex items-center justify-center rounded-lg transition-colors ${buttonSizes[size]} text-zinc-400`}
        disabled
        aria-label="Loading bookmark state"
      >
        <svg className={`${iconSizes[size]} animate-pulse`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} relative flex items-center justify-center rounded-lg transition-colors ${buttonSizes[size]} ${
        bookmarked
          ? "text-amber-500 hover:text-amber-600"
          : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
      }`}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      aria-pressed={bookmarked}
    >
      <svg
        className={iconSizes[size]}
        fill={bookmarked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
}