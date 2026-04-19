"use client";
import { ArrowUpRight, BookOpen, Key, Cuboid } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dictionary } from '../dictionaries';

export default function IntelligenceHubSection() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.intelligenceHub || dictionary.en.intelligenceHub;

  const resources = [
    { title: t.r1Title, type: t.r1Type, desc: t.r1Desc, icon: <BookOpen size={24} className="text-zinc-600 mb-6" /> },
    { title: t.r2Title, type: t.r2Type, desc: t.r2Desc, icon: <Key size={24} className="text-zinc-600 mb-6" /> },
    { title: t.r3Title, type: t.r3Type, desc: t.r3Desc, icon: <Cuboid size={24} className="text-zinc-600 mb-6" /> }
  ];

  return (
    <section id="intelligence-hub" className="bg-zinc-950 py-32 px-6 md:px-24 border-t border-zinc-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <h2 className="text-xs font-bold tracking-[0.5em] text-zinc-600 mb-6 uppercase">{t.tag}</h2>
          <h3 className="text-4xl font-black tracking-tighter uppercase italic leading-[1]">
            {t.title}
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-6 max-w-xs">
            {t.desc}
          </p>
        </div>
        
        <div className="md:w-2/3 flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {resources.map((res, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 shrink-0 snap-center group p-8 border border-zinc-800 bg-black hover:bg-zinc-900 transition-colors cursor-pointer relative overflow-hidden">
              {res.icon}
              <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-600 block mb-2">{res.type}</span>
              <span className="text-lg font-bold uppercase tracking-widest mb-4 block leading-tight">{res.title}</span>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6">{res.desc}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-zinc-600 group-hover:text-white transition-colors">
                {t.explore} <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
