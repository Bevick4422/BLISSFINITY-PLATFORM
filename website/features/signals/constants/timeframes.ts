export const TIMEFRAMES = [
  "15m",
  "1H",
  "4H",
  "1D",
] as const;

export type Timeframe =
  (typeof TIMEFRAMES)[number];
