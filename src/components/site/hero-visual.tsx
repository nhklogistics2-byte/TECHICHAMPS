"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp } from "lucide-react";

/**
 * Static hero visual — laptop showing a mini Techi Champs website + phone showing analytics.
 * No cursor parallax, no floating panels. Just the laptop + phone composition.
 * Content can be customized per-page via props.
 */
type HeroVisualProps = {
  variant?: "home" | "work" | "service" | "process" | "about" | "reviews" | "faq" | "contact";
  laptopHeadline?: string;
  laptopSubtext?: string;
  phoneMetricLabel?: string;
  phoneMetricValue?: string;
  stat1?: { label: string; value: string };
  stat2?: { label: string; value: string };
  stat3?: { label: string; value: string };
};

const DEFAULT_PROPS: Required<HeroVisualProps> = {
  variant: "home",
  laptopHeadline: "Building Experiences.\nDelivering Results.",
  laptopSubtext: "Let's Build Together",
  phoneMetricLabel: "Monthly Growth",
  phoneMetricValue: "+156%",
  stat1: { label: "Conversion", value: "3.8%" },
  stat2: { label: "Visitors", value: "48K" },
  stat3: { label: "Revenue", value: "$92K" },
};

export function HeroVisual(props: HeroVisualProps) {
  const p = { ...DEFAULT_PROPS, ...props };
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-[5/4] w-full max-w-[560px]"
    >
      {/* Studio backdrop — subtle, no animation */}
      <div className="pointer-events-none absolute -right-8 top-8 h-40 w-40 rounded-full bg-gold/20 blur-[80px]" />
      <div className="pointer-events-none absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-blue-accent/15 blur-[90px]" />

      {/* Laptop — centered, shows the Techi Champs website */}
      <div className="absolute left-1/2 top-[8%] z-30 w-[82%] -translate-x-1/2">
        <LaptopMockup
          headline={p.laptopHeadline}
          subtext={p.laptopSubtext}
          stat1={p.stat1}
          stat2={p.stat2}
          stat3={p.stat3}
        />
      </div>

      {/* Phone — right side, shows analytics */}
      <div className="absolute right-[0%] top-[30%] z-40 w-[24%]">
        <PhoneMockup
          label={p.phoneMetricLabel}
          value={p.phoneMetricValue}
        />
      </div>

      {/* Status pill — top */}
      <div className="absolute left-1/2 top-[0%] z-50 -translate-x-1/2">
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
    </motion.div>
  );
}

function LaptopMockup({
  headline,
  subtext,
  stat1,
  stat2,
  stat3,
}: {
  headline: string;
  subtext: string;
  stat1: { label: string; value: string };
  stat2: { label: string; value: string };
  stat3: { label: string; value: string };
}) {
  const lines = headline.split("\n");
  return (
    <div className="relative">
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[10px] border border-white/15 bg-navy-deep shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
        {/* Browser top bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cream/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/30" />
          <div className="ml-2 flex-1">
            <div className="h-2.5 w-1/2 rounded-full bg-cream/10" />
          </div>
        </div>

        {/* Website content — mini Techi Champs site */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-navy-deep via-navy to-navy-soft p-3">
          {/* Site nav bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="flex h-3 w-3 items-center justify-center rounded-sm bg-gold">
                <span className="text-[6px] font-bold text-white">T</span>
              </div>
              <div className="h-1.5 w-12 rounded-full bg-cream/50" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-5 rounded-full bg-cream/20" />
              <div className="h-1.5 w-5 rounded-full bg-cream/20" />
              <div className="h-1.5 w-5 rounded-full bg-cream/20" />
              <div className="h-3 w-8 rounded-full bg-gold" />
            </div>
          </div>

          {/* Hero headline */}
          <div className="mt-4">
            <div className="h-1.5 w-10 rounded-full bg-gold/70" />
            <div className="mt-2 space-y-1.5">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`h-3 rounded-full ${
                    i === 0
                      ? "w-[85%] bg-cream/85"
                      : i === 1
                      ? "w-[70%] bg-gradient-to-r from-gold to-gold-soft"
                      : "w-[55%] bg-cream/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-3 flex gap-1.5">
            <div className="h-3.5 w-16 rounded-full bg-gold" />
            <div className="h-3.5 w-12 rounded-full border border-cream/20 bg-cream/5" />
          </div>

          {/* Stats row at bottom — like the reference image */}
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
            <MiniStat label={stat1.label} value={stat1.value} />
            <MiniStat label={stat2.label} value={stat2.value} />
            <MiniStat label={stat3.label} value={stat3.value} highlight />
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="relative mx-auto h-1.5 w-[108%] -translate-x-[3.5%] rounded-b-[6px] rounded-t-[2px] bg-gradient-to-b from-white/20 to-white/5">
        <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-b-sm bg-navy-deep" />
      </div>

      {/* Subtext tag */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[9px] font-semibold text-white">
        {subtext}
      </div>
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
      <div className="text-[6px] uppercase tracking-wide text-cream/50">
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

function PhoneMockup({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/15 bg-navy-deep p-1.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]">
      <div className="relative aspect-[9/18] overflow-hidden rounded-[12px] bg-gradient-to-b from-navy to-navy-deep">
        {/* Notch */}
        <div className="absolute left-1/2 top-1.5 h-1 w-8 -translate-x-1/2 rounded-full bg-cream/15" />

        {/* App content — analytics dashboard */}
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
                {label}
              </span>
              <TrendingUp className="h-2 w-2 text-gold" />
            </div>
            <div className="mt-0.5 text-[12px] font-semibold text-cream">
              {value}
            </div>
            {/* Tiny chart */}
            <svg viewBox="0 0 80 24" className="mt-1 h-4 w-full">
              <path
                d="M0 20 L12 16 L24 18 L36 10 L48 12 L60 6 L72 4 L80 2"
                fill="none"
                stroke="#9d5ef7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 20 L12 16 L24 18 L36 10 L48 12 L60 6 L72 4 L80 2 L80 24 L0 24 Z"
                fill="url(#purpleGrad)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#9d5ef7" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#9d5ef7" stopOpacity="0" />
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
            <span className="text-[8px] font-semibold text-white">
              Upgrade plan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
