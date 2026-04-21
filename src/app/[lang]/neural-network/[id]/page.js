import { twelvePillars } from '../../../../data/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';
import AIDetail from '../../../../components/AIDetail';
import ConsultingDetail from '../../../../components/ConsultingDetail';
import BigDataDetail from '../../../../components/BigDataDetail';
import DefaultDetail from '../../../../components/DefaultDetail';
import CloudDetail from '../../../../components/CloudDetail';

export async function generateStaticParams() {
  return twelvePillars.map((pillar) => ({
    id: pillar.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id, lang } = await params;
  const pillar = twelvePillars.find(p => p.id === id);

  if (!pillar) return {};

  const titleStr = typeof pillar.title === 'string' ? pillar.title : pillar.title[lang] || pillar.title.en;
  const descStr = typeof pillar.description === 'string' ? pillar.description : pillar.description[lang] || pillar.description.en;

  return {
    title: `${titleStr} | DEMA DIGITAL ASIA`,
    description: descStr.substring(0, 160),
    openGraph: {
      title: `${titleStr} - DEMA DIGITAL ASIA Solutions`,
      description: descStr.substring(0, 160),
      url: `https://demadigital.asia/${lang}/neural-network/${pillar.id}`,
    }
  };
}

export default async function PillarDetailPage({ params }) {
  // Await params per Next.js 15+ Server Component standards
  const { id, lang } = await params;
  const pillar = twelvePillars.find(p => p.id === id);

  if (!pillar) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-32 px-6 md:px-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <Link href="/neural-network" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 hover:text-white uppercase mb-16 transition-colors group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Sequence
        </Link>
        
        <div className="border border-zinc-800 bg-zinc-950/80 backdrop-blur-md p-10 md:p-20 relative overflow-hidden group">
           {/* Dynamic Glowing Orb based on pillar color */}
           <div className={`absolute -right-20 -top-20 w-[600px] h-[600px] rounded-full blur-[120px] bg-gradient-to-br ${pillar.color} to-transparent opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000`} />
           
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase">{pillar.tag}</span>
                <Terminal size={20} className="text-zinc-600" />
              </div>

              <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mb-8 leading-[0.9]">
                {typeof pillar.title === 'string' ? pillar.title : pillar.title[lang] || pillar.title.en}
              </h1>
              
              <p className="text-sm md:text-xl font-mono text-zinc-300 leading-relaxed mb-16 max-w-3xl border-l-2 border-zinc-700 pl-6">
                {typeof pillar.description === 'string' ? pillar.description : pillar.description[lang] || pillar.description.en}
              </p>
              
              {/* Component Router (The Clean Architecture) */}
              {pillar.id === 'ai' ? (
                 <AIDetail pillar={pillar} lang={lang} />
              ) : pillar.id === 'it-consulting' ? (
                 <ConsultingDetail pillar={pillar} lang={lang} />
              ) : pillar.id === 'big-data' ? (
                 <BigDataDetail pillar={pillar} lang={lang} />
              ) : pillar.id === 'cloud' ? (
                 <CloudDetail pillar={pillar} lang={lang} />
              ) : (
                 <DefaultDetail pillar={pillar} lang={lang} />
              )}
           </div>
        </div>
      </div>
    </main>
  );
}
