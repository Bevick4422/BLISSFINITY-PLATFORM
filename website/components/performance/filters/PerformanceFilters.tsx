"use client";

const filters = [
  "Today",
  "This Week",
  "This Month",
  "Last 30 Days",
  "All Time",
];

export default function PerformanceFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            index === 3
              ? "bg-blue-600 text-white"
              : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500 hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
