import { Leaf, Globe } from 'lucide-react';
import { dictionary } from '../../../dictionaries';

export default async function ESGPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const t = dictionary[lang]?.esg || dictionary.en.esg;

  return (
    <main className="bg-black text-white pt-48 pb-32 px-6 md:px-24 min-h-screen relative overflow-hidden">
      {/* Nature/Tech Ambient */}
      <div className="absolute inset-0 z-0 bg-emerald-900/5 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-10 text-emerald-500">
          <Leaf size={32} />
          <h1 className="text-sm font-bold tracking-[0.5em] uppercase">{t.tag}</h1>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-10 border border-emerald-900/30 bg-zinc-950/50 hover:bg-zinc-900 transition-colors">
            <h3 className="text-emerald-500 font-bold tracking-widest uppercase mb-4 text-xs">{t.envTitle}</h3>
            <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6">
              {t.envDesc}
            </p>
            <div className="h-1 w-full bg-zinc-800"><div className="h-1 bg-emerald-500 w-[85%]" /></div>
          </div>

          <div className="p-10 border border-emerald-900/30 bg-zinc-950/50 hover:bg-zinc-900 transition-colors">
            <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-xs">{t.socTitle}</h3>
            <p className="text-xs font-mono text-zinc-400 leading-relaxed">
              {t.socDesc}
            </p>
          </div>

          <div className="p-10 border border-emerald-900/30 bg-zinc-950/50 hover:bg-zinc-900 transition-colors md:col-span-2 flex flex-col md:flex-row gap-8 items-center">
            <Globe className="text-emerald-700 w-32 h-32 opacity-50 hidden md:block" />
            <div>
              <h3 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-xs">{t.govTitle}</h3>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed max-w-2xl">
                {t.govDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
