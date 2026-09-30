export const DIRECTIONS = [
  "LONG",
  "SHORT",
] as const;

export type Direction =
  (typeof DIRECTIONS)[number];
