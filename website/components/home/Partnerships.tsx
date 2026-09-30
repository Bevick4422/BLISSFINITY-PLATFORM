import { ArrowUpRight, Handshake } from "lucide-react";

export default function Partnerships() {
  return (
    <section id="partnerships" className="bg-[#070b14] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d299fa]">
              Partnerships
            </p>
            <h2 className="mt-5 max-w-lg font-serif text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl">
              Building with the right people.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-xl leading-9 text-slate-300">
              Blissfinity is growing through relationships with platforms and
              communities that add real value to the trader experience.
            </p>

            <div className="mt-12 border-y border-white/10">
              <div className="flex flex-col gap-8 py-9 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Handshake className="h-6 w-6 text-[#d299fa]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                      Official partner
                    </p>
                    <h3 className="mt-1 font-serif text-3xl">Zoomex</h3>
                  </div>
                </div>

                <a
                  href="https://partner.zoomex.com/bliss"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#d299fa]"
                >
                  Visit partnership
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
