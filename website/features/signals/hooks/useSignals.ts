"use client";

import { useEffect, useState } from "react";
import { signalsService } from "../services/signals.service";
import type { Signal } from "../types/signal";

export function useSignals() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSignals() {
      try {
        const data = await signalsService.getAll();
        setSignals(data);
      } finally {
        setLoading(false);
      }
    }

    loadSignals();
  }, []);

  return {
    signals,
    loading,
  };
}
