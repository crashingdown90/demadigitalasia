"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import { dictionary } from '../dictionaries';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationClusters } from '../data/content';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.nav || dictionary.en.nav;

  // Build locale-switched path: replace /en/ or /id/ prefix
  const switchLocalePath = (targetLang) => {
    const segments = pathname.split('/');
    segments[1] = targetLang;
    return segments.join('/');
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900/50 px-6 md:px-12 py-5 flex justify-between items-center text-white">
        <div className="flex items-center gap-16">
          <Link href={`/${lang}`} className="text-xl sm:text-3xl font-black tracking-tighter cursor-pointer">
            DEMA<span className="font-light tracking-[0.3em] text-xs ml-3 opacity-60">DIGITAL ASIA</span>
          </Link>
          
          <ul className="hidden lg:flex items-center gap-8 -ml-8">
            <li><Link href={`/${lang}/sector-solutions`} className="text-zinc-400 hover:text-white uppercase tracking-widest text-[9px] font-bold transition-colors">{t.sectorSolutions}</Link></li>
            <li><Link href={`/${lang}/neural-network`} className="text-zinc-400 hover:text-white uppercase tracking-widest text-[9px] font-bold transition-colors">{t.servicesDirectory}</Link></li>
            <li><Link href={`/${lang}/core`} className="text-zinc-400 hover:text-white uppercase tracking-widest text-[9px] font-bold transition-colors">{t.corpProfile}</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher Desktop — path-aware */}
          <div className="hidden lg:flex items-center border border-zinc-800 rounded bg-black p-1 mr-4">
             <Link href={switchLocalePath('en')} className={`px-3 py-1 text-[9px] font-mono font-bold tracking-widest rounded transition-all ${lang === 'en' ? 'text-white bg-zinc-900' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>EN</Link>
             <span className="text-zinc-800">|</span>
             <Link href={switchLocalePath('id')} className={`px-3 py-1 text-[9px] font-mono font-bold tracking-widest rounded transition-all ${lang === 'id' ? 'text-white bg-zinc-900' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>ID</Link>
          </div>
          
          <Link href={`/${lang}/initiate-handshake`} className="hidden lg:flex items-center gap-2 border border-zinc-700 bg-white/5 text-white hover:bg-white hover:text-black transition-colors px-6 py-2 tracking-widest uppercase text-[10px] font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            {t.initiateHandshake}
          </Link>
          <button onClick={() => setIsMenuOpen(true)} className="group p-2">
            <Menu className="group-hover:scale-110 transition-transform text-white" size={24} />
          </button>
        </div>
      </header>

      {/* Full-Screen Enterprise Command Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-[110] bg-black text-white overflow-hidden flex flex-col"
          >
            {/* Background Ambience & Watermark */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute -right-40 -bottom-40 text-[30vw] font-black text-zinc-900/30 tracking-tighter pointer-events-none select-none z-0">
              DEMA.
            </div>

            <div className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8 border-b border-zinc-900">
              <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 uppercase hidden sm:block">{t.menuDirectory}</span>
              {/* Mobile Language Switcher — path-aware */}
              <div className="flex sm:hidden items-center border border-zinc-800 rounded bg-black p-1">
                 <Link href={switchLocalePath('en')} onClick={() => setIsMenuOpen(false)} className={`px-3 py-1 text-[9px] font-mono font-bold tracking-widest rounded transition-all ${lang === 'en' ? 'text-white bg-zinc-900' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>EN</Link>
                 <span className="text-zinc-800">|</span>
                 <Link href={switchLocalePath('id')} onClick={() => setIsMenuOpen(false)} className={`px-3 py-1 text-[9px] font-mono font-bold tracking-widest rounded transition-all ${lang === 'id' ? 'text-white bg-zinc-900' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>ID</Link>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-4 hover:bg-zinc-900 hover:rotate-90 transition-all duration-300 rounded-full border border-zinc-900 hover:border-emerald-500 ml-auto sm:ml-0">
                <X size={24} className="text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row gap-20">
              
              {/* Main Directory Links */}
              <div className="flex-1 flex flex-col justify-center gap-2 md:gap-4">
                {navigationClusters.map((nav, i) => (
                  <Link 
                    key={nav.id} 
                    href={`/${lang}/${nav.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-8 py-4 border-b border-zinc-900 hover:border-emerald-500/50 transition-colors"
                  >
                    <span className="text-[10px] text-zinc-600 font-mono font-bold">0{i + 1}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic text-zinc-300 group-hover:text-white transition-colors flex items-center gap-6"
                    >
                      {nav.label[lang] || nav.label.en}
                      <ArrowRight size={48} className="opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-emerald-500 hidden md:block" />
                    </motion.span>
                  </Link>
                ))}
              </div>

              {/* Auxiliary Corporate Links (Right Column) */}
              <div className="md:w-1/3 flex flex-col justify-end gap-16 pb-12">
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-6 border-l pl-4 border-zinc-800">{t.menuOperatives}</h4>
                  <ul className="flex flex-col gap-4 text-xs tracking-widest font-bold uppercase text-zinc-400">
                    <li className="hover:text-emerald-500 transition-colors"><Link href={`/${lang}/initiate-handshake`} onClick={() => setIsMenuOpen(false)}>{t.menuHandshake}</Link></li>
                    <li className="hover:text-emerald-500 transition-colors"><Link href={`/${lang}/careers`} onClick={() => setIsMenuOpen(false)}>{t.menuCareers}</Link></li>
                    <li className="hover:text-emerald-500 transition-colors"><Link href={`/${lang}/esg`} onClick={() => setIsMenuOpen(false)}>{t.menuEsg}</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-6 border-l pl-4 border-zinc-800">{t.menuHQ}</h4>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase leading-relaxed text-balance">
                    {t.menuHQAddr}<br />
                    {t.menuHQCity}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
