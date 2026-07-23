"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Cloud,
  Code2,
  Container,
  GraduationCap,
  Layers3,
  Leaf,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  UploadCloud,
} from "lucide-react";

const roadmap = [
  {
    number: "1",
    title: "Flutter",
    icon: Terminal,
  },
  {
    number: "2",
    title: "Laravel",
    icon: Layers3,
  },
  {
    number: "3",
    title: "API",
    subtitle: "Development",
    icon: Code2,
  },
  {
    number: "4",
    title: "Docker",
    icon: Container,
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
    title: "Deployment",
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
    description: "Dasar-dasar pemrograman dan pengenalan teknologi",
    icon: GraduationCap,
  },
  {
    title: "Intermediate",
    description: "Pengembangan skill dan konsep yang lebih dalam",
    icon: Layers3,
  },
  {
    title: "Advanced",
    description: "Teknik advanced dan best practices",
    icon: Rocket,
  },
  {
    title: "Professional",
    description: "Arsitektur, skalabilitas dan implementasi enterprise",
    icon: Award,
  },
];

const updates = [
  {
    title: "Flutter 3.22 - New Features & Updates",
    time: "2 days ago",
  },
  {
    title: "Laravel 11 - Authentication with Sanctum",
    time: "5 days ago",
  },
  {
    title: "Docker Compose Best Practices",
    time: "7 days ago",
  },
  {
    title: "Azure App Service Deployment",
    time: "10 days ago",
  },
  {
    title: "Linux Performance Monitoring Guide",
    time: "12 days ago",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020604] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-[140px]" />
        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-green-500/[0.05] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        {/* ================= HERO / ROADMAP ================= */}
        <section className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#030706]/80 px-6 py-8 sm:px-8 lg:px-10">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[400px] w-[500px] rounded-full bg-green-500/[0.08] blur-[100px]" />

          {/* Header */}
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-[#39ff88]">
                Your path to become a professional developer
              </p>

              <h1 className="flex items-center gap-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Learning Roadmap
                <Sparkles className="h-7 w-7 text-[#39ff88]" />
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Ikuti roadmap pembelajaran dari Mobile Development
                <br className="hidden sm:block" />
                hingga DevOps dan Cloud Infrastructure.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
              <Rocket className="h-5 w-5 text-[#39ff88]" />
              <span className="text-sm text-white/70">8 Steps to Mastery</span>
            </div>
          </div>

          {/* Roadmap */}
          <div className="relative mt-12 lg:mt-14">
            {/* Connection line */}
            <div className="absolute left-[6%] right-[6%] top-[76px] hidden border-t-2 border-dotted border-[#39ff88]/70 lg:block" />

            <div className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-8 lg:gap-4">
              {roadmap.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Number */}
                    <div className="relative z-10 mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-[#39ff88]/70 bg-[#020604] text-xs font-semibold text-white">
                      {item.number}
                    </div>

                    {/* Icon circle */}
                    <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#39ff88] bg-[#07140d] shadow-[0_0_25px_rgba(57,255,136,0.16)]">
                      <Icon className="h-9 w-9 text-[#79ffb0]" strokeWidth={1.7} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-1 text-xs text-white/50">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= LOWER CONTENT ================= */}
        <section className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          {/* Documentation Categories */}
          <div className="rounded-xl border border-white/[0.08] bg-[#030706]/80 p-6 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#39ff88]">
                Documentation Categories
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.title}
                    className="group flex min-h-[88px] items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition-all duration-300 hover:border-[#39ff88]/40 hover:bg-[#39ff88]/[0.05]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0b3a20] text-[#65ff9d] shadow-[0_0_20px_rgba(57,255,136,0.08)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 max-w-[190px] text-xs leading-5 text-white/50">
                        {category.description}
                      </p>
                    </div>

                    <ArrowRight className="h-5 w-5 shrink-0 text-white/60 transition-all group-hover:translate-x-1 group-hover:text-[#39ff88]" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Latest Updates */}
          <div className="rounded-xl border border-white/[0.08] bg-[#030706]/80 p-6 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#39ff88]">
                Latest Updates
              </p>

              <button className="group flex items-center gap-2 text-xs font-medium text-[#39ff88]">
                View all updates
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {updates.map((update) => (
                <div
                  key={update.title}
                  className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#39ff88] shadow-[0_0_10px_rgba(57,255,136,0.8)]" />

                  <p className="flex-1 text-sm text-white/75">
                    {update.title}
                  </p>

                  <span className="shrink-0 text-xs text-white/40">
                    {update.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}