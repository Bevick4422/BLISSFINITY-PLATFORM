import { UserRound } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-[#070b14] py-24 sm:py-28">
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[#2274da]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-[#ff379d]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d299fa]">
            The founder
          </p>
          <h2 className="mt-5 font-serif text-5xl text-white sm:text-6xl">
            One vision. One standard.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c1322] lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#2274da]/20 via-[#d299fa]/10 to-[#ff379d]/20 p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(210,153,250,.22),transparent_38%)]" />
            <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/20 bg-[#0a1020] shadow-[0_0_90px_rgba(34,116,218,.25)]">
              <UserRound className="h-24 w-24 text-[#d299fa]" strokeWidth={1.1} />
            </div>
          </div>

          <div className="p-9 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2274da]">
              Founder
            </p>
            <h3 className="mt-4 font-serif text-5xl text-white">BlissOnchain</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#9aa8bd]">
              Founder, Blissfinity
            </p>
            <div className="my-8 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />
            <p className="max-w-2xl text-base leading-8 text-[#b7c1d3]">
              Blissfinity began with a simple belief: traders grow faster when
              they learn, execute and stay accountable together. The community
              has grown since its founding, but that principle remains at the
              center of the ecosystem.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#b7c1d3]">
              Today, Blissfinity is being shaped as a home for traders who want
              more than noise-a place to study the market, share wins and
              misses honestly, and build consistency over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

