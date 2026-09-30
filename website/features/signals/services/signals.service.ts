import { databaseService } from "@/services/database/database.service";
import type { SignalFormData } from "../schemas/signal";
import { SIGNAL_STATUS } from "../constants/statuses";

class SignalsService {
  async getAll() {
    const { data, error } = await databaseService
      .from("signals")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }

  async create(signal: SignalFormData) {
    const { data, error } = await databaseService
      .from("signals")
      .insert({
        ...signal,
        status: SIGNAL_STATUS.DRAFT,
      })
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async update(id: string, signal: SignalFormData) {
    const { data, error } = await databaseService
      .from("signals")
      .update(signal)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async archive(id: string) {
    const { data, error } = await databaseService
      .from("signals")
      .update({
        status: SIGNAL_STATUS.ARCHIVED,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }
}

export const signalsService = new SignalsService();
