import PageHeader from "@/components/layout/PageHeader";
import WatchlistSearch from "@/components/watchlist/search/WatchlistSearch";
import MarketTable from "@/components/watchlist/table/MarketTable";

export default function WatchlistPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Watchlist"
        description="Monitor your favorite trading pairs and market movements."
      />

      <WatchlistSearch />

      <MarketTable />
    </div>
  );
}
