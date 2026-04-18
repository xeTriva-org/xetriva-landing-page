"use client";
import Script from "next/script";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname() || "";
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation on mount
    if (headerRef.current && logoRef.current && navRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      gsap.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.3,
        },
      );

      gsap.fromTo(
        navRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5,
        },
      );
    }
  }, []);

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
                src={"/assets/xetriva-logo-main.jpg"}
                alt="Xetriva Logo"
                className="h-12 w-auto"
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
                                ? "text-purple-600 bg-purple-50"
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
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              {/* Schedule a Call Button */}
              <Link
                href={"https://calendly.com/swapnilahmedshishir2018/30min"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105 mouse-pointer">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Call</span>
                </button>
              </Link>
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
                                ? "text-purple-600 bg-purple-50"
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
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                    } transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              {/* Mobile Schedule Button */}
              <div className="px-4 pt-4">
                <Link
                  href={"https://calendly.com/swapnilahmedshishir2018/30min"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule a Call</span>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
