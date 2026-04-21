import { industryVerticals } from '../../../../data/content';
import SectorSlidePageClient from '../../../../components/SectorSlidePageClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
   // Generate static paths for all languages and industry verticals
   const langs = ['en', 'id'];
   const paths = [];

   langs.forEach(lang => {
      industryVerticals.forEach(v => {
         paths.push({ lang, id: v.id });
      });
   });

   return paths;
}

export async function generateMetadata({ params }) {
   const { lang, id } = await params;
   const sector = industryVerticals.find(v => v.id === id);

   if (!sector) return {};

   const title = sector.title[lang] || sector.title.en;
   const desc = sector.impact[lang] || sector.impact.en;

   return {
      title: `${title} - DEMA DIGITAL ASIA Solutions`,
      description: desc,
      alternates: {
         canonical: `/${lang}/sector-solutions/${id}`,
         languages: {
            'en': `/en/sector-solutions/${id}`,
            'id': `/id/sector-solutions/${id}`,
         },
      },
      openGraph: {
         title: `${title} | DEMA`,
         description: desc,
      }
   };
}

export default async function SectorSolutionsDetailPage({ params }) {
   const { lang, id } = await params;
   const sector = industryVerticals.find(v => v.id === id);

   if (!sector) {
      notFound();
   }

   return <SectorSlidePageClient sector={sector} lang={lang} />;
}
