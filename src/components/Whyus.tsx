const reasons = [
  {
    number: "01",
    title: "Fast Delivery",
    description:
      "We follow agile methodology to ship quickly without sacrificing quality. Most projects go live within 4–8 weeks.",
  },
  {
    number: "02",
    title: "Transparent Process",
    description:
      "Regular updates, shared roadmaps, and open communication — you always know where your project stands.",
  },
  {
    number: "03",
    title: "Dedicated Support",
    description:
      "We don't disappear post-launch. Our team provides ongoing maintenance and support to keep your product running smoothly.",
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description:
      "We build with growth in mind. Our solutions scale with your business from day one to day ten thousand.",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left sticky */}
          <div className="lg:w-80 lg:sticky lg:top-28 flex-shrink-0">
            <span className="inline-block text-[#1090af] text-sm font-semibold uppercase tracking-widest mb-3">
              Why Xetriva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why teams choose us
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We combine technical excellence with business understanding to
              build solutions that actually move the needle.
            </p>
            <div className="w-12 h-1 rounded-full bg-[#1090af]" />
          </div>

          {/* Right — reasons */}
          <div className="flex-1 space-y-0">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`flex gap-6 py-8 ${
                  i !== reasons.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="text-3xl font-bold text-[#1090af]/20 flex-shrink-0 w-12 pt-1 font-mono">
                  {r.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
