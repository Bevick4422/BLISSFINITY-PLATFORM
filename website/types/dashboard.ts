export interface DashboardStats {
  activeSignals: number;
  publishedSignals: number;
  totalSignals: number;
  closedTrades: number;
}

export interface DashboardPerformance {
  winRate: number;
  winningTrades: number;
  losingTrades: number;
  breakEvenTrades: number;
}

export interface DashboardNotification {
  id: string;
  title: string;
  message: string;
  created_at: string;
}

export interface DashboardSignal {
  id: number;
  symbol: string;
  direction: string;
  entry: number;
  stop_loss: number;
  tp1: number;
  tp2: number;
  confidence: number;
  state: string;
  created_at: string;
}
