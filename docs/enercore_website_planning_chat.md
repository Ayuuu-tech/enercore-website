# Enercore Website Planning — Full Chat Transcript

---

## User

**URL shared:** https://www.enercore.co/

> I want to make a new website for my company. This is the current one. Give the full architecture of the website and full explanation in MVP terms and every detail a website designer and maker need to know.

---

## Assistant — Website Architecture

After reviewing the current Enercore website (home, services, and projects pages), here is the full architecture breakdown:

### Current Site Analysis

**Pages found:**
- **Home** — Video hero, services carousel (5 services), projects carousel (4 projects), WhatsApp CTA
- **Services (`/service.html`)** — 5 services with image-text alternating layout: Capex Open Access, Design & Engineering, OPEX Projects, Asset Management, End-to-End Consulting
- **Projects (`/project.html`)** — Portfolio: Mahagenco (10 MWp), Solar Sense LLP (100 MW), Caparo Maruti India (500 kWp), Jalsa Resort (100 kWp), FSTP Projects Rajasthan

**Current tech:** Plain HTML/CSS/JS, static files, no CMS, no framework.

---

### Site Map — Pages

| Page | Type | Purpose |
|---|---|---|
| Home | Core | Hero, services overview, project highlights, CTA |
| Services | Core | 5 service offerings in depth with benefits |
| Projects | Core | Portfolio with filterable project cards |
| About Us | New (MVP add) | Team, mission, founding story, credentials |
| Contact | New (MVP add) | Lead capture form, WhatsApp, office info |
| Blog / Insights | V2 | Solar education content, SEO articles |

---

### Page-by-Page Section Breakdown

#### Home Page
1. **Hero section** — Full-viewport video/image background. Headline: "Cut Your Electricity Bills by 50% — Zero Upfront Cost". Subline + 2 CTAs: "Get a Free Quote" and "See Our Projects".
2. **Value stats bar** — 3–4 numbers: MW installed, clients served, years of experience, states operated. Builds instant credibility.
3. **Services overview** — 5 cards in a grid: OPEX, Capex EPC, Design & Engineering, Asset Management, Consulting. Each links to the full Services page.
4. **Featured projects** — 3 highlighted projects with photo, name, capacity (MW/kWp), and service type. "View all projects" link.
5. **Testimonials / logos** — Client logos strip (Mahagenco, Caparo Maruti, etc.) or 2–3 quote cards. Trust signal before the CTA.
6. **CTA banner** — "Ready to go solar? Let's talk." Full-width block with WhatsApp button and contact form link.

#### Services Page
1. **Page hero** — Short banner: "Comprehensive Solar Solutions" with breadcrumb.
2. **OPEX / PPA service block** — Left image, right text. Key message: 0 upfront, up to 50% savings, we handle everything.
3. **Capex EPC service block** — Right image, left text. End-to-end EPC, high-quality components, on-time delivery.
4. **Design & Engineering block** — SLD, PVSyst, BOM, layouts — list deliverables explicitly.
5. **Asset Management block** — O&M, monitoring, uptime guarantee.
6. **End-to-End Consulting block** — Technical, legal, regulatory compliance. Mention MNRE, DISCOM regulations.
7. **CTA at bottom** — "Not sure which service fits you? Talk to our team."

#### Projects Page
1. **Page hero** — Show total installed capacity as a stat (e.g., "110+ MW installed").
2. **Filter bar** — Filter by service type: All / OPEX / Capex / Design & Engineering / Asset Mgmt.
3. **Project card grid** — Each card: project photo, client name, capacity (kWp/MW), location/state, service type badge, short 1-line description. Click opens a modal or detail page.
4. **Project detail (modal or page)** — Challenge, solution, outcome. Capacity, timeline, location. Real photos. Quote from client if available.
5. **Bottom CTA** — "Have a project in mind? Let's talk about it."

#### About Page (New)
1. **Mission statement** — Who you are in 2–3 sentences. Founding year, what drives Enercore.
2. **Team section** — Founders/leadership photos, names, roles, brief bios. Essential trust signal for B2B.
3. **Why us — differentiators** — 3–5 specific claims: states covered, certifications, response time, technology partners.
4. **Certifications & partnerships** — MNRE empanelment, equipment brand logos, ISO/quality certifications.
5. **CTA** — "Let's work together" — contact page link.

#### Contact Page (New)
1. **Lead capture form** — Fields: Name, Company, Email, Phone, State, Project Type (dropdown), Message. Max 6 fields for MVP.
2. **Alternative contact methods** — WhatsApp button (prominent), email address, phone number.
3. **Office / location info** — City, state. Google Maps embed optional.
4. **Response expectation** — "We respond within 24 hours on business days."

#### Blog / Insights (V2)
1. **Blog listing page** — Card grid: article thumbnail, title, date, category tag, 1-line excerpt.
2. **Article detail page** — Full article with author, date, reading time, share buttons. SEO-optimised.
3. **Content strategy** — Target search terms: "open access solar Punjab", "OPEX solar vs Capex", "solar PPA agreement India", "reduce electricity bill industrial".
4. **CMS requirement** — Blog requires a CMS (Sanity, Contentful). Non-negotiable for non-dev publishing.

---

### Global Components (On Every Page)

| Component | Details |
|---|---|
| Navbar | Logo left, nav links center, "Get a Quote" CTA right. Sticky on scroll. Mobile hamburger. |
| Footer | Logo, tagline, quick links, social icons, WhatsApp number, copyright. |
| WhatsApp floating button | Fixed bottom-right bubble → wa.me/+919560457193 |
| Quote CTA banner | Full-width dark strip before footer. "Ready to switch to solar?" + button. |
| Cookie / analytics notice | Minimal cookie bar on first visit. Required for GA4. |
| SEO meta layer | Title, description, og:image, canonical URL unique per page. Schema.org LocalBusiness markup. |

---

### Primary User Flow

```
Land on Home → Read hero value prop → Browse Services → View Projects (proof) → Hit Contact / WhatsApp → Lead captured ✓
```

---

### MVP vs Later Phases

| MVP (Launch) | Version 2 | Version 3 (Growth) |
|---|---|---|
| Home page | About Us page | Client login portal |
| Services page | Blog / Insights | CRM integration (Zoho) |
| Projects page | Testimonials section | Multi-language (Hindi) |
| Contact page | Project detail pages | Case study PDFs |
| WhatsApp CTA | Live chat widget | Tender/RFP download section |
| Mobile responsive | Solar savings calculator | |
| Basic SEO meta tags | | |
| Google Analytics | | |

---

### Technical Specifications

| Spec | Recommendation | Notes |
|---|---|---|
| Stack | Next.js (React) + Tailwind CSS | Fast, SEO-friendly (SSG), easy to deploy |
| Hosting | Vercel or Netlify | Free tier sufficient for MVP; auto HTTPS |
| CMS | Sanity.io or Contentful | Lets non-dev team update projects/services |
| Forms | React Hook Form + EmailJS or Formspree | No backend needed for MVP contact form |
| Analytics | Google Analytics 4 | Track WhatsApp clicks as conversion events |
| Images | Next/Image with WebP | Critical — solar project photos must load fast |
| Performance | Target LCP < 2.5s | Core Web Vitals affect Google ranking |
| Domain | Keep enercore.co or .in | Retain existing domain for SEO continuity |
| SSL | Auto via Vercel/Netlify | Always HTTPS — required for trust |
| Mobile | Mobile-first design | Most Indian B2B leads come via mobile |

---

### Design Direction

| Area | Recommendation |
|---|---|
| Colour palette | Deep navy + solar amber accent. White backgrounds. Avoid generic greens — feel premium, not environmental NGO. |
| Typography | Bold modern display font (e.g. Syne or Clash Display) for headlines. Clean readable body (e.g. DM Sans or Plus Jakarta Sans). |
| Imagery | Real project photos are the #1 trust signal. Replace all stock photos. Drone shots of installations if possible. |
| Tone | Confident, technical, B2B. Speak to CFOs and facility managers — ROI and reliability, not generic "green future" language. |

---

### Key Observations About the Current Site

The existing site is a single scrolling page that relies on stock images, has no About section (so clients can't verify who they're dealing with), no standalone Contact page, and the project descriptions are copy-pasted from the Services page. For B2B solar clients making decisions in the lakhs-to-crores range, that's a trust gap.

**The 5 decisions that matter most for this rebuild:**

1. **Real project photos first.** Mahagenco (10 MWp), Solar Sense LLP (100 MW), and Caparo Maruti installations are impressive credentials. Drone shots or even clean ground-level photos will outperform any design work.
2. **Put the OPEX/PPA message front and center.** "Zero upfront, 50% savings" is an extremely strong hook. It should be in the hero headline.
3. **A team/about page is non-negotiable.** Indian industrial clients want to know who they're dealing with.
4. **The WhatsApp CTA is smart — keep it, but add a form.** Both channels should be equally prominent.
5. **Use Next.js with a headless CMS.** When you add projects or want to publish a policy explainer article, you shouldn't need a developer.

---

## User

> Now I want to build a whole new website because the current one is outdated. I want to make a new website with latest tech and latest technical specs so give me a full roadmap for this.

---

## Assistant — Full Build Roadmap

### Tech Stack (2025–26 Best-in-Class)

#### Frontend Framework
- **Next.js 15** — App Router, React Server Components, SSG/SSR hybrid
- **React 19** — Latest stable, concurrent features
- **TypeScript 5** — Type safety, better developer experience

#### Styling & UI
- **Tailwind CSS v4** — Utility-first, lightning-fast builds
- **Framer Motion** — Page & scroll animations, micro-interactions
- **Radix UI** — Accessible headless primitives (dialogs, dropdowns, etc.)

#### Content & CMS
- **Sanity v3** — Headless CMS with live preview, real-time collaboration
- **GROQ queries** — Sanity's powerful content query language
- **Portable Text** — Rich text rendering with custom components

#### Hosting & Infrastructure
- **Vercel** — Edge network, automatic CI/CD, built-in analytics
- **Cloudflare DNS** — Fast DNS, DDoS protection, performance proxy
- **GitHub Actions** — Automated deploy pipeline, Lighthouse CI

#### Forms & Lead Capture
- **React Hook Form** — Performant, minimal re-render form state
- **Zod** — Schema validation (client + server side)
- **Resend** — Transactional email API (reliable delivery, no spam)

#### Analytics & SEO
- **Google Analytics 4 + GTM** — Event tracking, conversion goals
- **next-sitemap** — Auto sitemap generation on every build
- **Schema.org JSON-LD** — LocalBusiness, Service, FAQPage rich results

#### Performance
- **next/image** — Auto WebP conversion, lazy loading, no CLS
- **ISR (60s revalidate)** — Fresh CMS content at static-site speed
- **Lighthouse CI** — Score tracking on every pull request

#### Code Quality
- **ESLint + Prettier** — Consistent formatting across the codebase
- **Husky + lint-staged** — Pre-commit hooks prevent bad code merging
- **Playwright** — End-to-end tests for key user flows

---

### Target Performance Benchmarks

| Metric | Target | What It Means |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | How fast main content appears |
| INP (Interaction to Next Paint) | < 100ms | How fast the page responds to clicks |
| CLS (Cumulative Layout Shift) | < 0.1 | No layout jumping as page loads |
| Lighthouse Score | 95+ | Google's overall quality score (all pages) |

---

### Phase-by-Phase Roadmap

---

#### Phase 1 — Foundation & Setup (Week 1–2)

**Team:** 1 developer | **Cost:** ~₹0 (tooling setup)

| # | Task | Tag | Details |
|---|---|---|---|
| 1 | Domain & DNS setup | Infra | Point enercore.co to Vercel. Set up Cloudflare as DNS with proxy for DDoS protection and speed. |
| 2 | GitHub repo + branching strategy | Dev | main → staging → feature branches. Protect main, require PR reviews. Set up .gitignore, README. |
| 3 | Next.js 15 project init | Dev | `npx create-next-app@latest` with App Router, TypeScript, Tailwind v4, ESLint. Commit baseline. |
| 4 | Vercel project + environments | Infra | Connect GitHub repo. Configure production (main) and preview (PR) deployments. Set env vars. |
| 5 | Sanity v3 studio setup | Dev | `sanity init` inside /studio. Define first schemas: Project, Service, TeamMember. Deploy studio to sanity.io/manage. |
| 6 | Design tokens & global styles | Design | Define CSS variables: brand navy, amber accent, font sizes, spacing scale, border radii. Set up Tailwind config. |
| 7 | Font selection & loading | Design | Use `next/font` for zero CLS. Recommended: Syne (headings) + DM Sans (body). Test rendering at key sizes. |
| 8 | Husky + lint-staged + Prettier | Dev | Pre-commit hooks catch errors before push. Saves hours of debugging. |

---

#### Phase 2 — Core Page Build (Week 3–6)

**Team:** 1–2 developers + designer | **Cost:** Dev time heavy

| # | Task | Tag | Details |
|---|---|---|---|
| 1 | Global layout: Navbar + Footer | Dev | Sticky nav with scroll behaviour. Mobile hamburger (Radix Dialog). Footer with links, socials, WhatsApp. Used on every page. |
| 2 | Home — hero section | Dev | Full-viewport section. Background video (`next/video`) or high-res image. Headline, sub, 2 CTA buttons. Framer Motion entrance animation. |
| 3 | Home — stats bar | Dev | Animated number counters (MW installed, clients, years). Triggers on scroll-into-view via IntersectionObserver. |
| 4 | Home — services grid | Dev | 5 service cards from Sanity CMS. Icon + title + short desc + link. Hover lift animation. |
| 5 | Home — featured projects | Dev | 3 project cards pulled from Sanity. Real photo, capacity badge, service type. Dynamic via GROQ query. |
| 6 | Home — testimonials + logos | Dev | Client logo strip (marquee scroll). 2–3 quote cards. Data from Sanity testimonials schema. |
| 7 | Services page — 5 service blocks | Dev | Alternating image-text layout per service. Bullet-point benefits. All content from Sanity — no hardcoded copy. |
| 8 | Projects page — filter grid | Dev | Filter pills (All / OPEX / Capex / Design / O&M). CSS Grid card layout. Filter logic in React state, no page reload. |
| 9 | Project detail — dynamic route | Dev | `/projects/[slug]` — dynamic route. Challenge, solution, outcome, photos, capacity, location, service type from Sanity. |
| 10 | Contact page — lead form | Dev | React Hook Form + Zod validation. On submit: POST to Next.js API route → Resend email to team. Honeypot spam field. |
| 11 | About page — team + mission | Dev | Team grid with photos from Sanity. Mission statement. Certifications logos. Why-us differentiators. |
| 12 | WhatsApp floating button | Dev | Fixed-position bubble. Pulse animation. Links to wa.me/+919560457193. Visible on all pages via `layout.tsx`. |

---

#### Phase 3 — Polish, Performance & SEO (Week 7–8)

**Team:** 1 developer + content writer | **Cost:** ~₹0 additional

| # | Task | Tag | Details |
|---|---|---|---|
| 1 | Metadata & Open Graph per page | Dev | `next/metadata` in each layout/page. Unique title, description, og:image (1200×630). Twitter card tags. |
| 2 | Schema.org JSON-LD | Dev | LocalBusiness schema on home. Service schema on services page. FAQPage where relevant. Improves Google rich results. |
| 3 | Sitemap + robots.txt | Dev | `next-sitemap` package. Auto-generates /sitemap.xml and /robots.txt on every build. Submit to Google Search Console. |
| 4 | Image optimisation audit | Dev | All images through `next/image`. Explicit width/height on every image (eliminates CLS). Convert to WebP. Lazy load below fold. |
| 5 | Core Web Vitals audit | Infra | Run Lighthouse CI on every page. Target: LCP <2.5s, INP <100ms, CLS <0.1. Fix any failing metrics. |
| 6 | Scroll & entrance animations | Design | Framer Motion: staggered card reveals, hero text animation, section fade-ins. Respect `prefers-reduced-motion`. |
| 7 | Solar savings calculator | Dev | Interactive widget on Home or Services. Input: monthly bill, location type. Output: estimated savings. Pure client-side JS. |
| 8 | All page content written & loaded | Content | Final copy for all pages entered into Sanity CMS. All project photos uploaded and optimised. Client review round. |
| 9 | Cross-browser & mobile QA | Dev | Test on Chrome, Safari, Firefox. Test on iOS Safari and Android Chrome. Minimum 375px viewport width. |
| 10 | Accessibility pass | Dev | All images have alt text. Keyboard navigation works. Colour contrast passes WCAG AA. Focus rings visible. |

---

#### Phase 4 — Launch (Week 9)

**Team:** Full team | **Milestone:** Go-live

| # | Task | Tag | Details |
|---|---|---|---|
| 1 | Staging final review | Content | Full walkthrough on staging.enercore.co (Vercel preview). All stakeholders sign off. Content freeze. |
| 2 | Environment variables audit | Infra | All secrets in Vercel env vars — never in code. SANITY_API_TOKEN, RESEND_API_KEY, GA4 measurement ID. |
| 3 | Analytics & conversion events | Dev | GA4 events: WhatsApp click, form submit, CTA button click, phone number click. Test all events in DebugView. |
| 4 | 301 redirects for old URLs | Dev | If old pages had traffic (check Search Console), add redirects in `next.config.js` to preserve SEO equity. |
| 5 | DNS cutover to Vercel | Infra | Update A records / CNAME to Vercel IP. TTL flush. Monitor for 24h. SSL auto-provision via Vercel. |
| 6 | Google Search Console — resubmit | Content | Add new sitemap URL. Request indexing for all key pages. Monitor coverage report for errors. |
| 7 | Uptime monitoring setup | Infra | BetterUptime or UptimeRobot free tier. Alert to team WhatsApp if site goes down. |
| 8 | Backup & recovery plan | Infra | Sanity data is cloud-hosted. Vercel has instant rollback per deployment. Document the rollback process. |

---

#### Phase 5 — Growth (Month 2–6, Post-Launch)

**Team:** Developer + content writer | **Ongoing**

| # | Task | Tag | Details |
|---|---|---|---|
| 1 | Blog / Insights section | Content | New Sanity schema: BlogPost. Listing page + detail page `/blog/[slug]`. Target 2 SEO articles/month. |
| 2 | Case study deep-dives | Content | Expand project pages: problem statement, approach, results with data, client quote. Downloadable PDF version. |
| 3 | Live chat integration | Dev | Tawk.to or Crisp (both free tier). Integrates with WhatsApp. Assign team members. Set offline hours. |
| 4 | CRM integration | Dev | Connect contact form to Zoho CRM or HubSpot free tier. Leads auto-create contacts. Assign follow-up tasks. |
| 5 | Solar calculator v2 | Dev | Add state-specific tariff data. Multi-industry inputs. Email results to user — captures email as lead. |
| 6 | Client portal (MVP) | Dev | Private /portal route behind auth (NextAuth.js). Clients log in to see their plant's monthly O&M reports. |
| 7 | Multi-language support | Dev | `next-intl` package. English + Hindi. Route: /en/ and /hi/. Sanity content fields duplicated per locale. |
| 8 | Performance regression monitoring | Infra | Lighthouse CI scores tracked over time. Alert if any page drops below 90. Monthly review in Search Console. |

---

### Effort Breakdown by Discipline

| Discipline | Share | Notes |
|---|---|---|
| Development | 45% | Largest effort — framework, CMS integration, all pages |
| Design / UI | 25% | Figma mockups, design system, animations |
| Content / copy | 20% | Usually the bottleneck — start gathering this immediately |
| Infra / DevOps | 10% | DNS, CI/CD, monitoring, env setup |

---

### Why These Choices Over Alternatives

**Next.js over plain React** — Google indexes React SPAs poorly. Static pages served from Vercel's edge network will rank higher and load faster than the current site.

**Sanity over WordPress** — WordPress is a security liability, needs constant plugin updates, and its themes make it nearly impossible to build a premium-looking custom design. Sanity is just a database with a nice editor. Your developer builds exactly what you want, and your team edits content through a clean dashboard.

**Framer Motion for animations** — The current site has zero motion. A polished solar company website in 2026 should have scroll-triggered reveals, number counters for stats, and smooth page transitions.

**Resend for emails** — When someone submits the contact form, Resend delivers it reliably with a proper transactional email API. No more forms that silently fail or land in spam.

---

### First Three Actions to Take Right Now

1. **Book a photographer** to shoot your best 3–4 project installations — real photos are the most important asset on the new site
2. **Write down your top client names** and what service you did for them, so the projects page has real content from day one
3. **Share this roadmap with your developer** — the folder structure and Sanity schema can be generated immediately to start the build

---

*Document generated from Claude.ai conversation — Enercore Website Planning Session*
*Model: Claude Sonnet 4.6 | Date: April 2026*
