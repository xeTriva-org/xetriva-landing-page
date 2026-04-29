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
import logo from "../../public/logo/xetriva2.png";

export function Footer() {
  return (
    <footer className="bg-[#1090af] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <Image
              src={logo}
              alt="Xetriva Logo"
              className="h-12 w-auto mb-4 brightness-0 invert"
              width={0}
              height={0}
            />
            <p className="mb-4 text-base text-white/80 leading-relaxed">
              Leading software and web application development company
              delivering innovative digital solutions.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors text-white/80"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base md:text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3 text-base">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 shrink-0 text-white/80" />
                <span className="text-white/80 leading-relaxed">
                  Sector 12, Uttara, Dhaka-1230
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 shrink-0 text-white/80" />
                <span className="text-white/80 leading-relaxed">
                  Kach Bazer, Narinda, Wari, Dhaka-1203
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 shrink-0 text-white/80" />
                <span className="text-white/80">+880 1602-555023</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 shrink-0 text-white/80" />
                <span className="text-white/80">info@xetriva.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-white/70">
            © 2026 Xetriva. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link
              href="/privacy"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
