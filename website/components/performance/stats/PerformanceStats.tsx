interface PerformanceStat {
  title: string;
  value: string;
  subtitle: string;
}

const stats: PerformanceStat[] = [
  {
    title: "Monthly ROI",
    value: "+38.4%",
    subtitle: "Current Month",
  },
  {
    title: "Win Rate",
    value: "91%",
    subtitle: "Last 30 Days",
  },
  {
    title: "Profit Factor",
    value: "3.82",
    subtitle: "Excellent",
  },
  {
    title: "Average R:R",
    value: "1 : 4.2",
    subtitle: "Per Trade",
  },
];

export default function PerformanceStats() {
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
