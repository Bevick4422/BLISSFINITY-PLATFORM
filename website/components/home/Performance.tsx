export default function Performance() {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Performance
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Transparent Performance Tracking
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every completed signal contributes to a measurable track record.
            Blissfinity is designed to show performance from recorded trades
            rather than promotional estimates or hypothetical results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Performance Preview */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                Equity Curve
              </h3>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-400">
                Awaiting Verified Data
              </span>
            </div>

            <div className="flex h-72 flex-col items-center justify-center rounded-2xl bg-slate-800 px-6 text-center">
              <p className="text-lg font-semibold text-slate-300">
                Performance tracking is being established.
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                Verified performance metrics will be displayed here as
                completed Blissfinity signals are recorded and closed.
              </p>
            </div>
          </div>

          {/* Metrics */}

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              "Win Rate",
              "Average Risk / Reward",
              "Completed Signals",
              "Maximum Drawdown",
            ].map((metric) => (
              <div
                key={metric}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm text-slate-400">
                  {metric}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  -
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Verified results pending
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/performance"
            className="inline-flex rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500/50 hover:bg-slate-800"
          >
            View Performance
          </a>
        </div>
      </div>
    </section>
  );
}

