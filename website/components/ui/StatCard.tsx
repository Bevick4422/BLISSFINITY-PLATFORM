import Card from "./Card";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  valueColor?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  valueColor = "text-white",
}: StatCardProps) {
  return (
    <Card className="p-6">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className={`mt-3 text-3xl font-bold ${valueColor}`}>
        {value}
      </h3>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </Card>
  );
}
