/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Coffee,
  Sparkles,
  MousePointerClick,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import { handlePesanWA } from "../lib/utils";

// Organized Variants Definition
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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const interactionVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
  buttonHover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(6, 78, 59, 0.2)",
    transition: { duration: 0.2 },
  },
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Cukup Kirim Data",
      description:
        "Lupakan formulir yang membingungkan. Cukup kirim foto KTP dan data usaha lewat WhatsApp, kami yang kerjakan sisanya.",
      icon: <MousePointerClick className="w-8 h-8 text-white-700" />,
    },
    {
      title: "Pantau Sambil Ngopi",
      description:
        "Anda tidak perlu bolak-balik ke kantor dinas atau pusing dengan web OSS. Terima laporan progres langsung di HP Anda.",
      icon: <Coffee className="w-8 h-8 text-white-700" />,
    },
    {
      title: "Hasil 'Terima Beres'",
      description:
        "NIB terbit resmi, sudah termasuk akun OSS dan dokumen pendukung lainnya. Siap digunakan untuk urusan bank atau tender.",
      icon: <Sparkles className="w-8 h-8 text-white-700" />,
    },
  ];

  const pricing = [
    {
      name: "Solusi Personal",
      price: "199k",
      features: [
        "NIB Perorangan (UMKM)",
        "Tinggal Kirim Foto KTP",
        "Bantuan Pilih KBLI",
        "Selesai dalam 1 Jam",
      ],
      popular: false,
    },
    {
      name: "Bisnis Mantap",
      price: "499k",
      features: [
        "NIB & Sertifikat Standar",
        "Pendampingan Full OSS",
        "Revisi Data Tanpa Batas",
        "Laporan Pajak Dasar",
      ],
      popular: true,
    },
    {
      name: "Korporat Eksklusif",
      price: "1.2m",
      features: [
        "NIB Badan Usaha (PT/CV)",
        "Izin Lokasi & Lingkungan",
        "Terima Beres Dokumen Fisik",
        "Dedicated Consultant",
      ],
      popular: false,
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-slate-900 overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Injecting Font Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        
        html { scroll-behavior: smooth; }
        .hero-title { letter-spacing: -0.04em; line-height: 0.9; }
        .stroke-text {
          -webkit-text-stroke: 1.5px #fefefe;
          color: transparent;
        }
      `,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-4" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <div
                className={`bg-${scrolled ? "white" : "emerald"}-800 p-2.5 rounded-[12px] shadow-lg shadow-${scrolled ? "emerald" : "white"}-900/10`}
              >
                <Image
                  src={scrolled ? "/assets/logo.png" : "/assets/logo-white.png"}
                  alt="NIB!Koe Logo"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <span
                className={`text-2xl font-extrabold tracking-tighter text-${scrolled ? "emerald-950" : "white"}`}
              >
                NIB<span className="text-emerald-600">!Koe</span>
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-12"
            >
              {["Kenapa Kami", "Alur", "Harga"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-[12px] font-black uppercase tracking-widest text-${scrolled ? "slate-500" : "white"} hover:text-emerald-800 transition-colors`}
                >
                  {item}
                </a>
              ))}
              <motion.button
                variants={interactionVariants}
                whileHover="hover"
                onClick={() => handlePesanWA("Tanya-tanya")}
                whileTap="tap"
                className="bg-emerald-600 text-white px-8 py-3.5 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20"
              >
                Urus Sekarang
              </motion.button>
            </motion.div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-emerald-950"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
              <a
                href="#fitur"
                className="block text-2xl font-extrabold tracking-tight"
              >
                Kenapa Kami
              </a>
              <a
                href="#cara-kerja"
                className="block text-2xl font-extrabold tracking-tight"
              >
                Alur
              </a>
              <a
                href="#harga"
                className="block text-2xl font-extrabold tracking-tight"
              >
                Harga
              </a>
              <button className="w-full bg-emerald-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest">
                Chat Sekarang
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-60 lg:pb-40 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/assets/hero-2.png"}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
          {/* Overlay Gradient (Darker on left to make text readable) */}
          <div className="absolute inset-0 bg-linear-to-r from-emerald-900/95 via-emerald-900/70 to-emerald-900/30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="inline-block bg-white/50 text-white px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-10"
          >
            Layanan NIB Paling Gampang di Indonesia
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="hero-title text-6xl md:text-8xl lg:text-[130px] font-extrabold text-white mb-10"
          >
            URUS NIB? <br />
            <span className="stroke-text uppercase">TERIMA BERES.</span>
          </motion.h1>

          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-xl md:text-2xl text-white font-medium leading-tight"
            >
              Tinggal duduk manis, kirim data via WhatsApp, dan NIB Anda terbit
              hari ini juga. Biar kami yang pusing dengan sistem, Anda fokus
              cari cuan.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6"
            >
              <motion.button
                variants={interactionVariants}
                whileHover="buttonHover"
                whileTap="tap"
                onClick={() => handlePesanWA("Tanya-tanya")}
                className="bg-emerald-600 text-white px-10 py-6 rounded-[30px] font-black uppercase tracking-widest flex items-center gap-4 shadow-2xl shadow-emerald-900/30 group"
              >
                Gas Sekarang{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Background Animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px] pointer-events-none"
        />
      </section>

      {/* Ease Features */}
      <section id="kenapa-kami" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-1 shadow-2xl shadow-slate-200/50 rounded-[50px] overflow-hidden bg-slate-100 border border-slate-100"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-12 lg:p-16 flex flex-col items-start gap-8 hover:bg-emerald-50/30 transition-colors"
              >
                <div className="w-16 h-16 bg-emerald-900 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-emerald-950 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 font-semibold leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simple Process */}
      <section
        id="alur"
        className="py-32 bg-emerald-950 text-white overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">
              GAMPANG BANGET.
            </h2>
            <p className="text-emerald-500 font-black uppercase tracking-[0.3em]">
              Hanya butuh 3 langkah instan
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-16 relative"
          >
            {[
              {
                t: "KIRIM DATA",
                d: "Foto KTP & NPWP via WhatsApp kami. Selesai.",
              },
              {
                t: "KAMI PROSES",
                d: "Tim ahli kami validasi & daftarkan ke sistem OSS.",
              },
              {
                t: "NIB JADI",
                d: "PDF dikirim ke WA Anda. Siap pakai langsung!",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="text-8xl font-black text-white/80 mb-6 group-hover:text-emerald-50 transition-colors">
                  0{i + 1}
                </div>
                <h4 className="text-2xl font-black tracking-widest uppercase mb-4">
                  {step.t}
                </h4>
                <p className="text-emerald-100/60 font-medium text-lg">
                  {step.d}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="harga" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-emerald-950 uppercase leading-none">
                HARGA <br />
                JUJUR.
              </h2>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm text-right">
              Tanpa biaya siluman, tanpa ribet.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-px bg-slate-200 rounded-[50px] overflow-hidden border border-slate-200"
          >
            {pricing.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ backgroundColor: "#fcfdfd" }}
                className="bg-white p-12 lg:p-16 flex flex-col h-full group"
              >
                <div className="mb-12">
                  <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-emerald-600 mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 text-xl font-black">
                      IDR
                    </span>
                    <div className="text-7xl font-black text-emerald-950 tracking-tighter">
                      {plan.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-6 mb-16 flex-grow">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-sm font-bold text-slate-600"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  variants={interactionVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-full py-6 rounded-[25px] font-black uppercase tracking-widest text-xs transition-all ${plan.popular ? "bg-emerald-900 text-white shadow-2xl shadow-emerald-900/30" : "bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white"}`}
                >
                  Pilih Paket
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-emerald-600 rounded-[60px] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl shadow-emerald-900/20"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-[100px] font-black text-white tracking-tighter leading-none mb-12 uppercase">
              IZIN JADI <br />
              SAMBIL NGOPI.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                variants={interactionVariants}
                whileHover={{ scale: 1.05, rotate: -2 }}
                onClick={() => handlePesanWA("Tanya-tanya")}
                whileTap="tap"
                className="bg-green-600 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-lg flex items-center gap-4 shadow-2xl"
              >
                <WhatsAppIcon className="w-8 h-8" /> Hubungi NIB!Koe
              </motion.button>
              <div className="text-emerald-100 font-bold uppercase tracking-widest text-sm">
                Online 24/7
              </div>
            </div>
          </div>
          {/* Abstract background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-24 px-6 lg:px-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            {/* Branding & Group Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="bg-emerald-900 p-2.5 rounded-xl shadow-lg shadow-emerald-900/10">
                  <Image
                    src={"/assets/logo-white.png"}
                    alt="NIB!Koe Logo"
                    width={100}
                    height={100}
                    className="w-8 h-8"
                    onError={(e: any) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-2xl font-black tracking-tighter text-emerald-950 uppercase">
                  NIB<span className="text-emerald-600">!Koe</span>
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] font-black text-emerald-900 uppercase tracking-[0.1em]">
                  Part of PT Koe Group Indonesia
                </p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                  SK AHU No: AHU-069446.AH.01.30.Tahun 2025
                </p>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] leading-relaxed max-w-xs">
                Solusi Izin Usaha Tercepat, Termudah, dan Terpercaya di
                Indonesia.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-800 border-b border-emerald-50 pb-2 inline-block">
                Kontak Kami
              </h4>
              <ul className="space-y-5 text-[13px] font-bold text-slate-600">
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 group-hover:bg-emerald-900 group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  0857-9794-6263
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 group-hover:bg-emerald-900 group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  marketing@pajakkoe.co.id
                </li>
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0 group-hover:bg-emerald-900 group-hover:text-white transition-all">
                    <MapPin size={18} />
                  </div>
                  <span className="leading-relaxed">
                    HQuarters Lantai 20 <br />
                    Jl Asia Afrika No 158, Kota Bandung
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Socials & Trust */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-start md:items-end gap-8"
            >
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-800 border-b border-emerald-50 pb-2">
                Social Connection
              </h4>
              <div className="flex gap-8 text-[12px] font-black uppercase tracking-widest text-slate-400">
                <a
                  href="https://www.instagram.com/usahakoeid"
                  className="hover:text-emerald-800 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@usahakoeid"
                  className="hover:text-emerald-800 transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="https://wa.me/6285797946263"
                  className="hover:text-emerald-800 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="mt-4 flex gap-4">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale opacity-50">
                  <ShieldCheck size={24} />
                </div>
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale opacity-50">
                  <Clock size={24} />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            <p>© 2025 NIB!KOE INDONESIA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
              <a
                href="/privacy-police"
                className="hover:text-emerald-800 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="hover:text-emerald-800 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action */}
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
    </div>
  );
};

export default App;
