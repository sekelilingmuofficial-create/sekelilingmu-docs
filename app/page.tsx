"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import FeatureGrid from "@/components/FeatureGrid";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Hero */}
        <Hero />

        {/* Terminal */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Terminal />
        </section>

        {/* Feature Grid */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <FeatureGrid />
        </section>

        {/* Benefits */}
        <Benefits />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}