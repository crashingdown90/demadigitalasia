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
        { label: t.c2_1, url: `/${lang}/neural-network` },
        { label: t.c2_2, url: `/${lang}/neural-network` },
        { label: t.c2_3, url: `/${lang}/neural-network` },
        { label: t.c2_4, url: `/${lang}/sector-solutions` }
      ] 
    },
    { 
      title: t.col3, 
      links: [
        { label: t.c3_1, url: `/${lang}/intelligence-hub` },
        { label: t.c3_2, url: `/${lang}/intelligence-hub` },
        { label: t.c3_3, url: `/${lang}/intelligence-hub` },
        { label: t.c3_4, url: `/${lang}/help-center` }
      ] 
    },
    { 
      title: t.col4, 
      links: [
        { label: 'LinkedIn', url: 'https://linkedin.com', external: true },
        { label: 'Twitter / X', url: 'https://x.com', external: true },
        { label: 'GitHub', url: 'https://github.com', external: true }
      ] 
    }
  ];

  return (
    <footer className="bg-black pt-24 md:pt-40 pb-12 md:pb-20 px-6 md:px-24 border-t border-zinc-900 text-white relative z-50">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-12 md:gap-10 lg:gap-16 mb-20 md:mb-32 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-2 mb-4 md:mb-0">
          <Link href={`/${lang}`} className="text-3xl font-black tracking-tighter mb-8 block">
            DEMA<span className="font-light tracking-[0.3em] text-xs ml-3 opacity-60">DIGITAL ASIA</span>
          </Link>
          <p className="text-xs text-zinc-500 font-mono uppercase leading-relaxed max-w-sm border-l border-zinc-800 pl-4 mt-6">
            {t.desc}
          </p>
        </div>
        
        {colData.map((col, i) => (
          <div key={i}>
            <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-400 mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-zinc-700 hidden sm:block" /> {col.title}
            </h4>
            <ul className="flex flex-col gap-3 md:gap-5 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-600">
              {col.links.map(link => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors cursor-pointer uppercase block w-max"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.url} 
                      className="hover:text-white transition-colors cursor-pointer uppercase block"
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
