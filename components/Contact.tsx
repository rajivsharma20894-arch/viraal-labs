"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactInfo = [
  { icon: "📧", label: "Email", value: "Rajiv.sharma20894@gmail.com", href: "mailto:Rajiv.sharma20894@gmail.com" },
  { icon: "📱", label: "Phone / WhatsApp", value: "+91 74208 20894", href: "https://wa.me/917420820894" },
  { icon: "📍", label: "Address", value: "Sai Park, Dighi, Pune 411015, Maharashtra, India", href: "https://maps.google.com/?q=Dighi,Pune,Maharashtra" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#0a0f1e" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">📬 Get In Touch</span>
          </div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
            Let&apos;s Build Something <span className="gradient-text">Viral Together</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Free 30-minute strategy call. No obligations. Just growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-white/50 mb-2 uppercase tracking-wide">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="Rajiv Sharma"
                    className="form-input w-full px-4 py-3 rounded-xl font-medium text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/50 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-input w-full px-4 py-3 rounded-xl font-medium text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/50 mb-2 uppercase tracking-wide">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  placeholder="you@company.com"
                  className="form-input w-full px-4 py-3 rounded-xl font-medium text-sm" />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/50 mb-2 uppercase tracking-wide">Tell us about your goals *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                  placeholder="I want to grow my Instagram by 5x and increase leads from paid ads..."
                  className="form-input w-full px-4 py-3 rounded-xl font-medium text-sm resize-none" />
              </div>

              {status === "success" && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-xl px-5 py-4 text-sm font-semibold">
                  🎉 Message sent! We&apos;ll contact you within 2 hours.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm font-semibold">
                  ❌ Something went wrong. Please email us directly at Rajiv.sharma20894@gmail.com
                </motion.div>
              )}

              <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="btn-primary w-full text-white font-bold py-4 rounded-full text-lg disabled:opacity-60">
                {status === "sending" ? "⏳ Sending..." : "🚀 Book Free Strategy Call"}
              </motion.button>

              <p className="text-xs text-white/25 text-center">🔒 Your info is safe. No spam, ever.</p>
            </form>
          </motion.div>

          {/* Right side */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }} className="space-y-5">
            {contactInfo.map((item, i) => (
              <motion.a key={item.label} href={item.href}
                target={item.label === "Address" ? "_blank" : undefined}
                rel={item.label === "Address" ? "noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 4, borderColor: "rgba(13,148,136,0.4)" }}
                className="flex items-start gap-4 p-5 dark-card rounded-2xl border border-white/5 transition-all duration-300 group block">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-white/30 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-semibold text-white/70 text-sm group-hover:text-teal-400 transition-colors">{item.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="p-5 dark-card rounded-2xl border border-white/5">
              <div className="text-sm font-bold text-white/30 uppercase tracking-wider mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", icon: "📸", href: "https://instagram.com/viraallabs", color: "from-pink-500 to-rose-400" },
                  { label: "LinkedIn", icon: "💼", href: "https://linkedin.com/company/viraallabs", color: "from-blue-600 to-blue-400" },
                  { label: "WhatsApp", icon: "💬", href: "https://wa.me/917420820894", color: "from-green-500 to-emerald-400" },
                  { label: "Twitter", icon: "🐦", href: "https://twitter.com/viraallabs", color: "from-gray-600 to-gray-500" },
                ].map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                    whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/5 h-52">
              <iframe title="Viral Labs Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.437!2d73.8784!3d18.5935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f0a9b1a1a1%3A0x1234567890abcdef!2sDighi%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
