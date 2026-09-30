import {
  BarChart3,
  MessageCircle,
  ShieldCheck,
  Cloud,
  CandlestickChart,
  Bot,
} from "lucide-react";

const integrations = [
  {
    icon: CandlestickChart,
    name: "TradingView",
    desc: "Professional charting and market analysis.",
  },
  {
    icon: MessageCircle,
    name: "Telegram",
    desc: "Instant Blissfinity signal delivery and market alerts.",
  },
  {
    icon: BarChart3,
    name: "MEXC API",
    desc: "Real-time futures market data for the trading engine.",
  },
  {
    icon: Bot,
    name: "Blissfinity Bot",
    desc: "Structured market analysis and qualified signal generation.",
  },
  {
    icon: ShieldCheck,
    name: "Risk Engine",
    desc: "Structured stop-loss, take-profit, and risk management.",
  },
  {
    icon: Cloud,
    name: "Cloud Infrastructure",
    desc: "Reliable infrastructure supporting the Blissfinity platform.",
  },
];

export default function Integrations() {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Trading Infrastructure
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Built Around Professional Trading Tools
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Blissfinity connects market data, charting, signal delivery,
            risk management, and our trading bot into one structured trading
            platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-blue-500/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
