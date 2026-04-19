"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LifeBuoy, ChevronDown, MessageSquare, HeadphonesIcon, FileText } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dictionary } from '../../../dictionaries';
import Link from 'next/link';

export default function HelpCenterPage() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.helpCenter || dictionary.en.helpCenter;

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
    { q: t.faq7Q, a: t.faq7A },
    { q: t.faq8Q, a: t.faq8A },
  ];

  return (
    <main className="bg-black text-white min-h-screen relative flex flex-col font-sans pt-40 pb-40">
      
      {/* Absolute Ambient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-900/30 to-black pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col gap-16">
        
        {/* Elegant Header */}
        <header className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6 text-zinc-500">
            <LifeBuoy size={20} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t.tag}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 italic">{t.title2}</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono tracking-widest text-zinc-500 uppercase border-y border-zinc-900 py-4 mt-10">
             <span>{t.metric1}: <strong className="text-white">{t.metric1Val}</strong></span>
             <span>{t.metric2}: <strong className="text-white">{t.metric2Val}</strong></span>
             <span>{t.metric3}: <strong className="text-white">{t.metric3Val}</strong></span>
          </div>
        </header>

        {/* Content Area */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* FAQ Accordion Section */}
          <div className="md:col-span-2 flex flex-col">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-8 pb-4 border-b border-zinc-900 flex items-center gap-3">
              <FileText size={18} className="text-zinc-500" /> {t.faqTitle}
            </h2>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-zinc-900 bg-zinc-950/30 overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-zinc-900/50 transition-colors"
                  >
                    <span className="text-sm font-bold tracking-wider pr-8 max-w-[90%]">{faq.q}</span>
                    <ChevronDown size={16} className={`text-zinc-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-xs font-mono leading-relaxed text-zinc-400 border-t border-zinc-900/50 mt-2 bg-black/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-32 border border-zinc-900 bg-zinc-950 p-8 flex flex-col">
               <HeadphonesIcon size={24} className="text-zinc-400 mb-6" />
               <h3 className="text-lg font-bold tracking-widest uppercase mb-4">
                 {t.contactTitle}
               </h3>
               <p className="text-xs font-mono text-zinc-500 leading-relaxed mb-10">
                 {t.contactDesc}
               </p>

               <ul className="space-y-4 mb-10 text-[10px] uppercase font-bold tracking-widest text-zinc-600">
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"/> Free Consultation</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"/> Priority Response</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"/> IT Strategy Planning</li>
               </ul>
               
               <Link href={`/${lang}/initiate-handshake`} className="flex items-center justify-center gap-3 w-full bg-white text-black py-4 text-[10px] uppercase font-bold tracking-widest hover:bg-zinc-200 transition-colors">
                 {t.btnSub} <MessageSquare size={14} />
               </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
