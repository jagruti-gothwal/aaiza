"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, PackageSearch, X, ShoppingCart, ShoppingBag, Info, Globe, Layers, ArrowRight, ArrowUpRight, Star, Download, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { staticProductsFallback } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";
import { fetchAllProducts } from "../admin/actions";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface ProductVariant {
  id: string;
  name: string;
  image: string;
}

interface ProductGroup {
  id: string;
  name: string;
  category: string;
  image: string;
  specs?: string;
  variants: ProductVariant[];
}

const groupProducts = (rawProducts: any[]) => {
  const groups: { [key: string]: ProductGroup } = {};
  const suffixes = [
    "BLUEBERRY", "GUAVA", "MANGO", "ORANGE", "STRAWBERRY ICECREAM", "STRAWBERRY", "WATERMELON",
    "Chocolate", "Strawberry", "Vanilla", "Orange", "Pineapple", "Mango", "Lemon", "Lychee", "Menthol", "Peanut", "Tamarind", "Pistachio",
    "Jar", "Pouch", "Combine", "wheat", "Toffee", "Lollipop", "Lollipops", "Bubblegum", "Milky", "Fruity"
  ];

  const normalizationMap: { [key: string]: string } = {
    "Maravilha": "Maravila",
    "Creamy topper": "Creamy Topper",
  };

  rawProducts.forEach(p => {
    let baseName = p.name;
    Object.keys(normalizationMap).forEach(key => {
      if (baseName.includes(key)) baseName = baseName.replace(key, normalizationMap[key]);
    });

    let flavor = "";
    const sortedSuffixes = [...suffixes].sort((a, b) => b.length - a.length);

    for (const suffix of sortedSuffixes) {
      const regex = new RegExp(`\\s+${suffix}$`, 'i');
      if (regex.test(baseName)) {
        flavor = suffix;
        baseName = baseName.replace(regex, '').trim();
        break;
      }
    }

    if (!groups[baseName]) {
      groups[baseName] = { ...p, name: baseName, variants: [] };
    }

    if (flavor.toLowerCase() === "combine" || p.name.toLowerCase().includes("combine")) {
      groups[baseName].image = p.image;
    }

    groups[baseName].variants.push({
      id: p.id,
      name: flavor || "Original",
      image: p.image
    });
  });
  return Object.values(groups);
};

export default function Products() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [detailProduct, setDetailProduct] = useState<ProductGroup | null>(null);
  const [products, setProducts] = useState<ProductGroup[]>(() => groupProducts(staticProductsFallback));
  const [isLoading, setIsLoading] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetchAllProducts();
        if (res.success && res.products && res.products.length > 0) {
          setProducts(groupProducts(res.products));
        }
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (detailProduct) {
      setActiveImage(detailProduct.image);
    } else {
      setActiveImage(null);
    }
  }, [detailProduct]);

  const categories = [
    { id: "All", label: t("categoryAll"), image: "/Category/Bicsuits and Wafers/DJ CREMO COMBINE.png" },
    { id: "Lollipops", label: t("categoryLollipops"), image: "/Category/Lollipops and Bubblegum/DJ Whistle Lollipops Markup.png" },
    { id: "Candies & Toffees", label: t("categoryCandies"), image: "/Category/Candies and toffees/DJ Choco Eclairs Jar Markup.png" },
    { id: "Cookies & Biscuits", label: t("categoryBiscuits"), image: "/Category/Bicsuits and Wafers/DJ American Biscuits Markup Combine.png" },
    { id: "Chocolates", label: t("categoryChocolates"), image: "/Category/Chocolates/DJ Cocovibe Markup.png" }
  ];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => {
      const cat = p.category?.toLowerCase() || "";
      const active = activeCategory.toLowerCase();

      if (active === "lollipops") return cat.includes("lollipop") || cat.includes("gum");
      if (active === "cookies & biscuits") return cat.includes("biscuit") || cat.includes("cookie") || cat.includes("wafer");
      if (active === "candies & toffees") return cat.includes("candy") || cat.includes("toffee");
      if (active === "chocolates") return cat.includes("chocolate");

      return cat === active;
    });

  const toggleProductSelection = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedProductIds((prev) =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const getTranslatedCategory = (catId: string) => {
    return categories.find(c => c.id === catId)?.label || catId;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white" dir={isRTL ? "rtl" : "ltr"}>

      {/* =========================================================================
          SECTION 1: STYLISH EDITORIAL HERO + OVERLAPPING PRODUCT SHOWCASE
      ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 bg-gradient-to-br from-[#FAF3E8] via-[#FFFDF9] to-[#EAF4F1] overflow-hidden">

        {/* Subtle Decorative Looping Ribbon + Splash Curves */}
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-65"
        >
          <path
            d="M80 280 C 260 120, 480 340, 620 180 C 760 20, 960 260, 1140 140"
            stroke="#E6C260"
            strokeWidth="8"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />
          <path
            d="M140 130 C 320 260, 520 60, 740 220 C 900 320, 1050 180, 1160 230"
            stroke="#BCE6DC"
            strokeWidth="6"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Clean Editorial Headline (100% Unobstructed) */}
          <div className="relative flex flex-col items-center justify-center pt-4 pb-2 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/90 border border-[#C59238]/30 shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C59238] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B4F43]">
                AAIZA Dubai Export Catalog
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1A2B27] tracking-tight leading-[0.95] heading-font select-none">
              {t("productsTitle1") || "Our"}{" "}
              <span className="text-[#C59238]">{t("productsTitle2") || "Products"}</span>
            </h1>
          </div>

          {/* 3-Column Hero Showcase: Left Info | Center Tilted Jar | Right Treats */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 mt-2">

            {/* Left: Description + Cute Mascot + Action Pills */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
              <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed max-w-sm mb-4">
                {t("productsHeaderDesc")}
              </p>
              <div className="flex items-center gap-2.5">
                <div className="relative w-14 h-14 rounded-full bg-[#EAF4F1] border-2 border-[#C59238]/40 overflow-hidden shadow-xs">
                  <Image
                    src="/transparent/girl-conico.png"
                    alt="Sweet Moments"
                    fill
                    className="object-contain object-bottom scale-x-[-1]"
                    sizes="60px"
                  />
                </div>
                <a
                  href="#catalog-grid"
                  className="w-11 h-11 rounded-full bg-white border border-[#0B4F43]/20 flex items-center justify-center text-[#0B4F43] hover:bg-[#0B4F43] hover:text-white transition-all shadow-xs"
                  aria-label="Scroll to catalog"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/Tree%20India%20Catalogue%20Compressed.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B4F43] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#06332B] transition-all shadow-[0_3px_0_#06332B]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </Link>
              </div>
            </div>

            {/* Center: Tilted Hero Jar Centerpiece */}
            <div className="md:col-span-4 flex justify-center order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.6 }}
                className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 filter drop-shadow-[0_24px_34px_rgba(11,79,67,0.22)]"
              >
                <div className="absolute inset-4 rounded-full bg-[#E6C260]/35 blur-2xl -z-10" />
                <Image
                  src="/transparent/DJ Choco Eclairs Jar Markup.png"
                  alt="AAIZA Signature Confectionery"
                  fill
                  className="object-contain"
                  sizes="240px"
                  priority
                />
              </motion.div>
            </div>

            {/* Right: Tasty Tagline + Stylish Floating Treats & Mascot */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right order-3">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs font-black text-[#1A2B27] tracking-tight">Tasty in Every Bite</span>
                <span className="w-8 h-0.5 bg-[#C59238] rounded-full" />
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAF4F1] text-[10px] font-black text-[#0B4F43] uppercase tracking-wider">
                  100% Halal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-2xl bg-white/90 border border-[#C59238]/25 p-1.5 shadow-xs -rotate-6">
                  <Image
                    src="/transparent/DJ BUTTER COOKIES.png"
                    alt="Butter Cookies"
                    fill
                    className="object-contain p-1"
                    sizes="70px"
                  />
                </div>
                <div className="relative w-16 h-16 rounded-2xl bg-white/90 border border-[#0B4F43]/15 p-1.5 shadow-xs rotate-6">
                  <Image
                    src="/transparent/BABA LOVELY POP STRAWBERRY MARKUP.png"
                    alt="Lovely Pop"
                    fill
                    className="object-contain p-1"
                    sizes="70px"
                  />
                </div>
                <div className="relative w-20 h-20 rounded-[1.5rem] bg-[#EAF4F1] border-2 border-[#C59238]/35 overflow-hidden shadow-xs">
                  <Image
                    src="/transparent/boy-tangy.png"
                    alt="Tang-y Tamarind"
                    fill
                    className="object-contain object-bottom"
                    sizes="90px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Organic White Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 block" preserveAspectRatio="none">
            <path d="M0,40 C240,85 480,0 720,40 C960,80 1200,10 1440,45 L1440,80 L0,80 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: POPULAR PRODUCTS + CATEGORY PILLS + CLEAN CARDS
      ========================================================================= */}
      <div id="catalog-grid" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 relative z-10">

        {/* Centered "Popular Products" Heading with Playful Burst Lines (Reference Style) */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3">
            <svg viewBox="0 0 28 24" fill="none" className="w-6 h-5 text-[#C59238]">
              <path d="M24 20 L10 14 M22 10 L6 6 M18 22 L14 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A2B27] tracking-tight heading-font">
              Popular products
            </h2>
            <svg viewBox="0 0 28 24" fill="none" className="w-6 h-5 text-[#C59238] scale-x-[-1]">
              <path d="M24 20 L10 14 M22 10 L6 6 M18 22 L14 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Clean Category Filter Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const catCount = cat.id === "All" ? products.length : products.filter((p: ProductGroup) => {
              const pCat = p.category?.toLowerCase() || "";
              const cTerm = cat.id.toLowerCase();
              if (cTerm === "lollipops") return pCat.includes("lollipop") || pCat.includes("gum");
              if (cTerm === "cookies & biscuits") return pCat.includes("biscuit") || pCat.includes("cookie") || pCat.includes("wafer");
              if (cTerm === "candies & toffees") return pCat.includes("candy") || pCat.includes("toffee");
              if (cTerm === "chocolates") return pCat.includes("chocolate");
              return pCat === cTerm;
            }).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer",
                  isActive
                    ? "bg-[#0B4F43] text-white border-[#0B4F43] shadow-sm"
                    : "bg-[#FAF8F2] text-slate-700 border-[#0B4F43]/15 hover:border-[#C59238]"
                )}
              >
                <div className="relative w-5 h-5 shrink-0">
                  <Image src={cat.image} alt={cat.label} fill className="object-contain" sizes="24px" />
                </div>
                <span>{cat.label}</span>
                <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full", isActive ? "bg-white/20 text-white" : "bg-white text-slate-500")}>
                  {catCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bulk Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-[#C59238]" />
            <span className="text-xs font-black text-[#0B4F43] uppercase tracking-wider">
              {filteredProducts.length} {t("navProducts") || "Products"} in {getTranslatedCategory(activeCategory)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const allIds = filteredProducts.map((p: any) => p.id);
                setSelectedProductIds(prev => {
                  const newIds = [...prev];
                  allIds.forEach(id => {
                    if (!newIds.includes(id)) newIds.push(id);
                  });
                  return newIds;
                });
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F2] border border-[#0B4F43]/15 text-[#0B4F43] font-bold text-[11px] uppercase tracking-wider hover:border-[#C59238] transition-all cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              {t("productSelectAll") || "Select All"}
            </button>

            {selectedProductIds.length > 0 && (
              <button
                onClick={() => setSelectedProductIds([])}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 font-bold text-[11px] uppercase tracking-wider hover:bg-red-100 transition-all cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                {t("productClearAll") || "Clear All"}
              </button>
            )}
          </div>
        </div>

        {/* Products Grid (Juiceella Clean Editorial Cards) */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <Loader2 className="w-10 h-10 text-[#C59238] animate-spin" />
              <p className="text-[#C59238] font-bold uppercase tracking-widest text-xs">{t("loadingProducts") || "Fetching Product Catalog..."}</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product: ProductGroup) => {
                const isSelected = product.variants.some((v: ProductVariant) => selectedProductIds.includes(v.id));
                return (
                  <motion.div
                    key={product.id}
                    layout
                    whileHover={{ y: -5 }}
                    className={cn(
                      "group relative bg-white border rounded-3xl p-4 cursor-pointer transition-all duration-300 flex flex-col justify-between",
                      isSelected
                        ? "border-[#C59238] ring-2 ring-[#C59238]/25 shadow-md"
                        : "border-slate-200/80 hover:border-[#0B4F43]/30 shadow-xs hover:shadow-md"
                    )}
                    onClick={() => setDetailProduct(product)}
                  >
                    {/* Top Soft Cream Product Frame */}
                    <div className="relative aspect-square w-full rounded-2xl bg-[#FAF6F0] flex items-center justify-center p-4 mb-3.5 overflow-hidden">
                      {product.variants && product.variants.length > 1 && (
                        <span className="absolute top-2.5 right-2.5 z-10 text-[9px] font-black px-2 py-0.5 bg-white text-[#0B4F43] rounded-full border border-[#0B4F43]/15 uppercase tracking-wider">
                          {product.variants.length} {t("navFlavors") || "Flavors"}
                        </span>
                      )}
                      <div className="relative w-full h-full transition-transform duration-300 -rotate-3 group-hover:rotate-0 group-hover:scale-105">
                        <Image
                          src={product.image || "/aaiza-logo.jpg"}
                          alt={product.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          priority={filteredProducts.indexOf(product) < 4}
                        />
                      </div>
                    </div>

                    {/* Card Footer (Title + Stars + Circular Bag/Check Button) */}
                    <div className="flex items-end justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className={cn(
                          "text-xs sm:text-sm font-black uppercase tracking-tight truncate heading-font",
                          isSelected ? "text-[#C59238]" : "text-[#1A2B27] group-hover:text-[#0B4F43]"
                        )}>
                          {product.name}
                        </h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate mt-0.5">
                          {getTranslatedCategory(product.category)}
                        </p>
                        <div className="flex items-center gap-0.5 mt-1.5 text-[#C59238]">
                          {[...Array(5)].map((_, sIdx) => (
                            <Star key={sIdx} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => toggleProductSelection(e, product.id)}
                        className={cn(
                          "w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all border cursor-pointer",
                          isSelected
                            ? "bg-[#0B4F43] text-white border-[#0B4F43] shadow-sm"
                            : "bg-white text-[#1A2B27] border-slate-200 hover:border-[#0B4F43] hover:text-[#0B4F43]"
                        )}
                        aria-label="Select product for inquiry"
                      >
                        {isSelected ? <Check className="w-4 h-4" strokeWidth={3} /> : <ShoppingBag className="w-4 h-4" />}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24">
              <PackageSearch className="w-14 h-14 text-slate-200 mx-auto mb-4" />
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No products found in this category.</p>
            </div>
          )}
        </div>

        {/* =========================================================================
            SECTION 3: "THE AAIZA PROMISE." (Reference Stepped Cream Promise Card)
        ========================================================================= */}
        <div className="mt-16 rounded-[2.5rem] bg-[#FAF3E8] border border-[#C59238]/25 p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 filter drop-shadow-lg">
                <Image
                  src="/transparent/DJ CREMO COMBINE.png"
                  alt="AAIZA Quality Promise"
                  fill
                  className="object-contain"
                  sizes="240px"
                />
              </div>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-2xl sm:text-4xl font-black text-[#1A2B27] uppercase tracking-tight heading-font mb-4">
                THE <span className="text-[#0B4F43]">AAIZA</span> PROMISE.
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C59238] shrink-0" />
                  100% Halal certified confectionery crafted for global retail &amp; wholesale markets.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0B4F43] shrink-0" />
                  Direct FCL &amp; LCL container dispatch from Jebel Ali Port, Dubai to 25+ countries.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2E6F2D] shrink-0" />
                  Climate-resilient packaging keeping biscuits crisp and candies fresh worldwide.
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B4F43] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#06332B] transition-all shadow-[0_3px_0_#06332B]"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {detailProduct && (
          <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailProduct(null)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white w-full max-w-7xl h-[98vh] md:h-[85vh] max-h-[900px] rounded-[2.5rem] md:rounded-[4rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border-[8px] md:border-[16px] border-white/90 bg-clip-padding"
            >
              <button
                onClick={() => setDetailProduct(null)}
                className={cn(
                  "absolute top-8 z-[70] w-12 h-12 bg-white/90 shadow-xl shadow-slate-200/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-[#C59238] hover:scale-110 active:scale-95 transition-all text-lg",
                  isRTL ? "left-8" : "right-8"
                )}
              >
                <X className="w-6 h-6" strokeWidth={3} />
              </button>

              {/* Main Modal Content */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-full">
                
                {/* 1. Left Section: Hero Product Image (White Background) */}
                <div className="w-full md:w-[42%] bg-white p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center relative shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full relative z-10"
                    >
                      <Image
                        src={activeImage || "/aaiza-logo.jpg"}
                        alt={detailProduct.name}
                        fill
                        priority
                        className="object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Area Wrapper (Details + Sidebar) with background change */}
                <div className="flex-1 flex flex-col md:flex-row bg-[#fafbff] h-full overflow-hidden">
                  {/* 2. Middle Section: Content & Actions */}
                  <div className={cn(
                    "w-full md:w-[65%] p-8 sm:p-12 md:p-16 flex flex-col justify-center h-full relative z-20 border-r border-slate-100/50",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    <div className="mb-12">
                      <span className="inline-flex items-center px-5 py-2 rounded-full bg-white text-[#0B4F43] font-black tracking-[0.2em] text-[10px] uppercase mb-6 shadow-sm border border-slate-100">
                        {getTranslatedCategory(detailProduct.category)}
                      </span>
                      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0B4F43] uppercase tracking-tighter leading-[0.85] heading-font mb-6 drop-shadow-sm">
                        {detailProduct.name}
                      </h2>
                      <div className="h-2 w-20 bg-[#C59238] rounded-full"></div>
                    </div>

                    <div className="flex flex-col gap-5">
                      <Link
                        href={`https://wa.me/971545897386?text=${encodeURIComponent(`Hello, I am interested in ${detailProduct.name} ${detailProduct.variants.find(v => v.id === detailProduct.id)?.name || ""}. Can you provide more details?`)}`}
                        target="_blank"
                        className="h-16 lg:h-18 rounded-[2rem] font-black uppercase tracking-widest text-[13px] transition-all flex items-center justify-center gap-4 transform active:scale-95 bg-[#25D366] text-white hover:bg-[#128C7E] hover:scale-[1.02] shadow-[0_20px_40px_rgba(37,211,102,0.15)]"
                      >
                        <WhatsAppIcon className="w-6 h-6" />
                        Connect on WhatsApp
                      </Link>

                      <button
                        onClick={(e) => { toggleProductSelection(e as any, detailProduct.id); setDetailProduct(null); }}
                        className={cn(
                          "h-16 lg:h-18 rounded-[2rem] font-black uppercase tracking-widest text-[13px] transition-all flex items-center justify-center gap-4 transform active:scale-95",
                          selectedProductIds.includes(detailProduct.id) 
                            ? "bg-[#0B4F43] text-white shadow-[0_20px_40px_rgba(1,73,149,0.15)]" 
                            : "bg-[#C59238] text-white hover:bg-[#A87927] hover:scale-[1.02] shadow-[0_20px_40px_rgba(255,92,138,0.15)]"
                        )}
                      >
                        {selectedProductIds.includes(detailProduct.id) ? t("productDeselect") : t("productAddInquiry")}
                        <ArrowRight className="w-6 h-6" strokeWidth={3} />
                      </button>
                    </div>
                  </div>

                  {/* 3. Right Section: Compact Variants Sidebar */}
                  <div className={cn(
                    "hidden md:flex w-[35%] flex-col overflow-y-auto custom-scrollbar p-8",
                    isRTL && "order-first"
                  )}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] font-sans">Flavors</p>
                        <span className="text-[10px] font-bold text-[#C59238] bg-[#FBF3DC] px-2.5 py-1 rounded-lg">{detailProduct.variants.length}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 pb-8">
                        {detailProduct.variants.map((v: ProductVariant, i: number) => {
                          const isSelected = activeImage === v.image || detailProduct.id === v.id;
                          return (
                            <button
                              key={i}
                              onClick={() => {
                                setActiveImage(v.image);
                                setDetailProduct({ ...detailProduct, id: v.id, image: v.image });
                              }}
                              className={cn(
                                "group relative aspect-square w-full bg-white p-2 rounded-2xl border-2 transition-all hover:scale-105 active:scale-95 overflow-hidden flex items-center justify-center shadow-sm",
                                isSelected ? "border-[#C59238] ring-4 ring-[#C59238]/20" : "border-slate-100 hover:border-[#C59238]/40"
                              )}
                              title={v.name}
                            >
                              <Image src={v.image || "/aaiza-logo.jpg"} fill className="object-contain p-2" alt={v.name} sizes="100px" />
                              {isSelected && (
                                <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#C59238] rounded-full flex items-center justify-center border-2 border-white z-20">
                                  <Check className="w-1.5 h-1.5 text-white" strokeWidth={6} />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-auto pt-6 border-t border-slate-100">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Selected Flavor</p>
                        <p className="text-[11px] font-black text-[#C59238] uppercase tracking-normal truncate">
                          {detailProduct.variants.find(v => v.id === detailProduct.id)?.name || "Original"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Variant View */}
                <div className="md:hidden p-8 pt-0 bg-white">
                  <div className="h-[1px] w-full bg-slate-100 mb-6"></div>
                  <div className="flex flex-row overflow-x-auto gap-4 pb-4 no-scrollbar">
                    {detailProduct.variants.map((v: ProductVariant, i: number) => (
                      <button
                        key={i}
                        onClick={() => {
                          setActiveImage(v.image);
                          setDetailProduct({ ...detailProduct, id: v.id, image: v.image });
                        }}
                        className={cn(
                          "flex-shrink-0 w-20 h-20 bg-slate-50 p-2 rounded-xl border-2 transition-all shadow-sm relative",
                          (activeImage === v.image || detailProduct.id === v.id) ? "border-[#C59238] bg-white" : "border-slate-100"
                        )}
                      >
                        <Image src={v.image || "/aaiza-logo.jpg"} fill className="object-contain p-2" alt={v.name} sizes="80px" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Variant View */}
                <div className="md:hidden p-8 pt-0 bg-white">
                  <div className="h-[1px] w-full bg-slate-100 mb-6"></div>
                  <div className="flex flex-row overflow-x-auto gap-4 pb-4 no-scrollbar">
                    {detailProduct.variants.map((v: ProductVariant, i: number) => (
                      <button
                        key={i}
                        onClick={() => {
                          setActiveImage(v.image);
                          setDetailProduct({ ...detailProduct, id: v.id, image: v.image });
                        }}
                        className={cn(
                          "flex-shrink-0 w-20 h-20 bg-slate-50 p-2 rounded-xl border-2 transition-all shadow-sm relative",
                          (activeImage === v.image || detailProduct.id === v.id) ? "border-[#C59238] bg-white" : "border-slate-100"
                        )}
                      >
                        <Image src={v.image || "/aaiza-logo.jpg"} fill className="object-contain p-2" alt={v.name} sizes="80px" />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Inquiry Floating Bar */}
      <AnimatePresence>
        {selectedProductIds.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 left-0 right-0 z-[5000] flex justify-center px-4"
          >
            <div className="bg-[#C59238] rounded-full shadow-[0_20px_40px_rgba(255,92,138,0.4)] p-2.5 flex items-center gap-6 md:gap-10 px-8 border-4 border-white/20">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#C59238] font-black text-sm shadow-inner">
                  {selectedProductIds.length}
                </span>
                <span className="text-white font-black text-[12px] tracking-[0.2em] uppercase hidden sm:block drop-shadow-sm">
                  {t("productSelectedCount")}
                </span>
              </div>

              <Link
                href={`/contact?items=${selectedProductIds.join(",")}`}
                className="bg-white text-[#0B4F43] hover:bg-slate-50 hover:scale-105 active:scale-95 px-8 sm:px-12 h-14 flex items-center gap-3 rounded-full font-black uppercase text-[12px] tracking-widest transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
              >
                {t("productBulkInquiryBtn")} <ArrowRight className={cn("w-5 h-5 ml-2", isRTL && "rotate-180")} strokeWidth={3} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
