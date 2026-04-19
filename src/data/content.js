import { Lock, Server, Microchip, Zap, Ship, Flame, RadioTower, Crosshair } from 'lucide-react';

export const navigationClusters = [
  { label: { en: 'The Core', id: 'The Core' }, id: 'core' },
  { label: { en: 'Neural Network', id: 'Jaringan Neural' }, id: 'neural-network' },
  { label: { en: 'Sector Solutions', id: 'Solusi Sektor' }, id: 'sector-solutions' },
  { label: { en: 'Intelligence Hub', id: 'Pusat Intelijen' }, id: 'intelligence-hub' },
  { label: { en: 'Initiate Handshake', id: 'Inisiasi Akses' }, id: 'initiate-handshake' }
];

export const twelvePillars = [
  {
    id: 'it-consulting',
    tag: 'PILLAR 01',
    title: { en: 'IT & TRANSFORMATION CONSULTING', id: 'KONSULTASI & TRANSFORMASI IT' },
    description: { 
      en: 'Strategic maturity indexing and comprehensive modernization roadmaps tailored for enterprise digital acceleration.', 
      id: 'Pemetaan indeks kematangan strategis dan peta jalan modernisasi komprehensif untuk akselerasi digital korporasi.' 
    },
    stats: { en: ['Maturity Indexing', 'Modernization Roadmap'], id: ['Indeks Kematangan', 'Peta Jalan Modernisasi'] },
    color: 'from-zinc-950',
    icon: 'map'
  },
  {
    id: 'ai',
    tag: 'PILLAR 02',
    title: { en: 'ARTIFICIAL INTELLIGENCE', id: 'KECERDASAN BUATAN (AI)' },
    description: { 
      en: 'Private RAG architectures, advanced computer vision, and predictive engines designed for high-security environments.', 
      id: 'Arsitektur RAG privat, Computer Vision tingkat lanjut, dan mesin analitik prediktif khusus infrastruktur keamanan tingkat tinggi.' 
    },
    stats: { en: ['Private RAG', 'Predictive Engine'], id: ['RAG Privat', 'Mesin Prediktif'] },
    color: 'from-cyan-950',
    icon: 'cpu'
  },
  {
    id: 'big-data',
    tag: 'PILLAR 03',
    title: { en: 'BIG DATA & BUSINESS INTELLIGENCE', id: 'BIG DATA & INTELIJEN BISNIS' },
    description: { 
      en: 'Unified Data Lakehouse infrastructures engineered for real-time streaming and predictive analytical superiority.', 
      id: 'Infrastruktur Data Lakehouse Terpadu yang direkayasa khusus untuk analitik prediktif dan komputasi real-time.' 
    },
    stats: { en: ['Data Lakehouse', 'Real-time Streaming'], id: ['Data Lakehouse', 'Streaming Real-time'] },
    color: 'from-blue-950',
    icon: 'database'
  },
  {
    id: 'software',
    tag: 'PILLAR 04',
    title: { en: 'ENTERPRISE SOFTWARE DEVELOPMENT', id: 'PENGEMBANGAN PERANGKAT LUNAK' },
    description: { 
      en: 'Scalable microservices and high-concurrency systems built to support mission-critical enterprise workflows.', 
      id: 'Arsitektur microservices terukur dan sistem konkurensi masif spesifikasi enterprise untuk menopang beban alur kerja kritis.' 
    },
    stats: { en: ['Microservices Architecture', 'High-Concurrency'], id: ['Arsitektur Microservices', 'Konkurensi Tinggi'] },
    color: 'from-zinc-900',
    icon: 'code'
  },
  {
    id: 'iot',
    tag: 'PILLAR 05',
    title: { en: 'INTERNET OF THINGS & EDGE COMPUTING', id: 'INTERNET OF THINGS & EDGE COMPUTING' },
    description: { 
      en: 'Global IoT orchestration utilizing SCADA/PLC integration to power zero-latency digital twins in smart environments.', 
      id: 'Orkestrasi IoT global melalui integrasi SCADA/PLC untuk menghidupkan kembaran digital (Digital Twin) tanpa latensi.' 
    },
    stats: { en: ['Digital Twin', 'SCADA/PLC Integration'], id: ['Kembaran Digital', 'Integrasi SCADA/PLC'] },
    color: 'from-emerald-950',
    icon: 'globe'
  },
  {
    id: 'cloud',
    tag: 'PILLAR 06',
    title: { en: 'CLOUD COMPUTING & DEVOPS', id: 'CLOUD COMPUTING & DEVOPS' },
    description: { 
      en: 'Infrastructure as Code and automated CI/CD pipelines assuring absolute uptime and redundant localized hosting.', 
      id: 'Infrastructure-as-Code dan otomatisasi pipa CI/CD yang menggaransi waktu aktif 100% dan pangkalan server lokal terenkripsi.' 
    },
    stats: { en: ['Infrastructure as Code', 'Automated CI/CD'], id: ['Infrastruktur Kode', 'Otomatisasi CI/CD'] },
    color: 'from-indigo-950',
    icon: 'cloud'
  },
  {
    id: 'security',
    tag: 'PILLAR 07',
    title: { en: 'CYBERSECURITY & RISK COMPLIANCE', id: 'KEAMANAN SIBER & KEPATUHAN RISIKO' },
    description: { 
      en: 'Military-grade DevSecOps integration featuring Zero Trust Protocols to ensure absolute national data sovereignty.', 
      id: 'Integrasi DevSecOps level militer (Zero Trust) untuk memastikan kedaulatan data nasional yang absolut tak tertembus.' 
    },
    stats: { en: ['Zero Trust Protocol', 'DevSecOps'], id: ['Zero Trust Protokol', 'DevSecOps Operasional'] },
    color: 'from-red-950',
    icon: 'shield'
  },
  {
    id: 'rpa',
    tag: 'PILLAR 08',
    title: { en: 'ROBOTIC PROCESS AUTOMATION', id: 'OTOMATISASI PROSES ROBOTIK (RPA)' },
    description: { 
      en: 'End-to-end operational hyperautomation eliminating human bottlenecking across standard administrative tasks.', 
      id: 'Hiper-otomatisasi mutlak yang mengeliminasi seluruh hambatan administratif repetitif dan keterbatasan performa logistik manusia.' 
    },
    stats: { en: ['Hyperautomation', '24/7 Redundancy'], id: ['Hiper-Otomatisasi', 'Redundansi 24/7'] },
    color: 'from-violet-950',
    icon: 'bot'
  },
  {
    id: 'xr',
    tag: 'PILLAR 09',
    title: { en: 'IMMERSIVE TECHNOLOGY (AR/VR)', id: 'TEKNOLOGI IMERSIF (AR/VR)' },
    description: { 
      en: 'Virtual industrial operator training and holographic data visualization via extended reality hardware.', 
      id: 'Simulasi pelatihan medan industri virtual dan visualisasi hologram langsung dari pangkalan kontrol eksekutif.' 
    },
    stats: { en: ['Virtual Training', 'Data Visualization'], id: ['Simulasi Realita', 'Visualisasi Data'] },
    color: 'from-fuchsia-950',
    icon: 'glasses'
  },
  {
    id: 'blockchain',
    tag: 'PILLAR 10',
    title: { en: 'BLOCKCHAIN & WEB3', id: 'BLOCKCHAIN TERTUTUP & WEB3' },
    description: { 
      en: 'Immutable supply chain traceability networks and distributed smart contracts to guarantee operational transparency.', 
      id: 'Buku besar permanen bebas korupsi (Immutable) untuk transparansi suplai logistik dan kontrak pintar otonom.' 
    },
    stats: { en: ['Traceability', 'Smart Contracts'], id: ['Jejak Transparan', 'Kontrak Pintar'] },
    color: 'from-orange-950',
    icon: 'hexagon'
  },
  {
    id: 'green-tech',
    tag: 'PILLAR 11',
    title: { en: 'GREEN TECH & ESG IT', id: 'TEKNOLOGI HIJAU & IT ESG' },
    description: { 
      en: 'Precision carbon footprint tracking software and energy efficiency mapping to meet rigorous global ESG milestones.', 
      id: 'Pelacak presisi emisi Jejak Karbon dan skema efisiensi energi terpusat untuk menembus standar kepatuhan operasional internasional (ESG).' 
    },
    stats: { en: ['Footprint Tracking', 'ESG Mapping'], id: ['Pelacakan Karbon', 'Pemetaan Lingkungan'] },
    color: 'from-lime-950',
    icon: 'leaf'
  },
  {
    id: 'martech',
    tag: 'PILLAR 12',
    title: { en: 'MARTECH & GROWTH ANALYTICS', id: 'MARTECH & ANALITIK PERTUMBUHAN' },
    description: { 
      en: 'Comprehensive Customer Data Platforms engineered as a definitive ROI Engine capturing behavioral intelligence.', 
      id: 'Platform Mesin Intelijen Kustomer (CDP) penyerap big data untuk membidik titik kelemahan pasar teritorial.' 
    },
    stats: { en: ['Customer Data Platform', 'ROI Engine'], id: ['Platform Data Klien', 'Mesin Profitabilitas'] },
    color: 'from-rose-950',
    icon: 'chart'
  }
];

export const industryVerticals = [
  { 
    id: 'finance',
    title: { en: 'Financial & Banking', id: 'Finansial & Perbankan' }, 
    icon: <Lock />, 
    impact: { en: 'Detecting fraud prior to transaction completion and transforming Core Banking into a zero-latency digital engine.', id: 'Mendeteksi fraud sebelum transaksi terselesaikan dan mentransformasi Layanan Finansial tanpa latensi.' },
    subPillars: { en: ['High-Freq Trading Alg', 'Quantum-Safe Ledger', 'Automated Fraud Radar'], id: ['High-Freq Trading Alg', 'Buku Besar Kuantum', 'Radar Fraud Otomatis'] },
    metrics: { stat1: '0.05ms Latency', stat2: 'AES-256 Auth', stat3: '99.9% Uptime' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'LATENCY DECAY IN CORE BANKING', id: 'DEGRADASI LATENSI PADA SISTEM INTI' },
        desc: { en: 'Legacy financial architectures suffer from significant bottlenecking during peak transactional loads. Delay means million-dollar slippages in today\'s digital economy.', id: 'Arsitektur finansial korporat (Legacy) saat ini menderita kemacetan parah saat periode beban transaksi puncak. Keterlambatan detik berarti hilangnya jutaan dolar dalam ekosistem perbankan modern yang berjalan non-stop tanpa batas geografis.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'EXPOSURE TO ZERO-DAY FRAUD', id: 'ANCAMAN PERETASAN ZERO-DAY' },
        desc: { en: 'Monolithic mainframes are inherently vulnerable to delayed cross-border reconciliation, exposing banking institutions to sophisticated zero-day fraud attempts before AML protocols can react.', id: 'Server monolitik konvensional sangat tidak berdaya terhadap manipulasi data lintas perbatasan. Institusi selalu kalah satu langkah melawan ancaman pencurian dana kelas kakap sebelum protokol Anti-Pencucian Uang mendeteksinya.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'OBLITERATION OF CONSUMER TRUST', id: 'RUNTUHNYA KEPERCAYAAN NASABAH' },
        desc: { en: 'Downtime and security breaches destroy capital ratios and instantly drive investors away. A single breach creates irreversible damage to an enterprise bank’s valuation.', id: 'Sistem yang lumpuh atau pembobolan dana (breach) menghancurkan seketika rasio permodalan dan mengusir para pemegang saham (investor). Satu insiden gagal sistem dapat merobek reputasi Bank yang dibangun puluhan tahun.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'EVENT-DRIVEN NEURAL FINANCE', id: 'KECERDASAN ARUS FINANSIAL TERPADU' },
        desc: { en: 'DEMA proposes the total decoupling of slow databases, injecting predictive event-driven neural algorithms that validate thousands of transactions automatically before they even resolve.', id: 'DEMA Digital Asia merumuskan pembongkaran total sentral data usang menuju arsitektur yang mengandalkan algoritma berbasis peristiwa (Event-Driven). Ribuan transaksi akan dikarantina dan divalidasi ganda bahkan sebelum buku besar mencatatnya.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'DECENTRALIZED MICROSERVICES DEPLOYMENT', id: 'PELUNCURAN MICROSERVICES TERDESENTRALISASI' },
        desc: { en: 'We replace the monolithic core with a distributed Microservices Architecture. This ensures that if one service fails, the entire banking application remains 100% operational.', id: 'Menggantikan mesin inti yang kaku dengan susunan Microservices terdesentralisasi tingkat tinggi. Arsitektur modular ini memastikan bila satu fitur (contoh: tarik tunai) bermasalah, seluruh aplikasi digital perbankan lainnya tetap hidup tegak seratus persen.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'QUANTUM-RESISTANT BIG LEDGER', id: 'BUKU BESAR ANTI-KOMPUTASI KUANTUM' },
        desc: { en: 'By engineering an immutable cryptographic backend, all historical transactions are immune to post-quantum decryption attempts, shielding enterprise data permanently.', id: 'Berbekal teknik pangkalan data kriptografik, semua jejak historis penarikan maupun simpanan diproteksi secara absolut dari upaya forensik/dekripsi peretas di masa depan, termasuk oleh serangan komputasi Kuantum.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'ZERO-TRUST AES-256 ARCHITECTURE', id: 'ARSITEKTUR ZERO-TRUST AES-256' },
        desc: { en: 'Trust no one. Every micro-transaction is encrypted with AES-256 keys, demanding robust authentication checks from origin to destination invisibly.', id: 'Jangan percaya siapapun. Semua koneksi antar staf cabang maupun aktivitas digital nasabah diperlakukan sebagai entitas asing. Semua wajib melewati lorong enkripsi militer AES-256 yang divalidasi mesin berulang kali secara tak kasat mata.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'ELASTIC CLOUD PROVISIONING', id: 'PROVISIONING CLOUD ELASTIS' },
        desc: { en: 'The system auto-scales during festive season rushes. If network traffic spikes by 10,000%, the internal cloud allocates computing power synchronously in milliseconds.', id: 'Infrastruktur akan otomatis membengkak sesuai kebutuhan saat periode puncak (seperti Lebaran/Gajian). Jika beban tiba-tiba melesat 10.000%, awan internal kami secara sadar meminjam tenaga mesin lain secara instan memecah antrean lalu lintas data.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'ATTAINING 0.05MS TRANSACTION LATENCY', id: 'PENCAPAIAN LATENSI TRANSAKSI 0.05 MILIDETIK' },
        desc: { en: 'Hyper-resiliency achieves true High-Frequency Trading parameters. Operational server overhead costs are slashed mechanically by 60% due to optimal resource rationing.', id: 'Ketangguhan eksponensial ini mencetak rekor kecepatan transaksi hingga 0.05 milidetik (nyaris seketika). Sementara itu, anggaran Opex pemeliharaan server fisik (IT) dapat dipangkas secara ekstrem hingga 60%.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'GUARANTEED 99.99% UPTIME & REGULATORY BINDING', id: 'GARANSI UPTIME 99.99% & TUNDUK REGULASI OJK' },
        desc: { en: 'Compliance with strict national financial regulations is coded inherently. Automatic audits ensure zero friction with government authorities while maintaining pristine uptime.', id: 'Kepatuhan terhadap standar operasional tingkat atas Otoritas Jasa Keuangan (OJK) atau Bank Sentral telah dikunci sejak hari pertama. Semua laporan audit ditarik secara otomatis untuk menekan kesalahan klerikal hingga titik terendah (Zero-Error).' }
      }
    ]
  },
  { 
    id: 'health',
    title: { en: 'Healthcare & Medical', id: 'Kesehatan & Medis' }, 
    icon: <Server />, 
    impact: { en: 'Protecting national-scale medical databanks and diagnosing radiography based on advanced Computer Vision within 3 seconds.', id: 'Melindungi data rekam medis berskala nasional dan mendiagnosis radiologi berbasis Computer Vision dalam 3 detik.' },
    subPillars: { en: ['Biomarker Prediction', 'HIPAA-grade Encryption', 'Smart Hospital IoT'], id: ['Prediksi Biomarker', 'Enkripsi Setara Militer', 'IoT Rumah Sakit Pintar'] },
    metrics: { stat1: 'Zero Data Leak', stat2: 'HL7 Compliant', stat3: '3s Diagnosis' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'NATIONWIDE FRAGMENTED HEALTH RECORDS', id: 'REKAM MEDIS PASIEN YANG TERCECER BLANGKONYA' },
        desc: { en: 'National scale hospitals completely lack standardized data formatting, leading to heavily isolated patient files that never talk to each other across different care units.', id: 'Rumah sakit dan klinik tingkat nasional masih miskin standar data. Akibatnya, jutaan rekam jejak penyakit pasien tertimbun di server lokal berdebu, tidak pernah tersambung apalagi bisa diakses cepat bila terjadi darurat medis lintas kota.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'DATA LEAKAGE & PRIVACY THREATS', id: 'KEBOCORAN DATA & ANCAMAN PRIVASI FATAL' },
        desc: { en: 'Unencrypted databases make hospitals prime targets for ransomware, forcefully locking out surgeons from life-saving medical histories demanding exorbitant payouts.', id: 'Basis data tanpa pelindung sandi membuat instansi kesehatan menjadi sasaran empuk peretas virus (Ransomware). Bayangkan jika seluruh layar operasi bedah lumpuh dikunci peretas hingga rumah sakit disandera uang tebusan.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'TREATMENT DELAYS AND FATALITIES', id: 'KETERLAMBATAN ADMINISTRASI & RISIKO NYAWA' },
        desc: { en: 'Administrative lag in retrieving patient allergies or blood types forces emergency doctors to blindly wait, radically increasing mortality rates and malpractice lawsuits.', id: 'Saling lempar formulir pendaftaran memperlambat dokter UGD menarik riwayat alergi pasien. Penantian birokratis ini secara langsung mengerek tajam metrik rasio kematian serta mengundang potensi tuntutan dugaan malapraktik bernilai miliaran.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'UNIFIED CENTRAL DATA LAKEHOUSE', id: 'PUSAT DANAU DATA MEDIS TERPADU' },
        desc: { en: 'DEMA targets the eradication of siloed clinics by engineering a single point of truth Data Lakehouse accessible via biometric clearance nationally.', id: 'DEMA menargetkan pemberantasan server rumah sakit silo. Kami merancang arsitektur Danau Data Medis dimana seluruh riwayat penyakit penduduk terangkum ke satu titik berdaulat yang hanya bisa ditarik lewat izin biometrik spesifik dokter pemeriksa.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'HL7/FHIR COMPLIANT INTEGRATION ROW', id: 'INTEGRASI KEPATUHAN LINI DATA HL7/FHIR' },
        desc: { en: 'By forcefully restructuring all local SQL inputs into HL7 and FHIR global standards, healthcare machinery from disparate vendors finally communicate perfectly in real-time.', id: 'Kami merestrukturisasi setiap ketikan data perawat ke dalam standar tata bahasa medis internasional HL7 dan FHIR. Dengan ini, apapun jenis mesin MRI atau monitor jantung yang dikirim pihak Vendor, otomatis tersinkron ke dalam platform seketika.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'COMPUTER VISION DIAGNOSTICS AI', id: 'KECERDASAN BUATAN DIAGNOSIS VISUAL' },
        desc: { en: 'Injecting deep learning algorithms to support radiology teams. The Machine Learning matrix scans x-rays and MRIs, isolating malignant tissue anomalies in mere seconds.', id: 'Menyuntikkan kecerdasan buatan kelas atas ke dalam bangsal radiologi. Mesin secara absolut akan membaca ribuan potret citra X-Ray/MRI harian, mendeteksi dan menggaris tebal sel ganjil (seperti potensi tumor) dalam hitungan sebatas 3 detik per foto.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'HIPAA-GRADE CRYPTOGRAPHY', id: 'KRIPTOGRAFI REKAM MEDIS SETARA HIPAA' },
        desc: { en: 'Patient demographic data is strictly anonymized through heavy hashing functions, neutralizing identity theft risks globally and satisfying all HIPAA compliance laws.', id: 'Identitas sensitif demografi pasien diubah (hash anonimisasi) sebelum mengudara. Risiko fatal pencurian rekam medis langsung ditekan menjadi nol persen. Tunduk, taat, dan memenuhi akreditasi tingkat global (termasuk standar paranoik regulasi HIPAA).' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'SMART HOSPITAL IOT NETWORK', id: 'JARINGAN RUMAH SAKIT PINTAR IOT' },
        desc: { en: 'Scaling beyond databases, physical wards are linked with IoT sensors. Bed occupancy, blood bag temperatures, and oxygen tanks flow directly into the executive dashboard.', id: 'Tak hanya sebatas perangkat lunak, penyebaran simpul IoT fisik ditanamkan. Mulai dari sensor suhu lemari kantong darah, sisa volume tabung gas oksigen, hingga sensor kekosongan ranjang IGD akan dilaporkan terus menerus ke layar manajemen direksi.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'PREDICTIVE TRIAGE AND ZERO WASTE', id: 'TRIASE PREDIKTIF DAN PENEKANAN LIMBAH MEDIS OBAT' },
        desc: { en: 'AI algorithms predict local disease surges, assuring optimal hospital bed assignment. Pharmaceutical over-stocking is mathematically abolished, saving capital expenditure.', id: 'Akurasi pendataan mengurangi antrean horor loket IGD. Analitik memprediksi lonjakan demam berdarah sehingga apotek bisa menyetok impuls secara proporsional, membumihanguskan kerugian atas masa kedaluwarsa obat obatan ratusan juta rupiah per bulan.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'FLAWLESS AUDITABILITY & MALPRACTICE SHIELDS', id: 'KESEMPURNAAN AUDIT & PERISAI TUNTUTAN HUKUM' },
        desc: { en: 'Total eradication of administrative friction. Immutable blockchain logs record precisely which doctor accessed what file ensuring legal traceability and rock-solid defense protocols.', id: 'Runtuhnya seluruh dinding birokrasi berbelit. Catatan persetujuan medik, penolakan tindakan, kapan dokter membedah pasien log nya tidak dapat dimodifikasi pihak manapun (karena desentralisasi blockchain). Melindungi institusi mutlak dari sengketa salah sangka.' }
      }
    ]
  },
  { 
    id: 'manufacture',
    title: { en: 'Connected Manufacturing', id: 'Manufaktur Terhubung' }, 
    icon: <Microchip />, 
    impact: { en: 'Total smart factory execution through robotic orchestration and 24/7 Supply Chain tracking nodes.', id: 'Eksekusi Pabrik Pintar mutlak melalui orkestrasi robotik dan pemantauan sensor Rantai Pasok secara preskriptif.' },
    subPillars: { en: ['Robotic Orchestration', 'Autonomous Supply Chain', 'Digital Twin Engine'], id: ['Orkestrasi Otomatis', 'Rantai Pasok Otonom', 'Mesin Kembaran Digital'] },
    metrics: { stat1: 'SCADA Integrated', stat2: '14,000+ Sensors', stat3: 'Zero Downtime' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'ASSEMBLY LINE DOWNTIME & BLIND SPOTS', id: 'MESIN MANGKRAK & ZONA BUTA LINI PERAKITAN' },
        desc: { en: 'Heavy industrial production relies entirely on reactive maintenance. When a single mechanical node fractures, the entire assembly line violently grinds to a halt.', id: 'Sektor manufaktur atau industri berat saat ini lumpuh akibat bergantung total pada model "Pemeliharaan Reaktif". Mereka baru sadar dan panik saat sabuk perakitan jebol mendadak, menghentikan seluruh produksi pabrik dalam sekedip mata.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'LACK OF SCADA SYNERGY', id: 'MINIMNYA SINERGI SISTEM KENDALI SCADA' },
        desc: { en: 'Machines produced by varying vendors utilize isolated PLC codes. The central command floor has absolutely zero holistic visibility over real-time factory floor conditions.', id: 'Peralatan mekanis (dinamo, lengan robot) dibeli dari luar negeri tanpa keselarasan piranti lunak (PLC). Ruang komando direktur sama sekali tidak punya pijakan fakta data secara real-time atas angka beban hidup lantai pabrik.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'UNPREDICTABLE CAPEX & LOGISTICAL DELAYS', id: 'BOCORNYA ANGGARAN & TERGANGGUNYA RANTAI PASOK' },
        desc: { en: 'Unplanned downtime bleeds millions of dollars hourly across global supply chains. Delayed shipments trigger severe downstream fines from B2B clients relying on strict arrival times.', id: 'Pabrik yang mati total merobek paksa anggaran (CAPEX) jutaan dolar per jam secara mendadak. Kargo yang gagal dikapalkan telat menepati janji, memicu denda (penalti) kontrak berjumlah brutal dari perusahaan klien lapis dua.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'AUTONOMOUS INDUSTRY 4.0 ORCHESTRATION', id: 'INDUSTRY 4.0 BERJALAN OTONOM TANPA KENDALI MANUAL' },
        desc: { en: 'DEMA envisions replacing manual factory supervision with prescriptive AI algorithms that dictate machine output autonomously based on actual raw resource availability.', id: 'DEMA menginisiasi perombakan pabrik konvensional menuju format Preskriptif Industri 4.0. Kami melepas ketergantungan mandor manual dan menyerahkan kendali beban berat pada algoritma kecerdasan buatan, menentukan irama kerja pas sesuai cadangan bahan mentah di gudang.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'AI-DRIVEN DIGITAL TWIN CAPABILITY', id: 'KAPABILITAS KEMBARAN DIGITAL BERBASIS AI' },
        desc: { en: 'We construct a virtual 1:1 holographic 3D replica of your physical factory. The neural engine models mechanical stress inside the simulation before commanding the real floor.', id: 'Kami memetakan cetak tata letak seluruh pabrik Anda ke dalam komputer virtual menghasilkan Kembaran Digital 3D (Digital Twin) skala penuh. Simulasi canggih ini mengeksekusi uji tekanan hipotetis secara digital, bukan melakukan eksperimen berbahaya pada alat nyata di bawah.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'MASSIVE IOT SENSOR DEPLOYMENT', id: 'PENANAMAN LAUTAN SENSOR IOT MASSAL' },
        desc: { en: 'Orchestrating over 14,000 localized edge-sensors attached to conveyor belts, hydraulic presses, and thermal gauges. The data flows non-stop, creating an omniscient digital observer.', id: 'Menyebarkan 14.000 titik sensor IoT pengukur panas, getaran, dan kelembapan di seluruh engsel sendi dinamo pabrik. Arus data masif ini akan menjadi indra penciuman dewa bagi mesin analitik perusahaan per detiknya.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'AIR-GAPPED OPERATIONS', id: 'PENGISOLASIAN ALIRAN DATA DARI INTERNET' },
        desc: { en: 'Factory control mechanisms operate on isolated dark networks (Air-Gaps). Operational technology is mathematically shielded from typical global cyber-espionage and terror vectors.', id: 'Panel penggerak baling-baling manufaktur diisolasi seratus persen dari sambungan Wi-Fi Publik (metode Air-Gap). Operasional fisik fasilitas infrastruktur strategis di garansi anti-kebal terhadap intelijen pencurian data, karena tidak berada dalam garis lintas internet.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'MULTI-PLANT CLOUD SYNCHRONIZATION', id: 'SINKRONISASI PABRIK LINTAS BENUA' },
        desc: { en: 'When scaling globally, factories in different continents talk to each other to balance production loads. If Asia slows down, European factories automatically speed up to hit supply quotas.', id: 'Kemampuan mengontrol dan menutup kerugian tanpa henti. Jika rel pabrik cabang Timur terhambat cuti alamiah, otomatis server sentral akan mendongkrak kecepatan ritme lengan robot cabang Barat demi menyesuaikan neraca pasokan ekspor akhir pekan seimbang.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'ELEVATED OEE (OVERALL EQUIPMENT EFFECTIVENESS)', id: 'EFEKTIVITAS ALAT OEE TINGKAT EKSTREM' },
        desc: { en: 'Overall Equipment Effectiveness reaches unseen peaks. Machine maintenance becomes purely predictive—parts are ordered identically moments before the AI expects a fracture to occur.', id: 'Rasio kemangkusan pabrik mendarat di skor nyaris sempurna. Pemesanan suku cadang (*sparepart*) dibeli tepat 48 jam sebelum AI memprediksi akan hancur dan langsung dipasang. Angka waktu tunggu bengkel berkarat akan dipenggal menjadi nol mutlak.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'CARBON-NEUTRAL ESG ALIGNMENT', id: 'NETRALITAS KARBON & AGENDA GLOBAL ESG' },
        desc: { en: 'Energy mapping algorithms optimize electrical consumption down to the milliwatt. Board members inherently fulfill aggressive international net-zero carbon pledges without friction.', id: 'Jadwal putaran turbin dihitung secara presisi sehingga mencegah pembakaran watt listrik liar di waktu istirahat pabrik. Dewan Direktur mendapatkan portofolio memikat, memenuhi syarat ramah lingkungan pelestarian bumi (ESG Netralitas Karbon) di muka PBB secara natural tanpa paksaan.' }
      }
    ]
  },
  { 
    id: 'gov',
    title: { en: 'E-Government (Smart City)', id: 'Pemerintahan (e-Gov)' }, 
    icon: <Zap />, 
    impact: { en: 'Realizing futuristic metropolises by unifying dozens of separate bureaus down to a single executive command hub.', id: 'Menjadikan kota pintar sebuah realitas dengan konsolidasi puluhan dinas silo ke dalam satu Pusat Komando Terpusat.' },
    subPillars: { en: ['Real-time Operations', 'Disaster Threat Mapping', 'Public Data Lake'], id: ['Operasional Otomatis', 'Peta Ancaman Bencana', 'Pusat Danau Data Public'] },
    metrics: { stat1: 'Sovereign Protocol', stat2: 'ISO-27001 Secure', stat3: 'City Dashboard' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'BUREAUCRATIC FRICTION & SILOED MINISTRIES', id: 'DINAS YANG TERISOLASI & FRIKSI BIROKRATIS' },
        desc: { en: 'Municipal authorities lack panoramic visibility. Bureaucratic departments store citizen data in disparate locations, creating a massive labyrinth of inefficiency and repeated registrations.', id: 'Pemerintahan kota atau kementerian pusat saat ini beroperasi seakan memakai penutup mata. Puluhan instansi asyik menimbun data kependudukan dalam lemari ketat mereka masing-masing, menciptakan labirin formulir di mana warga harus mencetak fotokopi KTP berulang-ulang di setiap loket beda dinas.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'FRACTURED EMERGENCY RESPONSIVENESS', id: 'KELUMPUHAN KOORDINASI MASA KRITIS (DARURAT)' },
        desc: { en: 'Isolated systems cannot talk to each other. When disaster strikes, fire bureaus, police forces, and hospitals struggle intensely to coordinate tactical responses, costing invaluable human lives.', id: 'Karena beda vendor, server Kepolisian, Pemadam Kebakaran, dan Rumah Sakit Regional praktis bisu total antara satu sama lain. Saat bencana meletus, ketiadaan saluran koordinasi terpusat menghambat evakuasi helikopter berujung tak terselamatkannya nyawa sipil.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'DUPLICATED BUDGETS & CORRUPT LEAKAGES', id: 'PEMBENGKAKAN ANGGARAN SILUMAN & PUNGLI' },
        desc: { en: 'Without central oversight, independent IT procurements lead to multi-million dollar duplicated budgets. Administrative opacity allows severe corruption networks to flourish silently at the lower echelons.', id: 'Gagalnya pengawasan pusat (desentralisasi liar) memicu dinas tingkat bawah membeli server usang triliunan berulang kali berkedok proyek pengadaan bodong. Birokrasi yang kotor dan gelap menjadi sarang suburnya jaringan pungutan liar (pungli) menekan keringat warga kecil.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'THE SINGULAR EXECUTIVE COMMAND HUB', id: 'MEJA KOMANDO KEPEMIMPINAN TUNGGAL' },
        desc: { en: 'DEMA transforms divided mayoral authorities into a futuristic Smart-City. We extract raw data from every agency, sanitizing and merging them into one singular flawless identity per citizen.', id: 'DEMA memimpin proyek penggabungan seribu birokrasi, mencetak peradaban Kota Pintar sejati. Kami membongkar paksa semua kotak data pelat merah yang tersebar egois, dan menggilingnya jadi satu kesatuan jatidiri digital berdaulat seutuhnya di bawah kuasa satu tanda tangan Kepala Daerah.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'UNIFIED MUNICIPAL METRIC DASHBOARD', id: 'DASHBOARD METRIK STATISTIK PUSAT VISUAL 3D' },
        desc: { en: 'A comprehensive unification protocol bridges all governmental departments. The Regional Executive receives a 3D hologram screen displaying traffic density, emergency vectors, and budget absorption in real-time.', id: 'Setiap ujung kabel dinas diikat kuat ke tengah gedung Gubernur/Walikota melalui saluran API Nasional yang kaku. Dari singgasananya, pejabat tertinggi akan disajikan dasbor 3D peta kota; menunjukan kemacetan langsung, penyerapan dana, dan titik bara api secara detak nyata se-provinsi.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'AI CENSUS & PREDICTIVE LAW ENFORCEMENT', id: 'SENSUS AI & PREDIKSI RAWAN KRIMINALITAS' },
        desc: { en: 'Integrating Computer Vision across street cameras forms a predictive policing net. Historical demographic trends allow algorithms to anticipate where social unrest or infrastructure collapses might manifest down to the street address.', id: 'Ratusan kamera jalanan disuplai otak AI guna menganalisa pola lalulintas plat nomor demi menjegal kasus kriminal dalam pelarian dengan otomatis. Analisa profil sebaran KTP dipakai mengantisipasi blok pemukiman miring yang sangat rentan longsor menjelang musim hujan secara logis.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'GOVERNMENT-GRADE SOVEREIGN PROTOCOL', id: 'KEKUATAN KEDAULATAN DATA BERAKAR LOKAL' },
        desc: { en: 'Citizen data never leaves the nation\'s borders. Strictly compliant with National Cyber and Crypto Agency (BSSN) standards, securing millions of demographic rows within impenetrable national-residency cloud servers.', id: 'Semua denyut nadi NIK KTP serta alamat warga negara absolut diam dan mendekam hanya di daratan Republik. Tunduk mutlak dalam pilar komando BSSN dan UU PDP, seluruh lalu lintas ini di borgol kuat oleh enkripsi kelas militer mematikan ambisi telinga pihak asing (Data Sovereignty).' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'NATIONWIDE BLOCKCHAIN REGISTRY FEDERATION', id: 'FEDERASI BUKU BESAR BLOCKCHAIN KEPULAUAN' },
        desc: { en: 'Scaling a Smart City architecture to cover remote provincial branches is effortless. Our blockchain identity registry federation enables immediate sync between the deepest jungles and central capitals.', id: 'Perluasan Kota Pintar ke pelosok desa terpencil di seluruh muka kepulauan tidak lagi dipusingkan tarik-ulur menara kabel konvensional. DEMA merajut federasi pendataan Blockchain sehingga desa, camat dan presiden bisa membalas nota edaran pada hitungan milidetik yang sama akuratnya tanpa bias.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'MAXIMIZED DEMOCRATIC APPROVAL RATINGS', id: 'LEDAKAN METRIK EFISIENSI & TINGKAT KEPUASAN PUBLIK' },
        desc: { en: 'Fiscal leakages shrink by over 14%. Immediate visible improvements in public portal swiftness severely boost administrative prestige, driving historic elevations in citizen democratic approval indices.', id: 'Anggaran belanja bodong, penggelembungan dana, tercekik lenyap lebih dari sepertiga nominal aslinya. Pelayanan antre sipil transparan, aplikasi bersih bebas macet, dan respon sigap ambulan memompa melesat roket kepercayaan rapor elektabilitas pemimpin kota memukau sentimen hati rakyat.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'ABSOLUTE TRANSPARENCY & AUDIT TRAILS', id: 'JEJAK AUDIT SUPER TRANSPARAN TANPA AMBIGUITAS' },
        desc: { en: 'Corruption is mechanically outlawed. Every budget allocation transferred to municipal subsets is cryptographically hashed, guaranteeing frictionless audits from central Anti-Corruption task forces permanently.', id: 'Tangan-tangan korupsi dipatahkan murni lewat arsitektur koding yang dingin. Setiap sen perpindahan pagu anggaran tercatat absolut, menggaransi kemulusan pemeriksaan (BPK/KPK) dengan tingkat kecatatan audit minus angka tak terbatas.' }
      }
    ]
  },
  { 
    id: 'maritime',
    title: { en: 'Maritime & Logistics', id: 'Logistik & Maritim' }, 
    icon: <Ship />, 
    impact: { en: 'Predictive supply routing utilizing ML protocols for maximum port docking times and fleet fuel efficiency.', id: 'Optimasi jalur pelabuhan dan armada darat menggunakan AI Prediktif untuk efisiensi bahan bakar dan bongkar muat.' },
    subPillars: { en: ['Fleet Routing AI', 'Automated Port Terminal', 'Cold-Chain Tracker'], id: ['Rute Armada AI', 'Terminal Bongkar Muat', 'Pelacak Suhu Real-Time'] },
    metrics: { stat1: 'Real-time GPS', stat2: '94% Fuel Economy', stat3: 'Global Sync' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'UNPREDICTABLE PORT DOCKING LAG', id: 'JEDA BONGKAR MUAT YANG TAK TERKENDALI' },
        desc: { en: 'The global maritime supply chain breaks down heavily at ports. Vessel arrivals consistently misalign with available port docking slots due to terrible maritime communication.', id: 'Rantai pasok komoditas global seringkali terputus di dermaga dan pelabuhan bongkar muat. Kapal kontainer raksasa terpaksa disuruh berlabuh menunggu giliran masuk berhari-hari murni karena butanya jadwal sandar serta ketiadaan saluran komunikasi modern.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'MANUAL CARGO COORDINATION', id: 'KELUMPUHAN TERTATANYA KARGO SECARA MANUAL' },
        desc: { en: 'Coordinating thousands of containers manually using paper trails and legacy software leads to immense misplacement of goods and massive port traffic congestion daily.', id: 'Bongkar pasang dan susunan tumpukan kontainer yang masih menggunakan tebak terka akal sehat pekerja dengan tulisan kapur atau software tahun 90-an sering memicu terkuncinya letak boks esensial di paling bawah dan menyumbat total jalan tol arteri truk harian.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'FUEL IDLE WASTE & COLD-CHAIN SPOILAGE', id: 'BIAYA TERBKAKAR SOLAR & KEBUSUKAN ZAT BIOLOGIS' },
        desc: { en: 'Vessels burning idle fuel whilst waiting at sea obliterates corporate profit margins unconditionally. Temperature-sensitive vaccines and food rot inside delayed cold-chains.', id: 'Mesin utama kapal yang terus dinyalakan beringas memakan stok solar milyaran selama berpekan bersandar diam menunggu merampas profit para pengusaha armada. Parahnya, vaksin medis dan kargo daging sangat rentan hancur jika dibiarkan lamban akibat salahnya manifest masuk rute pendingin.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'AUTONOMOUS MARITIME ORCHESTRATION', id: 'ORKESTRASI PELABUHAN SAMUDRA OTONOM' },
        desc: { en: 'DEMA aims to algorithmically synchronize the arrival trajectory of incoming fleets precisely with the robotic readiness of onshore port cranes in perfect tandem without human yelling.', id: 'DEMA bertujuan untuk menjodohkan balet mekanikal antara lintasan tiba nya jangkar kapal ke pelabuhan sinkron mutlak sepersekian detik ke cengkraman derek (Crane) dermaga pintar tanpa suara riuh teriakan koordinasi buruh.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'PREDICTIVE FLEET ROUTING INTELLIGENCE', id: 'INTELIJEN PREDIKTIF RUTE ARMADA' },
        desc: { en: 'Injections of Machine Learning nodes recalculate voyage plans globally every minute, evading incoming storm vectors and avoiding piracy channels dynamically over the oceans.', id: 'Pemasangan pangkalan mesin belajar akan membaca ulang gambar iklim dan topan laut serta wilayah kerawanan perompak tiap menitnya, secara otomatis memutar setir bahtera komersial ke rute arus terjauh tapi paling murah efisien menembus samudera gelap.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'PORT TERMINAL NEURAL NETWORKS', id: 'PUSAT JARINGAN SARAF TERMINAL TERHUBUNG' },
        desc: { en: 'Port infrastructure connected to a singular cloud entity. Cranes, trucks, and customs APIs move data cooperatively, discharging a cargo ship mechanically twice as fast as before.', id: 'Infrastruktur pelabuhan tak lagi buta, derek pemindah kontainer raksasa dan truk jemputan berbicara layaknya kawanan lebah. Dokumen bea cukai di stempel secara digital hitungan milidetik, merestorasi kapal hingga bersih dua kali lebih kejam kecepatannya.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'IMMUTABLE LEDGER TRACKING', id: 'JEJAK PELACAKAN TAK BISA DIROBEK (LEDGER)' },
        desc: { en: 'Supply chain custody is locked via blockchain ledgers. Bribes or stolen manifest manipulation scenarios become technically impossible to perform at terminal checkpoints.', id: 'Legalitas dokumen transit setiap muatan dikarantina kuat menggunakan rantai blok. Suap, cukong, pungli apalagi pemalsuan stiker logistik mustahil dilakukan di pelabuhan pintu batas (Cekpoin), memotong tegas penyelundupan haram berskala gila.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'INTERCONTINENTAL LOGISTICS SYNC', id: 'JARINGAN PASOK LINTAS BENUA TANPA BATAS' },
        desc: { en: 'From a single headquarters, the AI smoothly balances freight movement linking deep-sea freighters from European straits down to the very local land logistics network in Asia.', id: 'Kekuasaan absolut dari 1 kursi dewan direksi tunggal mengatur jadwal gerbong kontainer lintas rel Asia dan truk lokal hingga selesainya angkutan membelah kanal suez dan selat singapura secara transparan serentak tanpa cacat jarak.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: '94% FUEL OPTIMIZATION & MARGIN SALVAGE', id: '94% EFISIENSI SOLAR BAKAR & PENYELAMATAN JENDELA LABA' },
        desc: { en: 'Enterprise ship-owners gain massive structural margins as maritime logistical expenses plummet. Turnaround time speeds radically drive global shipping dominance against all local competitors.', id: 'Triliunan rupiah hasil menghemat bahan bakar terselamatkan masuk ke pundi para taipan maritim. Waktu bongkar (Turnaround) secepat peluru akan menarik puluhan tengkulak kargo pindah menaiki kapal armada efisien andalan Anda mengubur pesaing kuno lainnya di lautan.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'BULLETPROOF CUSTOMS AUDIT TRAILS', id: 'LAPORAN BEA CUKAI ANTI PELURU DAN CELAH' },
        desc: { en: 'Absolute ledger transparency ensures your shipping corporate group maintains mathematically bulletproof legal audits, surviving any port compliance review effortlessly.', id: 'Dokumentasi ketat akan di garansi melindungi konglomerasi bisnis pengiriman pelayaran global anda di manapun kapal itu sandar. Semua pemeriksaan pabean bea cukai antarbangsa dijamin lolos inspeksi standar kelayakan tinggi hukum maritim internasional mutlak.' }
      }
    ]
  },
  { 
    id: 'energy',
    title: { en: 'Energy & Mining', id: 'Energi & Tambang' }, 
    icon: <Flame />, 
    impact: { en: 'Mitigating heavy machinery failures using satellite drone mapping and acoustic sensors for massive structural faults.', id: 'Memitigasi kecelakaan kerja dan memprediksi kerusakan alat berat tambang jutaan dolar jauh sebelum terjadi.' },
    subPillars: { en: ['Predictive Maintenance', 'Drone Topography Mapping', 'Energy Optimization'], id: ['Pemeliharaan Terprediksi', 'Peta Drone Topografi', 'Optimasi Emisi Energi'] },
    metrics: { stat1: '99% Fault Predict', stat2: 'Edge Computing', stat3: 'Off-grid Sync' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'BLINDFOLDED EXTRACTION CAPABILITIES', id: 'EKSTRAKSI MEMBABI BUTA & PERUBAHAN SUSUNAN ALAM' },
        desc: { en: 'Global extraction operations constantly battle unforeseen geological anomalies deep in the earth. Current topological plotting is deeply inadequate, relying heavily on outdated manual drilling samples.', id: 'Operasi penambangan kelas berat sering kali dipermainkan oleh kejutan cuaca anomali geologis jauh di dasar galian yang pekat. Pemetaan denah (Topologi) hari ini sangat terbelakang, membiarkan insinyur mengandalkan mata telanjang dan kawat konvensional beresiko besar.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'CATASTROPHIC HEAVY MACHINERY FAILURES', id: 'HANCURNYA ASET ALAT BERAT EKSKAVATOR' },
        desc: { en: 'Heavy duty boring machines and drills operate under immense subterranean pressure. A sudden mechanical shatter halts total monthly quotas in an instant with extremely poor rural logistic repair times.', id: 'Dinamo bor penggali serta alat pengeruk baja berputar liar dan menahan jutaan ton material bebatuan. Jika as turbin patah mendadak karena keausan gesek, kerugian berhenti produksi berbulan-bulan mengingat susahnya mengirim suku cadang menembus lebat rimba hutan pedalaman.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'FATALITIES & BILLION-DOLLAR FINES', id: 'LONJAKAN TUNTUTAN HUKUM FATALITAS KERJA & DENDA LUMBUNG EMAS' },
        desc: { en: 'Sudden tectonic shifts or landslides trigger lethal mine collapses resulting in horrific personnel fatalities and permanently crippling international regulatory extraction licenses for years.', id: 'Longsor susulan yang menggulung pekerja galian sering kali menodai lembaran suci reputasi konglomerat energi di mata media publik. Imbas terparah meliputi tewas nyawa manusia, pembekuan operasi tambang dan denda kementrian berdarah triliunan ganti rugi.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'PRECOGNITIVE MINING INTELLIGENCE', id: 'INTELIJEN PRA-KOGNITIF PENAMBANGAN BERAKAL MESIN' },
        desc: { en: 'DEMA envisions projecting a transparent digital grid over volatile remote valleys, integrating the sheer raw power of excavators with neurological Edge AI that senses breaking points in advance.', id: 'DEMA membayangkan merangkul seluruh bukit belantara sunyi menjadi lembar kalkulasi angka matematis. Mesin pengeruk akan ditanamkan saraf buatan sehingga ia bisa merintih merasakan sakit getaran struktur sasis nya ke menara pusat berhari-hari mendahului putus nya mur gerbang logam.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'DRONE LIDAR & ACOUSTIC EDGE SENSORS', id: 'PASUKAN DRONE LIDAR & SENSOR MIKRO AKUSTIK (EDGE)' },
        desc: { en: 'Deployment of automated drone swarms performing daily terrain LiDAR mapping overlaid with acoustic sensors attached across heavy machinery arrays predicting vibrations algorithmically off-grid.', id: 'Penjabaran skuadron udara berwajah *Drone* tanpa pilot yang berpatroli mandiri membacakan laser LiDAR kontur lahan rawan longsor per detiknya. Digabung kawanan sensor pendengar getaran bising yang merekam gesekan besi pengeruk tanpa butuh asupan sinyal internet kota lokal (Edge Computing).' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'PERMANENT OFF-GRID COMPUTING HUB', id: 'PANGKALAN PELADEN KOMPUTASI TENGAH HUTAN TANPA SINYAL' },
        desc: { en: 'Since connectivity in deep jungles is unreliable, our Micro-Datacenters process all complex deep learning logic immediately on-site, activating evacuation sirens the literal microsecond geology shifts.', id: 'Karena melempar Wi-Fi di kawah pengerukan kalimantan adalah kekonyolan, server keras kepala super DEMA menghitung analisa ancaman AI nya di dalam boks keras (Rugged) langsung di lokasi tambang dan membunyikan alaram mundur seketika mendahului amukan bumi.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'ISOLATED INDUSTRIAL ASSET PROTECTION', id: 'SISTEM PELINDUNG ASET INFRASTRUKTUR MINYAK (SCADA)' },
        desc: { en: 'Sovereign hardware guarantees critical SCADA pumping infrastructure ignores malicious cyber-espionage overrides aiming to sabotage international oil flow output networks.', id: 'Bongkahan perangkat keras independen memastikan katup keran kilang minyak memalingkan wajah jika dicoba di kendalikan paksa peretas siber sabotase. Kedaulatan kilang dijaga setara pintu baja tangkai brankas emas nasabah bank swiss.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'FLEET OPTIMIZATION & DECARBONIZATION', id: 'REKRUTMEN ARMADA RAKSASA & DEKARBONISASI MINERAL' },
        desc: { en: 'Predictive software easily scales out to control the autonomous routing of self-driving massive dump-trucks, harmonizing thousands of logistical cycles minimizing global carbon pollution footprints natively.', id: 'Sistem komando pusat lantas mengatur rute pergerakan angkutan truk baja raksasa bermuatan kosong berlalu lalang se-ekstrem semut menghindari kemacetan lereng jalan tanah. Sinkronisasi rute ajaib ini berimbas ke penghancuran emisi solar buangan knalpot drastis menguningkan label profil pertambangan hijau dewan anda secara mutlak.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: '99% MECHANICAL FAILURE PREDICTION', id: 'PROFIL PREDIKSI KERUSAKAN MESIN MENGINJAK SKOR 99%' },
        desc: { en: 'Unscheduled stoppages are wiped off the calendar. Heavy components enter repair bays safely on schedule. Billions in extraction quotas are secured transparently keeping foreign shareholders overwhelmingly content.', id: 'Tanggal merah akibat alat rusak dipensiunkan ke tong sampah administrasi sejarah lama. Semua truk dan alat pengais tanah sudah tahu kapan jadwal sakit bulanan nya mendarat. Triliunan omset target pengerukan dijaga suci senantiasa membuat saham investor meledak tepuk tangan luar biasa gembira di bursa eropa maupun cina.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'GUARANTEED PERSONNEL SURVIVABILITY & OSH COMPLIANCE', id: 'GARANSI KESELAMATAN NYAWA MANUSIA BERSTANDAR K3 TERTINGGI' },
        desc: { en: 'Human lives are shielded perfectly. Early-warning systems trigger flawless disaster evacuations satisfying elite global Occupational Safety and Health (OSH) compliance standards permanently.', id: 'Satu nyawa kuli takkan lagi tumbang menangis mati di bawah cengkeraman reruntuhan tebing longsor yang mendadak rubuh. Alarm guncangan yang membisik sekian detik lari awal mendongkrak reputasi K3 (Keselamatan dan Kesehatan Kerja) dan sertifikasi internasional pertambangan anda jauh melampaui akreditasi pesaing komersial manapun di wilayah timur.' }
      }
    ]
  },
  { 
    id: 'telco',
    title: { en: 'Telecommunications', id: 'Telekomunikasi' }, 
    icon: <RadioTower />, 
    impact: { en: 'Pioneering Self-Healing 5G infrastructure arrays resolving signal decay long before technicians are dispatched.', id: 'Otomatisasi infrastruktur 5G yang sanggup memperbaiki jaringan rusak sendiri (Self-Healing) tanpa campur tangan teknisi.' },
    subPillars: { en: ['5G Network Slicing', 'Self-Healing Towers', 'Subscriber Analytics'], id: ['Sayatan Jaringan 5G', 'Tower Sembuh Otomatis', 'Skoring Kustomer Data'] },
    metrics: { stat1: 'Tbps Streaming', stat2: 'Zero Dead-zone', stat3: 'AI Traffic Route' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'BANDWIDTH ANARCHY DURING PEAK OVERLOAD', id: 'KECUTNYA LEBAR PITA (BANDWIDTH) DI SAAT PENTING/MENDESAK' },
        desc: { en: 'During hyper-dense population gatherings or national emergencies, telecommunication bandwidth suffers massive systemic degradation due to non-elastic localized spectrum configurations.', id: 'Sewaktu konser masif atau jam kantor lalu lintas internet sibuk mengila, tiang-tiang sinyal telkom secara primitif dipaksa terus melayani ombak sesak berdesakan ini secara bodoh menyebabkan kebuntuan mati kecepatan hingga menyentuh titik gigitan siput lumbung putus nafas.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'STATIC ROUTING & MANUAL TOWER MAINTENANCE', id: 'RUTE DATA KAKU SERTA PEMELIHARAAN TIANG BTS SECARA MANUAL' },
        desc: { en: 'Legacy network distribution strictly relies on slow centralized switches. Dispatching technicians to remote towers requires absurd periods of diagnostic delays completely interrupting subscriber gaming and enterprise conferencing.', id: 'Jalur sinyal menara lawas didesain seperti jalur pipa asbes biasa, ia tidak bisa memuai meski diterjang banjir air bah pengguna. Lebih menjijikan lagi, jika menara lokal mati karena rusak konsleting panas listrik, insinyur dikirim mendaki memanjat tiang mencari usang komponen apa yang rusak berhari hari tanpa perbaikan solutif.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'MASSIVE COMPETITOR CHURN & REVENUE PLUMMET', id: 'PEMBELOTAN PINDAH PROVIDER KUSTOMER (CHURN RATE) MEMBIAK' },
        desc: { en: 'Frustrated consumers break brand loyalty immediately in the modern connected era. Angry subscribers mass-migrate to rival operators within minutes causing silent catastrophic valuation bleeding over fiscal quarters.', id: 'Emosi massa netizen tak pernah terobati sabar. Pulas pulus terputusnya laring kabel sinyal sewaktu memutar video rapat konferensi bos memicu amarah dan menyebabkan pengguna sekampung melontar membuang keping cip kartu prabayar merek ini untuk murtad berpindah rumah memeluk lengan saingan operator sebelah selama-lamanya.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'THE CONSCIOUS NEURAL NETWORK (5G NSA)', id: 'JEJARINGAN JALAN RAYA TOL PINTAR BERSARAF INTELIGEN (5G)' },
        desc: { en: 'DEMA architects the total cognitive leap of infrastructure. We grant telecom towers the artificial intelligence capability to breathe, assess their own health, and redirect traffic dynamically around wounded hardware nodes.', id: 'Meluncurnya era revolusi pemikiran DEMA akan mengutuk tugu-tugu kusam menara BTS agar secara magis mampu bernafas dan memeriksa kesehatan tubuh hardware nya sendiri, dan jika tersendat sinyal langsung menyuruh data kustomernya menyelinap pindah melalui menara menara satelit lainnya sebelum sempat tercekik jatuh mati ke trotoar aspal nol sinyal.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'AUTONOMOUS NETWORK SLICING PROTOCOLS', id: 'PENANAMAN PROTOKOL SAYATAN MANDIRI (NETWORK SLICING)' },
        desc: { en: 'Integrating advanced 5G NSA infrastructure capable of algorithmic Network Slicing. By carving specific frequency lanes dynamically, premium corporate VoIP never collapses regardless of civilian TikTok congestion nearby.', id: 'Membelah saluran tol pita lebar internet Anda ke dalam lajur lajur pita halus VVIP terspesifik. Walau jutaan remaja menonton video Tiktok sampai menangis tumpah ruah di stadion luar alun alun konser, ruang direksi korporat Anda di gedung pencakar lain takkan pernah mendera gagap koneksi sinyal sama mulusnya tak tersentuh macet sedetikpun.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'SELF-HEALING TOWER MATRICES', id: 'ARUS MENARA YANG MAMPU SEGERA MENYEMBUHKAN LUKA DIRI (SELF-HEALING)' },
        desc: { en: 'Hardware anomalies trigger instant software bypasses. The matrix repairs its own packet delivery pathways, functioning seamlessly without human command center oversight during regional catastrophic events.', id: 'Keanehan dan keretakan internal piranti disadari sekedipan mata. Otak sentral akan membangun jembatan perputaran (Bypass) otomatis mengitari lobang alat yang mendadak rusak hangus ini. Mempertahankan nafas kencang sinyal internet provinsi walau wujud nyata menara bts nya nyaris meleleh tersambar rentetan petir guntur secara parah tiada kepalang.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'DEEP-PACKET INSPECTION & DDoS SHIELDING', id: 'TAMENG PELAPIS INSPEKSI PERETASAN PAKET DDOS TEBAL' },
        desc: { en: 'Carrier-grade surveillance dissects every incoming data request against known malware signatures. Massive botnet Distributed Denial of Service (DDoS) barrages are absorbed effortlessly, protecting the nation’s backbone connection.', id: 'Fungsi inspeksi dalam memeriksa kartu identitas tiap keping kuota data sebelum mengetuk pintu jaringan inti. Serbuan ribuan jutaan komputer abal-abal serangan zombi peretas (Serbuan DDOS luar daratan cina dan rusia timur) termentahkan mulus bagai butik benteng tertawa geli meredam panah bambu rapuh.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'SUBSCRIBER COGNITIVE DATA LAKE', id: 'SUPLAI MATA AIR DATA KEPRIBADIAN PELANGGAN TERUKUR PRESISI' },
        desc: { en: 'Telecoms evolve past infrastructure to become data-brokers. Behavioral intelligence ingested across mobile devices builds profound advertising personas, unlocking immense secondary revenue rivers through targeted ads globally.', id: 'Operator komunikasi akan membelah cangkang usangnya. Kini mereka meraup lautan danau data pergerakan domisili pengguna, hobi, letak, jadwal perpulangan dan preferensi kebiasaan yang maha presisi. Berubah rupa menyajikan cetak peta tambang sasaran mesin iklan yang dijual kembali untuk suntikan kapital besar di depan.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'ABSOLUTE SPECTRAL EFFICIENCY & CAPEX SLASHING', id: 'EFISIENSI LALINTAS SPEKTRAL & PENEBASAN BEBAN BIAYA MODAL' },
        desc: { en: 'Zero signal decay is materialized unconditionally. Expenditure on physical repairs collapses immediately as cognitive routing carries the burden, guaranteeing your dominance as the only logical telecom provider in the archipelago.', id: 'Keruntuhan gagal layanan ditiadakan seumur zaman. Anggaran pembelian tiang pancang, mobil bak dan ongkos lembur panjat tower ditebas drastik lenyap lantaran sirkuit kabel lunak sudah mendahului mengatur tumpuan muatan secara preskriptif di atas benak, mendaulatkan tahta kaisar paku bumi sinyal raksasa ke pangkuan nama Anda selamanya.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'GOVERNMENTAL CRISIS BANDWIDTH COMPLIANCE', id: 'KOMitmen KEPATUHAN KEBENARAN KOMUNIKASI DARURAT PUSAT' },
        desc: { en: 'Strategic prioritization channels are hard-coded into the architecture ensuring national defense, ambulance, and disaster mitigation fleets retain absolute connection hierarchy during severe sovereign calamities securely.', id: 'Lintasan jalur VIP telah dipatri keras dalam rahim kode menara, menjamin jalur telepon panggilan presiden darurat militer dan sinyal perwira keamanan mobil polisi maupun paramedis sirine ambulana takkan pernah terputus sedetik celahpun mematuhkian wibawa pakem UU kebebasan telekomunikasi kenegaraan hakiki mutlak absolut total.' }
      }
    ]
  },
  { 
    id: 'defense',
    title: { en: 'National Defense', id: 'Pertahanan Nasional' }, 
    icon: <Crosshair />, 
    impact: { en: 'Guaranteeing data sovereignty through localized micro-servers and lag-free high-frequency satellite radar command links.', id: 'Menjamin kedaulatan data militer komando lewat server enkripsi tertutup dan sinkronisasi radar taktis tanpa celah latensi.' },
    subPillars: { en: ['Military-grade Crypto', 'Satellite Image Vision', 'Drone Swarm Command'], id: ['Kriptografi Level Taktis', 'Visi Satelit Citra Radar', 'Komando Kawanan Drone'] },
    metrics: { stat1: 'Air-gapped Server', stat2: 'Quantum-Proof', stat3: 'Tactical Sync' },
    slideData: [
      {
        title: { en: 'MACRO CHALLENGE', id: 'TANTANGAN MAKRO' },
        headline: { en: 'FOREIGN CLOUD DEPENDENCY HAZARD', id: 'TERKURUNGNYA TUBUH KITA OLEH RANTAI RAKSASA PANGKALAN SERVER ASING' },
        desc: { en: 'Present sovereign defense infrastructures dangerously rely on global commercial internet backbones out of sheer convenience, carelessly placing deep-state top secrets in the pockets of antagonistic superpowers.', id: 'Garis pelacak pergerakan radar militer tempur negara hingga detik ini masih ditunggangi rute lajur internet murahan (Cloud asing publik) demi potongan biaya yang picik bodohnya. Mengantarkan rahasia titik pangkalan peluru rahasia gratis terang benderang di depan kacamata telinga intelijen kekuatan adikuasa barat pembohong tiran dunia.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'TACTICAL BLINDNESS & ESPIONAGE VECTORS', id: 'KEBUTAAN MEDAN TAKTIS & SARANG SUBURNYA MATA MATA SIBER' },
        desc: { en: 'A single, perfectly executed cyber warfare intrusion upon an unsecured civilian port completely compromises the entire maneuverability and response radius of a nation\'s defense missile archipelago.', id: 'Hanya butuh seonggok kilatan peretasan di satu kelalaian colokan jaringan kabel markas jenderal lokal amatir, untuk melunturkan hitam mematikan saklar pelontar roket baterai pertahanan anti udara satu republik jadi mainan perompak yang dikendalikan ribuan kilometer jauh tertawa mengejek kita dalam pekat malam.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'TOTAL DECIMATION OF NATIONAL SOVEREIGNTY', id: 'LUNTURNYA DISINTEGRASI KEWIBAWAAN HARGA DIRI KEDAULATAN KEPULAUAN' },
        desc: { en: 'Breached battle plans equate directly to lost wars. Geopolitical respect collapses entirely and negotiations are perpetually forced into severe systemic disadvantages threatening existence itself.', id: 'Sandiwara pertahanan ini hanya menempatkan nyawa laskar berani negara melorot telanjang dada maju ditembaki di lapangan. Jika cetak garis serbuan dicuri mendahului, diplomasi presiden menukik parah dalam selimut negosiasi ancaman pembantaian tak kasat mata yang merongrong akar merpati kedaulatan berkibar ibu pertiwi mumi abadi mati.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'IMPREGNABLE CYBERNETIC GARRISONS', id: 'BENTENG SIBER TERTUTUP (CYBER GARNISON) YANG TAK MUNGKIN DIBOR MESIN PENGHANCUR' },
        desc: { en: 'DEMA enforces the philosophy of absolute isolationism for government intelligence. We sever ties with the civilian web, instating localized super-clusters exclusively running dedicated dark protocols over national sky.', id: 'DEMA Digital Asia tidak akan tawar menawar soal ideologi Isolasi Mutlak bagi kantong data mata kementerian intelijen strategis. Kami menebas pedang memutuskan segala kabel nyangkut yang menumpang numpang ke jaringan komersial sipil tiktok bocil warkop lokal dan memindahkannya seutuhnya bertahta angkuh membanggakan protokol jaringan rahasia sunyi menutupi atmosfir awan daratan nusa bangsa garuda saksi kebeningan awan perak di angkasa satelit rahasia negara agung ini sendirian diam waspada keras menghentak.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'AIR-GAPPED ZERO-TRUST ARCHIPELAGO', id: 'RANGKAIAN GUGUS KEPULAUAN PLATINUM ZERO-TRUST TERTUTUP RAPAT (AIR-GAP)' },
        desc: { en: 'Deployment of hardened Micro-Datacenters literally "air-gapped" physically severed from commercial internet routes. Communication relies entirely on encrypted localized ping frequencies between naval carriers and land headquarters.', id: 'Pemasangan pangkalan server mikro dari perisai balistik ditembak tebar menjamur disembunyikan dalam gua bungker tebing lembah terlepas putus total dari colokan bau mulut internet darat publik (Air-Gappping tulen asli seutuhnya murni 100%). Komunikasi dihembuskan terangkai menyelinap memakai ping frekuensi rahasia tak dikenal antara lambung armada kapal layar berujung kepada kubah istana markas pimpinan puncak tertinggi diam tak terdeteksi berkat balutan lapisan jubah hitam menakutkan menyembunyikan langkah para algojo malam siluman tak bertuan.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'ORCHESTRATING MASSIVE DRONE SWARMS', id: 'KOMANDO INTELIJEN PASUKAN RATUSAN LALAT DRONE NIRAWAK SINKRON SERENTAK' },
        desc: { en: 'Centralized Edge AI systems compute tactical mathematics on the battlefield instantly, driving massive autonomous drone swarms responding to hostile border incursions without human delay or hesitation algorithms.', id: 'Pusat otak tempur gila memuntahkan kalkulasi matematika di lumpur merah perang sungguhan instan mengerikan, merajut dan menggiring paksa ribuan pesawat plastik kecil drone murahan pembawa mortir beringas secepat belatung serempak mengusir kapal pencuri maling penyelundup selat wilayah perbatasan laut tanpa perlu ragu ketakutan hati nurani menunggu perintah tangan gemetar jenderal di ujung sana di kursi rotan beludru merah yang menanti santapan makan siang daging sapi rendang hangat.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'POST-QUANTUM CRYPTOGRAPHY SHIELDING', id: 'PERISAI TAMENG TULANG BESI SANDI KRIPTOGRAFI KEBAL KOMPUTASI PASCA KUANTUM' },
        desc: { en: 'A cyber fortress built to resist future post-quantum decryption assaults. As adversarial nations develop unimaginable supercomputers, your defense secrets remain perpetually walled behind unbreakable mathematical chaos physics permanently.', id: 'Kala nabi-nabi tirani gila negara utara membangun peladen mesin setan kuantum miliyaran voltase demi ambisi menjebol paksa loker brankas presiden republik ini demi menjajah sumber daya kedaulatan yang kita miliki ini bangga mati, kita hanya perlu diam tertawa sambil mengunyah permen karet duduk manis mengagumi keindahanan pertahanan benteng kriptografik anti kiamat DEMA memantulkan semua anak panah kode retasan algoritma itu remuk berantakan menangis pecah mencium aspal kekokohan ilmu matematika ketidakpastian fisika kuantum abadi kekal mantap terjaga rahasia pertahanan kemerdekaan jaya sentausa.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'SATELLITE IMAGE SURVEILLANCE VISION', id: 'SUPLAI PANTAU MATA LANGIT SATELIT KAWASAN BENUA TERINTEGRASI PENUH' },
        desc: { en: 'Radar latency vanishes completely. Machine vision scrutinizes high-orbit satellite snapshots, immediately outlining suspicious oceanic maneuvers or hostile staging grounds faster than human analysts can zoom in manually tracking pixels.', id: 'Menyuntikkan serum pelonjak ke lensa kaca satelit buatan agar mesin visioner mendelineasikan keraguan dari garis pantai. Mesin curiga menumbuhkan mata panah mencoret otomatis gerakan senyap selundupan gelap kapal induk asing bermuatan mesiu berkeliaran dari antah berantah merespon kilat lebih bengis garang akurat presisi mili daripada pengamat manusia di layar gelap redup melototi titik putih memilah buih laut di lautan hindia.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'INVINCIBLE NATIONAL AUTHORITY DETERRENCE', id: 'WIBAWA GEOPOLITIK YANG MAHA TAK BISA DISENTUH JARI TANGAN SIAPAPUN (DETERRENCE)' },
        desc: { en: 'Downtime means defeat. This architecture asserts indisputable authority allowing preemptive coastal security countermeasures to deploy autonomously, striking paralyzing terror into foreign espionage efforts globally forever achieving peace through overwhelming superiority.', id: 'Diam berarti tewas teraniaya terjajah bodoh dalam debu. Arsitektur angkuh pilar dema ini memaksa ketakutan absolut menjadi modal penggentar (deterrence) di meja poker negosiasi iklim ketegangan politik. Armada siap tempur memuntahkan rudal sergap pesisir pantia secepat setan membisik di kuping membuat peretas maling data musuh asing manapun lemas gemetar ngompol terkencing kencing melihat kilauan sadis tajam cakar garuda mesin cybernetic tak terkalahkan melindungi benteng rahasia istana presiden megah abadi sejahtera berkat Dema Digital merdeka.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'STRICT CYBER-WARFARE TREATY BINDING', id: 'KEPATUHAN KODE ETIK PERJANJIAN PERANG BINTANG KELAS DUNIA (CYBER-WARTREATY STANDARDS)' },
        desc: { en: 'Adherence to the deepest international espionage doctrines ensures the defense establishment maintains total aggressive compliance. Operations execute mercilessly while preserving the pristine legal documentation of combat rules strictly globally undeniably binding.', id: 'Mematuhi doktrin aturan tata main perang siber taktik tak kasat mata dunia siluman maya sekeras hukum penjara. Kepatuhan agresif DEMA memastikan serbuan balik pemusnahan peretas penyerang di lindungi payung legalitas doktrin internasional yang tak terbantahkan, mendaulat kementerian panglima militer sebagai komandan paling berwibawa menakutkan yang pernah memimpin sirkuit papan ketik menekan layar sentuh perintah merah mati menyala berapi api menyambar ganas memukau luar biasa kawan selamanya abadi paripurna di asia menakjubkan mantap sekali merdeka jaya selamanya dan abadi sukses.' }
      }
    ]
  }
];
