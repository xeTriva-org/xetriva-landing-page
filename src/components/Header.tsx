/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import logo from "../../public/logo/xetriva2.png";

export function Header() {
  const pathname = usePathname() || "";
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", section: "banner" },
    { path: "/", label: "Solutions", section: "solutions" },
    { path: "/", label: "Projects", section: "company" },
    { path: "/", label: "Testimonials", section: "testimonials" },
    { path: "/", label: "Contact", section: "contact" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    link: { path: string; label: string; section: string },
  ) => {
    e.preventDefault();
    scrollToSection(link.section);
    setMenuOpen(false);
  };

  const isActive = (section: string) => {
    if (typeof window === "undefined") return false;
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    }
    return false;
  };

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // WhatsApp phone number (remove any non-digit characters)
  const whatsappNumber = "8801602555023"; // Formatted for WhatsApp API

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <Image
              src={logo}
              alt="Xetriva Logo"
              className="h-12 lg:h-16 w-auto"
              width={48}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Nav — hidden on mobile */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={(e) => handleNavigation(e, link)}
                    className={`text-sm lg:text-[15px] font-medium transition-colors duration-150 cursor-pointer ${
                      isActive(link.section)
                        ? "text-[#0e6b9e] border-b-2 border-[#0e6b9e] pb-1"
                        : "text-gray-700 hover:text-[#0e6b9e]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="flex flex-col">
              <span className="bg-gray-100 text-[11px] px-2.5 py-0.5 rounded font-medium text-gray-600">
                Client Support →
              </span>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 text-sm mt-0.5 hover:text-[#0e6b9e] transition-colors flex items-center gap-1"
              >
                <Phone size={13} className="text-green-600" />
                +880 1602-555023
              </a>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#1090af] hover:bg-[#0e6b9e] active:scale-[0.97] text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Tablet: CTA only */}
          <div className="hidden md:flex lg:hidden shrink-0">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#1090af] hover:bg-[#0e6b9e] text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay + drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Slide-down drawer */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-4 pt-2 pb-1">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.section}>
                <button
                  onClick={(e) => handleNavigation(e, link)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-[15px] font-medium transition-all duration-150 cursor-pointer ${
                    isActive(link.section)
                      ? "text-[#0e6b9e] bg-blue-50"
                      : "text-gray-700 hover:text-[#0e6b9e] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  <ChevronRight
                    size={16}
                    className={
                      isActive(link.section)
                        ? "text-[#0e6b9e]"
                        : "text-gray-300"
                    }
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-4 border-t border-gray-100 mt-1 pt-4 pb-5 flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="bg-gray-100 text-[11px] px-2.5 py-0.5 rounded font-medium text-gray-600 w-fit">
              Client Support →
            </span>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 text-sm flex items-center gap-1.5 hover:text-[#0e6b9e] transition-colors"
            >
              <Phone size={13} className="text-green-600 shrink-0" />
              <span>+880 1602-555023</span>
            </a>
          </div>
          <button
            onClick={() => {
              scrollToSection("contact");
              setMenuOpen(false);
            }}
            className="bg-[#1090af] cursor-pointer hover:bg-[#0e6b9e] active:scale-[0.97] text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm whitespace-nowrap shrink-0"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
