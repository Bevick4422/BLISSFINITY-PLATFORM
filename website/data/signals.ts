export type Signal = {
  id: string;
  pair: string;
  direction: "LONG" | "SHORT";
  timeframe: string;
  status: string;
  entry: string;
  stopLoss: string;
  tp1: string;
  tp2: string;
  score: number;
};

export const signals: Signal[] = [
  {
    id: "1",
    pair: "BTCUSDT",
    direction: "LONG",
    timeframe: "4H",
    status: "Active",
    entry: "118250 - 118500",
    stopLoss: "117400",
    tp1: "119800",
    tp2: "121200",
    score: 94,
  },
  {
    id: "2",
    pair: "ETHUSDT",
    direction: "SHORT",
    timeframe: "1H",
    status: "Waiting",
    entry: "4220 - 4240",
    stopLoss: "4285",
    tp1: "4170",
    tp2: "4115",
    score: 90,
  },
  {
    id: "3",
    pair: "SOLUSDT",
    direction: "LONG",
    timeframe: "15m",
    status: "TP1",
    entry: "248 - 250",
    stopLoss: "244",
    tp1: "255",
    tp2: "261",
    score: 91,
  },
];
