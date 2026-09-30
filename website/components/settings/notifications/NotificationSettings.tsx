export default function NotificationSettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold text-white">
        Notification Preferences
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Choose which notifications you want to receive.
      </p>

      <div className="mt-6 space-y-5">

        <label className="flex items-center justify-between">
          <span className="text-white">
            New Signal Alerts
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-white">
            TP1 Notifications
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-white">
            TP2 Notifications
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-white">
            Stop Loss Notifications
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-white">
            Weekly Performance Report
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-white">
            Monthly Performance Report
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5"
          />
        </label>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Save Notification Settings
        </button>

      </div>
    </section>
  );
}
