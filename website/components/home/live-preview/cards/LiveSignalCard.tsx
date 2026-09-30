export default function LiveSignalCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">
          Live Signal
        </h3>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          LIVE
        </span>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-bold text-white">
          BTCUSDT
        </h2>

        <p className="mt-2 inline-flex rounded-lg bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-400">
          LONG
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-400">Entry</p>

          <p className="mt-1 font-semibold text-white">
            118,250
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Stop Loss</p>

          <p className="mt-1 font-semibold text-red-400">
            117,000
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Take Profit 1</p>

          <p className="mt-1 font-semibold text-emerald-400">
            119,600
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Take Profit 2</p>

          <p className="mt-1 font-semibold text-emerald-400">
            121,400
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-800 p-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Confluence Score
          </span>

          <span className="font-bold text-emerald-400">
            94%
          </span>
        </div>
      </div>
    </div>
  );
}
