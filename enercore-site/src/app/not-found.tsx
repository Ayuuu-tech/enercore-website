import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero-bg dot-grid flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
      <p className="font-heading text-[8rem] font-bold leading-none text-white/10">404</p>
      <h1 className="font-heading mt-4 text-3xl font-bold text-white md:text-4xl">Page Not Found</h1>
      <p className="mt-3 max-w-sm text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-amber px-7 py-3 text-sm font-semibold text-brand-navy transition hover:bg-amber-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
