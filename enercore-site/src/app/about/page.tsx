import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TeamIcon, IconTarget, IconLayers, IconMapPin, IconShield } from "@/components/ui/icons";
import { team, stats, journey, customers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Enercore's vision, mission, and journey — delivering clean, reliable solar energy for India's industrial future.",
};

const aboutPillars = [
  {
    Icon: IconTarget,
    title: "Cleantech Innovation",
    desc: "We deliver cutting-edge green energy solutions that transform how businesses power their operations.",
  },
  {
    Icon: IconShield,
    title: "RE100 Achievement",
    desc: "Help customers reach renewable energy targets while reducing power bills by up to 90%.",
  },
  {
    Icon: IconLayers,
    title: "Climate Action",
    desc: "Our solutions significantly reduce carbon footprints, directly contributing to climate change mitigation.",
  },
  {
    Icon: IconMapPin,
    title: "Energy Access Solutions",
    desc: "We address energy disparity through flexible CAPEX, OPEX, and Open Access renewable energy plants tailored to diverse business needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — dark green */}
      <section className="bg-[#1b291f] dot-grid relative overflow-hidden pt-36 pb-24 text-white">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_75%_35%,rgba(144,201,85,0.08),transparent_50%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ffe55d]">About Enercore</p>
            <h1
              className="font-heading text-5xl font-semibold md:text-6xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Powering India&apos;s Clean Energy Future
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#8f9c93] leading-relaxed">
              Founded in July 2024, Enercore New Energy Pvt Ltd delivers scalable,
              easy-to-adopt solar solutions for factories, warehouses, and production facilities
              across India — combining technical depth with measurable business ROI.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats — mid dark green */}
      <section className="border-b border-[#274b30] bg-[#203726] py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-heading text-5xl font-semibold text-[#ffe55d]"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#8f9c93]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#fbfaf4] py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#274b30]/50">Our Purpose</p>
            <h2
              className="font-heading text-4xl font-semibold text-[#1b291f] md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Vision &amp; Mission
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision */}
            <ScrollReveal direction="left">
              <div className="rounded-lg bg-[#1b291f] p-8 h-full">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#ffe55d]">Vision</p>
                <ul className="space-y-4">
                  {[
                    "Accelerate India's industrial transition to clean, sustainable energy sources",
                    "Deliver scalable, easy-to-adopt solar solutions designed for business efficiency",
                    "Build enduring partnerships founded on reliability, transparency, and mutual trust",
                    "Drive measurable value through reduced energy costs and enhanced operational resilience",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[#8f9c93] text-sm leading-relaxed">
                      <span className="mt-1.5 h-1 w-4 shrink-0 rounded-full bg-[#ffe55d]/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            {/* Mission */}
            <ScrollReveal direction="right">
              <div className="rounded-lg border-2 border-[#1b291f]/15 bg-white p-8 h-full">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#274b30]/50">Mission</p>
                <ul className="space-y-4">
                  {[
                    "Redefine how Industrial India grows — cleaner, smarter, and self-reliant",
                    "Make solar the most dependable energy partner for factories, warehouses, and production facilities",
                    "Lead the transition toward a future where sustainability powers progress at every industrial level",
                    "Empower businesses to achieve energy independence while maximizing profitability",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[#274b30]/65 text-sm leading-relaxed">
                      <span className="mt-1.5 h-1 w-4 shrink-0 rounded-full bg-[#274b30]/30" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Pillars */}
      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#274b30]/50">What We Stand For</p>
            <h2
              className="font-heading text-4xl font-semibold text-[#1b291f] md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Built Around Impact
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-[#274b30]/60 leading-relaxed">
              Everything we do is guided by five core commitments — from cleantech innovation to empowering the next generation of renewable energy professionals.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aboutPillars.map(({ Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="card-hover rounded-lg border border-[#d8dbd9]/50 bg-white p-6 shadow-sm h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1b291f]/6 text-[#1b291f]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.01em" }}>{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#274b30]/60">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          {/* RenewX callout */}
          <ScrollReveal className="mt-5">
            <div className="rounded-lg bg-[#fbfaf4] border border-[#d8dbd9]/40 p-6 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1b291f]/6 text-[#1b291f]">
                <IconLayers size={20} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-[#1b291f]">RenewX Training</h3>
                <p className="mt-1 text-xs text-[#274b30]/60 leading-relaxed">
                  Our dedicated training vertical bridges the skill gap in renewable energy, empowering the next generation of clean energy professionals across India.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey — dark green */}
      <section className="bg-[#1b291f] py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ffe55d]">Our Journey</p>
            <h2
              className="font-heading text-4xl font-semibold text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Milestones
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />
            <div className="space-y-10">
              {journey.map((item, i) => (
                <div
                  key={item.date}
                  className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                      <div className={`rounded-lg border p-5 ${item.isUpcoming ? "border-[#ffe55d]/25 bg-[#274b30]" : "border-white/8 bg-[#274b30]"}`}>
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-2 ${item.isUpcoming ? "bg-[#ffe55d]/15 text-[#ffe55d]" : "bg-white/8 text-[#8f9c93]"}`}>
                          {item.isUpcoming ? "Upcoming" : "Completed"}
                        </span>
                        <p className="font-heading text-xs font-bold text-[#ffe55d] uppercase tracking-widest">{item.date}</p>
                        <h3 className="mt-1 font-heading text-sm font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>{item.label}</h3>
                        <p className="mt-1 text-xs text-[#8f9c93] leading-relaxed">{item.description}</p>
                      </div>
                    </ScrollReveal>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                    <div className={`h-3 w-3 rounded-full border-2 border-[#1b291f] ${item.isUpcoming ? "bg-[#ffe55d]" : "bg-[#90c955]"}`} />
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Customers — warm off-white */}
      <section className="bg-[#fbfaf4] py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#274b30]/50">Our Partners</p>
            <h2
              className="font-heading text-4xl font-semibold text-[#1b291f] md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Major Customers
            </h2>
            <p className="mt-4 text-sm text-[#274b30]/60 max-w-xl mx-auto leading-relaxed">
              Enercore partners with leading industrial players and corporations, delivering reliable and sustainable energy solutions tailored to their needs.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {customers.map((client) => (
              <StaggerItem key={client.name}>
                <div className="card-hover rounded-lg border border-[#d8dbd9]/50 bg-white p-5 shadow-sm text-center">
                  <p className="font-heading text-sm font-semibold text-[#1b291f]">{client.name}</p>
                  <p className="mt-1 text-xs text-[#274b30]/40">{client.sector}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#274b30]/50">Our People</p>
            <h2
              className="font-heading text-4xl font-semibold text-[#1b291f] md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              The Team Behind the Projects
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="card-hover rounded-lg border border-[#d8dbd9]/50 bg-white p-7 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1b291f]/6 text-[#1b291f]">
                    <TeamIcon name={member.iconName} size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.02em" }}>{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#90c955]">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#274b30]/65">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — dark green */}
      <section className="bg-[#1b291f] py-20 text-center">
        <ScrollReveal>
          <h2
            className="font-heading text-3xl font-semibold text-white md:text-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-sm text-[#8f9c93]">Share your requirement — we&apos;ll come back with a plan.</p>
          <Link
            href="/contact"
            className="btn-lift mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffe55d] px-8 py-4 text-sm font-semibold text-[#1b291f]"
          >
            Get in Touch →
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
