"use client";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Signals", href: "/signals" },
  { name: "Performance", href: "/performance" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/blissfinity-logo.png"
            alt="Blissfinity"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold tracking-tight text-white">
              Blissfinity
            </h1>

            <p className="text-sm text-slate-400">
              Crypto Futures Platform
            </p>
          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}

        <div className="hidden items-center gap-4 lg:flex">

          <Link
            href="/login"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Join Free
          </Link>

        </div>

      </div>
    </header>
  );
}