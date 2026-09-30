"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CandlestickChart,
  BarChart3,
  History,
  Star,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Signals",
    href: "/dashboard/signals",
    icon: CandlestickChart,
  },
  {
    title: "Performance",
    href: "/dashboard/performance",
    icon: BarChart3,
  },
  {
    title: "Trade History",
    href: "/dashboard/trade-history",
    icon: History,
  },
  {
    title: "Watchlist",
    href: "/dashboard/watchlist",
    icon: Star,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Account",
    href: "/dashboard/account",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950">
      {/* Logo */}
      <Link
        href="/dashboard"
        className="border-b border-slate-800 p-6"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/Blissfinity-logo.png.jpeg"
            alt="Blissfinity Logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 rounded-lg object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold tracking-tight text-white">
              BLISSFINITY
            </h1>

            <p className="mt-1 text-xs text-slate-400">
              Professional Futures Trading
            </p>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-6">
        {menu.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" &&
              pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-6">
        <button
          type="button"
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
