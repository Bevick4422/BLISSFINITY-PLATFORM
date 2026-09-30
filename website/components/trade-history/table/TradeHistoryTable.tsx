interface TradeHistory {
  id: number;
  symbol: string;
  direction: string;
  entry: number;
  stop_loss: number;
  tp1: number;
  tp2: number;
  result: string | null;
  rr: number | null;
  profit_percent: number | null;
  profit_usdt: number | null;
  state: string;
  created_at: string;
  closed_at: string | null;
}

interface TradeHistoryTableProps {
  trades: TradeHistory[];
}

export default function TradeHistoryTable({
  trades,
}: TradeHistoryTableProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Trade History
      </h2>

      {trades.length === 0 ? (
        <p className="text-slate-400">
          No trades found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-800">
              <tr className="text-left text-sm text-slate-400">
                <th className="pb-4">Pair</th>
                <th className="pb-4">Direction</th>
                <th className="pb-4">Entry</th>
                <th className="pb-4">TP1</th>
                <th className="pb-4">TP2</th>
                <th className="pb-4">Stop Loss</th>
                <th className="pb-4">Result</th>
                <th className="pb-4">R:R</th>
                <th className="pb-4">Profit %</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {trades.map((trade) => (
                <tr
                  key={trade.id}
                  className="border-b border-slate-800"
                >
                  <td className="py-4 font-medium text-white">
                    {trade.symbol}
                  </td>

                  <td
                    className={
                      trade.direction === "BUY"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  >
                    {trade.direction}
                  </td>

                  <td>{trade.entry}</td>

                  <td>{trade.tp1}</td>

                  <td>{trade.tp2}</td>

                  <td>{trade.stop_loss}</td>

                  <td>{trade.result ?? "-"}</td>

                  <td>{trade.rr ?? "-"}</td>

                  <td>
                    {trade.profit_percent ?? "-"}
                  </td>

                  <td>{trade.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
