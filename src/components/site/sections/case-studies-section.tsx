"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SectionHeader } from "./services-section";
import { CASE_STUDIES } from "@/lib/case-studies-data";

type Props = {
  limit?: number;
  showHeader?: boolean;
  bg?: "navy" | "cream";
};

export function CaseStudiesSection({
  limit,
  showHeader = true,
  bg = "navy",
}: Props) {
  const reduce = useReducedMotion();
  const cases = limit ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES;

  return (
    <section
      id="work"
      className={`relative py-24 md:py-32 ${
        bg === "navy" ? "bg-navy" : "bg-cream-soft"
      }`}
    >
      {/* Ambient glow */}
      {bg === "navy" && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-gold/8 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-accent/8 blur-[120px]" />
        </div>
      )}

      <div className="container-px relative">
        {showHeader && (
          <SectionHeader
            eyebrow="Selected work"
            title="Real Results. Measurable Impact."
            description="We don't chase awards. We chase outcomes. A few recent engagements where strategy, design, and engineering came together."
            light={bg === "navy"}
          />
        )}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 ${
                bg === "navy"
                  ? "border-white/10 bg-navy-soft/60 hover:border-gold/30 hover:bg-navy-soft"
                  : "border-border/70 bg-card hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(11,26,46,0.25)]"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.project}
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    bg === "navy"
                      ? "from-navy-soft via-navy-soft/40 to-transparent"
                      : "from-card via-card/40 to-transparent"
                  }`}
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-deep/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cream/80 backdrop-blur">
                  {c.industry}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className={`font-serif-display text-xl font-semibold ${
                    bg === "navy" ? "text-cream" : "text-navy"
                  }`}
                >
                  {c.project}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    bg === "navy" ? "text-cream/60" : "text-mist"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      bg === "navy" ? "text-cream/80" : "text-navy/80"
                    }`}
                  >
                    Challenge:
                  </span>{" "}
                  {c.challenge}
                </p>

                {/* Results */}
                <div
                  className={`mt-5 grid grid-cols-3 gap-2 border-t pt-5 ${
                    bg === "navy" ? "border-white/10" : "border-border"
                  }`}
                >
                  {c.results.map((r) => (
                    <div
                      key={r.label}
                      className={`rounded-lg p-2.5 transition-all duration-500 group-hover:bg-white/[0.06] ${
                        bg === "navy" ? "bg-white/[0.03]" : "bg-navy/[0.02]"
                      }`}
                    >
                      <div className="flex items-center gap-1 text-gold">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-sm font-semibold">{r.value}</span>
                      </div>
                      <div
                        className={`mt-0.5 text-[10px] leading-tight ${
                          bg === "navy" ? "text-cream/55" : "text-mist"
                        }`}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
