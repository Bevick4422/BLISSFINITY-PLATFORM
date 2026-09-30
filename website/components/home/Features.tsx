import {
  Activity,
  Shield,
  BarChart3,
  Bell,
  Globe,
  Users,
} from "lucide-react"

import FeatureCard from "./FeatureCard"

const features = [
  {
    icon: <Activity size={26} />,
    title: "Structured Market Analysis",
    description:
      "Every qualified signal is built around structured market analysis and defined market conditions.",
  },
  {
    icon: <Shield size={26} />,
    title: "Defined Risk",
    description:
      "Each setup includes an entry, stop-loss, take-profit targets, and structured risk parameters.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Transparent Performance",
    description:
      "Review published signals, historical trade outcomes, and performance metrics transparently.",
  },
  {
    icon: <Bell size={26} />,
    title: "Signal Alerts",
    description:
      "Receive timely notifications when qualified trading opportunities meet the required conditions.",
  },
  {
    icon: <Globe size={26} />,
    title: "Crypto Futures Markets",
    description:
      "Monitor selected crypto futures markets through one professional trading platform.",
  },
  {
    icon: <Users size={26} />,
    title: "Trader Community",
    description:
      "Connect with traders focused on market awareness, disciplined execution, and continuous improvement.",
  },
]

export default function Features() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-medium text-blue-400">
            WHY BLISSFINITY
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Built for disciplined traders
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Blissfinity brings structured market analysis, qualified signals,
            defined risk, and transparent performance together in one
            professional trading experience.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>
      </div>
    </section>
  )
}
