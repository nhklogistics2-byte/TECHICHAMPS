"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Check, X, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useConsultation } from "./consultation-context";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(80),
  email: z.string().email("Please enter a valid email address").max(120),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().min(2, "Please choose a service").max(60),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "Logo Design & Branding",
  "Website Design & Development",
  "Mobile App Development",
  "Digital Marketing",
  "AI Solutions & Automation",
  "Brand Strategy & Consulting",
];

const BUDGETS = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K+",
  "Not sure yet",
];

export function ConsultationDialog() {
  const { open, setOpen, presetService } = useConsultation();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
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

  useEffect(() => {
    if (open && presetService) {
      setValue("service", presetService);
    }
  }, [open, presetService, setValue]);

  useEffect(() => {
    if (!open) {
      // Small delay before resetting so the closing animation is clean
      const t = setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 250);
      return () => clearTimeout(t);
    }
  }, [open, reset]);

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
      toast.success("Request received", {
        description: data.message ?? "A strategist will reach out shortly.",
      });
    } catch (e: any) {
      toast.error("Could not submit", {
        description: e?.message ?? "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-h-[92vh] w-[95vw] max-w-[640px] overflow-y-auto rounded-2xl border-border/60 bg-cream p-0 scrollbar-premium sm:rounded-3xl"
        aria-describedby="consultation-desc"
      >
        <DialogTitle className="sr-only">Book a free consultation</DialogTitle>
        <DialogDescription id="consultation-desc" className="sr-only">
          Share a few details and a Techi Champs strategist will reach out within one business day.
        </DialogDescription>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-5 px-8 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Check className="h-8 w-8" strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-display text-2xl font-semibold text-navy">
                Thank you — your request is in.
              </h3>
              <p className="max-w-sm text-sm text-mist">
                A Techi Champs strategist will reach out within one business day to schedule your free consultation.
                All information shared is kept strictly confidential.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn-navy mt-2"
            >
              Back to site
            </button>
          </div>
        ) : (
          <div className="relative">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors hover:bg-navy/10"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="border-b border-border/60 bg-gradient-to-b from-navy to-navy-deep px-8 py-8 text-cream">
              <p className="eyebrow text-gold-soft">Free Consultation</p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight">
                Let&apos;s map your next growth move.
              </h2>
              <p className="mt-2 max-w-md text-sm text-cream/70">
                Share a few details. We&apos;ll come back with tailored next steps — no obligation, 100% confidential.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-8 py-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" error={errors.fullName?.message} required>
                  <Input
                    {...register("fullName")}
                    placeholder="Jane Rivera"
                    className="bg-white"
                    aria-invalid={!!errors.fullName}
                  />
                </Field>
                <Field label="Work email" error={errors.email?.message} required>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="jane@company.com"
                    className="bg-white"
                    aria-invalid={!!errors.email}
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
                label="What are you trying to achieve?"
                error={errors.message?.message}
                hint="The more context, the better the first conversation."
              >
                <Textarea
                  {...register("message")}
                  placeholder="We're an e-commerce brand preparing to launch a new product line and need a website, brand refresh, and a launch campaign…"
                  className="min-h-[120px] resize-y bg-white"
                />
              </Field>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="inline-flex items-center gap-2 text-xs text-mist">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  No obligation. 100% confidential.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Request my consultation"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
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
