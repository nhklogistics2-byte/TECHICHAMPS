"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Compass, PenTool, Code, Rocket, LineChart, ArrowRight } from "lucide-react";
import { HeroSection } from "../hero-section";
import { ProcessSection } from "../sections/process-section";
import { FinalCtaSection } from "../sections/final-cta-section";
import { SectionHeader } from "../sections/services-section";
import { useConsultation } from "../consultation-context";

const DETAILED_STEPS = [
  {
    icon: Search,
    title: "Discover",
    duration: "Week 1",
    desc: "We dig into your goals, audience, and current state — then define the few metrics that will tell us if we're winning.",
    activities: [
      "Stakeholder interviews & workshop",
      "Analytics & current-state audit",
      "Competitive landscape review",
      "Conversion goal definition",
      "Success metrics & KPIs agreed",
    ],
    deliverable: "Discovery brief & success metrics document",
  },
  {
    icon: Compass,
    title: "Strategize",
    duration: "Week 2",
    desc: "Positioning, scope, and sequencing. A clear roadmap so you know exactly what we're building and why, in what order.",
    activities: [
      "Positioning & narrative refinement",
      "Scope & feature prioritization",
      "Technical architecture decisions",
      "Resource & timeline planning",
      "Risk identification & mitigation",
    ],
    deliverable: "Project roadmap & technical spec",
  },
  {
    icon: PenTool,
    title: "Design",
    duration: "Weeks 3–5",
    desc: "Brand, UX, and visual system — reviewed weekly with you, not delivered as a Friday-afternoon surprise.",
    activities: [
      "Information architecture & sitemap",
      "Wireframes & user flows",
      "High-fidelity design in Figma",
      "Design system & component library",
      "Weekly design reviews with your team",
    ],
    deliverable: "Figma design files & reusable design system",
  },
  {
    icon: Code,
    title: "Develop",
    duration: "Weeks 5–10",
    desc: "Modern, accessible, and fast. Tested continuously, with staging previews you can click through any time.",
    activities: [
      "Next.js + TypeScript development",
      "Headless CMS integration",
      "Component library implementation",
      "Continuous staging deployments",
      "Weekly demo & feedback cycles",
    ],
    deliverable: "Working staging site with full functionality",
  },
  {
    icon: Rocket,
    title: "Launch",
    duration: "Week 11",
    desc: "QA, performance, analytics, and a clean cutover. No surprises on day one — only a smooth handoff and live monitoring.",
    activities: [
      "Cross-device QA & bug fixes",
      "Performance & accessibility audit",
      "Analytics & tracking instrumentation",
      "DNS cutover & go-live",
      "Launch-day monitoring & support",
    ],
    deliverable: "Live site + launch report",
  },
  {
    icon: LineChart,
    title: "Optimize",
    duration: "Ongoing",
    desc: "Post-launch we measure against the metrics we set in Discover, and iterate toward compounding gains.",
    activities: [
      "30-day post-launch monitoring",
      "Analytics review & insights",
      "A/B testing program",
      "Conversion rate optimization",
      "Monthly roadmap & roadmap adjustment",
    ],
    deliverable: "Monthly performance report & iteration plan",
  },
];

export function ProcessPage() {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();

  return (
    <>
      <HeroSection
        eyebrow="How We Work"
        title="A Clear Process,"
        highlight="End to End"
        description="Six stages, reviewed every week. You always know what's happening, what's next, and what's blocked — no black boxes, no surprises."
        primaryCta={{ label: "Book a Free Consultation" }}
        secondaryCta={{ label: "View Our Work" }}
        heroImage="/hero-images/process.png"
        laptopHeadline="Building Experiences.\nDelivering Results."
        laptopSubtext="Let's Build Together"
        phoneMetricLabel="Revenue Growth"
        phoneMetricValue="+240%"
        stat1={{ label: "Revenue Growth", value: "250%" }}
        stat2={{ label: "Higher Engagement", value: "70%" }}
        stat3={{ label: "Operational Efficiency", value: "45%" }}
      />

      <ProcessSection />

      {/* Detailed process breakdown */}
      <section className="bg-cream-soft py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="In detail"
            title="What Happens at Each Stage"
            description="A week-by-week breakdown of activities, deliverables, and what you can expect at every step."
          />

          <div className="mx-auto mt-14 max-w-4xl space-y-6">
            {DETAILED_STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group grid gap-6 rounded-3xl border border-border/70 bg-card p-6 transition-all duration-500 hover:border-gold/40 sm:p-8 lg:grid-cols-[auto_1fr_1.2fr]"
              >
                {/* Step number + icon */}
                <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/[0.04] text-navy transition-colors duration-500 group-hover:bg-gold/12 group-hover:text-gold-deep">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <span className="font-serif-display text-3xl font-semibold text-navy/[0.08] transition-colors duration-500 group-hover:text-gold/30">
                    0{i + 1}
                  </span>
                </div>

                {/* Title + desc */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif-display text-xl font-semibold text-navy">
                      {s.title}
                    </h3>
                    <span className="rounded-full bg-gold/12 px-2.5 py-0.5 text-[11px] font-medium text-gold-deep">
                      {s.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist text-pretty">
                    {s.desc}
                  </p>
                  <div className="mt-4 rounded-lg border border-border/60 bg-cream-soft px-3 py-2">
                    <span className="text-[10px] uppercase tracking-wide text-mist">
                      Deliverable
                    </span>
                    <p className="text-xs font-medium text-navy">{s.deliverable}</p>
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-mist">
                    Key activities
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {s.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-navy/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-14 max-w-2xl rounded-3xl bg-navy p-8 text-center sm:p-10">
            <h3 className="font-serif-display text-2xl font-semibold text-cream">
              Ready to start?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream/65">
              Book a free consultation. We&apos;ll walk you through how this process
              would apply to your specific project.
            </p>
            <button
              onClick={() => openConsultation()}
              className="btn-gold mx-auto mt-6"
            >
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
