"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  FolderOpen,
  Info,
  ChevronRight,
  X,
  Wrench,
  Download,
  Map,
} from "lucide-react";

import {
  SiFlutter,
  SiLaravel,
  SiDocker,
  SiLinux,
  SiGithub,
} from "react-icons/si";

import {
  FaMicrosoft,
  FaWindows,
} from "react-icons/fa";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

const menus = [
  {
    title: "General",
    items: [
      {
        name: "Home",
        href: "/",
        icon: <Home size={18} />,
      },

      {
        name: "Projects",
        href: "/projects",
        icon: <FolderOpen size={18} />,
      },

      {
        name: "About",
        href: "/about",
        icon: <Info size={18} />,
      },
    ],
  },

  {
    title: "Documentation",
    items: [
      {
        name: "Flutter",
        href: "/docs/flutter",
        icon: (
          <SiFlutter
            size={18}
            className="text-sky-400"
          />
        ),
      },

      {
        name: "Laravel",
        href: "/docs/laravel",
        icon: (
          <SiLaravel
            size={18}
            className="text-red-500"
          />
        ),
      },

      {
        name: "Docker",
        href: "/docs/docker",
        icon: (
          <SiDocker
            size={18}
            className="text-blue-400"
          />
        ),
      },

      {
        name: "Azure",
        href: "/docs/azure",
        icon: (
          <FaMicrosoft
            size={18}
            className="text-blue-500"
          />
        ),
      },

      {
        name: "Linux",
        href: "/docs/linux",
        icon: (
          <SiLinux
            size={18}
            className="text-yellow-400"
          />
        ),
      },

      {
        name: "Windows Server",
        href: "/docs/windows-server",
        icon: (
          <FaWindows
            size={18}
            className="text-sky-500"
          />
        ),
      },

      {
        name: "Git & GitHub",
        href: "/docs/git-github",
        icon: (
          <SiGithub size={18} />
        ),
      },
    ],
  },

  {
    title: "Coming Soon",
    items: [
      {
        name: "Developer Toolkit",
        href: "/toolkit",
        icon: <Wrench size={18} />,
      },

      {
        name: "Downloads",
        href: "/downloads",
        icon: <Download size={18} />,
      },

      {
        name: "Roadmap",
        href: "/roadmap",
        icon: <Map size={18} />,
      },
    ],
  },
];

export default function Sidebar({
  open = true,
  onClose = () => {},
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay Mobile */}

      {open && (
        <div
          className="
          fixed
          inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          lg:hidden
          "
          onClick={onClose}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed
        left-0
        top-20
        z-50
        h-[calc(100vh-80px)]
        w-72
        overflow-y-auto
        border-r
        border-white/10
        bg-[#09090b]
        transition-transform
        duration-300

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0
        `}
      >
        {/* Mobile Header */}

        <div className="flex items-center justify-between p-6 lg:hidden">
          <h2 className="font-bold">
            Navigation
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {menus.map((section) => (
            <div
              key={section.title}
              className="mb-8"
            >
              <p
                className="
                mb-3
                px-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-zinc-500
                "
              >
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const active =
                    pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`
                      group
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-3
                      py-3
                      transition-all
                      duration-300

                      ${
                        active
                          ? "border border-green-500/20 bg-green-500/10 text-green-400 shadow-lg shadow-green-500/10"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}

                        <span className="text-sm font-medium">
                          {item.name}
                        </span>
                      </div>

                      <ChevronRight
                        size={16}
                        className="
                        opacity-0
                        transition
                        group-hover:opacity-100
                        "
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom Card */}

          <div
            className="
            mt-8
            rounded-2xl
            border
            border-green-500/20
            bg-gradient-to-br
            from-green-500/10
            to-transparent
            p-5
            "
          >
            <p className="text-sm font-semibold text-green-400">
              🚀 Sekelilingmu Developer Platform
            </p>

            <p
              className="
              mt-3
              text-sm
              leading-6
              text-zinc-400
              "
            >
              Documentation, Projects,
              Flutter, Laravel, Docker,
              Azure, Linux dan DevOps
              dalam satu platform.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}