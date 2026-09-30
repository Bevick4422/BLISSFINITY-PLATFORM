import { createClient } from "@/lib/supabase/server";

class PerformanceService {
  async getSnapshot() {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("performance")
      .select("*")
      .single();

    if (error) throw error;

    return data;
  }

  async getHistory() {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("performance")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }
}

export const performanceService = new PerformanceService();
