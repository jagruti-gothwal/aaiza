"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { 
  ArrowRight, CheckCircle2, PackageSearch, Truck, 
  Award, Globe, ShoppingBag, ShieldCheck, Sparkles, 
  Heart, Star, Ship, Layers, Flame, Send, Check, ChevronDown, Phone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Certificates from "@/components/Certificates";
import DubaiSkyline from "@/components/DubaiSkyline";

const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => <div className="py-24 bg-[#fffbf9] h-[500px] flex items-center justify-center text-slate-400 font-bold">Loading Global Map...</div>
});

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, isRTL } = useLanguage();
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // Interactive "Build Your Own Dubai Export Box" state (Inspired by Image 3)
  const [containerType, setContainerType] = useState("40ft High Cube (FCL)");
  const [productMix, setProductMix] = useState("Assorted Mix (Lollipops + Biscuits + Toffees)");
  const [targetPort, setTargetPort] = useState("Port Jebel Ali (Dubai Hub)");
  const [estimatedBoxes, setEstimatedBoxes] = useState("~2,600 Master Cartons");

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleContainerChange = (type: string) => {
    setContainerType(type);
    if (type.includes("20ft")) setEstimatedBoxes("~1,250 Master Cartons");
    else if (type.includes("40ft")) setEstimatedBoxes("~2,600 Master Cartons");
    else setEstimatedBoxes("~150 - 500 Cartons (LCL)");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fffbf9] font-sans text-[#083830] overflow-x-hidden relative">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Inspired by Image 1 & Image 3)
          Soft Strawberry Cream Background, Floating Sweets & Dripping Glaze
      ========================================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-[#0D5E4F] via-[#0B4F43] to-[#07382F] text-white">
        
        {/* Decorative Floating Sweet Stickers (Inspired by Image 1) */}
        <div className="absolute top-24 left-6 sm:left-12 z-20 hidden md:block">
          <motion.div 
            animate={{ rotate: [-8, 8, -8] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-white/95 border-3 border-[#FFD54F] shadow-lg flex flex-col items-center justify-center text-center p-1 text-[#083830]"
          >
            <span className="text-[10px] font-black uppercase text-[#0B4F43]">100%</span>
            <span className="text-[11px] font-black uppercase tracking-tight">HALAL</span>
            <span className="text-[9px] font-bold text-slate-500">CERTIFIED</span>
          </motion.div>
        </div>

        <div className="absolute top-28 right-8 sm:right-16 z-20 hidden md:block">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-[#FFD54F] border-3 border-white shadow-xl flex flex-col items-center justify-center text-center p-1 text-[#06332B]"
          >
            <span className="text-lg">🇦🇪</span>
            <span className="text-[10px] font-black uppercase tracking-tight">DUBAI</span>
            <span className="text-[9px] font-black uppercase">EXPORT</span>
          </motion.div>
        </div>

        {/* Floating Real Confectionery Accents in Upper Corners */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-10, -5, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 left-4 w-36 h-36 pointer-events-none filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)] hidden 2xl:block z-10 opacity-80"
        >
          <Image
            src="/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png"
            alt="Lovely Pop Strawberry"
            fill
            className="object-contain"
            sizes="150px"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-4 right-4 w-36 h-36 pointer-events-none filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)] hidden 2xl:block z-10 opacity-80"
        >
          <Image
            src="/transparent/DJ Conico Chocolate.png"
            alt="Conico Chocolate"
            fill
            className="object-contain"
            sizes="150px"
          />
        </motion.div>

        {/* Cute Real Mascot / Customer: Pink Dress Girl with Conico Jar (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
          transition={{ 
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-0 left-0 sm:left-1 md:left-2 lg:left-6 xl:left-10 w-36 sm:w-44 md:w-52 lg:w-60 xl:w-72 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[380px] pointer-events-none filter drop-shadow-[0_20px_35px_rgba(45,19,44,0.4)] z-20 hidden sm:block"
        >
          <div className="relative w-full h-full">
            <Image
              src="/transparent/girl-conico.png"
              alt="Sweet Conico Treats"
              fill
              className="object-contain object-bottom scale-x-[-1] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
              sizes="(max-width: 768px) 240px, (max-width: 1280px) 340px, 450px"
              priority
            />
            {/* Cute sticker badge floating near her */}
            <motion.div
              animate={{ rotate: [-4, 5, -4], scale: [1, 1.04, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-2 bg-white/95 text-[#083830] px-3 py-1.5 rounded-2xl shadow-lg border-2 border-[#E6C260] flex items-center gap-1.5 hidden md:flex"
            >
              <span className="text-sm">🍓</span>
              <span className="text-[11px] font-black uppercase tracking-tight">Crispy Conico!</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Cute Real Mascot / Customer: Yellow Dress Girl with Gum Pop (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
          transition={{ 
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
          }}
          className="absolute bottom-0 right-0 sm:right-1 md:right-2 lg:right-6 xl:right-10 w-36 sm:w-44 md:w-52 lg:w-60 xl:w-72 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[380px] pointer-events-none filter drop-shadow-[0_20px_35px_rgba(45,19,44,0.4)] z-20 hidden sm:block"
        >
          <div className="relative w-full h-full">
            <Image
              src="/transparent/girl-gumpop.png"
              alt="Sweet Gum Pop Fun"
              fill
              className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
              sizes="(max-width: 768px) 240px, (max-width: 1280px) 340px, 450px"
              priority
            />
            {/* Cute sticker badge floating near her */}
            <motion.div
              animate={{ rotate: [4, -5, 4], scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-10 -left-2 bg-[#FFD54F] text-[#06332B] px-3 py-1.5 rounded-2xl shadow-lg border-2 border-white flex items-center gap-1.5 hidden md:flex"
            >
              <span className="text-sm">🎈</span>
              <span className="text-[11px] font-black uppercase tracking-tight">Bubble Gum Fun!</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
          
          {/* Top Cute Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 shadow-md mb-6"
          >
            <span className="text-base">🍬</span>
            <span className="text-white font-black text-xs uppercase tracking-widest drop-shadow-xs">
              Dubai Regional Trade Hub • Export Quality Sweets
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFD54F] animate-sparkle" />
          </motion.div>

          {/* Big Cute Title (Inspired by Image 1's playful typography) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05] heading-font drop-shadow-md mb-4"
          >
            Dubai&apos;s Sweetest <br />
            <span className="text-[#FFD54F] underline decoration-wavy decoration-white/40">
              Confectionery Treats
            </span> <br />
            <span className="text-xl sm:text-2xl md:text-3xl font-black block mt-2 text-[#FAF3DD] normal-case tracking-normal">
              Shipped with Love to the World 💖
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-emerald-100/90 font-bold max-w-xl mx-auto mb-7 leading-relaxed"
          >
            From delightful lollipops and crispy cream biscuits to rich chocolates — we craft export-grade confectionery and ship directly through Dubai Jebel Ali Port to 25+ countries worldwide.
          </motion.p>

          {/* Cute CTA Buttons (From Image 1: Yellow Pill + White Outline Pill) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto flex-1 h-12 px-7 whitespace-nowrap rounded-full bg-[#FFD54F] hover:bg-[#ffca28] text-[#06332B] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_12px_28px_rgba(255,213,79,0.45)] hover:scale-105 active:scale-95 transition-all relative overflow-hidden"
            >
              <div className="candy-shimmer absolute inset-0 opacity-25 pointer-events-none"></div>
              <span>Explore Products 🍬</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto flex-1 h-12 px-7 whitespace-nowrap rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border-3 border-[#E6C260]/80 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <span>Bulk Inquiry 💌</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Mobile Full Cutout Figures (Visible on screens < 640px where desktop side-flanks are hidden) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="sm:hidden flex items-end justify-center gap-2 mt-6 -mb-6 relative z-20"
          >
            {/* Conico Girl */}
            <div className="relative w-40 h-52 filter drop-shadow-[0_12px_24px_rgba(45,19,44,0.45)]">
              <Image
                src="/transparent/girl-conico.png"
                alt="Conico Moments"
                fill
                className="object-contain object-bottom scale-x-[-1] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
                sizes="160px"
                priority
              />
              <span className="absolute bottom-2 left-1 bg-white/95 text-[#083830] text-[9px] font-black px-2 py-0.5 rounded-full shadow">
                Crispy Conico 🍓
              </span>
            </div>

            {/* Gum Pop Girl */}
            <div className="relative w-40 h-52 filter drop-shadow-[0_12px_24px_rgba(45,19,44,0.45)]">
              <Image
                src="/transparent/girl-gumpop.png"
                alt="Gum Pop Moments"
                fill
                className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
                sizes="160px"
                priority
              />
              <span className="absolute bottom-2 right-1 bg-[#FFD54F] text-[#06332B] text-[9px] font-black px-2 py-0.5 rounded-full shadow">
                Gum Pops 🎈
              </span>
            </div>
          </motion.div>

        </div>

        <DubaiSkyline variant="hero" className="absolute inset-0 z-10" />

        {/* Smooth cream drip divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-30">
          <svg
            viewBox="0 0 1440 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            style={{ height: "80px", display: "block" }}
            preserveAspectRatio="none"
          >
            {/*
              Technique: cream-fill path that covers everything BELOW the drip profile.
              The path top-edge dips UP (y near 0) between drips and DOWN (y near 90) inside drips.
              Pink hero shows through at the valleys = fat smooth pink blobs hanging down.
            */}
            <path
              d="
                M0,12
                C55,12 100,88 175,95
                C250,102 295,12 355,12
                C395,12 425,70 468,78
                C511,70 545,12 590,12
                C640,12 690,98 760,105
                C830,98 878,12 935,12
                C975,12 1010,76 1055,84
                C1100,76 1138,12 1190,12
                C1245,12 1295,92 1365,99
                C1408,92 1430,12 1440,12
                L1440,115 L0,115 Z
              "
              fill="#fffbf9"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WAVY YELLOW TEXT RIBBON (Directly inspired by Image 1!)
      ========================================================================= */}
      <div className="relative w-full overflow-hidden py-3 bg-[#FFD54F] text-[#06332B] font-black text-xs sm:text-sm uppercase tracking-widest -rotate-1 shadow-md z-30 my-4">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span>✨ SWEET SMILES ARE CONTAGIOUS • SHIPPED FROM DUBAI TO 25+ COUNTRIES • 100% HALAL CERTIFIED • DELICIOUS CONFECTIONERY • 🍭</span>
          <span>✨ SWEET SMILES ARE CONTAGIOUS • SHIPPED FROM DUBAI TO 25+ COUNTRIES • 100% HALAL CERTIFIED • DELICIOUS CONFECTIONERY • 🍭</span>
          <span>✨ SWEET SMILES ARE CONTAGIOUS • SHIPPED FROM DUBAI TO 25+ COUNTRIES • 100% HALAL CERTIFIED • DELICIOUS CONFECTIONERY • 🍭</span>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: THREE CUTE OCCASION / CHANNEL CARDS (Inspired by Image 1 & 2)
      ========================================================================= */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Channel 1 */}
          <div className="flex items-center gap-4 p-5 rounded-3xl bg-white border-3 border-[#0B4F43]/15 shadow-[0_10px_25px_rgba(11,79,67,0.06)] hover:border-[#0B4F43] transition-all group">
            <div className="relative w-18 h-18 rounded-2xl bg-[#EAF4F1] p-2 shrink-0 overflow-hidden border border-[#0B4F43]/15">
              <Image
                src="/transparent/DJ CREMO COMBINE.png"
                alt="For Supermarkets"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
                sizes="100px"
              />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-[#0B4F43] tracking-wider block mb-0.5">Retail Channels</span>
              <h3 className="text-base font-black text-[#083830] uppercase heading-font leading-tight mb-1">
                For Supermarkets 🛒
              </h3>
              <p className="text-xs text-slate-500 font-medium">Eye-catching retail pouches, counter jars, and hanging packs.</p>
            </div>
          </div>

          {/* Channel 2 */}
          <div className="flex items-center gap-4 p-5 rounded-3xl bg-white border-3 border-amber-100 shadow-[0_10px_25px_rgba(255,213,79,0.1)] hover:border-amber-400 transition-all group">
            <div className="relative w-18 h-18 rounded-2xl bg-amber-50 p-2 shrink-0 overflow-hidden border border-amber-200">
              <Image
                src="/transparent/DJ American Biscuits Markup Combine.png"
                alt="For Bulk Importers"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
                sizes="100px"
              />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider block mb-0.5">Maritime Cargo</span>
              <h3 className="text-base font-black text-[#083830] uppercase heading-font leading-tight mb-1">
                For Bulk Importers 🚢
              </h3>
              <p className="text-xs text-slate-500 font-medium">20ft &amp; 40ft high-cube container lots with DP World Jebel Ali dispatch.</p>
            </div>
          </div>

          {/* Channel 3 */}
          <div className="flex items-center gap-4 p-5 rounded-3xl bg-white border-3 border-[#2E6F2D]/20 shadow-[0_10px_25px_rgba(46,111,45,0.06)] hover:border-[#2E6F2D] transition-all group">
            <div className="relative w-18 h-18 rounded-2xl bg-[#E5F0E6] p-2 shrink-0 overflow-hidden border border-[#2E6F2D]/20">
              <Image
                src="/transparent/DJ Choco Eclairs Jar Markup.png"
                alt="For Private Label"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
                sizes="100px"
              />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-[#2E6F2D] tracking-wider block mb-0.5">OEM &amp; Brands</span>
              <h3 className="text-base font-black text-[#083830] uppercase heading-font leading-tight mb-1">
                For Private Label 🏷️
              </h3>
              <p className="text-xs text-slate-500 font-medium">Custom flavors, GCC bilingual packaging, and private brand contract packs.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE 4 COLORFUL NUMBERED CARDS (Directly inspired by Image 1!)
          "МЫ ВСЁ ПРОДУМАЛИ ДО МЕЛОЧЕЙ" (We Thought Through Every Detail)
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#EAF4F1]/60 relative overflow-hidden">
        
        {/* Sunshine doodle rays & sticker badges (From Image 1) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 relative">
            {/* Sunshine doodle */}
            <div className="inline-block mb-3 text-amber-400 font-bold text-xl animate-pulse">
              ☀️ ✦ ☀️
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF3DC] text-[#0B4F43] border border-[#C59238]/30 font-black text-xs uppercase tracking-widest mb-4">
              <span>Why Partners Choose Tree India Dubai</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#083830] uppercase tracking-tight heading-font">
              We Thought Through <br />
              <span className="text-[#C59238]">Every Sweet Detail ✨</span>
            </h2>

            {/* Sticker Badges (From Image 1: circular sticker stamps) */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
              <span className="px-3 py-1 rounded-full bg-white border-2 border-dashed border-[#0B4F43] text-[#0B4F43] text-xs font-black uppercase shadow-xs">
                🍓 Fresh Ingredients
              </span>
              <span className="px-3 py-1 rounded-full bg-white border-2 border-dashed border-amber-400 text-amber-800 text-xs font-black uppercase shadow-xs">
                🏆 100% Halal Verified
              </span>
              <span className="px-3 py-1 rounded-full bg-white border-2 border-dashed border-emerald-500 text-emerald-700 text-xs font-black uppercase shadow-xs">
                ⚓ Jebel Ali Despatch
              </span>
            </div>
          </div>

          {/* 4 VIBRANT PASTEL NUMBERED CARDS (Directly inspired by Image 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 01 - Lavender Purple (Image 1 style) */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#0B4F43] rounded-[2.5rem] p-5 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[340px] group border-3 border-white"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white text-[#0B4F43] font-black text-sm flex items-center justify-center mb-6 shadow-md">
                  01
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight leading-tight mb-2 heading-font">
                  Care For Food Safety &amp; Halal
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  We formulate all recipes to strictly comply with UAE Municipality standards, GCC Halal guidelines, and ISO 22000 quality checks.
                </p>
              </div>

              {/* Product Image popping out of card bottom */}
              <div className="relative w-full h-32 mt-3 -mb-2 transition-transform group-hover:scale-110">
                <Image
                  src="/transparent/DJ Choco Eclairs Jar Markup.png"
                  alt="Choco Eclairs Jar"
                  fill
                  className="object-contain filter drop-shadow-lg"
                  sizes="220px"
                />
              </div>
            </motion.div>

            {/* Card 02 - Coral Orange (Image 1 style) */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#C59238] rounded-[2.5rem] p-5 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[340px] group border-3 border-white"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white text-[#A87927] font-black text-sm flex items-center justify-center mb-6 shadow-md">
                  02
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight leading-tight mb-2 heading-font">
                  Dubai Jebel Ali Rapid Despatch
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  Direct connection with DP World maritime routes ensures accelerated container shipping to Africa, Middle East, and beyond.
                </p>
              </div>

              {/* Product Image popping out of card bottom */}
              <div className="relative w-full h-32 mt-3 -mb-2 transition-transform group-hover:scale-110">
                <Image
                  src="/transparent/DJ CREMO COMBINE.png"
                  alt="DJ Cremo Combine"
                  fill
                  className="object-contain filter drop-shadow-lg"
                  sizes="220px"
                />
              </div>
            </motion.div>

            {/* Card 03 - Berry Pink (Image 1 style) */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#2E6F2D] rounded-[2.5rem] p-5 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[340px] group border-3 border-white"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white text-[#2E6F2D] font-black text-sm flex items-center justify-center mb-6 shadow-md">
                  03
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight leading-tight mb-2 heading-font">
                  Loved by Millions Worldwide
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  Export-grade formulations withstand warm tropical climates while preserving crispy crunch, melt-in-mouth cocoa, and fruit flavor bursts.
                </p>
              </div>

              {/* Product Image popping out of card bottom */}
              <div className="relative w-full h-32 mt-3 -mb-2 transition-transform group-hover:scale-110">
                <Image
                  src="/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png"
                  alt="Lovely Pop"
                  fill
                  className="object-contain filter drop-shadow-lg"
                  sizes="220px"
                />
              </div>
            </motion.div>

            {/* Card 04 - Sunny Yellow (Image 1 style) */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#157A6E] rounded-[2.5rem] p-7 text-[#06332B] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[340px] group border-3 border-white"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white text-[#157A6E] font-black text-sm flex items-center justify-center mb-6 shadow-md">
                  04
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight leading-tight mb-2 heading-font">
                  Flexible B2B Bulk Solutions
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  Competitive factory pricing, mixed container orders, custom private label packaging, and dedicated Dubai account liaisons.
                </p>
              </div>

              {/* Product Image popping out of card bottom */}
              <div className="relative w-full h-32 mt-3 -mb-2 transition-transform group-hover:scale-110">
                <Image
                  src="/transparent/DJ American Biscuits Markup Combine.png"
                  alt="DJ American Biscuits"
                  fill
                  className="object-contain filter drop-shadow-lg"
                  sizes="220px"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MARQUEE TICKER TAPE (Directly inspired by Image 2!)
      ========================================================================= */}
      <div className="py-4 bg-[#0B4F43] text-[#E6C260] font-black text-sm sm:text-base uppercase tracking-widest overflow-hidden shadow-inner rotate-1 z-20 my-4">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
          <span>🍬 LOLLIPOPS + BISCUITS + TOFFEES + CHOCOLATES + GUMS + SWEET TREATS + DUBAI HUB 🍭</span>
          <span>🍬 LOLLIPOPS + BISCUITS + TOFFEES + CHOCOLATES + GUMS + SWEET TREATS + DUBAI HUB 🍭</span>
          <span>🍬 LOLLIPOPS + BISCUITS + TOFFEES + CHOCOLATES + GUMS + SWEET TREATS + DUBAI HUB 🍭</span>
        </div>
      </div>

      {/* =========================================================================
          SECTION 6: UNIQUE FLAVORS SHOWCASE (Directly inspired by Image 2!)
          "Уникальные вкусы, разработанные нашим бренд-шефом"
      ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#0B4F43] bg-[#EAF4F1] px-4 py-1.5 rounded-full border border-[#0B4F43]/20 inline-block mb-3">
            Handcrafted Recipes &amp; Aromas
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#083830] uppercase tracking-tight heading-font mb-4">
            Signature Flavors Loved Globally ✨
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Formulated using pure ingredients and real fruit essences for unforgettable confectionery taste.
          </p>
        </div>

        {/* 8 Flavor Tiles Grid (Directly inspired by cake flavor slices in Image 2!) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Rich Belgian Chocolate", tag: "Cocoa Delight", image: "/transparent/DJ Conico Chocolate.png", bg: "bg-amber-50 border-amber-200" },
            { name: "Fresh Alpine Strawberry", tag: "Fruity Burst", image: "/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png", bg: "bg-pink-50 border-pink-200" },
            { name: "Crispy Wheat & Butter", tag: "Golden Crunch", image: "/transparent/DJ BUTTER COOKIES.png", bg: "bg-yellow-50 border-yellow-200" },
            { name: "Creamy Milky Caramel", tag: "Silky Toffee", image: "/transparent/DJ Butter and Milk Candy.png", bg: "bg-orange-50 border-orange-200" },
            { name: "Tropical Juicy Mango", tag: "King of Fruits", image: "/transparent/BABA LOVELY POP MANGO MARKUP.png", bg: "bg-amber-50 border-amber-200" },
            { name: "Tangy Tamarind Blast", tag: "Spicy & Sweet", image: "/transparent/DJ TAMARIND BLAST MARKUP.png", bg: "bg-rose-50 border-rose-200" },
            { name: "Toasted Coconut Bliss", tag: "Tropical Nut", image: "/transparent/DJ COCONUT COOKIES.png", bg: "bg-blue-50 border-blue-200" },
            { name: "Wild Blue Blueberry", tag: "Berry Magic", image: "/transparent/BABA LOVELY POP BLUEBERRY MARKUP.png", bg: "bg-purple-50 border-purple-200" },
          ].map((flavor, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className={cn(
                "p-4 sm:p-5 rounded-3xl border-2 transition-all shadow-xs hover:shadow-md text-center flex flex-col items-center justify-between",
                flavor.bg
              )}
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-contain filter drop-shadow-sm"
                  sizes="130px"
                />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#0B4F43] tracking-wider block mb-1">
                  {flavor.tag}
                </span>
                <h4 className="text-sm font-black text-[#083830] uppercase heading-font leading-snug">
                  {flavor.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B4F43] text-[#E6C260] font-black text-xs uppercase tracking-wider hover:bg-[#e91e63] shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <span>View All Flavors &amp; SKUs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      {/* =========================================================================
          SECTION 7: "BUILD YOUR OWN DUBAI EXPORT BOX" (Directly inspired by Image 3!)
          Interactive Container & Order Estimator Widget with floating treats
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#EAF4F1] to-[#FBF3DC] relative overflow-hidden border-y-2 border-[#C59238]/25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Floating Confectionery Graphics & Info */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#0B4F43] font-black text-xs uppercase tracking-wider mb-4 border border-[#C59238]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant B2B Calculator</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#083830] uppercase tracking-tight heading-font mb-4">
                Build Your Own <br />
                <span className="text-[#C59238]">Dubai Export Order.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                Tailor your shipment with custom carton quantities, product selections, and port routing directly to your destination.
              </p>

              {/* Dubai Skyline & Port Illustration */}
              <DubaiSkyline variant="card" className="mb-4 max-w-md mx-auto lg:mx-0" />
              <div className="flex items-end justify-center lg:justify-start gap-4 mt-2">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 shrink-0">
                  <Image
                    src="/transparent/boy-tangy.png"
                    alt="Boy enjoying DJ Tang-y Tamarind Candy"
                    fill
                    className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] filter drop-shadow-lg"
                    sizes="200px"
                  />
                  <span className="absolute top-2 -right-2 bg-white text-[#0B4F43] border-2 border-[#C59238]/40 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
                    Tang-y Tamarind 😋
                  </span>
                </div>
                <div className="relative w-28 h-28 hidden sm:block mb-3">
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/transparent/DJ Cocovibe Markup.png"
                      alt="Cocovibe Chocolate"
                      fill
                      className="object-contain filter drop-shadow-xl"
                      sizes="140px"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right: Hot Pink Card with Selectors (From Image 3) */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B4F43] rounded-[2.5rem] p-5 sm:p-7 text-white shadow-2xl border-4 border-white">
                <h3 className="text-2xl font-black uppercase heading-font mb-6 tracking-tight flex items-center justify-between">
                  <span>Custom Export Specification</span>
                  <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">🇦🇪 Dubai Hub</span>
                </h3>

                <div className="space-y-4">
                  {/* Selector 1: Container Size */}
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider block mb-1 text-[#E6C260]">
                      1. Select Container Size
                    </label>
                    <div className="relative">
                      <select 
                        value={containerType}
                        onChange={(e) => handleContainerChange(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-white text-slate-800 font-bold text-xs sm:text-sm uppercase appearance-none outline-none focus:ring-4 focus:ring-[#E6C260]/50 transition-all cursor-pointer shadow-sm"
                      >
                        <option value="40ft High Cube (FCL)">40ft High Cube Container (FCL - 2,600 Cartons)</option>
                        <option value="20ft Standard (FCL)">20ft Standard Container (FCL - 1,250 Cartons)</option>
                        <option value="LCL Mixed Pallets">Less than Container Load (LCL - Mixed Pallets)</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Selector 2: Product Mix */}
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider block mb-1 text-[#E6C260]">
                      2. Preferred Confectionery Assortment
                    </label>
                    <div className="relative">
                      <select 
                        value={productMix}
                        onChange={(e) => setProductMix(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-white text-slate-800 font-bold text-xs sm:text-sm uppercase appearance-none outline-none focus:ring-4 focus:ring-[#E6C260]/50 transition-all cursor-pointer shadow-sm"
                      >
                        <option>Assorted Mix (Lollipops + Biscuits + Toffees)</option>
                        <option>Lollipops &amp; Bubblegum Special Container</option>
                        <option>Cookies &amp; Crispy Cream Wafers Collection</option>
                        <option>Candies &amp; Eclairs Wholesale Pouch Load</option>
                        <option>Artisanal Chocolate Bars &amp; Confectionery</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Selector 3: Destination Port */}
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider block mb-1 text-[#E6C260]">
                      3. Destination Port &amp; Delivery Routing
                    </label>
                    <div className="relative">
                      <select 
                        value={targetPort}
                        onChange={(e) => setTargetPort(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-white text-slate-800 font-bold text-xs sm:text-sm uppercase appearance-none outline-none focus:ring-4 focus:ring-[#E6C260]/50 transition-all cursor-pointer shadow-sm"
                      >
                        <option>Port Jebel Ali, Dubai (UAE &amp; GCC)</option>
                        <option>Port of Mombasa (Kenya / East Africa)</option>
                        <option>Port of Lagos / Apapa (Nigeria / West Africa)</option>
                        <option>Port of Tema (Ghana / West Africa)</option>
                        <option>Port of Durban (South Africa)</option>
                        <option>Port of Jeddah (Saudi Arabia / Red Sea)</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Calculation Result */}
                  <div className="p-4 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E6C260] block">Est. Packing Volume</span>
                      <span className="text-lg font-black text-[#FFD54F]">{estimatedBoxes}</span>
                    </div>
                    <span className="text-xs font-bold bg-[#FFD54F] text-[#06332B] px-3 py-1 rounded-full">
                      100% Halal Verified
                    </span>
                  </div>

                  {/* Submit via WhatsApp Direct */}
                  <a
                    href={`https://wa.me/919408436732?text=${encodeURIComponent(`Hello Tree India Dubai Trade Desk, I built a custom export request:\n• Container: ${containerType}\n• Assortment: ${productMix}\n• Destination: ${targetPort}\n• Est. Cartons: ${estimatedBoxes}\nPlease share FOB / CIF pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-14 bg-[#FFD54F] hover:bg-[#ffca28] text-[#06332B] rounded-2xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102"
                  >
                    <span>Request Instant Dubai Quotation</span>
                    <Send className="w-4 h-4" />
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BESTSELLERS / MENU CATALOG (Inspired by Image 1 & 2)
      ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0B4F43] bg-[#FBF3DC] px-4 py-1 rounded-full border border-[#C59238]/30 inline-block mb-2">
              Dubai Export Menu 🍬
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#083830] uppercase tracking-tight heading-font">
              Our Bestselling Confectionery
            </h2>
          </div>

          <Link
            href="/products"
            className="px-6 py-3 rounded-full border-2 border-[#0B4F43] text-[#0B4F43] font-black text-xs uppercase tracking-wider hover:bg-[#FF4081] hover:text-white transition-all shadow-xs"
          >
            Explore Complete Menu →
          </Link>
        </div>

        {/* Product Cards Grid with Heart Button (From Image 1 & 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 101, name: "BABA Lovely Pop Strawberry", category: "Lollipops", image: "/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png", price: "Export Case" },
            { id: 102, name: "DJ Cremo Chocolate & Vanilla", category: "Cookies", image: "/transparent/DJ CREMO COMBINE.png", price: "Export Case" },
            { id: 103, name: "DJ Conico Chocolate Crunch", category: "Cones", image: "/transparent/DJ Conico Chocolate.png", price: "Export Case" },
            { id: 104, name: "DJ Choco Eclairs Jar", category: "Toffees", image: "/transparent/DJ Choco Eclairs Jar Markup.png", price: "Export Case" },
            { id: 105, name: "DJ American Biscuits", category: "Biscuits", image: "/transparent/DJ American Biscuits Markup Combine.png", price: "Export Case" },
            { id: 106, name: "DJ Butter Cookies", category: "Cookies", image: "/transparent/DJ BUTTER COOKIES.png", price: "Export Case" },
            { id: 107, name: "DJ Cocovibe Milk Chocolate", category: "Chocolates", image: "/transparent/DJ Cocovibe Markup.png", price: "Export Case" },
            { id: 108, name: "BABA Lovely Pop Blueberry", category: "Lollipops", image: "/transparent/BABA LOVELY POP BLUEBERRY MARKUP.png", price: "Export Case" },
          ].map((item) => {
            const isFav = favorites.includes(item.id);
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-4 border-2 border-[#0B4F43]/10 shadow-[0_10px_25px_rgba(11,79,67,0.06)] hover:border-[#C59238] transition-all flex flex-col justify-between group relative"
              >
                {/* Heart Favorite Button (From Image 1 & 2) */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FBF3DC] hover:bg-[#F7ECD2] flex items-center justify-center transition-colors"
                  aria-label="Add to favorites"
                >
                  <Heart className={cn("w-4 h-4 transition-colors", isFav ? "fill-[#C59238] text-[#C59238]" : "text-slate-400")} />
                </button>

                {/* Product Image */}
                <div className="relative aspect-square w-full rounded-2xl bg-[#FAF8F2] p-3 mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2 group-hover:scale-108 transition-transform duration-300"
                    sizes="220px"
                  />
                </div>

                {/* Details */}
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0B4F43] bg-[#EAF4F1] px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-base font-black text-[#083830] uppercase heading-font leading-snug mb-2 group-hover:text-[#C59238] transition-colors truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-4">
                    <span>{item.price}</span>
                    <span className="text-emerald-600">In Stock</span>
                  </div>
                </div>

                {/* Cute Yellow "Inquire 💖" Button (From Image 1) */}
                <Link
                  href={`/contact?items=${item.id}`}
                  className="w-full h-11 bg-[#FFD54F] hover:bg-[#ffca28] text-[#06332B] font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-102"
                >
                  <span>Inquire Now</span>
                  <Heart className="w-3.5 h-3.5 fill-[#C59238] text-[#C59238]" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* World Map Component */}
      <WorldMap />

      {/* Certificates Component */}
      <Certificates />

    </div>
  );
}
