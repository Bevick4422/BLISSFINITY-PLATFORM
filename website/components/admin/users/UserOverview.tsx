import { adminStats } from "../mock-data";

export default function UserOverview() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          User Overview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Monitor platform membership and beta participation.
        </p>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4">
          <span className="text-white">
            Total Users
          </span>

          <span className="text-xl font-bold text-white">
            {adminStats.totalUsers}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4">
          <span className="text-white">
            Active Members
          </span>

          <span className="text-xl font-bold text-emerald-400">
            {adminStats.activeMembers}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4">
          <span className="text-white">
            Beta Testers
          </span>

          <span className="text-xl font-bold text-blue-400">
            {adminStats.betaTesters}
          </span>
        </div>

      </div>
    </section>
  );
}
