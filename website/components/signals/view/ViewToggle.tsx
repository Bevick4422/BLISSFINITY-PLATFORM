"use client";

interface ViewToggleProps {
  view: "grid" | "table";
  onChange: (view: "grid" | "table") => void;
}

export default function ViewToggle({
  view,
  onChange,
}: ViewToggleProps) {
  return (
    <div className="flex items-center rounded-xl border border-slate-800 bg-slate-900 p-1">
      <button
        type="button"
        onClick={() => onChange("grid")}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          view === "grid"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:text-white"
        }`}
      >
        Grid
      </button>

      <button
        type="button"
        onClick={() => onChange("table")}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          view === "table"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:text-white"
        }`}
      >
        Table
      </button>
    </div>
  );
}
