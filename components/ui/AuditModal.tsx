"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/utils";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", business: "", goal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, { publicKey: EMAILJS_PUBLIC_KEY });
      setStatus("success");
    } catch {
      setStatus("error");
    }
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-navy to-teal p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-black text-2xl mb-1">Free Digital Audit</h3>
              <p className="text-white/70 text-sm">
                30-min strategy call. Zero obligation. 100% value guaranteed.
              </p>
            </div>

            {/* Form */}
            <div className="p-7">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-black text-ink text-xl mb-2">You&apos;re in!</h4>
                  <p className="text-gray-500 mb-6">
                    We&apos;ll reach out within <strong>2 hours</strong> to schedule your free strategy session.
                  </p>
                  <button onClick={handleClose} className="btn-primary text-white font-bold px-8 py-3 rounded-full">
                    Close
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Name *</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium text-ink placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Phone</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765..."
                        className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium text-ink placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@business.com"
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium text-ink placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Business Name</label>
                    <input
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Business Pvt. Ltd."
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium text-ink placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Primary Goal *</label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm font-medium text-ink bg-white"
                    >
                      <option value="">Select your main goal...</option>
                      <option value="social">Grow Social Media Followers</option>
                      <option value="leads">Generate More Leads via PPC</option>
                      <option value="website">New Website / eCommerce</option>
                      <option value="branding">Rebranding / Brand Identity</option>
                      <option value="all">Full Digital Marketing Package</option>
                    </select>
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-xs font-semibold">
                      Failed to send. Email us: Rajiv.sharma20894@gmail.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full text-white font-bold py-4 rounded-full disabled:opacity-60"
                  >
                    {status === "sending" ? "⏳ Submitting..." : "🚀 Claim My Free Audit"}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    🔒 Your info is safe. We never spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
