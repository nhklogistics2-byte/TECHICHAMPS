"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "./consultation-context";
import { useRouter } from "./page-router";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: { label: string; action?: () => void };
  secondaryCta?: { label: string; href?: string; action?: () => void };
  heroImage?: string;
  // These props are kept for API compatibility but no longer used
  laptopHeadline?: string;
  laptopSubtext?: string;
  phoneMetricLabel?: string;
  phoneMetricValue?: string;
  stat1?: { label: string; value: string };
  stat2?: { label: string; value: string };
  stat3?: { label: string; value: string };
  showStats?: boolean;
  stats?: { value: string; suffix: string; label: string }[];
  trustIndicator?: boolean;
};

export function HeroSection({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  heroImage = "/hero-images/home.png",
  showStats = false,
  stats,
  trustIndicator = false,
}: HeroSectionProps) {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();
  const { navigate } = useRouter();

  const onPrimary = primaryCta?.action ?? (() => openConsultation());
  const onSecondary = secondaryCta?.action ?? (() => navigate({ name: "work" }));

  return (
    <section
      id="top"
      className="relative min-h-[92vh] overflow-hidden bg-navy-deep pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* === Full background image — the generated cinematic hero === */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        {/* Dark overlay gradient on the left for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18,10,36,0.92) 0%, rgba(18,10,36,0.75) 35%, rgba(18,10,36,0.35) 60%, rgba(18,10,36,0.15) 100%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deep to-transparent" />
      </div>

      {/* === Text content overlaid on left === */}
      <div className="container-px relative flex min-h-[70vh] items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="eyebrow text-gold-soft">{eyebrow}</span>
          <h1 className="mt-5 font-serif-display text-[2.6rem] leading-[1.05] text-cream sm:text-5xl lg:text-[3.6rem] text-balance">
            {title}{" "}
            {highlight ? (
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-gold-soft to-gold bg-clip-text text-transparent">
                  {highlight}
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/50"
                  aria-hidden
                />
              </span>
            ) : null}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg text-pretty">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onPrimary}
              className="btn-gold h-12 px-7 text-[15px]"
            >
              {primaryCta?.label ?? "Book a Free Consultation"}
              <ArrowRight className="h-4 w-4" />
            </button>
            {secondaryCta ? (
              <button
                onClick={onSecondary}
                className="btn-outline-light h-12 px-7 text-[15px]"
              >
                {secondaryCta.label}
              </button>
            ) : null}
          </div>

          {trustIndicator ? (
            <div className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&auto=format&q=70",
                ].map((src, i) => (
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
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 fill-gold text-gold"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.4 4.8 17.1l1-5.8L1.5 7.2l5.9-.9L10 1z" />
                    </svg>
                  ))}
                  <span className="ml-1.5 text-xs font-medium text-cream/70">4.9/5</span>
                </div>
                <span className="text-xs text-cream/55">
                  Trusted by 200+ businesses
                </span>
              </div>
            </div>
          ) : null}

          {showStats && stats ? (
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif-display text-2xl font-semibold text-cream sm:text-3xl">
                    {s.value}
                    <span className="text-gold">{s.suffix}</span>
                  </div>
                  <div className="mt-1 text-xs text-cream/55">{s.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
