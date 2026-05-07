import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { IconQuote, IconStar } from "@/components/ui/icons";
import { testimonials } from "@/lib/site-data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} size={12} className="text-[#ffe55d]" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#1b291f] py-24 relative overflow-hidden">
      {/* Subtle world-map dot pattern (CleanMax testimonials bg) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #d8dbd9 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <ScrollReveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ffe55d]">
            Client Voice
          </p>
          <h2
            className="font-heading text-4xl font-semibold text-white md:text-5xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Built on Trust. Measured in ROI.
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <StaggerItem key={i}>
              <blockquote className="flex h-full flex-col rounded-lg border border-white/8 bg-[#274b30] p-7">
                <IconQuote size={28} className="text-[#ffe55d]/25 mb-5" />
                <StarRating count={item.rating} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-[#8f9c93]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-7 flex items-center gap-3 border-t border-white/8 pt-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffe55d] text-xs font-bold text-[#1b291f]">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.author}</p>
                    <p className="text-xs text-[#8f9c93]">{item.company}</p>
                  </div>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
