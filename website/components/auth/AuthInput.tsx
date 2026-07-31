import { InputHTMLAttributes, ReactNode } from "react";

interface AuthInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: string;
}

export default function AuthInput({
  icon,
  error,
  className = "",
  ...props
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          {...props}
          className={`
            w-full rounded-xl border
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
            }
            bg-slate-900
            py-3
            ${icon ? "pl-12" : "pl-4"}
            pr-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:ring-2
            ${className}
          `}
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}