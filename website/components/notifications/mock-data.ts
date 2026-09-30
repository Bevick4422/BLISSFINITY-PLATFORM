export interface Notification {
  id: number;
  title: string;
  message: string;
  type: "SIGNAL" | "TP1" | "TP2" | "LOSS" | "SYSTEM";
  time: string;
  read: boolean;
}

export const notifications: Notification[] = [
  {
    id: 1,
    title: "New Trading Signal",
    message: "BTCUSDT BUY signal has been published.",
    type: "SIGNAL",
    time: "5 mins ago",
    read: false,
  },
  {
    id: 2,
    title: "Take Profit 1 Hit",
    message: "ETHUSDT reached TP1 successfully.",
    type: "TP1",
    time: "20 mins ago",
    read: false,
  },
  {
    id: 3,
    title: "Trade Closed",
    message: "SOLUSDT closed at TP2.",
    type: "TP2",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    title: "Stop Loss Hit",
    message: "ADAUSDT trade closed at Stop Loss.",
    type: "LOSS",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    title: "System Update",
    message: "Platform maintenance completed successfully.",
    type: "SYSTEM",
    time: "2 days ago",
    read: true,
  },
];
