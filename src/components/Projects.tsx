"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronRight, X } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "TS-Geosystems Bangladesh",
      category: "E-commerce Platform",
      description:
        "A fully dynamic e-commerce platform featuring a custom admin dashboard, secure SSLCommerz payment gateway, and a robust product bank. Optimized for secure transactions, lead generation, and SEO.",
      longDescription:
        "TS-Geosystems Bangladesh is a comprehensive solution for managing surveying equipment sales, rentals, and services. The platform includes a powerful admin dashboard for inventory management, order processing, and customer management. With SSLCommerz integration, all transactions are secure and PCI compliant.",
      icon: "🔭",
      imageFolder: "/projects/tsgeosystem",
      images: [
        "tsgb.png",
        "tsgbHover.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
      ],
      technologies: {
        frontend: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Redux Toolkit",
          "Framer Motion",
          "TanStack React Query",
          "Headless UI",
          "Radix UI",
        ],
        backend: [
          "Node.js",
          "Express.js",
          "Multer",
          "JWT",
          "Bcrypt",
          "Cookie Parser",
          "CORS",
          "Dotenv",
        ],
        database: ["MySQL"],
        devops: ["SSLCommerz", "Nodemon", "SEO Optimization"],
        others: [
          "React Router",
          "React Hook Form",
          "React Icons",
          "SweetAlert2",
        ],
      },
      features: [
        "Custom Admin Dashboard",
        "SSLCommerz Payment Gateway",
        "Product Bank Management",
        "Lead Generation System",
        "SEO Optimized",
        "Secure Transactions",
      ],
    },
    {
      id: 2,
      title: "Katsana Vehicle Tracking System",
      category: "SaaS Platform",
      description:
        "A complete SaaS-based vehicle tracking ecosystem for real-time fleet monitoring using GPS devices with SIM integration. Features include live tracking, geo-fencing, route history, and subscription management.",
      longDescription:
        "Katsana is an enterprise-level fleet management solution that includes multiple independent systems such as live tracking dashboard, analytics & reporting engine, CRM, payment system, partner/dealer management, and marketing landing page. Designed for scalability and performance.",
      icon: "🚗",
      imageFolder: "/projects/katsana",
      images: ["1.png", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
      technologies: {
        frontend: [
          "React",
          "TypeScript",
          "Vite",
          "Next.js",
          "Tailwind CSS",
          "Redux Toolkit",
          "TanStack React Query",
          "Framer Motion",
        ],
        backend: [
          "Node.js",
          "Express.js",
          "JWT",
          "Bcrypt",
          "Socket.io",
          "Multer",
          "Cookie Parser",
          "Node Cron",
        ],
        database: ["MySQL"],
        devops: ["VPS Deployment", "SEO Optimization"],
        others: [
          "SIM-based Tracking",
          "Real-time Data Streaming",
          "Payment Gateway Integration",
        ],
      },
      features: [
        "Real-time Vehicle Tracking",
        "Geo-fencing Alerts",
        "Route History & Reports",
        "Fuel & Engine Monitoring",
        "Subscription & Billing",
        "Partner/Dealer Management",
      ],
    },
    {
      id: 3,
      title: "FaizyLegend - Model Portfolio",
      category: "Portfolio & Fan Hub",
      description:
        "The official personal website for a Pakistani model, serving as a modern portfolio and interactive fan hub with fan art gallery and community engagement sections.",
      longDescription:
        "FaizyLegend's official website showcases portfolio work and provides an engaging platform for fans. Features include a stunning gallery, fan art submissions, community discussion sections, and direct contact capabilities.",
      icon: "⭐",
      imageFolder: "/projects/faizylegend",
      images: [
        "faizylegend.png",
        "faizylegendHover.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
      ],
      technologies: {
        frontend: [
          "React",
          "Tailwind CSS",
          "Redux Toolkit",
          "Framer Motion",
          "TanStack React Query",
          "Headless UI",
          "Heroicons",
          "Radix UI",
        ],
        backend: [
          "Node.js",
          "Express.js",
          "Multer",
          "JWT",
          "Bcrypt",
          "Cookie Parser",
          "Body Parser",
          "Dotenv",
        ],
        database: ["MySQL"],
        others: ["React Router", "React Hook Form", "React Icons"],
      },
      features: [
        "Modern Portfolio Showcase",
        "Fan Art Gallery",
        "Community Engagement",
        "Interactive Design",
        "Responsive Layout",
        "Contact Integration",
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (
      selectedProject &&
      currentImageIndex < selectedProject.images.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[#1090af]">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover some of our best work that helped businesses succeed
            </p>
            <div className="w-20 h-0.5 bg-[#1090af] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <Image
                    src={`${project.imageFolder}/${project.images[0]}`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 bg-[#1090af] text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <p className="text-xs text-[#1090af] font-semibold bg-[#1090af]/10 px-2 py-1 rounded">
                      {project.category}
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1090af] transition line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.frontend
                      .slice(0, 3)
                      .map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    {project.technologies.frontend.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{project.technologies.frontend.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openModal(project)}
                    className="text-[#1090af] font-semibold hover:text-[#0e6b9e] transition flex items-center gap-2 text-sm"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="min-h-screen flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#1090af]">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {/* Image Carousel */}
                <div className="relative mb-8">
                  <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={`${selectedProject.imageFolder}/${selectedProject.images[currentImageIndex]}`}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        disabled={currentImageIndex === 0}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ❮
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={
                          currentImageIndex ===
                          selectedProject.images.length - 1
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ❯
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition ${
                          idx === currentImageIndex
                            ? "bg-[#1090af] w-6"
                            : "bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1090af] rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Frontend
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.frontend.map(
                          (tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Backend
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.backend.map(
                          (tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    {selectedProject.technologies.database && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Database
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.database.map(
                            (tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded"
                              >
                                {tech}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                    {selectedProject.technologies.devops && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          DevOps & Others
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.devops.map(
                            (tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded"
                              >
                                {tech}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1090af] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0e6b9e] transition flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-semibold hover:border-[#1090af] hover:text-[#1090af] transition flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
