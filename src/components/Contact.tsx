"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Replace with your actual form submission logic
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#1090af] text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s talk about your project
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ready to build something great? Drop us a message and we&apos;ll get
            back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-5">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1090af]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1090af]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wide">
                      Address
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Kach Bazer, Narinda, Wari, Dhaka-1203
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Sector 12, Uttara, Dhaka-1230
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1090af]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1090af]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wide">
                      Phone
                    </p>
                    <a
                      href="tel:+8801602555023"
                      className="text-gray-700 text-sm hover:text-[#1090af] transition-colors"
                    >
                      +880 1602-555023
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1090af]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1090af]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href="mailto:info@xetriva.com"
                      className="text-gray-700 text-sm hover:text-[#1090af] transition-colors"
                    >
                      info@xetriva.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA blurb */}
            <div className="bg-[#1090af] rounded-2xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-2">Free consultation</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Not sure what you need? We&apos;ll help you figure it out — no
                strings attached.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#1090af] focus:ring-2 focus:ring-[#1090af]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#1090af] focus:ring-2 focus:ring-[#1090af]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#1090af] focus:ring-2 focus:ring-[#1090af]/10 transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  sent
                    ? "bg-green-500 text-white"
                    : "bg-[#1090af] text-white hover:bg-[#0c7a96] shadow-lg shadow-[#1090af]/20 hover:-translate-y-0.5"
                }`}
              >
                {sent ? "Message Sent!" : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
