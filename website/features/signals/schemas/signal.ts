import { z } from "zod";

export const signalSchema = z.object({
  pair: z.string().min(1, "Trading pair is required").max(20),
  direction: z.enum(["LONG", "SHORT"]),
  timeframe: z.string(),
  market_bias: z.string(),
  entry_low: z.coerce.number().positive(),
  entry_high: z.coerce.number().positive(),
  stop_loss: z.coerce.number().positive(),
  tp1: z.coerce.number().positive(),
  tp2: z.coerce.number().positive(),
  confluence_score: z.coerce.number().min(0).max(100),
  trade_summary: z.string().min(10).max(1000),
});

export type SignalFormInput = z.input<typeof signalSchema>;
export type SignalFormData = z.output<typeof signalSchema>;
