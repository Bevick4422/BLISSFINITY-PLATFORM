interface MarketItem {
  symbol: string;
  price: string;
  change: string;
}

const marketData: MarketItem[] = [
  {
    symbol: "BTCUSDT",
    price: "$118,250",
    change: "+2.34%",
  },
  {
    symbol: "ETHUSDT",
    price: "$4,220",
    change: "-0.85%",
  },
  {
    symbol: "SOLUSDT",
    price: "$248",
    change: "+5.71%",
  },
];

export default function MarketSnapshot() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Market Snapshot
      </h2>

      <div className="space-y-5">
        {marketData.map((market) => (
          <div
            key={market.symbol}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-semibold text-white">
                {market.symbol}
              </p>

              <p className="text-sm text-slate-400">
                {market.price}
              </p>
            </div>

            <span
              className={`font-semibold ${
                market.change.startsWith("+")
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {market.change}
            </span>
          </div>
        ))}

        <div className="border-t border-slate-800 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">
              Market Sentiment
            </span>

            <span className="font-semibold text-emerald-400">
              Bullish
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
