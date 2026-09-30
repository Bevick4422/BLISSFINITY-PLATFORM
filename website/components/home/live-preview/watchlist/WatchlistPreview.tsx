const markets = [
  {
    pair: "BTCUSDT",
    price: "118,240",
    change: "+2.43%",
  },
  {
    pair: "ETHUSDT",
    price: "4,220",
    change: "-0.84%",
  },
  {
    pair: "SOLUSDT",
    price: "248",
    change: "+5.72%",
  },
  {
    pair: "SUIUSDT",
    price: "5.42",
    change: "+3.91%",
  },
  {
    pair: "XRPUSDT",
    price: "3.11",
    change: "-1.24%",
  },
];

export default function WatchlistPreview() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-6 text-xl font-bold text-white">
        Market Watchlist
      </h3>

      <div className="space-y-4">
        {markets.map((market) => (
          <div
            key={market.pair}
            className="flex items-center justify-between rounded-xl border border-slate-800 p-4"
          >
            <div>
              <h4 className="font-semibold text-white">
                {market.pair}
              </h4>

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
          </div>
        ))}
      </div>
    </div>
  );
}
