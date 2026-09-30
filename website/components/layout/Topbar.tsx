"use client";

import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/signals": "Signals",
  "/dashboard/performance": "Performance",
  "/dashboard/trade-history": "Trade History",
  "/dashboard/watchlist": "Watchlist",
  "/dashboard/notifications": "Notifications",
  "/dashboard/account": "Account",
  "/dashboard/settings": "Settings",
};

export default function Topbar() {
  const pathname = usePathname();

  const title =
    pageTitles[pathname] ??
    (pathname.startsWith("/dashboard/signals/")
      ? "Signal Details"
      : "Dashboard");

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-5">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back to Blissfinity.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button
          type="button"
          className="relative rounded-xl p-3 text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            B
          </div>

          <div className="hidden sm:block">
            <p className="font-semibold text-white">
              Blissfinity Member
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
