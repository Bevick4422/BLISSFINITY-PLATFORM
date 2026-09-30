"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CandlestickChart,
  History,
  BarChart3,
  Bell,
  User,
  Settings,
  CreditCard,
  CircleHelp,
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
    title: "Trade History",
    href: "/dashboard/trade-history",
    icon: History,
  },
  {
    title: "Performance",
    href: "/dashboard/performance",
    icon: BarChart3,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Help",
    href: "/dashboard/help",
    icon: CircleHelp,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">
      {/* Logo */}
      <Link
        href="/dashboard"
        className="border-b border-slate-800 p-8 transition hover:bg-slate-900/50"
      >
        <h1 className="text-2xl font-bold tracking-wide text-white">
          BLISSFINITY
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Professional Futures Trading
        </p>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-6">
        {menu.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition-all ${
                active
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

      {/* Logout */}
      <div className="border-t border-slate-800 p-6">
        <button
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={20} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
