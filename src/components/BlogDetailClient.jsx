"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Hash } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { dictionary } from '../dictionaries';

// Enhanced Formatting helper with Image and Header support
const formatContent = (contentString) => {
  if (!contentString) return null;
  return contentString.split('\n').map((line, idx) => {
    let formattedLine = line.trim();
    if (formattedLine === '') return <br key={idx} className="hidden" />; // Avoid multiple heavy brs
    
    // Check for Image syntax: ![alt text](url)
    const imgMatch = formattedLine.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      return (
        <div key={idx} className="relative w-full h-[300px] md:h-[450px] my-10 rounded-xl overflow-hidden border border-zinc-800 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           <Image src={imgMatch[2]} alt={imgMatch[1]} fill className="object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
           <div className="absolute bottom-4 left-6 text-[10px] text-zinc-300 font-bold uppercase tracking-widest bg-black/60 px-3 py-1 backdrop-blur border border-zinc-800/50 rounded">{imgMatch[1]}</div>
        </div>
      );
    }

    // Check for H2 syntax: ## Heading
    if (formattedLine.startsWith('## ')) {
      return <h2 key={idx} className="text-2xl md:text-3xl font-black mt-16 mb-8 text-white uppercase tracking-wide">{formattedLine.substring(3)}</h2>;
    }

    // Check for H3 syntax: ### Heading
    if (formattedLine.startsWith('### ')) {
      return <h3 key={idx} className="text-lg md:text-xl font-bold mt-10 mb-6 text-zinc-200 uppercase tracking-widest border-l-4 border-emerald-600 pl-4">{formattedLine.substring(4)}</h3>;
    }

    // Inline parsing for standard paragraphs (Bold and Links)
    const parts = formattedLine.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return (
      <p key={idx} className="mb-6 font-sans text-zinc-300 leading-loose text-[15px] md:text-[17px] max-w-4xl tracking-wide">
        {parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={pIdx} className="text-white font-bold">{part.slice(2, -2)}</strong>;
          }
          const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (linkMatch) {
            return <a key={pIdx} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-900 underline-offset-4 transition-colors">{linkMatch[1]}</a>;
          }
          return part;
        })}
      </p>
    );
  });
};

export default function BlogDetailClient({ post, lang }) {
  const t = dictionary[lang]?.blog || dictionary.en.blog;

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-40 relative flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,#1f2937_0%,transparent_50%)] opacity-20" />

      {/* Back Navigation */}
      <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 mb-12">
        <Link href={`/${lang}/blog`} className="inline-flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> {t.backToList}
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl w-full px-6 md:px-12 relative z-10 mb-20 border-b border-zinc-900 pb-16">
        
        <div className="flex flex-wrap items-center gap-6 mb-10 text-[9px] font-bold tracking-widest uppercase text-zinc-500">
           <span className="flex items-center gap-2 border border-zinc-800 px-3 py-1.5"><Hash size={12}/> {post.category[lang] || post.category.en}</span>
           <span className="flex items-center gap-2"><Calendar size={12}/> {post.date}</span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] md:leading-[0.95] mb-10 text-white"
        >
          {post.title[lang] || post.title.en}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 text-xs font-mono text-zinc-400"
        >
          <div className="w-1.5 h-1.5 bg-emerald-500" />
          <span>{t.author}: <span className="text-white font-sans uppercase font-bold tracking-widest">{post.author}</span></span>
        </motion.div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl w-full px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Excerpt emphasis */}
          <div className="pl-6 border-l-2 border-emerald-900 mb-16 bg-gradient-to-r from-emerald-900/10 to-transparent p-6 rounded-r-xl">
            <p className="text-lg md:text-xl font-sans text-zinc-300 leading-relaxed italic">
              {post.excerpt[lang] || post.excerpt.en}
            </p>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none">
             {formatContent(post.content[lang] || post.content.en)}
          </div>
        </motion.div>
      </article>

    </main>
  );
}
