import { ArrowUpRight, BarChart3, ShieldCheck, Activity } from "lucide-react";

export default function LivePlatformPreview() {
  return (
    <section className="border-y border-white/5 bg-[#080d18] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2274da]">
              The Platform
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              One platform for analysis, signals and performance.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Blissfinity brings structured market analysis, qualified trading
              setups, risk definition and performance tracking into one
              professional trading environment.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2274da]/10">
                  <BarChart3 className="h-5 w-5 text-[#2274da]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Structured Market Analysis
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Market context and multiple timeframes are evaluated before
                    a setup is considered.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d299fa]/10">
                  <ShieldCheck className="h-5 w-5 text-[#d299fa]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Defined Risk
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Qualified setups are presented with defined invalidation,
                    stop-loss and target structure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff379d]/10">
                  <Activity className="h-5 w-5 text-[#ff379d]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Performance Tracking
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Published setups can be followed through their lifecycle
                    and recorded as part of the platform's performance history.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PLATFORM PREVIEW */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-[#2274da]/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-[#0d1422] shadow-2xl">
              {/* WINDOW BAR */}
              <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-700" />
                  <span className="h-3 w-3 rounded-full bg-slate-700" />
                  <span className="h-3 w-3 rounded-full bg-slate-700" />
                </div>

                <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-500">
                  BLISSFINITY PLATFORM
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {/* MARKET HEADER */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Market Overview
                    </p>

                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-2xl font-bold text-white">
                        BTCUSDT
                      </span>

                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                        LONG
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-white">
                      Monitoring
                    </p>

                    <p className="mt-1 text-sm text-emerald-400">
                      Structured setup
                    </p>
                  </div>
                </div>

                {/* CHART */}
                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-[#070b14]">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                        backgroundSize: "52px 52px",
                      }}
                    />

                    <svg
                      viewBox="0 0 700 260"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="blissfinityChart"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#2274da" />
                          <stop offset="50%" stopColor="#d299fa" />
                          <stop offset="100%" stopColor="#ff379d" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 205 C70 190 75 175 135 184 C190 192 195 145 250 154 C305 163 315 112 365 125 C420 140 425 83 480 101 C530 118 545 67 595 78 C635 88 660 50 700 38"
                        fill="none"
                        stroke="url(#blissfinityChart)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      <path
                        d="M0 205 C70 190 75 175 135 184 C190 192 195 145 250 154 C305 163 315 112 365 125 C420 140 425 83 480 101 C530 118 545 67 595 78 C635 88 660 50 700 38 L700 260 L0 260 Z"
                        fill="url(#blissfinityChart)"
                        opacity="0.08"
                      />
                    </svg>

                    <div className="absolute bottom-4 left-5 flex gap-2 text-xs text-slate-500">
                      <span>1H</span>
                      <span>4H</span>
                      <span className="rounded-lg bg-slate-800 px-2 py-1 text-white">
                        1D
                      </span>
                    </div>
                  </div>
                </div>

                {/* TRADE STRUCTURE */}
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-[#080d18] p-5">
                    <p className="text-xs text-slate-500">Entry</p>
                    <p className="mt-2 font-semibold text-white">
                      Defined
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-[#080d18] p-5">
                    <p className="text-xs text-slate-500">Stop Loss</p>
                    <p className="mt-2 font-semibold text-white">
                      Defined
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-[#080d18] p-5">
                    <p className="text-xs text-slate-500">Targets</p>
                    <p className="mt-2 font-semibold text-white">
                      Structured
                    </p>
                  </div>
                </div>

                {/* STATUS */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#2274da]/20 bg-[#2274da]/5 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2274da]" />
                    <span className="text-sm font-medium text-slate-200">
                      Analysis active
                    </span>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-[#2274da]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
