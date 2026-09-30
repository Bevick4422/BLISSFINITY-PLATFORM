"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  signalSchema,
  type SignalFormInput,
  type SignalFormData,
} from "@/features/signals/schemas/signal";

export function useSignalForm() {
  return useForm<SignalFormInput, unknown, SignalFormData>({
    resolver: zodResolver(signalSchema),

    defaultValues: {
      pair: "",
      direction: "LONG",
      timeframe: "1H",
      market_bias: "Bullish",
      entry_low: 0,
      entry_high: 0,
      stop_loss: 0,
      tp1: 0,
      tp2: 0,
      confluence_score: 80,
      trade_summary: "",
    },

    mode: "onBlur",
  });
}
