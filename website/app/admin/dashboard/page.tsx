import PageHeader from "@/components/layout/PageHeader";

import AdminStats from "@/components/admin/stats/AdminStats";
import SignalMonitor from "@/components/admin/monitor/SignalMonitor";
import SystemStatus from "@/components/admin/system/SystemStatus";
import ReportsOverview from "@/components/admin/reports/ReportsOverview";
import UserOverview from "@/components/admin/users/UserOverview";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Admin Dashboard"
        description="Monitor the Blissfinity platform, trading bot, and overall system health."
      />

      <AdminStats />

      <div className="grid gap-8 xl:grid-cols-2">
        <SignalMonitor />
        <SystemStatus />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <ReportsOverview />
        <UserOverview />
      </div>
    </div>
  );
}
