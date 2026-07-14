"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "../consultation-context";
import { useRouter } from "../page-router";
import { SERVICES } from "@/lib/services-data";

export function ServicesSection() {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();
  const { navigate } = useRouter();

  return (
    <section id="services" className="relative bg-cream py-24 md:py-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="What we do"
          title="End-to-End Solutions for Modern Businesses"
          description="One partner for strategy, design, development, marketing, and AI — so you can stop stitching vendors together and start shipping outcomes."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.button
              key={s.slug}
              onClick={() => navigate({ name: "service", slug: s.slug })}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-7 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(11,26,46,0.25)] focus-premium"
            >
              {/* Gold accent border reveal */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-500 group-hover:bg-gold/12 group-hover:text-gold-deep">
                  <s.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-serif-display text-3xl font-semibold text-navy/[0.06] transition-colors duration-500 group-hover:text-gold/30">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-5 font-serif-display text-xl font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist text-pretty">
                {s.tagline}
              </p>

              <span className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors group-hover:text-gold-deep">
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="font-serif-display text-xl font-semibold text-navy">
              Not sure which service you need?
            </h3>
            <p className="mt-1 text-sm text-mist">
              Book a free 30-minute consultation. We&apos;ll point you in the right direction.
            </p>
          </div>
          <button
            onClick={() => openConsultation()}
            className="btn-navy w-full sm:w-auto"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p
        className={`eyebrow ${light ? "text-gold-soft" : ""} ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem] text-balance ${
          light ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-pretty ${
            light ? "text-cream/65" : "text-mist"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
