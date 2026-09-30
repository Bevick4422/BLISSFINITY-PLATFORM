import { signalHistory } from "../mock-data";

export default function SignalHistoryStats() {
  const total = signalHistory.length;

  const wins = signalHistory.filter(
    (signal) => signal.result === "WIN"
  ).length;

  const losses = signalHistory.filter(
    (signal) => signal.result === "LOSS"
  ).length;

  const active = signalHistory.filter(
    (signal) => signal.status === "ACTIVE"
  ).length;

  const winRate =
    wins + losses > 0
      ? ((wins / (wins + losses)) * 100).toFixed(1)
      : "0.0";

  const stats = [
    {
      title: "Total Signals",
      value: total,
      color: "text-white",
    },
    {
      title: "Wins",
      value: wins,
      color: "text-emerald-400",
    },
    {
      title: "Losses",
      value: losses,
      color: "text-red-400",
    },
    {
      title: "Win Rate",
      value: `${winRate}%`,
      color: "text-blue-400",
    },
    {
      title: "Active",
      value: active,
      color: "text-yellow-400",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          <p className="text-sm text-slate-400">
            {stat.title}
          </p>

          <h2
            className={`mt-3 text-3xl font-bold ${stat.color}`}
          >
            {stat.value}
          </h2>
        </div>
      ))}
    </section>
  );
}
