"use client";

import { Search } from "lucide-react";

export default function CommandMenu() {
  return (
    <button
      className="
        group
        flex
        h-11
        w-full
        max-w-md
        items-center
        justify-between
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-green-500/30
        hover:bg-white/10
        hover:shadow-[0_0_30px_rgba(34,197,94,.15)]
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <Search
          size={18}
          className="
            text-zinc-500
            transition-colors
            group-hover:text-green-400
          "
        />

        <span className="text-sm text-zinc-400">
          Search documentation...
        </span>
      </div>

      {/* Right */}
      <kbd
        className="
          rounded-lg
          border
          border-white/10
          bg-black/30
          px-2.5
          py-1
          text-[11px]
          font-medium
          tracking-wide
          text-zinc-500
        "
      >
        Ctrl K
      </kbd>
    </button>
  );
}