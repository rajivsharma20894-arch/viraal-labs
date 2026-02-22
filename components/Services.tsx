"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  { icon: "📱", title: "Social Media Marketing", desc: "Scroll-stopping content that builds communities, drives engagement, and delivers 5x organic reach across Instagram, LinkedIn & more.", highlight: "5x Reach Guarantee", color: "from-pink-500 to-rose-500" },
  { icon: "🎯", title: "PPC Advertising", desc: "AI-optimized Google & Meta ad campaigns with precision targeting that slashes CPL while multiplying your qualified leads by 250%.", highlight: "250% Lead Growth", color: "from-orange-500 to-amber-500" },
  { icon: "🌐", title: "Web Design & Development", desc: "Conversion-first websites and eCommerce stores built with Next.js, blazing fast, mobile-perfect, and designed to turn visitors into buyers.", highlight: "100 Lighthouse Score", color: "from-teal-500 to-cyan-500" },
  { icon: "✉️", title: "Email Marketing", desc: "Automated nurture sequences and broadcast campaigns with 40%+ open rates that keep your audience engaged and convert leads to sales.", highlight: "40%+ Open Rates", color: "from-violet-500 to-purple-500" },
  { icon: "✨", title: "Branding & Identity", desc: "Strategic brand identities that command premium positioning — logo, guidelines, voice, and visual system crafted to dominate your niche.", highlight: "Premium Positioning", color: "from-blue-500 to-indigo-500" },
];

const marqueeItems = ["Social Media", "PPC Ads", "Web Design", "Email Marketing", "Branding", "SEO", "Analytics", "Content Creation", "Lead Generation", "Viral Campaigns"];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 relative" style={{ background: "#0d1117" }} ref={ref}>
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      {/* Marquee */}
      <div className="overflow-hidden mb-16 py-4 border-y border-white/5">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-8 text-white/20 font-bold text-sm uppercase tracking-widest whitespace-nowrap flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">What We Do</span>
          </div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
            Services That <span className="gradient-text">Drive Real Results</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            End-to-end digital growth solutions powered by data, AI, and creative brilliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="service-card group relative rounded-2xl p-7 overflow-hidden cursor-pointer">
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
              <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} items-center justify-center text-2xl mb-5 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-3 group-hover:text-teal-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{service.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                  {service.highlight}
                </span>
                <motion.span whileHover={{ x: 4 }} className="text-teal-400 font-semibold text-sm">
                  Learn More →
                </motion.span>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: services.length * 0.12 }}
            className="rounded-2xl p-7 flex flex-col justify-between text-white relative overflow-hidden glow-strong"
            style={{ background: "linear-gradient(135deg, #0f4c42 0%, #1E3A8A 100%)" }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 60%)" }} />
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-black text-2xl mb-3">Ready to Go Viral?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Get a free 30-minute strategy session and discover exactly how we&apos;ll 10x your digital presence.
              </p>
            </div>
            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="mt-6 inline-block text-center bg-white text-[#0a0f1e] font-bold py-3 px-6 rounded-full hover:bg-teal-400 transition-all duration-300">
              Book Free Audit
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
