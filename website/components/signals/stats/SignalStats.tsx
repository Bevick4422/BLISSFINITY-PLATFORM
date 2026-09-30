"use client";

import { useEffect, useState } from "react";

interface DashboardStats {
  total_trades: number;
  open_trades: number;
  closed_trades: number;
  wins: number;
  losses: number;
  breakevens: number;
  win_rate: number;
  total_rr: number;
  average_rr: number;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export default function SignalStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await fetch(
          `${API_URL}/api/dashboard`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard statistics");
        }

        const data = await response.json();

        setStats(data);
      } catch (err) {
        console.error("Signal statistics error:", err);
        setError(true);
      }
    }

    loadStats();
  }, []);

  if (error) {
    return (
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-slate-400">
            Unable to load signal statistics.
          </p>
        </div>
      </section>
    );
  }

  if (!stats) {
    return (
      <section className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="animate-pulse rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <div className="h-5 w-32 rounded bg-slate-800" />

            <div className="mt-4 h-10 w-24 rounded bg-slate-800" />

            <div className="mt-4 h-4 w-28 rounded bg-slate-800" />
          </div>
        ))}
      </section>
    );
  }

  const statItems = [
    {
      title: "Active Signals",
      value: stats.open_trades.toString(),
      subtitle: "Currently Active",
    },
    {
      title: "Closed Trades",
      value: stats.closed_trades.toString(),
      subtitle: "Closed Trades",
    },
    {
      title: "Win Rate",
      value: `${stats.win_rate}%`,
      subtitle: "Based on Closed Trades",
    },
    {
      title: "Average R:R",
      value: `1 : ${stats.average_rr}`,
      subtitle: "Current Average",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2">
      {statItems.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
        >
          <p className="text-base text-slate-400">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-emerald-400">
            {stat.subtitle}
          </p>
        </div>
      ))}
    </section>
  );
}
