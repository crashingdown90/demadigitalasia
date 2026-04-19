"use client";
import { motion } from 'framer-motion';
import { Database, Filter, Server, TerminalSquare, Activity, AlertOctagon, CheckCircle2 } from 'lucide-react';

export default function BigDataDetail({ pillar, lang = 'en' }) {
  const statsArray = Array.isArray(pillar.stats) ? pillar.stats : (pillar.stats?.[lang] || pillar.stats?.en || []);

  // Mock data for the ticker
  const tickerItems = [
    "SYNC: GOV_DB_CENSUS... [OK]", 
    "INGEST: SENSOR_TRAFFIC_XYZ... [94GB/s]", 
    "ANOMALY DETECTED: NODE_77_FINANCE", 
    "PIPELINE: ETL_NIGHTLY_BATCH... [RUNNING]",
    "LAKEHOUSE: STORAGE_CAPACITY... [71%]",
    "AUTHORIZATION: ADMIN_ROOT... [GRANTED]",
    "SYNC: GOV_DB_CENSUS... [OK]", 
    "INGEST: SENSOR_TRAFFIC_XYZ... [94GB/s]"
  ];

  return (
    <div className="animate-in fade-in duration-1000 slide-in-from-bottom-10 w-full mt-12 border-t border-zinc-900 pt-10">
      
      {/* 1. Global Data Ticker (Industrial Marquee) */}
      <div className="w-full bg-zinc-950 border-y border-blue-900/50 py-3 mb-16 overflow-hidden flex relative select-none">
         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
         
         <motion.div 
            className="flex gap-12 whitespace-nowrap text-[10px] font-mono tracking-widest text-blue-500/80 uppercase items-center font-bold"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
         >
            {statsArray.map((stat, i) => (
              <div key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                 <CheckCircle2 size={16} className="text-zinc-600" /> {stat}
              </div>
            ))}
            {statsArray.map((stat, i) => (
              <div key={`copy-${i}`} className="flex items-center gap-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                 <CheckCircle2 size={16} className="text-zinc-600" /> {stat}
              </div>
            ))}
         </motion.div>
      </div>

      {/* 2. Central Vault Visualization (The Lakehouse Pipe) */}
      <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase text-center mb-10">
        Data Extraction Architecture
      </h3>
      
      <div className="relative w-full max-w-3xl mx-auto mb-24 h-[400px] flex items-center justify-center">
         {/* Vertical SVG Pipeline */}
         <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
            {/* Incoming Data Lines */}
            <motion.path d="M 100 0 C 100 200, 350 150, 400 200" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="5 5" animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}/>
            <motion.path d="M 400 0 L 400 150" fill="none" stroke="rgba(59,130,246,0.5)" strokeWidth="4" strokeDasharray="10 10" animate={{ strokeDashoffset: [40, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}/>
            <motion.path d="M 700 0 C 700 200, 450 150, 400 200" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="5 5" animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}/>
            
            {/* The Central Tank */}
            <rect x="330" y="150" width="140" height="150" fill="rgba(0,0,0,0.8)" stroke="rgba(59,130,246,0.5)" strokeWidth="2" rx="10" />
            
            {/* Water/Data Level in Tank */}
            <motion.rect x="332" y="250" width="136" height="48" fill="rgba(59,130,246,0.2)" rx="5" animate={{ height: [48, 60, 48], y: [250, 238, 250] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}/>
            
            {/* Outgoing Processed Lines */}
            <path d="M 400 300 L 400 400" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="4" strokeDasharray="10 10" />
            <motion.path d="M 400 300 L 400 400" fill="none" stroke="rgba(16,185,129,1)" strokeWidth="4" strokeDasharray="2 20" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}/>
            
            <circle cx="400" cy="225" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="15" />
            <motion.circle cx="400" cy="225" r="30" fill="none" stroke="rgba(59,130,246,0.8)" strokeWidth="2" strokeDasharray="40 180" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "400px 225px" }} />
         </svg>
         
         {/* Labels over SVG */}
         <div className="absolute top-[20%] left-[10%] text-left">
            <div className="text-xs font-bold text-zinc-400 font-mono flex items-center gap-2"><Filter size={14}/> Raw Extract</div>
            <div className="text-[9px] text-zinc-600 w-32 mt-2 leading-relaxed">Menyedot Excel lama & Database silo regional.</div>
         </div>
         <div className="absolute text-center mt-10">
            <div className="text-[10px] font-bold tracking-[0.3em] text-white uppercase drop-shadow-[0_0_10px_black] z-10 relative">Central<br/>Lakehouse</div>
         </div>
         <div className="absolute bottom-[2%] text-center left-1/2 -translate-x-1/2 bg-black px-4 py-1 border border-emerald-900 rounded-full">
            <div className="text-xs font-bold text-emerald-500 font-mono tracking-widest flex items-center gap-2">
               <Server size={14}/> To Dashboards
            </div>
         </div>
      </div>

      {/* 3. The Analytics Radar (Assymetric Bento Box) */}
      <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-8 flex items-center gap-4">
         <span className="w-4 h-px bg-white" /> Intelligence Hub Matrices
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
         {/* Main Large Bento (Chart) */}
         <div className="md:col-span-2 bg-gradient-to-br from-zinc-950 to-black border border-zinc-900 p-8 relative overflow-hidden group hover:border-blue-900/50 transition-colors">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50 block" />
            <div className="relative z-10 flex justify-between items-start mb-12">
               <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase flex items-center gap-2 mb-2">
                     <Activity size={12}/> Live Anomaly Radar
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Fraud & Efficiency Curve</h4>
               </div>
               <div className="px-3 py-1 bg-blue-950 border border-blue-900 text-blue-400 text-[9px] font-mono tracking-widest">
                  SYNC: REAL-TIME
               </div>
            </div>
            
            {/* Animated SVG Curve */}
            <div className="h-32 w-full mt-auto relative z-10 flex items-end">
               <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <motion.path 
                     d="M 0 100 Q 25 80, 50 100 T 100 20 L 100 100 Z" 
                     fill="rgba(59,130,246,0.1)" 
                     stroke="none"
                  />
                  <motion.path 
                     d="M 0 100 Q 25 80, 50 100 T 100 20" 
                     fill="none" 
                     stroke="rgba(59,130,246,0.8)" 
                     strokeWidth="2"
                     strokeDasharray="200"
                     initial={{ strokeDashoffset: 200 }}
                     animate={{ strokeDashoffset: 0 }}
                     transition={{ duration: 2, ease: "easeOut" }}
                  />
                  {/* Warning Blip */}
                  <circle cx="75" cy="65" r="2" fill="rgba(239,68,68,1)" className="animate-ping" />
                  <circle cx="75" cy="65" r="1" fill="white" />
                  <line x1="75" y1="65" x2="75" y2="100" stroke="rgba(239,68,68,0.5)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <text x="70" y="55" fill="rgba(239,68,68,1)" fontSize="4" className="font-mono tracking-widest">DETECTED</text>
               </svg>
            </div>
            <p className="text-[10px] font-mono text-zinc-500 mt-6 max-w-sm relative z-10 border-l border-blue-900 pl-4 leading-relaxed">
               Melacak jutaan rekam transaksi per detik. Garis loncatan (anomali) langsung ditandai oleh sistem jauh sebelum kebocoran data (Fraud) merebak.
            </p>
         </div>

         {/* Side Slim Bentos */}
         <div className="flex flex-col gap-4">
            <div className="bg-black border border-zinc-900 p-6 flex-grow flex flex-col justify-center hover:border-zinc-700 transition-colors">
               <AlertOctagon size={16} className="text-zinc-600 mb-4" />
               <div className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-2">Automated Threat Mitigation</div>
               <div className="text-3xl font-black text-white font-mono tracking-tighter mb-2">99.7%</div>
               <div className="text-[10px] text-zinc-600 font-mono">Kecepatan pembekuan transaksi ganda vs Manusia.</div>
            </div>
            <div className="bg-blue-950/20 border border-blue-900/50 p-6 flex-grow flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
               <Database size={16} className="text-blue-500 mb-4 relative z-10" />
               <div className="text-[9px] font-bold tracking-[0.3em] text-blue-400 uppercase mb-2 relative z-10">Single Source of Truth</div>
               <div className="text-xl font-bold text-white uppercase italic tracking-tighter mb-2 relative z-10 leading-none">NO DATA<br/>SILO LAYER.</div>
               <div className="text-[10px] text-blue-500/70 font-mono relative z-10 border-l border-blue-800 pl-2 mt-2">Dinas A dan Dinas B menginduk pada terminal data yang persis sama.</div>
            </div>
         </div>
      </div>

      {/* 4. Terminal Log Section (Raw Data Matrix) */}
      <h3 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase mb-6 flex items-center justify-center gap-4">
         <TerminalSquare size={14} /> LIVE TERMINAL OPERATION
      </h3>
      
      <div className="w-full bg-[#030303] border border-zinc-900 rounded-sm p-6 overflow-hidden h-[300px] relative font-mono text-[9px] md:text-xs">
         <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#030303] to-transparent z-10 pointer-events-none" />
         <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#030303] to-transparent z-10 pointer-events-none" />
         
         <div className="text-zinc-600 mb-4 border-b border-zinc-900 pb-2 flex justify-between">
            <span>root@dema-lakehouse:~# tail -f /var/log/dema_etl_pipeline.log</span>
            <span className="text-emerald-500 animate-pulse">● SYSTEM ONLINE</span>
         </div>
         
         <motion.div 
            className="flex flex-col gap-1 text-emerald-500"
            animate={{ y: [0, -200] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         >
            <div>[2026-04-19T10:41:22] <span className="text-blue-400">INFO</span> Initiating scraping daemon across 405 provincial endpoints...</div>
            <div>[2026-04-19T10:41:23] <span className="text-blue-400">INFO</span> Connected to Legacy_DB_Regency_A / Socket established.</div>
            <div>[2026-04-19T10:41:23] <span className="text-yellow-500">WARN</span> Data structure mismatch in table 'population_2024'. Commencing Auto-Transformation.</div>
            <div>[2026-04-19T10:41:24] <span className="text-purple-400">AUTH</span> Token verified via Quantum-Safe Key Exchange (0.01ms).</div>
            <div>[2026-04-19T10:41:24] <span className="text-blue-400">INFO</span> Processing 500,000 rows parallel stream to Memory Array [✓]</div>
            <div>[2026-04-19T10:41:25] <span className="text-emerald-400">SUCCESS</span> 12.3 GB appended to Central Lakehouse.</div>
            <div>[2026-04-19T10:41:26] <span className="text-blue-400">INFO</span> Refreshing Executive Dashboard UI cache...</div>
            <div className="text-zinc-500">...</div>
            <div>[2026-04-19T10:41:27] <span className="text-red-500">ALERT</span> Detecting aggressive expenditure spike in Dinas_PUPR.</div>
            <div>[2026-04-19T10:41:27] <span className="text-blue-400">INFO</span> Executing Fraud Probability ML...</div>
            <div>[2026-04-19T10:41:28] <span className="text-yellow-500">WARN</span> Anomaly threshold exceeded (94%). Pausing pipeline authorization.</div>
            <div>[2026-04-19T10:41:28] <span className="text-emerald-400">SUCCESS</span> Alert dispatched to Head of Office Device.</div>
            <div>[2026-04-19T10:41:29] <span className="text-blue-400">INFO</span> Resuming core data sync...</div>
         </motion.div>
      </div>

    </div>
  );
}
