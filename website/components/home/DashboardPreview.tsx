import { Activity, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";

const stats=[
{icon:Activity,title:"Active Signals",value:"12",color:"text-blue-400"},
{icon:TrendingUp,title:"Win Rate",value:"84%",color:"text-emerald-400"},
{icon:BarChart3,title:"Today's Trades",value:"5",color:"text-purple-400"},
{icon:ShieldCheck,title:"Risk / Trade",value:"1%",color:"text-amber-400"},
];

const signals=[
{pair:"BTCUSDT",side:"LONG",entry:"108,250",target:"111,400",status:"Active",sideColor:"text-emerald-400",badge:"bg-emerald-500/20 text-emerald-400"},
{pair:"ETHUSDT",side:"SHORT",entry:"4,280",target:"4,050",status:"TP1 Hit",sideColor:"text-red-400",badge:"bg-blue-500/20 text-blue-400"},
{pair:"SOLUSDT",side:"LONG",entry:"198.60",target:"214.00",status:"Waiting",sideColor:"text-emerald-400",badge:"bg-yellow-500/20 text-yellow-400"},
];

export default function DashboardPreview(){
return(
<section className="border-t border-slate-800 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Dashboard Preview</p>
<h2 className="mt-4 text-4xl font-bold text-white">Professional Trading Dashboard</h2>
<p className="mt-6 text-lg text-slate-400">Monitor live signals, track performance and manage trades from one dashboard.</p>
</div>
<div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8">
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
{stats.map((item)=>{const Icon=item.icon;return(<div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6"><Icon className={`h-8 w-8 ${item.color}`}/><p className="mt-4 text-sm text-slate-400">{item.title}</p><h3 className="mt-2 text-3xl font-bold text-white">{item.value}</h3></div>)})}
</div>
<div className="mt-10 overflow-hidden rounded-2xl border border-slate-800"><table className="w-full"><thead className="bg-slate-950"><tr><th className="p-4 text-left text-slate-400">Pair</th><th className="p-4 text-left text-slate-400">Side</th><th className="p-4 text-left text-slate-400">Entry</th><th className="p-4 text-left text-slate-400">Target</th><th className="p-4 text-left text-slate-400">Status</th></tr></thead><tbody>{signals.map((s)=><tr key={s.pair} className="border-t border-slate-800"><td className="p-4 text-white font-medium">{s.pair}</td><td className={`p-4 font-semibold ${s.sideColor}`}>{s.side}</td><td className="p-4 text-white">{s.entry}</td><td className="p-4 text-white">{s.target}</td><td className="p-4"><span className={`rounded-full px-3 py-1 text-sm ${s.badge}`}>{s.status}</span></td></tr>)}</tbody></table></div>
</div></div></section>
);}