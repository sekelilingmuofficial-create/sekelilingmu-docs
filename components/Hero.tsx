"use client";

import {
  ArrowRight,
  Code2,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute right-20 top-40 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
              <Sparkles size={16} className="text-yellow-400" />
              AI Powered Developer Platform
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Build Modern Apps
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Faster With AI
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Platform developer modern untuk membuat aplikasi web,
              mobile, dan backend dengan teknologi terbaru,
              automation, cloud, dan artificial intelligence.
            </p>


            {/* Button */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button className="group flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-medium text-black transition hover:bg-green-400">
                Get Started
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                <Terminal size={18} />
                View Docs
              </button>

            </div>


            {/* Feature Mini Card */}
            <div className="mt-10 grid grid-cols-3 gap-4">

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <Code2 className="mb-3 text-green-400" size={24} />
                <p className="text-sm text-gray-400">
                  Clean Code
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <Zap className="mb-3 text-yellow-400" size={24} />
                <p className="text-sm text-gray-400">
                  Fast Build
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <Sparkles className="mb-3 text-blue-400" size={24} />
                <p className="text-sm text-gray-400">
                  AI Ready
                </p>
              </div>

            </div>
          </div>



          {/* Right Terminal Preview */}
          <div className="relative">

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur">

              {/* Terminal Header */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-3 text-sm text-gray-500">
                  developer-terminal
                </span>
              </div>


              {/* Code */}
              <div className="space-y-3 font-mono text-sm text-gray-300">

                <p>
                  <span className="text-green-400">
                    $
                  </span>{" "}
                  npm create app
                </p>

                <p>
                  <span className="text-blue-400">
                    ✓
                  </span>{" "}
                  Installing dependencies...
                </p>

                <p>
                  <span className="text-yellow-400">
                    →
                  </span>{" "}
                  AI Assistant Enabled
                </p>

                <p>
                  <span className="text-green-400">
                    ✓
                  </span>{" "}
                  Project Ready 🚀
                </p>

              </div>

            </div>


            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
              <p className="text-sm text-gray-300">
                Powered by
              </p>
              <p className="font-semibold text-white">
                React • AI • Cloud
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}