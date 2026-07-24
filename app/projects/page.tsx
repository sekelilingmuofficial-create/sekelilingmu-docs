"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

import { FolderOpen } from "lucide-react";

// ============================================================================
// PROJECT LIST
// ============================================================================

const projects = [
  {
    title: "Ingatanku App",

    description:
      "Aplikasi manajemen keuangan pribadi untuk mencatat pemasukan, pengeluaran, mengelola budget, melihat laporan keuangan serta mendapatkan pengingat tagihan secara otomatis.",

    tags: [
      "Flutter",
      "Laravel",
      "MySQL",
      "REST API",
    ],

    demoUrl:
      "https://ingatanku-landing.vercel.app/",

    githubUrl:
      "https://github.com/sekelilingmuofficial-create",

    status: "live" as const,
  },

  {
    title: "Nominal POS",

    description:
      "Smart Point of Sales (POS) System untuk UMKM dan berbagai jenis bisnis yang dilengkapi fitur Inventory Management, Barcode Scanner, Thermal Printer, Dashboard Analytics dan Multi Payment.",

    tags: [
      "Flutter",
      "Laravel",
      "POS System",
      "MySQL",
      "Inventory",
    ],

    demoUrl:
      "https://nominal-web-two.vercel.app/",

    githubUrl:
      "https://github.com/sekelilingmuofficial-create",

    status: "in-progress" as const,
  },

  {
    title: "Presensi App",

    description:
      "Smart Attendance System berbasis GPS dan selfie verification untuk memastikan data kehadiran lebih akurat, transparan dan tidak dapat dititipkan.",

    tags: [
      "Flutter",
      "Laravel",
      "GPS",
      "REST API",
      "VPS",
    ],

    demoUrl:
      "https://presensi-web-one.vercel.app/",

    githubUrl:
      "https://github.com/sekelilingmuofficial-create",

    status: "in-progress" as const,
  },

  {
    title: "Sekelilingmu Docs",

    description:
      "Developer Platform yang menyediakan dokumentasi teknologi, showcase project, roadmap pembelajaran serta berbagai resource untuk Developer Indonesia.",

    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    demoUrl:
      "https://sekelilingmu-docs.vercel.app",

    githubUrl:
      "https://github.com/sekelilingmuofficial-create/sekelilingmu-docs",

    status: "live" as const,
  },

  {
    title: "Developer Toolkit",

    description:
      "Developer Toolkit untuk membantu pengelolaan project Flutter, Laravel, React Native, Docker, Git dan Deployment dalam satu dashboard yang modern, cepat dan efisien.",

    tags: [
      "Windows",
      "Flutter",
      "Laravel",
      "Docker",
      "Git",
      "Coming Soon",
    ],

    status: "planned" as const,
  },
];

export default function ProjectsPage() {
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

      {/* Glow Effect */}

      <div
        className="
          absolute
          left-1/2
          top-[300px]
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-emerald-500/10
          blur-[180px]
        "
      />

      {/* Header */}

      <Header
        onMenuClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

      {/* Sidebar */}

      <Sidebar
        open={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      {/* Main Content */}

      <div className="lg:ml-72">
        {/* Heading */}

        <section className="mx-auto max-w-7xl px-6 pb-10 pt-32 lg:px-8">
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-gray-300
              backdrop-blur
            "
          >
            <FolderOpen
              size={16}
              className="text-green-400"
            />

            Projects
          </div>

          <h1
            className="
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Showcase Project &
            <span
              className="
                block
                bg-gradient-to-r
                from-green-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Developer Ecosystem
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            Kumpulan aplikasi, tools,
            dokumentasi dan platform yang
            dikembangkan menggunakan Flutter,
            Laravel, Next.js, Docker, DevOps
            serta berbagai teknologi modern
            untuk membangun solusi digital
            yang cepat, efisien dan scalable.
          </p>
        </section>

        {/* Projects */}

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </section>

        {/* Footer */}

        <Footer />
      </div>
    </main>
  );
}