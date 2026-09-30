export default function FAQ() {
  const faqs = [
    [
      "How are Blissfinity signals generated?",
      "Our trading bot evaluates market conditions using structured analysis, market structure, momentum, liquidity, volume, and risk filters before a qualified setup can be considered.",
    ],
    [
      "How many signals are published?",
      "Blissfinity focuses on quality over quantity. Only setups that meet the required conditions are considered for publication rather than forcing a fixed number of trades.",
    ],
    [
      "Which markets are supported?",
      "Blissfinity is focused on crypto futures markets, with coverage expanding as the platform and market infrastructure develop.",
    ],
    [
      "Does every signal include risk management?",
      "Qualified signals are structured with defined entry levels, stop-loss protection, and take-profit targets where applicable.",
    ],
    [
      "Can I review previous signals?",
      "Yes. The platform is designed to provide transparent signal history and performance tracking so traders can review previous outcomes.",
    ],
    [
      "Does Blissfinity guarantee profitable trades?",
      "No. Trading involves risk and no signal can guarantee a profitable outcome. Blissfinity focuses on structured analysis, defined risk, and transparent performance rather than promises of guaranteed returns.",
    ],
  ];

  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Learn more about how Blissfinity approaches market analysis,
            trading signals, risk management, and performance tracking.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map(([question, answer]) => (
            <div
              key={question}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {question}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
