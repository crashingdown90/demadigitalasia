"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Map, Cpu, Database, Code2, Globe, Cloud, Shield, Bot, Glasses, Hexagon, Leaf, LineChart, ArrowUpRight, ArrowRight, ArrowLeft
} from 'lucide-react';
import { twelvePillars } from '../data/content';

const iconMap = {
  'map': Map,
  'cpu': Cpu,
  'database': Database,
  'code': Code2,
  'globe': Globe,
  'cloud': Cloud,
  'shield': Shield,
  'bot': Bot,
  'glasses': Glasses,
  'hexagon': Hexagon,
  'leaf': Leaf,
  'chart': LineChart
};

const HologramTopology = ({ index, color, tag, icon: Icon }) => {
  const type = index % 4;

  return (
    <div className="hidden md:flex justify-center items-center relative h-[500px] w-full">
      {/* Dynamic Core Energy */}
      <motion.div 
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute inset-0 bg-gradient-to-tr ${color} to-transparent rounded-full blur-[120px] scale-90`} 
      />

      {/* Extreme Complexity HUD Arrays */}
      
      {/* Type 0: Quantum Arc Engine */}
      {type === 0 && (
        <svg className="absolute w-[500px] h-[500px] opacity-70" viewBox="0 0 500 500">
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
            <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="1 10" />
            <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="20" strokeDasharray="2 40" />
            <path d="M 250 20 A 230 230 0 0 1 480 250" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="10 5" />
            <path d="M 250 480 A 230 230 0 0 1 20 250" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="10 5" />
          </motion.g>
          <motion.g animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
            <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="30 10 5 10" />
            <circle cx="250" cy="250" r="140" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="40" strokeDasharray="100 20 10 20" />
            <path d="M 90 250 L 110 250 M 390 250 L 410 250" stroke="white" strokeWidth="2" />
          </motion.g>
          <motion.g animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "250px 250px" }}>
            <rect x="150" y="150" width="200" height="200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" transform="rotate(45 250 250)" />
            <rect x="170" y="170" width="160" height="160" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" transform="rotate(22.5 250 250)" />
          </motion.g>
        </svg>
      )}

      {/* Type 1: Orbital Grid Matrix */}
      {type === 1 && (
        <svg className="absolute w-[500px] h-[500px] opacity-70" viewBox="0 0 500 500">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.g animate={{ rotate: 90 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
            <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="10 10" />
            <line x1="0" y1="250" x2="500" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="10 10" />
            <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" strokeDasharray="4 80" />
          </motion.g>
          <motion.circle cx="250" cy="250" r="150" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" strokeDasharray="2 2" animate={{ scale: [1, 1.5], opacity: [0.8, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ transformOrigin: "250px 250px" }} />
          <motion.circle cx="250" cy="250" r="80" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray="5 5" animate={{ scale: [1, 2], opacity: [0.8, 0] }} transition={{ duration: 4, delay: 2, repeat: Infinity }} style={{ transformOrigin: "250px 250px" }} />
          <polygon points="250,50 450,250 250,450 50,250" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        </svg>
      )}

      {/* Type 2: Hexagonal Cipher */}
      {type === 2 && (
        <svg className="absolute w-[500px] h-[500px] opacity-70" viewBox="0 0 500 500">
          <motion.g animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
            <polygon points="250,20 450,135 450,365 250,480 50,365 50,135" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <polygon points="250,60 415,155 415,345 250,440 85,345 85,155" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="10 5" />
            <polygon points="250,100 380,175 380,325 250,400 120,325 120,175" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="15" strokeDasharray="20 40" />
            {/* Corner Nodes */}
            <circle cx="250" cy="20" r="4" fill="white" />
            <circle cx="450" cy="135" r="4" fill="white" />
            <circle cx="450" cy="365" r="4" fill="white" />
            <circle cx="250" cy="480" r="4" fill="white" />
            <circle cx="50" cy="365" r="4" fill="white" />
            <circle cx="50" cy="135" r="4" fill="white" />
          </motion.g>
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
             <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 10" />
             <path d="M 70 250 Q 250 70 430 250 Q 250 430 70 250" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5" />
          </motion.g>
        </svg>
      )}

      {/* Type 3: Neural Link Topology */}
      {type === 3 && (
        <svg className="absolute w-[500px] h-[500px] opacity-70" viewBox="0 0 500 500">
          <motion.g animate={{ rotate: 180, scale: [0.9, 1.1, 0.9] }} transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "250px 250px" }}>
            {/* Constellation Nodes */}
            <circle cx="100" cy="150" r="3" fill="white" className="animate-ping" />
            <circle cx="150" cy="80" r="5" fill="rgba(255,255,255,0.8)" />
            <circle cx="350" cy="120" r="2" fill="white" />
            <circle cx="400" cy="250" r="4" fill="rgba(255,255,255,0.5)" />
            <circle cx="320" cy="400" r="6" fill="rgba(255,255,255,0.3)" />
            <circle cx="120" cy="350" r="3" fill="white" />
            
            {/* Data Links */}
            <line x1="100" y1="150" x2="150" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="150" y1="80" x2="350" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5" />
            <line x1="350" y1="120" x2="400" y2="250" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="400" y1="250" x2="320" y2="400" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="2 10" />
            <line x1="320" y1="400" x2="120" y2="350" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="120" y1="350" x2="100" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="10 10" />
            <line x1="150" y1="80" x2="250" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="400" y1="250" x2="250" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="120" y1="350" x2="250" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </motion.g>
          <motion.circle cx="250" cy="250" r="230" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" strokeDasharray="1 50" animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
          <motion.circle cx="250" cy="250" r="200" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="20 20" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }} />
        </svg>
      )}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
        <div className="relative w-40 h-40 flex flex-col items-center justify-center animate-pulse">
          <svg className="absolute w-full h-full opacity-30 animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M50 0 L50 10 M50 90 L50 100 M0 50 L10 50 M90 50 L100 50" stroke="white" strokeWidth="1" />
          </svg>
          <div className="absolute inset-2 bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)_inset] flex items-center justify-center z-10">
            {Icon && <Icon size={40} strokeWidth={1} className="text-white opacity-90 drop-shadow-[0_0_10px_white]" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MissionList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const params = useParams();
  const lang = params?.lang || 'en';

  // Fitur "Slide Otomatis" setiap 5 detik
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % twelvePillars.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setActiveIndex((current) => (current + 1) % twelvePillars.length);
  const prevSlide = () => setActiveIndex((current) => current === 0 ? twelvePillars.length - 1 : current - 1);

  const m = twelvePillars[activeIndex];
  const IconComponent = iconMap[m.icon] || Cpu;

  return (
    <section 
      id="neural-network" 
      className="relative h-screen flex items-center bg-black overflow-hidden border-t border-white/5 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${m.color} to-black transition-colors duration-1000 z-0`} />

      <div className="relative z-10 w-full h-full px-6 md:px-24 flex items-center max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={m.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-10 md:gap-20 items-center w-full"
          >
            <div className="max-w-xl">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-white/40 mb-4 block uppercase">{m.tag}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase italic leading-none">{m.title[lang] || m.title.en}</h2>
              <p className="text-sm md:text-xl text-zinc-400 mb-10 font-light leading-relaxed">
                {m.description[lang] || m.description.en}
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {(m.stats[lang] || m.stats.en).map((s, i) => (
                  <div key={i} className="border-l-2 border-zinc-800 pl-4">
                    <div className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-300 uppercase leading-relaxed">{s}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Link href={`/${lang}/neural-network/${m.id}`} aria-label="Explore Capabilities" className="inline-flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase group py-4 px-6 bg-white text-black hover:bg-zinc-200 transition-colors">
                  {lang === 'id' ? 'MASUKI JARINGAN' : 'EXPLORE HUB'} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>

            <HologramTopology index={activeIndex} color={m.color} tag={m.tag} icon={IconComponent} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Slide Controls & Indicators */}
      <div className="absolute bottom-12 left-6 md:left-24 right-6 md:right-24 flex items-center justify-between z-20">
        <div className="flex gap-2">
          {twelvePillars.map((_, idx) => (
            <button 
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 transition-all duration-300 ${activeIndex === idx ? 'w-12 bg-white' : 'w-4 bg-white/20 hover:bg-white/50'}`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button onClick={prevSlide} aria-label="Previous Slide" className="p-3 border border-white/20 hover:bg-white/10 transition-colors rounded-full">
            <ArrowLeft size={16} />
          </button>
          <button onClick={nextSlide} aria-label="Next Slide" className="p-3 border border-white/20 hover:bg-white/10 transition-colors rounded-full">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
