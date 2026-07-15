"use client";

export default function Search() {
  return (
    <button
      className="
        flex items-center justify-between
        w-72 rounded-md border
        px-4 py-2 text-sm
        text-muted-foreground
        hover:bg-accent
      "
    >
      <span>Search Documentation</span>

      <kbd className="rounded border px-2 py-1 text-xs">
        Ctrl + K
      </kbd>
    </button>
  );
}