"use client";
import { motion } from 'framer-motion';
import { Eye, Crosshair, Users, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { dictionary } from '../dictionaries';

export default function TheCoreSection() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.core || dictionary.en.core;

  const identities = [
    {
      title: t.vis.title,
      icon: <Eye size={24} className="text-zinc-400 mb-6 group-hover:text-white transition-colors" />,
      desc: t.vis.desc
    },
    {
      title: t.mis.title,
      icon: <Crosshair size={24} className="text-zinc-400 mb-6 group-hover:text-white transition-colors" />,
      desc: t.mis.desc
    },
    {
      title: t.bod.title,
      icon: <Users size={24} className="text-zinc-400 mb-6 group-hover:text-white transition-colors" />,
      desc: t.bod.desc
    },
    {
      title: t.esg.title,
      icon: <Leaf size={24} className="text-zinc-400 mb-6 group-hover:text-white transition-colors" />,
      desc: t.esg.desc
    }
  ];

  return (
    <section id="core" className="bg-black pt-48 pb-32 px-6 md:px-24 border-t border-zinc-900 text-white relative flex flex-col items-center">
      
      <div className="max-w-7xl mx-auto relative z-10 w-full mb-32">
        <div className="flex flex-col lg:flex-row gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-zinc-500" />
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 uppercase">{t.miniTop}</h2>
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4 break-words">
              {t.title1} 
            </h3>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter uppercase text-zinc-500 leading-[0.9] mb-8 break-words">
              {t.title2}
            </h3>

            <p className="text-sm font-sans text-zinc-400 leading-relaxed mb-10 max-w-sm">
              {t.desc}
            </p>

            <Link href={`/${lang}/core`} className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase group py-4 px-6 border border-zinc-800 hover:border-zinc-500 transition-all w-fit">
              {t.btnBoard} <ArrowRight className="group-hover:translate-x-2 transition-transform text-zinc-500 group-hover:text-white" size={14} />
            </Link>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {identities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 md:p-10 border border-zinc-900 bg-zinc-950 hover:border-zinc-500 transition-all relative overflow-hidden"
              >
                <div className="relative z-10">
                  {item.icon}
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans group-hover:text-zinc-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="max-w-7xl mx-auto w-full border-t border-zinc-900 pt-20">
        <div className="text-center mb-12">
           <h4 className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase">
             Strategic Technology Partners
           </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 relative gap-4">
           {/* Render Partners and Empty Logic Boxes */}
           {[
             { logo: '/Logo_Google.png', name: 'Google' },
             { logo: '/Logo_Nvidia.png', name: 'Nvidia' },
             ...Array.from({ length: 8 }).map((_, i) => ({ logo: null, name: `SLOT ${(i + 3).toString().padStart(2, '0')}` }))
           ].map((partner, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: idx * 0.05 }}
               className="aspect-[3/2] border border-zinc-900 bg-zinc-950 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:border-zinc-700 transition-all duration-300 cursor-pointer group p-6"
             >
                {partner.logo ? (
                  <div className="relative w-full h-full">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                ) : (
                  <span className="text-[10px] font-bold uppercase text-zinc-700 tracking-widest group-hover:text-zinc-400 transition-colors">
                    {partner.name}
                  </span>
                )}
             </motion.div>
           ))}
        </div>
      </div>

    </section>
  );
}
