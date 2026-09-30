"use server";

import { signalSchema } from "../schemas/signal";
import { signalsService } from "../services/signals.service";

export async function updateSignal(
  id: string,
  formData: unknown
) {
  const validated = signalSchema.parse(formData);

  return await signalsService.update(id, validated);
}
