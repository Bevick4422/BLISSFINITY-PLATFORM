"use client";

import { Bell, Search, Circle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back to Blissfinity
        </p>
      </div>

      {/* Center */}
      <div className="hidden w-full max-w-md lg:block">
        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search signals, trades..."
            className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Live Status */}
        <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 lg:flex">
          <Circle
            size={10}
            className="fill-emerald-400 text-emerald-400"
          />

          <span className="text-sm font-medium text-emerald-400">
            Live Market
          </span>
        </div>

        {/* Notifications */}
        <button className="rounded-xl border border-slate-800 bg-slate-900 p-3 transition hover:bg-slate-800">
          <Bell className="text-slate-300" size={20} />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            B
          </div>

          <div className="hidden lg:block">
            <p className="font-semibold text-white">
              Blissfinity User
            </p>

            <p className="text-sm text-slate-400">
              Pro Member
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
