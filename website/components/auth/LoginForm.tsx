"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import PrimaryButton from "@/components/common/PrimaryButton";

import {
  loginSchema,
  LoginFormValues,
} from "@/lib/validations/auth";

import { signIn } from "@/lib/auth/auth";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormValues) {
    try {
      setLoading(true);

      const { error } = await signIn(
        data.email,
        data.password
      );

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Welcome back!");

      router.push("/dashboard");
      router.refresh();

      // We'll replace this later with router.push("/dashboard")
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

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-slate-400">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-600 bg-slate-900 accent-blue-600"
          />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          Forgot Password?
        </Link>
      </div>

      <PrimaryButton
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}
      </PrimaryButton>
    </form>
  );
}