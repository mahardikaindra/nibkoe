/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Clock,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  AlertCircle,
  Search,
  UserPlus,
  ClipboardList,
  Layers,
  HelpCircle,
  Construction,
  Gem,
  BookOpen,
  Frown,
  Star,
  Handshake,
  BarChart3,
  Headphones,
  User,
  ScrollText,
  FileSearch,
  IdCard,
  Library,
  Info,
  Instagram,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import { handlePesanWA } from "../lib/utils";

// Variabel Animasi yang Terorganisir
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const interactionVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
  buttonHover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(155, 31, 21, 0.2)",
    transition: { duration: 0.2 },
  },
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProblem, setActiveProblem] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Data Carousel
  const carouselItems = [
    {
      id: 1,
      title: "BUTUH BANTUAN CEPAT?",
      desc: "Konsultasikan segala kendala NIB Anda secara gratis langsung dengan tim ahli kami yang berpengalaman.",
      cta: "Hubungi CS",
      action: () => handlePesanWA("Konsultasi Cepat via Carousel"),
      icon: <MessageCircle size={32} />,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      color: "#9b1f15",
    },
    {
      id: 2,
      title: "PELAJARI LEBIH LANJUT",
      desc: "Baca panduan lengkap mengenai OSS RBA, KBLI, dan tata ruang di pusat edukasi digital NIB!Koe.",
      cta: "Baca Artikel",
      action: () => console.log("Navigasi ke Artikel"),
      icon: <BookOpen size={32} />,
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
      color: "#065f46",
    },
    {
      id: 3,
      title: "SINERGI KEMITRAAN",
      desc: "Dapatkan keuntungan eksklusif dan harga khusus bagi Notaris & PPAT yang bergabung sebagai mitra strategis.",
      cta: "Daftar Mitra",
      action: () => handlePesanWA("Pendaftaran Mitra Notaris dari Carousel"),
      icon: <Handshake size={32} />,
      image:
        "https://images.unsplash.com/photo-1600880212319-7834e9103b39?auto=format&fit=crop&q=80&w=800",
      color: "#1e3a8a",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length,
    );

  // Auto slide
  useEffect(() => {
    if (currentPage === "home") {
      const timer = setInterval(nextSlide, 8000);
      return () => clearInterval(timer);
    }
  }, [currentPage, currentSlide, nextSlide]);

  const ossPainPoints = [
    {
      title: "Kawasan Belum di RDTR",
      summary: "Lokasi usaha belum memiliki Rencana Detail Tata Ruang digital. Kami membantu proses verifikasi manual ke dinas terkait.",
      link: "#article-rdtr"
    },
    {
      title: "PKKPR Ditolak",
      summary: "Persetujuan Kesesuaian Kegiatan Pemanfaatan Ruang sering ditolak karena koordinat tidak akurat. Tim kami ahli dalam penarikan polygon presisi.",
      link: "#article-pkkpr"
    },
    {
      title: "KKKPR Ditolak",
      summary: "Konfirmasi tata ruang otomatis gagal? Kami melakukan audit berkas untuk memastikan kepatuhan terhadap rencana tata ruang wilayah.",
      link: "#article-kkkpr"
    },
    {
      title: "Struktur Permodalan Ditolak",
      summary: "Ketidaksesuaian antara data Akta, AHU, dan input modal di OSS. Kami bantu sinkronisasi data agar perizinan berlanjut.",
      link: "#article-modal"
    },
    {
      title: "Permohonan PB UMKU Ditolak",
      summary: "Izin operasional/komersial memerlukan pemenuhan komitmen teknis. Kami bantu menyusun dokumen pendukung yang dibutuhkan.",
      link: "#article-umku"
    },
    {
      title: "Migrasi Data Lama ke OSS RBA",
      summary: "Data NIB lama seringkali tidak terbaca di sistem baru. Kami melakukan pembersihan dan validasi ulang data perusahaan Anda.",
      link: "#article-migrasi"
    },
    {
      title: "Yayasan / Koperasi KBLI Tidak Muncul",
      summary: "Keterbatasan sistem untuk entitas non-PT. Kami memiliki prosedur khusus untuk mendaftarkan bidang usaha yayasan/koperasi.",
      link: "#article-entitas"
    },
    {
      title: "Penambahan / Pencabutan KBLI Non Efektif",
      summary: "KBLI yang menggantung merusak reputasi akun. Kami bantu pembersihan akun agar status perizinan kembali hijau.",
      link: "#article-kbli"
    },
    {
      title: "Akun NIB Tertukar",
      summary: "Kasus data NIK yang terdaftar di akun orang lain. Kami bantu proses klaim kepemilikan dan reset data di pusat.",
      link: "#article-akun"
    },
    {
      title: "Pemegang Saham Tidak Terbaca",
      summary: "Masalah sinkronisasi data AHU ke sistem OSS. Kami bantu percepatan update database antar instansi pemerintah.",
      link: "#article-ahu"
    }
  ];

  const advantages = [
    {
      title: "Free Email Bisnis",
      desc: "Kredibilitas profesional untuk komunikasi usaha Anda.",
      icon: <Mail className="text-[#9b1f15]" />,
    },
    {
      title: "Free Cek RDTR",
      desc: "Gratis pengecekan tata ruang jika NIB kami yang urus.",
      icon: <Search className="text-[#9b1f15]" />,
    },
    {
      title: "Harga Khusus Notaris",
      desc: "Kerjasama B2B spesial untuk rekanan kantor Notaris & PPAT.",
      icon: <UserPlus className="text-[#9b1f15]" />,
    },
    {
      title: "Free Pengecekan Zona",
      desc: "Analisis zona tata ruang & pemanfaatan lahan akurat.",
      icon: <MapPin className="text-[#9b1f15]" />,
    },
  ];

  const partnerAdvantages = [
    {
      title: "Jalur Prioritas",
      desc: "Antrian khusus untuk semua berkas dari mitra. Selesai lebih cepat dari layanan reguler.",
      icon: <Zap className="text-[#ffcd0c]" />,
    },
    {
      title: "Sistem Bagi Hasil",
      desc: "Harga khusus yang kompetitif memungkinkan Anda memiliki margin keuntungan lebih besar.",
      icon: <Handshake className="text-[#ffcd0c]" />,
    },
    {
      title: "Laporan Real-time",
      desc: "Dashboard progres berkas yang transparan untuk memudahkan Anda update ke klien.",
      icon: <BarChart3 className="text-[#ffcd0c]" />,
    },
    {
      title: "Konsultasi Teknis",
      desc: "Akses langsung ke tim ahli untuk bedah kasus OSS yang rumit secara gratis.",
      icon: <Headphones className="text-[#ffcd0c]" />,
    },
  ];

  const nibRequirements = [
    { label: "KTP Direktur Utama", icon: <User size={24} /> },
    { label: "Akta Pendirian", icon: <ScrollText size={24} /> },
    { label: "SK AHU Resmi", icon: <FileSearch size={24} /> },
    { label: "NPWP Badan Usaha", icon: <IdCard size={24} /> },
    { label: "NIK Koperasi", icon: <Library size={24} /> },
    { label: "Alamat Usaha", icon: <MapPin size={24} /> },
  ];

  const nibProcess = [
    "Pemeriksaan Dokumen",
    "Cek RDTR & Tata Ruang",
    "Validasi Kode KBLI",
    "Verifikasi Akun OSS",
    "Pembuatan Polygon Lokasi",
    "Input Lokasi & Kegiatan",
    "Izin Lingkungan (Amdalnet)",
    "Penerbitan NIB Resmi",
    "Sertifikat Standar (Opsional)",
  ];

  const additionalServices = [
    "PKKPR",
    "Perubahan Data",
    "Lupa Password / Email",
    "Pencabutan / Perubahan",
    "Laporan LKPM",
    "Likuidasi",
  ];

  const pricing = [
    {
      name: "NIB Perorangan",
      price: "150k",
      unit: "/ NIB",
      features: [
        "Maksimal 8 KBLI",
        "Pendaftaran OSS",
        "SPPL & KKKPR",
        "Free Email Bisnis",
        "Free RDTR & Polygon",
      ],
      popular: false,
      color: "emerald",
    },
    {
      name: "NIB PT Perorangan",
      price: "150k",
      unit: "/ 0-8 KBLI",
      features: [
        "Khusus PT Perorangan",
        "Pendaftaran OSS",
        "SPPL & KKKPR",
        "Free Email Bisnis",
        "Free RDTR & Polygon",
      ],
      popular: false,
      color: "red",
    },
    {
      name: "Badan Usaha",
      price: "120k",
      unit: "/ 8 KBLI",
      features: [
        "Berlaku Kelipatan",
        "+15k per KBLI",
        "Pendaftaran OSS",
        "Free Email Bisnis",
        "Free RDTR & Polygon",
      ],
      popular: true,
      color: "amber",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#9b1f15] selection:text-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage !== "home" ? "bg-white shadow-sm py-3" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center">
            <motion.div
              onClick={() => setCurrentPage("home")}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#9b1f15] p-2 rounded-[10px] shadow-lg shadow-[#9b1f15]/20">
                  <Image
                    src="/assets/icon.png"
                    alt="NIB!Koe Logo"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-xl font-extrabold tracking-tighter text-[#9b1f15] mb-2 uppercase">
                  NIB<span className="text-[#ffcd0c]">!Koe</span>
                </span>
              </div>
              <span className="text-[8px] font-black text-[#9b1f15]/60 uppercase tracking-widest ml-12 -mt-3 group-hover:text-[#9b1f15] transition-colors">
                Part of PT Koe Group Indonesia
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-10"
            >
              {currentPage === "home" && (
                <>
                  <a
                    href="#masalah"
                    className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-[#9b1f15] transition-colors"
                  >
                    Masalah OSS
                  </a>
                  <a
                    href="#proses"
                    className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-[#9b1f15] transition-colors"
                  >
                    Proses
                  </a>
                  <a
                    href="#harga"
                    className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-[#9b1f15] transition-colors"
                  >
                    Biaya
                  </a>
                </>
              )}
              <motion.button
                variants={interactionVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handlePesanWA("Pemesanan Jasa NIB")}
                className="bg-[#9b1f15] text-white px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#7a1811] transition-all"
              >
                Urus Sekarang
              </motion.button>
            </motion.div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#9b1f15]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white absolute top-full left-0 w-full p-8 space-y-6 shadow-2xl border-t border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-2xl font-extrabold tracking-tight text-[#9b1f15]"
              >
                Beranda
              </button>
              <a
                href="#masalah"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-2xl font-extrabold tracking-tight text-slate-700"
              >
                Masalah OSS
              </a>
              <a
                href="#harga"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-2xl font-extrabold tracking-tight text-slate-700"
              >
                Pricelist
              </a>
              <button
                onClick={() => handlePesanWA("Konsultasi via Chat")}
                className="w-full bg-[#9b1f15] text-white py-5 rounded-2xl font-black uppercase tracking-widest"
              >
                Chat Sekarang
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <>
        {/* SECTION HOOK: Masalah */}
        <section
          id="masalah"
          className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 bg-white overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
            <div className="text-[20vw] font-black text-black leading-none absolute -top-10 -left-10 rotate-12">
              TOLAK
            </div>
            <div className="text-[15vw] font-black text-black leading-none absolute bottom-0 right-0 -rotate-12">
              DITOLAK
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-16 items-center"
            >
              <div className="lg:w-5/12">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm"
                >
                  <Frown size={14} /> Pengusaha sering ngeluh gini...
                </motion.div>
                <h2 className="text-4xl md:text-7xl font-black text-[#9b1f15] uppercase hero-title mb-6 leading-[0.85]">
                  BIROKRASI OSS <br />
                  <span className="text-slate-300">BIKIN STRESS?</span>
                </h2>
                <p className="text-slate-500 text-base md:text-lg font-bold uppercase tracking-widest mb-8 leading-relaxed italic">
                  {`"Kenapa sudah input data berkali-kali tapi tetap ditolak sistem?"`}
                </p>
                <div className="bg-[#9b1f15] p-8 rounded-[30px] border border-[#9b1f15]/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <AlertCircle size={60} className="text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[#ffcd0c] font-black uppercase tracking-[0.2em] mb-3 text-xs">
                      Pain Points
                    </h4>
                    <p className="text-white font-bold leading-relaxed text-sm md:text-lg italic">
                      Setidaknya ada 10 jebakan Batman di sistem OSS RBA yang
                      seringkali membuat pelaku usaha menyerah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-7/12">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-3">
                {ossPainPoints.map((point, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp} 
                    className={`rounded-2xl border transition-all overflow-hidden ${activeProblem === i ? 'bg-white border-[#9b1f15] shadow-lg' : 'bg-slate-50 border-slate-100 hover:border-slate-200'}`}
                  >
                    <button
                      onClick={() => setActiveProblem(activeProblem === i ? 0 : i)}
                      className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black text-[10px] transition-colors ${activeProblem === i ? 'bg-[#9b1f15] text-white' : 'bg-red-100 text-[#9b1f15]'}`}>
                          {i + 1}
                        </div>
                        <span className={`text-[11px] md:text-[13px] font-black uppercase tracking-tight transition-colors ${activeProblem === i ? 'text-[#9b1f15]' : 'text-slate-700'}`}>
                          {point.title}
                        </span>
                      </div>
                      <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${activeProblem === i ? 'rotate-180 text-[#9b1f15]' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeProblem === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 ml-[44px]">
                            <p className="text-[12px] md:text-[14px] text-slate-500 font-medium leading-relaxed mb-4 border-l-2 border-emerald-500 pl-4">
                              {point.summary}
                            </p>
                            <a 
                              href={point.link}
                              className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:text-[#9b1f15] transition-colors group/link"
                            >
                              Baca Artikel Lengkap <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION HERO: Solusi */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-48 bg-slate-50 overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="inline-block bg-[#ffcd0c] text-[#9b1f15] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg shadow-[#ffcd0c]/20"
            >
              SOLUSI TERBAIK: NIB!Koe
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="hero-title text-5xl md:text-8xl lg:text-[130px] font-extrabold text-[#9b1f15] mb-8 leading-[0.85]"
            >
              BIAR KAMI <br />
              <span className="stroke-text uppercase">YANG BERESKAN.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl text-xl md:text-3xl text-slate-600 font-medium leading-tight mb-12 italic"
            >
              Cukup kirim data via WhatsApp. Tim ahli kami akan menerobos segala
              kerumitan OSS hingga NIB Anda terbit hari ini juga.
            </motion.p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
              <motion.button
                variants={interactionVariants}
                whileHover="buttonHover"
                whileTap="tap"
                onClick={() => handlePesanWA("Pemesanan Jasa NIB")}
                className="w-full sm:w-auto bg-[#9b1f15] text-white px-10 py-5 rounded-[20px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-[#9b1f15]/20 group text-sm md:text-base"
              >
                Urus NIB Sekarang{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform text-[#ffcd0c]" />
              </motion.button>

              <motion.button
                variants={interactionVariants}
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                whileTap="tap"
                className="w-full sm:w-auto bg-white text-[#9b1f15] border-2 border-slate-200 px-10 py-5 rounded-[20px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-slate-200/50 group text-sm md:text-base"
              >
                <BookOpen
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />{" "}
                Baca Panduan
              </motion.button>

              <motion.button
                variants={interactionVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffcd0c",
                  boxShadow: "0 20px 40px rgba(255, 205, 12, 0.2)",
                }}
                whileTap="tap"
                onClick={() => handlePesanWA("Kemitraan Notaris")}
                className="w-full sm:w-auto bg-[#ffcd0c]/10 border-2 border-[#ffcd0c] text-[#9b1f15] px-10 py-5 rounded-[20px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg text-sm md:text-base"
              >
                <UserPlus size={20} /> Mitra Notaris & PPAT
              </motion.button>
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[#9b1f15] rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#ffcd0c] rounded-full blur-[100px] pointer-events-none"
          />
        </section>

        {/* SECTION PROMO NOTARIS */}
        <section className="py-10 bg-yellow-400">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center text-black">
                <Star size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-black tracking-tighter uppercase">
                  Promo Spesial Notaris
                </h3>
                <p className="text-black/70 font-bold uppercase tracking-widest text-[9px]">
                  Dapatkan Potongan Langsung
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <span className="text-4xl md:text-5xl font-black text-black block leading-none">
                DISKON 15%
              </span>
              <p className="text-black font-bold uppercase text-[10px] mt-1">
                *Berlaku untuk rekanan Koe Legali Indonesia
              </p>
            </div>
            <button
              onClick={() => handlePesanWA("Diskon Notaris 15%")}
              className="bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl"
            >
              Klaim Diskon
            </button>
          </div>
        </section>

        {/* SECTION KEUNGGULAN MITRA */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-[#9b1f15] uppercase hero-title leading-none">
                KEUNGGULAN <br />
                <span className="text-[#ffcd0c] stroke-text-yellow">
                  JADI MITRA.
                </span>
              </h2>
              <p className="text-slate-400 font-black uppercase tracking-[0.3em] mt-4 text-[10px] md:text-xs">
                Solusi Sinergis bagi Notaris & PPAT
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {partnerAdvantages.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-[#9b1f15] p-8 rounded-[25px] border border-white/10 shadow-xl relative overflow-hidden flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <h4 className="text-base font-black text-[#ffcd0c] uppercase tracking-tight mb-3">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-[11px] font-medium leading-relaxed italic">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION PROSES & SYARAT */}
        <section
          id="proses"
          className="py-24 bg-[#9b1f15] text-white overflow-hidden border-t-4 border-[#ffcd0c]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="bg-[#ffcd0c] p-2 rounded-lg text-[#9b1f15]">
                    <ClipboardList size={24} />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter">
                    Alur Proses.
                  </h2>
                </div>
                <div className="space-y-4">
                  {nibProcess.map((step, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#ffcd0c]/30 flex items-center justify-center font-black text-[10px] group-hover:bg-[#ffcd0c] group-hover:text-[#9b1f15] transition-all">
                        {i + 1}
                      </div>
                      <p className="text-[11px] md:text-[13px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                        {step}
                      </p>
                      <div className="flex-grow border-t border-dashed border-white/10 hidden md:block" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="bg-black/10 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-white/10">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="bg-white p-2 rounded-lg text-[#9b1f15]">
                      <Layers size={24} />
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-[#ffcd0c]">
                      Berkas Syarat.
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-10">
                    {nibRequirements.map((req, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(255,255,255,0.05)",
                        }}
                        className="bg-white/5 p-5 rounded-[20px] flex flex-col items-center text-center gap-4 border border-white/5 group"
                      >
                        <div className="w-12 h-12 bg-[#ffcd0c] rounded-2xl flex items-center justify-center text-[#9b1f15] shadow-lg group-hover:rotate-6 transition-transform">
                          {req.icon}
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-white group-hover:text-[#ffcd0c] transition-colors">
                          {req.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
                      {["Pendaftaran OSS", "SPPL", "KKKPR", "Email Bisnis"].map(
                        (v, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Sparkles size={12} className="text-[#ffcd0c]" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white/50">
                              {v} FREE
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION KELEBIHAN REGULER */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-[#9b1f15] uppercase hero-title leading-none">
                KELEBIHAN <br />
                <span className="text-[#ffcd0c] stroke-text-yellow">
                  LAYANAN KAMI.
                </span>
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{
                    y: -5,
                    backgroundColor: "#9b1f15",
                    color: "#ffffff",
                  }}
                  className="bg-white p-8 rounded-[30px] border border-slate-100 text-center flex flex-col items-center group transition-all duration-500 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#9b1f15]/5 rounded-xl flex items-center justify-center mb-6 shadow-xl group-hover:bg-[#ffcd0c] transition-colors duration-500">
                    {React.cloneElement(adv.icon, { size: 24 })}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight mb-3 group-hover:text-[#ffcd0c] transition-colors">
                    {adv.title}
                  </h4>
                  <p className="text-slate-500 text-[10px] font-semibold leading-relaxed group-hover:text-white/70 transition-colors italic">
                    {adv.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION PRICELIST UTAMA */}
        <section id="harga" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#9b1f15] uppercase leading-none italic">
                  PRICELIST <br />
                  NIB!KOE.
                </h2>
              </div>
              <div className="text-right">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">
                  Pilih Paket Sesuai Kebutuhan
                </p>
                <div className="flex gap-3">
                  <span className="bg-[#9b1f15] text-[#ffcd0c] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                    Free Polygon*
                  </span>
                  <span className="bg-[#9b1f15] text-[#ffcd0c] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                    Free RDTR*
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-3 gap-px bg-slate-200 rounded-[40px] overflow-hidden border border-slate-200 mb-10 shadow-2xl"
            >
              {pricing.map((plan, idx) => {
                const colorSchemes = {
                  emerald: {
                    border: "border-emerald-100",
                    text: "text-emerald-700",
                    accent: "bg-emerald-600",
                  },
                  red: {
                    border: "border-red-100",
                    text: "text-[#9b1f15]",
                    accent: "bg-[#9b1f15]",
                  },
                  amber: {
                    border: "border-amber-100",
                    text: "text-amber-700",
                    accent: "bg-amber-600",
                  },
                };
                const theme =
                  colorSchemes[plan.color as keyof typeof colorSchemes];

                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "#fcfdfd" }}
                    className={`bg-white p-10 lg:p-12 flex flex-col h-full group border-b md:border-b-0 ${theme.border}`}
                  >
                    <div className="mb-10">
                      <h3
                        className={`text-[10px] font-black tracking-[0.3em] uppercase mb-3 ${theme.text}`}
                      >
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-slate-300 text-lg font-black italic">
                          IDR
                        </span>
                        <div
                          className={`text-6xl font-black tracking-tighter ${theme.text}`}
                        >
                          {plan.price}
                        </div>
                        <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                          {plan.unit}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-xs font-bold text-slate-600 italic"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${theme.accent}`}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <motion.button
                        variants={interactionVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handlePesanWA(`Pemesanan ${plan.name}`)}
                        className={`w-full py-5 rounded-[20px] font-black uppercase tracking-widest text-[10px] transition-all text-white shadow-xl ${theme.accent}`}
                      >
                        Urus Sekarang
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                        className="w-full py-4 rounded-[18px] font-black uppercase tracking-widest text-[9px] border border-slate-200 text-slate-400 flex items-center justify-center gap-2 transition-all"
                      >
                        <Info size={14} /> Detail Layanan
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* PAKET PREMIUM */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="bg-gradient-to-br from-[#9b1f15] to-[#7a1811] p-10 md:p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <Gem size={100} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-4 text-[#ffcd0c]">
                    PT Perorangan + AHU
                  </h3>
                  <div className="flex flex-col mb-8 border-b border-white/10 pb-6">
                    <span className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                      Penawaran Eksklusif
                    </span>
                    <div className="text-3xl md:text-4xl font-black uppercase leading-tight text-[#ffcd0c]">
                      Harga Spesial
                    </div>
                    <span className="text-white/60 font-bold text-[10px] uppercase tracking-widest mt-2 italic">
                      Hubungi Konsultan Kami
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-bold text-white/80 uppercase mb-8">
                    <li className="flex items-center gap-2 italic">
                      ✓ Nama & KBLI
                    </li>
                    <li className="flex items-center gap-2 italic">
                      ✓ Sertifikat AHU
                    </li>
                    <li className="flex items-center gap-2 italic">
                      ✓ NPWP Badan
                    </li>
                    <li className="flex items-center gap-2 italic">
                      ✓ NIB + OSS
                    </li>
                    <li className="flex items-center gap-2 italic">
                      ✓ Lokasi & Polygon
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      variants={interactionVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() =>
                        handlePesanWA("Tanya Harga Spesial Paket PT Perorangan")
                      }
                      className="bg-[#ffcd0c] text-[#9b1f15] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg"
                    >
                      Hubungi CS Sekarang
                    </motion.button>
                    <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px]">
                      Cek Benefit
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="bg-slate-50 p-10 md:p-12 rounded-[40px] border border-slate-200 shadow-xl flex flex-col"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#9b1f15]/10 p-2 rounded-lg text-[#9b1f15]">
                    <HelpCircle size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#9b1f15]">
                    Jasa Satuan.
                  </h3>
                </div>
                <ul className="space-y-5 flex-grow mb-8 text-[11px] font-bold uppercase text-slate-500 tracking-tighter">
                  <li className="flex justify-between border-b border-slate-100 pb-3">
                    <span>NIB Perkumpulan / Bumdes</span>
                    <span className="text-lg font-black text-[#9b1f15]">
                      99k
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-3">
                    <span>Hanya Cek RDTR</span>
                    <span className="text-lg font-black text-[#9b1f15]">
                      35k
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-3">
                    <span>Hanya Polygon</span>
                    <span className="text-lg font-black text-[#9b1f15]">
                      20k
                    </span>
                  </li>
                </ul>
                <button
                  onClick={() => handlePesanWA("Tanya Jasa Satuan")}
                  className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] border-2 border-[#9b1f15] text-[#9b1f15] hover:bg-[#9b1f15] hover:text-white transition-all"
                >
                  Chat Admin
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="bg-[#9b1f15] p-10 rounded-[35px] text-white shadow-xl border-b-8 border-[#ffcd0c]"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#ffcd0c] p-2 rounded-lg text-[#9b1f15]">
                  <Construction size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#ffcd0c]">
                  Layanan Tambahan.
                </h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalServices.map((service, i) => (
                  <div
                    key={i}
                    onClick={() => handlePesanWA(`Tanya Jasa: ${service}`)}
                    className="flex items-center gap-3 group cursor-pointer bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#ffcd0c]/50 transition-all"
                  >
                    <div className="w-1.5 h-1.5 bg-[#ffcd0c] rounded-full" />
                    <span className="text-[10px] md:text-[11px] font-black text-white group-hover:text-[#ffcd0c] uppercase italic">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CAROUSEL CTA INTERAKTIF (OPTIMIZED TEXT SIZE) */}
        <section className="pb-32 px-6 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto relative">
            <div className="flex items-center justify-between mb-8 px-4">
              <h2 className="text-2xl md:text-3xl font-black text-[#9b1f15] tracking-tighter uppercase italic">
                Langkah Selanjutnya.
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border-2 border-[#9b1f15] text-[#9b1f15] flex items-center justify-center hover:bg-[#9b1f15] hover:text-white transition-all shadow-md"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border-2 border-[#9b1f15] text-[#9b1f15] flex items-center justify-center hover:bg-[#9b1f15] hover:text-white transition-all shadow-md"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative min-h-[420px] md:min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="grid md:grid-cols-2 h-full bg-[#9b1f15] rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#ffcd0c]/20">
                    {/* Bagian Teks & CTA (Reduced Padding) */}
                    <div className="p-8 md:p-14 flex flex-col justify-center relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,205,12,0.05),transparent)] pointer-events-none" />
                      <div className="relative z-10">
                        <div className="mb-4 text-[#ffcd0c] opacity-60">
                          {carouselItems[currentSlide].icon}
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight mb-4 uppercase italic">
                          {carouselItems[currentSlide].title}
                        </h2>
                        <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed mb-8 max-w-md">
                          {carouselItems[currentSlide].desc}
                        </p>
                        <motion.button
                          variants={interactionVariants}
                          whileHover={{
                            scale: 1.05,
                            rotate: -1,
                            backgroundColor: "#ffcd0c",
                            color: "#9b1f15",
                          }}
                          whileTap="tap"
                          onClick={carouselItems[currentSlide].action}
                          className="bg-white text-[#9b1f15] px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 shadow-lg transition-colors"
                        >
                          {carouselItems[currentSlide].cta}{" "}
                          <ArrowRight size={18} />
                        </motion.button>
                      </div>
                    </div>
                    {/* Bagian Gambar */}
                    <div className="relative hidden md:block overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9b1f15] to-transparent z-10" />
                      <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                        src={carouselItems[currentSlide].image}
                        alt={carouselItems[currentSlide].title}
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                        {carouselItems.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 transition-all rounded-full ${i === currentSlide ? "w-6 bg-[#ffcd0c]" : "w-1.5 bg-white/30"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </>
      <footer className="bg-white py-20 px-6 lg:px-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <motion.div
              onClick={() => setCurrentPage("home")}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#9b1f15] p-2 rounded-[10px] shadow-lg shadow-[#9b1f15]/20">
                  <Image
                    src="/assets/icon.png"
                    alt="NIB!Koe Logo"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-xl font-extrabold tracking-tighter text-[#9b1f15] mb-2 uppercase">
                  NIB<span className="text-[#ffcd0c]">!Koe</span>
                </span>
              </div>
              <span className="text-[8px] font-black text-[#9b1f15]/60 uppercase tracking-widest ml-12 -mt-3 group-hover:text-[#9b1f15] transition-colors">
                Part of PT Koe Group Indonesia
              </span>

              <div className="mt-6 space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                  SK AHU-069446.AH.01.30.2025
                </p>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] leading-relaxed max-w-xs">
                  Membantu pengusaha menghadapi birokrasi digital dengan mudah.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9b1f15] border-b border-[#ffcd0c] pb-2 inline-block">
                Support
              </h4>
              <ul className="space-y-4 text-[12px] font-bold text-slate-600 tracking-tighter">
                <li
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => handlePesanWA("Hubungi CS via Phone")}
                >
                  <div className="w-8 h-8 bg-[#9b1f15]/5 rounded-lg flex items-center justify-center text-[#9b1f15] group-hover:bg-[#9b1f15] group-hover:text-white transition-all">
                    <Phone size={16} />
                  </div>
                  0857-9794-6263 (CS 1)
                </li>
                <li
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => handlePesanWA("Hubungi CS via Phone")}
                >
                  <div className="w-8 h-8 bg-[#9b1f15]/5 rounded-lg flex items-center justify-center text-[#9b1f15] group-hover:bg-[#9b1f15] group-hover:text-white transition-all">
                    <Phone size={16} />
                  </div>
                  0898-1213-490 (CS 2)
                </li>
                <li
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => handlePesanWA("Inquiry CS via Email")}
                >
                  <div className="w-8 h-8 bg-[#9b1f15]/5 rounded-lg flex items-center justify-center text-[#9b1f15] group-hover:bg-[#9b1f15] group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  info@koegroupindonesia.id
                </li>
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-8 h-8 bg-[#9b1f15]/5 rounded-lg flex items-center justify-center text-[#9b1f15] flex-shrink-0 group-hover:bg-[#9b1f15] group-hover:text-white transition-all">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-relaxed italic text-[11px]">
                    HQuarters Lt. 20 <br />
                    Bandung, Indonesia
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-start md:items-end gap-6"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9b1f15] border-b border-[#ffcd0c] pb-2">
                Connect
              </h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="w-10 h-10 bg-[#9b1f15]/5 rounded-xl flex items-center justify-center text-[#9b1f15] hover:bg-[#9b1f15] hover:text-white transition-all shadow-sm"
                >
                  <Instagram size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="w-10 h-10 bg-[#9b1f15]/5 rounded-xl flex items-center justify-center text-[#9b1f15] hover:bg-[#9b1f15] hover:text-white transition-all shadow-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="w-10 h-10 bg-[#9b1f15]/5 rounded-xl flex items-center justify-center text-[#9b1f15] hover:bg-[#9b1f15] hover:text-white transition-all shadow-sm"
                >
                  <MessageCircle size={18} />
                </motion.a>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all">
                  <ShieldCheck size={20} className="text-[#9b1f15]" />
                </div>
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all">
                  <Clock size={20} className="text-[#9b1f15]" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            <p>
              © {new Date().getFullYear()} KOE LEGALI INDONESIA. ALL RIGHTS
              RESERVED.
            </p>
            <div className="flex gap-8">
              <button
                onClick={() => window.open("/privacy", "_blank")}
                className="hover:text-[#9b1f15] transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => window.open("/terms", "_blank")}
                className="hover:text-[#9b1f15] transition-colors"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* Tombol WhatsApp Melayang */}
      <div className="fixed bottom-10 right-10 z-50 group">
        <motion.button
          variants={interactionVariants}
          whileHover="hover"
          onClick={() => handlePesanWA("Tanya-tanya")}
          whileTap="tap"
          className="bg-green-500 text-white w-20 h-20 rounded-[40px] shadow-3xl shadow-emerald-900/40 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <WhatsAppIcon className="w-8 h-8" />
        </motion.button>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #9b1f15;
          color: transparent;
        }
        .stroke-text-yellow {
          -webkit-text-stroke: 1px #9b1f15;
          color: #ffcd0c;
        }
        @media (min-width: 1024px) {
          .stroke-text { -webkit-text-stroke: 2px #9b1f15; }
          .stroke-text-yellow { -webkit-text-stroke: 2px #9b1f15; }
        }
      `}</style>
    </div>
  );
};

export default App;
