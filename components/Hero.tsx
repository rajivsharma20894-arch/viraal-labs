"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps { onAuditClick: () => void; }

const stats = [
  { value: 5, suffix: "x", label: "Instagram Growth" },
  { value: 250, suffix: "%", label: "PPC Lead Growth" },
  { value: 100, suffix: "+", label: "Viral Campaigns" },
];

const words = ["Domination.", "Virality.", "Growth.", "Results.", "Impact."];

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

function StatCounter({ value, suffix, label, delay, started }: {
  value: number; suffix: string; label: string; delay: number; started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass-card rounded-2xl px-6 py-5 text-center group hover:border-teal/30 transition-all duration-300">
      <div className="text-4xl md:text-5xl font-black gradient-text stat-counter">
        {count}{suffix}
      </div>
      <div className="text-white/50 text-xs font-semibold mt-2 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function Hero({ onAuditClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const word = words[wordIndex];
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string; }[] = [];

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["rgba(13,148,136,", "rgba(20,184,166,", "rgba(56,189,248,", "rgba(99,102,241,"];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(13,148,136,${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    setTimeout(() => setStatsStarted(true), 800);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise"
      style={{ background: "radial-gradient(ellipse at 20% 50%, #0f2060 0%, #0a0f1e 40%, #061a18 100%)" }}>

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-teal/20 -top-32 -right-32" style={{ animationDelay: "0s" }} />
      <div className="orb w-96 h-96 bg-blue-600/15 -bottom-20 -left-20" style={{ animationDelay: "3s" }} />
      <div className="orb w-72 h-72 bg-cyan-400/10 top-1/3 left-1/4" style={{ animationDelay: "5s" }} />

      {/* Pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div key={i} className="absolute rounded-full border border-teal/10"
            style={{
              width: `${i * 300}px`, height: `${i * 300}px`,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              animation: `pulse-ring ${2 + i}s ease-out ${i * 0.8}s infinite`,
            }} />
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(rgba(13,148,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <canvas ref={canvasRef} id="particle-canvas" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Pune&apos;s #1 Growth Agency</span>
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-black text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          Viral Labs<br />
          <span className="gradient-text">Unleash Digital</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-black text-white/90 mb-6 h-12 flex items-center justify-center">
          <span className="gradient-text">{displayed}</span>
          <span className="cursor" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg text-white/50 max-w-2xl mx-auto mb-10 font-medium">
          5x growth. 250% leads. Zero guesswork.{" "}
          <span className="text-teal-400 font-semibold">Hyper-targeted campaigns</span>{" "}
          that turn your brand into a viral phenomenon. From Pune to everywhere.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button onClick={onAuditClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="btn-primary text-white font-bold px-10 py-5 rounded-full text-lg shadow-2xl glow">
            🚀 Get Free Digital Audit
          </motion.button>
          <motion.a href="#portfolio" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="glass-card text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
            See Case Studies <span className="text-teal-400">→</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} delay={0.9 + i * 0.15} started={statsStarted} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-teal-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
