"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const equityData = [
  { month: "Jan", equity: 100 },
  { month: "Feb", equity: 112 },
  { month: "Mar", equity: 126 },
  { month: "Apr", equity: 141 },
  { month: "May", equity: 167 },
  { month: "Jun", equity: 198 },
  { month: "Jul", equity: 248 },
];

export default function PerformanceChart() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Equity Growth
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Simulated account growth using mock performance data.
          </p>
        </div>

        <div className="rounded-xl bg-emerald-500/10 px-4 py-2">
          <span className="text-lg font-semibold text-emerald-400">
            +148%
          </span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={equityData}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="equity"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
