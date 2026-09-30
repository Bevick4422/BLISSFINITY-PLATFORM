import PageHeader from "@/components/layout/PageHeader";

import SignalHistoryStats from "@/components/history/stats/SignalHistoryStats";
import SignalHistoryFilters from "@/components/history/filters/SignalHistoryFilters";
import SignalHistoryTable from "@/components/history/tables/SignalHistoryTable";

export default function SignalHistoryPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Signal History"
        description="Browse every published trading signal and review historical performance."
      />

      <SignalHistoryStats />

      <SignalHistoryFilters />

      <SignalHistoryTable />

    </div>
  );
}
