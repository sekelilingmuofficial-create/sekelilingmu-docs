"use client";

import Link from "next/link";
import CommandMenu from "./CommandMenu";

import {
  Bell,
  Menu,
  Moon,
} from "lucide-react";

import { SiGithub } from "react-icons/si";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({
  onMenuClick,
}: HeaderProps) {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        h-20
        border-b
        border-white/10
        bg-[#09090b]/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-[1600px]
          items-center
          px-6
        "
      >
        {/* LEFT */}

        <div className="flex items-center">
          {/* Mobile Menu */}

          <button
            onClick={onMenuClick}
            className="
              mr-2
              rounded-lg
              p-2
              transition
              hover:bg-white/10
              lg:hidden
            "
          >
            <Menu size={22} />
          </button>

          {/* Logo */}

          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
              select-none
            "
          >
            <span
              className="
                font-mono
                text-3xl
                font-bold
                text-green-400
              "
            >
              {"</>"}
            </span>

            <h1
              className="
                text-2xl
                font-bold
                tracking-tight
              "
            >
              <span className="text-white">
                Sekelilingmu
              </span>

              <span className="text-green-400">
                {" "}
                Docs
              </span>
            </h1>
          </Link>

          {/* Navigation */}

          <nav
            className="
              ml-32
              hidden
              items-center
              gap-10
              lg:flex
            "
          >
            <Link
              href="/"
              className="
                text-sm
                font-medium
                text-zinc-300
                transition
                hover:text-green-400
              "
            >
              Home
            </Link>

            <Link
              href="/docs"
              className="
                text-sm
                font-medium
                text-zinc-300
                transition
                hover:text-green-400
              "
            >
              Docs
            </Link>

            <Link
              href="/projects"
              className="
                text-sm
                font-medium
                text-zinc-300
                transition
                hover:text-green-400
              "
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="
                text-sm
                font-medium
                text-zinc-300
                transition
                hover:text-green-400
              "
            >
              About
            </Link>
          </nav>
        </div>

        {/* SEARCH */}

        <div
          className="
            ml-auto
            hidden
            xl:block
            px-10
          "
        >
          <CommandMenu />
        </div>

        {/* RIGHT */}

        <div className="ml-4 flex items-center gap-2">
          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-2.5
              transition
              hover:border-green-500/30
              hover:bg-white/10
            "
          >
            <SiGithub
              size={18}
              className="text-zinc-300"
            />
          </button>

          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-2.5
              transition
              hover:border-green-500/30
              hover:bg-white/10
            "
          >
            <Bell size={18} />
          </button>

          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-2.5
              transition
              hover:border-green-500/30
              hover:bg-white/10
            "
          >
            <Moon size={18} />
          </button>

          <div
            className="
              ml-2
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-green-500
              to-emerald-400
              font-semibold
              text-black
            "
          >
            A
          </div>
        </div>
      </div>
    </header>
  );
}