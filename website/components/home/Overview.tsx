import { BookOpen, Compass, Users, BarChart3 } from "lucide-react";

const items = [
  {
    icon: Compass,
    number: "01",
    title: "Market perspective",
    text: "A clearer way to understand market context, structure and the ideas that shape a trading decision.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Resources",
    text: "Educational material, guides and practical resources created to help traders keep learning.",
  },
  {
    icon: Users,
    number: "03",
    title: "Community",
    text: "A growing community where traders can connect, share experiences and stay close to the ecosystem.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Private platform",
    text: "An authenticated environment for members with access to Blissfinity's trading tools and signal experience.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="border-y border-slate-200 bg-[#f7f8fb]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2274da]">
              Overview
            </p>
            <h2 className="mt-5 max-w-lg font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-[#070b14] sm:text-6xl">
              More than a signal page.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl leading-9 text-slate-600">
              Blissfinity is being built as an ecosystem around trading -
              not simply a place to receive a message and open a position.
              The public site explains the brand and its resources. The
              private platform is where the trading experience begins.
            </p>

            <div className="mt-14 grid border-t border-slate-200 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.number} className="border-b border-slate-200 py-8 sm:pr-10 sm:even:border-l sm:even:pl-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2274da]/20 bg-white text-[#2274da]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-7 font-serif text-2xl text-[#070b14]">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

