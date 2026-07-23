"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import Link from "next/link";

import {
  BookOpen,
  ArrowRight,
  Rocket,
  FileText,
  FolderOpen,
  Layers,
} from "lucide-react";

//==================================================
// DOCUMENTATION
//==================================================

const docs = [
  {
    title: "Flutter",
    subtitle: "Mobile Development",
    articles: "25 Articles",
    tutorials: "12 Tutorials",
    projects: "5 Projects",
    href: "/docs/flutter",
  },

  {
    title: "Laravel",
    subtitle: "Backend Development",
    articles: "20 Articles",
    tutorials: "15 Tutorials",
    projects: "4 Projects",
    href: "/docs/laravel",
  },

  {
    title: "Docker",
    subtitle: "Containerization",
    articles: "15 Articles",
    tutorials: "10 Tutorials",
    projects: "3 Projects",
    href: "/docs/docker",
  },

  {
    title: "Azure",
    subtitle: "Cloud Computing",
    articles: "12 Articles",
    tutorials: "8 Tutorials",
    projects: "2 Projects",
    href: "/docs/azure",
  },

  {
    title: "Linux",
    subtitle: "Linux Administration",
    articles: "13 Articles",
    tutorials: "8 Tutorials",
    projects: "2 Projects",
    href: "/docs/linux",
  },

  {
    title: "Windows Server",
    subtitle: "Server Management",
    articles: "12 Articles",
    tutorials: "6 Tutorials",
    projects: "2 Projects",
    href: "/docs/windows-server",
  },

  {
    title: "Git & GitHub",
    subtitle: "Version Control",
    articles: "20 Articles",
    tutorials: "15 Tutorials",
    projects: "3 Projects",
    href: "/docs/git-github",
  },
];

//==================================================
// LATEST UPDATE
//==================================================

const latestUpdates = [
  {
    title: "Flutter Installation",
    date: "3 Days Ago",
  },

  {
    title: "Laravel REST API",
    date: "5 Days Ago",
  },

  {
    title: "Docker Deployment",
    date: "7 Days Ago",
  },

  {
    title: "Azure Virtual Machine",
    date: "10 Days Ago",
  },

  {
    title: "Linux Basic Command",
    date: "12 Days Ago",
  },
];

//==================================================
// ROADMAP
//==================================================

const roadmap = [
  "Flutter",
  "Laravel",
  "REST API",
  "Docker",
  "Linux",
  "Azure",
  "Deployment",
  "DevOps",
];

//==================================================
// PAGE
//==================================================

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

      {/* Glow Effect */}

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

      {/* Content */}

      <div className="lg:ml-72">

        {/* HERO SECTION */}

        <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-8">

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
            Learn •
            <span className="text-green-400">
              {" "}Build{" "}
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
            Documentation Platform untuk
            Developer Indonesia yang
            menyediakan pembelajaran
            Flutter, Laravel, Docker,
            Azure, Linux, Windows Server,
            Git & GitHub serta berbagai
            project dan deployment guide.
          </p>


          {/* Statistics */}

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


          {/* Button */}

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
        {/* FEATURED TECHNOLOGIES */}
        {/*==================================================*/}

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

          <div className="text-center">

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Featured Technologies
            </h2>

            <p
              className="
              mt-4
              text-lg
              text-gray-400
              "
            >
              Pelajari berbagai teknologi modern
              yang digunakan dalam pengembangan
              aplikasi, cloud computing dan
              deployment.
            </p>

          </div>


          {/* Documentation Grid */}

          <div
            className="
            mt-16
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-3
            "
          >

            {docs.map((doc) => (

              <Link

                key={doc.title}
                href={doc.href}

                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-green-500/30
                hover:bg-white/10
                hover:shadow-2xl
                hover:shadow-green-500/10
                "
              >


                {/* Glow Effect */}

                <div
                  className="
                  absolute
                  -right-10
                  -top-10
                  h-40
                  w-40
                  rounded-full
                  bg-green-500/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-green-500/20
                  "
                />


                {/* Technology */}

                <h3
                  className="
                  relative
                  text-3xl
                  font-black
                  "
                >
                  {doc.title}
                </h3>


                <p
                  className="
                  mt-4
                  text-gray-400
                  "
                >
                  {doc.subtitle}
                </p>


                {/* Statistics */}

                <div
                  className="
                  mt-10
                  space-y-4
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-3
                    "
                  >
                    <span>
                      Articles
                    </span>

                    <span className="font-semibold text-green-400">
                      {doc.articles}
                    </span>

                  </div>


                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-3
                    "
                  >
                    <span>
                      Tutorials
                    </span>

                    <span className="font-semibold text-blue-400">
                      {doc.tutorials}
                    </span>

                  </div>



                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-3
                    "
                  >
                    <span>
                      Projects
                    </span>

                    <span className="font-semibold text-purple-400">
                      {doc.projects}
                    </span>

                  </div>

                </div>


                {/* Button */}

                <div
                  className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  font-semibold
                  text-green-400
                  "
                >

                  Explore Documentation


                  <ArrowRight

                    size={18}

                    className="
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    "

                  />

                </div>

              </Link>

            ))}

          </div>

        </section>



        {/*==================================================*/}
        {/* DOCUMENTATION OVERVIEW */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          "
        >

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

              <h2
                className="
                text-4xl
                font-black
                "
              >
                Why Sekelilingmu Docs ?
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
                Sekelilingmu Docs hadir sebagai
                platform pembelajaran untuk
                Developer Indonesia yang
                menyediakan dokumentasi,
                tutorial, deployment guide,
                project collection serta
                learning roadmap yang mudah
                dipelajari mulai dari level
                beginner hingga professional.
              </p>

            </div>



            <div
              className="
              mt-14
              grid
              gap-8
              lg:grid-cols-3
              "
            >


              <div>

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-green-400
                  "
                >
                  Learn
                </h3>

                <p
                  className="
                  mt-4
                  leading-8
                  text-gray-400
                  "
                >
                  Pelajari Flutter,
                  Laravel, Docker,
                  Azure, Linux dan
                  Windows Server dari
                  dasar hingga deployment.
                </p>

              </div>



              <div>

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-blue-400
                  "
                >
                  Build
                </h3>

                <p
                  className="
                  mt-4
                  leading-8
                  text-gray-400
                  "
                >
                  Bangun berbagai project
                  modern menggunakan
                  Flutter dan Laravel
                  lengkap dengan source code,
                  API dan system design.
                </p>

              </div>



              <div>

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-purple-400
                  "
                >
                  Deploy
                </h3>

                <p
                  className="
                  mt-4
                  leading-8
                  text-gray-400
                  "
                >
                  Pelajari deployment ke
                  VPS, Docker, Railway,
                  Vercel, Azure dan
                  Cloud Platform lainnya
                  secara lengkap.
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

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Learning Roadmap
            </h2>

            <p
              className="
              mt-4
              text-lg
              text-gray-400
              "
            >
              Ikuti roadmap pembelajaran mulai
              dari Mobile Development hingga
              Cloud Deployment dan DevOps.
            </p>

          </div>


          <div
            className="
            mx-auto
            mt-20
            max-w-3xl
            "
          >

            {roadmap.map((item, index) => (

              <div
                key={index}

                className="
                relative
                flex
                flex-col
                items-center
                "
              >

                <div
                  className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-green-500/30
                  bg-gradient-to-br
                  from-green-500/20
                  to-transparent
                  font-bold
                  backdrop-blur-xl
                  "
                >

                  {item}

                </div>


                {index !== roadmap.length - 1 && (

                  <div
                    className="
                    h-16
                    w-[2px]
                    bg-gradient-to-b
                    from-green-500
                    to-transparent
                    "
                  />

                )}

              </div>

            ))}

          </div>

        </section>




        {/*==================================================*/}
        {/* DOCUMENTATION CATEGORY */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          "
        >

          <div className="text-center">

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Documentation Categories
            </h2>

            <p
              className="
              mt-4
              text-lg
              text-gray-400
              "
            >
              Semua dokumentasi telah disusun
              berdasarkan kategori pembelajaran.
            </p>

          </div>



          <div
            className="
            mt-16
            grid
            gap-8
            lg:grid-cols-4
            "
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                Beginner
              </h3>

              <ul className="mt-6 space-y-3 text-gray-400">

                <li>• Flutter Basic</li>
                <li>• Laravel Basic</li>
                <li>• Git & Github</li>
                <li>• Linux Command</li>

              </ul>

            </div>



            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                Intermediate
              </h3>

              <ul className="mt-6 space-y-3 text-gray-400">

                <li>• REST API</li>
                <li>• Authentication</li>
                <li>• Docker Compose</li>
                <li>• Database Design</li>

              </ul>

            </div>




            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                Advanced
              </h3>

              <ul className="mt-6 space-y-3 text-gray-400">

                <li>• CI / CD</li>
                <li>• VPS Deployment</li>
                <li>• Azure VM</li>
                <li>• DevOps</li>

              </ul>

            </div>




            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                Professional
              </h3>

              <ul className="mt-6 space-y-3 text-gray-400">

                <li>• System Design</li>
                <li>• Microservices</li>
                <li>• Kubernetes</li>
                <li>• Cloud Architecture</li>

              </ul>

            </div>


          </div>

        </section>




        {/*==================================================*/}
        {/* LATEST UPDATES */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          "
        >

          <div className="text-center">

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Latest Updates
            </h2>

            <p
              className="
              mt-4
              text-lg
              text-gray-400
              "
            >
              Dokumentasi terbaru yang telah
              diperbarui dan dipublikasikan.
            </p>

          </div>



          <div
            className="
            mt-16
            space-y-6
            "
          >

            {latestUpdates.map((item) => (

              <div

                key={item.title}

                className="
                group
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300

                hover:border-green-500/30
                hover:bg-white/10
                "

              >

                <div>

                  <h3
                    className="
                    text-xl
                    font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-2
                    text-gray-400
                    "
                  >
                    Last Updated :
                    {" "}
                    {item.date}
                  </p>

                </div>



                <ArrowRight
                  size={22}
                  className="
                  transition-all
                  duration-300
                  group-hover:translate-x-2
                  "
                />

              </div>

            ))}

          </div>

        </section>




        {/*==================================================*/}
        {/* COMING SOON */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          "
        >

          <div
            className="
            rounded-[40px]
            border
            border-green-500/20
            bg-gradient-to-br
            from-green-500/10
            to-transparent
            p-12
            text-center
            backdrop-blur-xl
            "
          >

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Coming Soon
            </h2>


            <p
              className="
              mt-6
              text-lg
              leading-8
              text-gray-400
              "
            >
              Teknologi dan dokumentasi baru
              akan segera hadir untuk membantu
              Developer Indonesia dalam belajar,
              membangun dan melakukan deployment
              aplikasi modern.
            </p>


            <div
              className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
              "
            >

              <span className="rounded-full border border-white/10 px-5 py-3">
                React Native
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                NextJS
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                Kubernetes
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                Terraform
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                Jenkins
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                N8N
              </span>

            </div>

          </div>

        </section>
		
		        {/*==================================================*/}
        {/* DEVELOPER TOOLKIT */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          "
        >

          <div className="text-center">

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Developer Toolkit
            </h2>

            <p
              className="
              mt-4
              text-lg
              text-gray-400
              "
            >
              Berbagai resources yang akan
              membantu Developer Indonesia
              dalam membangun aplikasi modern.
            </p>

          </div>



          <div
            className="
            mt-16
            grid
            gap-8
            lg:grid-cols-4
            "
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                ERD Collection
              </h3>

              <p className="mt-4 text-gray-400">
                Kumpulan Entity Relationship
                Diagram berbagai project.
              </p>
            </div>



            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                API Collection
              </h3>

              <p className="mt-4 text-gray-400">
                REST API Documentation dan
                API Collection.
              </p>
            </div>



            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                System Design
              </h3>

              <p className="mt-4 text-gray-400">
                Architecture Diagram,
                Database Design dan Flowchart.
              </p>
            </div>



            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Deployment Guide
              </h3>

              <p className="mt-4 text-gray-400">
                VPS, Docker, Railway,
                Azure dan Cloud Deployment.
              </p>
            </div>

          </div>

        </section>




        {/*==================================================*/}
        {/* DOWNLOAD RESOURCES */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          "
        >

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

            <h2
              className="
              text-center
              text-4xl
              font-black
              "
            >
              Download Resources
            </h2>


            <div
              className="
              mt-14
              grid
              gap-8
              lg:grid-cols-3
              "
            >

              <div>

                <h3 className="text-2xl font-bold">
                  Source Code
                </h3>

                <p className="mt-4 text-gray-400">
                  Download source code
                  berbagai project Flutter
                  dan Laravel.
                </p>

              </div>



              <div>

                <h3 className="text-2xl font-bold">
                  Templates
                </h3>

                <p className="mt-4 text-gray-400">
                  ERD, Database Design,
                  System Design dan API
                  Documentation.
                </p>

              </div>



              <div>

                <h3 className="text-2xl font-bold">
                  Developer Assets
                </h3>

                <p className="mt-4 text-gray-400">
                  UI Kit, Icons,
                  Deployment Checklist
                  dan Learning Resources.
                </p>

              </div>


            </div>

          </div>

        </section>




        {/*==================================================*/}
        {/* FUTURE GOALS */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          "
        >

          <div className="text-center">

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Future Goals
            </h2>

            <p
              className="
              mt-6
              text-lg
              text-gray-400
              "
            >
              Sekelilingmu Docs akan terus
              berkembang menjadi platform
              pembelajaran modern untuk
              Developer Indonesia.
            </p>


            <div
              className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
              "
            >

              <span className="rounded-full border border-white/10 px-5 py-3">
                Flutter Course
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                Laravel Course
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                Infrastructure Course
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                DevOps Course
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                Open Source Project
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3">
                Developer Toolkit
              </span>

            </div>

          </div>

        </section>




        {/*==================================================*/}
        {/* START LEARNING */}
        {/*==================================================*/}

        <section
          className="
          mx-auto
          max-w-7xl
          px-6
          pb-28
          lg:px-8
          "
        >

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

            <h2
              className="
              text-5xl
              font-black
              "
            >
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
              Mulailah perjalanan belajar
              Flutter, Laravel, Docker,
              Azure, Linux dan Deployment
              Guide bersama Sekelilingmu Docs.
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