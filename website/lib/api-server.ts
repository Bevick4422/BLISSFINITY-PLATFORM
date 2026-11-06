import { createClient } from "@/lib/supabase/server";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

async function serverAuthenticatedFetch(path: string) {
  const supabase = await createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session?.access_token) {
    throw new Error("AUTHENTICATION REQUIRED");
  }

  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API REQUEST FAILED: ${response.status}`);
  }

  return response.json();
}

export async function getServerDashboardStats() {
  return serverAuthenticatedFetch("/api/dashboard");
}

export async function getServerOpenSignals() {
  const trades = await serverAuthenticatedFetch("/api/signals");

  if (!Array.isArray(trades)) {
    return [];
  }

  return trades.map((trade: any) => ({
    id: trade.id,
    symbol: trade.symbol,
    direction: trade.direction,
    entry: trade.entry,
    stop_loss: trade.stop_loss,
    tp1: trade.tp1,
    tp2: trade.tp2,
    confidence: trade.confidence,
    state: trade.state,
    created_at: trade.created_at ?? trade.opened_at,
  }));
}

export async function getServerTradeHistory() {
  const trades = await serverAuthenticatedFetch("/api/trade-history");

  if (!Array.isArray(trades)) {
    return [];
  }

  return trades.map((trade: any) => ({
    id: trade.id,
    symbol: trade.symbol,
    direction: trade.direction,
    entry: trade.entry,
    stop_loss: trade.stop_loss,
    tp1: trade.tp1,
    tp2: trade.tp2,
    result: trade.result,
    rr: trade.rr,
    profit_percent: trade.profit_percent,
    profit_usdt: trade.profit_usdt,
    state: trade.state,
    created_at: trade.created_at ?? trade.opened_at,
    closed_at: trade.closed_at ?? null,
  }));
}
