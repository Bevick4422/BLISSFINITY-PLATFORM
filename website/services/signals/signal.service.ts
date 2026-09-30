
import { databaseService } from "@/services/database/database.service";

export class SignalService {
  async getSignals() {
    const { data, error } = await databaseService
      .from("signals")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }
}

export const signalService = new SignalService();
