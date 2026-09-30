export default function SecuritySettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold text-white">
        Security
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Update your password and keep your account secure.
      </p>

      <div className="mt-6 space-y-5">

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Current Password
          </label>

          <input
            type="password"
            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            New Password
          </label>

          <input
            type="password"
            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Confirm New Password
          </label>

          <input
            type="password"
            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          />
        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Update Password
        </button>

      </div>
    </section>
  );
}
