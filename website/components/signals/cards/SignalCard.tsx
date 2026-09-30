interface SignalCardProps {
  pair: string;
  direction: "LONG" | "SHORT";
  status: "RUNNING" | "TP1 HIT" | "TP2 HIT" | "STOPPED OUT" | "CLOSED";
  entry: string;
  stopLoss: string;
  takeProfit1: string;
  takeProfit2: string;
  leverage: string;
  confidence: number;
  riskReward: string;
  published: string;
  progress: number;
}

export default function SignalCard({
  pair,
  direction,
  status,
  entry,
  stopLoss,
  takeProfit1,
  takeProfit2,
  leverage,
  confidence,
  riskReward,
  published,
  progress,
}: SignalCardProps) {
  const statusColor = {
    RUNNING: "bg-blue-500/10 text-blue-400",
    "TP1 HIT": "bg-amber-500/10 text-amber-400",
    "TP2 HIT": "bg-emerald-500/10 text-emerald-400",
    "STOPPED OUT": "bg-red-500/10 text-red-400",
    CLOSED: "bg-slate-700 text-slate-300",
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            {pair}
          </h2>

          <p
            className={`mt-1 text-sm font-semibold ${
              direction === "LONG"
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {direction}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusColor[status]
          }`}
        >
          {status}
        </span>
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">

        <Info label="Entry" value={entry} />

        <Info label="Stop Loss" value={stopLoss} />

        <Info
          label="Take Profit 1"
          value={takeProfit1}
        />

        <Info
          label="Take Profit 2"
          value={takeProfit2}
        />

        <Info
          label="Leverage"
          value={leverage}
        />

        <Info
          label="Risk : Reward"
          value={riskReward}
        />

        <Info
          label="Confidence"
          value={`${confidence}%`}
        />

        <Info
          label="Published"
          value={published}
        />

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-xs text-slate-400">

          <span>Progress</span>

          <span>{progress}%</span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-blue-500 transition-all"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-white">
        {value}
      </p>
    </div>
  );
}
