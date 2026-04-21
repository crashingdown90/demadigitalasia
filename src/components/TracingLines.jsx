"use client";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TracingLines() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to line drawing height
  const lineHeight1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight2 = useTransform(scrollYProgress, [0, 1], ["10%", "120%"]);
  const lineHeight3 = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <>
      {/* Left Grid Line */}
      <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-px bg-zinc-900/50 z-0 overflow-hidden">
        <motion.div 
          style={{ height: lineHeight1 }} 
          className="w-full bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent relative"
        >
          <div className="absolute bottom-0 w-[2px] h-[100px] bg-emerald-400 blur-[2px] -ml-[0.5px]" />
        </motion.div>
      </div>

      {/* Center Right Grid Line */}
      <div className="absolute right-[25%] md:right-[30%] top-0 bottom-0 w-px bg-zinc-900/30 z-0 overflow-hidden hidden md:block">
        <motion.div 
          style={{ height: lineHeight2 }} 
          className="w-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent relative"
        >
          <div className="absolute bottom-0 w-[2px] h-[150px] bg-cyan-400 blur-[2px] -ml-[0.5px]" />
        </motion.div>
      </div>

      {/* Far Right Grid Line */}
      <div className="absolute right-[5%] md:right-[10%] top-0 bottom-0 w-px bg-zinc-900/50 z-0 overflow-hidden">
        <motion.div 
          style={{ height: lineHeight3 }} 
          className="w-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent relative"
        >
          <div className="absolute bottom-0 w-[2px] h-[50px] bg-emerald-400/50 blur-[2px] -ml-[0.5px]" />
        </motion.div>
      </div>
    </>
  );
}
