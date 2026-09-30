import PageHeader from "@/components/layout/PageHeader";
import TradeHistoryStats from "@/components/trade-history/stats/TradeHistoryStats";
import TradeHistoryFilters from "@/components/trade-history/filters/TradeHistoryFilters";
import TradeHistoryTable from "@/components/trade-history/table/TradeHistoryTable";

import { getTradeHistory } from "@/lib/api";

export default async function TradeHistoryPage() {
  const trades = await getTradeHistory();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Trade History"
        description="Review all completed trades and historical performance."
      />

      <TradeHistoryStats />

      <TradeHistoryFilters />

      <TradeHistoryTable
        trades={trades}
      />
    </div>
  );
}
