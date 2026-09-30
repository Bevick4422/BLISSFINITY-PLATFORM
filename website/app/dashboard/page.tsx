import DashboardStats from "@/components/dashboard/DashboardStats";
import TradingChart from "@/components/dashboard/TradingChart";
import MarketSnapshot from "@/components/dashboard/MarketSnapshot";
import ActiveSignals from "@/components/dashboard/ActiveSignals";
import PerformanceSnapshot from "@/components/dashboard/PerformanceSnapshot";
import RecentNotifications from "@/components/dashboard/RecentNotifications";

import {
  getDashboardStats,
  getOpenSignals,
} from "@/lib/api";

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const signals = await getOpenSignals();

  return (
    <div className="space-y-8">
      <DashboardStats
        stats={{
          activeSignals: stats.open_trades,
          publishedSignals: stats.total_trades,
          totalSignals: stats.total_trades,
          closedTrades: stats.closed_trades,
        }}
      />

      <section className="grid gap-8 xl:grid-cols-3">
        <div className="space-y-8 xl:col-span-2">
          <TradingChart />

          <ActiveSignals
            signals={signals}
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

        <div className="space-y-8">
          <MarketSnapshot />

          <RecentNotifications
            notifications={[
              {
                id: "1",
                title: "BTCUSDT LONG",
                message: "Signal published successfully.",
                created_at: new Date().toISOString(),
              },
              {
                id: "2",
                title: "ETHUSDT",
                message: "Take Profit 1 reached.",
                created_at: new Date().toISOString(),
              },
              {
                id: "3",
                title: "SOLUSDT",
                message: "Trade moved to Break Even.",
                created_at: new Date().toISOString(),
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
