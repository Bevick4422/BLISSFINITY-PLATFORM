export default function Pricing() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Choose Your Trading Plan
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Start with the free plan and upgrade when you are ready to access
            the complete trading experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold text-white">
              Free
            </h3>

            <p className="mt-2 text-slate-400">
              Explore the platform with essential features.
            </p>

            <div className="mt-8 text-5xl font-bold text-white">
              $0
            </div>

            <ul className="mt-8 space-y-4 text-slate-300">
              <li>* Dashboard Access</li>
              <li>* Market Watchlist</li>
              <li>* Community Updates</li>
            </ul>

            <button className="mt-10 w-full rounded-xl border border-slate-700 py-3 font-semibold text-white transition hover:border-blue-500">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-3xl border-2 border-blue-500 bg-slate-900 p-8 shadow-xl shadow-blue-500/20">
            <div className="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-white">
              Pro
            </h3>

            <p className="mt-2 text-slate-400">
              Built for active futures traders.
            </p>

            <div className="mt-8 text-5xl font-bold text-white">
              $49
              <span className="text-lg text-slate-400">
                /month
              </span>
            </div>

            <ul className="mt-8 space-y-4 text-slate-300">
              <li>* Premium Trading Signals</li>
              <li>* Performance Dashboard</li>
              <li>* Trade History</li>
              <li>* Watchlist</li>
              <li>* Priority Support</li>
            </ul>

            <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
              Join Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold text-white">
              Enterprise
            </h3>

            <p className="mt-2 text-slate-400">
              Tailored solutions for organizations and professional trading teams.
            </p>

            <div className="mt-8 text-5xl font-bold text-white">
              Custom
            </div>

            <ul className="mt-8 space-y-4 text-slate-300">
              <li>* API Access</li>
              <li>* Dedicated Support</li>
              <li>* Team Accounts</li>
              <li>* Custom Integrations</li>
            </ul>

            <button className="mt-10 w-full rounded-xl border border-slate-700 py-3 font-semibold text-white transition hover:border-blue-500">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

