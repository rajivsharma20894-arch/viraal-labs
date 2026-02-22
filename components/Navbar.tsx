"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavbarProps { onAuditClick: () => void; }

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#differentiation" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onAuditClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-cyan-400 flex items-center justify-center shadow-lg glow">
                <span className="text-white font-black text-lg">V</span>
              </div>
              <div className="absolute -inset-1 rounded-xl bg-teal/20 animate-pulse" />
            </div>
            <div>
              <div className="font-black text-lg leading-none text-white">Viral Labs</div>
              <div className="text-xs font-medium leading-none mt-0.5 text-teal-400">Unleash Viraal Vibes</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="nav-link font-medium text-sm text-white/70 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <motion.button onClick={onAuditClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="btn-primary text-white font-semibold text-sm px-5 py-2.5 rounded-full">
              Free Digital Audit ✨
            </motion.button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 flex flex-col gap-1.5">
              {[0,1,2].map((i) => (
                <span key={i} className={`block h-0.5 bg-white transition-all duration-300 ${
                  i === 0 && menuOpen ? "rotate-45 translate-y-2" :
                  i === 1 && menuOpen ? "opacity-0" :
                  i === 2 && menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`} />
              ))}
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1117] border-t border-white/10">
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="font-medium text-white/70 hover:text-teal-400 py-2 border-b border-white/5 transition-colors">
                  {link.label}
                </a>
              ))}
              <button onClick={() => { setMenuOpen(false); onAuditClick(); }}
                className="btn-primary text-white font-semibold py-3 rounded-full mt-2">
                Free Digital Audit ✨
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
