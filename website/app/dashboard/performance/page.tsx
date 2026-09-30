import PageHeader from "@/components/layout/PageHeader";
import PerformanceSnapshot from "@/components/dashboard/PerformanceSnapshot";

import { getDashboardStats } from "@/lib/api";

export default async function PerformancePage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Performance"
        description="Monitor the overall trading performance of the Blissfinity Signal Bot."
      />

      <PerformanceSnapshot
        performance={{
          winRate: stats.win_rate,
          winningTrades: stats.wins,
          losingTrades: stats.losses,
          breakEvenTrades: stats.breakevens,
        }}
      />
    </div>
  );
}
