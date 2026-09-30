import PageHeader from "@/components/layout/PageHeader";
import RecentNotifications from "@/components/dashboard/RecentNotifications";

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Notifications"
        description="View all trading alerts and bot activity."
      />

      <RecentNotifications
        notifications={[]}
      />
    </div>
  );
}
