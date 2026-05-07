import Link from "next/link";
import Image from "next/image";
import { company, navLinks } from "@/lib/site-data";

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Twitter",  href: "#", icon: "𝕏"  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1b291f] text-[#d8dbd9]">
      {/* Main grid */}
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        {/* Brand col */}
        <div className="md:col-span-2">
          <Link href="/" className="group mb-5 inline-block">
            <div className="rounded-md bg-white/10 px-3 py-2 transition-all duration-200 group-hover:bg-white/15">
              <Image
                src="/logo.png"
                alt="Enercore New Energy Pvt Ltd"
                width={791}
                height={316}
                style={{ height: "36px", width: "auto" }}
              />
            </div>
          </Link>
          <p className="max-w-xs text-sm text-[#8f9c93] leading-relaxed">
            {company.tagline}
          </p>
          {/* Social links — CleanMax lift on hover */}
          <div className="mt-6 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 text-xs text-[#8f9c93] transition-all duration-200 hover:border-white/25 hover:text-white hover:-translate-y-0.5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#8f9c93] transition-colors duration-150 hover:text-white hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-[#8f9c93]">
            <li className="leading-relaxed">{company.address}</li>
            <li>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-150 hover:text-white"
              >
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors duration-150 hover:text-white"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-[#8f9c93] md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="hover:text-white transition-colors">Designed for modern industrial solar.</span>
        </div>
      </div>
    </footer>
  );
}
