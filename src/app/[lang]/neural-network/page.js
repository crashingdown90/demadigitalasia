"use client";
import MissionList from '../../../components/MissionList';
import { Network, Activity } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dictionary } from '../../../dictionaries';

export default function NeuralNetworkPage() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.neuralNetwork || dictionary.en.neuralNetwork;

  return (
    <main className="bg-black text-white relative flex flex-col min-h-screen">
      
      {/* Background Ambience: Cyber Grid & Glow */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

      {/* Futuristic Dashboard Header */}
      <div className="pt-32 pb-24 px-4 md:px-12 w-full max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Status Chip */}
        <div className="flex items-center gap-3 mb-10 px-6 py-2 border border-blue-900/50 bg-blue-950/20 backdrop-blur-md rounded-full shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <Network className="text-blue-400 animate-spin-slow" size={16} />
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-blue-300">{t.headerTag}</span>
        </div>
        
        {/* Massive Centered Title */}
        <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] mb-16 relative">
          <span className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full" />
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
            {t.title1}
          </span>
          <br/> 
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
            {t.title2}
          </span>
        </h2>
        
        {/* Info Panels - Asymmetrical Glass Blade */}
        <div className="w-full flex flex-col lg:flex-row items-stretch bg-zinc-900/30 backdrop-blur-2xl border border-zinc-800/80 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          <div className="lg:w-3/5 p-8 md:p-12 text-left relative overflow-hidden group">
            <div className="absolute -left-20 top-0 w-64 h-full bg-blue-600/5 rotate-12 blur-3xl group-hover:bg-blue-500/10 transition-all duration-700" />
            <h3 className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-500/50" /> {t.coreLabel}
            </h3>
            <p className="text-base md:text-lg lg:text-xl font-light text-zinc-300 leading-relaxed text-balance relative z-10">
              {t.coreDesc}
            </p>
          </div>

          <div className="w-full h-px lg:w-px lg:h-auto bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-50" />

          <div className="lg:w-2/5 p-8 md:p-12 text-left relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl" />
            <div>
              <h3 className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-emerald-500/50" /> {t.instLabel}
              </h3>
              <p className="text-xs md:text-sm font-light text-zinc-400 leading-relaxed mb-6 relative z-10">
                {t.instDesc1}
              </p>
            </div>
            <div className="px-5 py-4 bg-emerald-950/30 border-l-2 border-emerald-500/50 text-emerald-300/90 font-mono text-[10px] uppercase tracking-widest leading-loose relative z-10 mt-auto">
              {t.instDesc2}
            </div>
          </div>
          
        </div>
      </div>

      {/* The 12 Pillars Auto-Slider */}
      <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <MissionList />
      </div>
    </main>
  );
}
