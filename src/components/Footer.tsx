import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1090af] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Info */}
          <div>
            <Image
              src={"/assets/xetriva-logo-main.png"}
              alt="Xetriva Logo"
              className="h-8 w-auto mb-3 brightness-0 invert"
              width={0}
              height={0}
            />
            <p className="mb-3 text-sm text-white/80">
              Leading software and web application development company
              delivering innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-white/80" />
                <span className="text-white/80">
                  Kach Bazer, Narinda, Wari, Dhaka-1203
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-white/80" />
                <span className="text-white/80">+880 1602-555023</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-white/80" />
                <span className="text-white/80">info@xetriva.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/70">
            © 2026 Xetriva. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link
              href="/privacy"
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
