import type { Direction } from "../constants/directions";
import type { SignalStatus } from "../constants/statuses";
import type { Timeframe } from "../constants/timeframes";

export interface Signal {
  id: string;

  pair: string;

  direction: Direction;

  timeframe: Timeframe;

  market_bias: string;

  entry_low: number;

  entry_high: number;

  stop_loss: number;

  tp1: number;

  tp2: number;

  confluence_score: number;

  status: SignalStatus;

  published_at: string | null;

  created_at: string;

  updated_at: string;
}
