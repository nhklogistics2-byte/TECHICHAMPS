"use client";

import { useState } from "react";
import { Loader2, Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { useRouter, type PageType } from "./page-router";
import { SERVICES } from "@/lib/services-data";

const COMPANY_LINKS: { label: string; page: PageType }[] = [
  { label: "Work", page: { name: "work" } },
  { label: "Process", page: { name: "process" } },
  { label: "Reviews", page: { name: "reviews" } },
  { label: "About", page: { name: "about" } },
  { label: "Contact", page: { name: "contact" } },
  { label: "FAQ", page: { name: "faq" } },
];

const RESOURCES = [
  { label: "Insights Journal", href: "#" },
  { label: "Case Studies", page: { name: "work" as const } },
  { label: "Free Brand Audit", page: { name: "contact" as const } },
  { label: "Growth Playbook", href: "#" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 9.5h-2v7h2v-7zM7.5 6.5a1.18 1.18 0 1 0 0 2.36 1.18 1.18 0 0 0 0-2.36zm10 10v-4c0-1.66-.95-2.43-2.07-2.43-.95 0-1.4.55-1.63.93v-.8h-2c.03.6 0 7 0 7h2v-3.9c0-.2.02-.4.08-.55.16-.4.53-.81 1.15-.81.8 0 1.13.6 1.13 1.5v3.76h2z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M18.244 2H21l-6.52 7.45L22 22h-6.6l-4.7-6.16L5.34 22H2.58l6.97-7.97L2 2h6.78l4.25 5.62L18.244 2zm-1.16 18h1.83L7.04 4H5.1l11.984 16z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.62c-3.14 0-3.5.01-4.74.07-.95.04-1.47.2-1.81.34-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.14.34-.3.86-.34 1.81-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.95.2 1.47.34 1.81.18.46.39.78.73 1.12.34.34.66.55 1.12.73.34.14.86.3 1.81.34 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.95-.04 1.47-.2 1.81-.34.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.14-.34.3-.86.34-1.81.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.95-.2-1.47-.34-1.81a3.02 3.02 0 0 0-.73-1.12 3.02 3.02 0 0 0-1.12-.73c-.34-.14-.86-.3-1.81-.34-1.24-.06-1.6-.07-4.74-.07zm0 2.76a5.42 5.42 0 1 1 0 10.84 5.42 5.42 0 0 1 0-10.84zm0 1.62a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm5.6-3.04a1.27 1.27 0 1 1 0 2.54 1.27 1.27 0 0 1 0-2.54z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 4.62a8.34 8.34 0 0 1 1.86 5.16c-.28-.06-3.05-.62-5.84-.27-.06-.14-.12-.28-.18-.42-.18-.42-.38-.84-.58-1.24 3.08-1.26 4.48-3.06 4.74-3.23zM12 3.66c2.1 0 4.02.78 5.48 2.06-.22.32-1.46 2-4.42 3.12-1.36-2.5-2.86-4.54-3.1-4.86.66-.2 1.36-.32 2.04-.32zM7.86 4.6c.22.3 1.7 2.36 3.06 4.8-3.86 1.02-7.26 1-7.62 1a8.36 8.36 0 0 1 4.56-5.8zM3.66 12v-.26c.36.01 4.32.06 8.44-1.16.24.46.46.94.66 1.42-.1.03-.2.06-.3.09-4.24 1.36-6.5 5.1-6.68 5.4a8.32 8.32 0 0 1-2.12-5.49zm8.34 8.34a8.3 8.3 0 0 1-5.12-1.74c.14-.28 1.74-3.38 6.36-4.98.02-.01.04-.01.06-.02 1.14 2.94 1.6 5.4 1.72 6.1a8.27 8.27 0 0 1-3.02.64zm4.62-1.5c-.08-.5-.5-2.86-1.56-5.76 2.64-.42 4.94.26 5.24.36a8.34 8.34 0 0 1-3.68 5.4z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const { navigate } = useRouter();

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error ?? "Subscription failed");
      }
      setStatus("done");
      setEmail("");
      toast.success("Subscribed", { description: data.message });
    } catch (e: any) {
      setStatus("idle");
      toast.error("Could not subscribe", {
        description: e?.message ?? "Please try again.",
      });
    }
  };

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-navy-deep pt-16 text-cream">
      <div className="container-px">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <button
              onClick={() => navigate({ name: "home" })}
              className="flex items-center gap-2.5"
              aria-label="Techi Champs home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-deep text-navy-deep">
                <span className="font-serif-display text-lg font-bold">T</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif-display text-base font-semibold text-cream">
                  Techi Champs
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold/80">
                  Digital Growth Studio
                </span>
              </span>
            </button>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55 text-pretty">
              We help ambitious businesses grow through branding, websites, mobile
              apps, digital marketing, and AI automation — engineered to convert and
              built to scale.
            </p>

            <form onSubmit={onSubscribe} className="mt-6 max-w-sm">
              <label
                htmlFor="newsletter"
                className="text-xs font-medium uppercase tracking-wide text-cream/55"
              >
                Get our monthly growth brief
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-cream placeholder:text-cream/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  aria-label="Subscribe"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy-deep transition-colors hover:bg-gold-soft disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : status === "done" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="mt-2 text-[11px] text-cream/40">
                One email a month. No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Services */}
          <FooterColumn title="Services">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <button
                  onClick={() => navigate({ name: "service", slug: s.slug })}
                  className="text-left text-cream/60 transition-colors hover:text-gold focus-premium"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company">
            {COMPANY_LINKS.map((c) => (
              <li key={c.label}>
                <button
                  onClick={() => navigate(c.page)}
                  className="text-left text-cream/60 transition-colors hover:text-gold focus-premium"
                >
                  {c.label}
                </button>
              </li>
            ))}
          </FooterColumn>

          {/* Resources + Contact */}
          <div className="space-y-6">
            <FooterColumn title="Resources">
              {RESOURCES.map((r) => (
                <li key={r.label}>
                  {"page" in r && r.page ? (
                    <button
                      onClick={() => navigate(r.page as PageType)}
                      className="text-left text-cream/60 transition-colors hover:text-gold focus-premium"
                    >
                      {r.label}
                    </button>
                  ) : (
                    <a
                      href={r.href}
                      className="text-cream/60 transition-colors hover:text-gold focus-premium"
                    >
                      {r.label}
                    </a>
                  )}
                </li>
              ))}
            </FooterColumn>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-cream/55">
                Contact
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:hello@techichamps.com"
                    className="flex items-center gap-2 text-cream/70 transition-colors hover:text-gold"
                  >
                    <Mail className="h-3.5 w-3.5 text-gold/70" />
                    hello@techichamps.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18005551234"
                    className="flex items-center gap-2 text-cream/70 transition-colors hover:text-gold"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold/70" />
                    +1 (800) 555-1234
                  </a>
                </li>
                <li className="flex items-start gap-2 text-cream/70">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 text-gold/70" />
                  <span>
                    Suite 400, Market Street
                    <br />
                    San Francisco, CA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social row */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/60 transition-all hover:border-gold/40 hover:bg-gold/10 hover:text-gold focus-premium"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Techi Champs. All rights reserved.
          </p>
        </div>

        {/* Legal row */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 py-5 text-xs text-cream/45 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-cream/80 focus-premium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream/80 focus-premium">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-cream/80 focus-premium">
              Cookies
            </a>
            <a href="#" className="hover:text-cream/80 focus-premium">
              Accessibility
            </a>
          </div>
          <p className="text-cream/35">
            Crafted with care · A Techi Champs studio production
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-cream/55">
        {title}
      </h4>
      <ul className="mt-3 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}
