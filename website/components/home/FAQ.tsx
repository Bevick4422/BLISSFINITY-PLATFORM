export default function FAQ(){
const faqs=[
["How are signals generated?","Our AI combines trend analysis, market structure, liquidity, volume and risk filters."],
["How many signals per day?","Only high-conviction setups are shared, usually 1–3 signals daily."],
["Which markets are supported?","BTC, ETH, SOL and additional futures markets will be supported."],
["Is there risk management?","Yes. Every signal includes entry, stop loss and take profit levels."]
];
return(
<section className="border-t border-slate-800 py-24">
<div className="mx-auto max-w-5xl px-6">
<div className="text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-400">FAQ</p>
<h2 className="mt-4 text-4xl font-bold text-white">Frequently Asked Questions</h2>
</div>
<div className="mt-12 space-y-6">
{faqs.map(([q,a])=>(
<div key={q} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
<h3 className="text-xl font-semibold text-white">{q}</h3>
<p className="mt-3 text-slate-400">{a}</p>
</div>
))}
</div>
</div>
</section>
)}