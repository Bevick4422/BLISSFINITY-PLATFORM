export default function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-[#070b14] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(210,153,250,.13),transparent_35%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-10">
        <p className="inline-flex rounded-full border border-[#d299fa]/25 bg-[#d299fa]/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d299fa]">
          Stronger together
        </p>
        <h2 className="mt-7 font-serif text-5xl text-white sm:text-7xl">
          Our <span className="bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d] bg-clip-text text-transparent">partners.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#aeb8cb]">
          We build relationships that create meaningful opportunities for the
          Blissfinity community.
        </p>

        <div className="mx-auto mt-14 max-w-md rounded-3xl border border-[#6f4eb9]/30 bg-[#0d1323] p-8 text-left shadow-[0_25px_80px_rgba(34,116,218,.08)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-xl font-bold text-[#070b14]">
            Z
          </div>
          <h3 className="mt-7 text-2xl font-semibold text-white">Zoomex</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#8f9db3]">
            Exchange partner
          </p>
          <div className="mt-7 h-px bg-gradient-to-r from-[#2274da] via-[#d299fa] to-[#ff379d]" />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="font-serif text-2xl text-white">Interested in partnering with Blissfinity?</h3>
            <p className="mt-1 text-sm text-[#98a6ba]">Let&apos;s build meaningful opportunities together.</p>
          </div>
          <a href="#contact" className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[#2274da] via-[#8d78e8] to-[#ff379d] px-6 py-3 text-sm font-semibold text-white sm:mt-0">
            Partner with us &#8594;
          </a>
        </div>
      </div>
    </section>
  );
}


