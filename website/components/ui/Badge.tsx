interface BadgeProps {
  children: React.ReactNode;
  color?: "blue" | "green" | "red" | "yellow";
}

export default function Badge({
  children,
  color = "blue",
}: BadgeProps) {
  const styles = {
    blue: "bg-blue-500/10 text-blue-400",
    green: "bg-emerald-500/10 text-emerald-400",
    red: "bg-red-500/10 text-red-400",
    yellow: "bg-yellow-500/10 text-yellow-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[color]}`}
    >
      {children}
    </span>
  );
}
