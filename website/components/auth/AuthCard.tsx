"use client";

import Link from "next/link";

import AuthLogo from "./AuthLogo";
import GoogleButton from "./GoogleButton";
import AuthDivider from "./AuthDivider";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthCardProps {
  mode?: "login" | "register";
}

export default function AuthCard({
  mode = "login",
}: AuthCardProps) {
  const isRegister = mode === "register";

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-xl">
      <AuthLogo />

      <GoogleButton />

      <AuthDivider />

      {isRegister ? <RegisterForm /> : <LoginForm />}

      <div className="mt-8 text-center text-sm text-slate-400">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Sign In
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Create Account
            </Link>
          </>
        )}
      </div>
    </div>
  );
}