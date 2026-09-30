import { adminStats } from "../mock-data";

export default function AdminStats() {
  const stats = [
    {
      title: "Total Users",
      value: adminStats.totalUsers,
      color: "text-white",
    },
    {
      title: "Active Members",
      value: adminStats.activeMembers,
      color: "text-emerald-400",
    },
    {
      title: "Beta Testers",
      value: adminStats.betaTesters,
      color: "text-blue-400",
    },
    {
      title: "Signals Today",
      value: adminStats.signalsToday,
      color: "text-yellow-400",
    },
    {
      title: "Active Trades",
      value: adminStats.activeTrades,
      color: "text-purple-400",
    },
    {
      title: "Win Rate",
      value: adminStats.winRate,
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
