"use client";

import {
  CheckCircle2,
  FolderGit2,
  Rocket,
  Server,
} from "lucide-react";

export default function Terminal() {
  return (
    <div className="terminal relative w-full overflow-hidden rounded-3xl">

      {/* Header */}

      <div className="terminal-header flex items-center justify-between px-5 py-4">

        <div className="flex items-center gap-2">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <span className="text-xs text-zinc-500">
          ~/sekelilingmu-docs
        </span>

        <div className="w-12" />

      </div>

      {/* Body */}

      <div className="space-y-6 p-6 font-mono text-sm">

        {/* Command */}

        <div className="flex flex-wrap items-center gap-2">

          <span className="text-green-400">
            user
          </span>

          <span className="text-zinc-500">@</span>

          <span className="text-sky-400">
            sekelilingmu
          </span>

          <span className="text-zinc-500">:</span>

          <span className="text-blue-400">~</span>

          <span className="text-white">$</span>

          <span className="text-white">
            npm run dev
          </span>

          <span className="blink text-green-400">|</span>

        </div>

        {/* Logs */}

        <div className="space-y-3">

          <div className="flex items-center gap-3 text-zinc-300">
            <Rocket
              size={16}
              className="text-green-400"
            />

            Starting development server...
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <FolderGit2
              size={16}
              className="text-blue-400"
            />

            Loading documentation...
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <Server
              size={16}
              className="text-yellow-400"
            />

            Initializing modules...
          </div>

        </div>

        <div className="border-t border-white/10" />

        {/* Success */}

        <div className="space-y-3">

          {[
            "Flutter",
            "Laravel",
            "Docker",
            "Azure",
            "Linux",
            "GitHub",
            "Networking",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-green-400"
            >
              <CheckCircle2 size={16} />

              <span>
                {item} Documentation Loaded
              </span>
            </div>
          ))}

        </div>

        <div className="border-t border-white/10" />

        {/* Status */}

        <div
          className="
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/10
            p-5
          "
        >
          <div className="flex items-center gap-3">

            <CheckCircle2
              size={18}
              className="text-green-400"
            />

            <span className="font-semibold text-green-400">
              Development Server Ready
            </span>

          </div>

          <p className="mt-4 text-zinc-400">
            Local :
            <span className="ml-2 text-sky-400">
              http://localhost:3000
            </span>
          </p>

          <p className="mt-2 text-zinc-500">
            Ready in 742 ms
          </p>

        </div>

      </div>

      {/* Glow */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-60
          w-60
          rounded-full
          bg-green-500/10
          blur-3xl
        "
      />

    </div>
  );
}