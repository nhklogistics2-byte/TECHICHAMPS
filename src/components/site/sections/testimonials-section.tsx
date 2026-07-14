"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./services-section";
import { useConsultation } from "../consultation-context";

const TESTIMONIALS = [
  {
    quote:
      "Techi Champs rebuilt our marketing site and onboarding flow in eight weeks. Signups jumped 156% in the first quarter. The team felt like an extension of ours, not a vendor.",
    name: "Sofia Marchetti",
    title: "VP Growth",
    company: "Helio Bank",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Website + Onboarding",
  },
  {
    quote:
      "We'd worked with three agencies before Techi Champs. They were the first to ask about our revenue model before showing a single design. That changed everything.",
    name: "Daniel Osei",
    title: "CEO",
    company: "Veritas Labs",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Growth Site + SEO",
  },
  {
    quote:
      "Our patient app shipped on time, on budget, and our App Store rating went from 3.4 to 4.8 in three months. The calm, trustworthy feel they designed is exactly what we needed.",
    name: "Dr. Amara Patel",
    title: "Chief Medical Officer",
    company: "Lumen Health",
    avatar:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=160&h=160&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Mobile App + Admin",
  },
  {
    quote:
      "Their AI automation saved our support team 184 hours in the first month alone. Practical, not flashy — exactly what we needed.",
    name: "Markus Lindqvist",
    title: "COO",
    company: "Orbit Logistics",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "AI Support Automation",
  },
  {
    quote:
      "We came for a logo. We left with a brand strategy that realigned our entire go-to-market. Worth every cent.",
    name: "Yuki Tanaka",
    title: "Founder",
    company: "Atelier Nine",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces&auto=format&q=70",
    rating: 5,
    project: "Brand Strategy",
  },
];

export function TestimonialsSection() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { openConsultation } = useConsultation();

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next, paused, reduce]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const current = TESTIMONIALS[index];

  return (
    <section
      id="reviews"
      className="relative bg-cream py-24 md:py-32"
      aria-label="Client testimonials"
    >
      <div className="container-px">
        <SectionHeader
          eyebrow="Client reviews"
          title="What Our Partners Say"
          description="Real words from real clients — verified across engagements over the past two years."
        />

        <div
          className="relative mx-auto mt-14 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-[0_30px_70px_-40px_rgba(26,16,49,0.3)] sm:p-12">
            <span className="pointer-events-none absolute right-6 top-2 select-none font-serif-display text-[8rem] leading-none text-gold/15">
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
                  ))}
                </div>

                <blockquote className="mt-5 font-serif-display text-xl leading-relaxed text-navy sm:text-2xl text-balance">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/30"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-navy">{current.name}</span>
                        <BadgeCheck className="h-4 w-4 text-gold" aria-label="Verified project" />
                      </div>
                      <div className="text-xs text-mist">
                        {current.title}, {current.company}
                      </div>
                    </div>
                  </div>
                  <div className="hidden text-right sm:block">
                    <div className="text-[10px] uppercase tracking-wide text-mist/70">
                      Verified project
                    </div>
                    <div className="text-xs font-medium text-navy">
                      {current.project}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-7 bg-gold" : "w-1.5 bg-border hover:bg-gold/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-navy transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-gold-deep focus-premium"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-navy transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-gold-deep focus-premium"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => openConsultation()}
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-gold-deep focus-premium"
            >
              Become our next success story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
