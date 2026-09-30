const resources = [
  {
    number: "01",
    label: "Learn",
    title: "Trading fundamentals",
    text: "Educational material for traders who want to strengthen their understanding of markets and trading concepts.",
  },
  {
    number: "02",
    label: "Insights",
    title: "Market perspective",
    text: "Practical context around market conditions, structure, liquidity and the ideas that shape a trading decision.",
  },
  {
    number: "03",
    label: "Guides",
    title: "Practical resources",
    text: "Reference material designed to make useful trading concepts easier to revisit and apply.",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-[#09051a] py-24 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2274da]">Resources</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-white sm:text-6xl">
              Keep learning.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#aeb8cb] lg:pt-8">
            The resource library will grow alongside the Blissfinity community:
            useful first, noise-free, and built around the practical work of
            becoming a more informed trader.
          </p>
        </div>

        <div className="mt-14 grid border-y border-white/10 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <article
              key={resource.number}
              className={`min-h-[330px] p-8 sm:p-10 ${index > 0 ? "border-t border-white/10 lg:border-l lg:border-t-0" : ""}`}
            >
              <div className="flex justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d299fa]">
                  {resource.label}
                </span>
                <span className="text-xs text-[#70809a]">{resource.number}</span>
              </div>
              <h3 className="mt-20 font-serif text-3xl text-white">{resource.title}</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#9eabc0]">{resource.text}</p>
              <div className="mt-8 text-sm font-semibold text-[#2274da]">Explore &#8594;</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



