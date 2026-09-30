"use client";

const filters = [
  "All",
  "Signals",
  "TP1",
  "TP2",
  "Losses",
  "System",
];

export default function NotificationFilters() {
  return (
    <section className="flex flex-wrap gap-3">
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`rounded-xl px-5 py-2 text-sm font-medium transition ${
            index === 0
              ? "bg-blue-600 text-white"
              : "border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
          }`}
        >
          {filter}
        </button>
      ))}
    </section>
  );
}
