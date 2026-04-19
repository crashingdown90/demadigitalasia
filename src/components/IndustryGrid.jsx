"use client";
import { motion } from 'framer-motion';
import { industryVerticals } from '../data/content';
import { LayoutGrid, Activity, Shield, Clock } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dictionary } from '../dictionaries';
import SectorSlideModal from './SectorSlideModal';
import { useState } from 'react';

export default function IndustryGrid() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.industryGrid || dictionary.en.industryGrid;
  const m = dictionary[lang]?.industryMetrics || dictionary.en.industryMetrics;
  
  const [selectedSector, setSelectedSector] = useState(null);
  
  return (
    <section id="sector-solutions" className="bg-black pt-48 pb-32 px-6 md:px-24 border-y border-zinc-900 text-white min-h-screen relative overflow-hidden font-sans">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-zinc-500" />
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 uppercase">{t.miniTop}</h2>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mb-2 leading-[0.9] break-words">
              {t.title1}
            </h3>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter uppercase text-zinc-500 leading-[0.9] break-words">
              {t.title2}
            </h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/3"
          >
            <p className="text-sm font-sans text-zinc-400 leading-relaxed">
              {t.desc}
            </p>
          </motion.div>
        </div>

        {/* Minimalist Corporate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industryVerticals.map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedSector(v)}
              className="bg-zinc-950 border border-zinc-900 overflow-hidden relative group transition-all duration-300 hover:border-zinc-500 cursor-pointer"
            >
              <div className="p-8 relative z-20 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                      {v.icon}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-600 transition-colors duration-300">0{i + 1}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4">{v.title[lang] || v.title.en}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                    {v.impact[lang] || v.impact.en}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-zinc-900">
                    {(v.subPillars[lang] || v.subPillars.en).map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-600 group-hover:text-white transition-colors duration-300">
                        <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-zinc-300 transition-colors" /> {sp}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard Metrics - Visible on mobile, hover on desktop */}
                <div className="mt-8 pt-6 border-t border-zinc-900 transition-all duration-500 opacity-100 h-auto translate-y-0 md:opacity-0 md:h-0 md:-translate-y-4 md:invisible md:group-hover:opacity-100 md:group-hover:h-auto md:group-hover:translate-y-0 md:group-hover:visible">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-zinc-500">{m.yield}</span>
                            <span className="text-white font-bold">{v.metrics.stat1}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-zinc-500">{m.security}</span>
                            <span className="text-zinc-300 font-bold">{v.metrics.stat2}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-zinc-500">{m.reliability}</span>
                            <span className="text-zinc-300 font-bold">{v.metrics.stat3}</span>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SectorSlideModal 
        isOpen={!!selectedSector} 
        onClose={() => setSelectedSector(null)} 
        sector={selectedSector} 
        lang={lang} 
      />
    </section>
  );
}
