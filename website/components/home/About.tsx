export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2274da]">
              About Blissfinity
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-[#070b14] sm:text-6xl">
              Clarity over noise.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="font-serif text-3xl leading-[1.25] tracking-[-0.02em] text-[#070b14] sm:text-4xl">
              We believe the trading experience should be easier to understand,
              easier to follow and built around a process.
            </p>

            <div className="mt-12 grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2274da]">01</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">Structure before impulse.</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d299fa]">02</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">Learning as part of the journey.</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff379d]">03</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">Transparency in the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
