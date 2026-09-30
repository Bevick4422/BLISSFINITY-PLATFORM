import SignalCard from "../cards/SignalCard";
import { signals } from "../mock-data";

export default function SignalGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {signals.map((signal) => (
        <SignalCard
          key={signal.pair}
          pair={signal.pair}
          direction={signal.direction}
          status={signal.status}
          entry={signal.entry}
          stopLoss={signal.stopLoss}
          takeProfit1={signal.takeProfit1}
          takeProfit2={signal.takeProfit2}
          leverage={signal.leverage}
          confidence={signal.confidence}
          riskReward={signal.riskReward}
          published={signal.published}
          progress={signal.progress}
        />
      ))}
    </div>
  );
}
