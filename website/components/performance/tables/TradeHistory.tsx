import { tradeHistory } from "../mock-data";

export default function TradeHistory() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Trade History
        </h2>

        <span className="text-sm text-slate-400">
          Recent Closed Trades
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b border-slate-800 text-sm text-slate-400">
            <tr>
              <th className="py-3">Pair</th>
              <th className="py-3">Direction</th>
              <th className="py-3">Result</th>
              <th className="py-3">R:R</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {tradeHistory.map((trade, index) => (
              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="py-4 font-medium text-white">
                  {trade.pair}
                </td>

                <td className="py-4 text-blue-400">
                  {trade.direction}
                </td>

                <td
                  className={`py-4 font-semibold ${
                    trade.result === "WIN"
                      ? "text-emerald-400"
                      : trade.result === "LOSS"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }`}
                >
                  {trade.result}
                </td>

                <td className="py-4 text-white">
                  {trade.rr}
                </td>

                <td className="py-4 text-slate-400">
                  {trade.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
