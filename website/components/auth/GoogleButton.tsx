import Image from "next/image";

interface GoogleButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function GoogleButton({
  text = "Continue with Google",
  onClick,
  disabled = false,
}: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        flex w-full items-center justify-center gap-3
        rounded-xl border border-slate-700
        bg-slate-900 px-4 py-3
        text-sm font-medium text-white
        transition-all duration-300
        hover:border-blue-500
        hover:bg-slate-800
        hover:shadow-lg
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      <Image
        src="/icons/google.svg"
        alt="Google"
        width={20}
        height={20}
      />

      <span>{text}</span>
    </button>
  );
}