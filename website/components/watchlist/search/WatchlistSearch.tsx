"use client";

import { Search } from "lucide-react";

export default function WatchlistSearch() {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        placeholder="Search trading pair..."
        className="w-full rounded-2xl border border-slate-800 bg-slate-900 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}
