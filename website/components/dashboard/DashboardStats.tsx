import type { DashboardStats } from "@/types/dashboard";

interface DashboardStatsProps {
  stats: DashboardStats;
}

export default function DashboardStats({
  stats,
}: DashboardStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Active Signals"
        value={stats.activeSignals}
      />

      <StatCard
        title="Published Signals"
        value={stats.publishedSignals}
      />

      <StatCard
        title="Total Signals"
        value={stats.totalSignals}
      />

      <StatCard
        title="Closed Trades"
        value={stats.closedTrades}
      />
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}
