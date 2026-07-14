"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero visual — uses the actual reference image showing a laptop + phone
 * displaying the Techi Champs website. Static, no animations beyond fade-in.
 */

type HeroVisualProps = {
  // Props kept for API compatibility but unused — the image is the same across pages
  laptopHeadline?: string;
  laptopSubtext?: string;
  phoneMetricLabel?: string;
  phoneMetricValue?: string;
  stat1?: { label: string; value: string };
  stat2?: { label: string; value: string };
  stat3?: { label: string; value: string };
};

export function HeroVisual(_props: HeroVisualProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[600px]"
    >
      {/* The cropped reference image — hero section only (laptop + phone) */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/hero-cropped.png"
          alt="Techi Champs website displayed on laptop and phone — Building Experiences, Delivering Results"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Status pill — overlaid on top */}
      <div className="absolute left-1/2 top-[2%] z-50 -translate-x-1/2">
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
