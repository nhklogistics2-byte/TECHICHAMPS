"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { HeroSection } from "../hero-section";
import { FaqSection } from "../sections/faq-section";
import { FinalCtaSection } from "../sections/final-cta-section";
import { SectionHeader } from "../sections/services-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useConsultation } from "../consultation-context";

const ADDITIONAL_FAQS = [
  {
    category: "Pricing & Contracts",
    items: [
      {
        q: "Do you offer payment plans?",
        a: "Yes. Most projects are split into milestones — typically 30% kickoff, 30% at design sign-off, 30% at launch, and 10% at 30-day post-launch review. For larger engagements we can structure monthly payments. Talk to us if you need a different arrangement.",
      },
      {
        q: "What happens if we need to pause or cancel?",
        a: "You can pause any retainer with 30 days notice. For fixed-price projects, you pay for work completed up to the cancellation point and own any deliverables created. We don't lock you in — we want you to stay because the work is working, not because of a contract.",
      },
      {
        q: "Do you offer discounts for startups?",
        a: "We offer reduced rates for pre-seed and seed-stage startups in exchange for case-study rights. We take on 2–3 startup partners per quarter at reduced rates. Mention it during your consultation if you'd like to be considered.",
      },
    ],
  },
  {
    category: "Working Together",
    items: [
      {
        q: "What tools do you use for project management?",
        a: "We use Linear for engineering tasks, Figma for design, Notion for documentation, and Slack for daily communication. You get access to all of these so you always have visibility into what's happening. We adapt to your tools where possible.",
      },
      {
        q: "How often will we meet?",
        a: "Most engagements include a weekly 30-minute demo/review, a bi-weekly strategic check-in, and async updates via Slack. For retainers, we add a monthly strategic review. We're not the kind of agency that goes dark for weeks between updates.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, happily. We can sign your NDA or provide our standard mutual NDA. We treat all client information as confidential by default — your data, your roadmap, and your business are yours alone.",
      },
      {
        q: "Can you work in our timezone?",
        a: "We're based in San Francisco but have team members across UTC-8 to UTC+5. We overlap with most timezones for at least 3 hours of real-time collaboration per day. For APAC clients, we structure our week to ensure good overlap.",
      },
    ],
  },
  {
    category: "Technical & Security",
    items: [
      {
        q: "Do you handle GDPR and data privacy compliance?",
        a: "Yes. All our builds include GDPR-compliant cookie banners, privacy policy templates, data export/delete functionality, and proper consent management. For healthcare (HIPAA) or fintech (SOC 2) engagements, we follow industry-specific compliance frameworks.",
      },
      {
        q: "Who owns the code and IP?",
        a: "You do — completely. On final payment, all source code, design files, and intellectual property transfer to you. We don't hold your code hostage or charge licensing fees. The work is yours.",
      },
      {
        q: "What's your tech stack?",
        a: "We default to Next.js + TypeScript + Tailwind for frontend, Node.js or serverless for backend, Postgres for database, and Vercel/AWS for hosting. For mobile, React Native or native Swift/Kotlin. We can work with your existing stack too — we're not dogmatic.",
      },
      {
        q: "Do you provide source code access during development?",
        a: "Yes. You get access to the Git repo from day one. You can review commits, run the code locally, and even have your own engineers contribute. We believe in radical transparency.",
      },
    ],
  },
];

export function FaqPage() {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();

  return (
    <>
      <HeroSection
        eyebrow="FAQ"
        title="Answers to Your"
        highlight="Common Questions"
        description="Everything you might want to know before booking a call. Still have a question? Just ask us directly — we reply within one business day."
        primaryCta={{ label: "Ask Your Question" }}
        secondaryCta={{ label: "View Services" }}
        laptopHeadline="Building Experiences.\nDelivering Results."
        laptopSubtext="Let's Build Together"
        phoneMetricLabel="Revenue Growth"
        phoneMetricValue="+240%"
        stat1={{ label: "Revenue Growth", value: "250%" }}
        stat2={{ label: "Higher Engagement", value: "70%" }}
        stat3={{ label: "Operational Efficiency", value: "45%" }}
      />

      <FaqSection />

      {/* Additional categorized FAQs */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="More questions"
            title="Deeper Dive by Category"
            description="Organized by topic so you can find what you're looking for faster."
          />

          <div className="mx-auto mt-14 max-w-4xl space-y-12">
            {ADDITIONAL_FAQS.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: catIdx * 0.05 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/12 text-gold-deep">
                    <MessageCircleQuestion className="h-4 w-4" />
                  </span>
                  <h3 className="font-serif-display text-xl font-semibold text-navy">
                    {cat.category}
                  </h3>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="mt-4 flex flex-col gap-3"
                >
                  {cat.items.map((item, i) => (
                    <AccordionItem
                      key={item.q}
                      value={`add-faq-${catIdx}-${i}`}
                      className="overflow-hidden rounded-2xl border border-border/70 bg-card px-5 transition-colors data-[state=open]:border-gold/40 data-[state=open]:bg-cream-soft"
                    >
                      <AccordionTrigger className="py-4 text-left text-sm font-medium text-navy hover:no-underline sm:text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-sm leading-relaxed text-mist text-pretty">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-14 max-w-2xl rounded-3xl bg-navy p-8 text-center sm:p-10">
            <h3 className="font-serif-display text-2xl font-semibold text-cream">
              Didn&apos;t find your answer?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream/65">
              Book a free 30-minute consultation. We&apos;ll answer your specific
              questions in person — no obligation.
            </p>
            <button onClick={() => openConsultation()} className="btn-gold mx-auto mt-6">
              Ask Your Question
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
