"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import Link from "next/link";

import {
  BookOpen,
  ArrowRight,
} from "lucide-react";

const docs = [
  {
    title: "Flutter",
    description:
      "Belajar Flutter dari dasar hingga deployment aplikasi Android dan iOS.",
    href: "/docs/flutter",
  },

  {
    title: "Laravel",
    description:
      "Panduan membangun REST API dan backend modern menggunakan Laravel.",
    href: "/docs/laravel",
  },

  {
    title: "Docker",
    description:
      "Containerization, Docker Compose dan deployment aplikasi.",
    href: "/docs/docker",
  },

  {
    title: "Azure",
    description:
      "Cloud Computing, Virtual Machine dan layanan Microsoft Azure.",
    href: "/docs/azure",
  },

  {
    title: "Linux",
    description:
      "Linux Administration, Server Management dan Command Line.",
    href: "/docs/linux",
  },

  {
    title: "Windows Server",
    description:
      "Active Directory, IIS, DNS dan administrasi Windows Server.",
    href: "/docs/windows-server",
  },

  {
    title: "Git & GitHub",
    description:
      "Version Control, Branching, Pull Request dan CI/CD.",
    href: "/docs/git-github",
  },
];

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-black
      text-white
    "
    >
      {/* Background Grid */}

      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="
          h-full
          w-full
          bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),
          linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
        />
      </div>

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-[250px]
        -z-10
        h-[600px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-green-500/10
        blur-[160px]
      "
      />

      <Header
        onMenuClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

      <Sidebar
        open={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      <div className="lg:ml-72">
        {/* Hero */}

        <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
            <BookOpen
              size={16}
              className="text-green-400"
            />
            Documentation
          </div>

          <h1 className="mt-6 text-5xl font-bold">
            Developer
            <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-400">
            Dokumentasi Flutter,
            Laravel, Docker, Azure,
            Linux, Windows Server dan
            GitHub yang digunakan dalam
            pengembangan project
            Sekelilingmu.
          </p>
        </section>

        {/* Documentation Grid */}

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc) => (
              <Link
                key={doc.title}
                href={doc.href}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-500/30
                  hover:bg-white/10
                "
              >
                <h3 className="text-xl font-semibold">
                  {doc.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {doc.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-green-400">
                  Explore
                  <ArrowRight
                    size={16}
                    className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}