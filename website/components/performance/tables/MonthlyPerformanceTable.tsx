const performance = [
  {
    month: "August 2026",
    trades: 28,
    wins: 25,
    losses: 2,
    breakeven: 1,
    winRate: "89.3%",
    roi: "+38.4%",
  },
  {
    month: "July 2026",
    trades: 31,
    wins: 27,
    losses: 3,
    breakeven: 1,
    winRate: "87.1%",
    roi: "+34.1%",
  },
  {
    month: "June 2026",
    trades: 26,
    wins: 23,
    losses: 2,
    breakeven: 1,
    winRate: "88.5%",
    roi: "+29.8%",
  },
];

export default function MonthlyPerformanceTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Monthly Performance
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Mock trading performance for the current testing phase.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-slate-800 text-left text-sm uppercase tracking-wide text-slate-400">
            <tr>
              <th className="pb-4">Month</th>
              <th className="pb-4 text-center">Trades</th>
              <th className="pb-4 text-center">Wins</th>
              <th className="pb-4 text-center">Losses</th>
              <th className="pb-4 text-center">BE</th>
              <th className="pb-4 text-center">Win Rate</th>
              <th className="pb-4 text-right">ROI</th>
            </tr>
          </thead>

          <tbody>
            {performance.map((item) => (
              <tr
                key={item.month}
                className="border-b border-slate-800 transition hover:bg-slate-800/40"
              >
                <td className="py-4 font-semibold text-white">
                  {item.month}
                </td>

                <td className="py-4 text-center text-slate-300">
                  {item.trades}
                </td>

                <td className="py-4 text-center text-emerald-400">
                  {item.wins}
                </td>

                <td className="py-4 text-center text-red-400">
                  {item.losses}
                </td>

                <td className="py-4 text-center text-yellow-400">
                  {item.breakeven}
                </td>

                <td className="py-4 text-center font-semibold text-emerald-400">
                  {item.winRate}
                </td>

                <td className="py-4 text-right font-bold text-emerald-400">
                  {item.roi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
