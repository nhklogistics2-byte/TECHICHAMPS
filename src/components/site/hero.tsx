"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Bot,
  Sparkles,
  BarChart3,
  Smartphone,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import { useConsultation } from "./consultation-context";

const STATS = [
  { value: "200", suffix: "+", label: "Happy Clients" },
  { value: "320", suffix: "+", label: "Projects Delivered" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
  { value: "6", suffix: "+", label: "Years of Experience" },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
];

export function Hero() {
  const { openConsultation } = useConsultation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setCursor({ x: Math.max(-1, Math.min(1, dx)), y: Math.max(-1, Math.min(1, dy)) });
    };
    const onEnter = () => setActive(true);
    const onLeave = () => {
      setActive(false);
      setCursor({ x: 0, y: 0 });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion]);

  // Depth factors for parallax
  const layer = (depth: number) => {
    if (reduceMotion || !active) return { x: 0, y: 0 };
    return {
      x: cursor.x * depth,
      y: cursor.y * depth,
    };
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-navy-deep via-navy to-navy-soft pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute -left-32 top-1/3 h-[360px] w-[360px] rounded-full bg-blue-accent/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="eyebrow text-gold-soft">
            Strategy. Design. Technology. Growth.
          </span>
          <h1 className="mt-5 font-serif-display text-[2.6rem] leading-[1.05] text-cream sm:text-5xl lg:text-[3.6rem] text-balance">
            Digital Solutions That Drive{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gold-soft to-gold bg-clip-text text-transparent">
                Real Business Growth
              </span>
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/50"
                aria-hidden
              />
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg text-pretty">
            Techi Champs partners with ambitious businesses to grow through branding,
            websites, mobile applications, digital marketing, and AI automation — engineered
            to convert and built to scale.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => openConsultation()}
              className="btn-gold h-12 px-7 text-[15px]"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#work" className="btn-outline-light h-12 px-7 text-[15px]">
              View Our Work
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    className="h-9 w-9 rounded-full border-2 border-navy-deep object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-gold text-gold"
                      strokeWidth={0}
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-medium text-cream/70">4.9/5</span>
                </div>
                <span className="text-xs text-cream/55">
                  Trusted by 200+ businesses
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4">
            {STATS.map((s) => (
              <CounterStat key={s.label} {...s} />
            ))}
          </div>
        </motion.div>

        {/* Right column — 3D layered visual */}
        <HeroVisual layer={layer} active={active} reduceMotion={!!reduceMotion} />
      </div>
    </section>
  );
}

function CounterStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();
  const startedRef = useRef(false);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const target = Number(value);
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, reduce]);

  const shown = reduce ? Number(value) : display;

  return (
    <div ref={ref}>
      <div className="font-serif-display text-2xl font-semibold text-cream sm:text-3xl">
        {shown}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-1 text-xs text-cream/55">{label}</div>
    </div>
  );
}

// =============== 3D-style layered hero visual ===============
type LayerFn = (depth: number) => { x: number; y: number };

function HeroVisual({
  layer,
  active,
  reduceMotion,
}: {
  layer: LayerFn;
  active: boolean;
  reduceMotion: boolean;
}) {
  const lp = layer(14); // laptop — closest
  const ph = layer(28); // phone — closest
  const an = layer(38); // analytics panel
  const ai = layer(48); // AI workflow panel
  const bd = layer(8); // brand cards

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-[5/5] w-full max-w-[560px]"
    >
      {/* Studio environment */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10" />

      {/* Soft amber rim light */}
      <div className="pointer-events-none absolute -right-10 top-10 h-44 w-44 rounded-full bg-gold/25 blur-[80px]" />
      <div className="pointer-events-none absolute -left-12 bottom-12 h-44 w-44 rounded-full bg-blue-accent/20 blur-[90px]" />

      {/* Floating animation wrapper */}
      <div className={reduceMotion ? "" : "animate-float-soft-slow"}>
        {/* Laptop */}
        <motion.div
          animate={{ x: lp.x, y: lp.y }}
          transition={{ type: "spring", stiffness: 80, damping: 18, mass: 0.6 }}
          className="absolute left-1/2 top-[10%] z-30 w-[78%] -translate-x-1/2"
        >
          <LaptopMockup />
        </motion.div>

        {/* Phone */}
        <motion.div
          animate={{ x: ph.x, y: ph.y }}
          transition={{ type: "spring", stiffness: 90, damping: 16, mass: 0.5 }}
          className="absolute right-0 top-[28%] z-40 w-[26%] sm:w-[24%]"
        >
          <PhoneMockup />
        </motion.div>

        {/* Analytics floating panel */}
        <motion.div
          animate={{ x: an.x, y: an.y }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.4 }}
          className="absolute left-0 top-[52%] z-40 w-[46%]"
        >
          <AnalyticsPanel />
        </motion.div>

        {/* AI workflow floating panel */}
        <motion.div
          animate={{ x: ai.x, y: ai.y }}
          transition={{ type: "spring", stiffness: 110, damping: 14, mass: 0.35 }}
          className="absolute right-[6%] bottom-[6%] z-40 w-[44%]"
        >
          <AIPanel />
        </motion.div>

        {/* Brand cards */}
        <motion.div
          animate={{ x: bd.x, y: bd.y }}
          transition={{ type: "spring", stiffness: 70, damping: 20, mass: 0.8 }}
          className="absolute left-[4%] top-[8%] z-20 w-[30%]"
        >
          <BrandCardStack />
        </motion.div>
      </div>

      {/* Status pill — top */}
      <div className="absolute left-1/2 top-[2%] z-50 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-navy-deep/70 px-3 py-1.5 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-cream/80">
            Live · Techi Champs Studio
          </span>
        </div>
      </div>

      {!active && (
        <p className="absolute bottom-[-26px] left-1/2 -translate-x-1/2 text-center text-[11px] text-cream/40">
          {reduceMotion ? "Reduced motion" : "Move your cursor for depth"}
        </p>
      )}
    </motion.div>
  );
}

function LaptopMockup() {
  return (
    <div className="relative">
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[10px] border border-white/15 bg-navy-deep shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
        {/* Top bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cream/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/30" />
          <div className="ml-2 flex-1">
            <div className="h-2.5 w-1/2 rounded-full bg-cream/10" />
          </div>
        </div>

        {/* Content */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-navy to-navy-deep p-3">
          {/* Hero block */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-sm bg-gold" />
              <div className="h-1.5 w-10 rounded-full bg-cream/40" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-6 rounded-full bg-cream/20" />
              <div className="h-1.5 w-6 rounded-full bg-cream/20" />
              <div className="h-3 w-10 rounded-full bg-gold" />
            </div>
          </div>

          <div className="mt-4 space-y-1.5">
            <div className="h-2 w-1.5 rounded-full bg-gold/60" />
            <div className="h-3.5 w-3/4 rounded-full bg-cream/70" />
            <div className="h-3.5 w-2/3 rounded-full bg-cream/40" />
          </div>

          <div className="mt-3 flex gap-1.5">
            <div className="h-4 w-16 rounded-full bg-gold" />
            <div className="h-4 w-12 rounded-full bg-cream/15" />
          </div>

          {/* Mini stat row */}
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
            <MiniStat label="Conversion" value="3.8%" />
            <MiniStat label="Visitors" value="48K" />
            <MiniStat label="Revenue" value="$92K" highlight />
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="relative mx-auto h-1.5 w-[108%] -translate-x-[3.5%] rounded-b-[6px] rounded-t-[2px] bg-gradient-to-b from-white/20 to-white/5">
        <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-b-sm bg-navy-deep" />
      </div>

      <Laptop className="absolute -bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 text-cream/0" />
    </div>
  );
}

function MiniStat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-md border px-1.5 py-1 ${
        highlight
          ? "border-gold/40 bg-gold/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="text-[7px] uppercase tracking-wide text-cream/50">
        {label}
      </div>
      <div
        className={`text-[10px] font-semibold ${
          highlight ? "text-gold" : "text-cream/90"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/15 bg-navy-deep p-1.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]">
      <div className="relative aspect-[9/18] overflow-hidden rounded-[12px] bg-gradient-to-b from-navy to-navy-deep">
        {/* Notch */}
        <div className="absolute left-1/2 top-1.5 h-1 w-8 -translate-x-1/2 rounded-full bg-cream/15" />

        {/* App content */}
        <div className="px-2 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[7px] text-cream/50">Good morning</div>
              <div className="text-[10px] font-semibold text-cream">Alex</div>
            </div>
            <div className="h-4 w-4 rounded-full bg-gold/80" />
          </div>

          <div className="mt-2 rounded-md border border-gold/30 bg-gold/10 p-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[6px] uppercase tracking-wide text-gold-soft">
                Monthly Growth
              </span>
              <TrendingUp className="h-2 w-2 text-gold" />
            </div>
            <div className="mt-0.5 text-[12px] font-semibold text-cream">
              +156%
            </div>
            {/* Tiny chart */}
            <svg viewBox="0 0 80 24" className="mt-1 h-4 w-full">
              <path
                d="M0 20 L12 16 L24 18 L36 10 L48 12 L60 6 L72 4 L80 2"
                fill="none"
                stroke="#ddb87a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 20 L12 16 L24 18 L36 10 L48 12 L60 6 L72 4 L80 2 L80 24 L0 24 Z"
                fill="url(#goldGrad)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ddb87a" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#ddb87a" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-2 space-y-1">
            {[
              ["Sessions", "12.4K"],
              ["Active users", "3,210"],
              ["Conversion", "4.7%"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between rounded-md border border-white/5 bg-white/[0.03] px-1.5 py-1"
              >
                <span className="text-[7px] text-cream/55">{k}</span>
                <span className="text-[8px] font-semibold text-cream">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-2 rounded-md bg-gold p-1.5 text-center">
            <span className="text-[8px] font-semibold text-navy-deep">
              Upgrade plan
            </span>
          </div>
        </div>
      </div>

      <Smartphone className="absolute -bottom-1 -right-1 h-3 w-3 text-transparent" />
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="relative rounded-xl border border-white/15 bg-navy-deep/80 p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="h-3 w-3 text-gold" />
          <span className="text-[9px] font-medium text-cream">Analytics</span>
        </div>
        <span className="text-[7px] text-cream/40">Last 30 days</span>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
          <div className="text-[6px] uppercase tracking-wide text-cream/50">
            Signups
          </div>
          <div className="text-[12px] font-semibold text-cream">8,420</div>
          <div className="text-[6px] text-gold">+156%</div>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
          <div className="text-[6px] uppercase tracking-wide text-cream/50">
            Traffic
          </div>
          <div className="text-[12px] font-semibold text-cream">142K</div>
          <div className="text-[6px] text-gold">+82%</div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="mt-2 flex h-10 items-end gap-0.5">
        {[40, 55, 35, 70, 45, 80, 60, 95, 75, 100, 85, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-gold/30 to-gold"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function AIPanel() {
  return (
    <div className="relative rounded-xl border border-white/15 bg-navy-deep/80 p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Bot className="h-3 w-3 text-gold" />
          <span className="text-[9px] font-medium text-cream">AI Workflow</span>
        </div>
        <span className="flex items-center gap-1 text-[7px] text-gold">
          <span className="h-1 w-1 rounded-full bg-gold" />
          Active
        </span>
      </div>

      <div className="mt-2 space-y-1.5">
        {[
          ["Trigger", "New lead", "✓"],
          ["Enrich", "Data + score", "✓"],
          ["Route", "Owner match", "↻"],
          ["Reply", "Draft email", "—"],
        ].map(([step, detail, status], i) => (
          <div
            key={step}
            className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.03] px-1.5 py-1"
          >
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-gold/15 text-[6px] font-bold text-gold">
              {i + 1}
            </span>
            <span className="text-[8px] font-medium text-cream">{step}</span>
            <span className="text-[7px] text-cream/50">{detail}</span>
            <span className="ml-auto text-[8px] text-gold">{status}</span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-1 rounded-md bg-gold/10 px-1.5 py-1">
        <Sparkles className="h-2.5 w-2.5 text-gold" />
        <span className="text-[7px] text-cream">
          Saved 184 hours this month
        </span>
      </div>
    </div>
  );
}

function BrandCardStack() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rotate-[-6deg] rounded-lg border border-white/10 bg-navy/60" />
      <div className="absolute inset-0 rotate-[3deg] rounded-lg border border-white/10 bg-navy-deep/80" />
      <div className="relative rounded-lg border border-white/15 bg-gradient-to-br from-navy-soft to-navy-deep p-2 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-gold" />
            <span className="text-[7px] font-semibold uppercase tracking-wide text-cream">
              Techi Champs
            </span>
          </div>
          <CheckCircle2 className="h-2 w-2 text-gold" />
        </div>
        <div className="mt-1.5 space-y-0.5">
          <div className="h-1 w-3/4 rounded-full bg-cream/40" />
          <div className="h-1 w-1/2 rounded-full bg-cream/20" />
        </div>
        <div className="mt-1.5 flex gap-0.5">
          <div className="h-2 w-2 rounded-sm bg-gold" />
          <div className="h-2 w-2 rounded-sm bg-cream/30" />
          <div className="h-2 w-2 rounded-sm bg-blue-accent/60" />
          <div className="h-2 w-2 rounded-sm bg-cream/15" />
        </div>
      </div>
    </div>
  );
}
