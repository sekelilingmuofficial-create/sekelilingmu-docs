import {
  Zap,
  Layers,
  Shield,
  Gauge,
  Users,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Development",
    description:
      "Build applications faster with modern tools, reusable components, and efficient workflows.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Create clean and maintainable systems ready to grow with your business needs.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description:
      "Apply best practices for authentication, authorization, and application security.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description:
      "Optimize applications for speed, reliability, and excellent user experience.",
  },
  {
    icon: Users,
    title: "Developer Friendly",
    description:
      "Improve collaboration with clean code standards and modern development practices.",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description:
      "Use artificial intelligence to automate workflows and improve productivity.",
  },
];

export default function Benefits() {
  return (
    <section
      className="
        mx-auto
        max-w-7xl
        px-6
        py-20
      "
    >
      {/* Section Header */}
      <div className="mb-14 text-center">
        <h2
          className="
            text-3xl
            font-bold
            text-white
            md:text-4xl
          "
        >
          Why Choose Us?
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-gray-400
          "
        >
          Powerful advantages designed to help you build modern,
          reliable, and future-ready digital products.
        </p>
      </div>


      {/* Benefits Grid */}
      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
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
                {item.title}
              </h3>


              {/* Description */}
              <p
                className="
                  text-sm
                  leading-relaxed
                  text-gray-400
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}