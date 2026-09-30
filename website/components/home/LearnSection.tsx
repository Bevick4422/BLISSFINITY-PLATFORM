import {
  BookOpen,
  CandlestickChart,
  ShieldCheck,
  Brain,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    icon: BookOpen,
    title: "New to Trading",
    description:
      "Start with the fundamentals. Learn how markets work, how trades are structured, and the key concepts every new trader should understand.",
    label: "Start Here",
  },
  {
    icon: CandlestickChart,
    title: "Futures Basics",
    description:
      "Understand futures contracts, long and short positions, leverage, margin, liquidation, and the mechanics behind futures trading.",
    label: "Learn Futures",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description:
      "Learn why protecting capital matters, how position sizing works, and how disciplined risk management fits into a sustainable trading process.",
    label: "Manage Risk",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    description:
      "Understand the emotional side of trading and develop habits that help reduce impulsive decisions, overtrading, and revenge trading.",
    label: "Build Discipline",
  },
];

export default function LearnSection() {
  return (
    <section id="learn" className="border-t border-white/8 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff379d]">
              Learn to Trade
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Build knowledge before you build positions.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
              Trading is not only about finding entries. A strong foundation
              in market mechanics, risk, and discipline is essential to
              understanding the decisions behind every trade.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-[#d299fa]"
          >
            Explore the platform
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;

            return (
              <article
                key={lesson.title}
                className="group rounded-3xl border border-white/8 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff379d]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff379d]/10">
                  <Icon className="h-6 w-6 text-[#ff379d]" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {lesson.label}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {lesson.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {lesson.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-300">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
