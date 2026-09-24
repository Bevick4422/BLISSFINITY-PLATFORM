"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User } from "lucide-react";
import { toast } from "sonner";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import PrimaryButton from "@/components/common/PrimaryButton";

import {
  registerSchema,
  RegisterFormValues,
} from "@/lib/validations/auth";

import { signUp } from "@/lib/auth/auth";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterFormValues) {
    try {
      setLoading(true);

      const { error } = await signUp(
        data.fullName,
        data.email,
        data.password
      );

      if (error) {
        toast.error(error.message);
        return;
      }

    toast.success(
  "Account created. Check your email for your verification code."
);

reset();

window.location.href =
  `/verify-email?email=${encodeURIComponent(data.email)}`;
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <AuthInput
        placeholder="Full name"
        icon={<User size={18} />}
        error={errors.fullName?.message}
        {...register("fullName")}
      />

      <AuthInput
        type="email"
        placeholder="Email address"
        icon={<Mail size={18} />}
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordInput
        placeholder="Password"
        error={errors.password?.message}
        {...register("password")}
      />

      <PasswordInput
        placeholder="Confirm password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <label className="flex items-start gap-2 text-sm text-slate-400">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-blue-600"
        />

        <span>
          I agree to the Terms of Service and Privacy Policy.
        </span>
      </label>

      <PrimaryButton
        type="submit"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account"}
      </PrimaryButton>
    </form>
  );
}
