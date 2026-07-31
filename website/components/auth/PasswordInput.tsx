"use client";

import { useState, InputHTMLAttributes } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function PasswordInput({
  error,
  className = "",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <div className="relative">
        {/* Lock Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <Lock size={18} />
        </div>

        {/* Input */}
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={`
            w-full rounded-xl border
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
            }
            bg-slate-900
            py-3
            pl-12
            pr-12
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:ring-2
            ${className}
          `}
        />

        {/* Show / Hide Button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-white"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}