import PageHeader from "@/components/layout/PageHeader";
import SignalTable from "@/features/signals/components/SignalTable";

export default function AdminSignalsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Signal Management"
        description="Create, publish, update and monitor trading signals."
      />

      <SignalTable />
    </div>
  );
}
