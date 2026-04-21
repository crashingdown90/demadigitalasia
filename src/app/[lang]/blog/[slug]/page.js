import { blogPosts } from '../../../../data/blog';
import { notFound } from 'next/navigation';
import BlogDetailClient from '../../../../components/BlogDetailClient';

export async function generateStaticParams() {
   const langs = ['en', 'id'];
   const paths = [];

   langs.forEach(lang => {
      blogPosts.forEach(post => {
         paths.push({ lang, slug: post.slug });
      });
   });

   return paths;
}

export async function generateMetadata({ params }) {
   const { lang, slug } = await params;
   const post = blogPosts.find(p => p.slug === slug);

   if (!post) return {};

   const title = post.title[lang] || post.title.en;
   const desc = post.excerpt[lang] || post.excerpt.en;

   return {
      title: `${title} | DEMA DIGITAL ASIA Insights`,
      description: desc,
      alternates: {
         canonical: `/${lang}/blog/${slug}`,
         languages: {
            'en': `/en/blog/${slug}`,
            'id': `/id/blog/${slug}`,
         },
      },
      openGraph: {
         title: `${title} | DEMA`,
         description: desc,
      }
   };
}

export default async function BlogDetailPage({ params }) {
   const { lang, slug } = await params;
   const post = blogPosts.find(p => p.slug === slug);

   if (!post) {
      notFound();
   }

   return <BlogDetailClient post={post} lang={lang} />;
}
