export function Solutions() {
  const solutions = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks for optimal performance.",
      icon: "🌐",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile solutions for iOS and Android.",
      icon: "📱",
    },
    {
      title: "E-commerce",
      description:
        "Scalable online stores with secure payment integration and inventory management.",
      icon: "🛒",
    },
    {
      title: "SaaS Products",
      description:
        "Subscription-based software solutions with multi-tenancy architecture.",
      icon: "☁️",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that delivers intuitive and engaging experiences.",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and DevOps for modern applications.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#1090af]/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="text-3xl">{solution.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
              <button className="mt-4 text-[#1090af] font-semibold hover:text-[#0e6b9e] transition flex items-center gap-1">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
