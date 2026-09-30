import {
  Compass,
  Layers3,
  ShieldCheck,
  Scale,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Market Context",
    desc: "The broader market environment is assessed first, helping determine whether conditions support continuation, rejection, or caution.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Multi-Timeframe Analysis",
    desc: "Higher and lower timeframes are brought together to understand trend direction, structure, momentum, and potential areas of interest.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Setup Validation",
    desc: "A potential trade must meet defined structural and confluence requirements before it can qualify as a signal.",
  },
  {
    number: "04",
    icon: Scale,
    title: "Risk & Execution",
    desc: "Entry, stop loss, targets, and risk conditions are defined so every qualified setup has a clear trading framework.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Signal Tracking",
    desc: "Once published, the trade is tracked through its lifecycle and recorded as part of the platform's performance history.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-white/8 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2274da]">
            The Blissfinity Process
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A disciplined process behind every setup.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Blissfinity is built around a structured process designed to
            separate meaningful market opportunities from market noise.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-3xl border border-white/8 bg-[#0d1422] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2274da]/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2274da]/10">
                    <Icon className="h-6 w-6 text-[#2274da]" />
                  </div>

                  <span className="text-sm font-semibold text-slate-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#2274da]/20 bg-[#2274da]/5 px-6 py-5 text-center">
          <p className="text-sm font-medium leading-6 text-slate-300">
            We would rather wait for a qualified setup than manufacture a
            trade simply to stay active.
          </p>
        </div>
      </div>
    </section>
  );
}
