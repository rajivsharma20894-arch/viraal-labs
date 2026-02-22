"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/utils";

const contactInfo = [
  { icon: "📧", label: "Email", value: "Rajiv.sharma20894@gmail.com", href: "mailto:Rajiv.sharma20894@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91 74208 20894", href: "tel:+917420820894" },
  { icon: "📍", label: "Address", value: "Sai Park, Dighi, Pune 411015, Maharashtra, India", href: "https://maps.google.com/?q=Sai+Park,Dighi,Pune" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, { publicKey: EMAILJS_PUBLIC_KEY });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 mb-4">
            <span className="text-teal text-xs font-bold uppercase tracking-widest">📬 Get In Touch</span>
          </div>
          <h2 className="font-black text-ink mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Viral Together</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Free 30-minute strategy call. No obligations. Just growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Rajiv Sharma"
                    className="form-input w-full px-4 py-3 rounded-xl text-ink placeholder-gray-400 font-medium text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-input w-full px-4 py-3 rounded-xl text-ink placeholder-gray-400 font-medium text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="form-input w-full px-4 py-3 rounded-xl text-ink placeholder-gray-400 font-medium text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">Tell us about your goals *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="I want to grow my Instagram by 5x and increase leads from paid ads..."
                  className="form-input w-full px-4 py-3 rounded-xl text-ink placeholder-gray-400 font-medium text-sm resize-none"
                />
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-teal/10 border border-teal/30 text-teal rounded-xl px-5 py-4 text-sm font-semibold"
                >
                  🎉 Message sent! We&apos;ll contact you within 2 hours.
                </motion.div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-5 py-4 text-sm font-semibold">
                  Something went wrong. Please email us directly at Rajiv.sharma20894@gmail.com
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full text-white font-bold py-4 rounded-full text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "⏳ Sending..." : "🚀 Book Free Strategy Call"}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. No spam, ever. 🔒
              </p>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noreferrer" : undefined}
                  className="flex items-start gap-4 p-5 bg-surface rounded-2xl border border-gray-100 hover:border-teal/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal to-cyan-400 rounded-xl text-xl shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-semibold text-ink text-sm group-hover:text-teal transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="p-5 bg-surface rounded-2xl border border-gray-100">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", icon: "📸", href: "https://instagram.com/viraallabs", color: "from-pink-500 to-rose-400" },
                  { label: "LinkedIn", icon: "💼", href: "https://linkedin.com/company/viraallabs", color: "from-navy to-blue-400" },
                  { label: "Twitter/X", icon: "🐦", href: "https://twitter.com/viraallabs", color: "from-gray-700 to-gray-500" },
                  { label: "WhatsApp", icon: "💬", href: "https://wa.me/917420820894", color: "from-green-500 to-emerald-400" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center text-xl hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-52">
              <iframe
                title="Viraal Labs Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4374!2d73.8784!3d18.5935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f0a9b1a1a1%3A0x1234567890abcdef!2sSai+Park%2C+Dighi%2C+Pune%2C+Maharashtra+411015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
