"use client";

import { useSignalForm } from "../hooks/useSignalForm";

export default function SignalForm() {
  const form = useSignalForm();

  const onSubmit = (data: unknown) => {
    console.log("Validated Signal:", data);
  };  return (
    <form
  onSubmit={form.handleSubmit(onSubmit)}
  className="space-y-8"
>

      {/* General */}

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">
          General Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Trading Pair
            </label>

            <input
              placeholder="BTCUSDT"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Direction
            </label>

            <select className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white">
              <option>LONG</option>
              <option>SHORT</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Timeframe
            </label>

            <select className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white">
              <option>15m</option>
              <option>1H</option>
              <option>4H</option>
              <option>1D</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Market Bias
            </label>

            <select className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white">
              <option>Bullish</option>
              <option>Bearish</option>
              <option>Neutral</option>
            </select>
          </div>

        </div>

      </div>

      {/* Trade Levels */}

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">
          Trade Levels
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <input
            placeholder="Entry Low"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />

          <input
            placeholder="Entry High"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />

          <input
            placeholder="Stop Loss"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />

          <input
            placeholder="Take Profit 1"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />

          <input
            placeholder="Take Profit 2"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />

          <input
            placeholder="Confluence Score"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />

        </div>

      </div>

      {/* Trade Summary */}

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">
          Trade Summary
        </h2>

        <textarea
          rows={6}
          placeholder="Describe why this trade exists..."
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
        />

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          className="rounded-lg border border-slate-700 px-6 py-3 text-white"
        >
          Save Draft
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Publish Signal
        </button>

      </div>

    </form>
  );
}
