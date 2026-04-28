export function Banner() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforming Ideas Into
              <span className="text-[#1090af]"> Digital Reality</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              We build scalable, high-performance web applications, e-commerce
              platforms, and SaaS products that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#1090af] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0e6b9e] transition shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="border-2 border-[#1090af] text-[#1090af] px-6 py-3 rounded-lg font-semibold hover:bg-[#1090af]/5 transition">
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Image/Illustration */}
          <div className="flex-1">
            <div className="relative w-full h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1090af]/10 to-[#0e6b9e]/10 rounded-2xl"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-[#1090af] to-[#0e6b9e] rounded-xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xl font-semibold">Innovative Solutions</p>
                  <p className="text-sm opacity-90">Cutting-edge technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
