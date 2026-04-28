export function Solutions() {
  const solutions = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks for optimal performance.",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile solutions for iOS and Android.",
    },
    {
      title: "E-commerce",
      description:
        "Scalable online stores with secure payment integration and inventory management.",
    },
    {
      title: "SaaS Products",
      description:
        "Subscription-based software solutions with multi-tenancy architecture.",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that delivers intuitive and engaging experiences.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and DevOps for modern applications.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-[#1090af] hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
