"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, TrendingUp, Sparkles, ChevronRight } from "lucide-react";
import { HeroSection } from "../hero-section";
import { FinalCtaSection } from "../sections/final-cta-section";
import { SectionHeader } from "../sections/services-section";
import { useConsultation } from "../consultation-context";
import { useRouter } from "../page-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceData } from "@/lib/services-data";

export function ServiceDetailPage({ service }: { service: ServiceData }) {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();
  const { navigate } = useRouter();
  const Icon = service.icon;

  // Per-service hero customization
  const heroContent = getServiceHeroContent(service.slug);

  return (
    <>
      <HeroSection
        eyebrow={service.heroLabel}
        title={splitTitle(service.heroHeadline).title}
        highlight={splitTitle(service.heroHeadline).highlight}
        description={service.heroDescription}
        primaryCta={{ label: "Book a Free Consultation" }}
        secondaryCta={{ label: "View Our Work" }}
        laptopHeadline={heroContent.laptopHeadline}
        laptopSubtext={heroContent.laptopSubtext}
        phoneMetricLabel={heroContent.phoneMetricLabel}
        phoneMetricValue={heroContent.phoneMetricValue}
        stat1={heroContent.stat1}
        stat2={heroContent.stat2}
        stat3={heroContent.stat3}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border/60 bg-cream-soft py-4">
        <div className="container-px flex items-center gap-2 text-xs text-mist">
          <button onClick={() => navigate({ name: "home" })} className="hover:text-navy">
            Home
          </button>
          <ChevronRight className="h-3 w-3" />
          <button onClick={() => navigate({ name: "home" })} className="hover:text-navy">
            Services
          </button>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-navy">{service.shortTitle}</span>
        </div>
      </div>

      {/* Overview section */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <p className="eyebrow">{service.heroLabel}</p>
              </div>
              <h2 className="mt-5 font-serif-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-mist text-pretty">
                {service.overview}
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist text-pretty">
                {service.tagline}
              </p>

              <button
                onClick={() => openConsultation({ service: service.title })}
                className="btn-navy mt-8"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={service.overviewImage}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
              </div>

              {/* Outcomes overlay */}
              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-border/60 bg-card p-4 shadow-xl sm:left-6 sm:right-6">
                <div className="grid grid-cols-3 gap-2">
                  {service.outcomes.map((o) => (
                    <div key={o.label} className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gold-deep">
                        <TrendingUp className="h-3 w-3" />
                        <span className="font-serif-display text-lg font-semibold">
                          {o.value}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[10px] leading-tight text-mist">
                        {o.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-cream-soft py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="What's included"
            title="Deliverables You Can Expect"
            description="Every engagement is scoped to your specific needs, but here's what's typically included when you work with us on this service."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(26,16,49,0.25)]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/12 text-gold-deep">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <h3 className="font-serif-display text-base font-semibold text-navy">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist text-pretty">
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="How we'll work"
            title="Our Process for This Service"
            description={`A typical ${service.shortTitle.toLowerCase()} engagement follows these stages. Timelines vary based on scope.`}
          />

          <div className="mx-auto mt-14 max-w-4xl">
            <div className="space-y-4">
              {service.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group flex items-start gap-5 rounded-2xl border border-border/70 bg-card p-5 transition-all duration-500 hover:border-gold/40 sm:p-6"
                >
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/[0.04] font-serif-display text-sm font-semibold text-navy transition-colors duration-500 group-hover:bg-gold/12 group-hover:text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < service.process.length - 1 && (
                      <span className="mt-2 h-8 w-px bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="font-serif-display text-lg font-semibold text-navy">
                      {p.step}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist text-pretty">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-cream-soft py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow={`FAQ — ${service.shortTitle}`}
            title="Questions About This Service"
            description="Common questions clients ask before starting this type of engagement."
          />

          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion
              type="single"
              collapsible
              defaultValue="svc-faq-0"
              className="flex flex-col gap-3"
            >
              {service.faqs.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`svc-faq-${i}`}
                  className="overflow-hidden rounded-2xl border border-border/70 bg-card px-5 transition-colors data-[state=open]:border-gold/40 data-[state=open]:bg-cream"
                >
                  <AccordionTrigger className="py-5 text-left font-serif-display text-base font-semibold text-navy hover:no-underline sm:text-lg">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-mist text-pretty">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="Related services"
            title="Services That Pair Well"
            description="Most clients combine this with one or more of the services below for a more complete engagement."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.relatedSlugs.map((slug, i) => {
              const related = getServiceBySlugLocal(slug);
              if (!related) return null;
              const RelIcon = related.icon;
              return (
                <motion.button
                  key={slug}
                  onClick={() => navigate({ name: "service", slug })}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="group rounded-2xl border border-border/70 bg-card p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(26,16,49,0.25)] focus-premium"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-500 group-hover:bg-gold/12 group-hover:text-gold-deep">
                    <RelIcon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-serif-display text-lg font-semibold text-navy">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-mist">{related.tagline}</p>
                  <span className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:text-gold-deep">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}

// Helper to split headline into title + highlight (last 2-3 words highlighted)
function splitTitle(headline: string): { title: string; highlight?: string } {
  // If headline contains a period, split on the last period
  const parts = headline.split(". ");
  if (parts.length >= 2) {
    return {
      title: parts.slice(0, -1).join(". ") + ".",
      highlight: parts[parts.length - 1],
    };
  }
  // Otherwise split on last space group
  const words = headline.split(" ");
  if (words.length > 4) {
    const highlightWords = words.slice(-3).join(" ");
    const titleWords = words.slice(0, -3).join(" ");
    return { title: titleWords, highlight: highlightWords };
  }
  return { title: headline };
}

// Per-service hero — all use the same reference laptop content
function getServiceHeroContent(_slug: string) {
  return {
    laptopHeadline: "Building Experiences.\nDelivering Results.",
    laptopSubtext: "Let's Build Together",
    phoneMetricLabel: "Revenue Growth",
    phoneMetricValue: "+240%",
    stat1: { label: "Revenue Growth", value: "250%" },
    stat2: { label: "Higher Engagement", value: "70%" },
    stat3: { label: "Operational Efficiency", value: "45%" },
  };
}

// Local import to avoid circular dependency issues
import { SERVICES } from "@/lib/services-data";
function getServiceBySlugLocal(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
