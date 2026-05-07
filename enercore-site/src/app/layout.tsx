import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { Preloader } from "@/components/layout/preloader";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.enercore.co"),
  title: {
    default: "Enercore | Industrial Solar Solutions Across India",
    template: "%s | Enercore",
  },
  description:
    "Enercore delivers PPA, CAPEX, Open Access, Design & Engineering, and RenewX Training for industrial solar projects across India. 12 MW+ installed. 6+ projects.",
  keywords: ["solar energy", "OPEX solar", "CAPEX solar", "open access solar", "industrial solar India", "solar EPC", "Enercore"],
  openGraph: {
    type: "website",
    siteName: "Enercore New Energy",
    title: "Enercore | Industrial Solar Solutions Across India",
    description: "12 MW+ installed. Zero upfront PPA models. End-to-end solar across India.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enercore | Industrial Solar Solutions",
    description: "Cut energy costs by up to 90% with Enercore solar solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-white text-brand-navy">
        <CustomCursor />
        <Preloader />
        <SmoothScrollProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
