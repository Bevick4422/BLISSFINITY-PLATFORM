import { DashboardNotification } from "@/types/dashboard";

interface RecentNotificationsProps {
  notifications: DashboardNotification[];
}

export default function RecentNotifications({
  notifications,
}: RecentNotificationsProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">
        Recent Notifications
      </h2>

      {notifications.length === 0 ? (
        <p className="mt-4 text-slate-400">
          No notifications available.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="border-b border-slate-800 pb-4"
            >
              <p className="font-medium text-white">
                {notification.title}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {notification.message}
              </p>

              <p
                className="mt-2 text-xs text-slate-500"
                suppressHydrationWarning
              >
                {notification.created_at}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
