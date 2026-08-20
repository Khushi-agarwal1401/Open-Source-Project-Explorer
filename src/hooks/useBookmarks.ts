"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "bookmarkedProjects";
const EVENT_KEY = "bookmarksUpdated";

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadBookmarks = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setBookmarkedIds(parsed);
            return;
          }
        }
        setBookmarkedIds([]);
      } catch (error) {
        console.error("Failed to load bookmarks from localStorage:", error);
      }
    };

    // Initial load
    loadBookmarks();
    setTimeout(() => setIsLoaded(true), 0);

    // Sync across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        loadBookmarks();
      }
    };

    // Sync across different instances of this hook in the same tab
    const handleLocalChange = () => {
      loadBookmarks();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(EVENT_KEY, handleLocalChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(EVENT_KEY, handleLocalChange);
    };
  }, []);

  const saveBookmarks = useCallback((ids: string[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
      setBookmarkedIds(ids);
      window.dispatchEvent(new Event(EVENT_KEY));
    } catch (error) {
      console.error("Failed to save bookmarks to localStorage:", error);
    }
  }, []);

  const toggleBookmark = useCallback((projectId: string) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let currentIds: string[] = [];
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) currentIds = parsed;
      }

      const newIds = currentIds.includes(projectId)
        ? currentIds.filter((id) => id !== projectId)
        : [...currentIds, projectId];
        
      saveBookmarks(newIds);
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
    }
  }, [saveBookmarks]);

  const isBookmarked = useCallback((projectId: string) => {
    return bookmarkedIds.includes(projectId);
  }, [bookmarkedIds]);

  const removeBookmark = useCallback((projectId: string) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let currentIds: string[] = [];
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) currentIds = parsed;
      }

      const newIds = currentIds.filter((id) => id !== projectId);
      saveBookmarks(newIds);
    } catch (error) {
      console.error("Failed to remove bookmark:", error);
    }
  }, [saveBookmarks]);

  const clearBookmarks = useCallback(() => {
    saveBookmarks([]);
  }, [saveBookmarks]);

  return {
    bookmarkedIds,
    isLoaded,
    toggleBookmark,
    isBookmarked,
    removeBookmark,
    clearBookmarks,
  };
}