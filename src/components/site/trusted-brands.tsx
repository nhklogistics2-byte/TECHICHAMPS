"use client";

const BRANDS = [
  "Northwind Co.",
  "Veritas Labs",
  "Atelier Nine",
  "Helio Bank",
  "Lumen Health",
  "Meridian Studio",
  "Coral & Co.",
  "Polar Foundry",
  "Sable Retail",
  "Orbit Logistics",
];

export function TrustedBrands() {
  return (
    <section
      aria-label="Trusted brands"
      className="border-y border-white/10 bg-navy-deep py-10"
    >
      <div className="container-px">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.22em] text-cream/45">
          Trusted by founders and teams at growing companies
        </p>

        <div className="marquee-container relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-deep to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-deep to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-12 pr-12">
            {[...BRANDS, ...BRANDS].map((name, i) => (
              <BrandWord key={i} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandWord({ name }: { name: string }) {
  return (
    <div className="group flex items-center gap-2.5 transition-all duration-500 hover:opacity-100">
      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/5 text-cream/40 transition-colors duration-500 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-gold">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 6 12 4.5 19.5 6 12 9.5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </span>
      <span className="font-serif-display text-lg text-cream/35 transition-colors duration-500 group-hover:text-cream/85">
        {name}
      </span>
    </div>
  );
}
