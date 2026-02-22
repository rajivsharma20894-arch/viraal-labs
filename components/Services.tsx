"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Scroll-stopping content that builds communities, drives engagement, and delivers 5x organic reach across Instagram, LinkedIn & more.",
    highlight: "5x Reach Guarantee",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "🎯",
    title: "PPC Advertising",
    desc: "AI-optimized Google & Meta ad campaigns with precision targeting that slashes CPL while multiplying your qualified leads by 250%.",
    highlight: "250% Lead Growth",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: "🌐",
    title: "Web Design & Development",
    desc: "Conversion-first websites and eCommerce stores built with Next.js, blazing fast, mobile-perfect, and designed to turn visitors into buyers.",
    highlight: "100 Lighthouse Score",
    color: "from-teal to-cyan-500",
  },
  {
    icon: "✉️",
    title: "Email Marketing",
    desc: "Automated nurture sequences and broadcast campaigns with 40%+ open rates that keep your audience engaged and convert leads to sales.",
    highlight: "40%+ Open Rates",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: "✨",
    title: "Branding & Identity",
    desc: "Strategic brand identities that command premium positioning—logo, guidelines, voice, and visual system crafted to dominate your niche.",
    highlight: "Premium Positioning",
    color: "from-navy to-blue-500",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-teal text-xs font-bold uppercase tracking-widest">What We Do</span>
          </div>
          <h2 className="font-black text-ink mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
            Services That{" "}
            <span className="gradient-text">Drive Real Results</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            End-to-end digital growth solutions powered by data, AI, and creative brilliance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="service-card group relative bg-white rounded-2xl p-7 border border-gray-100 overflow-hidden cursor-pointer"
            >
              {/* Gradient corner */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} items-center justify-center text-2xl mb-5 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-ink text-lg mb-3 group-hover:text-teal transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Highlight badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                    {service.highlight}
                  </span>
                  <span className="text-teal font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                    Learn More →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: services.length * 0.12 }}
            className="bg-gradient-to-br from-navy to-teal rounded-2xl p-7 flex flex-col justify-between text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 60%)" }} />
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-black text-2xl mb-3">Ready to Go Viral?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Get a free 30-minute strategy session and discover exactly how we&apos;ll 10x your digital presence.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block text-center bg-white text-navy font-bold py-3 px-6 rounded-full hover:bg-teal hover:text-white transition-all duration-300"
            >
              Book Free Audit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
