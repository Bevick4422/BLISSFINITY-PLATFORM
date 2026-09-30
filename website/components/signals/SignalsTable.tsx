interface Signal {
  id: string;
  pair: string;
  direction: "LONG" | "SHORT";
  timeframe: string;
  entry: string;
  status: string;
}

interface SignalsTableProps {
  signals: Signal[];
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Published: "bg-slate-700 text-slate-200",
    Waiting: "bg-blue-600/20 text-blue-400",
    Active: "bg-emerald-600/20 text-emerald-400",
    TP1: "bg-green-600/20 text-green-400",
    "Break Even": "bg-yellow-600/20 text-yellow-400",
    TP2: "bg-purple-600/20 text-purple-400",
    Closed: "bg-slate-600/20 text-slate-300",
    "Stopped Out": "bg-red-600/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] ?? "bg-slate-700 text-white"
      }`}
    >
      {status}
    </span>
  );
}

export default function SignalsTable({
  signals,
}: SignalsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
      <table className="min-w-full">
        <thead className="border-b border-slate-800 bg-slate-950">
          <tr className="text-left text-sm text-slate-400">
            <th className="px-6 py-4">Signal ID</th>
            <th className="px-6 py-4">Pair</th>
            <th className="px-6 py-4">Direction</th>
            <th className="px-6 py-4">Timeframe</th>
            <th className="px-6 py-4">Entry Zone</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Created</th>
          </tr>
        </thead>

        <tbody>
          {signals.map((signal, index) => (
            <tr
              key={signal.id}
              className="border-b border-slate-800 transition hover:bg-slate-800/40"
            >
              <td className="px-6 py-5 font-medium text-blue-400">
                BLISS-{String(index + 1).padStart(6, "0")}
              </td>

              <td className="px-6 py-5 font-semibold text-white">
                {signal.pair}
              </td>

              <td
                className={`px-6 py-5 font-semibold ${
                  signal.direction === "LONG"
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {signal.direction}
              </td>

              <td className="px-6 py-5 text-slate-300">
                {signal.timeframe}
              </td>

              <td className="px-6 py-5 text-slate-300">
                {signal.entry}
              </td>

              <td className="px-6 py-5">
                <StatusBadge status={signal.status} />
              </td>

              <td className="px-6 py-5 text-slate-400">
                Just now
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
