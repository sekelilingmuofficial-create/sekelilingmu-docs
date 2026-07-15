import {
  Server,
  Monitor,
  Folder,
  Cloud,
} from "lucide-react";

import {
  SiFlutter,
  SiDocker,
} from "react-icons/si";

import {
  FaLaravel,
  FaLinux,
} from "react-icons/fa";

export default function FeatureGrid() {
  const features = [
    {
      title: "Flutter",
      description:
        "Build cross-platform apps for mobile, web, and desktop.",
      total: 10,
      icon: SiFlutter,
      color: "text-sky-400",
    },
    {
      title: "Laravel",
      description:
        "PHP framework for web artisan with elegance.",
      total: 15,
      icon: FaLaravel,
      color: "text-red-500",
    },
    {
      title: "Infrastructure",
      description:
        "Server, networking, virtualization & system administration.",
      total: 20,
      icon: Server,
      color: "text-emerald-400",
    },
    {
      title: "Azure",
      description:
        "Cloud computing services by Microsoft Azure.",
      total: 12,
      icon: Cloud,
      color: "text-blue-500",
    },
    {
      title: "Docker",
      description:
        "Containerization for modern application deployment.",
      total: 8,
      icon: SiDocker,
      color: "text-sky-500",
    },
    {
      title: "Linux",
      description:
        "Learn Linux server, CLI, and system management.",
      total: 14,
      icon: FaLinux,
      color: "text-yellow-400",
    },
    {
      title: "Windows Server",
      description:
        "Manage Windows Server like a professional.",
      total: 9,
      icon: Monitor,
      color: "text-cyan-400",
    },
    {
      title: "Projects",
      description:
        "Production-ready projects & real world case study.",
      total: 6,
      icon: Folder,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-zinc-950/80
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-emerald-500/50
              hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
            "
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <Icon
                className={`
                  h-10
                  w-10
                  ${feature.color}
                `}
              />

              <span
                className="
                  rounded-lg
                  bg-zinc-800
                  px-3
                  py-1
                  text-sm
                  font-medium
                "
              >
                {feature.total}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-3xl font-bold">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-8 text-zinc-400">
              {feature.description}
            </p>

            {/* Footer */}
            <div
              className={`
                mt-6
                text-sm
                font-semibold
                ${feature.color}
              `}
            >
              {feature.total} Articles →
            </div>
          </div>
        );
      })}
    </div>
  );
}