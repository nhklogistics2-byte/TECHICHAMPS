"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./services";
import { useConsultation } from "./consultation-context";
import { ArrowRight } from "lucide-react";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most engagements run between 6 and 12 weeks. A focused landing page or brand refresh can ship in 3–4 weeks, while a full website rebuild or mobile app typically takes 8–12 weeks. We share a week-by-week roadmap during the discovery call so you know what to expect before kickoff.",
  },
  {
    q: "Do you work with startups or only established companies?",
    a: "Both. We work with funded startups preparing to scale, and with established companies modernizing their digital presence. What matters to us is that the engagement has clear business outcomes — revenue, retention, or operational efficiency. If you're pre-revenue with no clear monetization plan, we'll help you figure that out under Strategy & Consulting first.",
  },
  {
    q: "What's your pricing model?",
    a: "We scope fixed-price projects with clear milestones and deliverables, so you know the total cost before kickoff. For longer partnerships (marketing, AI automation, ongoing optimization) we use monthly retainers. Most engagements start at $8K; strategy-only engagements start at $3K. Exact pricing is shared after a discovery call.",
  },
  {
    q: "Do you handle ongoing maintenance and growth?",
    a: "Yes. Most of our clients stay with us for years after launch. We offer monthly retainers covering performance monitoring, conversion optimization, content production, and feature development. You're never locked in — retainers are month-to-month with a 30-day notice.",
  },
  {
    q: "Who actually does the work?",
    a: "Senior strategists, designers, and engineers — not juniors you'll never meet. Every project has a dedicated lead who is your point of contact and is accountable for outcomes. We're deliberately small so we can stay hands-on with every engagement.",
  },
  {
    q: "What happens after we launch?",
    a: "Launch is the start, not the finish line. In the first 30 days we monitor performance against the metrics we set in Discover, fix any post-launch issues at no extra cost, and review analytics together. Then we move into Optimize mode — iterative improvements toward compounding gains.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Absolutely. Many of our best engagements are partnerships with in-house teams — we bring specialist depth in design, engineering, or marketing where you need it, and we hand off cleanly where your team takes over. We use shared roadmaps, code repos, and design files so the work is yours from day one.",
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute consultation. We'll talk through your goals, current state, and what success looks like. If we're a fit, we'll send a tailored proposal within 3 business days. No pressure, no obligation — and everything we discuss is strictly confidential.",
  },
];

export function FAQ() {
  const { openConsultation } = useConsultation();
  return (
    <section id="faq" className="relative bg-cream-soft py-24 md:py-32">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Frequently asked"
              title="Answers to Common Questions"
              description="Everything you might want to know before booking a call. Still have a question? Just ask us directly — we reply within one business day."
              align="left"
            />
            <div className="mt-7 rounded-2xl border border-border/70 bg-card p-6">
              <p className="font-serif-display text-lg font-semibold text-navy">
                Still have questions?
              </p>
              <p className="mt-1.5 text-sm text-mist">
                Book a free 30-minute consultation. We&apos;ll answer everything
                and tell you honestly if we&apos;re the right fit.
              </p>
              <button
                onClick={() => openConsultation()}
                className="btn-navy mt-5 w-full sm:w-auto"
              >
                Book a free call
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right accordions */}
          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="flex flex-col gap-3"
            >
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
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
      </div>
    </section>
  );
}
