interface StatItem {
  title: string;
  value: string;
  subtitle: string;
}

const stats: StatItem[] = [
  {
    title: "Closed Trades",
    value: "128",
    subtitle: "All Time",
  },
  {
    title: "Winning Trades",
    value: "117",
    subtitle: "+6 This Month",
  },
  {
    title: "Win Rate",
    value: "91%",
    subtitle: "Last 30 Days",
  },
  {
    title: "Average ROI",
    value: "+6.8%",
    subtitle: "Per Trade",
  },
];

export default function TradeHistoryStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          <p className="text-sm text-slate-400">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-emerald-400">
            {stat.subtitle}
          </p>
        </div>
      ))}
    </section>
  );
}
