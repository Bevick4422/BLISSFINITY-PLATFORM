"use server";

import { signalsService } from "../services/signals.service";

export async function archiveSignal(id: string) {
  return await signalsService.archive(id);
}
