"use client";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative inline-block">
          <h1 className="text-9xl md:text-9xl font-bold text-gray-200 mb-4">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#1090af]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Page Not Found
          </h2>
          <div className="w-20 h-0.5 bg-[#1090af] mx-auto mb-5"></div>
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1090af] text-white rounded-lg hover:bg-[#0e6b9e] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-[#1090af] hover:text-[#1090af] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
