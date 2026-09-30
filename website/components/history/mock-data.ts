export interface SignalHistoryItem {
  id: number;
  pair: string;
  direction: "BUY" | "SELL";
  entry: number;
  stopLoss: number;
  tp1: number;
  tp2: number;
  status: "ACTIVE" | "TP1" | "TP2" | "LOSS" | "BREAKEVEN";
  result: string;
  rr: string;
  date: string;
}

export const signalHistory: SignalHistoryItem[] = [
  {
    id: 1,
    pair: "BTCUSDT",
    direction: "BUY",
    entry: 118450,
    stopLoss: 117200,
    tp1: 119800,
    tp2: 121000,
    status: "TP2",
    result: "WIN",
    rr: "1 : 3.2",
    date: "2026-08-02",
  },
  {
    id: 2,
    pair: "ETHUSDT",
    direction: "SELL",
    entry: 4320,
    stopLoss: 4380,
    tp1: 4250,
    tp2: 4175,
    status: "TP1",
    result: "PARTIAL",
    rr: "1 : 1.4",
    date: "2026-08-02",
  },
  {
    id: 3,
    pair: "SOLUSDT",
    direction: "BUY",
    entry: 245,
    stopLoss: 238,
    tp1: 252,
    tp2: 261,
    status: "LOSS",
    result: "LOSS",
    rr: "-1R",
    date: "2026-08-01",
  },
  {
    id: 4,
    pair: "BNBUSDT",
    direction: "BUY",
    entry: 920,
    stopLoss: 905,
    tp1: 938,
    tp2: 955,
    status: "ACTIVE",
    result: "-",
    rr: "-",
    date: "2026-08-03",
  },
];
