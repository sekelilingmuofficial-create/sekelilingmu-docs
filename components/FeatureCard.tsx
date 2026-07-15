import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        group
        relative
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
      {/* Icon */}
      <div
        className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-emerald-500/10
          text-emerald-400
          transition-all
          duration-300
          group-hover:bg-emerald-500
          group-hover:text-white
        "
      >
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3
        className="
          mb-3
          text-xl
          font-semibold
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-sm
          leading-relaxed
          text-gray-400
        "
      >
        {description}
      </p>

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