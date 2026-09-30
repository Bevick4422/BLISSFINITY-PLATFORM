import PageHeader from "@/components/layout/PageHeader";
import SignalForm from "@/features/signals/components/SignalForm";

export default function NewSignalPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="New Signal"
        description="Create a new trading signal."
      />

      <SignalForm />

    </div>
  );
}
