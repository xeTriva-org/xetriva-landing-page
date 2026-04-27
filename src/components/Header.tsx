"use client";
import Script from "next/script";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo/xetriva2.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname() || "";
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/packages", label: "Packages" },
    { path: "/products", label: "Products" },
    {
      label: "Resources",
      isDropdown: true,
      items: [
        { path: "/about", label: "About" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/blog", label: "Blog" },
        { path: "/team", label: "Team" },
      ],
    },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (!pathname) return false;

    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <>
      {/* Calendly Script */}

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                ref={logoRef}
                src={logo}
                alt="Xetriva Logo"
                className="h-16 w-auto"
                width={0}
                height={0}
              />
            </Link>

            {/* Desktop Navigation */}
            <div ref={navRef} className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) =>
                link.isDropdown ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium">
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {resourcesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.items?.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.path}
                            className={`block px-4 py-2 transition-colors ${
                              isActive(item.path)
                                ? "text-[#0e6b9e]"
                                : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={link.path || "#"}
                    className={`transition-colors font-medium ${
                      link.path && isActive(link.path)
                        ? "text-[#0e6b9e] rounded px-2 py-1"
                        : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-300">
              {navLinks.map((link, index) =>
                link.isDropdown ? (
                  <div key={index}>
                    <button
                      onClick={() => setResourcesOpen(!resourcesOpen)}
                      className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {resourcesOpen && (
                      <div className="pl-4 bg-gray-50">
                        {link.items?.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.path}
                            className={`block py-2 px-4 ${
                              isActive(item.path)
                                ? "text-[#0e6b9e]"
                                : "text-gray-700 hover:text-purple-600"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={link.path || "#"}
                    className={`block py-3 px-4 ${
                      link.path && isActive(link.path)
                        ? "text-[#0e6b9e]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                    } transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
