"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useConsultation } from "../consultation-context";
import { useRouter } from "../page-router";

export function FinalCtaSection() {
  const reduce = useReducedMotion();
  const { openConsultation } = useConsultation();
  const { navigate } = useRouter();

  return (
    <section id="contact" className="relative bg-cream-soft py-20 md:py-28">
      <div className="container-px">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-deep via-navy to-navy-soft px-6 py-16 sm:px-12 md:px-16 md:py-20"
        >
          {/* Subtle animated background pattern */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 animate-drift opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,168,98,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,98,0.18) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
                maskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              }}
            />

            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#c9a862" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#c9a862" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#c9a862" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 120 C 240 180, 480 60, 720 110 C 960 160, 1200 80, 1440 130 L 1440 200 L 0 200 Z"
                fill="url(#waveGrad)"
                animate={
                  reduce
                    ? {}
                    : {
                        d: [
                          "M0 120 C 240 180, 480 60, 720 110 C 960 160, 1200 80, 1440 130 L 1440 200 L 0 200 Z",
                          "M0 130 C 240 70, 480 170, 720 120 C 960 70, 1200 160, 1440 100 L 1440 200 L 0 200 Z",
                          "M0 120 C 240 180, 480 60, 720 110 C 960 160, 1200 80, 1440 130 L 1440 200 L 0 200 Z",
                        ],
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>

            <div className="absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-gold/12 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center text-gold-soft">
              Ready when you are
            </p>
            <h2 className="mt-5 font-serif-display text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl text-balance">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg text-pretty">
              Book a free 30-minute consultation. We&apos;ll map your next growth
              move — strategy, design, technology, and execution — with no
              obligation and no pressure.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => openConsultation()}
                className="btn-gold h-12 px-7 text-[15px]"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate({ name: "work" })}
                className="btn-outline-light h-12 px-7 text-[15px]"
              >
                Explore Services
              </button>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-xs text-cream/55">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" />
              No obligation. 100% confidential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
