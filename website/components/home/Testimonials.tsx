import { Star } from "lucide-react";

const testimonials=[
{name:"Alex M.",role:"Futures Trader",text:"Blissfinity has improved my discipline. The signals are clear and the risk management is excellent."},
{name:"Sarah K.",role:"Swing Trader",text:"I especially like the transparency. Every trade is tracked from entry to exit."},
{name:"David O.",role:"Crypto Investor",text:"The dashboard is clean and the AI analysis saves me hours every week."},
];

export default function Testimonials(){
return(
<section className="border-t border-slate-800 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Testimonials</p>
<h2 className="mt-4 text-4xl font-bold text-white">Trusted by Growing Traders</h2>
<p className="mt-6 text-lg text-slate-400">Early members are already benefiting from disciplined AI-powered trading insights.</p>
</div>
<div className="mt-16 grid gap-8 md:grid-cols-3">
{testimonials.map(t=>(
<div key={t.name} className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
<div className="mb-4 flex">{[1,2,3,4,5].map(i=><Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400"/>)}</div>
<p className="text-slate-300">"{t.text}"</p>
<div className="mt-8">
<h3 className="font-semibold text-white">{t.name}</h3>
<p className="text-sm text-slate-500">{t.role}</p>
</div>
</div>
))}
</div>
</div>
</section>
)}