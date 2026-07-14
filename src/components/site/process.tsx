"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Search, Compass, PenTool, Code, Rocket, LineChart } from "lucide-react";
import { SectionHeader } from "./services";

const STEPS = [
  {
    icon: Search,
    title: "Discover",
    desc: "We dig into your goals, audience, and current state — then define the few metrics that will tell us if we're winning.",
  },
  {
    icon: Compass,
    title: "Strategize",
    desc: "Positioning, scope, and sequencing. A clear roadmap so you know exactly what we're building and why, in what order.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Brand, UX, and visual system — reviewed weekly with you, not delivered as a Friday-afternoon surprise.",
  },
  {
    icon: Code,
    title: "Develop",
    desc: "Modern, accessible, and fast. Tested continuously, with staging previews you can click through any time.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "QA, performance, analytics, and a clean cutover. No surprises on day one — only a smooth handoff and live monitoring.",
  },
  {
    icon: LineChart,
    title: "Optimize",
    desc: "Post-launch we measure against the metrics we set in Discover, and iterate toward compounding gains.",
  },
];

export function Process() {
  const reduce = useReducedMotion();
  const lineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-cream py-24 md:py-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="How we work"
          title="A Clear Process, End to End"
          description="Six stages, reviewed every week. You always know what's happening, what's next, and what's blocked."
        />

        {/* Desktop horizontal timeline */}
        <div ref={lineRef} className="relative mt-16 hidden lg:block">
          {/* Base line */}
          <div className="absolute left-0 right-0 top-7 h-px bg-border" />
          {/* Fill line */}
          <motion.div
            style={{ height: "1px", width: fillHeight }}
            className="absolute left-0 top-7 bg-gradient-to-r from-gold to-gold-soft"
          />

          <div className="grid grid-cols-6 gap-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col items-center text-center"
              >
                <StepBadge icon={s.icon} index={i + 1} />
                <h3 className="mt-5 font-serif-display text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-mist text-pretty">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-10 space-y-6 lg:hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex gap-4"
            >
              {/* Vertical line */}
              {i < STEPS.length - 1 && (
                <span className="absolute left-[19px] top-12 h-[calc(100%+0px)] w-px bg-border" />
              )}
              <StepBadge icon={s.icon} index={i + 1} compact />
              <div className="flex-1 pb-2">
                <h3 className="font-serif-display text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist text-pretty">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBadge({
  icon: Icon,
  index,
  compact,
}: {
  icon: typeof Search;
  index: number;
  compact?: boolean;
}) {
  return (
    <div className="relative z-10 flex items-center justify-center">
      <motion.div
        whileHover={{ rotate: 4, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`flex items-center justify-center rounded-full border border-border bg-card shadow-sm transition-colors duration-500 hover:border-gold/40 hover:bg-gold/10 ${
          compact ? "h-10 w-10" : "h-14 w-14"
        }`}
      >
        <Icon
          className={`${compact ? "h-4 w-4" : "h-5 w-5"} text-navy transition-colors duration-500`}
          strokeWidth={1.6}
        />
      </motion.div>
      <span
        className={`absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-gold text-[9px] font-bold text-navy-deep ${
          compact ? "h-4 w-4" : "h-5 w-5"
        }`}
      >
        {String(index).padStart(2, "0")}
      </span>
    </div>
  );
}
