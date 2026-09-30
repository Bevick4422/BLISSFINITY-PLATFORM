const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

/**
 * Dashboard Statistics
 */
export async function getDashboardStats() {
  const response = await fetch(
    `${API_URL}/api/dashboard`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch dashboard statistics."
    );
  }

  return response.json();
}

/**
 * Open / Active Signals
 */
export async function getOpenSignals() {
  const response = await fetch(
    `${API_URL}/api/signals`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch open signals."
    );
  }

  const trades = await response.json();

  return trades.map((trade: any) => ({
    id: trade.id,
    pair: trade.symbol,
    direction: trade.direction,
    timeframe: "4H",
    status: trade.state,
    entry: trade.entry,
    stopLoss: trade.stop_loss,
    tp1: trade.tp1,
    tp2: trade.tp2,
    confidence: trade.confidence,
    setup: trade.setup,
    openedAt: trade.opened_at,
  }));
}

/**
 * Backward-compatible alias.
 *
 * Existing components can continue using
 * getActiveSignals if they already import it.
 */
export async function getActiveSignals() {
  return getOpenSignals();
}

/**
 * Trade History
 */
export async function getTradeHistory() {
  const response = await fetch(
    `${API_URL}/api/trade-history`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch trade history."
    );
  }

  const trades = await response.json();

  return trades.map((trade: any) => ({
    id: trade.id,
    pair: trade.symbol,
    direction: trade.direction,
    entry: trade.entry,
    exit: trade.tp2,
    result: trade.result ?? trade.state,
    roi:
      trade.profit_percent !== null &&
      trade.profit_percent !== undefined
        ? `${trade.profit_percent}%`
        : "--",
    date: trade.closed_at ?? trade.opened_at,
  }));
}
