"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Sparkles,
  Heart,
  ShoppingBag,
  Star,
  Send,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Certificates from "@/components/Certificates";
import DubaiSkyline from "@/components/DubaiSkyline";

const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="py-20 bg-[#FAF8F2] h-[420px] flex items-center justify-center text-slate-400 font-bold">
      Loading Global Map...
    </div>
  ),
});

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [containerType, setContainerType] = useState("40ft High Cube (FCL)");
  const [productMix, setProductMix] = useState("Assorted Mix (Lollipops + Biscuits + Toffees)");
  const [targetPort, setTargetPort] = useState("Port Jebel Ali, Dubai (UAE & GCC)");
  const [estimatedBoxes, setEstimatedBoxes] = useState("~2,600 Master Cartons");

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  const handleContainerChange = (type: string) => {
    setContainerType(type);
    if (type.includes("20ft")) setEstimatedBoxes("~1,250 Master Cartons");
    else if (type.includes("40ft")) setEstimatedBoxes("~2,600 Master Cartons");
    else setEstimatedBoxes("~150 - 500 Cartons (LCL)");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9] font-sans text-[#1A2B27] overflow-x-hidden relative">

      {/* =========================================================================
          SECTION 1: EDITORIAL HERO (Britto-Inspired Clean Pastel Canvas + Giant Typography)
      ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-br from-[#FAF8F2] via-[#FFFFFF] to-[#EAF4F1]">

        {/* Subtle Architectural Dubai Burj Sketch Watermark in Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <Image
            src="/dubai/dubai-burj-sketch.jpg"
            alt="Dubai Skyline Watermark"
            fill
            className="object-cover object-bottom mix-blend-multiply"
            sizes="100vw"
            priority
          />
        </div>

        {/* Playful Decorative Pastel Gear & Floating Treats */}
        <div className="hidden md:block absolute bottom-12 right-[18%] w-16 h-16 pointer-events-none opacity-80">
          <svg viewBox="0 0 100 100" fill="#BCE6DC">
            <path d="M50 5 L58 18 L73 13 L73 28 L88 30 L81 44 L93 54 L80 63 L86 78 L71 78 L69 93 L55 86 L45 96 L36 83 L21 88 L22 73 L7 70 L14 56 L3 46 L16 37 L11 22 L26 22 L29 7 L43 15 Z" />
          </svg>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-8, 4, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute bottom-8 left-6 xl:left-14 w-28 h-28 pointer-events-none z-30 filter drop-shadow-[0_14px_20px_rgba(11,79,67,0.18)]"
        >
          <Image
            src="/transparent/DJ BUTTER COOKIES.png"
            alt="Crispy Butter Cookie"
            fill
            className="object-contain"
            sizes="120px"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0], rotate: [6, -4, 6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden lg:block absolute top-32 right-6 xl:right-14 w-28 h-28 pointer-events-none z-30 filter drop-shadow-[0_14px_20px_rgba(197,146,56,0.22)]"
        >
          <Image
            src="/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png"
            alt="Lovely Pop Candy"
            fill
            className="object-contain"
            sizes="120px"
          />
        </motion.div>

        {/* Main Hero Canvas */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">

          {/* Floating Designer/Hub Badge (Like the @Hamida_jannat glass pill in reference) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#C59238]/30 px-4 py-2 rounded-2xl shadow-sm absolute top-6 right-6 lg:right-12 z-30"
          >
            <div className="w-9 h-9 rounded-full bg-[#EAF4F1] border border-[#0B4F43]/20 flex items-center justify-center text-base">
              🇦🇪
            </div>
            <div className="text-left">
              <div className="text-xs font-black text-[#0B4F43] leading-tight">AAIZA Dubai HQ</div>
              <div className="text-[10px] font-bold text-[#C59238]">100% Halal Global Export</div>
            </div>
          </motion.div>

          {/* Giant Layered Typography + Central Cutout Mascot */}
          <div className="relative flex flex-col items-center justify-center min-h-[340px] sm:min-h-[430px] md:min-h-[470px]">

            {/* Playful Looping Ribbon Curves Behind Typography */}
            <svg
              viewBox="0 0 900 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
              <path
                d="M120 210 C 120 60, 350 20, 420 120 C 480 200, 740 160, 740 260 C 740 340, 520 350, 480 260"
                stroke="#E6C260"
                strokeWidth="12"
                strokeLinecap="round"
                strokeOpacity="0.65"
              />
              <path
                d="M60 265 C 210 215, 310 315, 460 245 C 610 175, 760 220, 860 190"
                stroke="#BCE6DC"
                strokeWidth="10"
                strokeLinecap="round"
                strokeOpacity="0.7"
              />
            </svg>

            {/* Giant Bold Display Words Behind the Girl */}
            <div className="relative z-10 w-full text-center select-none pointer-events-none leading-[0.88] tracking-tighter">
              <div className="text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] font-black uppercase heading-font flex items-center justify-center gap-2 sm:gap-4">
                <span className="text-[#1A2B27]">AAI</span>
                <span className="relative inline-block w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 -mx-1">
                  <Image
                    src="/transparent/DJ Conico Chocolate.png"
                    alt="Conico Treat"
                    fill
                    className="object-contain drop-shadow-md"
                    sizes="120px"
                  />
                </span>
                <span className="text-[#0B4F43]">ZA</span>
              </div>
              <div className="text-[4rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10rem] font-black uppercase heading-font -mt-1 sm:-mt-3">
                <span className="text-[#1A2B27]">SWE</span>
                <span className="text-[#C59238]">ETS</span>
              </div>
            </div>

            {/* Central Smiling Girl Mascot Overlapping the Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute bottom-0 z-20 w-56 sm:w-72 md:w-80 lg:w-88 h-[270px] sm:h-[350px] md:h-[400px] pointer-events-none"
            >
              <Image
                src="/transparent/girl-conico.png"
                alt="AAIZA Confectionery Joy"
                fill
                className="object-contain object-bottom scale-x-[-1] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] filter drop-shadow-[0_18px_28px_rgba(11,79,67,0.22)]"
                sizes="(max-width: 768px) 240px, 360px"
                priority
              />
            </motion.div>
          </div>

          {/* Clean Hero Subtitle + CTA Pills */}
          <div className="relative z-30 text-center max-w-xl mx-auto mt-4">
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-semibold leading-relaxed mb-5">
              Crafted with pure ingredients &amp; exported from <span className="text-[#0B4F43] font-black">Dubai Jebel Ali Port</span> to 25+ countries worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="h-11 px-7 rounded-full bg-[#0B4F43] hover:bg-[#06332B] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_0_#06332B] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Explore Products 🍬</span>
              </Link>
              <Link
                href="/contact"
                className="h-11 px-7 rounded-full bg-[#FBF3DC] hover:bg-[#F7ECD2] border-2 border-[#C59238]/50 text-[#0B4F43] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                <span>Bulk Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: "OUR SWEETS" + 3 PASTEL ROUNDED-SQUARE CARDS (Reference Style!)
      ========================================================================= */}
      <section className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Top Header Row: "Our Sweets" + Tilted Hashtag Pills */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 relative">
          <div className="relative">
            {/* Soft scalloped gear behind heading */}
            <svg
              viewBox="0 0 100 100"
              fill="#EAF4F1"
              className="w-20 h-20 absolute -top-5 -left-6 -z-10"
            >
              <path d="M50 5 L58 18 L73 13 L73 28 L88 30 L81 44 L93 54 L80 63 L86 78 L71 78 L69 93 L55 86 L45 96 L36 83 L21 88 L22 73 L7 70 L14 56 L3 46 L16 37 L11 22 L26 22 L29 7 L43 15 Z" />
            </svg>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2B27] leading-[0.95] heading-font">
              Our <br />
              <span className="text-[#0B4F43]">Sweets</span>
            </h2>
          </div>

          {/* Tilted Hashtag Pills (Like #flavorful, #sweet, #testy in reference) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="px-4 py-1.5 rounded-full bg-[#FAF8F2] border border-[#0B4F43]/15 text-[#0B4F43] text-xs font-bold -rotate-6 shadow-xs">
              #flavorful
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#E6C260] text-[#06332B] text-xs font-black rotate-3 shadow-xs">
              #halalcertified
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#A8DDD0] text-[#06332B] text-xs font-black -rotate-3 shadow-xs">
              #dubaiexport
            </span>
          </div>
        </div>

        {/* 3 Rounded-Square Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Soft Mint */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2.2rem] bg-[#EAF4F1] p-7 relative overflow-hidden flex flex-col justify-between min-h-[250px] border border-[#0B4F43]/10 shadow-xs"
          >
            {/* Playful squiggle doodle */}
            <svg viewBox="0 0 120 120" fill="none" className="absolute right-0 bottom-2 w-28 h-28 pointer-events-none opacity-60">
              <path d="M10 80 Q 45 20, 70 65 T 115 35" stroke="#C59238" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-xs mb-6 flex items-center justify-center relative">
              <Image src="/transparent/DJ CREMO COMBINE.png" alt="Balanced Flavors" fill className="object-contain p-1.5" sizes="60px" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-black text-[#1A2B27] leading-tight mb-2 heading-font">
                Balanced <br />flavors
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-[230px]">
                Taste the carefully crafted balance of rich cocoa, creamy milk, and real fruit essences in every treat.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Warm Gold / Biscuit */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2.2rem] bg-[#F5DFB0] p-7 relative overflow-hidden flex flex-col justify-between min-h-[250px] border border-[#C59238]/25 shadow-xs"
          >
            {/* Curved corner lines doodle */}
            <svg viewBox="0 0 100 100" fill="none" className="absolute right-0 top-0 w-28 h-28 pointer-events-none opacity-45">
              <path d="M35 0 Q 35 65, 100 65" stroke="#FFFFFF" strokeWidth="6" />
              <path d="M58 0 Q 58 42, 100 42" stroke="#FFFFFF" strokeWidth="6" />
            </svg>
            <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-xs mb-6 flex items-center justify-center relative">
              <Image src="/transparent/DJ American Biscuits Markup Combine.png" alt="Perfect Texture" fill className="object-contain p-1.5" sizes="60px" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-black text-[#06332B] leading-tight mb-2 heading-font">
                Perfect <br />texture
              </h3>
              <p className="text-xs text-[#083830]/80 font-medium leading-relaxed max-w-[230px]">
                Export-grade baking and coating delivers a crisp crunch and smooth melt tailored for warm climates.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Pastel Emerald-Teal */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2.2rem] bg-[#9ED9CC] p-7 relative overflow-hidden flex flex-col justify-between min-h-[250px] border border-[#0B4F43]/15 shadow-xs"
          >
            {/* Vertical wavy lines doodle */}
            <svg viewBox="0 0 80 140" fill="none" className="absolute right-3 top-4 w-16 h-32 pointer-events-none opacity-65">
              <path d="M15 5 Q 30 25, 15 45 T 15 85 T 15 125" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
              <path d="M40 5 Q 55 25, 40 45 T 40 85 T 40 125" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-xs mb-6 flex items-center justify-center relative">
              <Image src="/transparent/DJ Choco Eclairs Jar Markup.png" alt="Every Moment" fill className="object-contain p-1.5" sizes="60px" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-black text-[#06332B] leading-tight mb-2 heading-font">
                Every <br />moment
              </h3>
              <p className="text-xs text-[#06332B]/80 font-medium leading-relaxed max-w-[230px]">
                From supermarket counter jars to 40ft container shipments dispatched via Jebel Ali Port, Dubai.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SIGNATURE FLAVORS (Reference's Centered "Ingredients" Section)
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#FAF8F2] border-y border-[#0B4F43]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#0B4F43] bg-white px-4 py-1.5 rounded-full border border-[#0B4F43]/15 inline-block mb-3">
              Pure Ingredients &amp; Aromas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#C59238] tracking-tight heading-font mb-3">
              Signature Flavors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Formulated with Halal-certified ingredients and vibrant fruit essences loved across 25+ countries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {[
              { name: "Rich Belgian Chocolate", tag: "Cocoa Delight", image: "/transparent/DJ Conico Chocolate.png", bg: "bg-white border-[#C59238]/25" },
              { name: "Fresh Alpine Strawberry", tag: "Fruity Burst", image: "/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png", bg: "bg-white border-[#0B4F43]/15" },
              { name: "Crispy Wheat & Butter", tag: "Golden Crunch", image: "/transparent/DJ BUTTER COOKIES.png", bg: "bg-white border-[#C59238]/25" },
              { name: "Creamy Milky Caramel", tag: "Silky Toffee", image: "/transparent/DJ Butter and Milk Candy.png", bg: "bg-white border-[#0B4F43]/15" },
              { name: "Tropical Juicy Mango", tag: "King of Fruits", image: "/transparent/BABA LOVELY POP MANGO MARKUP.png", bg: "bg-white border-[#C59238]/25" },
              { name: "Tangy Tamarind Blast", tag: "Spicy & Sweet", image: "/transparent/DJ TAMARIND BLAST MARKUP.png", bg: "bg-white border-[#0B4F43]/15" },
              { name: "Toasted Coconut Bliss", tag: "Tropical Nut", image: "/transparent/DJ COCONUT COOKIES.png", bg: "bg-white border-[#C59238]/25" },
              { name: "Wild Blue Blueberry", tag: "Berry Magic", image: "/transparent/BABA LOVELY POP BLUEBERRY MARKUP.png", bg: "bg-white border-[#0B4F43]/15" },
            ].map((flavor, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-4 rounded-3xl border transition-all shadow-xs hover:shadow-md text-center flex flex-col items-center justify-between",
                  flavor.bg
                )}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2">
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    className="object-contain"
                    sizes="100px"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#C59238] tracking-wider block mb-0.5">
                    {flavor.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-[#1A2B27] uppercase heading-font leading-snug">
                    {flavor.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DUBAI EXPORT ORDER BUILDER + SKETCH & MASCOT SHOWCASE
      ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Dubai Sketch + Boy Tang-y Mascot */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4F1] text-[#0B4F43] font-black text-[11px] uppercase tracking-wider mb-3 border border-[#0B4F43]/15">
                <Sparkles className="w-3.5 h-3.5 text-[#C59238]" />
                <span>Dubai Trade Desk</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#1A2B27] uppercase tracking-tight heading-font mb-3">
                Build Your <span className="text-[#C59238]">Dubai Export</span> Order
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5">
                Tailor your shipment with custom carton quantities, assorted products, and sea routing directly from Jebel Ali Port.
              </p>

              <DubaiSkyline variant="card" className="mb-4 max-w-md mx-auto lg:mx-0" />

              <div className="flex items-end justify-center lg:justify-start gap-4">
                <div className="relative w-40 h-40 shrink-0">
                  <Image
                    src="/transparent/boy-tangy.png"
                    alt="Boy enjoying DJ Tang-y Tamarind Candy"
                    fill
                    className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                    sizes="180px"
                  />
                  <span className="absolute top-1 -right-2 bg-[#FAF8F2] text-[#0B4F43] border border-[#C59238]/40 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    Tang-y Tamarind 😋
                  </span>
                </div>
                <div className="relative w-28 h-28 hidden sm:block mb-2">
                  <Image
                    src="/transparent/girl-gumpop.png"
                    alt="Girl enjoying Gum Pop"
                    fill
                    className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                    sizes="120px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Clean Emerald Export Estimator Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B4F43] rounded-[2.2rem] p-6 sm:p-8 text-white shadow-xl border-4 border-[#EAF4F1]">
                <h3 className="text-xl font-black uppercase heading-font mb-5 tracking-tight flex items-center justify-between">
                  <span>Custom Export Specification</span>
                  <span className="text-[11px] font-bold bg-white/15 px-3 py-1 rounded-full text-[#E6C260]">
                    🇦🇪 Dubai HQ
                  </span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-black uppercase tracking-wider block mb-1 text-[#E6C260]">
                      1. Select Container Size
                    </label>
                    <div className="relative">
                      <select
                        value={containerType}
                        onChange={(e) => handleContainerChange(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-white text-slate-800 font-bold text-xs uppercase appearance-none outline-none focus:ring-2 focus:ring-[#E6C260] cursor-pointer"
                      >
                        <option value="40ft High Cube (FCL)">40ft High Cube Container (FCL - 2,600 Cartons)</option>
                        <option value="20ft Standard (FCL)">20ft Standard Container (FCL - 1,250 Cartons)</option>
                        <option value="LCL Mixed Pallets">Less than Container Load (LCL - Mixed Pallets)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-wider block mb-1 text-[#E6C260]">
                      2. Preferred Confectionery Assortment
                    </label>
                    <div className="relative">
                      <select
                        value={productMix}
                        onChange={(e) => setProductMix(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-white text-slate-800 font-bold text-xs uppercase appearance-none outline-none focus:ring-2 focus:ring-[#E6C260] cursor-pointer"
                      >
                        <option>Assorted Mix (Lollipops + Biscuits + Toffees)</option>
                        <option>Lollipops &amp; Bubblegum Special Container</option>
                        <option>Cookies &amp; Crispy Cream Wafers Collection</option>
                        <option>Candies &amp; Eclairs Wholesale Pouch Load</option>
                        <option>Artisanal Chocolate Bars &amp; Confectionery</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-black uppercase tracking-wider block mb-1 text-[#E6C260]">
                      3. Destination Port &amp; Delivery Routing
                    </label>
                    <div className="relative">
                      <select
                        value={targetPort}
                        onChange={(e) => setTargetPort(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-white text-slate-800 font-bold text-xs uppercase appearance-none outline-none focus:ring-2 focus:ring-[#E6C260] cursor-pointer"
                      >
                        <option>Port Jebel Ali, Dubai (UAE &amp; GCC)</option>
                        <option>Port of Mombasa (Kenya / East Africa)</option>
                        <option>Port of Lagos / Apapa (Nigeria / West Africa)</option>
                        <option>Port of Tema (Ghana / West Africa)</option>
                        <option>Port of Durban (South Africa)</option>
                        <option>Port of Jeddah (Saudi Arabia / Red Sea)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E6C260] block">
                        Est. Packing Volume
                      </span>
                      <span className="text-base font-black text-white">{estimatedBoxes}</span>
                    </div>
                    <span className="text-[11px] font-bold bg-[#E6C260] text-[#06332B] px-3 py-1 rounded-full">
                      100% Halal Verified
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/971545897386?text=${encodeURIComponent(
                      `Hello AAIZA Dubai Trade Desk, I built a custom export request:\n• Container: ${containerType}\n• Assortment: ${productMix}\n• Destination: ${targetPort}\n• Est. Cartons: ${estimatedBoxes}\nPlease share FOB / CIF pricing.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 bg-[#E6C260] hover:bg-[#FFD54F] text-[#06332B] rounded-xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5"
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
          SECTION 5: BESTSELLING CONFECTIONERY MENU GRID
      ========================================================================= */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#0B4F43] bg-[#FBF3DC] px-4 py-1 rounded-full border border-[#C59238]/30 inline-block mb-2">
              Dubai Export Menu 🍬
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A2B27] uppercase tracking-tight heading-font">
              Our Bestselling Confectionery
            </h2>
          </div>

          <Link
            href="/products"
            className="px-6 py-2.5 rounded-full border-2 border-[#0B4F43] text-[#0B4F43] font-black text-xs uppercase tracking-wider hover:bg-[#0B4F43] hover:text-white transition-all"
          >
            Explore Complete Menu →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs hover:border-[#C59238] hover:shadow-md transition-all flex flex-col justify-between group relative"
              >
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-[#FBF3DC] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Add to favorites"
                >
                  <Heart className={cn("w-4 h-4 transition-colors", isFav ? "fill-[#C59238] text-[#C59238]" : "text-slate-400")} />
                </button>

                <div className="relative aspect-square w-full rounded-2xl bg-[#FAF6F0] p-4 mb-3.5 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full transition-transform duration-300 -rotate-3 group-hover:rotate-0 group-hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                      sizes="220px"
                    />
                  </div>
                </div>

                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-black text-[#1A2B27] uppercase heading-font leading-snug group-hover:text-[#0B4F43] transition-colors truncate">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate mt-0.5">
                      {item.category} • {item.price}
                    </p>
                    <div className="flex items-center gap-0.5 mt-1.5 text-[#C59238]">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/contact?items=${item.id}`}
                    className="w-9 h-9 rounded-full bg-[#0B4F43] hover:bg-[#06332B] text-white flex items-center justify-center shrink-0 shadow-xs transition-all"
                    aria-label={`Inquire about ${item.name}`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </Link>
                </div>
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
