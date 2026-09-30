import { recentSignals } from "../mock-data";

export default function SignalMonitor() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Signal Monitor
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Monitor signals processed by the Railway scanner.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-slate-800 text-left text-sm uppercase tracking-wide text-slate-400">
            <tr>
              <th className="pb-4">Pair</th>
              <th className="pb-4">Direction</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {recentSignals.map((signal) => (
              <tr
                key={signal.pair}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="py-4 font-semibold text-white">
                  {signal.pair}
                </td>

                <td
                  className={`py-4 font-medium ${
                    signal.direction === "BUY"
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {signal.direction}
                </td>

                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      signal.status === "Sent"
                        ? "bg-blue-500/20 text-blue-400"
                        : signal.status === "TP1"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {signal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
