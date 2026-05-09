import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { IconTarget, IconBolt, IconCheck } from "@/components/ui/icons";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { projects } from "@/lib/site-data";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: `${project.name} (${project.capacity}) in ${project.location}. ${project.summary}`,
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const blocks = [
    { label: "The Challenge", content: project.challenge, Icon: IconTarget },
    { label: "Our Solution",  content: project.solution,  Icon: IconBolt  },
    { label: "The Outcome",   content: project.outcome,   Icon: IconCheck },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b291f]/95 via-[#1b291f]/80 to-[#1b291f]/50" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1b291f] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-10">
          <ScrollReveal>
            <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition hover:text-white">
              ← Back to projects
            </Link>
            <div className="flex flex-wrap gap-2 mb-5">
              {[project.capacity, project.location, project.serviceType].map((tag) => (
                <span key={tag} className="rounded-full bg-white/12 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                  {tag}
                </span>
              ))}
              {project.status === "Upcoming" && (
                <span className="rounded-full bg-[#ffe55d] px-4 py-1 text-sm font-bold text-[#1b291f]">
                  Upcoming
                </span>
              )}
            </div>
            <h1
              className="font-heading text-5xl font-semibold md:text-6xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#8f9c93] leading-relaxed">{project.summary}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case study blocks */}
      <article className="bg-white py-20">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {blocks.map(({ label, content, Icon }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="rounded-lg border border-[#d8dbd9]/50 bg-white p-6 shadow-sm h-full">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1b291f]/6 text-[#1b291f]">
                      <Icon size={16} />
                    </div>
                    <h2 className="font-heading text-base font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.02em" }}>
                      {label}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-[#274b30]/65">{content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Project specifications table */}
          {project.details && project.details.length > 0 && (
            <ScrollReveal delay={0.2} className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#ffe55d]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#274b30]/55">
                  Project Specifications
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#d8dbd9]/60 shadow-sm">
                <table className="w-full border-collapse">
                  <tbody>
                    {project.details.map(({ label, value }, i) => (
                      <tr
                        key={label}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#f7f6ef]"}
                      >
                        <td
                          className="w-2/5 border-b border-[#d8dbd9]/50 px-6 py-4 align-top"
                          style={{ borderRight: "1px solid rgba(216,219,217,0.5)" }}
                        >
                          <span className="font-heading text-sm font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.01em" }}>
                            {label}
                          </span>
                        </td>
                        <td className="border-b border-[#d8dbd9]/50 px-6 py-4 align-top">
                          <span className="text-sm text-[#274b30]/80 leading-relaxed">
                            {value}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          )}

          {/* Photo gallery */}
          {((project.images && project.images.length > 0) || (project.videos && project.videos.length > 0)) && (
            <ScrollReveal delay={0.25} className="mt-14">
              <h3
                className="mb-6 font-heading text-xl font-semibold text-[#1b291f]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Site Photos
              </h3>
              <ProjectGallery images={project.images} videos={project.videos} projectName={project.name} />
            </ScrollReveal>
          )}

          {/* Next steps */}
          <ScrollReveal delay={0.3} className="mt-14">
            <div className="rounded-lg bg-[#1b291f] p-8 text-center text-white">
              <h3 className="font-heading text-2xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
                Have a similar project in mind?
              </h3>
              <p className="mt-3 text-sm text-[#8f9c93] leading-relaxed">
                Let&apos;s design the right solution for your facility.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-lift rounded-full bg-[#ffe55d] px-7 py-3 text-sm font-semibold text-[#1b291f]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/projects"
                  className="btn-lift rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white hover:bg-white/8"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
