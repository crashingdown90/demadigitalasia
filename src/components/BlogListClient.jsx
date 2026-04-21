"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Network, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { dictionary } from '../dictionaries';

export default function BlogListClient({ blogPosts, lang }) {
  const t = dictionary[lang]?.blog || dictionary.en.blog;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories based on language
  const categories = ['All', ...new Set(blogPosts.map(post => post.category[lang] || post.category.en))];

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const titleMatch = (post.title[lang] || post.title.en).toLowerCase().includes(searchQuery.toLowerCase());
    const excerptMatch = (post.excerpt[lang] || post.excerpt.en).toLowerCase().includes(searchQuery.toLowerCase());
    const searchMatch = titleMatch || excerptMatch;

    const categoryMatch = activeCategory === 'All' || (post.category[lang] || post.category.en) === activeCategory;

    return searchMatch && categoryMatch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const standardPosts = filteredPosts.slice(1);

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-40 relative flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,#27272a_0%,transparent_40%)] opacity-30" />

      {/* Header Section */}
      <section className="max-w-7xl w-full px-6 md:px-12 relative z-10 pt-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="md:w-1/2">
             <div className="flex items-center gap-4 mb-6">
                <Network className="text-emerald-500" size={16} />
                <h2 className="text-[10px] font-bold tracking-[0.5em] text-emerald-500 uppercase">{t.tag}</h2>
             </div>
             <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] w-full break-words">
                {t.title1} <br className="hidden sm:block" /> <span className="text-zinc-600 font-light italic">{t.title2}</span>
             </h1>
          </div>

          <div className="md:w-1/2 w-full flex flex-col gap-6">
             <p className="text-sm md:text-base font-sans text-zinc-400 leading-relaxed border-l-2 border-emerald-900 pl-6">
                {t.desc}
             </p>
             
             {/* Live Search Bar */}
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Search size={18} className="text-zinc-500 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                   type="text"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder={lang === 'id' ? "Cari Topik Laporan..." : "Search Insight Reports..."}
                   className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-none py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500 focus:bg-black transition-all font-mono text-sm tracking-widest placeholder:text-zinc-600"
                />
             </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-zinc-900">
           {categories.map((cat, idx) => (
             <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                   activeCategory === cat 
                   ? 'bg-emerald-950/30 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                   : 'bg-transparent border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600'
                }`}
             >
                {cat}
             </button>
           ))}
        </div>
      </section>

      {/* Featured/Hero Post */}
      {featuredPost && (
         <section className="max-w-7xl w-full px-6 md:px-12 relative z-10 mb-20">
            <Link href={`/${lang}/blog/${featuredPost.slug}`}>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="group relative w-full overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col md:flex-row hover:border-emerald-500/50 transition-all duration-500"
               >
                 <div className="w-full md:w-3/5 h-[300px] md:h-[500px] relative overflow-hidden">
                    <Image 
                       src={featuredPost.thumbnail} 
                       alt={featuredPost.title[lang] || featuredPost.title.en} 
                       fill 
                       className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black md:bg-gradient-to-r md:from-black/50 to-transparent" />
                 </div>
                 
                 <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-black relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100" />
                    
                    <div className="flex gap-4 items-center mb-6 text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                       <span className="text-emerald-500 border border-emerald-900/50 px-3 py-1 bg-emerald-950/20">{featuredPost.category[lang] || featuredPost.category.en}</span>
                       <span>{featuredPost.date}</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-[1] mb-6 text-white group-hover:text-emerald-50 transition-colors">
                       {featuredPost.title[lang] || featuredPost.title.en}
                    </h2>

                    <p className="text-sm font-sans text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4">
                       {featuredPost.excerpt[lang] || featuredPost.excerpt.en}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                       <span className="text-[10px] font-mono tracking-widest text-zinc-600">
                          {featuredPost.author}
                       </span>
                       <div className="text-emerald-500 bg-emerald-950/30 p-3 rounded group-hover:bg-emerald-500 group-hover:text-black transition-all">
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 </div>
               </motion.div>
            </Link>
         </section>
      )}

      {/* Standard Post Grid */}
      <section className="max-w-7xl w-full px-6 md:px-12 relative z-10">
        <AnimatePresence>
          {standardPosts.length > 0 && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {standardPosts.map((post, idx) => (
                  <motion.div
                     key={post.slug}
                     layout
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.4 }}
                  >
                     <Link href={`/${lang}/blog/${post.slug}`} className="block h-full">
                       <div className="group h-full flex flex-col border border-zinc-900 bg-zinc-950/80 hover:bg-black hover:border-zinc-700 transition-all cursor-pointer overflow-hidden relative">
                         
                         {/* Card Thumbnail */}
                         <div className="relative w-full h-48 overflow-hidden border-b border-zinc-900">
                            <Image 
                               src={post.thumbnail} 
                               alt={post.title[lang] || post.title.en} 
                               fill 
                               className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80" />
                         </div>

                         {/* Card Content */}
                         <div className="p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-6">
                              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1">
                                {post.category[lang] || post.category.en}
                              </span>
                              <span className="text-[9px] font-mono tracking-widest text-zinc-600">
                                {post.date}
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-[1.1] text-zinc-200 group-hover:text-white transition-colors mb-4 mt-auto">
                              {post.title[lang] || post.title.en}
                            </h3>
                            
                            <p className="text-xs font-sans text-zinc-500 group-hover:text-zinc-400 leading-relaxed max-w-sm mb-8 line-clamp-3 transition-colors">
                              {post.excerpt[lang] || post.excerpt.en}
                            </p>

                            <div className="flex items-center justify-between border-t border-zinc-900 pt-6 mt-auto group-hover:border-zinc-800 transition-colors">
                              <span className="text-[9px] font-bold tracking-widest text-zinc-600 uppercase">
                                {post.author}
                              </span>
                              <div className="text-zinc-600 group-hover:text-emerald-400 transition-colors">
                                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                              </div>
                            </div>
                         </div>
                       </div>
                     </Link>
                  </motion.div>
                ))}
             </div>
          )}
        </AnimatePresence>

        {filteredPosts.length === 0 && (
           <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center border border-dashed border-zinc-800"
           >
              <p className="text-zinc-500 font-mono tracking-widest uppercase text-sm">
                 {lang === 'id' ? 'TIDAK ADA INTELIJEN DITEMUKAN' : 'NO INTELLIGENCE FOUND'}
              </p>
           </motion.div>
        )}
      </section>

    </main>
  );
}
