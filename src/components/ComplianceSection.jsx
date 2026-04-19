"use client";
import { motion } from 'framer-motion';
import { Server, Lock, Award, Activity, ShieldCheck } from 'lucide-react';

export default function ComplianceSection() {
  const complianceData = [
    { title: 'Local Residency', desc: 'Data center operations within Indonesian borders compliant with OJK & BI mandates.', icon: <Server /> },
    { title: 'E2E Encryption', desc: 'Advanced data anonymization and encryption meeting UU PDP standards.', icon: <Lock /> },
    { title: 'ISO 27001', desc: 'Global certification for information security management systems.', icon: <Award /> },
    { title: 'Zero Trust', desc: 'Identity-first security architecture for critical national infrastructure.', icon: <Activity /> }
  ];

  return (
    <section className="bg-black py-32 px-6 md:px-24 border-t border-zinc-900 text-white relative overflow-hidden">
      
      {/* Decorative Network Grid */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/3 p-12 border border-zinc-800 bg-zinc-950 flex flex-col items-center text-center relative"
          >
            <div className="absolute -top-6 bg-black px-4 text-emerald-500">
              <ShieldCheck size={48} strokeWidth={1} />
            </div>
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-emerald-500/70 mb-4 uppercase mt-8">Legal Framework</h2>
            <h3 className="text-3xl font-black tracking-tighter uppercase italic leading-[1] mb-6">
              SOVEREIGNTY <br /> PROTOCOL.
            </h3>
            <p className="text-xs font-mono text-zinc-500 leading-relaxed">
              Memastikan kedaulatan data nasional secara mutlak. Infrastruktur DEMA dirancang melampaui standar kepatuhan operasional regulasi Indonesia.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
            {complianceData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black hover:bg-zinc-950 transition-all group"
              >
                <div className="mb-6 text-zinc-600 group-hover:text-emerald-500 transition-colors">{item.icon}</div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-zinc-200">{item.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-loose font-mono">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
