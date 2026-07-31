import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function PrimaryButton({
  children,
  loading = false,
  disabled,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        flex w-full items-center justify-center
        rounded-xl
        bg-blue-600
        px-4 py-3
        text-sm font-semibold text-white
        transition-all duration-300
        hover:bg-blue-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500/40
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {loading ? "Signing In..." : children}
    </button>
  );
}