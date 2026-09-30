interface SignalCardProps {
  pair: string;
  direction: "LONG" | "SHORT";
  timeframe: string;
  status: string;
  entry: string;
  stopLoss: string;
  tp1: string;
  tp2: string;
  score: number;
}

export default function SignalCard({
  pair,
  direction,
  timeframe,
  status,
  entry,
  stopLoss,
  tp1,
  tp2,
  score,
}: SignalCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            {pair}
          </h3>

          <p className="text-sm text-slate-400">
            {direction} â€¢ {timeframe}
          </p>
        </div>

        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
          {status}
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Entry</span>
          <span className="font-medium text-white">{entry}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Stop Loss</span>
          <span className="font-medium text-red-400">{stopLoss}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">TP1</span>
          <span className="font-medium text-emerald-400">{tp1}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">TP2</span>
          <span className="font-medium text-emerald-400">{tp2}</span>
        </div>

        <div className="flex justify-between border-t border-slate-800 pt-4">
          <span className="text-slate-400">
            Confluence Score
          </span>

          <span className="font-bold text-blue-400">
            {score}
          </span>
        </div>
      </div>
    </div>
  );
}
