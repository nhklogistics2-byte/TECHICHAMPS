# Techi Champs — Digital Growth Studio

A premium, multi-page technology agency website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Multi-page architecture** with hash-based routing (Home, Work, Process, About, Reviews, FAQ, Contact)
- **6 dynamic service pages** (Logo Design, Web Development, Mobile Apps, Digital Marketing, AI Automation, Brand Strategy)
- **Purple theme** — dark purple backgrounds (`#1a1031`) with vibrant purple accents (`#7e3af2`)
- **Static hero visual** — laptop showing a mini Techi Champs website + phone showing analytics
- **Working backend** — consultation form saves leads to SQLite via Prisma
- **Premium motion** — fade-up reveals, card elevation, smooth transitions
- **Fully accessible** — keyboard nav, focus states, ARIA labels, reduced-motion support
- **Responsive** — mobile-first design with breakpoints for all devices

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animations**: Framer Motion
- **Database**: Prisma ORM + SQLite
- **Fonts**: Playfair Display (serif headings) + Inter (body)

## Getting Started

```bash
# Install dependencies
bun install

# Set up the database
bun run db:push

# Start the dev server
bun run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── consultation/route.ts   # POST endpoint for consultation leads
│   │   └── newsletter/route.ts     # POST endpoint for newsletter subscriptions
│   ├── globals.css                 # Purple theme tokens
│   ├── layout.tsx                  # Root layout with fonts
│   └── page.tsx                    # Main page with router
├── components/
│   └── site/
│       ├── pages/                  # Home, Work, Process, About, Reviews, FAQ, Contact, ServiceDetail
│       ├── sections/               # Reusable sections (Services, CaseStudies, WhyUs, Process, etc.)
│       ├── navbar.tsx              # Sticky nav with dropdown
│       ├── footer.tsx              # Multi-column footer
│       ├── hero-section.tsx        # Reusable hero with laptop+phone visual
│       ├── hero-visual.tsx         # Laptop + phone composition
│       ├── consultation-dialog.tsx # Modal form
│       └── page-router.tsx         # Hash-based router
└── lib/
    ├── services-data.ts            # 6 service definitions
    └── case-studies-data.ts        # Case study data
```

## API Endpoints

### POST `/api/consultation`
Saves a consultation request to the database.

**Body:**
```json
{
  "fullName": "Jane Rivera",
  "email": "jane@company.com",
  "phone": "+1 (555) 000-0000",
  "company": "Rivera & Co.",
  "service": "Website Design & Development",
  "budget": "$15K – $50K",
  "message": "We need a new website..."
}
```

### POST `/api/newsletter`
Saves a newsletter subscription.

**Body:**
```json
{
  "email": "user@example.com",
  "source": "footer"
}
```

## License

© 2026 Techi Champs. All rights reserved.
