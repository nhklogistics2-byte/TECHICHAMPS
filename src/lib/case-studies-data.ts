export type CaseStudy = {
  slug: string;
  industry: string;
  project: string;
  client: string;
  services: string[];
  image: string;
  year: string;
  duration: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  testimonial?: { quote: string; name: string; title: string };
  gallery?: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "helio-bank-onboarding",
    industry: "E-commerce",
    project: "Helio Bank — Digital Onboarding",
    client: "Helio Bank",
    services: ["Web Development", "Mobile App", "AI Automation"],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop&auto=format&q=75",
    year: "2025",
    duration: "12 weeks",
    challenge:
      "A fast-growing neobank needed a frictionless onboarding flow that would convert more applicants without compromising compliance. Their existing flow had a 58% drop-off rate at the document verification stage, and the back-office team was drowning in manual review work.",
    solution:
      "We redesigned the onboarding funnel end-to-end — from a mobile-first web app for application capture to a native iOS app for account management. We layered AI-assisted document review to cut manual ops from 4 minutes per application to 90 seconds, with human-in-the-loop checkpoints for edge cases.",
    results: [
      { value: "+156%", label: "User Signups" },
      { value: "−42%", label: "Drop-off Rate" },
      { value: "3.6x", label: "Return on Investment" },
    ],
    testimonial: {
      quote:
        "Techi Champs rebuilt our marketing site and onboarding flow in eight weeks. Signups jumped 156% in the first quarter. The team felt like an extension of ours, not a vendor.",
      name: "Sofia Marchetti",
      title: "VP Growth, Helio Bank",
    },
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=70",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&auto=format&q=70",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format&q=70",
    ],
  },
  {
    slug: "veritas-labs-growth",
    industry: "SaaS",
    project: "Veritas Labs — Growth Site",
    client: "Veritas Labs",
    services: ["Web Development", "Digital Marketing", "Brand Strategy"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=75",
    year: "2024",
    duration: "10 weeks",
    challenge:
      "A Series B analytics platform struggled to translate traffic into demo requests and qualified pipeline. Despite 80K monthly visitors, demo conversion sat at 0.8% and the sales team was chasing unqualified leads.",
    solution:
      "Rebuilt the marketing site around a clear narrative — what we do, who it's for, why it matters — with conversion-focused UX. Introduced content-led SEO targeting bottom-funnel keywords, and connected lifecycle CRM automation to nurture leads from first touch to closed deal.",
    results: [
      { value: "+82%", label: "Organic Traffic" },
      { value: "+64%", label: "Demo Requests" },
      { value: "−31%", label: "Cost per Lead" },
    ],
    testimonial: {
      quote:
        "We'd worked with three agencies before Techi Champs. They were the first to ask about our revenue model before showing a single design. That changed everything.",
      name: "Daniel Osei",
      title: "CEO, Veritas Labs",
    },
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=70",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=70",
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop&auto=format&q=70",
    ],
  },
  {
    slug: "lumen-health-app",
    industry: "Healthcare",
    project: "Lumen Health — Patient App",
    client: "Lumen Health",
    services: ["Mobile App", "UX Design", "Brand Strategy"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&auto=format&q=75",
    year: "2024",
    duration: "16 weeks",
    challenge:
      "A telehealth provider needed a mobile app that felt calm and trustworthy while handling scheduling, medical records, and prescriptions. Existing solutions felt clinical and cold — patients weren't engaging.",
    solution:
      "Designed and shipped an iOS + Android app with a clinician-friendly admin console. The interface uses calming colors, generous whitespace, and clear typography. Automated patient follow-ups reduced no-shows and improved medication adherence.",
    results: [
      { value: "4.8★", label: "App Store Rating" },
      { value: "+220%", label: "Weekly Active Patients" },
      { value: "−58%", label: "No-show Rate" },
    ],
    testimonial: {
      quote:
        "Our patient app shipped on time, on budget, and our App Store rating went from 3.4 to 4.8 in three months. The calm, trustworthy feel they designed is exactly what we needed.",
      name: "Dr. Amara Patel",
      title: "Chief Medical Officer, Lumen Health",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&auto=format&q=70",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=70",
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=600&fit=crop&auto=format&q=70",
    ],
  },
  {
    slug: "orbit-logistics-ai",
    industry: "Logistics",
    project: "Orbit Logistics — AI Support Automation",
    client: "Orbit Logistics",
    services: ["AI Automation", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&auto=format&q=75",
    year: "2025",
    duration: "8 weeks",
    challenge:
      "A mid-size logistics company's support team was handling 4,000+ tickets monthly — 70% of which were repetitive tracking and status queries. Response times had slipped to 18 hours, and CSAT was dropping.",
    solution:
      "Built an AI-powered support automation layer that resolves tier-1 queries instantly, routes complex issues to the right agent with context, and drafts responses for human review. Integrated with their existing Zendesk and TMS systems.",
    results: [
      { value: "184h", label: "Saved Monthly" },
      { value: "−42%", label: "Response Time" },
      { value: "+34%", label: "CSAT Score" },
    ],
    testimonial: {
      quote:
        "Their AI automation saved our support team 184 hours in the first month alone. Practical, not flashy — exactly what we needed.",
      name: "Markus Lindqvist",
      title: "COO, Orbit Logistics",
    },
  },
  {
    slug: "atelier-nine-brand",
    industry: "Design",
    project: "Atelier Nine — Brand Strategy",
    client: "Atelier Nine",
    services: ["Brand Strategy", "Branding"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&h=800&fit=crop&auto=format&q=75",
    year: "2024",
    duration: "6 weeks",
    challenge:
      "A boutique design studio had grown through word-of-mouth but had no documented positioning. They were turning down the wrong projects and accepting the right ones at the wrong price.",
    solution:
      "Facilitated a 2-day strategy workshop to clarify positioning, ideal client profile, and pricing model. Delivered a documented brand narrative and go-to-market plan that realigned their entire sales process.",
    results: [
      { value: "+58%", label: "Average Project Value" },
      { value: "−72%", label: "Wrong-fit Inquiries" },
      { value: "100%", label: "Team Alignment" },
    ],
    testimonial: {
      quote:
        "We came for a logo. We left with a brand strategy that realigned our entire go-to-market. Worth every cent.",
      name: "Yuki Tanaka",
      title: "Founder, Atelier Nine",
    },
  },
  {
    slug: "sable-retail-ecom",
    industry: "Retail",
    project: "Sable Retail — E-commerce Rebuild",
    client: "Sable Retail",
    services: ["Web Development", "Branding", "Digital Marketing"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&auto=format&q=75",
    year: "2025",
    duration: "14 weeks",
    challenge:
      "A heritage retail brand's e-commerce site was built on outdated tech — slow, hard to manage, and converting at 1.2% versus industry benchmarks of 2.5%+. The team couldn't launch new products without developer help.",
    solution:
      "Rebuilt on Next.js + Shopify headless with a custom CMS for editorial content. Refreshed the brand system for digital. Implemented a full-funnel marketing program across SEO, paid, and lifecycle email.",
    results: [
      { value: "+218%", label: "Conversion Rate" },
      { value: "+94%", label: "Average Order Value" },
      { value: "1.2s", label: "Page Load Time" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
