"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#differentiation" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = ["Social Media Marketing", "PPC Advertising", "Web Design & Development", "Email Marketing", "Branding & Identity"];

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="relative overflow-hidden" style={{ background: "#060b14" }} ref={ref}>
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg glow">
                  <span className="text-white font-black text-xl">V</span>
                </div>
              </div>
              <div>
                <div className="font-black text-xl text-white">Viral Labs</div>
                <div className="text-teal-400 text-sm font-medium">Unleash Viraal Vibes</div>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm mb-6">
              Pune&apos;s most results-driven digital marketing agency. Hyper-targeted campaigns that go viral, built on AI-powered strategy and real data.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "📸", href: "https://instagram.com/viraallabs", color: "hover:bg-pink-500" },
                { icon: "💼", href: "https://linkedin.com/company/viraallabs", color: "hover:bg-blue-600" },
                { icon: "💬", href: "https://wa.me/917420820894", color: "hover:bg-green-500" },
                { icon: "🐦", href: "https://twitter.com/viraallabs", color: "hover:bg-slate-600" },
              ].map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg ${s.color} transition-all duration-300`}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-white/30 hover:text-teal-400 text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal-500/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services"
                    className="text-white/30 hover:text-teal-400 text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal-500/50" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/20 text-sm text-center sm:text-left">
            © 2026 Viral Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-white/20 text-sm">
            <span>Made with ❤️ in</span>
            <span className="text-teal-400 font-semibold">Pune, India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
