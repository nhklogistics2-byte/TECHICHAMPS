"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, BadgeCheck, Quote, ArrowRight } from "lucide-react";
import { HeroSection } from "../hero-section";
import { FinalCtaSection } from "../sections/final-cta-section";
import { SectionHeader } from "../sections/services-section";
import { useConsultation } from "../consultation-context";

const TESTIMONIALS = [
  {
    quote:
      "Techi Champs rebuilt our marketing site and onboarding flow in eight weeks. Signups jumped 156% in the first quarter. The team felt like an extension of ours, not a vendor.",
    name: "Sofia Marchetti",
    title: "VP Growth",
    company: "Helio Bank",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Website + Onboarding",
    industry: "Fintech",
  },
  {
    quote:
      "We'd worked with three agencies before Techi Champs. They were the first to ask about our revenue model before showing a single design. That changed everything.",
    name: "Daniel Osei",
    title: "CEO",
    company: "Veritas Labs",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Growth Site + SEO",
    industry: "SaaS",
  },
  {
    quote:
      "Our patient app shipped on time, on budget, and our App Store rating went from 3.4 to 4.8 in three months. The calm, trustworthy feel they designed is exactly what we needed.",
    name: "Dr. Amara Patel",
    title: "Chief Medical Officer",
    company: "Lumen Health",
    avatar:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Mobile App + Admin",
    industry: "Healthcare",
  },
  {
    quote:
      "Their AI automation saved our support team 184 hours in the first month alone. Practical, not flashy — exactly what we needed.",
    name: "Markus Lindqvist",
    title: "COO",
    company: "Orbit Logistics",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "AI Support Automation",
    industry: "Logistics",
  },
  {
    quote:
      "We came for a logo. We left with a brand strategy that realigned our entire go-to-market. Worth every cent.",
    name: "Yuki Tanaka",
    title: "Founder",
    company: "Atelier Nine",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Brand Strategy",
    industry: "Design",
  },
  {
    quote:
      "The new e-commerce site converts at 3.8% — up from 1.2%. The ROI was clear within the first month of launch.",
    name: "Carla Mendes",
    title: "E-commerce Director",
    company: "Sable Retail",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "E-commerce Rebuild",
    industry: "Retail",
  },
  {
    quote:
      "They delivered a complex analytics dashboard that our team actually uses every day. The UX work was exceptional.",
    name: "Rajiv Kapoor",
    title: "Head of Product",
    company: "Polar Foundry",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Product Design + Build",
    industry: "SaaS",
  },
  {
    quote:
      "Working with Techi Champs felt like having a senior in-house team without the overhead. They just got it.",
    name: "Lena Bergstrom",
    title: "CMO",
    company: "Coral & Co.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Brand + Website",
    industry: "Consumer",
  },
];

export function ReviewsPage() {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();

  return (
    <>
      <HeroSection
        eyebrow="Client Reviews"
        title="What Our Partners"
        highlight="Say About Us"
        description="Real words from real clients — verified across 200+ engagements over the past six years. We let the results speak."
        primaryCta={{ label: "Become Our Next Success Story" }}
        secondaryCta={{ label: "View Our Work" }}
        heroVariant="reviews"
        laptopHeadline="200+ Happy\nClients & Counting."
        laptopSubtext="Read Reviews"
        phoneMetricLabel="Avg. Rating"
        phoneMetricValue="4.9/5"
        stat1={{ label: "Rating", value: "4.9★" }}
        stat2={{ label: "Reviews", value: "200+" }}
        stat3={{ label: "Repeat", value: "94%" }}
      />

      {/* Stats bar */}
      <section className="bg-navy py-12">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { value: "4.9", label: "Average Rating" },
              { value: "200+", label: "Verified Reviews" },
              { value: "94%", label: "Client Retention" },
              { value: "3.6x", label: "Average ROI" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif-display text-3xl font-semibold text-gold sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-cream/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="Verified reviews"
            title="Words From the People We Serve"
            description="Each review below is from a verified engagement — we only publish reviews from clients we've actually shipped work for."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={t.name}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(11,26,46,0.25)]"
              >
                <Quote className="absolute right-4 top-4 h-8 w-8 text-gold/15" />

                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/85 text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/30"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-navy">{t.name}</span>
                      <BadgeCheck className="h-3.5 w-3.5 text-gold" />
                    </div>
                    <div className="text-xs text-mist">
                      {t.title}, {t.company}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wide text-mist/70">
                  <span>{t.industry}</span>
                  <span>{t.project}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-navy p-8 text-center sm:p-10">
            <h3 className="font-serif-display text-2xl font-semibold text-cream">
              Want to be our next success story?
            </h3>
            <p className="max-w-md text-sm text-cream/65">
              Book a free consultation. If we&apos;re a fit, you&apos;ll be writing
              the next review on this page.
            </p>
            <button onClick={() => openConsultation()} className="btn-gold">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
