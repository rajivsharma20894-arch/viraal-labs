"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Filter = "All" | "Social" | "PPC" | "Web Design";

const projects = [
  {
    id: 1,
    client: "FreshCart Groceries",
    category: "Social" as Filter,
    tag: "Social Media",
    tagColor: "bg-pink-500",
    metric1: { value: "5x", label: "Reach Growth" },
    metric2: { value: "180%", label: "Traffic ↑" },
    duration: "3 months",
    summary: "Full Instagram & Facebook strategy including Reels, Stories, and influencer collabs.",
    gradient: "from-pink-600 to-rose-400",
    icon: "🛒",
  },
  {
    id: 2,
    client: "TechLaunch SaaS",
    category: "PPC" as Filter,
    tag: "PPC",
    tagColor: "bg-orange-500",
    metric1: { value: "250%", label: "Lead Growth" },
    metric2: { value: "62%", label: "CPL Drop" },
    duration: "60 days",
    summary: "Google Ads + Meta retargeting with AI funnel optimization and A/B creative testing.",
    gradient: "from-orange-500 to-amber-400",
    icon: "💡",
  },
  {
    id: 3,
    client: "StyleHouse Fashion",
    category: "Web Design" as Filter,
    tag: "Web Design",
    tagColor: "bg-teal",
    metric1: { value: "340%", label: "Sales ↑" },
    metric2: { value: "1.8s", label: "Load Time" },
    duration: "6 weeks",
    summary: "Next.js eCommerce store with custom animations, Razorpay integration, and PWA support.",
    gradient: "from-teal to-cyan-400",
    icon: "👗",
  },
  {
    id: 4,
    client: "PuneEats Food Delivery",
    category: "Social" as Filter,
    tag: "Social Media",
    tagColor: "bg-pink-500",
    metric1: { value: "12K", label: "New Followers" },
    metric2: { value: "67%", label: "Engagement ↑" },
    duration: "90 days",
    summary: "Viral food Reels strategy with UGC campaigns, influencer partnerships, and targeted Meta ads.",
    gradient: "from-red-500 to-pink-400",
    icon: "🍕",
  },
  {
    id: 5,
    client: "FinStart Lending",
    category: "PPC" as Filter,
    tag: "PPC",
    tagColor: "bg-orange-500",
    metric1: { value: "8.2x", label: "ROAS" },
    metric2: { value: "420+", label: "Monthly Leads" },
    duration: "4 months",
    summary: "Multi-platform paid strategy for loan product with strict compliance targeting and smart bidding.",
    gradient: "from-navy to-blue-400",
    icon: "💰",
  },
  {
    id: 6,
    client: "AyurWell Clinic",
    category: "Web Design" as Filter,
    tag: "Web Design",
    tagColor: "bg-teal",
    metric1: { value: "200%", label: "Bookings ↑" },
    metric2: { value: "98", label: "Lighthouse" },
    duration: "3 weeks",
    summary: "Health & wellness website with appointment booking, WhatsApp integration, and local SEO.",
    gradient: "from-green-500 to-emerald-400",
    icon: "🌿",
  },
];

const filters: Filter[] = ["All", "Social", "PPC", "Web Design"];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 mb-4">
            <span className="text-teal text-xs font-bold uppercase tracking-widest">📁 Our Work</span>
          </div>
          <h2 className="font-black text-ink mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
            Results That{" "}
            <span className="gradient-text">Speak Louder</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real campaigns, real numbers, real clients from Pune and beyond.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === f
                  ? "bg-gradient-to-r from-teal to-cyan-500 text-white shadow-lg shadow-teal/30"
                  : "bg-white text-gray-500 hover:text-teal border border-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="portfolio-card relative group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Top gradient banner */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="text-7xl opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-10">
                    <div className="text-center text-white">
                      <div className="text-3xl font-black">{project.metric1.value}</div>
                      <div className="text-xs font-semibold opacity-80">{project.metric1.label}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <span className="text-gray-400 text-xs">{project.duration}</span>
                  </div>

                  <h3 className="font-bold text-ink text-lg mb-2 group-hover:text-teal transition-colors">
                    {project.client}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.summary}</p>

                  <div className="flex gap-4 pt-3 border-t border-gray-50">
                    {[project.metric1, project.metric2].map((m) => (
                      <div key={m.label}>
                        <div className="font-black text-teal text-xl">{m.value}</div>
                        <div className="text-gray-400 text-xs font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4 font-medium">Ready to be our next success story?</p>
          <a
            href="#contact"
            className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-full text-lg"
          >
            Start Your Growth Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
