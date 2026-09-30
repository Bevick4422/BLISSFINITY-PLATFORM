"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const nav = [
  ["Home", "#home"],
  ["Our Story", "#story"],
  ["Values", "#values"],
  ["Founder", "#founder"],
  ["Resources", "#resources"],
  ["Partners", "#partners"],
  ["Contact", "#contact"],
];

export default function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#2274da]/40 bg-white/5">
            <img
              src="/images/Blissfinity-logo.png.jpeg"
              alt="Blissfinity"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-[19px] font-semibold tracking-[0.02em] text-white">
              BLISSFINITY
            </div>
            <div className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-[#9fb4d2]">
              Trading Platform
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[#b9c5d8] transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden px-2 py-3 text-sm font-medium text-[#d8dfeb] transition hover:text-white sm:block"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d299fa]/40 hover:bg-white/[0.12]"
          >
            Enter Platform
            <ArrowUpRight className="h-4 w-4 text-[#d299fa] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
