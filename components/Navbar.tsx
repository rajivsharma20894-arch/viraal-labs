"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  onAuditClick: () => void;
}

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
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg">V</span>
            </div>
            <div>
              <div className={`font-black text-lg leading-none ${scrolled ? "text-navy" : "text-white"}`}>
                Viraal Labs
              </div>
              <div className={`text-xs font-medium leading-none mt-0.5 ${scrolled ? "text-teal" : "text-teal-light"}`}>
                by Shri
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link font-medium text-sm transition-colors duration-200 ${
                  scrolled ? "text-ink hover:text-teal" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onAuditClick}
              className="btn-primary text-white font-semibold text-sm px-5 py-2.5 rounded-full"
            >
              Free Digital Audit
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-ink hover:text-teal py-2 border-b border-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onAuditClick(); }}
                className="btn-primary text-white font-semibold py-3 rounded-full mt-2"
              >
                Free Digital Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
