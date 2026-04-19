"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Target, Terminal, Activity } from 'lucide-react';

export default function SectorSlideModal({ isOpen, onClose, sector, lang = 'en' }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset slide to 0 when modal opens or sector changes
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
      document.body.style.overflow = 'hidden'; // stop background scrolling
    } else {
      document.body.style.overflow = 'auto'; // restore scrolling
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, sector]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentSlide < sector.slideData.length - 1) setCurrentSlide(s => s + 1);
      if (e.key === 'ArrowLeft' && currentSlide > 0) setCurrentSlide(s => s - 1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlide, onClose]);

  if (!isOpen || !sector) return null;

  const slides = sector.slideData;
  const slide = slides[currentSlide];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 font-sans text-white overflow-hidden"
      >
        {/* Clean Corporate Backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-zinc-950" />

        {/* Modal Window */}
        <motion.div 
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative w-[95vw] h-[90vh] lg:w-[90vw] lg:h-[85vh] max-w-[1800px] bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col"
        >
          {/* Header UI */}
          <div className="flex justify-between items-center p-6 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur top-0 z-20">
            <div className="flex items-center gap-4">
               <div className="p-2 border border-zinc-800 text-zinc-400">
                  {sector.icon}
               </div>
               <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-1">
                    SECTOR INTELLIGENCE
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-white">
                    {sector.title[lang] || sector.title.en}
                  </h3>
               </div>
            </div>
            
            <button 
              onClick={onClose}
              className="text-zinc-500 hover:text-white hover:bg-zinc-900 p-2 border border-transparent hover:border-zinc-800 transition-all"
            >
              <X size={24} />
            </button>
          </div>

          {/* Slide Content Area */}
          <div className="flex-1 relative overflow-hidden bg-zinc-950">
             
             <AnimatePresence mode="wait">
               <motion.div 
                 key={currentSlide}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.4 }}
                 className="absolute inset-0 p-6 md:p-16 flex flex-col justify-center overflow-y-auto"
               >
                  <div className="max-w-6xl my-auto py-10 md:py-0">
                     <div className="flex items-center gap-4 mb-6 md:mb-10">
                       <div className="w-10 md:w-16 h-px bg-zinc-600" />
                       <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-zinc-400">
                          {slide.title[lang] || slide.title.en}
                       </span>
                     </div>
                     
                     <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter uppercase leading-[0.9] md:leading-[0.85] mb-6 md:mb-12 text-white italic">
                        {slide.headline[lang] || slide.headline.en}
                     </h2>
                     
                     <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-sans text-zinc-400 leading-relaxed border-l-2 md:border-l-[3px] border-zinc-800 pl-4 md:pl-8 max-w-5xl">
                        {slide.desc[lang] || slide.desc.en}
                     </p>
                  </div>
               </motion.div>
             </AnimatePresence>

          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between p-6 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur bottom-0 z-20">
             
             {/* Progress Indicators */}
             <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] md:max-w-md [&::-webkit-scrollbar]:hidden">
                {sector.slideData.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 transition-all duration-500 rounded-sm shrink-0 ${currentSlide === idx ? 'w-8 bg-white' : 'w-4 bg-zinc-800'}`}
                  />
                ))}
             </div>

             {/* Navigation Buttons */}
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-zinc-500 mr-4 hidden md:inline-block">
                  SLIDE {currentSlide + 1} OF {sector.slideData.length}
                </span>
                <button 
                  onClick={() => setCurrentSlide(s => Math.max(0, s - 1))}
                  disabled={currentSlide === 0}
                  className={`p-3 border transition-colors ${currentSlide === 0 ? 'border-zinc-900 text-zinc-800 cursor-not-allowed' : 'border-zinc-700 text-white hover:bg-zinc-800'}`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={() => setCurrentSlide(s => Math.min(sector.slideData.length - 1, s + 1))}
                  disabled={currentSlide === sector.slideData.length - 1}
                  className={`p-3 border transition-colors flex items-center gap-2 ${currentSlide === sector.slideData.length - 1 ? 'border-zinc-900 text-zinc-800 cursor-not-allowed' : 'border-zinc-700 text-white hover:bg-white hover:text-black font-bold text-[10px] tracking-widest uppercase'}`}
                >
                  {currentSlide < sector.slideData.length - 1 && "NEXT"} <ChevronRight size={18} />
                </button>
             </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
