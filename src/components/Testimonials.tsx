"use client";

import { useState } from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Md Jalal Uddin",
      role: "Managing Director, TS Geosystem BD",
      content:
        "XeTriva delivered our GIS software solution ahead of schedule. Their technical depth and understanding of our geospatial needs was outstanding. We've seen a 40% improvement in our data processing efficiency.",
      rating: 5,
    },
    {
      name: "FaizyLegend",
      role: "Actor, Pakistan Film Industry",
      content:
        "Amazing work by the XeTriva team! They built my official website and fan engagement platform. The design is stunning and the performance is flawless. My fans love the new experience. Highly recommend their services!",
      rating: 5,
    },
    {
      name: "Shahidul Islam",
      role: "Founder, TechBangla Solutions",
      content:
        "One of the best IT teams in Bangladesh! XeTriva developed our entire ERP system from scratch. Professional, punctual, and passionate about their work. Will definitely work with them again.",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&lsquo;t just take our word for it - hear from our satisfied
            clients
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1090af] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                &lsquo;{testimonial.content}&lsquo;
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#1090af] rounded-full flex items-center justify-center text-white font-bold text-lg">
                {getInitials(testimonials[activeIndex].name)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              &lsquo;{testimonials[activeIndex].content}&lsquo;
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-8 bg-[#1090af]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#1090af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-sm">
                Trusted by 50+ businesses
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#1090af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-sm">
                98% client satisfaction
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#1090af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-sm">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
