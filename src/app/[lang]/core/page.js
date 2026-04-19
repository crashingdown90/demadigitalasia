"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Eye, Crosshair, Hexagon, Terminal, Activity } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dictionary } from '../../../dictionaries';

export default function CorePage() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.coreAbout || dictionary.en.coreAbout;
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Data mapping for timeline
  const timelineData = [
    { year: t.timelineLog1.year, title: t.timelineLog1.title, desc: t.timelineLog1.desc },
    { year: t.timelineLog2.year, title: t.timelineLog2.title, desc: t.timelineLog2.desc },
    { year: t.timelineLog3.year, title: t.timelineLog3.title, desc: t.timelineLog3.desc },
    { year: t.timelineLog4.year, title: t.timelineLog4.title, desc: t.timelineLog4.desc }
  ];

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen pt-32 pb-40 relative flex flex-col items-center">
      
      {/* Background Ambience - Minimalist */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Layer 1: The Executive Manifesto */}
      <section className="max-w-7xl w-full px-6 md:px-12 relative z-10 pt-20 mb-32 md:mb-52">
        <div className="flex items-center gap-4 mb-10">
          <Hexagon className="text-zinc-500" size={16} />
          <h2 className="text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase">{t.manifestoTag}</h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] w-full break-words"
          >
            {t.manifestoTitle1} <br className="hidden sm:block" /> <span className="text-zinc-600 font-light">{t.manifestoTitle2}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-2/3 lg:ml-auto pt-4 border-l-2 border-zinc-800 pl-6 md:pl-10"
          >
            <p className="text-sm md:text-base font-sans text-zinc-300 leading-relaxed mb-6">
              {t.manifestoDesc1}
            </p>
            <p className="text-sm md:text-base font-sans text-zinc-500 leading-relaxed">
              {t.manifestoDesc2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layer 2 & 3 Container */}
      <section className="max-w-7xl w-full px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-10 mb-32">
        
        {/* Layer 2: Evolutionary Timeline (Left side) */}
        <div className="lg:w-1/3">
          <div className="sticky top-40">
            <h3 className="text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase flex items-center gap-4 mb-16">
              <Terminal size={14} /> {t.timelineTag}
            </h3>

            <div className="relative border-l border-zinc-800 pl-8 md:pl-12 flex flex-col gap-12">
              {timelineData.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node Ring */}
                  <div className="absolute -left-[33px] md:-left-[49px] top-0 w-3 h-3 rounded-none bg-black border border-zinc-500 group-hover:border-white group-hover:bg-white transition-all transform -translate-x-1/2 mt-1.5" />
                  
                  <span className="text-[10px] text-zinc-500 font-sans tracking-widest block mb-2">{log.year}</span>
                  <h4 className="text-lg font-bold tracking-wider uppercase mb-3 text-zinc-200 group-hover:text-white transition-colors">{log.title}</h4>
                  <p className="text-xs text-zinc-500 font-sans leading-relaxed max-w-sm group-hover:text-zinc-400 transition-colors">
                    {log.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Layer 3: Asymmetrical Bento Leadership DNA (Right side) */}
        <motion.div style={{ y: yParallax }} className="lg:w-2/3 flex flex-col gap-4">
          <h3 className="text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase flex items-center justify-end gap-4 mb-8 hidden lg:flex">
            {t.bentoTag} <Activity size={14} />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vision Node - Large, spans full width on mobile, 1 col on desktop */}
            <div className="p-8 md:p-12 border border-zinc-900 bg-zinc-950 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity p-8">
                <Eye size={120} />
              </div>
              <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600" /> {t.bentoVision}
              </h4>
              <p className="text-sm md:text-lg font-sans text-zinc-300 leading-relaxed font-bold break-words">
                {t.bentoVisionDesc}
              </p>
            </div>

            {/* Mission Node */}
            <div className="p-8 md:p-12 border border-zinc-900 bg-zinc-950 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity p-8">
                <Crosshair size={120} />
              </div>
              <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600" /> {t.bentoMission}
              </h4>
              <p className="text-sm md:text-base font-sans text-zinc-400 leading-loose">
                {t.bentoMissionDesc}
              </p>
            </div>

            {/* Compliance Node - Spans both columns */}
            <div className="md:col-span-2 p-8 md:p-12 border border-zinc-900 bg-zinc-950/50 relative overflow-hidden group hover:bg-zinc-900/50 transition-colors flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="p-4 bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4">{t.bentoCompliance}</h4>
                <p className="text-xs md:text-sm font-sans text-zinc-400 leading-loose max-w-2xl">
                  {t.bentoComplianceDesc}
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>

      </section>

      {/* Strategic Partners Section */}
      <div className="max-w-7xl mx-auto w-full border-t border-zinc-900 pt-20 px-6 md:px-12">
        <div className="text-center mb-16">
           <h4 className="text-xs md:text-sm font-bold tracking-[0.4em] text-zinc-500 uppercase">
             Strategic Technology Partners
           </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 relative gap-4">
           {/* Render Partners and Empty Logic Boxes */}
           {[
             { logo: '/Logo_Google.png', name: 'Google' },
             { logo: '/Logo_Nvidia.png', name: 'Nvidia' },
             ...Array.from({ length: 8 }).map((_, i) => ({ logo: null, name: `SLOT ${(i + 3).toString().padStart(2, '0')}` }))
           ].map((partner, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: idx * 0.05 }}
               className="aspect-[3/2] border border-zinc-900 bg-zinc-950 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:border-zinc-700 transition-all duration-300 cursor-pointer group p-6"
             >
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <span className="text-[10px] font-bold uppercase text-zinc-700 tracking-widest group-hover:text-zinc-400 transition-colors">
                    {partner.name}
                  </span>
                )}
             </motion.div>
           ))}
        </div>
      </div>

    </main>
  );
}
