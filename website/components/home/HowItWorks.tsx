import { Search, Brain, BellRing, Trophy } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Market Scanning",
    desc: "Our engine continuously scans BTC, ETH, SOL and other supported markets for high-probability setups.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    desc: "Trend, liquidity, market structure and confluence are analyzed before any signal is created.",
  },
  {
    icon: BellRing,
    title: "Instant Alerts",
    desc: "Qualified signals are delivered instantly to the dashboard and Telegram community.",
  },
  {
    icon: Trophy,
    title: "Track Results",
    desc: "Every trade is monitored automatically with transparent performance statistics.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            How It Works
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">
            Four Simple Steps
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            From market analysis to live delivery, Blissfinity automates the
            entire signal generation process.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>

                <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
                  {steps.indexOf(step) + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-400">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}