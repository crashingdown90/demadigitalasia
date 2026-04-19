"use client";
import React, { useState } from 'react';
import { Terminal, Lock, Server, ArrowRight, ShieldAlert, Key } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dictionary } from '../../../dictionaries';

export default function InitiateHandshakePage() {
  const [activeTab, setActiveTab] = useState('briefing');
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.handshake || dictionary.en.handshake;

  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-32 relative overflow-hidden">
      {/* Ambience & Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <h2 className="text-xs font-bold tracking-[0.5em] text-emerald-800 uppercase">{t.heroTag}</h2>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] break-words">
            {t.title1} <br/> <span className="text-zinc-600">{t.title2}</span>
          </h1>
        </div>

        {/* Main Terminal UI */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: The Mandate */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono tracking-wide leading-relaxed text-zinc-400 mb-12 border-l-2 border-emerald-900 pl-6">
                {t.desc}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ShieldAlert className="text-emerald-900 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300 mb-1">{t.clearance}</h4>
                    <p className="text-[10px] font-mono text-zinc-500">{t.clearanceDesc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lock className="text-emerald-900 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300 mb-1">{t.aes}</h4>
                    <p className="text-[10px] font-mono text-zinc-500">{t.aesDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Terminal UI */}
          <div className="lg:w-2/3 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 p-2 md:p-4 rounded-sm shadow-2xl">
            
            {/* Terminal Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-zinc-900 mb-6 gap-4">
              <div className="flex items-center gap-3">
                <Terminal size={16} className="text-zinc-600" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase">SYS_REQUEST_NODE_001</span>
              </div>
              <div className="flex bg-black p-1 border border-zinc-900 rounded-sm w-full md:w-auto">
                <button 
                  onClick={() => setActiveTab('briefing')}
                  className={`flex-1 md:flex-none px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${activeTab === 'briefing' ? 'bg-emerald-950/50 text-emerald-500 border border-emerald-900' : 'text-zinc-600 hover:text-white'}`}
                >
                  {t.tabBrief}
                </button>
                <button 
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 md:flex-none px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${activeTab === 'login' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-600 hover:text-white'}`}
                >
                  {t.tabAuth}
                </button>
              </div>
            </div>

            {/* Terminal Body - Briefing Form */}
            {activeTab === 'briefing' && (
              <form className="p-4 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500">{t.formEntity}</label>
                    <input type="text" className="bg-black border border-zinc-800 p-4 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="e.g. Bank Central Asia" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500">{t.formEmail}</label>
                    <input type="email" className="bg-black border border-zinc-800 p-4 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="executive@enterprise.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500">{t.formSector}</label>
                    <div className="relative">
                      <select className="w-full bg-black border border-zinc-800 p-4 text-xs font-mono text-zinc-300 focus:outline-none focus:border-emerald-500 appearance-none">
                        {t.sectorOptions.map((opt, i) => <option key={i}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-emerald-500/70">{t.formBudget}</label>
                    <select className="bg-emerald-950/20 border border-emerald-900/50 p-4 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 appearance-none">
                      {t.budgetOptions.map((opt, i) => <option key={i}>{opt}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500">{t.formBrief}</label>
                  <textarea rows="4" className="bg-black border border-zinc-800 p-4 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder={t.formPlaceholder}></textarea>
                </div>

                <button className="mt-4 flex items-center justify-center gap-4 w-full bg-white text-black py-5 font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-emerald-500 hover:text-white transition-colors group">
                  {t.btnTransmit} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}

            {/* Terminal Body - Client Login */}
            {activeTab === 'login' && (
              <div className="p-4 md:p-12 flex flex-col justify-center items-center text-center min-h-[400px]">
                <Server size={48} strokeWidth={1} className="text-zinc-700 mb-8" />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4">{t.authRestrict}</h3>
                <p className="text-xs font-mono text-zinc-500 mb-12 max-w-sm">{t.authDesc}</p>
                
                <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <Key size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                    <input type="text" className="w-full bg-black border border-zinc-800 py-4 pl-12 pr-4 text-xs font-mono text-white focus:outline-none focus:border-white transition-colors" placeholder="ACCESS TOKEN" />
                  </div>
                  <div className="relative">
                    <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                    <input type="password" className="w-full bg-black border border-zinc-800 py-4 pl-12 pr-4 text-xs font-mono text-white focus:outline-none focus:border-white transition-colors" placeholder="PRIVATE KEY" />
                  </div>
                  <button className="w-full bg-zinc-800 text-white py-4 font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-white hover:text-black transition-colors mt-4">
                    {t.btnAuth}
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>
      </div>
    </main>
  );
}
