import { ShieldCheck, CalendarCheck } from 'lucide-react';
import { dictionary } from '../../../dictionaries';

export default async function PrivacyPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const t = dictionary[lang]?.privacy || dictionary.en.privacy;

  return (
    <main className="bg-black text-white pt-48 pb-32 px-6 md:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10 border-b border-zinc-900 pb-10">
           <div className="flex items-center gap-4 text-cyan-500">
             <ShieldCheck size={32} />
             <h1 className="text-sm font-bold tracking-[0.5em] uppercase text-zinc-400">{t.tag}</h1>
           </div>
           
           {t.lastUpdated && (
              <div className="hidden md:flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-zinc-500 bg-zinc-950 border border-zinc-800 px-4 py-2">
                 <CalendarCheck size={14} />
                 {t.lastUpdated}
              </div>
           )}
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">
          {t.title}
        </h2>
        
        {t.desc && (
           <p className="text-sm font-mono text-zinc-400 leading-relaxed mb-16 max-w-3xl border-l border-cyan-900 pl-6">
              {t.desc}
           </p>
        )}

        {/* Dynamic Formatting using Array in the dictionary */}
        <div className="space-y-16 text-sm font-sans text-zinc-300 leading-loose">
          {t.sections && t.sections.map((section, idx) => (
             <section key={idx}>
               <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-xs flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-700" />
                  {section.title}
               </h3>
               <p className="pl-5 text-zinc-500">{section.desc}</p>
             </section>
          ))}
          
          {/* Legacy Fallback just in case old dictionary format is used by another locale */}
          {!t.sections && t.s1Title && (
            <>
               <section>
                  <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-xs">{t.s1Title}</h3>
                  <p className="pl-5">{t.s1Desc}</p>
               </section>
               <section>
                  <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-xs">{t.s2Title}</h3>
                  <p className="pl-5">{t.s2Desc}</p>
               </section>
               <section>
                  <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-xs">{t.s3Title}</h3>
                  <p className="pl-5">{t.s3Desc}</p>
               </section>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
