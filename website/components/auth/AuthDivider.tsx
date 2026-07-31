interface AuthDividerProps {
  text?: string;
}

export default function AuthDivider({
  text = "OR CONTINUE WITH EMAIL",
}: AuthDividerProps) {
  return (
    <div className="my-6 flex items-center">
      <div className="h-px flex-1 bg-slate-700" />

      <span className="mx-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {text}
      </span>

      <div className="h-px flex-1 bg-slate-700" />
    </div>
  );
}