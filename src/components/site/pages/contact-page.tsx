"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Check, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { HeroSection } from "../hero-section";
import { FinalCtaSection } from "../sections/final-cta-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(80),
  email: z.string().email("Please enter a valid email address").max(120),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().min(2, "Please choose a service").max(60),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)").max(2000),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "Logo Design & Branding",
  "Website Design & Development",
  "Mobile App Development",
  "Digital Marketing",
  "AI Solutions & Automation",
  "Brand Strategy & Consulting",
  "Something else",
];

const BUDGETS = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K+",
  "Not sure yet",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const serviceValue = watch("service");
  const budgetValue = watch("budget");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error ?? "Request failed");
      }
      setSubmitted(true);
      reset();
      toast.success("Message sent", {
        description: "We'll reply within one business day.",
      });
    } catch (e: any) {
      toast.error("Could not send", {
        description: e?.message ?? "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <HeroSection
        eyebrow="Contact Us"
        title="Let's Start a"
        highlight="Conversation"
        description="Tell us about your project. We'll reply within one business day with tailored next steps — no obligation, 100% confidential."
        primaryCta={{ label: "Send a Message", action: () => {
          document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
        }}}
        secondaryCta={{ label: "View Services" }}
        heroVariant="contact"
        laptopHeadline="Let's Talk.\nWe're Listening."
        laptopSubtext="Get in Touch"
        phoneMetricLabel="Reply Time"
        phoneMetricValue="< 24h"
        stat1={{ label: "Response", value: "< 24h" }}
        stat2={{ label: "Confidential", value: "100%" }}
        stat3={{ label: "Obligation", value: "Free" }}
      />

      {/* Contact form + info */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Left — contact info */}
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-4 font-serif-display text-3xl font-semibold leading-tight text-navy text-balance">
                We&apos;d Love to Hear From You
              </h2>
              <p className="mt-4 text-base leading-relaxed text-mist text-pretty">
                Whether you have a clear project in mind or just want to explore
                possibilities, we&apos;re here to help. Reach out through any channel
                below — we respond to every inquiry within one business day.
              </p>

              <div className="mt-8 space-y-4">
                <ContactInfoRow
                  icon={Mail}
                  label="Email us"
                  value="hello@techichamps.com"
                  href="mailto:hello@techichamps.com"
                />
                <ContactInfoRow
                  icon={Phone}
                  label="Call us"
                  value="+1 (800) 555-1234"
                  href="tel:+18005551234"
                />
                <ContactInfoRow
                  icon={MapPin}
                  label="Visit us"
                  value="Suite 400, Market Street, San Francisco, CA"
                />
                <ContactInfoRow
                  icon={Clock}
                  label="Office hours"
                  value="Mon–Fri, 9am–6pm PT"
                />
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <div className="font-serif-display text-2xl font-semibold text-navy">
                    &lt; 24h
                  </div>
                  <div className="mt-1 text-xs text-mist">Average reply time</div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <div className="font-serif-display text-2xl font-semibold text-navy">
                    100%
                  </div>
                  <div className="mt-1 text-xs text-mist">Confidential</div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-[0_30px_70px_-50px_rgba(26,16,49,0.3)] sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif-display text-2xl font-semibold text-navy">
                      Message sent — thank you.
                    </h3>
                    <p className="max-w-sm text-sm text-mist">
                      A Techi Champs strategist will reply within one business day.
                      All information shared is kept strictly confidential.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-navy"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <h3 className="font-serif-display text-xl font-semibold text-navy">
                      Send us a message
                    </h3>
                    <p className="mt-1 text-sm text-mist">
                      Fields marked with <span className="text-gold">*</span> are required.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" error={errors.fullName?.message} required>
                      <Input
                        {...register("fullName")}
                        placeholder="Jane Rivera"
                        className="bg-white"
                      />
                    </Field>
                    <Field label="Work email" error={errors.email?.message} required>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="jane@company.com"
                        className="bg-white"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone (optional)" error={errors.phone?.message}>
                      <Input
                        {...register("phone")}
                        placeholder="+1 (555) 000-0000"
                        className="bg-white"
                      />
                    </Field>
                    <Field label="Company (optional)" error={errors.company?.message}>
                      <Input
                        {...register("company")}
                        placeholder="Rivera & Co."
                        className="bg-white"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Service needed" error={errors.service?.message} required>
                      <Select
                        value={serviceValue}
                        onValueChange={(v) => setValue("service", v, { shouldValidate: true })}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="Estimated budget" error={errors.budget?.message}>
                      <Select
                        value={budgetValue}
                        onValueChange={(v) => setValue("budget", v)}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          {BUDGETS.map((b) => (
                            <SelectItem key={b} value={b}>
                              {b}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field
                    label="Your message"
                    error={errors.message?.message}
                    required
                  >
                    <Textarea
                      {...register("message")}
                      placeholder="Tell us about your project, goals, and timeline…"
                      className="min-h-[140px] resize-y bg-white"
                    />
                  </Field>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <p className="text-xs text-mist">
                      No obligation · 100% confidential
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-gold"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}

function ContactInfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-colors hover:border-gold/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/[0.04] text-navy">
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </div>
      <div>
        <div className="text-[10px] font-medium uppercase tracking-wide text-mist">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-medium text-navy">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block focus-premium rounded-2xl">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium uppercase tracking-wide text-navy/70">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </Label>
      {children}
      {hint ? <p className="text-xs text-mist">{hint}</p> : null}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
