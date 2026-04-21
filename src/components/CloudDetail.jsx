/* eslint-disable react/no-unescaped-entities */
import { CheckCircle2, Server, Cloud, ShieldCheck } from 'lucide-react';

export default function CloudDetail({ pillar, lang = 'en' }) {
  const statsArray = Array.isArray(pillar.stats) ? pillar.stats : (pillar.stats?.[lang] || pillar.stats?.en || []);

  const d = {
    en: {
      techTitle: "Cloud Capabilities",
      mainTitle: "Modern Infrastructures Made Easy",
      mainDesc1: "We understand that executives don't want to worry about expensive and quickly depreciating hardware maintenance costs. DEMA Cloud migrates your data and applications to a secure, high-speed digital cloud.",
      mainDesc2: "You only pay for the capacity you use (Pay-as-you-go).",
      btnText: "Schedule Executive Briefing",
      execTitle: "Real World Example: Why Migrate to DEMA Cloud?",
      ex1Title: "1. Local Data Sovereignty",
      ex1Desc: "Our physical servers are located within Indonesian jurisdiction, ensuring your institution fully complies with state data protection laws.",
      ex2Title: "2. Zero Downtime Deployments",
      ex2Desc: "When launching new features, DEMA's automated system ensures your application never needs to be taken offline (eliminating 'Under Maintenance' messages).",
      ex3Title: "3. Auto-Scaling Architecture",
      ex3Desc: "Your website or application will never go down or slow down, even if suddenly accessed by millions of users.",
      deliverableTitle: "Cloud Deliverables",
      deliverableDesc: "At the end of migration, clients receive an Integrated System Architecture Document, SLA Guarantees, and an Auto-Scaling Playbook."
    },
    id: {
      techTitle: "Pilar Teknologi Awan",
      mainTitle: "Solusi Infrastruktur Modern Bebas Repot",
      mainDesc1: "Kami memahami bahwa Pimpinan Eksekutif tidak ingin pusing memikirkan biaya perawatan perangkat keras (Server Fisik) yang mahal dan cepat usang. DEMA Cloud memindahkan seluruh data dan aplikasi Anda ke pangkalan awan digital yang sangat aman dan cepat.",
      mainDesc2: "Skema pembiayaan kami memastikan Anda hanya membayar sesuai kapasitas server yang digunakan (Pay-as-you-go).",
      btnText: "Jadwalkan Konsultasi Infrastruktur",
      execTitle: "Contoh Riil: Keuntungan Migrasi ke DEMA Cloud",
      ex1Title: "1. Kedaulatan Data Lokal (Sovereignty)",
      ex1Desc: "Kumpulan server fisik kami terpusat secara aman di dalam tapal batas yurisdiksi Indonesia. Ini membuktikan bahwa instansi/perusahaan Anda patuh terhadap hukum perundang-undangan perlindungan data negara secara absolut.",
      ex2Title: "2. Update Sistem Tanpa Dimatikan (Zero Downtime)",
      ex2Desc: "Saat Anda ingin merilis perbaikan website atau fitur aplikasi perbankan terbaru, sistem otomatis DevOps kami memastikan bahwa aplikasi tidak perlu dimatikan sama sekali (Menghilangkan pesan 'Website Under Maintenance' selamanya).",
      ex3Title: "3. Tahan Lonjakan Pengunjung (Auto-Scaling)",
      ex3Desc: "Halaman website/Aplikasi perusahaan Anda dijamin tidak akan pernah 'Down' atau melambat, meskipun tiba-tiba diakses oleh ratusan ribu hingga jutaan pengunjung secara serentak dalam satu detik.",
      deliverableTitle: "Penyerahan Hasil Jadi (Deliverables)",
      deliverableDesc: "Setelah fase migrasi usai, klien akan langsung menerima Dokumen Titik Jaringan Arsitetkur Awan, Jaminan Akses 99.9% Uptime, dan Sertifikasi Kepatuhan Data Nasional."
    }
  };

  const t = d[lang] || d.en;

  return (
    <div className="animate-in fade-in duration-1000 slide-in-from-bottom-10">
        <div className="pt-16 border-t border-zinc-900 grid md:grid-cols-2 gap-12">
            <div>
               <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-white" /> {t.techTitle}
               </h3>
               <ul className="space-y-6 flex-grow">
                  {statsArray.map((stat, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                     <CheckCircle2 size={16} className="text-zinc-600" /> {stat}
                  </li>
                  ))}
               </ul>
            </div>
            
            <div className="bg-black p-8 border border-zinc-800 flex flex-col justify-between hover:border-zinc-500 transition-colors">
               <div>
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-4">{t.mainTitle}</h3>
                  <p className="text-[11px] text-zinc-400 leading-loose mb-2">
                     {t.mainDesc1}
                  </p>
                  <p className="text-[11px] text-zinc-300 font-bold leading-loose mb-8">
                     {t.mainDesc2}
                  </p>
               </div>
               <button className="w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors">
                  {t.btnText}
               </button>
            </div>
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-900">
           <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2">
                 <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-10 flex items-center gap-4">
                    <span className="w-8 h-px bg-white" /> {t.execTitle}
                 </h3>
                 
                 <div className="space-y-8">
                    <div className="border-l border-indigo-900 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                         <ShieldCheck size={14} className="text-indigo-400"/> {t.ex1Title}
                       </h4>
                       <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{t.ex1Desc}</p>
                    </div>
                    <div className="border-l border-zinc-800 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-600" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                         <Cloud size={14} className="text-zinc-400"/> {t.ex2Title}
                       </h4>
                       <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{t.ex2Desc}</p>
                    </div>
                    <div className="border-l border-zinc-800 pl-6 relative">
                       <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-600" />
                       <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                         <Server size={14} className="text-zinc-400"/> {t.ex3Title}
                       </h4>
                       <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{t.ex3Desc}</p>
                    </div>
                 </div>
              </div>
              
              <div className="md:w-1/2 bg-zinc-950 border border-zinc-900 p-8 flex flex-col justify-center items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-8 border border-zinc-800">
                    <Cloud size={24} className="text-indigo-400" />
                 </div>
                 <h3 className="text-lg font-black tracking-widest text-white uppercase mb-6">{t.deliverableTitle}</h3>
                 <p className="text-[11px] md:text-xs text-zinc-400 leading-relaxed mb-6 max-w-sm">
                    {t.deliverableDesc}
                 </p>
              </div>
           </div>
        </div>
    </div>
  );
}
