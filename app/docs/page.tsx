"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import {
  BookOpen,
  Rocket,
  FileText,
  FolderOpen,
  Layers,
  Terminal,
  Code2,
  Database,
  Server,
  Cloud,
  UploadCloud,
  GraduationCap,
} from "lucide-react";

//==================================================
// ROADMAP
//==================================================

const roadmap = [
  {
    number: "1",
    title: "Flutter",
    icon: Terminal,
  },
  {
    number: "2",
    title: "Laravel",
    icon: Layers,
  },
  {
    number: "3",
    title: "API",
    icon: Code2,
  },
  {
    number: "4",
    title: "Docker",
    icon: Database,
  },
  {
    number: "5",
    title: "Linux",
    icon: Server,
  },
  {
    number: "6",
    title: "Azure",
    icon: Cloud,
  },
  {
    number: "7",
    title: "Deploy",
    icon: UploadCloud,
  },
  {
    number: "8",
    title: "DevOps",
    icon: Rocket,
  },
];

//==================================================
// DOCUMENTATION CATEGORIES
//==================================================

const categories = [
  {
    title: "Beginner",
    description: "Dasar-dasar pemrograman dan teknologi",
    icon: GraduationCap,
    count: "12 Guides",
  },
  {
    title: "Intermediate",
    description: "Pengembangan skill dan konsep lebih dalam",
    icon: Layers,
    count: "24 Guides",
  },
  {
    title: "Advanced",
    description: "Teknik advanced dan best practices",
    icon: Rocket,
    count: "18 Guides",
  },
  {
    title: "Professional",
    description: "Arsitektur dan implementasi enterprise",
    icon: Server,
    count: "10 Guides",
  },
];

//==================================================
// PAGE
//==================================================

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/*==================================================*/}
      {/* BACKGROUND GRID */}
      {/*==================================================*/}

      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="
          h-full
          w-full
          bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]
          bg-[size:40px_40px]
          "
        />
      </div>

      {/*==================================================*/}
      {/* GLOW EFFECT */}
      {/*==================================================*/}

      <div
        className="
        absolute
        left-1/2
        top-[250px]
        -z-10
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-green-500/10
        blur-[180px]
        "
      />

      {/*==================================================*/}
      {/* HEADER */}
      {/*==================================================*/}

      <Header
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/*==================================================*/}
      {/* SIDEBAR */}
      {/*==================================================*/}

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/*==================================================*/}
      {/* CONTENT */}
      {/*==================================================*/}

      <div className="lg:ml-72">

        {/*==================================================*/}
        {/* HERO SECTION */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8">

          <div
            className="
            mx-auto
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
            <BookOpen
              size={16}
              className="text-green-400"
            />

            Documentation
          </div>

          <h1
            className="
            mt-8
            text-center
            text-5xl
            font-black
            leading-tight
            lg:text-7xl
            "
          >
            DOCUMENTATION
          </h1>

          <p
            className="
            mt-4
            text-center
            text-2xl
            font-semibold
            text-gray-300
            "
          >
            Learn
            <span className="text-green-400">
              {" "}• Build{" "}
            </span>
            •
            <span className="text-blue-400">
              {" "}Deploy
            </span>
          </p>

          <p
            className="
            mx-auto
            mt-8
            max-w-4xl
            text-center
            text-lg
            leading-8
            text-gray-400
            "
          >
            Documentation Platform untuk Developer Indonesia yang menyediakan
            pembelajaran Flutter, Laravel, Docker, Azure, Linux, Windows
            Server, Git & GitHub serta berbagai project dan deployment guide.
          </p>

          {/*==================================================*/}
          {/* STATISTICS */}
          {/*==================================================*/}

          <div
            className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            "
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">

              <FileText
                className="mx-auto mb-4 text-green-400"
                size={28}
              />

              <h2 className="text-4xl font-bold">
                100+
              </h2>

              <p className="mt-2 text-gray-400">
                Articles
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">

              <BookOpen
                className="mx-auto mb-4 text-green-400"
                size={28}
              />

              <h2 className="text-4xl font-bold">
                50+
              </h2>

              <p className="mt-2 text-gray-400">
                Tutorials
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">

              <FolderOpen
                className="mx-auto mb-4 text-green-400"
                size={28}
              />

              <h2 className="text-4xl font-bold">
                30+
              </h2>

              <p className="mt-2 text-gray-400">
                Projects
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">

              <Layers
                className="mx-auto mb-4 text-green-400"
                size={28}
              />

              <h2 className="text-4xl font-bold">
                10+
              </h2>

              <p className="mt-2 text-gray-400">
                Technologies
              </p>

            </div>

          </div>

          {/*==================================================*/}
          {/* GET STARTED BUTTON */}
          {/*==================================================*/}

          <div className="mt-12 flex justify-center">

            <button
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-green-500
              to-blue-500
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              "
            >
              <Rocket size={18} />

              Get Started
            </button>

          </div>

        </section>

        {/*==================================================*/}
        {/* DOCUMENTATION OVERVIEW */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div
            className="
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-white/5
            to-transparent
            p-10
            backdrop-blur-xl
            "
          >

            <div className="text-center">

              <h2 className="text-4xl font-black">
                Why Sekelilingmu Docs?
              </h2>

              <p
                className="
                mx-auto
                mt-6
                max-w-4xl
                text-lg
                leading-8
                text-gray-400
                "
              >
                Sekelilingmu Docs hadir sebagai platform pembelajaran untuk
                Developer Indonesia yang menyediakan dokumentasi, tutorial,
                deployment guide, project collection serta learning roadmap
                yang mudah dipelajari mulai dari level beginner hingga
                professional.
              </p>

            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">

              <div>

                <h3 className="text-2xl font-bold text-green-400">
                  Learn
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Pelajari Flutter, Laravel, Docker, Azure, Linux dan Windows
                  Server dari dasar hingga deployment.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-blue-400">
                  Build
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Bangun berbagai project modern menggunakan Flutter dan
                  Laravel lengkap dengan source code, API dan system design.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-purple-400">
                  Deploy
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Pelajari deployment ke VPS, Docker, Railway, Vercel, Azure
                  dan Cloud Platform lainnya secara lengkap.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/*==================================================*/}
        {/* LEARNING ROADMAP */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              Learning Roadmap
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Ikuti roadmap pembelajaran mulai dari Mobile Development hingga
              Cloud Deployment dan DevOps.
            </p>

          </div>

          <div className="mx-auto mt-20 max-w-5xl">

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {roadmap.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.number}
                    className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    text-center
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-green-500/30
                    hover:bg-white/10
                    "
                  >

                    <div
                      className="
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-green-500/30
                      bg-green-500/10
                      "
                    >

                      <Icon
                        size={28}
                        className="text-green-400"
                      />

                    </div>

                    <div className="mt-5 text-sm font-semibold text-green-400">
                      Step {item.number}
                    </div>

                    <h3 className="mt-2 text-xl font-bold">
                      {item.title}
                    </h3>

                  </div>

                );

              })}

            </div>

          </div>

        </section>

        {/*==================================================*/}
        {/* DOCUMENTATION CATEGORIES */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              Documentation Categories
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Semua dokumentasi telah disusun berdasarkan kategori pembelajaran.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-4">

            {categories.map((category) => {

              const Icon = category.icon;

              return (

                <div
                  key={category.title}
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-green-500/30
                  "
                >

                  <div
                    className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-500/10
                    "
                  >

                    <Icon
                      size={28}
                      className="text-green-400"
                    />

                  </div>

                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-gray-400">
                    {category.description}
                  </p>

                  <p className="mt-6 text-sm text-green-400">
                    {category.count}
                  </p>

                </div>

              );

            })}

          </div>

        </section>

        {/*==================================================*/}
        {/* DEVELOPER TOOLKIT */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              Developer Toolkit
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Berbagai resources yang akan membantu Developer Indonesia dalam
              membangun aplikasi modern.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-4">

            {[
              {
                title: "ERD Collection",
                description:
                  "Kumpulan Entity Relationship Diagram berbagai project.",
              },
              {
                title: "API Collection",
                description:
                  "REST API Documentation dan API Collection.",
              },
              {
                title: "System Design",
                description:
                  "Architecture Diagram, Database Design dan Flowchart.",
              },
              {
                title: "Deployment Guide",
                description:
                  "VPS, Docker, Railway, Azure dan Cloud Deployment.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-green-500/30
                "
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/*==================================================*/}
        {/* DOWNLOAD RESOURCES */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div
            className="
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            p-12
            backdrop-blur-xl
            "
          >

            <h2 className="text-center text-4xl font-black">
              Download Resources
            </h2>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">

              <div>

                <h3 className="text-2xl font-bold">
                  Source Code
                </h3>

                <p className="mt-4 text-gray-400">
                  Download source code berbagai project Flutter dan Laravel.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Templates
                </h3>

                <p className="mt-4 text-gray-400">
                  ERD, Database Design, System Design dan API Documentation.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Developer Assets
                </h3>

                <p className="mt-4 text-gray-400">
                  UI Kit, Icons, Deployment Checklist dan Learning Resources.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/*==================================================*/}
        {/* FUTURE GOALS */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              Future Goals
            </h2>

            <p className="mt-6 text-lg text-gray-400">
              Sekelilingmu Docs akan terus berkembang menjadi platform
              pembelajaran modern untuk Developer Indonesia.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {[
                "Flutter Course",
                "Laravel Course",
                "Infrastructure Course",
                "DevOps Course",
                "Open Source Project",
                "Developer Toolkit",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 px-5 py-3"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </section>

        {/*==================================================*/}
        {/* START LEARNING */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">

          <div
            className="
            rounded-[40px]
            border
            border-green-500/20
            bg-gradient-to-br
            from-green-500/10
            to-transparent
            p-16
            text-center
            backdrop-blur-xl
            "
          >

            <h2 className="text-5xl font-black">
              Start Learning Today
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-4xl
              text-lg
              leading-8
              text-gray-400
              "
            >
              Mulailah perjalanan belajar Flutter, Laravel, Docker, Azure,
              Linux dan Deployment Guide bersama Sekelilingmu Docs.
            </p>

            <button
              className="
              mt-10
              rounded-2xl
              bg-gradient-to-r
              from-green-500
              to-blue-500
              px-10
              py-5
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              "
            >
              Get Started
            </button>

          </div>

        </section>

        {/*==================================================*/}
        {/* FOOTER */}
        {/*==================================================*/}

        <Footer />

      </div>

    </main>
  );
}