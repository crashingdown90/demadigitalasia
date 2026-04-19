import Link from 'next/link';
import { ArrowRight, Terminal, Crosshair, Zap, BrainCircuit, Shield, Laptop, LineChart, Target, ShieldAlert } from 'lucide-react';

import { dictionary } from '../../../dictionaries';

export const metadata = {
  title: 'Careers | Executive Unit | DEMA DIGITAL ASIA',
  description: 'Join the elite tactical engineering and intelligence unit shaping the future of enterprise digital infrastructure.',
};

export default async function CareersPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const t = dictionary[lang]?.careers || dictionary.en.careers;

  const iconMappingBenefits = [
    <Laptop key="1" />, <LineChart key="2" />, <Zap key="3" />, <ShieldAlert key="4" />
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-32 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">
        
        {/* Bento Grid Hero */}
        <div className="grid md:grid-cols-3 gap-6 mb-32 items-stretch">
          <div className="md:col-span-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-1000" />
            <div className="flex items-center gap-4 mb-8">
              <Terminal size={14} className="text-emerald-500 animate-pulse" />
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 uppercase">{t.heroTag}</h2>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8 relative z-10 text-white">
              {t.title1} <br /> <span className="text-zinc-600">{t.title2}</span>
            </h1>
            <p className="text-xs md:text-sm font-mono text-zinc-400 leading-relaxed border-l-2 border-emerald-900 pl-6 max-w-xl relative z-10">
              {t.heroDesc}
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex-1 bg-black border border-zinc-900 justify-center flex flex-col items-center text-center p-8 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-bold text-zinc-500 tracking-[0.4em] uppercase mb-4">{t.rateLabel}</span>
              <span className="text-4xl font-black text-emerald-500">&lt; 1%</span>
            </div>
            <div className="flex-1 bg-black border border-zinc-900 justify-center flex flex-col items-center text-center p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <span className="text-xs font-bold text-zinc-500 tracking-[0.4em] uppercase mb-4 relative z-10">{t.statusLabel}</span>
              <span className="text-lg font-black text-white uppercase tracking-widest relative z-10 flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> {t.statusVal}
              </span>
            </div>
          </div>
        </div>

        {/* Benefits Module */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b border-zinc-900 pb-6">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest">
              {t.perksTitle}
            </h3>
            <span className="hidden sm:block text-[10px] tracking-[0.4em] font-mono text-zinc-600 uppercase">{t.perksTag}</span>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {t.benefits.map((perk, i) => (
              <div key={i} className="bg-black border border-zinc-900 p-8 flex flex-col hover:bg-zinc-950 transition-colors group">
                <div className="text-zinc-600 mb-6 group-hover:text-emerald-500 transition-colors duration-500">
                  {iconMappingBenefits[i]}
                </div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-3 leading-loose">{perk.title}</h4>
                <p className="text-[10px] text-zinc-500 font-mono leading-relaxed">{perk.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruitment Protocol Timeline */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-16 border-b border-zinc-900 pb-6">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest">
              {t.pipeTitle}
            </h3>
            <span className="hidden sm:block text-[10px] tracking-[0.4em] font-mono text-zinc-600 uppercase">{t.pipeTag}</span>
          </div>
          <div className="grid md:grid-cols-4 gap-4 relative">
             {/* Connector Line hidden on mobile */}
             <div className="hidden md:block absolute top-[28px] left-8 right-8 h-px bg-zinc-900 z-0" />
             
             {t.phases.map((phase, i) => (
               <div key={i} className="relative z-10 bg-black/60 backdrop-blur-md p-6 border border-zinc-900 border-t-2 hover:border-t-emerald-500 transition-colors duration-500 group">
                 <div className="text-3xl font-black text-zinc-800 group-hover:text-emerald-500/20 transition-colors mb-4 italic">{phase.no}</div>
                 <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-3">{phase.title}</h4>
                 <p className="text-[10px] text-zinc-500 font-mono leading-relaxed">{phase.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Enlarged Role Directives */}
        <div className="border-t border-zinc-900 pt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-6">
                {t.openTitle}
              </h3>
              <p className="text-[11px] font-mono text-zinc-500 max-w-lg leading-relaxed text-balance">
                {t.openDesc}
              </p>
            </div>
            <div className="px-4 py-2 border border-emerald-900 bg-emerald-950/30 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.3em] font-mono whitespace-nowrap">
              {t.openCount}{t.roles.length}
            </div>
          </div>
          
          <div className="space-y-6">
            {t.roles.map((role, idx) => (
              <div key={idx} className="bg-zinc-950/50 border border-zinc-900 hover:border-zinc-700 p-8 md:p-12 transition-all duration-500 group">
                <div className="flex flex-col xl:flex-row gap-12">
                  <div className="xl:w-1/3">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-2 py-1 bg-zinc-900 text-zinc-400 text-[9px] font-bold uppercase tracking-widest">{role.dept}</span>
                      <span className="text-[10px] text-zinc-600 font-mono">{role.loc}</span>
                    </div>
                    <h4 className="text-2xl font-black text-white uppercase tracking-widest mb-6 leading-snug">{role.title}</h4>
                    <div className="space-y-2">
                       <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                          <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold">{t.clearanceLabel}</span>
                          <span className="text-[10px] font-mono text-white">{role.clearance}</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                          <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold">{t.contractLabel}</span>
                          <span className="text-[10px] font-mono text-white">{role.contract}</span>
                       </div>
                    </div>
                  </div>
                  
                  <div className="xl:w-2/3 flex flex-col justify-between">
                    <div>
                      <h5 className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-2"><Target size={12}/> {t.missionLabel}</h5>
                      <p className="text-[11px] md:text-xs text-zinc-400 font-mono leading-relaxed mb-8">{role.mission}</p>
                      
                      <h5 className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-2"><Shield size={12}/> {t.techLabel}</h5>
                      <div className="flex flex-wrap gap-2 mb-10">
                        {role.tools.map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 py-1.5 border border-zinc-800 text-[9px] font-mono text-zinc-300 bg-black group-hover:border-zinc-600 group-hover:text-white transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <a href={`mailto:careers@demadigital.asia?subject=Directive%20Protocol:%20${encodeURIComponent(role.title)}`} className="w-full sm:w-auto px-8 py-4 bg-white text-[10px] font-bold tracking-[0.2em] text-black uppercase hover:bg-emerald-500 hover:text-white transition-colors text-center shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                        {t.btnApply}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
