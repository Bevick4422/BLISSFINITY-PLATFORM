"use client";
import { BookOpen, BarChart3, ShieldCheck, Brain } from "lucide-react";

import Link from "next/link";
import CommunityTestimonials from "./CommunityTestimonials";

const values = [
  {
    number: "01",
    title: "Mission",
    text: "We educate traders and create real opportunities in Web3. We help people learn, grow, and position themselves better - beyond signals, toward skill.",
    icon: "",
  },
];

const resources = [
  {
    eyebrow: "START HERE",
    title: "New to Trading",
    text: "Start with the fundamentals. Learn how markets work, how trades are structured, and the key concepts every new trader should understand.",
  },
  {
    eyebrow: "LEARN FUTURES",
    title: "Futures Basics",
    text: "Understand futures contracts, long and short positions, leverage, margin, liquidation, and the mechanics behind futures trading.",
  },
  {
    eyebrow: "MANAGE RISK",
    title: "Risk Management",
    text: "Learn why protecting capital matters, how position sizing works, and how disciplined risk management fits into a sustainable trading process.",
  },
  {
    eyebrow: "BUILD DISCIPLINE",
    title: "Trading Psychology",
    text: "Understand the emotional side of trading and develop habits that help reduce impulsive decisions, overtrading, and revenge trading.",
  },
];

function Logo() {
  return (
    <img
      src="/images/Blissfinity-logo.png.jpeg"
      alt="Blissfinity"
      className="h-14 w-14 rounded-full object-cover"
    />
  );
}

export default function BlissfinityLanding() {
  return (
    <main className="overflow-hidden bg-[#070b14] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-12">
          <a href="#home" className="flex items-center">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#home" className="text-sm font-semibold text-white transition hover:text-[#d299fa]">
              Home
            </a>
            <a href="#story" className="text-sm font-semibold text-white/75 transition hover:text-white">
              Our Journey
            </a>
            <a href="#founder" className="text-sm font-semibold text-white/75 transition hover:text-white">
              Founder
            </a>
            <a href="#mentorship" className="text-sm font-semibold text-white/75 transition hover:text-white">
              Mentorship
            </a>
            <a href="#resources" className="text-sm font-semibold text-white/75 transition hover:text-white">
              Resources
            </a>
            <a href="#testimonials" className="text-sm font-semibold text-white/75 transition hover:text-white">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-semibold text-white/75 transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="/login"
            className="hidden rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#070b14] transition hover:-translate-y-0.5 hover:bg-[#f5f2ff] sm:inline-flex"
          >
            Enter Platform
            <span className="ml-2 text-[#2274da]">&#8594;</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#070b14]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#2274da]/25 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-10rem] top-[-8rem] h-[36rem] w-[36rem] rounded-full bg-[#ff379d]/20 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-12rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#d299fa]/15 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1500px] items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-7 h-px w-24 bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />

          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.94] tracking-[-0.045em] text-white sm:text-7xl lg:text-[7.25rem]">
            Blissfinity
          </h1>

          <div className="mt-7 h-px w-full max-w-[620px] bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#c8d0df] sm:text-xl sm:leading-9">
            Blissfinity is a Web3 trading and education community. The community
            provides cryptocurrency market analysis, trading education, trading
            setups and resources designed to help members develop practical
            market-analysis skills.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/login" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#070b14] transition hover:-translate-y-0.5 hover:bg-[#f5f2ff]">
              Enter Platform
              <span className="ml-3 text-[#2274da]">&#8594;</span>
            </a>

            <a href="#journey" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d299fa]/60 hover:bg-white/[0.06]">
              Explore Blissfinity
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[460px] items-center justify-center lg:min-h-[600px]">
          <div aria-hidden="true" className="absolute h-[20rem] w-[20rem] rounded-full border border-[#2274da]/30 sm:h-[25rem] sm:w-[25rem] lg:h-[31rem] lg:w-[31rem]" style={{ animation: "blissOrbit 18s linear infinite" }}>
            <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#2274da] shadow-[0_0_24px_#2274da]" />
          </div>

          <div aria-hidden="true" className="absolute h-[16rem] w-[16rem] rounded-full border border-[#ff379d]/25 sm:h-[20rem] sm:w-[20rem] lg:h-[25rem] lg:w-[25rem]" style={{ animation: "blissOrbitReverse 13s linear infinite" }}>
            <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#ff379d] shadow-[0_0_24px_#ff379d]" />
          </div>

          <div aria-hidden="true" className="absolute h-[15rem] w-[15rem] rounded-full bg-[#2274da]/20 blur-[70px] sm:h-[20rem] sm:w-[20rem] lg:h-[25rem] lg:w-[25rem]" style={{ animation: "blissPulse 5s ease-in-out infinite" }} />

          <div className="relative z-10 flex h-[16rem] w-[16rem] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[0_0_90px_rgba(34,116,218,0.22)] backdrop-blur-md sm:h-[20rem] sm:w-[20rem] lg:h-[25rem] lg:w-[25rem]">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#2274da]/35 via-[#d299fa]/20 to-[#ff379d]/30 blur-2xl" style={{ animation: "blissPulse 4s ease-in-out infinite" }} />
            <img
              src="/images/Blissfinity-logo.png.jpeg"
              alt="Blissfinity"
              className="relative z-10 h-32 w-32 object-contain drop-shadow-[0_0_35px_rgba(255,55,157,0.28)] sm:h-40 sm:w-40 lg:h-48 lg:w-48"
            />
          </div>

          <span className="absolute right-[8%] top-[15%] h-2 w-2 rounded-full bg-[#d299fa] shadow-[0_0_18px_#d299fa]" />
          <span className="absolute bottom-[17%] left-[9%] h-2.5 w-2.5 rounded-full bg-[#ff379d] shadow-[0_0_20px_#ff379d]" />
          <span className="absolute right-[16%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-[#2274da] shadow-[0_0_16px_#2274da]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes blissOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blissOrbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes blissPulse {
          0%, 100% { transform: scale(0.96); opacity: 0.7; }
          50% { transform: scale(1.04); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </section>

      {/* STORY + MISSION */}
      <section
        id="story"
        className="scroll-mt-24 border-t border-white/10 bg-[#0a061b] px-6 py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1600px] items-stretch gap-20 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT - JOURNEY */}
          <div>
            <div className="text-[13px] font-semibold tracking-[0.34em] text-[#2274da]">
              OUR JOURNEY
            </div>

            <h2 className="mt-9 max-w-[800px] font-serif text-[62px] leading-[1.02] tracking-[-0.035em] sm:text-[78px]">
              From a private circle to a trading family.
            </h2>

            <div className="mt-12 max-w-[850px] space-y-7 font-serif text-[21px] leading-[1.85] text-[#c8d2e2]">
              <p>
                Blissfinity was officially founded by BlissOnchain on May 1st,
                2025, beginning as a small, close-knit Discord community built
                around one idea: traders grow faster when they learn, execute,
                and stay accountable together.
              </p>

              <p>
                What started as a private circle quickly becamea living
                trading family. By November the community expanded to Telegram,
                and it has since grown into a space of 2,000+ members spanning
                new traders, active futures traders, alpha seekers, and Web3
                enthusiasts.
              </p>

              <p>
                The focus has never been hype for its own sake. Blissfinity
                exists to educate, sharpen decision-making, and help people
                position themselves better in the market-regardless of where
                they started.
              </p>

              <p>
                The community is built around practical market work: real-time
                futures calls, chart context, liquidity awareness, risk
                discipline, and structured market analysis.
              </p>
            </div>
          </div>

          {/* RIGHT - MISSION */}
          <div className="flex h-full items-center">
            <div className="flex min-h-[560px] w-full flex-col justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101b3d] via-[#17133a] to-[#24104a] p-10 shadow-[0_30px_100px_rgba(34,116,218,0.14)] sm:min-h-[650px] sm:p-14">

              <div className="text-[13px] font-semibold tracking-[0.34em] text-[#ff9be0]">
                MISSION
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />

              <h3 className="max-w-[700px] font-serif text-[48px] leading-[1.08] tracking-[-0.03em] text-white sm:text-[60px]">
                We educate traders and create real opportunities in Web3.
              </h3>

              <p className="mt-8 max-w-[700px] text-[20px] leading-[1.8] text-[#c8d2e2]">
                We help people learn, grow, and position themselves better - beyond signals, toward skill.
              </p>

            </div>
          </div>

        </div>
      </section>
      {/* FOUNDER */}
      <section
        id="founder"
        className="scroll-mt-24 bg-[#070b14] px-6 py-32 lg:px-20"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <div className="text-[13px] font-semibold tracking-[0.34em] text-[#ff9be0]">
              THE FOUNDER
            </div>
            <h2 className="mt-8 font-serif text-[64px] leading-none tracking-[-0.04em] sm:text-[84px]">
              One vision. One standard.
            </h2>
          </div>

          <div className="mt-20 grid overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1424] lg:grid-cols-2">
            <div className="relative min-h-[560px] overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(210,153,250,.30),transparent_32%),linear-gradient(135deg,#172d55,#20173a)]">
              <img
                src="/images/blissonchain-founder.png"
                alt="BlissOnchain"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-10 sm:p-14 lg:p-16">
              <div className="text-[13px] font-semibold tracking-[0.34em] text-[#2274da]">
                FOUNDER
              </div>
              <h3 className="mt-7 font-serif text-[58px] leading-none">
                BlissOnchain
              </h3>
              <div className="mt-5 text-[14px] tracking-[0.28em] text-[#aebbd4]">
                FOUNDER, BLISSFINITY
              </div>
              <div className="my-10 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />

              <div className="space-y-6 text-[18px] leading-[1.9] text-[#bdc9dc]">
                <p>
                  When I started Blissfinity, the goal was simple: to impact
                  lives in any way possible.
                </p>
                <p>
  I never had the kind of opportunity I'm giving to people today. I have always wanted to create a platform where people could learn, acquire skills and grow, while having access to trading opportunities through the signals we provide.
</p>
<p>
  Blissfinity was never meant to be just about signals. The bigger vision has always been education, skill acquisition, growth and opportunity.
</p>
                <p>
                  I want members to become better traders, develop their own
                  understanding of the market, and eventually become capable of
                  making informed decisions for themselves.
                </p>
              </div>

              <div className="mt-12 border-l-2 border-[#ff379d] pl-6 font-serif text-[25px] leading-[1.4] text-white">
                Give people the opportunity you once wished you had.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section
        id="mentorship"
        className="scroll-mt-24 border-t border-white/10 bg-[#070b14] px-6 py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT */}
          <div>
            <div className="text-[13px] font-semibold tracking-[0.34em] text-[#2274da]">
              MENTORSHIP
            </div>

            <h2 className="mt-7 max-w-4xl font-serif text-[54px] leading-[0.98] text-white sm:text-[68px]">
              Learn the skill.
              <br />
              Build the confidence.
              <br />
              Keep the knowledge.
            </h2>

            <div className="mt-9 max-w-2xl text-[18px] leading-[1.85] text-[#bdc9dc]">
              <p>
                Quantum Shift is a mentorship program designed to transform you
                from a complete newbie into a proficient technical analyst.
              </p>
            </div>

            <Link
              href="/login"
              className="mt-10 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#070b14] transition hover:-translate-y-0.5"
            >
              Explore Mentorship
              <span className="ml-2">&#8594;</span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex h-full items-center">
            <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101b3d] via-[#17133a] to-[#24104a] p-10 shadow-[0_30px_100px_rgba(34,116,218,0.14)] sm:p-14">

              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2274da]/15 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#ff379d]/10 blur-3xl" />

              <div className="relative">
                <div className="text-[12px] font-semibold tracking-[0.34em] text-[#d299fa]">
                  BLISSFINITY
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />

                <h3 className="font-serif text-[44px] leading-none text-white sm:text-[54px]">
                  Mentorship
                </h3>

                <p className="mt-6 max-w-md text-[16px] leading-7 text-[#bdc9dc]">
                  A practical mentorship experience built to develop your
                  understanding of the market, technical analysis, and the
                  discipline required to trade with greater confidence.
                </p>

                <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-3 text-sm text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2274da]" />
                    Learn
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d299fa]" />
                    Practice
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff379d]" />
                    Develop
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* RESOURCES - stronger 4-card layout */}
            {/* RESOURCES */}
      <section id="resources" className="scroll-mt-24 bg-[#070b14] px-6 py-24 lg:px-9">
        <div className="mx-auto max-w-[1700px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[780px]">
              <div className="text-[13px] font-semibold tracking-[0.34em] text-[#2274da]">RESOURCES</div>
              <h2 className="mt-7 text-[48px] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[66px]">
                Build knowledge before you build positions.
              </h2>
            </div>
            <p className="max-w-[820px] text-[18px] leading-[1.75] text-[#9fb1cc] sm:text-[20px]">
              Trading is not only about finding entries. A strong foundation in market mechanics, risk, and discipline is essential to understanding the decisions behind every trade.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex min-h-[520px] flex-col rounded-[28px] border border-[#273147] bg-[#101827] p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#29162f] text-[#ff379d]">
                <BookOpen className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="mt-9 text-[15px] font-semibold tracking-[0.08em] text-[#7894ba]">START HERE</div>
              <h3 className="mt-5 text-[29px] font-semibold leading-tight text-white">New to Trading</h3>
              <p className="mt-7 text-[17px] leading-[1.8] text-[#9fb1cc]">Start with the fundamentals. Learn how markets work, how trades are structured, and the key concepts every new trader should understand.</p>
              <a href="#contact" className="mt-auto pt-10 text-[17px] font-semibold text-white">Explore <span className="ml-2 text-[#d299fa]">-&gt;</span></a>
            </article>

            <article className="flex min-h-[520px] flex-col rounded-[28px] border border-[#273147] bg-[#101827] p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#29162f] text-[#ff379d]">
                <BarChart3 className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="mt-9 text-[15px] font-semibold tracking-[0.08em] text-[#7894ba]">LEARN FUTURES</div>
              <h3 className="mt-5 text-[29px] font-semibold leading-tight text-white">Futures Basics</h3>
              <p className="mt-7 text-[17px] leading-[1.8] text-[#9fb1cc]">Understand futures contracts, long and short positions, leverage, margin, liquidation, and the mechanics behind futures trading.</p>
              <a href="#contact" className="mt-auto pt-10 text-[17px] font-semibold text-white">Explore <span className="ml-2 text-[#d299fa]">-&gt;</span></a>
            </article>

            <article className="flex min-h-[520px] flex-col rounded-[28px] border border-[#273147] bg-[#101827] p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#29162f] text-[#ff379d]">
                <ShieldCheck className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="mt-9 text-[15px] font-semibold tracking-[0.08em] text-[#7894ba]">MANAGE RISK</div>
              <h3 className="mt-5 text-[29px] font-semibold leading-tight text-white">Risk Management</h3>
              <p className="mt-7 text-[17px] leading-[1.8] text-[#9fb1cc]">Learn why protecting capital matters, how position sizing works, and how disciplined risk management fits into a sustainable trading process.</p>
              <a href="#contact" className="mt-auto pt-10 text-[17px] font-semibold text-white">Explore <span className="ml-2 text-[#d299fa]">-&gt;</span></a>
            </article>

            <article className="flex min-h-[520px] flex-col rounded-[28px] border border-[#273147] bg-[#101827] p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#29162f] text-[#ff379d]">
                <Brain className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="mt-9 text-[15px] font-semibold tracking-[0.08em] text-[#7894ba]">BUILD DISCIPLINE</div>
              <h3 className="mt-5 text-[29px] font-semibold leading-tight text-white">Trading Psychology</h3>
              <p className="mt-7 text-[17px] leading-[1.8] text-[#9fb1cc]">Understand the emotional side of trading and develop habits that help reduce impulsive decisions, overtrading, and revenge trading.</p>
              <a href="#contact" className="mt-auto pt-10 text-[17px] font-semibold text-white">Explore <span className="ml-2 text-[#d299fa]">-&gt;</span></a>
            </article>
          </div>
        </div>
      </section>

      {/* AFFILIATES */}
      <section id="affiliates" className="relative px-6 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d299fa]">STRONGER TOGETHER</p>
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our affiliates.</h2>
      <p className="mt-5 text-base leading-7 text-white/60">Partners and services connected to the Blissfinity community.</p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <article className="group rounded-[28px] border border-white/10 bg-[#0d1220] p-7 transition-colors hover:border-[#2274da]/60 sm:p-8">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-[#070b14] ring-1 ring-white/10">
          <img src="/images/hyro-trader.png" alt="Hyro Trader" className="h-full w-full object-cover" />
        </div>
        <h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">Hyro Trader</h3>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d299fa]">AFFILIATE</p>
        <div className="my-7 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />
        <div className="flex flex-col gap-4">
          <a href="https://x.com/hyrotrader_com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#d299fa]">
            Visit Hyro Trader on X
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M18.25 5.75 12.5 11.5l-2.25-2.25-1.5 1.5L11 13l-5.75 5.75 1.5 1.5L12.5 14.5l2.25 2.25 1.5-1.5L14 13l5.75-5.75-1.5-1.5Z"/><path d="M14.75 5H19v4.25h-2V8.414l-8.586 8.586-1.414-1.414L15.586 7H14.75V5Z"/></svg>
          </a>
          <a href="https://hyrotrader.com/?coupon=bliss10&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff379d] transition-colors hover:text-[#d299fa]">
            Get 10% discount on your HyroTrader account
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </a>
        </div>
      </article>

      <article className="group rounded-[28px] border border-white/10 bg-[#0d1220] p-7 transition-colors hover:border-[#2274da]/60 sm:p-8">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-white/10">
          <img src="/images/mexc-logo.png" alt="MEXC" className="h-full w-full object-cover" />
        </div>
        <h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">MEXC</h3>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d299fa]">EXCHANGE PARTNER</p>
        <div className="my-7 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />
        <div className="flex flex-col gap-4">
          <a href="https://x.com/MEXC?s=20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#d299fa]">
            Visit MEXC on X
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M18.25 5.75 12.5 11.5l-2.25-2.25-1.5 1.5L11 13l5.75-5.75-1.5-1.5L14 13l5.75-5.75-1.5-1.5Z"/><path d="M14.75 5H19v4.25h-2V8.414l-8.586 8.586-1.414-1.414L15.586 7H14.75V5Z"/></svg>
          </a>

          <a href="https://www.mexc.co/acquisition/custom-sign-up?shareCode=mexc-1UfL8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff379d] transition-colors hover:text-[#d299fa]">
            Trade on MEXC
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </a>
        </div>
      </article>
    </div>
  </div>
</section>
{        

        

/* CONTACT */}
        <CommunityTestimonials />

<section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#070b14] via-[#101b3d] to-[#24104a]"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-20 lg:py-24">

          {/* LEFT - CONTACT CONTENT */}
          <div className="relative z-20">

            <div className="mb-10 inline-flex items-center rounded-full border border-white/25 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.24em] text-white">
              LET'S CONNECT
            </div>

            

            <p className="mt-10 max-w-[650px] text-[18px] leading-8 text-white/75">Do you have questions or Interested in collaborations? Reach out through any of our channels and stay connected</p>

            <div className="mt-12 max-w-[750px] space-y-5">

              {/* EMAIL */}
              <a
                href="mailto:blissfinity71@gmail.com"
                className="group flex items-center justify-between rounded-[22px] border border-white/20 bg-[#070b14]/65 px-7 py-6 backdrop-blur-sm transition-all duration-300 hover:border-[#d299fa]/70 hover:bg-[#101b3d]/85"
              >
                <span className="flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8ddff] text-[#7c45ff]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[12px] font-bold uppercase tracking-[0.2em] text-white/65">
                      EMAIL US
                    </span>
                    <span className="mt-1 block font-sans text-[21px] font-bold text-white">
                      blissfinity71@gmail.com
                    </span>
                  </span>
                </span>

                <span className="ml-6 text-2xl text-white transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </a>

              {/* X */}
              <a
                href="https://x.com/BlissfinityHQ"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[22px] border border-white/20 bg-[#070b14]/65 px-7 py-6 backdrop-blur-sm transition-all duration-300 hover:border-[#d299fa]/70 hover:bg-[#101b3d]/85"
              >
                <span className="flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8ddff] text-black">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.61l-5.18-6.77L5.04 22H1.78l7.61-8.7L1.25 2h6.78l4.68 6.19L18.244 2Zm-1.15 17.77h1.8L7.02 4.13H5.09L17.094 19.77Z" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[12px] font-bold uppercase tracking-[0.2em] text-white/65">
                      GENERAL INQUIRIES
                    </span>
                    <span className="mt-1 block font-sans text-[21px] font-bold text-white">
                      @BlissfinityHQ
                    </span>
                  </span>
                </span>

                <span className="ml-6 text-2xl text-white transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </a>

              {/* TELEGRAM */}
              <a
                href="https://t.me/+vylDC5R258g3OTI0"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[22px] border border-white/20 bg-[#070b14]/65 px-7 py-6 backdrop-blur-sm transition-all duration-300 hover:border-[#2274da]/70 hover:bg-[#101b3d]/85"
              >
                <span className="flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8ddff] text-[#2274da]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M21.5 4.5 18.3 19c-.24 1.03-.87 1.29-1.76.8l-4.83-3.56-2.33 2.24c-.26.26-.48.48-.98.48l.35-4.92 8.95-8.08c.39-.35-.09-.55-.61-.2L6.03 12.52 1.28 11.03c-1.03-.32-1.05-1.03.22-1.53L20.07 2.2c.88-.32 1.65.2 1.43 2.3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[12px] font-bold uppercase tracking-[0.2em] text-white/65">
                      COMMUNITY
                    </span>
                    <span className="mt-1 block font-sans text-[21px] font-bold text-white">
                      Join the community
                    </span>
                  </span>
                </span>

                <span className="ml-6 text-2xl text-white transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT - TRADING ARTWORK */}
          <div className="relative flex min-h-[560px] items-center justify-center lg:min-h-[760px]">
            <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-[#2274da]/20 via-[#d299fa]/10 to-[#ff379d]/20" />

            <img
              src="/images/blissfinity-trader-banner-art-crop.png"
              alt="Blissfinity trading workspace"
              className="relative z-10 w-full max-w-[850px] object-contain drop-shadow-[0_35px_90px_rgba(0,0,0,0.5)]"
            />
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#070b14] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_.7fr_.7fr]">
            <div>
              <div className="flex items-center gap-4">
                <Logo />
                <div>
                  <div className="font-serif text-[30px] text-white">
                    BLISSFINITY
                  </div>
                  <div className="mt-1 text-[11px] tracking-[0.28em] text-[#8491aa]">
                    TRADING PLATFORM
                  </div>
                </div>
              </div>
              <p className="mt-8 max-w-[620px] text-[17px] leading-[1.8] text-[#8fa0ba]">
                A trading community and ecosystem built around education,
                discipline, accountability and structured market work.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[18px] font-semibold">Quick links</h3>
              <div className="mt-7 space-y-4 text-[#8fa0ba]">
                <Link className="block hover:text-white" href="#story">Our Story</Link>
                <Link className="block hover:text-white" href="#resources">Resources</Link>
                <Link className="block hover:text-white" href="#affiliates">Affiliates</Link>
                <Link className="block hover:text-white" href="#contact">Contact</Link>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-[18px] font-semibold">Platform</h3>
              <div className="mt-7 space-y-4 text-[#8fa0ba]">
                <Link className="block hover:text-white" href="/login">Log in</Link>
                <Link className="block hover:text-white" href="/register">Create account</Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-[14px] text-[#75829a] sm:flex-row">
            <span>(c) 2026 Blissfinity. All rights reserved.</span>
            <span>Built around clarity.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}













































