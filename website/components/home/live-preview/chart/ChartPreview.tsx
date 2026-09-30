export default function ChartPreview() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            BTCUSDT
          </h3>

          <p className="text-sm text-slate-400">
            MEXC Futures
          </p>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
          +2.43%
        </span>
      </div>

      {/* Placeholder */}
      <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
        <div className="text-center">
          <h4 className="text-xl font-semibold text-white">
            Live MEXC Chart
          </h4>

          <p className="mt-3 text-slate-500">
            Trading chart will be connected to the MEXC API.
          </p>
        </div>
      </div>
    </div>
  );
}
