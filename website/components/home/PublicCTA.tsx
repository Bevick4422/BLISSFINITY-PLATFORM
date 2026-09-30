import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PublicCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb]">
      <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#2274da]/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-[#ff379d]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-10 lg:py-32">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
          Enter the platform
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-[#070b14] sm:text-6xl">
          The public story ends here.
          <span className="block text-slate-400">The trading experience begins inside.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Create your account or log in to access the private Blissfinity platform.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-[#070b14] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#2274da]"
          >
            Create account
            <ArrowUpRight className="h-4 w-4 text-[#d299fa]" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-[#2274da] hover:text-[#2274da]"
          >
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}
