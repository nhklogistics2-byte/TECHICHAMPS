"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  Palette,
  Globe,
  Smartphone,
  Megaphone,
  Bot,
  Compass,
  ArrowRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useConsultation } from "./consultation-context";
import { useRouter, type PageType } from "./page-router";
import { SERVICES } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { label: string; page: PageType }[] = [
  { label: "Work", page: { name: "work" } },
  { label: "Process", page: { name: "process" } },
  { label: "Reviews", page: { name: "reviews" } },
  { label: "About", page: { name: "about" } },
  { label: "FAQ", page: { name: "faq" } },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openConsultation } = useConsultation();
  const { page, navigate } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (target: PageType) => {
    if (target.name === "home" && page.name === "home") return true;
    if (target.name === page.name) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-navy-deep/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-px flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <button
          onClick={() => navigate({ name: "home" })}
          className="group flex items-center gap-2.5 focus-premium rounded-md"
          aria-label="Techi Champs home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-deep text-navy-deep shadow-[0_4px_18px_-6px_rgba(201,168,98,0.6)]">
            <span className="font-serif-display text-lg font-bold">T</span>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cream ring-2 ring-navy-deep" />
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-premium",
                  page.name === "service"
                    ? "text-cream"
                    : "text-cream/80 hover:text-cream"
                )}
                aria-label="Services menu"
              >
                Services
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-[640px] rounded-2xl border-border/60 bg-cream p-3 shadow-2xl"
              sideOffset={12}
            >
              <div className="grid grid-cols-2 gap-1.5">
                {SERVICES.map((s) => (
                  <DropdownMenuItem
                    key={s.slug}
                    asChild
                    className="group rounded-xl p-3 focus:bg-navy/5"
                  >
                    <button
                      onClick={() => navigate({ name: "service", slug: s.slug })}
                      className="flex items-start gap-3 text-left"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-gold/15 group-hover:text-gold-deep">
                        <s.icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium text-navy">{s.title}</span>
                        <span className="text-xs text-mist">{s.tagline}</span>
                      </span>
                    </button>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between rounded-xl bg-navy px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-cream/60">
                    Not sure where to start?
                  </p>
                  <p className="text-sm font-medium text-cream">
                    Get a free 30-minute consultation.
                  </p>
                </div>
                <button
                  onClick={() => openConsultation()}
                  className="btn-gold h-9 px-4 py-2 text-xs"
                >
                  Book now
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV_ITEMS.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.page)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-premium",
                isActive(link.page)
                  ? "text-cream"
                  : "text-cream/80 hover:text-cream"
              )}
            >
              {link.label}
              {isActive(link.page) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}

          <button
            onClick={() => navigate({ name: "contact" })}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-premium",
              isActive({ name: "contact" })
                ? "text-cream"
                : "text-cream/80 hover:text-cream"
            )}
          >
            Contact
            {isActive({ name: "contact" }) && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => openConsultation()}
            className="btn-gold h-10 px-5 py-0 text-sm"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream backdrop-blur transition-colors hover:bg-white/10 lg:hidden focus-premium"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[88vw] max-w-[420px] border-border/60 bg-navy-deep p-0 text-cream"
          >
            <SheetHeader className="border-b border-white/10 px-6 py-5 text-left">
              <SheetTitle className="font-serif-display text-xl text-cream">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex h-[calc(100%-80px)] flex-col overflow-y-auto px-6 py-6 scrollbar-premium">
              <MobileAccordionSection
                title="Services"
                items={SERVICES.map((s) => ({
                  slug: s.slug,
                  title: s.title,
                  icon: s.icon,
                }))}
                onNavigate={(slug) => {
                  setMobileOpen(false);
                  navigate({ name: "service", slug });
                }}
              />
              <div className="mt-2 space-y-1">
                {[...NAV_ITEMS, { label: "Contact", page: { name: "contact" as const } }].map(
                  (link) => (
                    <button
                      key={link.label}
                      onClick={() => {
                        setMobileOpen(false);
                        navigate(link.page);
                      }}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-cream/85 transition-colors hover:bg-white/5"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 text-gold/70" />
                    </button>
                  )
                )}
              </div>

              <div className="mt-auto pt-6">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openConsultation();
                  }}
                  className="btn-gold w-full"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-cream/50">
                  No obligation · 100% confidential
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileAccordionSection({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: { slug: string; title: string; icon: typeof Palette }[];
  onNavigate: (slug: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-cream"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gold transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-1 px-2 pb-3">
              {items.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate(s.slug)}
                  className="flex w-full items-start gap-3 rounded-lg p-2.5 text-left hover:bg-white/5"
                >
                  <s.icon className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.75} />
                  <span className="text-sm text-cream/85">{s.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
