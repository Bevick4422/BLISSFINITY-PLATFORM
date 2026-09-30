const markets = [
  {
    pair: "BTCUSDT",
    price: "$118,240",
    change: "+2.14%",
  },
  {
    pair: "ETHUSDT",
    price: "$4,220",
    change: "-0.84%",
  },
  {
    pair: "SOLUSDT",
    price: "$248",
    change: "+5.72%",
  },
  {
    pair: "SUIUSDT",
    price: "$5.42",
    change: "+3.91%",
  },
  {
    pair: "XRPUSDT",
    price: "$3.11",
    change: "-1.24%",
  },
];

export default function MarketTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Watchlist
      </h2>

      <div className="space-y-4">
        {markets.map((market) => (
          <button
            key={market.pair}
            className="flex w-full items-center justify-between rounded-xl p-4 transition hover:bg-slate-800"
          >
            <div>
              <h3 className="font-semibold text-white">
                {market.pair}
              </h3>

              <p className="text-sm text-slate-400">
                {market.price}
              </p>
            </div>

            <span
              className={`font-semibold ${
                market.change.startsWith("-")
                  ? "text-red-400"
                  : "text-emerald-400"
              }`}
            >
              {market.change}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
