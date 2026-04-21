/* eslint-disable react/no-unescaped-entities */
import { CheckCircle2, AlertTriangle, Zap, Activity } from 'lucide-react';

export default function AIDetail({ pillar, lang = 'en' }) {
  const statsArray = Array.isArray(pillar.stats) ? pillar.stats : (pillar.stats?.[lang] || pillar.stats?.en || []);

  return (
     <div className="animate-in fade-in duration-1000 slide-in-from-bottom-10">
        {/* Pain vs Solution Matrix */}
        <div className="pt-16 border-t border-zinc-900 mb-16">
           <h3 className="text-[10px] font-bold tracking-[0.4em] text-cyan-500 uppercase mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-cyan-500" /> Executive Problem Solving Model
           </h3>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-950 p-8 border border-red-900/30 flex flex-col justify-center">
                 <AlertTriangle size={32} className="text-red-500 mb-6" />
                 <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Metode Lama Klien (Legacy)</h4>
                 <ul className="space-y-3 font-mono text-[11px] text-zinc-500">
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">-</span> Pencarian Dokumen via Staf Butuh Berminggu-minggu</li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">-</span> Menghitung Stok Logistik Secara Manual & Sering Hilang</li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">-</span> Menunggu Laporan Excel Keluar Untuk Menyadari Ada Kerugian (Fraud)</li>
                 </ul>
              </div>
              <div className="bg-[#050505] p-8 border border-cyan-900/50 flex flex-col justify-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all" />
                 <Zap size={32} className="text-cyan-400 mb-6 relative z-10" />
                 <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 relative z-10">Injeksi Solusi DEMA AI</h4>
                 <ul className="space-y-4 font-mono text-[11px] md:text-xs text-zinc-300 relative z-10">
                    <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-cyan-500 mt-1 shrink-0"/> Chatbot Internal Membaca Semua SOP Instan (Respon 0.5 Detik)</li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-cyan-500 mt-1 shrink-0"/> Kamera CCTV Langsung Hitung Ribuan Stok Tepat Waktu (Akuntabilitas 24/7)</li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-cyan-500 mt-1 shrink-0"/> Sistem Mengisolasi & Menandai Potensi Fraud Jauh Sebelum Transaksi Gagal</li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Technical Mock Dashboard */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
           <div className="bg-black border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-500 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 font-bold">RAG Retrieval Accuracy</div>
              <div>
                <div className="text-4xl font-black text-white flex items-baseline gap-2">99.8<span className="text-lg text-emerald-500">%</span></div>
                <div className="w-full bg-zinc-900 h-1 mt-4">
                  <div className="bg-emerald-500 w-[99%] h-full" />
                </div>
              </div>
           </div>
           <div className="bg-black border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-500 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 font-bold">Computer Vision Latency</div>
              <div>
                <div className="text-4xl font-black text-white flex items-baseline gap-2">50<span className="text-lg text-cyan-500">ms</span></div>
                <div className="w-full bg-zinc-900 h-1 mt-4">
                  <div className="bg-cyan-500 w-[20%] h-full" />
                </div>
              </div>
           </div>
           <div className="bg-black border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-500 transition-colors">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 font-bold">Predictive Fraud Detection</div>
              <div>
                <div className="text-4xl font-black text-white flex items-center gap-4">Active<span className="text-emerald-500 animate-pulse"><Activity size={24}/></span></div>
                <div className="w-full bg-zinc-900 h-6 mt-4 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-3 shrink-0" />
                  <span className="text-[9px] text-zinc-400 uppercase font-mono tracking-widest">Monitoring 10.4M Data Rows</span>
                </div>
              </div>
           </div>
        </div>

        {/* Specific Products & Terminal Block */}
        <div className="grid lg:grid-cols-2 gap-12 border-t border-zinc-900 pt-16">
           <div className="space-y-8">
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-8 flex items-center gap-4">
                 <span className="w-8 h-px bg-white" /> Contoh Riil: Implementasi Yang Didapat
              </h3>
              <div className="border-l border-cyan-900 pl-6 relative">
                 <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                 <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">1. Private Chatbot & LLM (RAG Internal)</h4>
                 <p className="text-[11px] font-mono text-zinc-400 leading-relaxed">Kami mendevelop Chatbot pintar mirip ChatGPT—namun aplikasi ini tertutup rapat dan ditanam di server privat Anda. Chatbot ini sanggup membaca ribuan PDF SOP, Dokumen Hukum, dan Data Rahasia pegawai secara instan untuk menjawab pertanyaan internal perusahaan—<span className="text-cyan-400 font-bold">tanpa risiko kebocoran data terkirim ke server internet publik.</span></p>
              </div>
              <div className="border-l border-cyan-800 pl-6 relative">
                 <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-cyan-600" />
                 <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">2. Computer Vision (Deteksi Kamera Otomatis)</h4>
                 <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">Kami merakit dan menyambungkan algoritma visual murni ke CCTV gedung/pabrik kelolaan Anda. AI ini dapat langsung difungsikan untuk <span className="text-zinc-300">menghitung kuantitas stok fisik logistik harian, memberhentikan mesin otomatis jika barang cacat terdeteksi (Quality Control)</span>, dan mencatat biometrik tubuh tanpa kenal lelah 24 jam penuh.</p>
              </div>
              <div className="border-l border-cyan-900 pl-6 relative">
                 <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-600" />
                 <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">3. Prediksi Bisnis Analitik (Predictive AI)</h4>
                 <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">Ketimbang staf Anda stres menatap olahan Excel manual bulanan yang melambat, mesin *Predictive AI* kami secara sistematis mambaca jutaan baris tabel Anda berkecepatan tinggi untuk memprediksi: <span className="text-zinc-300">Siapa profil pelanggan yang akan melakukan Fraud (gagal bayar)? Kapan probabilitas alat kantor akan meledak? Dan memperkirakan lonjakan pasokan bulan depan.</span></p>
              </div>
           </div>

           <div className="flex flex-col gap-6">
              <div className="bg-zinc-950 border border-zinc-900/50 p-6 shadow-2xl relative overflow-hidden group">
                 <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-500/10 blur-[30px] rounded-full group-hover:bg-red-500/20 transition-colors" />
                 <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-4 relative z-10 flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> Jaminan Keamanan Privasi
                 </h3>
                 <p className="text-[11px] text-zinc-400 leading-relaxed font-mono relative z-10">
                    Kecemasan utama direksi adalah: <span className="text-white">"Apakah data rahasia kantor saya akan dibaca oleh pembuat AI dari luar?"</span> Jawaban kami: <strong>Sangat Tidak Mungkin.</strong> AI DEMA dikunci secara fisik di dalam server tertutup Anda (<span className="text-cyan-400 font-bold">On-Premise / Private Local Protocol</span>). Data Anda 100% milik Anda, dan beroperasi di luar jangkauan internet publik.
                 </p>
              </div>
              
              <div className="bg-black border border-zinc-800 p-6 flex flex-col flex-grow justify-between">
                 <div>
                    <h3 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-8 mt-2 flex items-center gap-4">
                       <span className="w-4 h-px bg-white" /> Alur Kerja Implementasi DEMA
                    </h3>
                    {statsArray.map((stat, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                     <CheckCircle2 size={16} className="text-zinc-600" /> {stat}
                  </li>
                  ))}
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="text-xs font-black text-zinc-600 mt-1">01</div>
                          <div>
                             <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Data Ingestion</h4>
                             <p className="text-[10px] font-mono text-zinc-500 leading-relaxed">Kami menyedot dan merapikan data kotor Anda menjadi format yang bisa diserap mesin.</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <div className="text-xs font-black text-cyan-800 mt-1">02</div>
                          <div>
                             <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">Model Training</h4>
                             <p className="text-[10px] font-mono text-zinc-500 leading-relaxed">Melatih Saraf AI secara gigih agar hafal 100% seluruh SOP & rutinitas kantor klien.</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <div className="text-xs font-black text-emerald-800 mt-1">03</div>
                          <div>
                             <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Private Deployment</h4>
                             <p className="text-[10px] font-mono text-zinc-500 leading-relaxed">AI diluncurkan berdampingan dengan operasi server klien secara tersembunyi & aman.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <button className="mt-12 w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-white transition-colors">
                    Mulai Konsultasi AI
                 </button>
              </div>
           </div>
        </div>
     </div>
  );
}
