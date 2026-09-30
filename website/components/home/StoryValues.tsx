import { BookOpen, HeartHandshake, ShieldCheck, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Process over hype",
    text: "Trade the setup, not the headline. We focus on market context and deliberate decision-making rather than noise.",
  },
  {
    icon: HeartHandshake,
    title: "Community first",
    text: "Blissfinity was built on the belief that traders grow faster when they learn, execute and stay accountable together.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    text: "Watch first. React second. Risk awareness and structured analysis come before the urge to take a position.",
  },
  {
    icon: BookOpen,
    title: "Keep learning",
    text: "Whether someone is new to trading or already active in futures, the goal is to keep sharpening the craft.",
  },
];

export default function StoryValues() {
  return (
    <>
      <section id="story" className="relative overflow-hidden bg-[#09051a] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(34,116,218,.18),transparent_28%),radial-gradient(circle_at_86%_25%,rgba(255,55,157,.13),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 sm:px-10 lg:grid-cols-[1.02fr_.98fr] lg:px-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2274da]">
              Our journey
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.98] tracking-[-0.035em] text-white sm:text-6xl">
              From a private circle to a trading family.
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-[#b7bfd0] sm:text-lg">
              <p>
                Blissfinity was officially founded by BlissOnchain on May 1st,
                2025, beginning as a small, close-knit Discord community built
                around one idea: traders grow faster when they learn, execute,
                and stay accountable together.
              </p>
              <p>
                What started as a private circle quickly became a living
                trading family. By November the community expanded to Telegram,
                and it has since grown into a space of 2,000+ members spanning
                new traders, active futures traders, alpha seekers, and Web3
                enthusiasts.
              </p>
              <p>
                The focus has never been hype for its own sake. Blissfinity
                exists to educate, sharpen decision-making, and help people
                position themselves better in the market-regardless of where
                they started.
              </p>
              <p>
                The community is built around practical market work: real-time
                futures calls, chart context, liquidity awareness, risk
                discipline, and structured market analysis.
              </p>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div>
                <div className="font-serif text-4xl text-white">2,000+</div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8291a8]">Members</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-[#2274da]">2025</div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8291a8]">Founded</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-[#d299fa]">2</div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8291a8]">Community hubs</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-[#ff379d]">1</div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8291a8]">Shared mission</div>
              </div>
            </div>
          </div>

          <div id="values">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d299fa]">
                  Our core values
                </p>
                <h3 className="mt-5 font-serif text-5xl leading-none text-white sm:text-6xl">
                  How we operate.
                </h3>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d] sm:block" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    className="group min-h-[280px] rounded-2xl border border-[#6f4eb9]/25 bg-[#100a27]/80 p-7 transition hover:-translate-y-1 hover:border-[#d299fa]/45"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2274da] via-[#8d78e8] to-[#ff379d] text-white shadow-[0_10px_30px_rgba(34,116,218,.18)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs tracking-[0.2em] text-[#66738a]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="mt-10 font-serif text-2xl text-white">{value.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-[#aeb8cb]">{value.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#2274da] via-[#756ee0] to-[#ff379d] px-6 py-20 sm:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[#070b14]/15" />
        <div className="relative mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
            The Blissfinity standard
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-6xl">
            Watch first. React second.
          </h2>
          <div className="mx-auto mt-8 h-px max-w-xl bg-white/35" />
          <div className="mt-8 grid gap-4 text-sm font-medium text-white/95 sm:grid-cols-3">
            <span>Trade the setup, not the headline.</span>
            <span>Stay humble after a winning streak.</span>
            <span>Measure success by process.</span>
          </div>
        </div>
      </section>
    </>
  );
}

