"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#differentiation" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Social Media Marketing",
  "PPC Advertising",
  "Web Design & Development",
  "Email Marketing",
  "Branding & Identity",
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0f1e] via-navy to-[#0a2040] text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C300,80 900,0 1200,40 L1200,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Background orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-navy/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-cyan-400 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">V</span>
              </div>
              <div>
                <div className="font-black text-xl text-white">Viraal Labs</div>
                <div className="text-teal-light text-sm font-medium">by Shri</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              &ldquo;Unleash Viraal Vibes&rdquo; — Pune&apos;s most results-driven digital marketing agency.
              Hyper-targeted campaigns that go viral, built on AI-powered strategy and real data.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "📸", href: "https://instagram.com/viraallabs", color: "hover:bg-pink-500" },
                { icon: "💼", href: "https://linkedin.com/company/viraallabs", color: "hover:bg-blue-600" },
                { icon: "💬", href: "https://wa.me/917420820894", color: "hover:bg-green-500" },
                { icon: "🐦", href: "https://twitter.com/viraallabs", color: "hover:bg-gray-600" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg ${s.color} transition-all duration-300 hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-teal-light text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-teal-light text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal/50" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm text-center sm:text-left">
            © 2026 Viraal Labs by Shri. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Made with ❤️ in</span>
            <span className="text-teal-light font-semibold">Pune, India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
