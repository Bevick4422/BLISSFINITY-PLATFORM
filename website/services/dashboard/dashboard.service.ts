import { createClient } from "@/lib/supabase/server";

class DashboardService {
  async getDashboardStats() {
    const supabase = await createClient();

    const [{ count: activeSignals }, { count: totalSignals }] =
      await Promise.all([
        supabase
          .from("signals")
          .select("*", { count: "exact", head: true })
          .eq("status", "active"),

        supabase
          .from("signals")
          .select("*", { count: "exact", head: true }),
      ]);

    return {
      activeSignals: activeSignals ?? 0,
      totalSignals: totalSignals ?? 0,
    };
  }

  async getActiveSignals() {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("signals")
      .select("*")
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) throw error;

    return data;
  }

  async getRecentSignals() {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("signals")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) throw error;

    return data;
  }

  async getNotifications() {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) throw error;

    return data;
  }
}

export const dashboardService = new DashboardService();
