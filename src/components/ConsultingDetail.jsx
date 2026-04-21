/* eslint-disable react/no-unescaped-entities */
import { CheckCircle2, Terminal } from 'lucide-react';

export default function ConsultingDetail({ pillar, lang = 'en' }) {
  const statsArray = Array.isArray(pillar.stats) ? pillar.stats : (pillar.stats?.[lang] || pillar.stats?.en || []);

  return (
    <div className="animate-in fade-in duration-1000 slide-in-from-bottom-10">
        <div className="pt-16 border-t border-zinc-900 grid md:grid-cols-2 gap-12">
            <div>
               <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-white" /> Consulting Matrix
               </h3>
               <ul className="space-y-6 flex-grow">
                  {statsArray.map((stat, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                     <CheckCircle2 size={16} className="text-zinc-600" /> {stat}
                  </li>
                  ))}
               </ul>
            </div>
            
            <div className="bg-black p-8 border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-colors">
               <div>
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-4">Solusi Praktis Untuk Eksekutif</h3>
                  <p className="text-[11px] text-zinc-400 leading-loose font-mono mb-8">
                     Kami mengerti bahwa <span className="text-white font-bold">tidak semua pimpinan klien memahami bahasa teknis pemrograman yang rumit.</span> Layanan Konsultan kami bertindak sebagai <span className="text-cyan-400">"Penasihat Kepercayaan"</span> yang membantu pemilik bisnis untuk menata sistem lama yang berantakan menjadi infrastruktur IT rapi, terukur, dan bebas dari kejahatan siber (kebocoran data).
                  </p>
               </div>
               <button className="w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors">
                  Schedule Executive Briefing
               </button>
            </div>
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-900">
           <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2">
                 <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-10 flex items-center gap-4">
                    <span className="w-8 h-px bg-white" /> Contoh Riil: Apa Yang Akan Kami Kerjakan
                 </h3>
                 
                 <div className="space-y-8">
                    <div className="border-l border-emerald-900 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">1. Menganalisis Kebocoran & Performa Sistem Lama</h4>
                       <p className="text-[11px] font-mono text-zinc-400 leading-relaxed">Kami membongkar sistem kuno yang sedang tim Anda gunakan, lalu memberikan laporan blak-blakan: mana server yang terlalu lambat, bagian mana yang <span className="text-red-400">sangat rawan diretas</span> (di-hack), dan anggaran apa yang terbuang sia-sia setiap bulannya.</p>
                    </div>
                    <div className="border-l border-zinc-800 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-600" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">2. Penyusunan IT Master Plan (Pembuatan Peta Jalan)</h4>
                       <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">Seringkali proyek aplikasi pemerintah/korporat mangkrak karena tidak terencana. Kami membuatkan <span className="text-zinc-300">Target Digitalisasi Bertahap (Tahun 1 hingga Tahun 5)</span> agar seluruh investasi aplikasi perusahaan menjadi terarah dan bisa dipertanggungjawabkan.</p>
                    </div>
                    <div className="border-l border-zinc-800 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-600" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">3. Mewakili Manajemen: Seleksi Vendor (Tender)</h4>
                       <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">Agar klien tidak ditipu kualitas rendah oleh vendor/kontraktor luar (misalnya saat membeli Software ERP/CRM), Konsultan Eksekutif DEMA akan <span className="text-zinc-300">berdiri di sisi klien untuk menguji, menyeleksi kelayakan keamanan kode (Source Code), dan mengawasi vendor</span> tersebut bekerja.</p>
                    </div>
                 </div>
              </div>
              
              <div className="md:w-1/2 bg-zinc-950 border border-zinc-900 p-8 flex flex-col justify-center items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-8 border border-zinc-800">
                    <Terminal size={24} className="text-zinc-600" />
                 </div>
                 <h3 className="text-lg font-black tracking-widest text-white uppercase mb-6">Penyerahan Hasil (Deliverables)</h3>
                 <p className="text-[11px] md:text-xs text-zinc-400 font-mono leading-relaxed mb-6 max-w-sm">
                    Hasil akhir dari fase konsultasi kami tidak mengawang-awang. Klien akan menerima <span className="text-white font-bold">Dokumen Arsitektur Sistem Terpadu, Laporan Investigasi Keamanan, dan Naskah Aturan Digitalisasi Jangka Panjang (SOP)</span> yang sah sebagai pedoman kerja.
                 </p>
              </div>
           </div>
        </div>
    </div>
  );
}
