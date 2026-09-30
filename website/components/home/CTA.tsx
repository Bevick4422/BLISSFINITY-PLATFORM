export default function CTA() {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-pink-500/10 p-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Enter Blissfinity
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Trade With Structure. Manage Risk. Track Results.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Access structured market analysis, qualified trading signals,
            defined risk management, and transparent performance tracking
            through the Blissfinity platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/dashboard"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Enter Platform
            </a>

            <a
              href="/performance"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              View Performance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
