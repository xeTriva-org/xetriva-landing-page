import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Database,
  Settings,
  Globe,
  ShoppingCart,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies like React, Node.js, and modern frameworks.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "CMS Development",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "App Maintenance",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetics with functionality for optimal user engagement.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment services using AWS, Azure, and Google Cloud Platform.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "DevOps Services",
        "Cloud Optimization",
      ],
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Robust database design, optimization, and management for high-performance applications.",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Backup Solutions",
      ],
    },
    {
      icon: Settings,
      title: "API Development",
      description:
        "RESTful and GraphQL API development for seamless integration and data exchange.",
      features: [
        "RESTful APIs",
        "GraphQL",
        "API Documentation",
        "Third-party Integration",
      ],
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to increase your online presence and reach.",
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media",
        "Analytics",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms with secure payment integration and inventory management.",
      features: [
        "Online Stores",
        "Payment Gateway",
        "Inventory Management",
        "Order Tracking",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive software development services to transform your
            business and accelerate growth.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end technology solutions tailored to your unique business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your requirements and goals",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Creating detailed project roadmap",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your solution with agile methods",
              },
              {
                step: "04",
                title: "Deployment",
                desc: "Launching and providing ongoing support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help achieve your business
            objectives.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
