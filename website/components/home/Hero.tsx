import DashboardPreview from "./DashboardPreview"
import Stats from "./Stats"
import BackgroundGlow from "./BackgroundGlow"

export default function Hero() {
  return (
   <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-14 pb-24">

  <BackgroundGlow />

  <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

    ...
        {/* Left */}

        <div className="flex-1">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Professional Trading Platform
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
            Professional
            <br />
            Crypto Futures
            <br />
            Signals
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Trade with confidence using disciplined market analysis,
            structured trade planning, and transparent performance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-blue-500">
              View Performance
            </button>

          </div>

          <Stats />

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">
          <DashboardPreview />
        </div>

      </div>
    </section>
  )
}