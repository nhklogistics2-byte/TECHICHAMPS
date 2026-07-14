"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp, Calendar, Clock, Tag } from "lucide-react";
import { HeroSection } from "../hero-section";
import { FinalCtaSection } from "../sections/final-cta-section";
import { SectionHeader } from "../sections/services-section";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { useConsultation } from "../consultation-context";

export function WorkPage() {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();

  return (
    <>
      <HeroSection
        eyebrow="Our Work"
        title="Real Results."
        highlight="Measurable Impact."
        description="We don't chase awards — we chase outcomes. Browse our recent engagements across fintech, healthcare, SaaS, retail, and logistics."
        primaryCta={{ label: "Start Your Project" }}
        secondaryCta={{ label: "View Services" }}
        heroImage="/hero-images/work.png"
        laptopHeadline="Building Experiences.\nDelivering Results."
        laptopSubtext="Let's Build Together"
        phoneMetricLabel="Revenue Growth"
        phoneMetricValue="+240%"
        stat1={{ label: "Revenue Growth", value: "250%" }}
        stat2={{ label: "Higher Engagement", value: "70%" }}
        stat3={{ label: "Operational Efficiency", value: "45%" }}
      />

      {/* Case studies full list */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="Case studies"
            title="Engagements That Moved the Needle"
            description="Each project below started with a business problem and ended with measurable results. Click through for the full story."
          />

          <div className="mt-14 space-y-8">
            {CASE_STUDIES.map((c, i) => (
              <motion.article
                key={c.slug}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group grid gap-0 overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_70px_-40px_rgba(26,16,49,0.3)] lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img
                    src={c.image}
                    alt={c.project}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-deep/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cream/80 backdrop-blur">
                    {c.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-mist">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {c.year}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {c.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Tag className="h-3 w-3" /> {c.services[0]}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif-display text-2xl font-semibold text-navy">
                    {c.project}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-mist text-pretty">
                    <span className="font-medium text-navy/80">Challenge:</span>{" "}
                    {c.challenge}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist text-pretty">
                    <span className="font-medium text-navy/80">Approach:</span>{" "}
                    {c.solution}
                  </p>

                  {/* Results */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {c.results.map((r) => (
                      <div
                        key={r.label}
                        className="rounded-xl border border-border/60 bg-cream-soft p-3"
                      >
                        <div className="flex items-center gap-1 text-gold-deep">
                          <TrendingUp className="h-3 w-3" />
                          <span className="font-serif-display text-lg font-semibold">
                            {r.value}
                          </span>
                        </div>
                        <div className="mt-0.5 text-[10px] leading-tight text-mist">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {c.testimonial && (
                    <blockquote className="mt-6 border-l-2 border-gold/40 pl-4 text-sm italic text-mist">
                      &ldquo;{c.testimonial.quote}&rdquo;
                      <footer className="mt-2 text-xs not-italic text-navy/70">
                        — {c.testimonial.name}, {c.testimonial.title}
                      </footer>
                    </blockquote>
                  )}

                  <button
                    onClick={() => openConsultation()}
                    className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-gold-deep"
                  >
                    Discuss a similar project
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
