"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo/xetriva2.png";

export function Header() {
  const pathname = usePathname() || "";
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/solutions", label: "Solutions" },
    { path: "/company", label: "Company" },
    { path: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20">
        <div className="shrink-0 flex items-center mr-8">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="h-15 w-auto"
              width={44}
              height={44}
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#0e6b9e]"
                      : "text-gray-800 hover:text-[#0e6b9e]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4 ml-8">
          <div className="flex flex-col">
            <span className="bg-gray-100 text-xs px-3 py-1 rounded font-medium text-gray-700">
              Client Support <span aria-hidden>→</span>
            </span>
            <span className="font-medium text-gray-900">+880 1602-555023</span>
          </div>
          <Link href="/contact">
            <button className="bg-[#1090af] hover:bg-[#001a99] text-white font-semibold px-6 py-2 rounded-lg transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
