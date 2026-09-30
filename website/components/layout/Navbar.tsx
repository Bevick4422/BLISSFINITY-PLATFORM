"use client";

import Link from "next/link";

const links = [
  ["Our Story", "#story"],
  ["Values", "#values"],
  ["Founder", "#founder"],
  ["Resources", "#resources"],
  ["Affiliates", "#affiliates"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b14]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[106px] max-w-[1600px] items-center justify-between px-7 lg:px-16">
        <Link href="/" className="flex shrink-0 items-center gap-4">
          <img
            src="/images/Blissfinity-logo.png.jpeg"
            alt="Blissfinity"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="leading-none">
            <div className="font-serif text-[29px] font-semibold tracking-[-0.02em] text-white">
              BLISSFINITY
            </div>
            <div className="mt-2 text-[12px] font-medium tracking-[0.30em] text-[#aebbd4]">
              TRADING PLATFORM
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[17px] text-[#c7d0df] transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-7">
          <Link
            href="/login"
            className="hidden text-[17px] text-[#d4dbea] transition hover:text-white sm:block"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 font-serif text-[17px] font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.10]"
          >
            Enter Platform <span className="ml-2 text-[#d299fa]">â†—</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
