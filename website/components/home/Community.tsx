import { Users, MessageCircle, Trophy, ShieldCheck } from "lucide-react";

const items = [
  { icon: Users, title: "2,000+ Members", desc: "A growing community of traders sharing insights every day." },
  { icon: MessageCircle, title: "Telegram Alerts", desc: "Receive AI trading signals instantly on Telegram." },
  { icon: Trophy, title: "Verified Performance", desc: "Transparent trade history and performance tracking." },
  { icon: ShieldCheck, title: "Risk First", desc: "Every signal includes structured risk management." },
];

export default function Community() {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Community
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">
            Trade Together. Grow Together.
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Join thousands of traders using Blissfinity AI signals and market insights.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">Ready to Join Blissfinity?</h3>
          <p className="mt-4 text-slate-300">Connect with our community and never miss another high-quality setup.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">Join Telegram</button>
            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800">Join Discord</button>
          </div>
        </div>
      </div>
    </section>
  );
}