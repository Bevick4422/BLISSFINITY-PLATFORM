import { CheckCircle2, Clock3 } from "lucide-react";

const phases=[
["Phase 1","Landing Website",true],
["Phase 2","Authentication",false],
["Phase 3","Dashboard",false],
["Phase 4","Signal Platform",false],
["Phase 5","Analytics",false],
["Phase 6","Community",false],
];

export default function Roadmap(){
return(
<section className="border-t border-slate-800 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Roadmap</p>
<h2 className="mt-4 text-4xl font-bold text-white">Building the Future of Professional Trading</h2>
<p className="mt-6 text-lg text-slate-400">Our roadmap to delivering a professional trading platform built for disciplined traders.</p>
</div>
<div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{phases.map(([phase,title,done])=>(
<div key={phase} className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
<div className="flex items-center justify-between">
<h3 className="text-xl font-bold text-white">{phase}</h3>
{done?<CheckCircle2 className="h-7 w-7 text-emerald-400"/>:<Clock3 className="h-7 w-7 text-yellow-400"/>}
</div>
<p className="mt-4 text-slate-300">{title}</p>
<p className="mt-2 text-sm text-slate-500">{done?"Completed":"In Progress"}</p>
</div>
))}
</div>
</div>
</section>
)}