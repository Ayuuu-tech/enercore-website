import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import {
  IconBolt,
  IconCheck,
  IconSun,
  IconTarget,
  IconLayers,
  IconBriefcase,
  IconBuilding,
  IconArrowRight,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "RETAP 2026 — India's First RenewedTech Program",
  description:
    "RETAP 2026 (Renewable Energy Training and Acquaintance Program) — India's first RenewedTech program. Industry training, software design, internship assurance, and placement assistance in the renewable energy sector.",
};

const problemStats = [
  { value: "9.2%", label: "India's unemployment rate rose to 9.2% in June 2024, up from 7% in May 2024 (CMIE)." },
  { value: "₹4 LPA", label: "Lowest salary package offered at IIT Bombay in 2024 — ten students accepted offers in this range." },
  { value: "₹50 L", label: "IIM-A executive MBA highest salary dropped from ₹1 crore to nearly ₹50 lakh — a 6-year low." },
];

const whyRenewable = [
  "The global renewable energy market was valued at $1.1 trillion in 2023, projected to reach $2.5 trillion by 2033 (8.5% CAGR).",
  "India is the 4th most attractive renewable energy market in the world — 4th in wind, 5th in solar, 4th in installed capacity (2024).",
  "Employs students and professionals from diverse backgrounds — not branch or stream specific.",
];

const outcomes = [
  "Identify On-grid, Off-grid and Hybrid solar technologies and their real-world applications.",
  "Learn the major components of a rooftop solar plant and their functions.",
  "Design a 2D layout of any rooftop and convert it into a 3D design using software (SketchUp / PVSyst / Helioscope).",
  "Design a solar plant based on consumer power consumption (residential / commercial / industrial).",
  "Learn the latest developments in the renewable energy sector and government initiatives.",
];

const theory = [
  "L01 — Why Renewable Energy?",
  "L02 — Conversion and Efficiency",
  "L03 — Basics of Electricity",
  "L04 — Solar Thermal",
  "L05 — Solar Electricity",
  "L06 — Wind Power",
  "L07 — Micro-Hydro",
  "L08 — Other RE Technologies",
  "L09 — Appropriate Technology",
  "L10 — Economics of RE",
];

const software = [
  "L01 — Introduction to SketchUp",
  "L02 — SketchUp Tools & Navigation",
  "L03 — Ship Design Tutorial",
  "L04 — Ship Design Advanced",
  "L05 — 2D Design of a Rooftop",
  "L06 — 2D & 3D Design of a Rooftop",
  "L07 — 2D & 3D Design Advanced",
  "L08 — Integration of Components",
  "L09 — Practice Session of 3D Rooftop Design",
  "L10 — Lab Test",
];

const experiential = [
  { Icon: IconBuilding, title: "Rooftop Visits", desc: "On-site rooftop visits and feasibility checks." },
  { Icon: IconLayers, title: "Site Analysis", desc: "Hands-on site analysis techniques." },
  { Icon: IconBolt, title: "Capacity Calculation", desc: "Real plant capacity calculation exercises." },
];

const careers = [
  "Access to a network of 247+ companies.",
  "Internship assurance — min. ₹10,000/- stipend for B.Tech, ₹15,000/- for MBA.",
  "Placement assistance at no extra charge.",
  "Placement CTC range of ₹4.2 LPA to ₹18 LPA for freshers.",
  "Startup experience for entrepreneurs.",
];

const fees = [
  {
    who: "BMU Students",
    tiers: [
      { price: "₹2,500", label: "Without software training" },
      { price: "₹3,000", label: "With software training" },
    ],
  },
  {
    who: "Non-BMU Students",
    tiers: [
      { price: "₹4,000", label: "Without software training" },
      { price: "₹4,500", label: "With software training" },
    ],
  },
];

export default function RetapPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#1b291f] dot-grid relative overflow-hidden pt-36 pb-24 text-white">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_70%_30%,rgba(144,201,85,0.12),transparent_55%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#90c955]/40 bg-[#90c955]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#90c955]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#90c955]" />
              Registration Opens Soon
            </span>
            <h1 className="font-heading mt-5 text-5xl font-semibold md:text-7xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.04 }}>
              Project <span className="text-[#90c955]">RETAP 2026</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-[#ffe55d]">
              India&apos;s First RenewedTech Program
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#8f9c93]">
              RETAP — <span className="text-white/90">Renewable Energy Training and Acquaintance Program</span> — equips
              students and professionals from every background with industry-ready skills in renewable energy,
              solar plant design software, real-world experiential learning, and guaranteed internship &amp;
              placement support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-lift inline-flex items-center gap-2 rounded-full bg-[#ffe55d] px-7 py-3 text-sm font-semibold text-[#1b291f] hover:bg-[#f5de40]"
              >
                Notify Me <IconArrowRight size={15} />
              </Link>
              <a
                href="/retap-2026-curriculum.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                View Curriculum <IconArrowRight size={15} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#90c955]">The Problem to Address</p>
            <h2 className="font-heading mt-2 text-4xl font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.03em" }}>
              Unemployment — one of India&apos;s biggest challenges
            </h2>
            <p className="mt-3 max-w-2xl text-[#274b30]/70">
              A lack of industry knowledge is cited as one of the main reasons graduates struggle to find quality roles.
            </p>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
            {problemStats.map((s) => (
              <StaggerItem key={s.value}>
                <div className="h-full rounded-2xl border border-[#e5e8e6] bg-[#fbfaf4] p-7">
                  <div className="font-heading text-4xl font-bold text-[#274b30]">{s.value}</div>
                  <p className="mt-3 text-sm leading-relaxed text-[#274b30]/70">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Solution ──────────────────────────────────────────────────── */}
      <section className="bg-[#fbfaf4] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#90c955]">Our Solution</p>
            <h2 className="font-heading mt-2 text-4xl font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.03em" }}>
              Why Renewable Energy?
            </h2>
            <p className="mt-3 text-[#274b30]/70">
              RETAP positions you at the centre of one of the fastest-growing industries on the planet.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="space-y-4">
              {whyRenewable.map((w) => (
                <li key={w} className="flex gap-3 rounded-xl border border-[#e5e8e6] bg-white p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#90c955]/20 text-[#274b30]">
                    <IconSun size={15} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#274b30]/80">{w}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Learning outcomes ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#90c955]">How RETAP Helps</p>
            <h2 className="font-heading mt-2 text-4xl font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.03em" }}>
              What you&apos;ll be able to do
            </h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2">
            {outcomes.map((o) => (
              <StaggerItem key={o}>
                <div className="flex h-full gap-3 rounded-2xl border border-[#e5e8e6] bg-[#fbfaf4] p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#274b30] text-white">
                    <IconCheck size={14} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#274b30]/80">{o}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-4 text-xs text-[#274b30]/50">
            *Software training is provided on any one of the mentioned softwares (SketchUp / PVSyst / Helioscope).
          </p>
        </div>
      </section>

      {/* ── Curriculum ────────────────────────────────────────────────── */}
      <section id="curriculum" className="bg-[#1b291f] py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#90c955]">Curriculum</p>
            <h2 className="font-heading mt-2 text-4xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
              Two tracks. Ten lessons each.
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: "Theory", icon: <IconTarget size={20} />, items: theory },
              { title: "Software", icon: <IconLayers size={20} />, items: software },
            ].map((track) => (
              <ScrollReveal key={track.title}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-center gap-2 text-[#90c955]">
                    {track.icon}
                    <h3 className="font-heading text-2xl font-semibold text-white">{track.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {track.items.map((l) => (
                      <li key={l} className="flex items-center gap-2.5 text-sm text-white/75">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#90c955]" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experiential learning ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#90c955]">Experiential Learning</p>
            <h2 className="font-heading mt-2 text-4xl font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.03em" }}>
              Making us a cut above
            </h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
            {experiential.map(({ Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-[#e5e8e6] bg-[#fbfaf4] p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#90c955]/20 text-[#274b30]">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-heading mt-4 text-lg font-semibold text-[#1b291f]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#274b30]/70">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Careers ───────────────────────────────────────────────────── */}
      <section className="bg-[#fbfaf4] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#90c955]">Career Opportunities</p>
            <h2 className="font-heading mt-2 text-4xl font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.03em" }}>
              Exposure that converts into careers
            </h2>
            <p className="mt-3 text-[#274b30]/70">
              After completing RETAP, students gain direct access to industry, internships and placements.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="space-y-3">
              {careers.map((c) => (
                <li key={c} className="flex gap-3 rounded-xl border border-[#e5e8e6] bg-white p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#274b30] text-white">
                    <IconBriefcase size={13} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#274b30]/80">{c}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Fees ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#90c955]">Fee Details</p>
            <h2 className="font-heading mt-2 text-4xl font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.03em" }}>
              Transparent, all-inclusive pricing
            </h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2">
            {fees.map((f) => (
              <StaggerItem key={f.who}>
                <div className="flex h-full flex-col rounded-2xl border border-[#e5e8e6] bg-[#fbfaf4] p-8">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#90c955]">{f.who}</span>
                  <div className="mt-4 grid grid-cols-2 gap-6">
                    {f.tiers.map((t) => (
                      <div key={t.price}>
                        <div className="font-heading text-4xl font-bold text-[#1b291f]">{t.price}</div>
                        <p className="mt-2 text-sm text-[#274b30]/70">{t.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#1b291f] py-20 text-center text-white">
        <div className="mx-auto w-full max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              In order to succeed, we must first <span className="text-[#90c955]">believe that we can.</span>
            </h2>
            <p className="mt-5 text-[#8f9c93]">Limited seats • Early access • Registration opening soon.</p>
            <Link
              href="/contact"
              className="btn-lift mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffe55d] px-8 py-3.5 text-sm font-semibold text-[#1b291f] hover:bg-[#f5de40]"
            >
              Notify Me When Registration Opens <IconArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
