import { notifications } from "../mock-data";

export default function NotificationList() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Notifications
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Stay updated with signals, trade progress and platform announcements.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-xl border p-5 transition ${
              notification.read
                ? "border-slate-800 bg-slate-900"
                : "border-blue-600 bg-slate-800"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">
                {notification.title}
              </h3>

              <span className="text-xs text-slate-400">
                {notification.time}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {notification.message}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  notification.type === "SIGNAL"
                    ? "bg-blue-500/20 text-blue-400"
                    : notification.type === "TP1"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : notification.type === "TP2"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : notification.type === "LOSS"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {notification.type}
              </span>

              {!notification.read && (
                <span className="text-xs font-medium text-blue-400">
                  New
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
