"use client";

import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export async function signUp(
  name: string,
  email: string,
  password: string
) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

export async function verifySignupOtp(
  email: string,
  token: string
) {
  return await supabase.auth.verifyOtp({
    email,
    token,
    type: "signup",
  });
}

export async function resendSignupOtp(email: string) {
  return await supabase.auth.resend({
    type: "signup",
    email,
  });
}

export async function signIn(
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function signInWithGoogle() {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
    },
  });
}