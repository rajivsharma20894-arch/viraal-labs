"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pillars = [
  {
    icon: "📊",
    title: "Data-Driven Virality",
    subtitle: "Metrics that matter",
    desc: "Every campaign is backed by deep analytics, competitor benchmarking, and audience behavioral data to maximize virality potential before we even post.",
    stats: [
      { label: "Avg. Engagement Rate", value: "8.4%", sub: "vs 1.2% industry avg" },
      { label: "Content Viral Rate", value: "34%", sub: "posts reach 10k+ organically" },
    ],
    color: "from-teal to-cyan-400",
    bg: "bg-teal/5",
  },
  {
    icon: "📈",
    title: "Real-Time Dashboards",
    subtitle: "Full transparency",
    desc: "You see everything we see. Custom client dashboards with live analytics, spend tracking, ROI metrics, and weekly AI-powered insights reports.",
    stats: [
      { label: "Reporting Cadence", value: "24/7", sub: "live dashboard access" },
      { label: "Avg. ROAS", value: "6.8x", sub: "across all campaigns" },
    ],
    color: "from-navy to-blue-400",
    bg: "bg-navy/5",
  },
  {
    icon: "🤖",
    title: "AI-Optimized Funnels",
    subtitle: "Smarter conversions",
    desc: "Proprietary AI models analyze funnel drop-offs, optimize ad creative in real time, and auto-adjust bidding strategies to squeeze maximum leads from every rupee spent.",
    stats: [
      { label: "Cost Per Lead Reduction", value: "62%", sub: "avg. in 90 days" },
      { label: "Conversion Rate Lift", value: "3.2x", sub: "vs non-AI campaigns" },
    ],
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-500/5",
  },
];

const caseStudies = [
  {
    client: "Pune eCommerce Brand",
    result: "5x Instagram Reach",
    period: "3 months",
    details: "From 12K to 60K+ monthly reach. 400% spike in DMs and 180% increase in website traffic from social.",
    icon: "🛍️",
  },
  {
    client: "SaaS Startup, Pune",
    result: "250% Lead Growth",
    period: "60 days",
    details: "Implemented AI funnel strategy. CPL dropped from ₹480 to ₹142 while lead quality score improved by 40%.",
    icon: "💼",
  },
];

export default function Differentiation() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="differentiation" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-2 mb-4">
            <span className="text-navy text-xs font-bold uppercase tracking-widest">⚡ Competitive Edge</span>
          </div>
          <h2 className="font-black text-ink mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
            Why Viraal Labs{" "}
            <span className="gradient-text">Crushes Competition</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We don&apos;t do vanity metrics. We engineer results with the precision of a growth machine.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${p.bg} rounded-2xl p-7 border border-gray-100 group hover:shadow-xl transition-all duration-500`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                {p.icon}
              </div>
              <div className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${p.color} bg-clip-text text-transparent mb-2`}>
                {p.subtitle}
              </div>
              <h3 className="font-black text-ink text-xl mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                {p.stats.map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 font-medium">{s.label}</div>
                      <div className="text-xs text-gray-300 italic">{s.sub}</div>
                    </div>
                    <div className={`text-2xl font-black bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="font-black text-ink text-2xl text-center mb-8">
            🏆 Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((c, i) => (
              <motion.div
                key={c.client}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className="bg-gradient-to-br from-navy to-teal rounded-2xl p-7 text-white relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl opacity-20">{c.icon}</div>
                <div className="text-4xl mb-4">{c.icon}</div>
                <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">{c.client}</div>
                <div className="text-3xl font-black mb-1">{c.result}</div>
                <div className="text-teal-light text-sm font-semibold mb-4">in {c.period}</div>
                <p className="text-white/70 text-sm leading-relaxed">{c.details}</p>
                <div className="mt-4">
                  <a href="#portfolio" className="text-teal-light font-semibold text-sm hover:text-white transition-colors">
                    Full Case Study →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
