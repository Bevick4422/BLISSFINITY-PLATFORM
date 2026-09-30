
import { databaseService } from "@/services/database/database.service";

export class AuthService {
  async getCurrentUser() {
    const {
      data: { user },
    } = await databaseService.client.auth.getUser();

    return user;
  }

  async signOut() {
    await databaseService.client.auth.signOut();
  }
}

export const authService = new AuthService();
