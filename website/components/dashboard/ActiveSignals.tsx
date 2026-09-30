import { DashboardSignal } from "@/types/dashboard";

interface ActiveSignalsProps {
  signals: DashboardSignal[];
}

export default function ActiveSignals({
  signals,
}: ActiveSignalsProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Active Signals
      </h2>

      {signals.length === 0 ? (
        <p className="text-slate-400">
          No active signals.
        </p>
      ) : (
        <div className="space-y-4">
          {signals.map((signal) => (
            <div
              key={signal.id}
              className="rounded-lg border border-slate-800 p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  {signal.symbol}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    signal.direction === "BUY"
                      ? "bg-emerald-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {signal.direction}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-400">Entry</p>
                  <p className="text-white">{signal.entry}</p>
                </div>

                <div>
                  <p className="text-slate-400">Stop Loss</p>
                  <p className="text-red-400">{signal.stop_loss}</p>
                </div>

                <div>
                  <p className="text-slate-400">Take Profit 1</p>
                  <p className="text-emerald-400">{signal.tp1}</p>
                </div>

                <div>
                  <p className="text-slate-400">Take Profit 2</p>
                  <p className="text-emerald-400">{signal.tp2}</p>
                </div>

                <div>
                  <p className="text-slate-400">Confidence</p>
                  <p className="text-white">
                    {signal.confidence}%
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">Status</p>
                  <p className="text-blue-400">
                    {signal.state}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
