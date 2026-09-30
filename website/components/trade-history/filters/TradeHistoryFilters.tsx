const filters = [
  "All",
  "Long",
  "Short",
  "Winning",
  "Stopped Out",
  "BTC",
  "ETH",
  "SOL",
];

export default function TradeHistoryFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
