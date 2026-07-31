import AuthCard from "@/components/auth/AuthCard";

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-400">
        ✓
      </div>

      <span className="text-slate-300">{text}</span>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-16">
        {/* Left Panel */}
        <section className="hidden flex-1 pr-20 lg:block">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            Join Blissfinity
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white">
            Start Trading Smarter
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Create your Blissfinity account to access professional crypto
            futures signals, disciplined risk management, and real-time market
            analysis from one secure platform.
          </p>

          <div className="mt-12 space-y-6">
            <Feature text="Professional Crypto Futures Signals" />
            <Feature text="Real-Time Market Analysis" />
            <Feature text="Disciplined Risk Management" />
            <Feature text="Member-Only Trading Dashboard" />
          </div>
        </section>

        {/* Right Panel */}
        <section className="flex flex-1 justify-center">
          <AuthCard mode="register" />
        </section>
      </div>
    </main>
  );
}