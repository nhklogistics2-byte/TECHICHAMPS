"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SectionHeader } from "./services";

const CASES = [
  {
    industry: "E-commerce",
    project: "Helio Bank — Digital Onboarding",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=700&fit=crop&auto=format&q=70",
    challenge:
      "A fast-growing neobank needed a frictionless onboarding flow that would convert more applicants without compromising compliance.",
    solution:
      "Redesigned the funnel end-to-end, shipped a mobile-first web app, and layered AI-assisted document review to cut manual ops.",
    results: [
      { value: "+156%", label: "User Signups" },
      { value: "−42%", label: "Drop-off Rate" },
      { value: "3.6x", label: "Return on Investment" },
    ],
  },
  {
    industry: "SaaS",
    project: "Veritas Labs — Growth Site",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop&auto=format&q=70",
    challenge:
      "A Series B analytics platform struggled to translate traffic into demo requests and qualified pipeline.",
    solution:
      "Rebuilt the marketing site around a clear narrative, introduced content-led SEO, and connected lifecycle CRM automation.",
    results: [
      { value: "+82%", label: "Organic Traffic" },
      { value: "+64%", label: "Demo Requests" },
      { value: "−31%", label: "Cost per Lead" },
    ],
  },
  {
    industry: "Healthcare",
    project: "Lumen Health — Patient App",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=700&fit=crop&auto=format&q=70",
    challenge:
      "A telehealth provider needed a mobile app that felt calm and trustworthy while handling scheduling, records, and prescriptions.",
    solution:
      "Designed and shipped an iOS + Android app with a clinician-friendly admin console and automated patient follow-ups.",
    results: [
      { value: "4.8★", label: "App Store Rating" },
      { value: "+220%", label: "Weekly Active Patients" },
      { value: "−58%", label: "No-show Rate" },
    ],
  },
];

export function CaseStudies() {
  const reduce = useReducedMotion();
  return (
    <section id="work" className="relative bg-navy py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-gold/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-accent/8 blur-[120px]" />
      </div>

      <div className="container-px relative">
        <SectionHeader
          eyebrow="Selected work"
          title="Real Results. Measurable Impact."
          description="We don't chase awards. We chase outcomes. A few recent engagements where strategy, design, and engineering came together."
          light
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <motion.article
              key={c.project}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-soft/60 transition-all duration-500 hover:border-gold/30 hover:bg-navy-soft"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.project}
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-soft via-navy-soft/40 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-deep/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cream/80 backdrop-blur">
                  {c.industry}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif-display text-xl font-semibold text-cream">
                  {c.project}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  <span className="font-medium text-cream/80">Challenge:</span>{" "}
                  {c.challenge}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">
                  <span className="font-medium text-cream/80">Approach:</span>{" "}
                  {c.solution}
                </p>

                {/* Results */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                  {c.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-lg bg-white/[0.03] p-2.5 transition-all duration-500 group-hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-1 text-gold">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-sm font-semibold">{r.value}</span>
                      </div>
                      <div className="mt-0.5 text-[10px] leading-tight text-cream/55">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cream/90 transition-colors hover:text-gold focus-premium"
                >
                  View Case Study
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
