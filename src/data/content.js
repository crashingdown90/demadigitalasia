import { Lock, Server, Microchip, Zap, Ship, Flame, RadioTower, Crosshair } from 'lucide-react';

export const navigationClusters = [
  { label: { en: 'About Us', id: 'Tentang Kami' }, id: 'core' },
  { label: { en: 'Core Technology', id: 'Solusi Teknologi' }, id: 'neural-network' },
  { label: { en: 'Industries', id: 'Sektor Industri' }, id: 'sector-solutions' },
  { label: { en: 'Knowledge Hub', id: 'Pusat Informasi' }, id: 'intelligence-hub' },
  { label: { en: 'Contact Us', id: 'Hubungi Kami' }, id: 'initiate-handshake' },
  { label: { en: 'Insights', id: 'Blog & Wawasan' }, id: 'blog' }
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
        headline: { en: 'LATENCY DECAY IN CORE BANKING', id: 'SISTEM INTI YANG LAMBAT' },
        desc: { en: 'Legacy financial systems struggle to handle peak transaction volumes, leading to delays and lost opportunities.', id: 'Sistem perbankan tradisional seringkali kewalahan menangani lonjakan volume transaksi. Keterlambatan pemrosesan data (latensi) dapat menyebabkan kerugian finansial yang signifikan bagi bisnis.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM' },
        headline: { en: 'EXPOSURE TO FRAUD', id: 'ANCAMAN KEAMANAN & FRAUD' },
        desc: { en: 'Older, centralized systems are vulnerable to sophisticated cyber threats and delayed fraud detection protocols.', id: 'Sistem sentralisasi versi lama lebih rentan terhadap serangan siber. Keterlambatan deteksi seringkali membuat bank kesulitan menghentikan aksi kejahatan (fraud) sebelum terjadi.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'DECREASED CONSUMER TRUST', id: 'PENURUNAN KEPERCAYAAN NASABAH' },
        desc: { en: 'System downtimes and security breaches directly impact customer trust and damage the bank\'s long-term reputation.', id: 'Seringnya sistem mengalami gangguan (downtime) atau isu keamanan data dapat menurunkan kepercayaan nasabah secara drastis serta merusak reputasi bank dalam jangka panjang.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'SOLUSI DEMA DIGITAL' },
        headline: { en: 'EVENT-DRIVEN NEURAL FINANCE', id: 'SISTEM KEUANGAN BERBASIS DATA REAL-TIME' },
        desc: { en: 'DEMA offers a transition to a real-time, event-driven architecture that validates transactions instantly and accurately.', id: 'DEMA menawarkan transformasi ke sistem digital yang lebih responsif (event-driven). Setiap arus transaksi akan divalidasi dan diproses secara instan sebelum pencatatan akhir dilakukan.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'DECENTRALIZED MICROSERVICES', id: 'ARSITEKTUR MICROSERVICES MODULAR' },
        desc: { en: 'Replacing rigid core systems with modular microservices ensures that if one service fails, the rest of the application remains operational.', id: 'Mengganti sistem yang kaku dengan arsitektur microservices yang modular. Dengan cara ini, jika satu fitur bermasalah (misalnya layanan transfer), fitur lain (seperti cek saldo) akan tetap dapat digunakan oleh nasabah.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'ADVANCED CRYPTOGRAPHIC LEDGER', id: 'BUKU BESAR KRIPTOGRAFI LANJUTAN' },
        desc: { en: 'Utilizing advanced cryptographic ledgers to securely record transaction histories permanently against any future tampering.', id: 'Menggunakan teknologi pencatatan (ledger) kriptografi tingkat lanjut demi mengamankan riwayat transaksi bank secara permanen dari berbagai bentuk percobaan manipulasi atau perubahan data.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'ZERO-TRUST ARCHITECTURE', id: 'ARSITEKTUR KEAMANAN ZERO-TRUST' },
        desc: { en: 'Implementing Zero-Trust protocols where every transaction and internal connection is strictly authenticated and encrypted.', id: 'Menerapkan protokol keamanan Zero-Trust. Setiap transaksi dan akses jaringan antar cabang akan dienkripsi secara penuh (AES-256) untuk mencegah terjadinya kebocoran data dari pihak internal maupun eksternal.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'ELASTIC CLOUD PROVISIONING', id: 'INFRASTRUKTUR CLOUD ELASTIS' },
        desc: { en: 'The infrastructure automatically scales its processing power during high-traffic periods, maintaining optimal performance.', id: 'Kapasitas server bank Anda akan otomatis bertambah (scale-up) saat menghadapi lonjakan transaksi besar (seperti saat gajian atau hari raya), menjaga aplikasi tetap cepat dan tidak mogok.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'OPTIMIZED LATENCY & COST REDUCTION', id: 'OPTIMASI BIAYA & KECEPATAN TRANSAKSI' },
        desc: { en: 'Achieving lightning-fast transaction speeds while reducing physical server maintenance costs by optimizing cloud resources.', id: 'Mencapai kecepatan transaksi yang sangat cepat (ultra-low latency) sekaligus menghemat anggaran pemeliharaan server fisik (IT expenses) secara signifikan melalui efisiensi optimalisasi cloud.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN REGULASI' },
        headline: { en: 'GUARANTEED UPTIME & REGULATORY BINDING', id: 'JAMINAN UPTIME & KEPATUHAN REGULATOR (OJK)' },
        desc: { en: 'Ensuring absolute system uptime while natively complying with central bank regulations through automated reporting features.', id: 'Menjamin ketersediaan sistem (uptime) yang maksimal. Infrastruktur perangkat lunak DEMA dirancang sejak awal untuk mematuhi standar regulasi OJK dan mempermudah proses pelaporan audit.' }
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
        headline: { en: 'FRAGMENTED HEALTH RECORDS', id: 'DATA REKAM MEDIS YANG TERPISAH' },
        desc: { en: 'Hospitals often struggle with unstandardized data formats, causing patient records to be isolated and difficult to share between care units.', id: 'Banyak instansi kesehatan masih menyimpan data pasien secara terpisah (silo). Hal ini menghambat pertukaran informasi medis antar rumah sakit saat situasi darurat.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM' },
        headline: { en: 'DATA PRIVACY THREATS', id: 'ANCAMAN KEAMANAN & PRIVASI DATA' },
        desc: { en: 'Inadequate encryption makes medical databases vulnerable to cyberattacks and ransomware, threatening patient privacy.', id: 'Basis data tanpa standar enkripsi yang memadai menjadikan rumah sakit rentan terhadap serangan siber (ransomware) dan kebocoran rekam medis sensitif.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'ADMINISTRATIVE DELAYS', id: 'KETERLAMBATAN PENANGANAN' },
        desc: { en: 'Administrative lag in retrieving patient history slows down emergency response, directly affecting the quality of clinical care.', id: 'Proses birokrasi dan hambatan akses terhadap riwayat penyakit pasien memperlambat penanganan medis, yang berdampak langsung pada kualitas layanan.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'SOLUSI DEMA DIGITAL' },
        headline: { en: 'UNIFIED MEDICAL DATA LAKE', id: 'PUSAT DATA MEDIS TERPADU' },
        desc: { en: 'We provide a centralized Data Lakehouse architecture, securely unifying patient histories accessible only via verified medical personnel.', id: 'DEMA menyediakan arsitektur Pusat Data Terpadu. Seluruh riwayat medis disatukan dalam satu platform terpusat yang aman dan hanya dapat diakses oleh tenaga medis yang berwenang.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'HEALTHCARE STANDARDS INTEGRATION', id: 'INTEGRASI STANDAR KESEHATAN GLOBAL' },
        desc: { en: 'Standardizing disparate healthcare systems into global HL7 and FHIR formats to ensure seamless interoperability across different medical devices.', id: 'Kami menyelaraskan format data lokal ke dalam standar tata bahasa medis internasional (HL7/FHIR) agar perangkat lunak dan mesin medis dari berbagai vendor dapat terhubung mulus.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'AI MEDICAL IMAGING', id: 'KECERDASAN BUATAN UNTUK DIAGNOSIS VISUAL' },
        desc: { en: 'Implementing AI to assist radiologists by rapidly analyzing X-rays and MRI scans to detect potential anomalies within seconds.', id: 'Menggunakan teknologi AI untuk membantu dokter radiologi membaca citra medis (X-Ray/MRI) dan mendeteksi anomali pada tingkat akurasi tinggi dalam hitungan detik.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'HIPAA-COMPLIANT PROTECTION', id: 'STANDAR KEAMANAN SETARA HIPAA' },
        desc: { en: 'Patient data is strictly anonymized through robust cryptography, neutralizing identity theft risks and adhering to global healthcare compliances.', id: 'Identitas sensitif pasien dilindungi penuh dengan enkripsi tingkat tinggi (anonimisasi). Memastikan seluruh infrastruktur memenuhi standar perlindungan data global seperti HIPAA.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'SMART HOSPITAL IoT NETWORK', id: 'JARINGAN IoT RUMAH SAKIT PINTAR' },
        desc: { en: 'Connecting physical wards with IoT sensors to monitor bed occupancy, equipment statuses, and resource management centrally.', id: 'Menghubungkan fasilitas fisik rumah sakit dengan sensor pintar (IoT) untuk memantau ketersediaan ranjang IGD, suhu obat, hingga suplai medis melalui satu dasbor pusat.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'RESOURCE OPTIMIZATION', id: 'OPTIMASI SUMBER DAYA MEDIS' },
        desc: { en: 'Predictive analytics improve hospital triaging and prevent pharmaceutical over-stocking, optimizing operational expenditures.', id: 'Sistem analitik cerdas mempercepat proses pendaftaran pasien dan mengoptimalkan persediaan farmasi untuk mengurangi pemborosan (obat kedaluwarsa) secara signifikan.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN REGULASI' },
        headline: { en: 'TRANSPARENT AUDITABILITY', id: 'AKUNTABILITAS & KEMUDAHAN AUDIT' },
        desc: { en: 'Secure, unalterable access logs track medical records securely, significantly improving administrative transparency and legal compliance.', id: 'Sistem pencatatan terenkripsi memastikan setiap akses terhadap rekam medis terdokumentasi dengan transparan, memberikan perlindungan dari sengketa medis serta memudahkan proses audit.' }
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
        headline: { en: 'ASSEMBLY LINE DOWNTIME', id: 'WAKTU HENTI LINI PERAKITAN' },
        desc: { en: 'Industrial production often relies on reactive maintenance, causing significant disruptions when mechanical failures occur unexpectedly.', id: 'Sektor manufaktur saat ini sering bergantung pada pemeliharaan reaktif, di mana sebuah kerusakan mesin tiba-tiba dapat menghentikan seluruh produksi seketika.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM' },
        headline: { en: 'VISIBILITY AND CONTROL GAPS', id: 'KURANGNYA VISIBILITAS OPERASIONAL' },
        desc: { en: 'Different machinery utilizing isolated control systems results in a fragmented view of factory floor conditions.', id: 'Kurangnya integrasi sistem kendali (SCADA) antar berbagai mesin dari beragam pabrikan membuat manajemen kesulitan memantau kondisi operasional secara real-time.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'INCREASED CAPEX & LOGISTICAL DELAYS', id: 'TERGANGGUNYA BIAYA & RANTAI PASOK' },
        desc: { en: 'Unplanned downtime elevates overhead costs and delays logistical shipments, impacting client satisfaction and contract fulfillment.', id: 'Terhentinya produksi secara mendadak mengganggu jadwal pengiriman barang, memicu pembengkakan anggaran operasional dan denda keterlambatan dari klien B2B.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'SOLUSI DEMA DIGITAL' },
        headline: { en: 'SMART INDUSTRY 4.0 ORCHESTRATION', id: 'OTOMATISASI PABRIK PINTAR (INDUSTRY 4.0)' },
        desc: { en: 'DEMA empowers factories with autonomous, data-driven orchestration frameworks to improve operational efficiency and agility.', id: 'DEMA mengubah proses pemantauan pabrik konvensional menjadi operasi otomatis (Smart Factory), dimana alur produksi berjalan adaptif menyesuaikan persediaan bahan baku dan permintaan.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'DIGITAL TWIN SIMULATION', id: 'KEMBARAN DIGITAL (DIGITAL TWIN)' },
        desc: { en: 'We construct a virtual replica of the factory to simulate structural stress and optimize layouts digitally before physical implementation.', id: 'Kami membangun miniatur virtual 3D dari pabrik Anda. Simulasi ini digunakan untuk menguji kapasitas operasional dan optimasi beban produksi sebelum diterapkan pada alat fisik.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'INDUSTRIAL IoT INTEGRATION', id: 'INTEGRASI SENSOR IoT INDUSTRI' },
        desc: { en: 'Connecting localized edge-sensors across production lines to provide continuous, automated metric tracking.', id: 'Menyematkan ribuan sensor pintar pada mesin penggerak industri untuk melacak suhu, getaran, dan kelembapan, memberikan wawasan analitik secara berkesinambungan.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'AIR-GAPPED OPERATIONS', id: 'ISOLASI JARINGAN PERANGKAT (AIR-GAP)' },
        desc: { en: 'Factory control mechanisms operate on isolated networks, shielding critical operational technology from external cyber threats.', id: 'Sistem penggerak fisik dipisahkan dan diisolasi dengan aman dari jaringan internet publik demi mencegah kemungkinan penyusupan atau sabotase operasional.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'MULTI-PLANT CLOUD SYNCHRONIZATION', id: 'SINKRONISASI MANUFAKTUR LINTAS REGIONAL' },
        desc: { en: 'Cloud frameworks synchronize data across different factory branches globally to optimally distribute manufacturing loads.', id: 'Menghubungkan fasilitas produksi di berbagai wilayah untuk mendistribusikan beban kerja secara cerdas. Jika satu pabrik mengalami antrian panjang, tugas perakitan bisa dialihkan ke fasilitas lain.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'ENHANCED OVERALL EQUIPMENT EFFECTIVENESS', id: 'PENINGKATAN OEE DAN PEMELIHARAAN PREDIKTIF' },
        desc: { en: 'Improving overall effectiveness by shifting to predictive maintenance, ordering necessary parts just in time before predicted failures.', id: 'Meningkatkan efisiensi mesin (OEE). Melalui sistem prediktif, suku cadang mesin dapat dipesan maupun diganti tepat sebelum terjadi kerusakan, memangkas waktu tunggu secara signifikan.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN REGULASI' },
        headline: { en: 'ESG ALIGNMENT & ENERGY EFFICIENCY', id: 'EFISIENSI ENERGI & STANDAR ESG' },
        desc: { en: 'Energy mapping optimizes electricity usage, naturally aligning enterprise operations with corporate ESG regulations and sustainability pledges.', id: 'Sistem pemetaan daya berupaya mengoptimalkan konsumsi listrik lini operasional. Ini dapat mempermudah perusahaan mematuhi kriteria pelestarian lingkungan atau agenda netralitas karbon (ESG) secara otomatis.' }
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
        headline: { en: 'BUREAUCRATIC FRICTION', id: 'DAPUR KEPENDUDUKAN YANG TERISOLASI' },
        desc: { en: 'Municipal departments often store citizen data in disparate registries, leading to administrative inefficiency and repeated registration hurdles.', id: 'Pemerintahan sering kali beroperasi lintas instansi yang menyimpan data secara terpisah. Hal ini menyebabkan proses pelayanan yang lambat dan masyarakat harus mengisi ulang dokumen yang sama berulang kali.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM' },
        headline: { en: 'FRACTURED EMERGENCY RESPONSIVENESS', id: 'LAMBATNYA KOORDINASI DARURAT' },
        desc: { en: 'Disconnected inter-agency systems hinder swift tactical coordination between city police, medical response, and fire departments.', id: 'Aplikasi lintas pihak berwenang yang tidak sinkron dapat mengaburkan dan memperlambat koordinasi antara aparat, paramedis, maupun regu evakuasi saat dibutuhkan segera.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'INEFFICIENT BUDGET ALLOCATION', id: 'INEFISIENSI ANGGARAN & OPASITAS DATA' },
        desc: { en: 'Lack of centralized IT oversight often results in duplicate infrastructure investments and opaque budgeting across different city branches.', id: 'Ketiadaan pengawasan pusat dalam integrasi IT sering memicu pembukaan anggaran server berulang kali oleh sub-dinas berbeda, mengakibatkan redundansi investasi.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'SOLUSI DEMA DIGITAL' },
        headline: { en: 'EXECUTIVE COMMAND HUB', id: 'PUSAT KOMANDO SMART CITY TERPADU' },
        desc: { en: 'DEMA transforms disparate mayoral branches into unified Smart Cities. We consolidate public data to forge a streamlined digital identity for rapid public service.', id: 'DEMA membantu pemerintah kota untuk membangun ekosistem Kota Pintar (Smart City) dengan mengkonsolidasi pangkalan data pelayanan publik ke dalam satu arsitektur terintegrasi di bawah kendali pimpinan daerah.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'UNIFIED MUNICIPAL DASHBOARD', id: 'DASBOR PUSAT STATISTIK KOTA' },
        desc: { en: 'Creating a strategic dashboard for regional executives, providing real-time panoramas of traffic density, asset utilization, and public feedbacks.', id: 'Menyediakan dasbor visibilitas tinggi bagi Kepala Daerah untuk melacak kondisi lalu lintas, penyaluran anggaran, hingga respon tanggap darurat dalam format pemantauan real-time.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'INFRASTRUCTURE A.I. PREDICTION', id: 'PREDIKSI AI UNTUK TATA KOTA' },
        desc: { en: 'Integrating computer vision with existing CCTVs to assist with traffic flow optimizations and anticipate infrastructure maintenance alerts.', id: 'Mengkombinasikan penggunaan kamera (CCTV) dengan modul Kecerdasan Buatan (AI) guna mengurai kemacetan lalu lintas serta memetakan titik-titik rawan bencana struktural di waktu mendesak.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'DATA SOVEREIGNTY PROTOCOL', id: 'PROTOKOL KEDAULATAN DATA (BSSN/PDP)' },
        desc: { en: 'Securing sensitive demographic data firmly within national boundaries and applying robust protective measures to align with cybersecurity regulations.', id: 'Menjaga agar seluruh data kependudukan sensitif masyarakat tetap aman berada di dalam wilayah hukum Indonesia, lengkap dengan regulasi keamanan yang tunduk pada aturan keamanan siber BSSN.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'DISTRIBUTED CLOUD GOVERNANCE', id: 'PEMERataan PELAYANAN DISTRIK' },
        desc: { en: 'Scalable cloud mechanisms allow smooth coordination across distant provincial or remote districts seamlessly.', id: 'Teknologi cloud berkinerja tinggi memungkinkan kelancaran transfer arahan kerja dari ibukota ke pelosok kecamatan terjauh tanpa terhalang jarak fisik infrastruktur konvensional.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'IMPROVED PUBLIC SATISFACTION', id: 'EFISIENSI & TINGKAT KEPUASAN PUBLIK' },
        desc: { en: 'Significantly enhancing procedural transparency and turnaround time raises public satisfaction and rationalizes public budget spending efficiently.', id: 'Pelayanan yang cepat, akurat, dan transparan dari institusi publik akan berbanding lurus dengan pelonjakan drastis sentimen kepuasan dan kepercayaan masyarakat kepada pimpinan daerah.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN REGULASI' },
        headline: { en: 'TRANSPARENT LEDGERS', id: 'LOG AUDIT TRANSPARAN' },
        desc: { en: 'Budget workflows incorporate secure, unalterable digital tracking to maintain strong audit trails for transparency metrics.', id: 'Setiap aliran proses serah terima atau administrasi dicatat oleh buku besar kriptografik. Semua pengerjaan terekam permanen memberikan jejak audit rapi untuk kebutuhan tinjauan pemeriksaan pusat.' }
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
        headline: { en: 'UNPREDICTABLE LOGISTICAL DELAYS', id: 'JEDA BONGKAR MUAT YANG TIDAK EFISIEN' },
        desc: { en: 'Maritime supply chains regularly experience bottlenecks at docking ports due to delayed communication regarding exact vessel arrival schedules.', id: 'Rantai pasok global kerap melambat di kawasan pelabuhan. Kapal kontainer acap kali harus bersandar menunggu giliran bermenit-menit akibat komunikasi penjadwalan dan visibilitas sandar yang belum modern.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM' },
        headline: { en: 'MANUAL CARGO COORDINATION', id: 'PENGELOLAAN KARGO MANUAL' },
        desc: { en: 'Legacy software and physical tracking records present severe limitations in keeping track of thousands of daily cargo container transfers.', id: 'Sistem pengaturan tata letak kontainer yang masih menggunakan perangkat lunak lawas berpotensi memicu kekeliruan pencatatan dan penempatan tumpukan logistik harian pada terminal bongkar muat.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'FUEL IDLE COST & COLD-CHAIN RISKS', id: 'PEMBOROSAN BAHAN BAKAR & RISIKO RANTAI PENDINGIN' },
        desc: { en: 'Idle wait times increase global fuel consumption arbitrarily. Delay events strictly threaten the preservation of temperature-sensitive goods like foods and vaccines.', id: 'Menunggu tanpa kepastian jadwal menyedot bahan bakar operasional mesin secara percuma. Keterlambatan manifest ini turut merusak produk agrikultur maupun vaksin medis yang sensitif terhadap suhu pendingin (Cold-Chain).' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'SOLUSI DEMA DIGITAL' },
        headline: { en: 'AUTONOMOUS MARITIME ORCHESTRATION', id: 'MANAJEMEN PELABUHAN PINTAR' },
        desc: { en: 'DEMA brings intelligent predictive forecasting to synchronize ship arrivals exactly with terminal readiness to eliminate idle operational overheads.', id: 'DEMA menghadirkan sistem prediksi cerdas untuk mensinkronisasi kedatangan kapal dengan jadwal kesiapan derek (crane) pelabuhan secara harmonis, memangkas waktu tunggu seminimal mungkin.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'PREDICTIVE FLEET ROUTING', id: 'RUTE ARMADA BERBASIS PREDIKSI INTELIJEN' },
        desc: { en: 'Applying Machine Learning models to calculate routing efficiency around weather disruptions and congested zones dynamically over the ocean.', id: 'Pemanfaatan data prediktif cuaca dan rute lalu lintas komersial untuk menghindari zona pelayaran yang buruk, memutar haluan armada laut dan darat ke arah lintasan yang aman dan hemat biaya.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'CONNECTED PORT TERMINALS', id: 'JARINGAN TERMINAL KONTAINER TERHUBUNG' },
        desc: { en: 'Port infrastructure connected to a singular cloud entity. Software organizes crane workflows and truck logistics cooperatively.', id: 'Infrastruktur pelabuhan tak lagi terkotak-kotak. Derek pemindah kontainer, data administrasi pabean, dan penjadwalan truk kargo diselaraskan layaknya satu tim untuk memangkas waktu operasional dermaga.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'LEDGER-BASED MANIFEST TRACKING', id: 'SISTEM PELACAKAN MANIFEST DIGITAL ANTISIPATIF' },
        desc: { en: 'Supply chain cargo tracking fortified through strict audit ledgers, enhancing trust and preventing illegal smuggling tampering at checkpoints.', id: 'Sistem pelacakan logistik yang terekam pada basis data kriptografis menjamin validasi setiap dokumen kargo. Mengurangi secara signifikan potensi manipulasi, pengecekan fiktif, maupun kelalaian administrasi terminal.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'INTERCONTINENTAL LOGISTICS SYNC', id: 'SINKRONISASI JARINGAN LOGISTIK GLOBAL' },
        desc: { en: 'Coordinating large multi-continent routes by tracking sea vessels and bridging them accurately towards localized freight trains or delivery trucks.', id: 'Merangkul visibilitas operasional hulu ke hilir. Menyatukan pangkalan pantau kapal kontainer dari benua ekspor menuju kedatangannya ke jaring logistik darat dan moda rel pengangkut secara transparan penuh.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'FUEL OPTIMIZATION & TURNAROUND METRICS', id: 'EFISIENSI BAHAN BAKAR & WAKTU BONGKAR MUAT' },
        desc: { en: 'Streamlined waiting periods deliver structural corporate savings on fuel and massively quicker turnaround time compared to standard port performances.', id: 'Waktu proses pelabuhan (Turnaround) yang lebih cepat mengoptimalkan penyerapan biaya bahan bakar menganggur, pada akhirnya melesatkan skala pelayanan dan daya saing penyedia rantai pasok Anda secara agresif.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN REGULASI' },
        headline: { en: 'STRICT CUSTOMS COMPLIANCES', id: 'KELANCARAN PEMERIKSAAN BEA CUKAI' },
        desc: { en: 'Secure documentation processes guarantee reliable reports, aiding swift national customs inspections and regulatory legal compliances globally.', id: 'Format dokumentasi dan manifest pengiriman terenkripsi menjamin terbitnya akuntabilitas komersial yang presisi, menjamin pelayaran Anda senantiasa lolos dari rintangan kepatuhan hukum logistik dan inspeksi pabean (Bea Cukai).' }
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
        headline: { en: 'BLINDFOLDED EXTRACTION CAPABILITIES', id: 'VISIBILITAS OPERASIONAL YANG TERBATAS' },
        desc: { en: 'Global extraction operations constantly battle unforeseen geological anomalies. Current topological plotting often relies on manual samples, introducing significant operational risks.', id: 'Operasi penambangan kelas berat sering menghadapi anomali geologis yang tak terduga. Metode pemetaan manual membatasi visibilitas dan mendedahkan pekerja pada risiko operasional yang tinggi.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'UNPLANNED MACHINERY FAILURES', id: 'KERUSAKAN ALAT BERAT TAK TERDUGA' },
        desc: { en: 'Heavy duty boring machines operate under immense subterranean pressure. A sudden mechanical failure can halt production quotas while incurring massive rural logistical repair costs.', id: 'Alat berat beroperasi di bawah tekanan ekstrem secara terus-menerus. Kerusakan as roda atau dinamo yang mendadak dapat menghentikan laju ekstraksi bulanan dan menelan biaya perbaikan logistik logistik yang sangat mahal.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'SAFETY RISKS & REGULATORY FINES', id: 'RISIKO KESELAMATAN & LEGALITAS' },
        desc: { en: 'Sudden tectonic shifts or landslides pose a severe threat to personnel safety, leading to potential regulatory fines and suspension of extraction licenses.', id: 'Tanah longsor atau pergeseran geologis mendadak mengancam langsung keselamatan personel di lapangan. Insiden fatal dapat berujung pada sanksi regulasi, pembengkakan asuransi, dan pembekuan izin operasi.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'PRECOGNITIVE MINING INTELLIGENCE', id: 'INTELIJEN PENAMBANGAN PREDIKTIF' },
        desc: { en: 'DEMA aims to introduce AI-driven predictive intelligence, transforming heavy excavators and transport fleets into interconnected sensors that continuously monitor structural health.', id: 'DEMA mengubah area penambangan menjadi ekosistem cerdas. Sistem kami membekali alat pengeruk dengan sensor-sensor pintar untuk memprediksi kerusakan mekanis dan getaran anomali jauh sebelum berdampak.' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'DRONE LIDAR & ACOUSTIC SENSORS', id: 'PEMETAAN LIDAR & SENSOR AKUSTIK' },
        desc: { en: 'Deployment of automated drones for everyday LiDAR mapping, tightly coupled with acoustic sensors on machinery, evaluating vibration analytics effectively at the edge.', id: 'Menerjunkan unit pemantauan *Drone* berbekal pemindai LiDAR untuk meriset topografi tanah rawan longsor, disatukan dengan alat pendengar getaran sasis mesin secara *real-time*.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'OFF-GRID EDGE COMPUTING', id: 'FASILITAS KOMPUTASI TANPA SINYAL PUSAT (EDGE)' },
        desc: { en: 'Mitigating weak connectivity in remote jungles, Micro-Datacenters process complex deep learning algorithms directly on-site for immediate evacuation alerts without internet delay.', id: 'Mengingat konektivitas internet di pedalaman belum optimal, server *Edge Computing* memproses analisis bahaya secara mandiri di lokasi secara instan mengaktifkan alarm peringatan.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'ISOLATED INFRASTRUCTURE PROTECTION', id: 'PERLINDUNGAN ASET KRITIKAL SCADA' },
        desc: { en: 'Sovereign hardware secures critical SCADA pumping and excavation infrastructure, ensuring external network threats cannot penetrate automated command modules.', id: 'Sistem komando alat berat operasional (SCADA) diisolasi dengan ketat, memastikan jaringan kilang energi dan tambang terlindungi penuh dari risiko penyusupan perangkat lunak tidak sah.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'FLEET ROUTING OPTIMIZATION', id: 'OPTIMASI RUTE DAN DEKARBONISASI' },
        desc: { en: 'Predictive tools dynamically control the safe routing of vast fleets of haul trucks, minimizing fuel costs and measurably lowering the corporate carbon lifecycle.', id: 'Perangkat lunak secara dinamis mengatur rute armada truk pengangkut agar tidak terjadi penumpukan rute, meminimalkan gesekan waktu dan memangkas tingkat emisi gas karbon lingkungan proyek secara radikal.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'MECHANICAL FAILURE PREDICTION', id: 'PREDIKSI AKURAT PEMELIHARAAN ALAT' },
        desc: { en: 'Reducing unscheduled stoppages by reliably forecasting machine repairs. Protecting profit targets securely by repairing units securely aligned within allocated intervals.', id: 'Mengeliminasi waktu mangkrak (*downtime*) tak berjadwal. Kendaraan ditarik ke bengkel tepat sebelum suku cadang diprediksi rusak. Menjaga angka produktivitas kuota ekstraksi terus di batas maksimal.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'OSH COMPLIANCE & RISK REDUCTION', id: 'AKREDITASI KESELAMATAN KERJA (K3)' },
        desc: { en: 'Advanced early warning detection successfully safeguards human investments while flawlessly meeting rigorous global Occupational Safety and Health (OSH) accreditations.', id: 'Fokus meminimalisir risiko jatuhnya korban jiwa di medan berat. Respons alarm pintar secara langsung memberikan dorongan kredibilitas luar biasa terhadap skor akreditasi Keselamatan dan Kesehatan Kerja (K3) perusahaan.' }
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
        headline: { en: 'BANDWIDTH ANARCHY DURING PEAK OVERLOAD', id: 'KENDALA KAPASITAS (BANDWIDTH) DI SAAT SIBUK' },
        desc: { en: 'During high-traffic population gatherings, telecommunication bandwidth suffers systemic degradation due to inflexible core spectrum configurations.', id: 'Pada acara padat penduduk atau jam sibuk, kecepatan layanan telekomunikasi sering mengalami penurunan (degradasi) akibat alokasi spektrum yang statis dan kaku.' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'STATIC ROUTING & MANUAL MAINTENANCE', id: 'RUTE DATA KAKU & PEMELIHARAAN MANUAL' },
        desc: { en: 'Legacy networking distribution relies on manual technician diagnostics for tower nodes, increasing service downtime radically during severe hardware malfunctions.', id: 'Distribusi jaringan konvensional mengandalkan proses manual untuk mendiagnosis menara BTS. Saat terjadi kerusakan peranti keras lokal, masa perbaikannya memakan waktu panjang yang merugikan.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'CUSTOMER CHURN & REVENUE PLUMMET', id: 'HILANGNYA PELANGGAN & PENYUSUTAN PENDAPATAN' },
        desc: { en: 'Delayed connection repairs frustrate consumers, triggering immediate customer migrations (churn rate) to rival communication providers instantly.', id: 'Seringnya sinyal terputus akibat kapasitas yang tersumbat menyebabkan kekecewaan pelanggan, memicu mereka untuk beralih (churn) ke layanan kompetitor.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'AUTONOMOUS 5G ORCHESTRATION', id: 'MANAJEMEN ARSITEKTUR 5G OTONOM' },
        desc: { en: 'DEMA architects cognitive telecom infrastructures. We grant routing nodes the AI capacity to smartly redirect traffic dynamically around failing hardware layers.', id: 'DEMA mengembangkan orkestrasi telekomunikasi prediktif. Kami memberikan kemampuan algoritma (AI) agar jaringan dapat menemukan jalur alternatif dengan sendirinya ketika menara mengalami masalah (*smart-routing*).' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'DYNAMIC 5G NETWORK SLICING', id: 'TEKNOLOGI 5G NETWORK SLICING' },
        desc: { en: 'Integrating advanced 5G NSA infrastructure capable of algorithmic Network Slicing to guarantee uninterrupted dedicated premium lanes for VIP corporate lines.', id: 'Mengimplementasikan *Network Slicing* 5G untuk membagi kapasitas internet secara spesifik. Memastikan rapat komunikasi korporasi/medis tetap kebal terhadap kemacetan, sepadat apapun jaringan publik di sekitarnya.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'SELF-HEALING TOWER MATRICES', id: 'MATRIKS PEMULIHAN MANDIRI (SELF-HEALING)' },
        desc: { en: 'Software matrices that instantaneously bypass local hardware anomalies, circumventing broken packet gateways to maintain overall network stability intact.', id: 'Fitur pemulihan (*Self-Healing*) di tingkat perangkat lunak berfungsi mem-bypass jalur di menara yang rusak perlahan secara otonom, mengamankan tingkat uptime kualitas sinyal regional di angka ideal.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'DEEP-PACKET INSPECTION & DDoS SHIELDING', id: 'INSPEKSI PAKET MENDALAM & PROTEKSI DDOS' },
        desc: { en: 'Incorporating carrier-grade filtering features that deflect sophisticated botnet DDoS barrages, thereby consistently sheltering nationwide telecommunication spines.', id: 'Memberikan pelindung pemeriksaan keamanan lapisan lalu lintas internet skala operator. Menyerap dan menetralisir limpahan volume serangan DDoS untuk menjamin pilar (backbone) selalu bersih dari lalu lintas korup.' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'SUBSCRIBER ANALYTICS DATA LAKE', id: 'DANAU DATA PERILAKU PELANGGAN' },
        desc: { en: 'Transforming metadata streams into structured behavioral lakes, enabling operators to intelligently explore secondary data analytic revenue pipelines.', id: 'Sistem dapat menggabungkan ratusan analitik mobilitas dan perilaku untuk membentuk pemahaman pelanggan (*Persona*). Membuka cabang monetisasi pendapatan baru melalui optimasi iklan (*Advertising Data*).' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'SPECTRAL EFFICIENCY & CAPEX REDUCTION', id: 'EFISIENSI LALINTAS & PENGAPUSAN CAPEX' },
        desc: { en: 'Smart routing removes the intense burden of frequent dispatching physical technician teams, massively decreasing monthly operational repair expenses.', id: 'Melalui kelancaran rute lalu lintas otomatis dan penurunan angka panggilan teknisi menara untuk permasalahan ringan, operator secara drastis akan memotong anggaran operasional serta menekan efisiensi CAPEX perusahaan.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'CRITICAL RESPONDER ALLOCATION', id: 'PRIORITAS FREKUENSI DARURAT NASIONAL' },
        desc: { en: 'Strategic prioritization channels guarantee that defense and medical crisis crews continuously retain exclusive reliable bandwidth during major national incident cascades.', id: 'Struktur kode telah mematuhi kewajiban penyelenggara operator. Memberikan prioritas mutlak kepada nomor militer maupun kendaraan ambulans guna selalu terhubung menembus kondisi padat selama status siaga bencana kota.' }
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
        headline: { en: 'FOREIGN INFRASTRUCTURE DEPENDENCY', id: 'KETERGANTUNGAN PADA PENYEDIA SERVER EKSTERNAL' },
        desc: { en: 'Modern defense institutions frequently rely on standard commercial cloud protocols, creating unwanted structural risks for sensitive intelligence data transmissions.', id: 'Sebagian jalur pemantauan radar taktis masih beroperasi menggunakan sistem *cloud* publik komersial yang berpusat di luar negeri, berpotensi mengekspos data intelijen sensitif (koordinat, lalu lintas komunikasi).' }
      },
      {
        title: { en: 'SYSTEM VULNERABILITY', id: 'KERENTANAN SISTEM INTI' },
        headline: { en: 'TACTICAL BLIND SPOTS', id: 'VISIBILITAS MEDAN YANG TIDAK PARIPURNA' },
        desc: { en: 'Isolated divisional networks can cause situational blind spots during critical maneuvers where response speed is absolutely essential for regional security.', id: 'Aplikasi lintas komando yang tak terhubung secara terpadu menciptakan celah visibilitas dan melambatkan respons strategis dalam mengambil keputusan penangkalan.' }
      },
      {
        title: { en: 'BUSINESS IMPACT', id: 'DAMPAK BISNIS' },
        headline: { en: 'STRATEGIC DISADVANTAGE', id: 'RISIKO KEAMANAN & PENGAKIBATAN DISRUPSI' },
        desc: { en: 'Data breaches regarding sovereign positions compromise geopolitical respect and undermine nationwide defense credibility globally.', id: 'Disrupsi operasi akibat kebocoran data sangat memengaruhi postur kewibawaan dan kredibilitas tata kelola pertahanan sebuah lembaga berdaulat di hadapan geopolitik internasional.' }
      },
      {
        title: { en: 'THE DEMA VISION', id: 'VISI SOLUSI DEMA' },
        headline: { en: 'SECURE ARCHIPELAGO COMMAND STRUCTURE', id: 'ARSITEKTUR PERTAHANAN MURNI TERTUTUP' },
        desc: { en: 'DEMA architects closed intelligence eco-systems. We migrate strategic communication channels entirely into natively encrypted domestic frameworks isolated from public internet paths.', id: 'DEMA memperkuat pilar intelijen dan pertahanan. Kami menempatkan sistem pertukaran sinyal taktis (komando/radar) secara eksklusif ke dalam peladen (server) domestik yang sepenuhnya berpusat secara berdaulat (Data Sovereignty).' }
      },
      {
        title: { en: 'PROPOSED ARCHITECTURE', id: 'ARSITEKTUR USULAN' },
        headline: { en: 'AIR-GAPPED SOVEREIGN DATACENTERS', id: 'PANGKALAN MICRO-DATACENTER (AIR-BAPPED)' },
        desc: { en: 'Employing Micro-Datacenters hardened specifically through hardware "air-gapping" from broader networks, minimizing vectors of intelligence espionage effectively.', id: 'Menyebarkan stasiun penyimpanan (*Micro-Datacenters*) di titik markas operasional yang tidak bersinggungan sedikitpun dengan sambungan internet sipil biasa (*Air-Gapped*), guna menetralisir total ancaman peretas asing.' }
      },
      {
        title: { en: 'CORE TECHNOLOGIES', id: 'TEKNOLOGI INTI' },
        headline: { en: 'AUTONOMOUS SENSOR INTEGRATION', id: 'AKSELERASI PENGENALAN OBJEK (COMPUTER VISION)' },
        desc: { en: 'Deploying edge analysis to synthesize live tactical inputs automatically, shortening the time required to decipher hostile vessel movements across extensive shorelines.', id: 'Kecerdasan Komputasi Tepi (*Edge Computing*) membantu menterjemahkan anomali dari sensor, maupun merespons peringatan koordinat wilayah kelautan sebelum instruksi pusat secara gesit dan terpadu.' }
      },
      {
        title: { en: 'SECURITY STANDARD', id: 'STANDAR KEAMANAN' },
        headline: { en: 'DEFENSE-GRADE CRYPTOGRAPHY LAYER', id: 'LAPISAN PROTOKOL ENKRIPSI MILITER' },
        desc: { en: 'Applying intricate cryptographic engineering that guarantees data transmission resilience against contemporary unauthorized decryption methods flawlessly.', id: 'Setiap aliran kordinat satelit hingga pesan suara antar jenderal dienkripsi oleh perisai kriptografik dengan modul matematika terdepan (Post-Quantum ready) yang selaras dengan lembaga sandi negara lokal.*' }
      },
      {
        title: { en: 'SCALABILITY', id: 'SKALABILITAS' },
        headline: { en: 'SATELLITE IMAGE SURVEILLANCE', id: 'SINKRONISASI VISUAL KAWASAN VIA SATELIT' },
        desc: { en: 'Machine learning modules ingest high-altitude radar imagery continuously, establishing a comprehensive and real-time situational tracking dashboard for unified commanders.', id: 'Pelatihan algoritme mendalam (Deep-Learning) yang dihubungkan dengan pengamatan lensa geospasial satelit untuk mengekstrak dan memetakan pola cuaca maupun posisi unit secara luas di layar pemantauan.' }
      },
      {
        title: { en: 'EXECUTIVE ROI', id: 'ROI EKSEKUTIF' },
        headline: { en: 'OPTIMIZED TACTICAL READINESS', id: 'PENGUATAN DAYA TANGKAL (DETERRENCE)' },
        desc: { en: 'Modernizations translate to overwhelming deterrence capabilities efficiently. Institutional leadership secures immense technological superiority shielding critical state boundaries proactively.', id: 'Terciptanya kemampuan kewaspadaan (Situational Awareness) mutlak. Pembaruan tertutup (closed loop) ini secara langsung menyokong wibawa penggentar (Deterrence) dan kemapanan diplomatis dari kepemimpinan teritorial Anda.' }
      },
      {
        title: { en: 'SLA COMPLIANCE', id: 'KEPATUHAN TINGKAT TINGGI' },
        headline: { en: 'DEFENSE PROTOCOL ADHERENCE', id: 'KEPATUHAN TERHADAP PROTOKOL NEGARA (BSSN/UU)' },
        desc: { en: 'Systemic compliance ensures defense doctrines and state data-protection laws are strictly verified, protecting technological decisions through formal, uncompromising legal foundations.', id: 'Pelaksanaan seluruh arsitektur tunduk patuh terhadap peraturan keamanan doktrin siber negara terkait, memberi landasan hukum dan perundang-undangan (SLA/BSSN) yang kokoh dalam implementasinya.' }
      }
    ]
  }
];
