"use server";

import { signalSchema } from "../schemas/signal";
import { signalsService } from "../services/signals.service";

export async function createSignal(formData: unknown) {
  const validated = signalSchema.parse(formData);

  const signal = await signalsService.create(validated);

  return signal;
}
