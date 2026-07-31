import Image from "next/image";

export default function AuthLogo() {
  return (
    <div className="mb-8 text-center">
      <div className="flex justify-center">
        <Image
          src="/images/Blissfinity-logo.png.jpeg"
          alt="Blissfinity Logo"
          width={90}
          height={90}
          priority
          className="rounded-2xl"
        />
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">
        Welcome Back
      </h1>

      <p className="mt-3 text-slate-400">
        Sign in to access your professional trading dashboard.
      </p>
    </div>
  );
}