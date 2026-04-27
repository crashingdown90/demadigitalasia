import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import "../globals.css";

const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.04] mix-blend-screen bg-noise" />
);

const AmbientGlow = () => (
  <>
    <div className="pointer-events-none fixed -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/10 blur-[130px] mix-blend-screen z-0" />
    <div className="pointer-events-none fixed -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/5 blur-[150px] mix-blend-screen z-0" />
  </>
);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ['normal', 'italic'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'id';

  return {
    metadataBase: new URL("https://demadigital.asia"),
    title: "DEMA DIGITAL ASIA | Enterprise Deep Tech",
    description: "Asia's Premier End-to-End Digital Transformation & Deep Tech Partner. Building the architecture of tomorrow through AI, IoT, & Zero Trust Frameworks.",
    keywords: ["B2B", "Enterprise AI", "Deep Tech", "Data Sovereignty", "Digital Transformation", "Next.js"],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
    openGraph: {
      title: "DEMA DIGITAL ASIA",
      description: "The neural orchestrator of Asia's digital economy.",
      url: "https://demadigital.asia",
      siteName: "DEMA",
      images: [
        {
          url: "/bg_main_1776588187527.png", 
          width: 1200,
          height: 630,
          alt: "DEMA Digital Asia Satellite Orbit Component",
        },
      ],
      locale: lang === 'en' ? "en_US" : "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "DEMA DIGITAL ASIA",
      description: "Asia's Preeminent Deep Tech Orchestrator.",
      images: ["/bg_main_1776588187527.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "google-adsense-account": "ca-pub-9806436984867634"
    }
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'id';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'DEMA DIGITAL ASIA',
    url: 'https://demadigital.asia',
    logo: 'https://demadigital.asia/bg_main_1776588187527.png',
    description: "Asia's Premier End-to-End Digital Transformation & Deep Tech Partner.",
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID'
    },
    industry: 'Information Technology',
    sameAs: [
      'https://linkedin.com/company/demadigital'
    ]
  };

  return (
    <html lang={lang} className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9806436984867634"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} relative overflow-x-hidden bg-[#000] text-white font-sans selection:bg-white selection:text-black`}>
        <NoiseOverlay />
        <AmbientGlow />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
