"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import AuthLogo from "@/components/auth/AuthLogo";
import PrimaryButton from "@/components/common/PrimaryButton";
import {
  verifySignupOtp,
  resendSignupOtp,
} from "@/lib/auth/auth";

function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      toast.error("Email address is missing.");
      return;
    }

    if (code.length !== 8) {
      toast.error("Please enter the 8-digit verification code.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await verifySignupOtp(email, code);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Email verified successfully.");

      window.location.href = "/dashboard";
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (!email) {
      toast.error("Email address is missing.");
      return;
    }

    try {
      setResending(true);

      const { error } = await resendSignupOtp(email);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("A new verification code has been sent.");
    } catch {
      toast.error("Unable to resend the verification code.");
    } finally {
      setResending(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12">
      <div className="mx-auto flex min-h-[80vh] max-w-lg items-center justify-center">
        <div className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl">
          <AuthLogo />

          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold text-white">
              Verify your email
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Enter the 8-digit verification code sent to
            </p>

            <p className="mt-1 break-all text-sm font-medium text-blue-400">
              {email || "your email address"}
            </p>
          </div>

          <form
            onSubmit={handleVerify}
            className="mt-8 space-y-5"
          >
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={8}
              value={code}
              onChange={(e) =>
                setCode(
                  e.target.value.replace(/\D/g, "").slice(0, 8)
                )
              }
              placeholder="Enter 8-digit code"
              className="
                w-full rounded-xl border border-slate-700
                bg-slate-900 px-4 py-3 text-center
                text-lg tracking-[0.4em] text-white
                outline-none transition
                placeholder:text-sm placeholder:tracking-normal
                placeholder:text-slate-500
                focus:border-blue-500
              "
            />

            <PrimaryButton
              type="submit"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify Email"}
            </PrimaryButton>

            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="
                w-full text-sm font-medium text-blue-400
                transition hover:text-blue-300
                disabled:cursor-not-allowed disabled:opacity-50
              "
            >
              {resending
                ? "Sending..."
                : "Didn't receive the code? Resend"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950" />
      }
    >
      <VerifyEmailForm />
    </Suspense>
  );
}

