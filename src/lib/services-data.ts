import {
  Palette,
  Globe,
  Smartphone,
  Megaphone,
  Bot,
  Compass,
  type LucideIcon,
} from "lucide-react";

export type ServiceDeliverable = {
  title: string;
  desc: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceData = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  heroLabel: string;
  heroHeadline: string;
  heroDescription: string;
  heroImage: string;
  overview: string;
  overviewImage: string;
  outcomes: { value: string; label: string }[];
  deliverables: ServiceDeliverable[];
  process: { step: string; desc: string }[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "logo-design",
    icon: Palette,
    title: "Logo Design & Branding",
    shortTitle: "Branding",
    tagline: "Identity systems that earn trust at first glance.",
    heroLabel: "Identity & Brand",
    heroHeadline: "Brand Identity That Earns Trust Before You Say a Word",
    heroDescription:
      "We craft logo systems, visual language, and brand guidelines that make your business instantly recognizable — and consistently yours across every touchpoint.",
    heroImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400&h=900&fit=crop&auto=format&q=75",
    overview:
      "A brand is more than a logo. It's the cumulative impression your business leaves at every touchpoint — from the first ad impression to the unboxing experience to the support email signature. Our branding engagements start with strategy (positioning, audience, competitive landscape) and end with a complete, documented identity system your team can apply consistently. We design for clarity and longevity, not trends, so your brand still feels right in five years.",
    overviewImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&h=800&fit=crop&auto=format&q=75",
    outcomes: [
      { value: "+38%", label: "Brand Recall" },
      { value: "2.4x", label: "Perceived Value" },
      { value: "5yr", label: "Design Lifespan" },
    ],
    deliverables: [
      { title: "Logo System", desc: "Primary, secondary, and responsive variants — plus clear space, sizing, and misuse rules." },
      { title: "Color & Type System", desc: "Curated primary, secondary, and neutral palettes paired with type scale and pairings." },
      { title: "Brand Guidelines", desc: "A documented PDF and Notion-style guide your team can apply across any channel." },
      { title: "Visual Language", desc: "Iconography style, photography direction, illustration approach, and motion principles." },
      { title: "Asset Library", desc: "Ready-to-use templates for social, presentations, email, and print — branded and consistent." },
      { title: "Brand Voice Guide", desc: "Tone, vocabulary, and writing principles so your words match your visuals." },
    ],
    process: [
      { step: "Discover", desc: "Stakeholder interviews, competitive audit, audience research, and positioning workshop." },
      { step: "Concept", desc: "Three distinct identity directions, each with rationale and application mockups." },
      { step: "Refine", desc: "Iterate on the chosen direction — type, color, composition, and edge cases." },
      { step: "Systematize", desc: "Build the full identity system: logo variants, color, type, icons, and templates." },
      { step: "Document", desc: "Brand guidelines that make consistent application effortless for any team member." },
    ],
    faqs: [
      { q: "How many logo concepts do you present?", a: "Three distinct directions, each grounded in strategy — not just stylistic variations. You pick one to refine, and we iterate together until it's right." },
      { q: "Do I own the final files?", a: "Yes, completely. You receive editable source files (AI, SVG, Figma) plus export-ready PNG, JPG, and PDF versions. Full ownership transfers on final payment." },
      { q: "Can you redesign an existing logo?", a: "Absolutely. A refresh is often smarter than a rebuild. We audit your current identity, identify what's working, and evolve rather than discard — preserving brand equity." },
      { q: "What if I don't like the concepts?", a: "We include two rounds of major revisions in every engagement. If after that we're still not aligned, we'll do a strategy reset at no additional cost — we want you to love the result." },
    ],
    relatedSlugs: ["web-development", "brand-strategy", "mobile-app-development"],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Website Design & Development",
    shortTitle: "Web Development",
    tagline: "Conversion-focused websites engineered on modern stacks.",
    heroLabel: "Web Engineering",
    heroHeadline: "Websites Built to Convert, Engineered to Scale",
    heroDescription:
      "Strategy-led design, modern headless architecture, and conversion-focused UX — websites that load fast, rank well, and turn visitors into pipeline.",
    heroImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&h=900&fit=crop&auto=format&q=75",
    overview:
      "Your website is your hardest-working salesperson — it never sleeps and never has a bad day. We design and build websites that earn their keep: fast, accessible, SEO-ready, and engineered around your conversion goals. Our stack is modern (Next.js, headless CMS, edge-deployed) and our process is transparent — you'll see staging previews every week, not just at the end.",
    overviewImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop&auto=format&q=75",
    outcomes: [
      { value: "+156%", label: "Conversion Rate" },
      { value: "<1.5s", label: "Load Time" },
      { value: "95+", label: "Lighthouse Score" },
    ],
    deliverables: [
      { title: "UX Strategy & Wireframes", desc: "Information architecture, user flows, and wireframes reviewed weekly with your team." },
      { title: "Design System", desc: "A reusable component library in Figma — buttons, cards, sections — so future pages stay consistent." },
      { title: "Headless Build", desc: "Next.js + TypeScript + Tailwind, headless CMS (Sanity/Contentful), edge-deployed on Vercel." },
      { title: "CMS Integration", desc: "Your team can edit content without touching code — pages, posts, case studies, team bios." },
      { title: "SEO Foundation", desc: "Technical SEO, structured data, sitemaps, meta management, and analytics instrumentation." },
      { title: "Performance & A11y", desc: "95+ Lighthouse scores, WCAG-compliant, and tested across browsers and devices." },
    ],
    process: [
      { step: "Discover", desc: "Stakeholder workshop, analytics audit, competitor review, and conversion goal definition." },
      { step: "Architect", desc: "Information architecture, sitemap, user flows, and wireframes for every key page." },
      { step: "Design", desc: "High-fidelity design in Figma — reviewed weekly, refined collaboratively, signed off before build." },
      { step: "Build", desc: "Next.js + TypeScript development, headless CMS integration, and continuous staging previews." },
      { step: "Launch", desc: "QA across devices, performance optimization, analytics setup, and clean DNS cutover." },
      { step: "Optimize", desc: "30-day post-launch monitoring, A/B testing, and conversion rate optimization." },
    ],
    faqs: [
      { q: "What CMS do you use?", a: "We default to Sanity or Contentful for headless CMS — both are enterprise-grade, API-first, and let your team edit content without developer involvement. We can also work with WordPress headless if you have an existing investment." },
      { q: "How long does a website take?", a: "Marketing sites typically take 8–12 weeks. Landing pages ship in 2–3 weeks. Complex web apps take 12–20 weeks. We share a week-by-week roadmap before kickoff so you know exactly what to expect." },
      { q: "Will I be able to edit content myself?", a: "Yes. Every site we build includes a structured CMS where your team can edit pages, posts, case studies, team bios, and more — no code required. We provide a 90-minute training session at handoff." },
      { q: "Do you handle hosting and maintenance?", a: "Hosting is on Vercel (included free for most marketing sites). For ongoing maintenance, security updates, and feature work, we offer monthly retainers starting at $2K/month — but you're never locked in." },
    ],
    relatedSlugs: ["logo-design", "digital-marketing", "ai-automation"],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "iOS & Android apps engineered to retain users.",
    heroLabel: "Mobile Engineering",
    heroHeadline: "Mobile Apps Your Users Will Open Every Day",
    heroDescription:
      "Native-grade iOS and Android applications designed for retention — calm, trustworthy interfaces backed by clean architecture and reliable infrastructure.",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&auto=format&q=75",
    overview:
      "A great mobile app disappears. The interface gets out of the way, the architecture holds up under load, and the experience feels native — not like a website in a wrapper. We build iOS and Android apps with React Native or native Swift/Kotlin, depending on your needs. Every engagement includes App Store / Play Store launch support and post-launch monitoring.",
    overviewImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&auto=format&q=75",
    outcomes: [
      { value: "4.8★", label: "App Store Rating" },
      { value: "+220%", label: "Weekly Active" },
      { value: "−58%", label: "No-show Rate" },
    ],
    deliverables: [
      { title: "Product UX", desc: "User research, journey mapping, and prototype testing before a line of code is written." },
      { title: "Cross-Platform Build", desc: "React Native for shared codebase, or native Swift/Kotlin where performance demands it." },
      { title: "Backend & APIs", desc: "Node.js or serverless backend, with REST/GraphQL APIs and Postgres database." },
      { title: "Push & Lifecycle", desc: "Push notifications, in-app messaging, and lifecycle automation to drive retention." },
      { title: "App Store Launch", desc: "Store listing copy, screenshots, review management, and submission handling." },
      { title: "Analytics & Crash Reporting", desc: "Event tracking, funnel analytics, and crash reporting via Sentry and Amplitude." },
    ],
    process: [
      { step: "Discover", desc: "User interviews, competitive analysis, and product strategy workshop." },
      { step: "Prototype", desc: "Clickable Figma prototype tested with real users before development starts." },
      { step: "Architect", desc: "Technical architecture, API design, data model, and infrastructure decisions." },
      { step: "Build", desc: "Two-week sprints with staging builds you can install on your phone every iteration." },
      { step: "Launch", desc: "Beta program, App Store / Play Store submission, and launch monitoring." },
      { step: "Iterate", desc: "Post-launch analytics review, retention optimization, and feature roadmap." },
    ],
    faqs: [
      { q: "React Native or native — which do you recommend?", a: "For 80% of apps, React Native is the right choice — one codebase, faster shipping, near-native performance. For graphics-heavy apps (games, AR, video editing) or apps needing deep platform integration, native is better. We'll recommend based on your specific needs during discovery." },
      { q: "Can you take over an existing app?", a: "Yes. We start with a code audit (1–2 weeks) to assess architecture, technical debt, and team fit. If we're a match, we onboard your codebase, set up CI/CD, and continue development — usually with a 2–4 week transition." },
      { q: "How do you handle App Store approval?", a: "We've launched 40+ apps with a 100% approval rate. We handle listing copy, screenshots, privacy policy, review responses, and submission. Apple's review typically takes 24–48 hours; we manage any rejection feedback until approval." },
      { q: "Do you provide ongoing maintenance?", a: "Yes — monthly retainers covering bug fixes, OS updates, security patches, and feature work. Most clients retain us at $3–8K/month depending on app complexity and feature velocity." },
    ],
    relatedSlugs: ["web-development", "ai-automation", "logo-design"],
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    shortTitle: "Marketing",
    tagline: "SEO, paid, content — compounding growth channels.",
    heroLabel: "Growth Marketing",
    heroHeadline: "Marketing Built for Compounding Returns, Not Vanity Metrics",
    heroDescription:
      "SEO, paid acquisition, content, and lifecycle CRM — engineered as integrated channels measured against revenue, not clicks.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&auto=format&q=75",
    overview:
      "Most marketing agencies optimize for the metric they can show you — clicks, impressions, leads. We optimize for the metric that matters — revenue. Our marketing engagements start with attribution infrastructure (so we know what's actually working), then build SEO, paid, content, and lifecycle channels as an integrated system. You get weekly reports tied to pipeline, not vanity dashboards.",
    overviewImage:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&h=800&fit=crop&auto=format&q=75",
    outcomes: [
      { value: "+82%", label: "Organic Traffic" },
      { value: "−31%", label: "Cost per Lead" },
      { value: "3.6x", label: "Marketing ROI" },
    ],
    deliverables: [
      { title: "Attribution Setup", desc: "Server-side tracking, UTM hygiene, and dashboard tied to revenue — not just leads." },
      { title: "SEO Program", desc: "Technical SEO, keyword strategy, content calendar, and link building from real publications." },
      { title: "Paid Acquisition", desc: "Google Ads, Meta, LinkedIn — managed daily, optimized weekly, reported transparently." },
      { title: "Content Engine", desc: "Editorial calendar, SEO-driven articles, and thought leadership that compounds over time." },
      { title: "Lifecycle CRM", desc: "Email and in-app lifecycle automation — onboarding, activation, retention, win-back." },
      { title: "Weekly Reporting", desc: "A live dashboard and weekly Slack update tied to revenue, pipeline, and CAC." },
    ],
    process: [
      { step: "Audit", desc: "Full audit of analytics, attribution, current channels, and competitor positioning." },
      { step: "Strategy", desc: "Channel mix recommendation, budget allocation, and 90-day roadmap with revenue targets." },
      { step: "Setup", desc: "Attribution infrastructure, tracking, dashboards, and channel accounts configured." },
      { step: "Execute", desc: "Weekly sprint cycle — SEO content, paid campaigns, lifecycle automation, and experimentation." },
      { step: "Optimize", desc: "Monthly review against revenue targets, channel reallocation, and roadmap adjustment." },
    ],
    faqs: [
      { q: "Do you require a minimum ad spend?", a: "No — but we'll be honest if your budget is too small to test effectively. As a rule of thumb, paid channels need $5K/month minimum to generate statistically significant learnings within 90 days. We'll tell you upfront if your budget doesn't fit your goals." },
      { q: "How quickly will I see results?", a: "Paid acquisition can show results in 2–4 weeks. SEO compounds over 3–6 months. Lifecycle CRM shows lift in 30–60 days. We set realistic expectations per channel during strategy, not promises." },
      { q: "Do you write the content yourselves?", a: "Yes. Our in-house content team includes strategists, writers, and editors who produce SEO-driven articles, thought leadership, and lifecycle copy. We don't outsource to cheap freelancers." },
      { q: "What tools do you use?", a: "We're tool-agnostic but typically work with Google Analytics 4, Google Tag Manager, Ahrefs/SEMrush, HubSpot or your CRM, and Looker Studio for dashboards. We use whatever your team already has where possible." },
    ],
    relatedSlugs: ["web-development", "brand-strategy", "ai-automation"],
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Solutions & Automation",
    shortTitle: "AI Automation",
    tagline: "Practical automations that cut cost-to-serve.",
    heroLabel: "AI Engineering",
    heroHeadline: "AI Automation That Cuts Cost-to-Serve, Not Adds Hype",
    heroDescription:
      "Practical AI workflows that surface insights, automate repetitive work, and free your team to do higher-leverage work — measured in hours saved, not headlines earned.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=900&fit=crop&auto=format&q=75",
    overview:
      "AI for its own sake is theater. We build AI automations that earn their keep — workflows that handle repetitive work, surface insights from your data, and integrate cleanly with the tools your team already uses. No black boxes, no vendor lock-in, no hype. Just measurable hours saved and decisions improved.",
    overviewImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop&auto=format&q=75",
    outcomes: [
      { value: "184h", label: "Saved Monthly" },
      { value: "−42%", label: "Response Time" },
      { value: "+68%", label: "Lead Score Accuracy" },
    ],
    deliverables: [
      { title: "Workflow Audit", desc: "Map your team's repetitive tasks and identify high-ROI automation opportunities." },
      { title: "AI Integrations", desc: "Custom GPT integrations, RAG pipelines, and LLM-powered workflows connected to your stack." },
      { title: "Internal Tools", desc: "Custom dashboards and admin tools that surface insights and automate decisions." },
      { title: "Document AI", desc: "Extract, classify, and route documents — invoices, contracts, support tickets — automatically." },
      { title: "Chat & Support", desc: "AI-assisted support that resolves tier-1 queries and routes complex issues to humans." },
      { title: "Monitoring & Governance", desc: "Quality monitoring, human-in-the-loop checkpoints, and clear escalation paths." },
    ],
    process: [
      { step: "Audit", desc: "Stakeholder interviews, workflow mapping, and opportunity scoring — where will AI save the most hours?" },
      { step: "Prototype", desc: "Build a working prototype of the highest-ROI automation and test with real users." },
      { step: "Integrate", desc: "Connect to your stack — CRM, support, docs, communication — with proper auth and security." },
      { step: "Deploy", desc: "Roll out with monitoring, human-in-the-loop checkpoints, and team training." },
      { step: "Optimize", desc: "Monthly review of accuracy, adoption, and hours saved — iterate toward compounding returns." },
    ],
    faqs: [
      { q: "Which AI models do you use?", a: "We're model-agnostic. We default to OpenAI (GPT-4) and Anthropic (Claude) for general reasoning, with fine-tuned open-source models (Llama, Mistral) where data privacy or cost demands. We pick the right tool per workflow, not per vendor relationship." },
      { q: "Is my data safe?", a: "Yes. We use enterprise APIs with no-training-on-your-data terms, deploy within your cloud (AWS/Azure/GCP) where possible, and follow SOC 2 practices. For sensitive workloads, we use open-source models deployed in your VPC." },
      { q: "What does an automation typically cost?", a: "Most automation engagements range $15K–$80K depending on complexity. A single workflow (e.g., lead routing) might be $15–25K. A full support automation platform starts at $50K. We share a fixed quote after the audit." },
      { q: "How do you measure success?", a: "Hours saved, cycle time reduced, accuracy improved, and adoption rate. We instrument every automation with metrics tied to your business outcomes — not model benchmarks. You'll see real ROI in your weekly reports." },
    ],
    relatedSlugs: ["web-development", "digital-marketing", "mobile-app-development"],
  },
  {
    slug: "brand-strategy",
    icon: Compass,
    title: "Brand Strategy & Consulting",
    shortTitle: "Strategy",
    tagline: "Positioning, narrative, and roadmap for scale.",
    heroLabel: "Strategy Consulting",
    heroHeadline: "Strategy That Aligns Your Team and Clarifies What to Build",
    heroDescription:
      "Positioning, narrative, and roadmap work that turns 'we kind of know what we're doing' into a clear, documented plan your whole team can execute against.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b42?w=1400&h=900&fit=crop&auto=format&q=75",
    overview:
      "Most strategy decks die in a shared Drive folder. Ours don't. We facilitate strategy as a working session — your team in the room, whiteboards open, decisions made together — and we ship a documented plan your team can execute against. Whether you need positioning clarity, a go-to-market plan, or a multi-quarter product roadmap, we'll get you aligned.",
    overviewImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=75",
    outcomes: [
      { value: "100%", label: "Team Alignment" },
      { value: "12mo", label: "Clear Roadmap" },
      { value: "3x", label: "Faster Decisions" },
    ],
    deliverables: [
      { title: "Positioning Workshop", desc: "A 2-day facilitated session with your leadership team to nail positioning, audience, and message." },
      { title: "Competitive Audit", desc: "Structured analysis of competitors' positioning, messaging, and product strategy." },
      { title: "Brand Narrative", desc: "A documented narrative arc — problem, solution, proof, vision — your team can use everywhere." },
      { title: "Go-to-Market Plan", desc: "Channel mix, sequencing, and 90-day execution plan with owners and milestones." },
      { title: "Product Roadmap", desc: "A 12-month roadmap tied to business outcomes — not just feature lists." },
      { title: "Decision Frameworks", desc: "Documented frameworks for pricing, prioritization, and channel decisions your team can reuse." },
    ],
    process: [
      { step: "Discover", desc: "Stakeholder interviews, customer research, and current-state assessment." },
      { step: "Workshop", desc: "2-day facilitated strategy workshop with your leadership team — decisions made in the room." },
      { step: "Synthesize", desc: "Document the outcomes — positioning, narrative, GTM, roadmap — in a clear, shareable format." },
      { step: "Align", desc: "Review session with broader team to ensure buy-in and surface edge cases." },
      { step: "Execute", desc: "Optional ongoing advisory to help your team execute against the plan — weekly or monthly cadence." },
    ],
    faqs: [
      { q: "Who should attend the workshop?", a: "Your CEO/founder, head of product, head of marketing, and head of sales — the people who own decisions. We cap attendance at 6 to keep decisions fast. Optional observers from broader team can join for specific sessions." },
      { q: "Can you facilitate remotely?", a: "Yes. We run workshops both in-person (preferred for high-stakes strategy) and remotely (effective for most engagements). Remote workshops are structured into focused 3-hour blocks over 2 days to avoid Zoom fatigue." },
      { q: "What if we already have a strategy?", a: "Great — we'll audit it first. Many engagements start with a strategy audit ($5K, 1 week) where we review your current plan, identify gaps, and recommend whether a full workshop is needed. Sometimes a refresh is enough." },
      { q: "Do you offer ongoing advisory?", a: "Yes. Many clients retain us as fractional strategy partners — weekly or monthly cadence — to help execute against the plan, troubleshoot decisions, and adjust the roadmap as you learn. Pricing starts at $4K/month." },
    ],
    relatedSlugs: ["logo-design", "digital-marketing", "web-development"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceData => Boolean(s));
}
