export default function ProfileSettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold text-white">
        Profile
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Manage your personal account information.
      </p>

      <div className="mt-6 space-y-5">

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          />
        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Save Changes
        </button>

      </div>
    </section>
  );
}
