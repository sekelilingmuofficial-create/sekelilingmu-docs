"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Network,
  Rocket,
  Search,
  Server,
  Sparkles,
  Terminal,
  UploadCloud,
} from "lucide-react";

const quickAccess = [
  {
    title: "Flutter",
    description: "Mobile Development",
    icon: Terminal,
  },
  {
    title: "Laravel",
    description: "Backend Framework",
    icon: Layers,
  },
  {
    title: "API",
    description: "API Development",
    icon: Code2,
  },
  {
    title: "Docker",
    description: "Containerization",
    icon: Database,
  },
  {
    title: "Linux",
    description: "Operating System",
    icon: Server,
  },
  {
    title: "Azure",
    description: "Cloud Platform",
    icon: Cloud,
  },
];

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

const latestUpdates = [
  {
    title: "Flutter 3.22 - New Features & Updates",
    category: "Flutter",
    time: "2 days ago",
  },
  {
    title: "Laravel 11 - Authentication with Sanctum",
    category: "Laravel",
    time: "5 days ago",
  },
  {
    title: "Docker Compose Best Practices",
    category: "Docker",
    time: "7 days ago",
  },
  {
    title: "Azure App Service Deployment",
    category: "Azure",
    time: "10 days ago",
  },
  {
    title: "Linux Performance Monitoring Guide",
    category: "Linux",
    time: "12 days ago",
  },
];

const popularDocs = [
  {
    title: "Git & GitHub",
    description: "Version control untuk workflow developer modern.",
    icon: Code2,
  },
  {
    title: "REST API",
    description: "Pelajari cara membangun dan menggunakan API.",
    icon: Network,
  },
  {
    title: "Database",
    description: "Konsep database, SQL, dan data modeling.",
    icon: Database,
  },
  {
    title: "Cloud Infrastructure",
    description: "Deploy aplikasi menggunakan cloud platform.",
    icon: Cloud,
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020604] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-280px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-250px] h-[600px] w-[600px] rounded-full bg-green-500/[0.04] blur-[140px]" />

        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.03] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#030706]/90 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute right-[-160px] top-[-180px] h-[500px] w-[650px] rounded-full bg-green-500/[0.07] blur-[120px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#39ff88]/20 bg-[#39ff88]/[0.06] px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#39ff88]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#39ff88]">
                  Developer Documentation
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Learn. Build.
                <span className="block text-[#39ff88]">
                  Create Something Great.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Selamat datang di Sekelilingmu Documentation. Temukan
                dokumentasi, tutorial, roadmap, dan berbagai resources untuk
                membantu perjalanan Anda menjadi developer profesional.
              </p>

              {/* Search */}
              <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-xl border border-white/[0.1] bg-white/[0.035] px-4 py-3.5">
                <Search className="h-5 w-5 shrink-0 text-white/40" />

                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />

                <kbd className="hidden rounded-md border border-white/[0.1] bg-white/[0.04] px-2 py-1 text-[10px] text-white/40 sm:block">
                  Ctrl K
                </kbd>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <BookOpen className="mb-5 h-5 w-5 text-[#39ff88]" />

                <p className="text-2xl font-bold text-white">100+</p>

                <p className="mt-1 text-xs text-white/45">
                  Documentation
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <Code2 className="mb-5 h-5 w-5 text-[#39ff88]" />

                <p className="text-2xl font-bold text-white">20+</p>

                <p className="mt-1 text-xs text-white/45">
                  Technologies
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <CheckCircle2 className="mb-5 h-5 w-5 text-[#39ff88]" />

                <p className="text-2xl font-bold text-white">8</p>

                <p className="mt-1 text-xs text-white/45">
                  Roadmap Steps
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <Rocket className="mb-5 h-5 w-5 text-[#39ff88]" />

                <p className="text-2xl font-bold text-white">∞</p>

                <p className="mt-1 text-xs text-white/45">
                  Possibilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACCESS */}
        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#39ff88]">
                Start Learning
              </p>

              <h2 className="mt-2 text-xl font-bold text-white">
                Quick Access
              </h2>
            </div>

            <button className="hidden items-center gap-2 text-xs text-white/45 sm:flex">
              View all
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {quickAccess.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className="group rounded-xl border border-white/[0.08] bg-[#030706]/80 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#39ff88]/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b3a20] text-[#65ff9d]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/40">
                    {item.description}
                  </p>

                  <ArrowRight className="mt-4 h-4 w-4 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#39ff88]" />
                </button>
              );
            })}
          </div>
        </section>

        {/* ROADMAP */}
        <section className="mt-8 rounded-2xl border border-white/[0.08] bg-[#030706]/80 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#39ff88]">
                Your Learning Path
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Learning Roadmap
              </h2>

              <p className="mt-2 text-sm text-white/45">
                Ikuti tahapan pembelajaran untuk membangun skill developer
                secara bertahap.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 text-xs text-[#39ff88]">
              View roadmap
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-[6%] right-[6%] top-[59px] hidden border-t border-dashed border-[#39ff88]/50 lg:block" />

            <div className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
              {roadmap.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 mb-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#39ff88]/70 bg-[#020604] text-[10px] font-semibold text-white">
                      {item.number}
                    </div>

                    <div className="relative z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#39ff88]/80 bg-[#07140d]">
                      <Icon className="h-7 w-7 text-[#79ffb0]" />
                    </div>

                    <h3 className="mt-3 text-xs font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CATEGORIES + UPDATES */}
        <section className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Categories */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#030706]/80 p-6 sm:p-7">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#39ff88]">
                Explore Documentation
              </p>

              <h2 className="mt-2 text-xl font-bold text-white">
                Documentation Categories
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.title}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition-all hover:border-[#39ff88]/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0b3a20] text-[#65ff9d]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-white/45">
                        {category.description}
                      </p>

                      <p className="mt-2 text-[10px] text-[#39ff88]">
                        {category.count}
                      </p>
                    </div>

                    <ChevronRight className="h-4 w-4 shrink-0 text-white/30" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Updates */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#030706]/80 p-6 sm:p-7">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#39ff88]">
                  Stay Updated
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                  Latest Updates
                </h2>
              </div>

              <button className="flex items-center gap-2 text-xs text-[#39ff88]">
                View all
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {latestUpdates.map((update) => (
                <button
                  key={update.title}
                  className="group flex w-full items-center gap-4 py-4 text-left first:pt-0 last:pb-0"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#39ff88]" />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-white/75">
                      {update.title}
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      {update.category}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs text-white/35">
                    {update.time}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR DOCUMENTATION */}
        <section className="mt-5 rounded-2xl border border-white/[0.08] bg-[#030706]/80 p-6 sm:p-8">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#39ff88]">
                Recommended
              </p>

              <h2 className="mt-2 text-xl font-bold text-white">
                Popular Documentation
              </h2>
            </div>

            <button className="flex items-center gap-2 text-xs text-[#39ff88]">
              Browse all
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {popularDocs.map((doc) => {
              const Icon = doc.icon;

              return (
                <button
                  key={doc.title}
                  className="group rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#39ff88]/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b3a20] text-[#65ff9d]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-white/25" />
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-white">
                    {doc.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/45">
                    {doc.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <div className="h-8" />
      </div>
    </main>
  );
}