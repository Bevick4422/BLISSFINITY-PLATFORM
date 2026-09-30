export default function TrustedBy() {
  const principles = [
    {
      title: "Structured Analysis",
      description: "Market conditions evaluated before a setup is considered.",
    },
    {
      title: "Qualified Signals",
      description: "Quality over quantity when identifying trading opportunities.",
    },
    {
      title: "Defined Risk",
      description: "Entries, stop-loss levels, and targets are clearly structured.",
    },
    {
      title: "Transparent Results",
      description: "Performance is built from recorded and completed trades.",
    },
  ];

  return (
    <section
      id="markets"
      className="border-y border-slate-800 bg-slate-950 py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Built for Professional Futures Trading
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle.title} className="text-center">
              <h3 className="text-lg font-semibold text-white">
                {principle.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
