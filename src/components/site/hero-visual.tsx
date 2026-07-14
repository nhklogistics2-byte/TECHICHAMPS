"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp } from "lucide-react";

/**
 * Static hero visual — laptop showing a mini Techi Champs website + phone showing analytics.
 * Matches the reference image: dark website on laptop with headline, purple CTA, and 3 stats.
 * Phone shows "Analytics that drive decisions" with a purple growth chart.
 */
type HeroVisualProps = {
  laptopHeadline?: string;
  laptopSubtext?: string;
  phoneMetricLabel?: string;
  phoneMetricValue?: string;
  stat1?: { label: string; value: string };
  stat2?: { label: string; value: string };
  stat3?: { label: string; value: string };
};

const DEFAULT_PROPS: Required<HeroVisualProps> = {
  laptopHeadline: "Building Experiences.\nDelivering Results.",
  laptopSubtext: "Let's Build Together",
  phoneMetricLabel: "Revenue Growth",
  phoneMetricValue: "+240%",
  stat1: { label: "Revenue Growth", value: "250%" },
  stat2: { label: "Higher Engagement", value: "70%" },
  stat3: { label: "Operational Efficiency", value: "45%" },
};

export function HeroVisual(props: HeroVisualProps) {
  const p = { ...DEFAULT_PROPS, ...props };
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-[5/4] w-full max-w-[580px]"
    >
      {/* Subtle ambient glow — static, no animation */}
      <div className="pointer-events-none absolute -right-8 top-8 h-40 w-40 rounded-full bg-gold/20 blur-[80px]" />
      <div className="pointer-events-none absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-blue-accent/15 blur-[90px]" />

      {/* Laptop — centered, shows the Techi Champs website */}
      <div className="absolute left-1/2 top-[6%] z-30 w-[85%] -translate-x-1/2">
        <LaptopMockup
          headline={p.laptopHeadline}
          subtext={p.laptopSubtext}
          stat1={p.stat1}
          stat2={p.stat2}
          stat3={p.stat3}
        />
      </div>

      {/* Phone — right side, overlapping laptop slightly */}
      <div className="absolute right-[-2%] top-[28%] z-40 w-[22%]">
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
            Live · Techi Champs
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
      {/* Laptop screen — realistic with silver/gray frame */}
      <div className="relative overflow-hidden rounded-[12px] border-[6px] border-[#3a3a40] bg-[#2a2a30] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)]">
        {/* Screen content — mini Techi Champs website */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-soft">
          {/* === Website nav bar === */}
          <div className="flex items-center justify-between border-b border-white/10 bg-navy-deep/80 px-3 py-2 backdrop-blur">
            <span className="font-sans text-[10px] font-semibold text-cream">
              Techi Champs
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[7px] text-cream/60">Solutions</span>
              <span className="text-[7px] text-cream/60">Industries</span>
              <span className="text-[7px] text-cream/60">Resources</span>
              <span className="text-[7px] text-cream/60">Company</span>
              <span className="rounded-full bg-gold px-2 py-0.5 text-[7px] font-semibold text-white">
                Contact Us
              </span>
            </div>
          </div>

          {/* === Hero content === */}
          <div className="px-4 pt-4">
            {/* Headline */}
            <div className="space-y-1">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`text-[11px] font-bold leading-tight ${
                    i === 0 ? "text-cream" : "text-cream"
                  }`}
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Subheadline */}
            <div className="mt-1.5 h-1.5 w-[90%] rounded-full bg-cream/30" />
            <div className="mt-1 h-1.5 w-[75%] rounded-full bg-cream/20" />

            {/* CTA button */}
            <div className="mt-3 inline-flex items-center rounded-full bg-gold px-3 py-1.5">
              <span className="text-[8px] font-semibold text-white">{subtext}</span>
            </div>
          </div>

          {/* === Stats row at bottom === */}
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-2.5">
            <StatBlock value={stat1.value} label={stat1.label} />
            <StatBlock value={stat2.value} label={stat2.label} />
            <StatBlock value={stat3.value} label={stat3.label} />
          </div>
        </div>
      </div>

      {/* Laptop base — silver/gray metallic */}
      <div className="relative mx-auto h-2 w-[112%] -translate-x-[6%] rounded-b-[8px] rounded-t-[2px] bg-gradient-to-b from-[#4a4a52] via-[#3a3a40] to-[#2a2a30] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]">
        {/* Trackpad indent */}
        <div className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-b-sm bg-[#1a1a20]" />
      </div>
    </div>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-[14px] font-bold leading-none text-gold">
        {value}
      </div>
      <div className="mt-0.5 text-[6px] leading-tight text-cream/60">
        {label}
      </div>
    </div>
  );
}

function PhoneMockup({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative overflow-hidden rounded-[16px] border-[3px] border-[#2a2a30] bg-[#1a1a20] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]">
      <div className="relative aspect-[9/18] overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-navy-deep">
        {/* Notch */}
        <div className="absolute left-1/2 top-1.5 h-1 w-8 -translate-x-1/2 rounded-full bg-cream/15" />

        {/* App content — analytics */}
        <div className="px-2 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[7px] text-cream/50">Good morning</div>
              <div className="text-[10px] font-semibold text-cream">Alex</div>
            </div>
            <div className="h-4 w-4 rounded-full bg-gold/80" />
          </div>

          {/* Analytics card */}
          <div className="mt-2 rounded-md border border-gold/30 bg-gold/10 p-1.5">
            <div className="text-[7px] font-semibold text-cream">
              Analytics that drive decisions
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-[14px] font-bold text-gold">{value}</span>
              <span className="text-[6px] text-cream/60">{label}</span>
            </div>

            {/* Purple line graph */}
            <svg viewBox="0 0 80 24" className="mt-1 h-5 w-full">
              <path
                d="M0 22 L10 18 L20 20 L30 12 L40 14 L50 8 L60 6 L70 4 L80 2"
                fill="none"
                stroke="#9d5ef7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 22 L10 18 L20 20 L30 12 L40 14 L50 8 L60 6 L70 4 L80 2 L80 24 L0 24 Z"
                fill="url(#phonePurpleGrad)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="phonePurpleGrad" x1="0" y1="0" x2="0" y2="1">
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
