"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Target, Users, MessagesSquare, Handshake } from "lucide-react";
import { SectionHeader } from "./services-section";
import { useRouter } from "../page-router";
import { useConsultation } from "../consultation-context";
import { useRef } from "react";

const REASONS = [
  {
    icon: Target,
    title: "Business-Focused Strategy",
    desc: "We start from your P&L, not from a moodboard. Every recommendation maps to a measurable outcome — revenue, retention, or operational efficiency.",
  },
  {
    icon: Users,
    title: "Experienced Multidisciplinary Team",
    desc: "Strategists, designers, engineers, and marketers who have shipped for startups and enterprises. No hand-offs to juniors you'll never meet.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent Communication",
    desc: "Weekly demos, shared roadmaps, and clear status on every workstream. You always know what's shipping, what's blocked, and why.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "Most clients stay with us for years. We invest in your roadmap, not just the next invoice — and we treat your goals as our own.",
  },
];

export function WhyUsSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { navigate } = useRouter();
  const { openConsultation } = useConsultation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <section id="about" className="relative bg-cream-soft py-24 md:py-32">
      <div className="container-px grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left — image */}
        <motion.div
          ref={ref}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <motion.img
              style={{ y }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=1400&fit=crop&auto=format&q=75"
              alt="Techi Champs team in a strategy session"
              className="aspect-[5/6] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-6 -right-4 w-[280px] rounded-2xl border border-border/60 bg-card p-5 shadow-[0_30px_60px_-30px_rgba(11,26,46,0.4)] sm:right-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <div className="font-serif-display text-xl font-semibold text-navy">
                  6+ years
                </div>
                <div className="text-xs text-mist">shipping for ambitious teams</div>
              </div>
            </div>
          </motion.div>

          <span className="absolute -left-3 -top-3 select-none font-serif-display text-[6rem] leading-none text-gold/15">
            01
          </span>
        </motion.div>

        {/* Right — content */}
        <div>
          <SectionHeader
            eyebrow="Why Techi Champs"
            title="More Than an Agency. Your Growth Partner."
            description="We pick a small number of partners each quarter so we can do our best work — and stay accountable to outcomes that actually move your business."
            align="left"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border/70 bg-card p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(11,26,46,0.3)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-500 group-hover:bg-gold/12 group-hover:text-gold-deep">
                  <r.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-serif-display text-lg font-semibold text-navy">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist text-pretty">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => navigate({ name: "about" })}
              className="btn-navy"
            >
              Learn more about us
            </button>
            <button
              onClick={() => openConsultation()}
              className="btn-outline-light bg-navy/5 text-navy hover:bg-navy/10"
              style={{ color: "var(--navy)" }}
            >
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
