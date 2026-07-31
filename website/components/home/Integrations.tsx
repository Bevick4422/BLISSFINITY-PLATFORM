import { Bot, BarChart3, MessageCircle, ShieldCheck, Cloud, CandlestickChart } from "lucide-react";

const integrations=[
{icon:CandlestickChart,name:"TradingView",desc:"Professional charting and market analysis."},
{icon:MessageCircle,name:"Telegram",desc:"Instant signal delivery to your phone."},
{icon:BarChart3,name:"MEXC API",desc:"Real-time futures market data."},
{icon:Bot,name:"AI Engine",desc:"Multi-factor signal generation."},
{icon:ShieldCheck,name:"Risk Engine",desc:"Automated stop-loss and TP management."},
{icon:Cloud,name:"Cloud Infrastructure",desc:"Reliable 24/7 platform uptime."},
];

export default function Integrations(){
return(
<section className="border-t border-slate-800 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Integrations</p>
<h2 className="mt-4 text-4xl font-bold text-white">Powered by Professional Tools</h2>
<p className="mt-6 text-lg text-slate-400">Blissfinity combines trusted trading technology with AI to deliver reliable trading signals.</p>
</div>
<div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{integrations.map(i=>{const Icon=i.icon;return(
<div key={i.name} className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500/40 transition-colors">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
<Icon className="h-7 w-7 text-blue-400"/>
</div>
<h3 className="mt-6 text-xl font-semibold text-white">{i.name}</h3>
<p className="mt-4 text-slate-400">{i.desc}</p>
</div>)})}
</div>
</div>
</section>
)}