# Enercore Website

Official website for **Enercore New Energy Pvt. Ltd.** — industrial solar solutions across India.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## Project Structure

```
Enercore_Website/
├── enercore-site/          ← Next.js app (all code lives here)
│   ├── public/             ← Static assets (logo, images)
│   ├── src/
│   │   ├── app/            ← Pages & API routes (Next.js App Router)
│   │   │   ├── page.tsx            Home
│   │   │   ├── layout.tsx          Root layout (header, footer, providers)
│   │   │   ├── globals.css         Global styles & design tokens
│   │   │   ├── about/              About page
│   │   │   ├── services/           Services page
│   │   │   ├── projects/           Projects listing + detail pages
│   │   │   ├── contact/            Contact page
│   │   │   └── api/contact/        Contact form API route (email)
│   │   ├── components/
│   │   │   ├── home/       ← Sections used only on the homepage
│   │   │   │   ├── hero-section.tsx
│   │   │   │   ├── stats-section.tsx
│   │   │   │   ├── services-section.tsx
│   │   │   │   ├── scrollytelling-section.tsx
│   │   │   │   ├── projects-section.tsx
│   │   │   │   ├── testimonials-section.tsx
│   │   │   │   └── cta-banner.tsx
│   │   │   ├── layout/     ← Persistent site-wide components
│   │   │   │   ├── site-header.tsx
│   │   │   │   ├── site-footer.tsx
│   │   │   │   ├── preloader.tsx
│   │   │   │   └── smooth-scroll-provider.tsx
│   │   │   ├── ui/         ← Reusable primitive components
│   │   │   │   ├── animated-counter.tsx
│   │   │   │   ├── custom-cursor.tsx
│   │   │   │   ├── icons.tsx
│   │   │   │   ├── scroll-reveal.tsx
│   │   │   │   └── whatsapp-float.tsx
│   │   │   ├── forms/      ← Form components
│   │   │   │   └── contact-form.tsx
│   │   │   └── projects/   ← Projects-specific components
│   │   │       └── projects-filter.tsx
│   │   └── lib/
│   │       ├── site-data.ts    ← ALL site content (company info, services, projects, team)
│   │       └── utils.ts        ← Utility helpers
│   ├── .env.local.example  ← Copy to .env.local and fill in values
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── package.json
└── docs/                   ← Design references & planning documents
    ├── design plan and effects.md
    ├── enercore_website_planning_chat.md
    └── references/         ← Screen recordings, logo references
```

---

## Getting Started

```bash
cd enercore-site
npm install
cp .env.local.example .env.local   # fill in SMTP/email credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Key Files for Content Changes

| What you want to change | File |
|---|---|
| Company info, phone, address, email | `src/lib/site-data.ts` → `company` |
| Stats (12 MW, 6 projects, etc.) | `src/lib/site-data.ts` → `stats` |
| Services list | `src/lib/site-data.ts` → `services` |
| Projects list | `src/lib/site-data.ts` → `projects` |
| Team members | `src/lib/site-data.ts` → `team` |
| Testimonials | `src/lib/site-data.ts` → `testimonials` |
| Nav links | `src/lib/site-data.ts` → `navLinks` |
| Global colors / fonts | `src/app/globals.css` |
| Logo | `public/logo.png` |

---

## Environment Variables

Copy `.env.local.example` to `.env.local`:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=
NEXT_PUBLIC_SITE_URL=https://www.enercore.co
```

---

## Deployment

This project is configured for **Vercel**. Push to GitHub and connect the repo on [vercel.com](https://vercel.com). Set the root directory to `enercore-site` in Vercel project settings.
