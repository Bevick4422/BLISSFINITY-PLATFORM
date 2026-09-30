"use client";

import { useEffect, useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export default function TradingChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">
          Live Market Chart
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          BTCUSDT â€¢ Binance
        </p>
      </div>

      <div className="h-[500px] w-full">
        {mounted && (
          <AdvancedRealTimeChart
            theme="dark"
            symbol="BINANCE:BTCUSDT"
            autosize
            interval="60"
            hide_top_toolbar={false}
            hide_legend={false}
            withdateranges
            allow_symbol_change
          />
        )}
      </div>
    </div>
  );
}
