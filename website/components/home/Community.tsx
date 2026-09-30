import Link from "next/link";
import { ArrowUpRight, MessageCircle, UsersRound } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="bg-[#f7f8fb]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ff379d]">
              Community
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-[#070b14] sm:text-6xl">
              The market is bigger than the screen.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Connect with the Blissfinity community, follow what we are
              building and stay close to the conversations around trading,
              learning and the ecosystem.
            </p>
            <Link
              href="/register"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#070b14] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#2274da]"
            >
              Join Blissfinity
              <ArrowUpRight className="h-4 w-4 text-[#ff379d]" />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            <div className="bg-white p-8">
              <UsersRound className="h-6 w-6 text-[#2274da]" />
              <h3 className="mt-12 font-serif text-2xl text-[#070b14]">Community first</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                A place to connect with other people interested in markets and trading.
              </p>
            </div>
            <div className="bg-white p-8">
              <MessageCircle className="h-6 w-6 text-[#ff379d]" />
              <h3 className="mt-12 font-serif text-2xl text-[#070b14]">Stay connected</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Follow announcements, resources, partnerships and what is coming next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
