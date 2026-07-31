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
    title: "Professional Analysis",
    description:
      "Every signal is built on structured market analysis instead of emotional decision-making.",
  },
  {
    icon: <Shield size={26} />,
    title: "Risk Management",
    description:
      "Each setup includes entry, stop-loss, take-profit, and disciplined risk parameters.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Transparent Performance",
    description:
      "Review historical results and performance metrics with complete transparency.",
  },
  {
    icon: <Bell size={26} />,
    title: "Real-Time Alerts",
    description:
      "Receive timely notifications when qualified trading opportunities appear.",
  },
  {
    icon: <Globe size={26} />,
    title: "Multi-Market Coverage",
    description:
      "Monitor leading crypto futures markets from one professional platform.",
  },
  {
    icon: <Users size={26} />,
    title: "Trading Community",
    description:
      "Learn alongside a growing community focused on disciplined execution.",
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
            Blissfinity combines structured analysis, risk management,
            and transparent reporting into a professional trading experience.
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