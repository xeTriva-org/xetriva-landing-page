export function Projects() {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Real-time analytics dashboard for financial institutions.",
      icon: "📊",
    },
    {
      title: "EcoMart",
      category: "E-commerce",
      description: "Sustainable products marketplace with AI recommendations.",
      icon: "🌿",
    },
    {
      title: "HealthTrack",
      category: "Mobile App",
      description: "Healthcare management platform for patients and providers.",
      icon: "🏥",
    },
    {
      title: "AI Analytics",
      category: "SaaS Product",
      description:
        "Machine learning powered analytics platform for businesses.",
      icon: "🤖",
    },
    {
      title: "Smart Campus",
      category: "IoT Solution",
      description: "Integrated IoT platform for educational institutions.",
      icon: "🏫",
    },
    {
      title: "Retail POS",
      category: "Software",
      description: "Cloud-based point of sale system for retail stores.",
      icon: "💳",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover some of our best work that helped businesses succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-[#1090af]/20 to-[#0e6b9e]/20 flex items-center justify-center">
                <span className="text-7xl">{project.icon}</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#1090af] font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1090af] transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-[#1090af] font-semibold hover:text-[#0e6b9e] transition flex items-center gap-2">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#1090af] text-[#1090af] px-8 py-3 rounded-lg font-semibold hover:bg-[#1090af] hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
