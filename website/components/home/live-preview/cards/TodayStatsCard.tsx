export default function TodayStatsCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-6 text-lg font-bold text-white">
       Today Activity
      </h3>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span className="text-slate-400">
            Signals Today
          </span>

          <span className="font-bold text-white">
            3
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Active Trades
          </span>

          <span className="font-bold text-white">
            2
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Today ROI
          </span>

          <span className="font-bold text-emerald-400">
            +2.8%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Win Rate
          </span>

          <span className="font-bold text-emerald-400">
            91%
          </span>
        </div>
      </div>
    </div>
  );
}
