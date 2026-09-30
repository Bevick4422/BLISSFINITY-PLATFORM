export const SIGNAL_STATUS = {
  DRAFT: "draft",
  PUBLISHED: "published",
  WAITING: "waiting",
  ACTIVE: "active",
  TP1: "tp1",
  BREAK_EVEN: "break_even",
  TP2: "tp2",
  CLOSED: "closed",
  STOPPED: "stopped",
  CANCELLED: "cancelled",
  ARCHIVED: "archived",
} as const;

export type SignalStatus =
  (typeof SIGNAL_STATUS)[keyof typeof SIGNAL_STATUS];
