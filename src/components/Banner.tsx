import Image from "next/image";
import bannerImage from "@/public/assets/banner.png";

export function Banner() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-bold text-gray-900 leading-tight mb-2">
              We manage your IT, so you can grow
              <span className="text-[#1090af]"> your business.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 max-w-lg mx-auto md:mx-0">
              Complex IT problems? We&apos;ll handle them. Your time and energy?
              Use them for what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#1090af] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0e6b9e] transition shadow-lg hover:shadow-xl cursor-pointer">
                Get Started
              </button>
              <button className="border-2 border-[#1090af] text-[#1090af] px-6 py-3 rounded-lg font-semibold hover:bg-[#1090af]/5 transition cursor-pointer">
                View Projects
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={bannerImage}
                alt="Team working on software development"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1090af]/20 to-[#0e6b9e]/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
