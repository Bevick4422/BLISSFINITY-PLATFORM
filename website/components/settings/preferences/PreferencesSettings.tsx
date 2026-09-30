export default function PreferencesSettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold text-white">
        Preferences
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Customize your platform experience.
      </p>

      <div className="mt-6 space-y-6">

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Theme
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <option>System</option>
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Time Zone
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <option>UTC</option>
            <option>UTC +1</option>
            <option>UTC +2</option>
            <option>UTC +3</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Language
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <option>English</option>
          </select>
        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Save Preferences
        </button>

      </div>
    </section>
  );
}
