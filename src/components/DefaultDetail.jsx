import { CheckCircle2 } from 'lucide-react';

export default function DefaultDetail({ pillar, lang = 'en' }) {
  const statsArray = Array.isArray(pillar.stats) ? pillar.stats : (pillar.stats?.[lang] || pillar.stats?.en || []);

  return (
    <div className="animate-in fade-in duration-1000 slide-in-from-bottom-10">
        <div className="pt-16 border-t border-zinc-900 grid md:grid-cols-2 gap-12">
            <div>
               <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-white" /> Technical Capabilities
               </h3>
               <ul className="space-y-6 flex-grow">
                  {statsArray.map((stat, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                     <CheckCircle2 size={16} className="text-zinc-600" /> {stat}
                  </li>
                  ))}
               </ul>
            </div>
            
            <div className="bg-black p-8 border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-colors">
               <div>
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-4">Enterprise Integration</h3>
                  <p className="text-[11px] text-zinc-500 leading-loose font-mono mb-8">
                     Arsitektur <span className="text-zinc-300 font-bold">{pillar.title}</span> murni direkayasa untuk skalabilitas level state. Kami menyediakan container Docker & Gateway isolasi untuk injeksi mulus ke dalam lingkungan legacy Anda.
                  </p>
               </div>
               <button className="w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors">
                  Request Blueprint API
               </button>
            </div>
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-900">
           <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2">
                 <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-10 flex items-center gap-4">
                    <span className="w-8 h-px bg-white" /> Execution Protocol
                 </h3>
                 
                 <div className="space-y-8">
                    <div className="border-l border-zinc-800 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-600" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Phase 1: Deep Audit</h4>
                       <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">Menganalisis gesekan infrastruktur legacy dan merumuskan titik injeksi komputasi yang tepat guna.</p>
                    </div>
                    <div className="border-l border-emerald-900 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                       <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Phase 2: Active Deployment</h4>
                       <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">Instalasi parameter analitik {pillar.title} ke dalam server Edge atau Private Cloud Anda secara terenkripsi mutlak.</p>
                    </div>
                    <div className="border-l border-zinc-800 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-600" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Phase 3: Autonomous Pivot</h4>
                       <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">Penyerahan kendali siklus kepada tim eksekutif (Dashboard) untuk memantau optimalisasi metrik secara real-time (24/7/365).</p>
                    </div>
                 </div>
              </div>
              
              <div className="md:w-1/2 bg-black border border-zinc-900 p-6 flex flex-col">
                 <h3 className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-6 flex justify-between">
                    <span>API / Terminal Init</span>
                    <span className="px-2 py-1 bg-emerald-900/30 text-emerald-500">SYSTEM.SECURE</span>
                 </h3>
                 <div className="flex-grow bg-[#050505] font-mono text-[10px] md:text-xs text-emerald-500 p-6 border gap-2 border-zinc-900/50 rounded-sm">
                    <div className="text-zinc-600 mb-4 tracking-widest"># Requesting secured enterprise handshake...</div>
                    <div className="mb-4 text-zinc-300 leading-relaxed">
                    <span className="text-pink-500">curl</span> -X POST https://api.demadigital.asia/v2/core/<span className="text-cyan-400">{pillar.id}</span> \<br/>
                    -H <span className="text-yellow-500">"Authorization: Bearer [ENTERPRISE_TOKEN]"</span> \<br/>
                    -H <span className="text-yellow-500">"Content-Type: application/json"</span> \<br/>
                    -d '<span className="text-orange-400">&#123;"deployment_zone": "asia-southeast"&#125;</span>'
                    </div>
                    <div className="text-blue-400 mt-6 font-bold">{">>"} STATUS 200 OK</div>
                    <div className="text-zinc-400 mt-2">{">>"} Handshake verified. </div>
                    <div className="text-zinc-400 mt-2">{">>"} Module [<span className="text-white">{pillar.title}</span>] mounted successfully.</div>
                    <div className="text-zinc-400 mt-2">{">>"} Waiting for command payload execution...</div>
                    <div className="mt-4 text-emerald-500 animate-pulse font-black text-lg">_</div>
                 </div>
              </div>
           </div>
        </div>
    </div>
  );
}
