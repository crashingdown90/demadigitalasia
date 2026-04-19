import { FileText } from 'lucide-react';
import { dictionary } from '../../../dictionaries';

export default async function TermsPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const t = dictionary[lang]?.terms || dictionary.en.terms;

  return (
    <main className="bg-black text-white pt-48 pb-32 px-6 md:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-zinc-500">
          <FileText size={32} />
          <h1 className="text-sm font-bold tracking-[0.5em] uppercase">{t.tag}</h1>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-16 text-zinc-400">
          {t.title1} <br/><span className="text-white">{t.title2}</span>
        </h2>

        <div className="space-y-12 text-sm font-mono text-zinc-400 leading-relaxed border-l border-zinc-800 pl-6 md:pl-10">
          <section>
            <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-xs">{t.s1Title}</h3>
            <p>{t.s1Desc}</p>
          </section>

          <section>
            <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-xs">{t.s2Title}</h3>
            <p>{t.s2Desc}</p>
          </section>
          
          <section>
            <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-xs">{t.s3Title}</h3>
            <p>{t.s3Desc}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
