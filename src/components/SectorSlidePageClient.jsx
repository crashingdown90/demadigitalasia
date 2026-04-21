"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowLeft, Activity, Shield, Base, Zap } from 'lucide-react';
import Link from 'next/link';
import { dictionary } from '../dictionaries';

const getSectorImage = (id) => {
  const images = {
    finance: 'https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2000&auto=format&fit=crop',
    health: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5fe3?q=80&w=2000&auto=format&fit=crop',
    manufacture: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    gov: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop',
    logistics: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    energy: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop',
    telecom: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop',
    defense: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop'
  };
  return images[id] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop';
};

export default function SectorSlidePageClient({ sector, lang = 'en' }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < sector.slideData.length - 1) setCurrentSlide(s => s + 1);
      if (e.key === 'ArrowLeft' && currentSlide > 0) setCurrentSlide(s => s - 1);
      if (e.key === 'Escape') {
         window.location.href = `/${lang}/sector-solutions`;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, sector, lang]);

  if (!sector) return null;

  const slides = sector.slideData;
  const slide = slides[currentSlide];
  const bgImage = getSectorImage(sector.id);
  const m = dictionary[lang]?.industryMetrics || dictionary.en.industryMetrics;

  // Helper variables for content improvements
  const isTransformationSlide = currentSlide > slides.length / 2;
  const callToAction = lang === 'en' ? 'PARTNER WITH DEMA' : 'BERGABUNG BERSAMA DEMA';

  return (
    <div className="h-screen w-full bg-black flex flex-col md:flex-row font-sans text-white overflow-hidden relative selection:bg-zinc-800">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-zinc-600 rounded-full blur-[150px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[150px]" />
      </div>

      {/* LEFT PANEL: PRESENTATION AREA (70%) */}
      <div className="w-full md:w-[70%] h-full flex flex-col relative z-10 border-r border-zinc-900 bg-black/50 backdrop-blur-3xl shadow-[50px_0_100px_rgba(0,0,0,0.8)]">
        
        {/* Top Header */}
        <div className="p-8 flex items-center justify-between">
           <Link 
             href={`/${lang}/sector-solutions`}
             className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors group cursor-pointer border border-zinc-800 p-3 hover:border-zinc-600"
           >
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
             {lang === 'en' ? 'Back to Solutions' : 'Kembali ke Solusi'}
           </Link>
           
           <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">{lang === 'en' ? 'Online' : 'Aktif'}</span>
           </div>
        </div>

        {/* Dynamic Slide Content */}
        <div className="flex-1 overflow-y-auto px-8 md:px-24 flex flex-col justify-center">
           <AnimatePresence mode="wait">
             <motion.div 
               key={currentSlide}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -30 }}
               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               className="max-w-4xl"
             >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: 64 }} 
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`h-1 ${isTransformationSlide ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]'}`} 
                  />
                  <span className={`text-xs font-bold tracking-[0.5em] uppercase ${isTransformationSlide ? 'text-blue-400' : 'text-red-400'}`}>
                     {slide.title[lang] || slide.title.en}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter uppercase leading-[1.05] md:leading-[0.95] mb-10 text-white break-words">
                   {slide.headline[lang] || slide.headline.en}
                </h1>
                
                <div className="relative">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800" />
                   <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: '100%' }}
                     transition={{ duration: 1, delay: 0.3 }}
                     className="absolute left-0 top-0 w-1 bg-white"
                   />
                   
                   <p className="text-base md:text-xl lg:text-2xl font-sans text-zinc-300 leading-relaxed pl-8 md:pl-12 max-w-3xl">
                      {slide.desc[lang] || slide.desc.en}
                   </p>
                </div>
                
                {/* Persuasive Call to Action on Transformation slides */}
                {isTransformationSlide && (
                   <motion.div 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                     transition={{ delay: 0.6 }}
                     className="mt-12 inline-block"
                   >
                      <Link href={`/${lang}/initiate-handshake`} className="px-8 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center gap-3 group">
                         {callToAction} <Activity size={16} className="group-hover:rotate-90 transition-transform" />
                      </Link>
                   </motion.div>
                )}
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="p-8 md:px-24 flex items-center justify-between border-t border-zinc-900 bg-black/80">
           <div className="flex items-center gap-2 overflow-x-auto max-w-[50%] [&::-webkit-scrollbar]:hidden">
              {sector.slideData.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 transition-all duration-500 rounded-none shrink-0 ${currentSlide === idx ? 'w-12 bg-white' : 'w-4 bg-zinc-800 hover:bg-zinc-600'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
           </div>

           <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mr-4 hidden sm:block">
                Slide {currentSlide + 1} / {sector.slideData.length}
              </span>
              <button 
                onClick={() => setCurrentSlide(s => Math.max(0, s - 1))}
                disabled={currentSlide === 0}
                className="p-4 border transition-all duration-300 border-zinc-800 text-zinc-400 disabled:opacity-30 hover:bg-white hover:text-black hover:border-white disabled:hover:bg-transparent disabled:hover:text-zinc-400 disabled:hover:border-zinc-800"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentSlide(s => Math.min(sector.slideData.length - 1, s + 1))}
                disabled={currentSlide === sector.slideData.length - 1}
                className="px-6 py-4 border transition-all duration-300 border-zinc-800 text-white flex items-center gap-3 disabled:opacity-30 hover:bg-white hover:text-black hover:border-white disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-zinc-800 font-bold tracking-widest text-xs uppercase"
              >
                {currentSlide < sector.slideData.length - 1 ? (lang === 'en' ? 'Next' : 'Lanjut') : (lang === 'en' ? 'Finish' : 'Selesai')} <ChevronRight size={20} />
              </button>
           </div>
        </div>
      </div>

      {/* RIGHT PANEL: LIVE TELEMETRY DASHBOARD (30%) */}
      <div className="hidden md:flex md:w-[30%] h-full flex-col relative z-20 bg-zinc-950 border-l border-zinc-900">
         
         {/* Live Image Header */}
         <div className="h-2/5 relative w-full overflow-hidden border-b border-zinc-900 group">
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000"
               style={{ backgroundImage: `url('${bgImage}')` }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
             
             <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                   <div className="text-[9px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-2">{lang === 'en' ? 'Industry' : 'Industri'}</div>
                   <h3 className="text-xl font-black uppercase text-white tracking-wider">{sector.title[lang] || sector.title.en}</h3>
                </div>
                <div className="p-3 bg-black/50 backdrop-blur border border-zinc-800 text-white">
                   {sector.icon}
                </div>
             </div>
         </div>

         {/* Dashboard Metrics */}
         <div className="flex-1 p-6 overflow-y-auto">
            {/* Impact Text - making generic language more apparent */}
            <div className="mb-10 p-6 bg-zinc-900/50 border border-zinc-800 backdrop-blur relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />
               <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3 border-b border-zinc-800 pb-2">{lang === 'en' ? 'Business Value' : 'Nilai Bisnis'}</h4>
               <p className="text-xs text-zinc-300 leading-relaxed font-sans relative z-10">
                 {sector.impact[lang] || sector.impact.en}
               </p>
            </div>

            {/* General Corporate Metrics Layout */}
            <h4 className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase mb-4 mt-8">
               {lang === 'en' ? 'Key Advantages' : 'Keunggulan Utama'}
            </h4>
            <div className="grid grid-cols-1 gap-4 mb-10">
               {['stat1', 'stat2', 'stat3'].map((statKey, i) => {
                  const metricLabels = [m.yield, m.security, m.reliability];
                  return (
                     <div key={i} className="flex flex-col gap-1 bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/60 hover:border-zinc-600 transition-colors">
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{metricLabels[i]}</span>
                        <span className="text-[15px] font-black text-white tracking-wide">{sector.metrics[statKey]}</span>
                     </div>
                  );
               })}
            </div>

            {/* Features */}
            <h4 className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase mb-4">
               {lang === 'en' ? 'Core Features' : 'Fitur Inti'}
            </h4>
            <ul className="space-y-3">
               {(sector.subPillars[lang] || sector.subPillars.en).map((pillow, i) => (
                 <li key={i} className="flex gap-3 items-center group">
                    <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full group-hover:bg-white transition-colors shrink-0" />
                    <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-bold group-hover:text-white transition-colors">{pillow}</span>
                 </li>
               ))}
            </ul>
         </div>

      </div>
    </div>
  );
}
