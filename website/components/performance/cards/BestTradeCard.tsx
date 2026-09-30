import { bestTrade } from "../mock-data";

export default function BestTradeCard() {
  return (
    <div className="rounded-2xl border border-emerald-700 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          ðŸ† Best Trade
        </h2>

        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
          Winner
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-3xl font-bold text-white">
          {bestTrade.pair}
        </p>

        <p className="text-lg text-blue-400">
          {bestTrade.direction}
        </p>

        <p className="text-4xl font-bold text-emerald-400">
          {bestTrade.profit}
        </p>

        <p className="text-lg text-slate-400">
          {bestTrade.percent}
        </p>
      </div>
    </div>
  );
}
