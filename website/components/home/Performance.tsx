const metrics = [
  { title: "Win Rate", value: "92%", note: "Sample Data" },
  { title: "Average R:R", value: "1:3", note: "Risk / Reward" },
  { title: "Signals", value: "500+", note: "Sample Data" },
  { title: "Max Drawdown", value: "6.2%", note: "Sample Data" },
]

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

          <p className="mt-6 text-lg text-slate-400">
            Every completed trade contributes to a measurable track record.
            Performance shown below is demonstration data until live results
            are available.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Chart */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-xl font-semibold text-white">
                Equity Curve
              </h3>

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                Demo
              </span>

            </div>

            <div className="flex h-72 items-center justify-center rounded-2xl bg-slate-800 text-slate-500">
              Equity Curve (Coming Soon)
            </div>

          </div>

          {/* Metrics */}

          <div className="grid gap-6 sm:grid-cols-2">

            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm text-slate-400">
                  {metric.title}
                </p>

                <h3 className="mt-3 text-4xl font-bold text-white">
                  {metric.value}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {metric.note}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}