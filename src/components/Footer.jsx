"use client";
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dictionary } from '../dictionaries';

export default function Footer() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const t = dictionary[lang]?.footer || dictionary.en.footer;

  // Standard Corporate Website Footer Menu
  const colData = [
    { 
      title: t.col1, 
      links: [
        { label: t.c1_1, url: `/${lang}/core` },
        { label: t.c1_2, url: `/${lang}/core` },
        { label: t.c1_3, url: `/${lang}/careers` },
        { label: t.c1_4, url: `/${lang}/initiate-handshake` }
      ] 
    },
    { 
      title: t.col2, 
      links: [
        { label: t.c2_1, url: `/${lang}/neural-network/ai` },
        { label: t.c2_2, url: `/${lang}/neural-network/cloud` },
        { label: t.c2_3, url: `/${lang}/neural-network/security` },
        { label: t.c2_4, url: `/${lang}/neural-network/big-data` }
      ] 
    },
    { 
      title: t.col3, 
      links: [
        { label: t.c3_1, url: `/${lang}/sector-solutions/finance` },
        { label: t.c3_2, url: `/${lang}/sector-solutions/health` },
        { label: t.c3_3, url: `/${lang}/sector-solutions/defense` },
        { label: t.c3_4, url: `/${lang}/sector-solutions/gov` }
      ] 
    },
    { 
      title: t.col4, 
      links: [
        { label: 'Intelligence Hub', url: `/${lang}/intelligence-hub` },
        { label: 'Insights & Blog', url: `/${lang}/blog` },
        { label: 'LinkedIn', url: 'https://linkedin.com/company/demadigital', external: true }
      ] 
    }
  ];

  return (
    <footer className="bg-black pt-24 md:pt-40 pb-12 md:pb-20 px-6 md:px-24 border-t border-zinc-900 text-white relative z-50">
      <div className="flex flex-col lg:flex-row justify-between gap-y-16 lg:gap-x-12 xl:gap-x-16 mb-20 md:mb-32 max-w-7xl mx-auto">
        {/* Left Side: Brand & Desc */}
        <div className="w-full lg:w-1/3 xl:w-1/4">
          <Link href={`/${lang}`} className="text-3xl font-black tracking-tighter mb-8 flex items-center">
            DEMA<span className="font-light tracking-[0.3em] text-[10px] ml-3 opacity-60">DIGITAL ASIA</span>
          </Link>
          <p className="text-[11px] text-zinc-500 font-mono leading-relaxed border-l border-zinc-800 pl-4 mt-6 pr-4">
            {t.desc}
          </p>
        </div>
        
        {/* Right Side: Columns */}
        <div className="w-full lg:w-2/3 xl:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12">
          {colData.map((col, i) => (
            <div key={i}>
              <h4 className="text-[10px] xl:text-[11px] font-bold tracking-[0.3em] text-zinc-400 mb-8 flex items-start sm:items-center gap-2">
                <div className="w-1.5 h-1.5 bg-zinc-700 hidden sm:block opacity-50 shrink-0" /> 
                <span className="leading-snug">{col.title}</span>
              </h4>
              <ul className="flex flex-col gap-4 text-[10px] sm:text-[11px] font-bold tracking-widest sm:tracking-[0.15em] text-zinc-600">
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.external ? (
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-white transition-colors cursor-pointer inline-block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.url} 
                        className="hover:text-white transition-colors cursor-pointer inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Setup */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center pt-10 border-t border-zinc-900 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 sm:gap-10 text-[10px] font-bold tracking-widest uppercase text-zinc-600 justify-center md:justify-start order-2 md:order-1 w-full md:w-auto">
          <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{t.privacy}</Link>
          <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">{t.terms}</Link>
          <Link href={`/${lang}/esg`} className="hover:text-emerald-500 transition-colors">{t.esg}</Link>
        </div>
        
        <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 flex items-center justify-center gap-3 bg-zinc-950 px-4 py-3 border border-zinc-900 w-full md:w-auto order-1 md:order-2">
          <Globe size={14} className="text-zinc-600" />
          <span>{t.region} <span className="text-white hover:text-emerald-500 transition-colors cursor-pointer">{t.regionName}</span></span>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto text-center md:text-left">
         <p className="text-[9px] text-zinc-700 font-mono uppercase tracking-[0.3em]">
           © 2026 DEMA DIGITAL ASIA HOLDINGS. ALL RIGHTS RESERVED.
         </p>
      </div>
    </footer>
  );
}
