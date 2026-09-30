import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 bg-[#070b14]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(34,116,218,.32),transparent_32%),radial-gradient(circle_at_74%_35%,rgba(210,153,250,.24),transparent_30%),radial-gradient(circle_at_92%_70%,rgba(255,55,157,.24),transparent_34%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/20 via-[#070b14]/10 to-[#070b14]/25" />
      <div className="absolute -bottom-40 left-[35%] h-[30rem] w-[30rem] rounded-full bg-[#ff379d]/10 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#2274da]/35 bg-[#2274da]/10 px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#2274da] shadow-[0_0_18px_rgba(34,116,218,.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b9d4f7]">
              Founded May 1, 2025
            </span>
          </div>

          <h1 className="font-serif text-6xl font-medium leading-[.93] tracking-[-0.045em] text-white sm:text-7xl lg:text-[7rem]">
            Built around
            <span className="block bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d] bg-clip-text text-transparent">
              clarity.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-lg leading-8 text-[#b9c7db] sm:text-xl">
            Blissfinity is a trading community and ecosystem built around
            education, disciplined execution, accountability and a more
            structured approach to the market.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#070b14] transition hover:bg-[#eef4ff]"
            >
              Enter Platform
              <ArrowRight className="h-4 w-4 text-[#2274da] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#story"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d299fa]/50 hover:bg-white/[0.08]"
            >
              Explore Blissfinity
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[430px] lg:block">
          <div className="absolute right-0 top-1/2 h-[410px] w-[410px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#2274da]/35 via-[#d299fa]/25 to-[#ff379d]/35 blur-[2px]" />
          <div className="absolute right-6 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-white/15 bg-[#0b1020]/80 shadow-[0_0_90px_rgba(34,116,218,.2)] backdrop-blur-xl" />
          <div className="absolute right-14 top-[24%] w-[290px] rounded-3xl border border-white/10 bg-[#0d1424]/90 p-7 shadow-2xl">
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#7ea9dd]">
              The Blissfinity idea
            </div>
            <div className="mt-5 font-serif text-3xl leading-tight text-white">
              Learn.
              <br />
              Execute.
              <br />
              Stay accountable.
            </div>
            <div className="mt-7 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />
            <div className="mt-5 flex justify-between text-[10px] uppercase tracking-[0.2em] text-[#8291a8]">
              <span>Community</span>
              <span>Process</span>
              <span>Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
