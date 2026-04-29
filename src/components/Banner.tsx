"use client";

import Image from "next/image";
import bannerImage from "@/public/assets/banner.png";

export function Banner() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="banner" className="bg-white pt-10 pb-10 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left side */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#1090af]/10 text-[#1090af] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1090af] animate-pulse" />
              Trusted by 50+ businesses worldwide
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[62px] font-bold text-gray-900 leading-[1.1] mb-5">
              We manage your IT,{" "}
              <span className="relative">
                <span className="text-[#1090af]">so you can grow</span>
              </span>{" "}
              your business.
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Complex IT problems? We&apos;ll handle them. Your time and energy?
              Use them for what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#1090af] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#0c7a96] transition-all shadow-lg shadow-[#1090af]/20 hover:shadow-xl hover:shadow-[#1090af]/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Get Started Free
              </button>
              <button
                onClick={() => scrollToSection("company")}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-[#1090af] hover:text-[#1090af] transition-all cursor-pointer"
              >
                View Our Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-65 sm:h-80 md:h-90 lg:h-110 rounded-2xl overflow-hidden shadow-2xl shadow-gray-200">
              <Image
                src={bannerImage}
                alt="Team working on software development"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#1090af]/20 to-[#0e6b9e]/20"></div>

              {/* Floating card */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Project Delivered
                    </p>
                    <p className="text-xs text-gray-500">On time & on budget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
