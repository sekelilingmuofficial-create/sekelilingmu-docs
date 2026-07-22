import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: "live" | "in-progress" | "planned";
}

const statusLabel: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
  planned: "Coming Soon",
};

const statusColor: Record<string, string> = {
  live: "bg-green-500/10 text-green-400 border-green-500/20",
  "in-progress": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  planned: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  githubUrl,
  status = "live",
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-emerald-400/40
        hover:bg-white/10
      "
    >
      {/* Status Badge */}
      <span
        className={`
          mb-4
          inline-flex
          w-fit
          items-center
          rounded-full
          border
          px-3
          py-1
          text-xs
          font-medium
          ${statusColor[status]}
        `}
      >
        {statusLabel[status]}
      </span>

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-md
              border
              border-white/10
              bg-white/5
              px-2.5
              py-1
              text-xs
              text-gray-300
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-1.5
              rounded-lg
              bg-green-500
              px-4
              py-2
              text-sm
              font-medium
              text-black
              transition
              hover:bg-green-400
            "
          >
            Live Demo
            <ArrowUpRight size={14} />
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-white/10
            "
          >
            <SiGithub size={14} />
            Source
          </a>
        )}
      </div>

      {/* Glow Effect */}
      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-2xl
          bg-emerald-500/10
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </div>
  );
}
