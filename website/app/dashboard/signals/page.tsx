"use client";

import { useState } from "react";

import SignalStats from "@/components/signals/stats/SignalStats";
import SignalSearch from "@/components/signals/search/SignalSearch";
import SignalFilters from "@/components/signals/filters/SignalFilters";
import SignalGrid from "@/components/signals/grid/SignalGrid";
import SignalsTable from "@/components/signals/SignalsTable";
import ViewToggle from "@/components/signals/view/ViewToggle";

import { signals } from "@/data/signals";

export default function SignalsPage() {
  const [view, setView] = useState<"grid" | "table">("grid");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Trading Signals
          </h1>

          <p className="mt-2 text-slate-400">
            Professional crypto futures trading signals with transparent trade tracking.
          </p>
        </div>

        <ViewToggle
          view={view}
          onChange={setView}
        />
      </div>

      {/* Statistics */}
      <SignalStats />

      {/* Search */}
      <SignalSearch />

      {/* Filters */}
      <SignalFilters />

      {/* Signal View */}
      {view === "grid" ? (
        <SignalGrid />
      ) : (
        <SignalsTable signals={signals} />
      )}
    </div>
  );
}
