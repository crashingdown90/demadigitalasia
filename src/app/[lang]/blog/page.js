import BlogListClient from '../../../components/BlogListClient';
import { blogPosts } from '../../../data/blog';

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const title = lang === 'id' ? 'Intelijen Riset Terpusat' : 'Central Research Intelligence';
  const desc = lang === 'id' 
    ? 'Direktori komprehensif wawasan teknologi B2B, mulai dari komputasi kuantum hingga asimilasi infrastruktur cerdas.' 
    : 'A comprehensive directory of B2B technology insights, ranging from quantum computing to foundational smart infrastructure assimilation.';

  return {
    title: `${title} | DEMA DIGITAL ASIA`,
    description: desc,
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        'en': '/en/blog',
        'id': '/id/blog',
      },
    },
    openGraph: {
      title: `${title} | DEMA`,
      description: desc,
    }
  };
}

export default async function BlogListPage({ params }) {
  const { lang } = await params;
  return <BlogListClient blogPosts={blogPosts} lang={lang || 'en'} />;
}
