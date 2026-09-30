import { reports } from "../mock-data";

export default function ReportsOverview() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Reports Overview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Monitor the status of automated performance reports.
        </p>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4">
          <span className="font-medium text-white">
            Daily Report
          </span>

          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
            {reports.daily}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4">
          <span className="font-medium text-white">
            Weekly Report
          </span>

          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400">
            {reports.weekly}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4">
          <span className="font-medium text-white">
            Monthly Report
          </span>

          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
            {reports.monthly}
          </span>
        </div>

      </div>
    </section>
  );
}
