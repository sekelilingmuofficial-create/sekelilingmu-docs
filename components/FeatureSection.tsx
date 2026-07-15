export default function FeatureSection() {
  const features = [
    {
      title: "Practical Guides",
      description:
        "Step-by-step guides for learning IT infrastructure, cloud, and development.",
    },
    {
      title: "Best Practices",
      description:
        "Production-ready solutions and industry best practices.",
    },
    {
      title: "Community Driven",
      description:
        "Knowledge sharing and collaboration from the community.",
    },
  ];

  return (
    <section className="mt-16">
      <div
        className="
          grid
          gap-5
          md:grid-cols-3
        "
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              rounded-xl
              border
              p-6
              hover:bg-accent
              transition
            "
          >
            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}