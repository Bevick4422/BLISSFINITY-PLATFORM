const stats = [
  {
    value: "92%",
    label: "Verified Win Rate",
  },
  {
    value: "1:3",
    label: "Average Risk / Reward",
  },
  {
    value: "500+",
    label: "Signals Delivered",
  },
  {
    value: "24/7",
    label: "Market Monitoring",
  },
]

export default function Stats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition hover:border-blue-500"
        >
          <h3 className="text-3xl font-bold text-white">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}