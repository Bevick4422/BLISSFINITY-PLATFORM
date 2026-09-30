import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail, Users } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-r from-[#15103a] via-[#24104b] to-[#32103f] py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(34,116,218,.28),transparent_30%),radial-gradient(circle_at_90%_50%,rgba(255,55,157,.28),transparent_32%)]" />
      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d299fa]">
              Connect with Blissfinity
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[.95] text-white sm:text-7xl">
              Stay close to the community.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#c2c7d7]">
              Follow the community, keep up with announcements and learn more
              about what Blissfinity is building.
            </p>
          </div>

          <div className="grid gap-3">
            <Link href="#" className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-5 backdrop-blur-sm transition hover:bg-white/[0.09]">
              <span className="flex items-center gap-4">
                <Users className="h-5 w-5 text-[#2274da]" />
                <span className="text-sm font-semibold text-white">Blissfinity Community</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#d299fa] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="#" className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-5 backdrop-blur-sm transition hover:bg-white/[0.09]">
              <span className="flex items-center gap-4">
                <MessageCircle className="h-5 w-5 text-[#d299fa]" />
                <span className="text-sm font-semibold text-white">Community updates</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#ff379d] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="mailto:hello@blissfinity.xyz" className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-5 backdrop-blur-sm transition hover:bg-white/[0.09]">
              <span className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#ff379d]" />
                <span className="text-sm font-semibold text-white">hello@blissfinity.xyz</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#d299fa] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
