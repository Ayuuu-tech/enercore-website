import Image from "next/image";
import { clientLogos } from "@/lib/site-data";

export function ClientsSection() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-[#f7f6ef] border-y border-[#e8eae7] py-16 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-12 text-center">
        <div className="mb-3 flex items-center justify-center gap-2.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-[#ffe55d]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#274b30]/55">
            Trusted By
          </p>
        </div>
        <h2
          className="font-heading text-3xl font-semibold text-[#1b291f] md:text-4xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          Companies Powering Their Future with Enercore
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#f7f6ef] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#f7f6ef] to-transparent" />

        <div className="marquee-inner flex gap-5">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="group flex shrink-0 flex-col items-center gap-4 rounded-2xl border border-[#e8eae7] bg-white px-8 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              style={{ minWidth: "200px" }}
            >
              {/* Logo */}
              <div className="relative flex h-16 w-40 items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[#e8eae7]" />

              {/* Name + sector */}
              <div className="text-center">
                <p
                  className="font-heading text-sm font-semibold text-[#1b291f] leading-snug"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {client.name}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#274b30]/40">
                  {client.sector}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
