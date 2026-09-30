
import { createClient } from "@/lib/supabase/client";

export class DatabaseService {
  private supabase = createClient();

  from(table: string) {
    return this.supabase.from(table);
  }

  get client() {
    return this.supabase;
  }
}

export const databaseService = new DatabaseService();
