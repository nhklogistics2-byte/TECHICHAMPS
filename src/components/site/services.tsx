"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Palette,
  Globe,
  Smartphone,
  Megaphone,
  Bot,
  Compass,
  ArrowRight,
} from "lucide-react";
import { useConsultation } from "./consultation-context";

const SERVICES = [
  {
    icon: Palette,
    title: "Logo Design & Branding",
    desc: "Identity systems, visual language, and brand guidelines that earn trust and stay consistent across every touchpoint.",
    deliverables: ["Logo & wordmark", "Brand guidelines", "Visual system"],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Conversion-focused websites engineered on modern stacks — fast, accessible, and built to scale with your business.",
    deliverables: ["Strategy + UX", "Design system", "Headless build"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-grade iOS and Android applications designed to retain users and integrate cleanly with your stack.",
    deliverables: ["Product UX", "Cross-platform", "App Store launch"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, paid media, and content built as compounding channels — measured against revenue, not vanity metrics.",
    deliverables: ["SEO & content", "Paid acquisition", "Lifecycle CRM"],
  },
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    desc: "Practical AI automations that cut cost-to-serve, surface insights, and free your team to do higher-leverage work.",
    deliverables: ["Workflow audit", "AI integrations", "Internal tools"],
  },
  {
    icon: Compass,
    title: "Brand Strategy & Consulting",
    desc: "Positioning, narrative, and roadmap work that aligns your team and clarifies what to build, in what order.",
    deliverables: ["Positioning", "Go-to-market", "Roadmap"],
  },
];

export function Services() {
  const reduce = useReducedMotion();
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
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ServiceCard {...s} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  deliverables,
  index,
}: {
  icon: typeof Palette;
  title: string;
  desc: string;
  deliverables: string[];
  index: number;
}) {
  const { openConsultation } = useConsultation();
  return (
    <article
      className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(11,26,46,0.25)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Gold accent border reveal */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-500 group-hover:bg-gold/12 group-hover:text-gold-deep">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <span className="font-serif-display text-3xl font-semibold text-navy/[0.06] transition-colors duration-500 group-hover:text-gold/30">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-5 font-serif-display text-xl font-semibold text-navy">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-mist text-pretty">
        {desc}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {deliverables.map((d) => (
          <li
            key={d}
            className="rounded-full border border-border/80 bg-cream-soft px-2.5 py-0.5 text-[11px] font-medium text-mist"
          >
            {d}
          </li>
        ))}
      </ul>

      <button
        onClick={() => openConsultation({ service: title })}
        className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-gold-deep focus-premium"
      >
        Learn More
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </article>
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
