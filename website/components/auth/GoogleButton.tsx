"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

import { signInWithGoogle } from "@/lib/auth/auth";

interface GoogleButtonProps {
  text?: string;
  disabled?: boolean;
}

export default function GoogleButton({
  text = "Continue with Google",
  disabled = false,
}: GoogleButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setLoading(true);

      const { error } = await signInWithGoogle();

      if (error) {
        toast.error(error.message);
        setLoading(false);
      }
    } catch {
      toast.error("Unable to continue with Google.");
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={disabled || loading}
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

      <span>
        {loading ? "Connecting..." : text}
      </span>
    </button>
  );
}
