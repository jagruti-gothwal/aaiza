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
  ShieldCheck,
  Ship,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Certificates from "@/components/Certificates";
import DubaiSkyline from "@/components/DubaiSkyline";

const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="py-20 bg-[#FBF9F4] h-[420px] flex items-center justify-center text-slate-400 font-semibold">
      Loading Global Network...
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
    <div className="flex flex-col min-h-screen bg-[#FBF9F4] font-sans text-[#11221E] overflow-x-hidden relative">

      {/* =========================================================================
          SECTION 1: DUBAI LUXURY-EDITORIAL SPLIT ARCH HERO (AAIZA ORIGINAL)
      ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 border-b border-[#093A31]/10 bg-gradient-to-br from-[#FBF9F4] via-[#FFFFFF] to-[#F3EDE2] overflow-hidden">

        {/* Subtle Architectural Dubai Burj Khalifa Watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <Image
            src="/dubai/dubai-burj-sketch.jpg"
            alt="Dubai Skyline"
            fill
            className="object-cover object-bottom mix-blend-multiply"
            sizes="100vw"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Editorial Serif Headline & B2B Actions */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-[#B8862D]/35 text-[#093A31] text-[10px] font-bold uppercase tracking-[0.2em] mb-5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#B8862D]" />
                <span>Dubai Silicon Oasis • UAE Trade Hub</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#093A31] leading-[1.06] tracking-tight heading-font mb-5">
                Global Confectionery,{" "}
                <span className="italic text-[#B8862D] font-extrabold">Curated</span>{" "}
                in Dubai.
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg mb-7">
                <strong>AAIZA FOOD TRADING FZCO</strong> supplies certified Halal lollipops, cream biscuits, toffees, and chocolates to supermarket chains and bulk importers across 25+ nations.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <Link
                  href="/products"
                  className="h-12 px-7 rounded-lg bg-[#093A31] hover:bg-[#062922] text-white font-bold text-xs uppercase tracking-[0.14em] inline-flex items-center gap-2.5 transition-all shadow-sm"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A94E]" />
                </Link>
                <Link
                  href="/contact"
                  className="h-12 px-7 rounded-lg bg-white hover:bg-[#F3EDE2] border border-[#093A31]/25 text-[#093A31] font-bold text-xs uppercase tracking-[0.14em] inline-flex items-center gap-2 transition-all"
                >
                  <span>Request Quotation</span>
                </Link>
              </div>

              {/* Clean Minimalist Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#093A31]/10 max-w-md">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#093A31] heading-font">25+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Export Markets</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#B8862D] heading-font">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Halal Certified</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#093A31] heading-font">FCL/LCL</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Jebel Ali Port</div>
                </div>
              </div>
            </div>

            {/* Right Column: Framed Editorial Arch Gallery Composition */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4 items-end">

                {/* Tall Arch Frame with Smiling Girl Mascot */}
                <div className="col-span-7 relative h-[320px] sm:h-[380px] rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#093A31] to-[#0E5245] border-2 border-[#B8862D]/40 overflow-hidden shadow-lg">
                  <div className="absolute top-5 inset-x-0 text-center z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A94E]">
                      Pure Joy • Every Pack
                    </span>
                  </div>
                  <Image
                    src="/transparent/girl-conico.png"
                    alt="AAIZA Confectionery Delight"
                    fill
                    className="object-contain object-bottom scale-x-[-1] pt-8"
                    sizes="(max-width: 768px) 60vw, 320px"
                    priority
                  />
                </div>

                {/* Right Stack: Boy Tang-y + Product Highlight */}
                <div className="col-span-5 flex flex-col gap-4">
                  <div className="relative h-[170px] sm:h-[200px] rounded-2xl bg-[#F3EDE2] border border-[#B8862D]/30 overflow-hidden shadow-xs">
                    <Image
                      src="/transparent/boy-tangy.png"
                      alt="DJ Tang-y Tamarind Candy"
                      fill
                      className="object-contain object-bottom pt-2"
                      sizes="220px"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/95 text-[#093A31] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-[#B8862D]/30">
                      Tang-y Candy
                    </span>
                  </div>

                  <div className="relative h-[134px] sm:h-[164px] rounded-2xl bg-white border border-[#093A31]/15 p-3 flex flex-col justify-between shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8862D]">Featured</span>
                      <Award className="w-4 h-4 text-[#093A31]" />
                    </div>
                    <div className="relative flex-1 my-1">
                      <Image
                        src="/transparent/DJ Choco Eclairs Jar Markup.png"
                        alt="DJ Choco Eclairs"
                        fill
                        className="object-contain"
                        sizes="180px"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#093A31] text-center truncate">
                      Choco Eclairs &amp; Biscuits
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THREE EDITORIAL PILLARS (FINE BORDERS + SERIF TITLES)
      ========================================================================= */}
      <section className="py-14 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8862D] block mb-1.5">
              THE AAIZA STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#093A31] tracking-tight heading-font">
              Crafted for Taste, Built for Global Trade
            </h2>
          </div>
          <Link
            href="/about"
            className="text-xs font-bold uppercase tracking-wider text-[#093A31] hover:text-[#B8862D] inline-flex items-center gap-1.5"
          >
            <span>Our Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-7 border border-[#093A31]/12 shadow-2xs hover:border-[#B8862D]/60 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#E9F2EF] flex items-center justify-center text-[#093A31]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#B8862D] heading-font">01</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#093A31] mb-2 heading-font">Balanced Flavors</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Pure Halal-certified ingredients, rich Belgian-style cocoa, and vibrant fruit essences formulated for international retail palates.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F3EDE2] p-7 border border-[#B8862D]/25 shadow-2xs hover:border-[#093A31]/40 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#B8862D]">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#093A31] heading-font">02</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#093A31] mb-2 heading-font">Climate-Resilient Texture</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Moisture-locked export packaging preserves biscuit crispness and candy gloss across Middle East and African transit routes.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#093A31] p-7 border border-[#093A31] text-white shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A94E]">
                <Ship className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#D4A94E] heading-font">03</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 heading-font">Dubai Sea Freight Dispatch</h3>
              <p className="text-xs sm:text-sm text-emerald-100/85 font-medium leading-relaxed">
                Seamless 20ft, 40ft High Cube, and mixed LCL container loading directly from Jebel Ali Port to 25+ destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SIGNATURE FLAVORS SHOWCASE
      ========================================================================= */}
      <section className="py-14 bg-white border-y border-[#093A31]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8862D] block mb-2">
              PURE INGREDIENTS &amp; AROMAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#093A31] tracking-tight heading-font mb-2">
              Signature Confectionery Flavors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              A diverse export portfolio spanning chocolates, cream wafers, lollipops, and butter cookies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {[
              { name: "Rich Belgian Chocolate", tag: "Cocoa Delight", image: "/transparent/DJ Conico Chocolate.png" },
              { name: "Fresh Alpine Strawberry", tag: "Fruity Burst", image: "/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png" },
              { name: "Crispy Wheat & Butter", tag: "Golden Crunch", image: "/transparent/DJ BUTTER COOKIES.png" },
              { name: "Creamy Milky Caramel", tag: "Silky Toffee", image: "/transparent/DJ Butter and Milk Candy.png" },
              { name: "Tropical Juicy Mango", tag: "King of Fruits", image: "/transparent/BABA LOVELY POP MANGO MARKUP.png" },
              { name: "Tangy Tamarind Blast", tag: "Spicy & Sweet", image: "/transparent/DJ TAMARIND BLAST MARKUP.png" },
              { name: "Toasted Coconut Bliss", tag: "Tropical Nut", image: "/transparent/DJ COCONUT COOKIES.png" },
              { name: "Wild Blue Blueberry", tag: "Berry Magic", image: "/transparent/BABA LOVELY POP BLUEBERRY MARKUP.png" },
            ].map((flavor, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl bg-[#FBF9F4] border border-[#093A31]/10 hover:border-[#B8862D] transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2">
                  <Image src={flavor.image} alt={flavor.name} fill className="object-contain" sizes="100px" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#B8862D] tracking-wider block mb-0.5">
                    {flavor.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#093A31] heading-font leading-snug">
                    {flavor.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DUBAI TRADE DESK ORDER ESTIMATOR + ARCHITECTURAL SKETCH
      ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#FBF9F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#B8862D]/30 text-[#093A31] font-bold text-[10px] uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#B8862D]" />
                <span>Dubai Silicon Oasis HQ</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#093A31] tracking-tight heading-font mb-3">
                Configure Your <span className="italic text-[#B8862D]">Export Container</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5">
                Select container capacity, product assortment, and destination port to receive an instant FOB / CIF quotation from our Dubai trade desk.
              </p>

              <DubaiSkyline variant="card" className="max-w-md" />
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#093A31] rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-[#B8862D]/30">
                <h3 className="text-xl font-bold heading-font mb-5 flex items-center justify-between">
                  <span>Custom Export Specification</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md text-[#D4A94E]">
                    🇦🇪 Dubai Hub
                  </span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest block mb-1.5 text-[#D4A94E]">
                      1. Container Size
                    </label>
                    <div className="relative">
                      <select
                        value={containerType}
                        onChange={(e) => handleContainerChange(e.target.value)}
                        className="w-full h-11 px-4 rounded-lg bg-white text-[#11221E] font-semibold text-xs appearance-none outline-none focus:ring-2 focus:ring-[#D4A94E] cursor-pointer"
                      >
                        <option value="40ft High Cube (FCL)">40ft High Cube Container (FCL - 2,600 Cartons)</option>
                        <option value="20ft Standard (FCL)">20ft Standard Container (FCL - 1,250 Cartons)</option>
                        <option value="LCL Mixed Pallets">Less than Container Load (LCL - Mixed Pallets)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest block mb-1.5 text-[#D4A94E]">
                      2. Confectionery Assortment
                    </label>
                    <div className="relative">
                      <select
                        value={productMix}
                        onChange={(e) => setProductMix(e.target.value)}
                        className="w-full h-11 px-4 rounded-lg bg-white text-[#11221E] font-semibold text-xs appearance-none outline-none focus:ring-2 focus:ring-[#D4A94E] cursor-pointer"
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
                    <label className="text-[10px] font-bold uppercase tracking-widest block mb-1.5 text-[#D4A94E]">
                      3. Destination Port
                    </label>
                    <div className="relative">
                      <select
                        value={targetPort}
                        onChange={(e) => setTargetPort(e.target.value)}
                        className="w-full h-11 px-4 rounded-lg bg-white text-[#11221E] font-semibold text-xs appearance-none outline-none focus:ring-2 focus:ring-[#D4A94E] cursor-pointer"
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

                  <div className="p-3.5 rounded-lg bg-white/10 border border-white/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A94E] block">
                        Est. Packing Volume
                      </span>
                      <span className="text-base font-bold text-white">{estimatedBoxes}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4A94E] text-[#093A31] px-3 py-1 rounded-md">
                      Halal Verified
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/971545897386?text=${encodeURIComponent(
                      `Hello AAIZA FOOD TRADING FZCO Dubai Trade Desk, I built a custom export request:\n• Container: ${containerType}\n• Assortment: ${productMix}\n• Destination: ${targetPort}\n• Est. Cartons: ${estimatedBoxes}\nPlease share FOB / CIF pricing.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 bg-[#D4A94E] hover:bg-[#B8862D] text-[#093A31] hover:text-white rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all"
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
      <section className="py-14 bg-white border-t border-[#093A31]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8862D] block mb-1.5">
                DUBAI EXPORT PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#093A31] tracking-tight heading-font">
                Bestselling Confectionery
              </h2>
            </div>

            <Link
              href="/products"
              className="px-6 py-2.5 rounded-lg border border-[#093A31] text-[#093A31] font-bold text-xs uppercase tracking-wider hover:bg-[#093A31] hover:text-white transition-all"
            >
              View Full Catalog →
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
                  whileHover={{ y: -4 }}
                  className="bg-[#FBF9F4] rounded-2xl p-4 border border-[#093A31]/10 hover:border-[#B8862D] transition-all flex flex-col justify-between group relative"
                >
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white hover:bg-[#F3EDE2] flex items-center justify-center transition-colors shadow-2xs"
                    aria-label="Add to favorites"
                  >
                    <Heart className={cn("w-4 h-4 transition-colors", isFav ? "fill-[#B8862D] text-[#B8862D]" : "text-slate-400")} />
                  </button>

                  <div className="relative aspect-square w-full rounded-xl bg-white p-4 mb-3.5 flex items-center justify-center overflow-hidden border border-[#093A31]/5">
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-1" sizes="220px" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#093A31] heading-font leading-snug truncate">
                        {item.name}
                      </h4>
                      <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider truncate mt-0.5">
                        {item.category} • {item.price}
                      </p>
                      <div className="flex items-center gap-0.5 mt-1.5 text-[#B8862D]">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/contact?items=${item.id}`}
                      className="w-9 h-9 rounded-lg bg-[#093A31] hover:bg-[#B8862D] text-white flex items-center justify-center shrink-0 transition-all"
                      aria-label={`Inquire about ${item.name}`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* World Map Component */}
      <WorldMap />

      {/* Certificates Component */}
      <Certificates />

    </div>
  );
}
