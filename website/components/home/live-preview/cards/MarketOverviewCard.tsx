export default function MarketOverviewCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-6 text-lg font-bold text-white">
        Market Overview
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-400">
            Market Trend
          </span>

          <span className="font-semibold text-emerald-400">
            Bullish
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            BTC Dominance
          </span>

          <span className="font-semibold text-white">
            61.4%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Fear & Greed
          </span>

          <span className="font-semibold text-white">
            72
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Market Volatility
          </span>

          <span className="font-semibold text-yellow-400">
            Medium
          </span>
        </div>
      </div>
    </div>
  );
}
