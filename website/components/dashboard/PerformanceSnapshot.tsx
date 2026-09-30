import type { DashboardPerformance as PerformanceData } from "@/types/dashboard";

interface PerformanceSnapshotProps {
  performance: PerformanceData;
}

export default function PerformanceSnapshot({
  performance,
}: PerformanceSnapshotProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Performance Snapshot
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <Metric title="Win Rate" value={`${performance.winRate}%`} />
        <Metric title="Winning Trades" value={performance.winningTrades} />
        <Metric title="Losing Trades" value={performance.losingTrades} />
        <Metric title="Break Even" value={performance.breakEvenTrades} />
      </div>
    </div>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div>
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
