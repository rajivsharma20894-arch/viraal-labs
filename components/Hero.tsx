"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onAuditClick: () => void;
}

const stats = [
  { value: 5, suffix: "x", label: "Instagram Growth", prefix: "" },
  { value: 250, suffix: "%", label: "PPC Lead Growth", prefix: "" },
  { value: 100, suffix: "+", label: "Viral Campaigns", prefix: "" },
];

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, started]);
  return count;
}

function StatCounter({ value, suffix, label, prefix, delay, started }: {
  value: number; suffix: string; label: string; prefix: string; delay: number; started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass-card rounded-2xl px-6 py-4 text-center"
    >
      <div className="text-3xl md:text-4xl font-black text-white stat-counter">
        {prefix}{count}{suffix}
      </div>
      <div className="text-teal-light text-xs font-semibold mt-1 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function Hero({ onAuditClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["rgba(13,148,136,", "rgba(20,184,166,", "rgba(56,189,248,", "rgba(30,58,138,"];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(13,148,136,${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    setTimeout(() => setStatsStarted(true), 800);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient noise">
      {/* Animated Orbs */}
      <div className="orb w-96 h-96 bg-teal/30 top-[-100px] right-[-100px]" style={{ animationDelay: "0s" }} />
      <div className="orb w-80 h-80 bg-navy/40 bottom-[-80px] left-[-80px]" style={{ animationDelay: "2s" }} />
      <div className="orb w-64 h-64 bg-teal/20 top-1/2 left-1/4" style={{ animationDelay: "4s" }} />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
          <span className="text-teal-light text-xs font-semibold uppercase tracking-widest">
            Pune&apos;s #1 Growth Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-black text-white leading-none mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Viraal Labs{" "}
          <span className="gradient-text">by Shri</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-2xl md:text-3xl font-semibold text-white/80 mb-4 italic"
        >
          &ldquo;Unleash Viraal Vibes&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg text-white/60 max-w-2xl mx-auto mb-10 font-medium"
        >
          5x growth. 250% leads. Zero guesswork.{" "}
          <span className="text-teal-light">Hyper-targeted campaigns</span> that turn your brand into a viral phenomenon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={onAuditClick}
            className="btn-primary text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl"
          >
            🚀 Get Free Digital Audit
          </button>
          <a
            href="#portfolio"
            className="glass-card text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300"
          >
            See Case Studies →
          </a>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} delay={0.8 + i * 0.15} started={statsStarted} />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white/40 text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
