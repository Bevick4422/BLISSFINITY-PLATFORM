import { Globe, Mail, MessageCircle } from "lucide-react";

const links = {
  Platform: ["Features", "Performance", "Roadmap", "FAQ"],
  Company: ["About", "Community", "Contact", "Privacy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Blissfinity</h2>
            <p className="mt-4 text-slate-400">
              Professional crypto futures signals backed by disciplined market analysis and transparent performance.
            </p>

            <div className="mt-6 flex gap-4">
              <Globe className="h-5 w-5 cursor-pointer text-slate-400 hover:text-white" />
              <MessageCircle className="h-5 w-5 cursor-pointer text-slate-400 hover:text-white" />
              <Mail className="h-5 w-5 cursor-pointer text-slate-400 hover:text-white" />
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold text-white">{title}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-slate-400 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-slate-400">
              Get updates about new features and trading insights.
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
            />

            <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 Blissfinity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}