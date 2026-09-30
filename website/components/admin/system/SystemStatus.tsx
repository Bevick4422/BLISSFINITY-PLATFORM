import { systemStatus } from "../mock-data";

export default function SystemStatus() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          System Status
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Monitor the health of all platform services.
        </p>
      </div>

      <div className="space-y-4">
        {systemStatus.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4"
          >
            <span className="font-medium text-white">
              {service.name}
            </span>

            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
