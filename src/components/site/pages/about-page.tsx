"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, Heart, Shield, Zap, Award, Users, ArrowRight } from "lucide-react";
import { HeroSection } from "../hero-section";
import { FinalCtaSection } from "../sections/final-cta-section";
import { SectionHeader } from "../sections/services-section";
import { useConsultation } from "../consultation-context";

const VALUES = [
  {
    icon: Target,
    title: "Outcomes Over Output",
    desc: "We measure success by your business results, not by hours billed or features shipped. If it doesn't move your metrics, we question whether we should be doing it.",
  },
  {
    icon: Heart,
    title: "Care That Shows",
    desc: "We treat your project like our own — because most of our growth comes from referrals. Your success is our marketing strategy.",
  },
  {
    icon: Shield,
    title: "Honesty First",
    desc: "We'll tell you when an idea won't work, when a timeline is unrealistic, or when you don't need the thing you asked for. Polite, but honest.",
  },
  {
    icon: Zap,
    title: "Bias for Action",
    desc: "Strategy without execution is theater. We ship fast, learn from real users, and iterate. Perfect is the enemy of shipped.",
  },
];

const STATS = [
  { value: "6", suffix: "+", label: "Years in Business" },
  { value: "320", suffix: "+", label: "Projects Delivered" },
  { value: "200", suffix: "+", label: "Happy Clients" },
  { value: "25", suffix: "+", label: "Industries Served" },
];

const TEAM = [
  {
    name: "Arjun Mehta",
    role: "Founder & Lead Strategist",
    bio: "10+ years helping startups and enterprises grow. Ex-product lead at two unicorns.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&auto=format&q=70",
  },
  {
    name: "Elena Rossi",
    role: "Design Director",
    bio: "Brand and product designer who's shipped for fintech, healthcare, and SaaS.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces&auto=format&q=70",
  },
  {
    name: "Marcus Chen",
    role: "Engineering Lead",
    bio: "Full-stack engineer specializing in Next.js, headless CMS, and AI integrations.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces&auto=format&q=70",
  },
  {
    name: "Priya Sharma",
    role: "Growth & Marketing Lead",
    bio: "Performance marketer who's managed $20M+ in ad spend across SaaS and e-commerce.",
    avatar:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=300&h=300&fit=crop&crop=faces&auto=format&q=70",
  },
];

export function AboutPage() {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();

  return (
    <>
      <HeroSection
        eyebrow="About Techi Champs"
        title="More Than an Agency."
        highlight="Your Growth Partner."
        description="We're a small, senior team of strategists, designers, engineers, and marketers who pick a handful of partners each quarter — so we can do our best work and stay accountable to outcomes."
        primaryCta={{ label: "Work With Us" }}
        secondaryCta={{ label: "Meet the Team" }}
        laptopHeadline="Building Experiences.\nDelivering Results."
        laptopSubtext="Let's Build Together"
        phoneMetricLabel="Revenue Growth"
        phoneMetricValue="+240%"
        stat1={{ label: "Revenue Growth", value: "250%" }}
        stat2={{ label: "Higher Engagement", value: "70%" }}
        stat3={{ label: "Operational Efficiency", value: "45%" }}
      />

      {/* Story section */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Our story"
                title="Started With One Belief: Outcomes Beat Output"
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-mist text-pretty">
                <p>
                  Techi Champs started in 2019 when our founder, Arjun, grew frustrated
                  watching businesses pour money into agencies that optimized for
                  deliverables — not results. Pretty websites that didn&apos;t convert.
                  Brand refreshes that didn&apos;t move pipeline. Apps that launched
                  late and broke in production.
                </p>
                <p>
                  He assembled a small team of senior practitioners — people who&apos;d
                  shipped real products at real companies — and built Techi Champs
                  around a simple promise: we measure our success by your business
                  outcomes, not our invoice.
                </p>
                <p>
                  Six years later, we&apos;re still small by design. We take on a limited
                  number of partners each quarter so we can stay hands-on with every
                  engagement. No junior hand-offs. No account managers who&apos;ve never
                  built anything. Just senior practitioners who care about your results.
                </p>
              </div>
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&h=1200&fit=crop&auto=format&q=75"
                  alt="Techi Champs team collaborating"
                  className="aspect-[5/6] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-border/60 bg-card p-5 shadow-xl sm:right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-serif-display text-xl font-semibold text-navy">
                      Since 2019
                    </div>
                    <div className="text-xs text-mist">shipping outcomes, not output</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-serif-display text-4xl font-semibold text-cream sm:text-5xl">
                  {s.value}
                  <span className="text-gold">{s.suffix}</span>
                </div>
                <div className="mt-2 text-sm text-cream/55">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-soft py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="What we stand for"
            title="Values That Shape Every Engagement"
            description="These aren&apos;t posters on a wall. They&apos;re the principles we use to make decisions when no one&apos;s watching."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(26,16,49,0.3)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-500 group-hover:bg-gold/12 group-hover:text-gold-deep">
                  <v.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-serif-display text-lg font-semibold text-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist text-pretty">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <SectionHeader
            eyebrow="The team"
            title="Senior People You Actually Work With"
            description="No account managers. No junior hand-offs. The people below are the ones who do the work."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group text-center"
              >
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
                </div>
                <h3 className="mt-4 font-serif-display text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gold-deep">{member.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-mist text-pretty">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-navy p-8 text-center sm:p-10">
            <Users className="h-8 w-8 text-gold" />
            <h3 className="font-serif-display text-2xl font-semibold text-cream">
              Want to join the team?
            </h3>
            <p className="max-w-md text-sm text-cream/65">
              We&apos;re always looking for senior practitioners who care about
              outcomes. If that sounds like you, we&apos;d love to hear from you.
            </p>
            <button onClick={() => openConsultation()} className="btn-gold">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
