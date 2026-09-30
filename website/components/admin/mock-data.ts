export const adminStats = {
  totalUsers: 142,
  activeMembers: 118,
  betaTesters: 25,
  signalsToday: 3,
  activeTrades: 2,
  winRate: "89.7%",
};

export const systemStatus = [
  {
    name: "Railway",
    status: "Online",
  },
  {
    name: "Telegram",
    status: "Connected",
  },
  {
    name: "MEXC API",
    status: "Connected",
  },
  {
    name: "Scanner",
    status: "Running",
  },
  {
    name: "Trade Tracker",
    status: "Running",
  },
  {
    name: "Report Scheduler",
    status: "Running",
  },
];

export const recentSignals = [
  {
    pair: "BTCUSDT",
    direction: "BUY",
    status: "Sent",
  },
  {
    pair: "ETHUSDT",
    direction: "SELL",
    status: "TP1",
  },
  {
    pair: "SOLUSDT",
    direction: "BUY",
    status: "Active",
  },
];

export const reports = {
  daily: "Generated",
  weekly: "Scheduled",
  monthly: "Scheduled",
};
