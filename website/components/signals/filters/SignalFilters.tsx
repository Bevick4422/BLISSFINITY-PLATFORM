const filters = [
  "All",
  "Published",
  "Waiting",
  "Active",
  "TP1",
  "Break Even",
  "TP2",
  "Closed",
  "Stopped Out",
];

export default function SignalFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
