"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { dictionary } from '../dictionaries';

export default function HeroSection() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.hero || dictionary.en.hero;

  return (
    <section className="relative h-screen flex flex-col justify-end pb-24 px-6 md:px-24 overflow-hidden">
      {/* Background Visual Engine (Fixed for LCP Score) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg_main_1776588187527.png" 
          alt="DEMA Digital Asia Orbital View"
          fill
          priority
          className="object-cover opacity-30 object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 opacity-10 z-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-white max-w-7xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="h-[1px] w-12 bg-white/40" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.6em] text-white/60 uppercase">{t.systemStatus}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] sm:leading-[0.85] mb-10 uppercase italic break-words">
          {t.title1} <br/> {t.title2}
        </h1>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href={`/${lang}/initiate-handshake`} aria-label="Start Transformation Core Logic" className="group relative px-6 md:px-12 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] overflow-hidden transition-all text-center">
            <span className="relative z-10 uppercase">{t.btnStart}</span>
            <div className="absolute inset-0 bg-zinc-200 translate-x-full group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />
          </Link>
          <Link href={`/${lang}/core`} aria-label="Download Deep Tech Blueprint" className="px-6 md:px-12 py-5 border border-white/30 text-white text-xs font-bold tracking-[0.2em] hover:bg-white/10 transition-all uppercase text-center">
            {t.btnProfile}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
