"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AuditModalProps { isOpen: boolean; onClose: () => void; }

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", business: "", goal: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = `Free Audit Request — ${formData.name} (${formData.business || "New Lead"})`;
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ABusiness: ${formData.business}%0AGoal: ${formData.goal}`;
    window.open(`mailto:Rajiv.sharma20894@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, "_blank");
    setTimeout(() => { setStatus("success"); }, 800);
  };

  const handleClose = () => {
    if (status !== "sending") {
      onClose();
      setTimeout(() => { setStatus("idle"); setFormData({ name: "", email: "", phone: "", business: "", goal: "" }); }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
            style={{ background: "#0d1117", border: "1px solid rgba(255,255,255,0.1)" }}>

            {/* Header */}
            <div className="relative p-7 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2060, #061a18)" }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <button onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all">
                ✕
              </button>
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-black text-white text-2xl mb-1">Free Digital Audit</h3>
              <p className="text-white/50 text-sm">30-min strategy call. Zero obligation. 100% value guaranteed.</p>
            </div>

            {/* Body */}
            <div className="p-7">
              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-black text-white text-xl mb-2">You&apos;re in!</h4>
                  <p className="text-white/50 mb-6">Your email app opened — just send it! We&apos;ll respond within <strong className="text-teal-400">2 hours</strong>.</p>
                  <motion.button onClick={handleClose} whileHover={{ scale: 1.05 }} className="btn-primary text-white font-bold px-8 py-3 rounded-full">
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/40 mb-1.5 uppercase tracking-wide">Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} required
                        placeholder="Your name" className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/40 mb-1.5 uppercase tracking-wide">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+91 98765..." className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="you@business.com" className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-1.5 uppercase tracking-wide">Business Name</label>
                    <input name="business" value={formData.business} onChange={handleChange}
                      placeholder="Your Business Pvt. Ltd." className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-1.5 uppercase tracking-wide">Primary Goal *</label>
                    <select name="goal" value={formData.goal} onChange={handleChange} required
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium">
                      <option value="">Select your main goal...</option>
                      <option value="social">Grow Social Media Followers</option>
                      <option value="leads">Generate More Leads via PPC</option>
                      <option value="website">New Website / eCommerce</option>
                      <option value="branding">Rebranding / Brand Identity</option>
                      <option value="all">Full Digital Marketing Package</option>
                    </select>
                  </div>
                  <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    className="btn-primary w-full text-white font-bold py-4 rounded-full disabled:opacity-60">
                    {status === "sending" ? "⏳ Opening email..." : "🚀 Claim My Free Audit"}
                  </motion.button>
                  <p className="text-xs text-white/25 text-center">🔒 Your info is safe. We never spam.</p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
