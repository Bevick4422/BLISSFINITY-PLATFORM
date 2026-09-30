import { worstTrade } from "../mock-data";

export default function WorstTradeCard() {
  return (
    <div className="rounded-2xl border border-red-700 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          ðŸ“‰ Worst Trade
        </h2>

        <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400">
          Loss
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-3xl font-bold text-white">
          {worstTrade.pair}
        </p>

        <p className="text-lg text-blue-400">
          {worstTrade.direction}
        </p>

        <p className="text-4xl font-bold text-red-400">
          {worstTrade.profit}
        </p>

        <p className="text-lg text-slate-400">
          {worstTrade.percent}
        </p>
      </div>
    </div>
  );
}
