"use client";
import {
  FileText, Truck, Network, ShieldCheck, Factory,
  Clock, PackageCheck, Handshake, Download,
  ArrowRight, CheckCircle2, Award, Zap, Ship
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import DubaiSkyline from "@/components/DubaiSkyline";

export default function Export() {
  const { t, isRTL } = useLanguage();

  const offerings = [
    { name: t("exportOffering1Title"), desc: t("exportOffering1Desc"), icon: PackageCheck, bg: "bg-[#EAF4F1] border-[#0B4F43]/10", iconColor: "text-[#0B4F43]", doodle: "wave" },
    { name: t("exportOffering2Title"), desc: t("exportOffering2Desc"), icon: FileText, bg: "bg-[#F5DFB0] border-[#C59238]/25", iconColor: "text-[#A87927]", doodle: "arc" },
    { name: t("exportOffering3Title"), desc: t("exportOffering3Desc"), icon: Truck, bg: "bg-[#9ED9CC] border-[#0B4F43]/15", iconColor: "text-[#06332B]", doodle: "vertical" },
  ];

  const whyWorkWithUs = [
    { title: t("exportWhy1Title"), desc: t("exportWhy1Desc"), icon: ShieldCheck },
    { title: t("exportWhy2Title"), desc: t("exportWhy2Desc"), icon: Factory },
    { title: t("exportWhy3Title"), desc: t("exportWhy3Desc"), icon: Clock },
  ];

  const howWeWork = [
    { title: t("exportHow1"), icon: Handshake },
    { title: t("exportHow2"), icon: ShieldCheck },
    { title: t("exportHow3"), icon: Network },
    { title: t("exportHow4"), icon: Clock },
  ];

  const b2bBenefits = [
    { title: t("exportBenefit1"), icon: Truck },
    { title: t("exportBenefit2"), icon: FileText },
    { title: t("exportBenefit3"), icon: PackageCheck },
    { title: t("exportBenefit4"), icon: Network },
  ];

  return (
    <div
      className="bg-white min-h-screen font-sans text-[#1A2B27] overflow-x-hidden selection:bg-[#E6C260] selection:text-[#0B4F43]"
      dir={isRTL ? "rtl" : "ltr"}
    >

      {/* =========================================================================
          SECTION 1: STYLISH EDITORIAL HERO WITH WAVE, RIBBONS & FLOATING TREATS
      ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-24 sm:pb-28 overflow-hidden bg-gradient-to-br from-[#FAF3E8] via-[#FFFDF9] to-[#EAF4F1]">

        {/* Subtle Burj Khalifa Sketch Watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <Image
            src="/dubai/dubai-burj-sketch.jpg"
            alt=""
            fill
            className="object-cover object-bottom mix-blend-multiply"
            sizes="100vw"
            priority
          />
        </div>

        {/* Playful Looping Ribbons */}
        <svg
          viewBox="0 0 1200 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-65"
        >
          <path
            d="M50 260 C 240 100, 480 320, 650 160 C 820 0, 990 240, 1160 110"
            stroke="#E6C260"
            strokeWidth="9"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />
          <path
            d="M120 120 C 310 250, 540 40, 760 200 C 920 300, 1060 150, 1180 200"
            stroke="#BCE6DC"
            strokeWidth="7"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
        </svg>

        {/* Floating Confectionery Accents */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-8, 4, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute bottom-20 left-8 xl:left-16 w-28 h-28 pointer-events-none z-20 filter drop-shadow-[0_14px_20px_rgba(11,79,67,0.16)]"
        >
          <Image src="/transparent/DJ American Biscuits Markup Combine.png" alt="Export Biscuits" fill className="object-contain" sizes="120px" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], rotate: [6, -4, 6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden lg:block absolute bottom-20 right-8 xl:right-16 w-28 h-28 pointer-events-none z-20 filter drop-shadow-[0_14px_20px_rgba(197,146,56,0.2)]"
        >
          <Image src="/transparent/DJ Conico Chocolate.png" alt="Export Chocolates" fill className="object-contain" sizes="120px" />
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#0B4F43]/15 text-[#0B4F43] text-[10px] font-black uppercase tracking-widest shadow-xs">
              🇦🇪 {t("exportCapabilities")}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#E6C260] text-[#06332B] text-xs font-black -rotate-3 shadow-xs">
              #jebelali
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#9ED9CC] text-[#06332B] text-xs font-black rotate-3 shadow-xs">
              #fclcontainers
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1A2B27] heading-font tracking-tight uppercase leading-[0.95] mb-5"
          >
            {t("exportDeskTitle").split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3 last:text-[#C59238]">
                {word}
              </span>
            ))}
          </motion.h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-semibold mb-7">
            {t("exportDeskDesc")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/Tree%20India%20Catalogue%20Compressed.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#0B4F43] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#06332B] transition-all shadow-[0_4px_0_#06332B] hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              {t("navDownload")}
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FBF3DC] text-[#0B4F43] border-2 border-[#C59238]/40 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#F7ECD2] transition-all hover:-translate-y-0.5"
            >
              {t("exportContactAgent")}
              <ArrowRight className="w-4 h-4" />
            </Link>
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
          SECTION 2: FLOATING EXPORT STATS PILL BAR
      ========================================================================= */}
      <section className="relative z-20 -mt-10 px-4 mb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-md border border-[#0B4F43]/10 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-slate-100">
          {[
            { label: t("exportStatsGlobal"), val: "25+", sub: t("exportStatsCountries") },
            { label: t("exportStatsProducts"), val: "100+", sub: t("exportStatsSKUs") },
            { label: t("exportStatsExp"), val: "10+", sub: t("exportStatsYears") },
            { label: t("exportStatsSuccess"), val: "99%", sub: t("exportStatsDelivery") },
          ].map((stat, i) => (
            <div key={i} className="text-center px-3">
              <div className="text-3xl sm:text-4xl font-black text-[#0B4F43] mb-1 heading-font">{stat.val}</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-[#C59238]">{stat.label}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 3 PASTEL ROUNDED-SQUARE CORE COMPETENCY CARDS (WITH DOODLES)
      ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="relative">
            <svg viewBox="0 0 100 100" fill="#EAF4F1" className="w-20 h-20 absolute -top-5 -left-5 -z-10">
              <path d="M50 5 L58 18 L73 13 L73 28 L88 30 L81 44 L93 54 L80 63 L86 78 L71 78 L69 93 L55 86 L45 96 L36 83 L21 88 L22 73 L7 70 L14 56 L3 46 L16 37 L11 22 L26 22 L29 7 L43 15 Z" />
            </svg>
            <span className="inline-flex items-center gap-2 bg-[#EAF4F1] text-[#0B4F43] px-4 py-1 rounded-full font-black tracking-widest text-[10px] uppercase border border-[#0B4F43]/15 mb-3">
              <Zap className="w-3.5 h-3.5 text-[#C59238]" />
              {t("exportCoreCompetencies")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A2B27] uppercase tracking-tight heading-font">
              {t("exportOfferingsTitle")}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-[#0B4F43]/15 text-[#0B4F43] text-xs font-bold -rotate-3">#fcl</span>
            <span className="px-3.5 py-1 rounded-full bg-[#E6C260] text-[#06332B] text-xs font-black rotate-2">#customs</span>
            <span className="px-3.5 py-1 rounded-full bg-[#9ED9CC] text-[#06332B] text-xs font-black -rotate-2">#worldwide</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className={cn(
                  "rounded-[2.2rem] p-7 border relative overflow-hidden flex flex-col justify-between min-h-[250px] shadow-xs",
                  offer.bg
                )}
              >
                {offer.doodle === "wave" && (
                  <svg viewBox="0 0 120 120" fill="none" className="absolute right-0 bottom-2 w-28 h-28 pointer-events-none opacity-60">
                    <path d="M10 80 Q 45 20, 70 65 T 115 35" stroke="#C59238" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                )}
                {offer.doodle === "arc" && (
                  <svg viewBox="0 0 100 100" fill="none" className="absolute right-0 top-0 w-28 h-28 pointer-events-none opacity-45">
                    <path d="M35 0 Q 35 65, 100 65" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M58 0 Q 58 42, 100 42" stroke="#FFFFFF" strokeWidth="6" />
                  </svg>
                )}
                {offer.doodle === "vertical" && (
                  <svg viewBox="0 0 80 140" fill="none" className="absolute right-3 top-4 w-16 h-32 pointer-events-none opacity-65">
                    <path d="M15 5 Q 30 25, 15 45 T 15 85 T 15 125" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
                    <path d="M40 5 Q 55 25, 40 45 T 40 85 T 40 125" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                )}

                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-xs relative z-10">
                  <Icon className={cn("w-6 h-6", offer.iconColor)} strokeWidth={2.2} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-black text-[#1A2B27] uppercase tracking-tight mb-2 heading-font">
                    {offer.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
                    {offer.desc}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#0B4F43] font-black text-[11px] uppercase tracking-wider hover:text-[#C59238] transition-colors">
                    {t("exportLearnMore")} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COMPACT EMERALD STRENGTH BANNER
      ========================================================================= */}
      <section className="mb-16 px-4">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-[#0B4F43] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center border-4 border-[#EAF4F1] shadow-lg">
          <div className="lg:col-span-8 p-8 sm:p-10 relative z-10">
            <span className="text-[#E6C260] font-black uppercase tracking-[0.25em] text-[11px] block mb-2">
              {t("exportStrengthTitle")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4 heading-font">
              {t("exportBuiltFor")}
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base font-medium leading-relaxed mb-6 max-w-xl">
              {t("exportStrengthDesc")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[t("exportQualityAssurance"), t("exportCompliance"), t("exportSecureLogistics"), t("exportSupport247")].map((item, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#E6C260]" />
                  </div>
                  <span className="text-white font-bold uppercase tracking-wider text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 p-8 flex flex-col items-center justify-center bg-[#07382F]/60 h-full">
            <div className="bg-white p-6 rounded-3xl shadow-md text-center">
              <Award className="w-10 h-10 text-[#C59238] mx-auto mb-2" />
              <span className="text-[#0B4F43] font-black text-[10px] uppercase tracking-[0.2em] block mb-1">
                {t("exportCertified")}
              </span>
              <span className="text-[#1A2B27] font-black text-base uppercase tracking-tight heading-font">
                {t("exportGlobalExporter")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY WORK WITH US + DUBAI SKETCH & MASCOT
      ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="text-[#C59238] font-black tracking-[0.25em] text-[11px] uppercase mb-2 block">
              {t("exportAdvantageSub")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A2B27] uppercase tracking-tight mb-6 heading-font">
              {t("exportWhyWorkTitle")}
            </h2>
            <div className="space-y-4">
              {whyWorkWithUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-[#FAF8F2] border border-[#0B4F43]/10">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0B4F43] shadow-xs">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#1A2B27] uppercase tracking-tight mb-1 heading-font">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <DubaiSkyline variant="card" className="mb-4" />
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#EAF4F1] border border-[#0B4F43]/15">
              <div className="flex items-center gap-2.5">
                <Ship className="w-5 h-5 text-[#0B4F43]" />
                <span className="font-black text-xs uppercase text-[#0B4F43]">{t("exportVerifiedAgent")}</span>
              </div>
              <span className="text-xs font-bold text-slate-600">{t("exportInstantQuotes")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW WE WORK & B2B BENEFITS
      ========================================================================= */}
      <section className="bg-[#FAF8F2] border-y border-[#0B4F43]/10 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-7 sm:p-9 rounded-[2.2rem] border border-[#0B4F43]/10 shadow-xs">
              <h3 className="text-2xl font-black text-[#1A2B27] uppercase tracking-tight mb-6 heading-font">
                {t("exportHowWorkTitle")}
              </h3>
              <div className="space-y-3">
                {howWeWork.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF8F2]">
                    <div className="w-10 h-10 bg-[#FBF3DC] text-[#C59238] rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black text-[#0B4F43] uppercase tracking-tight heading-font">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#EAF4F1] p-7 sm:p-9 rounded-[2.2rem] border border-[#0B4F43]/15 shadow-xs">
              <h3 className="text-2xl font-black text-[#0B4F43] uppercase tracking-tight mb-6 heading-font">
                {t("exportB2BBenefitsTitle")}
              </h3>
              <div className="space-y-3">
                {b2bBenefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3.5 rounded-2xl bg-white">
                    <div className="w-10 h-10 bg-[#0B4F43] text-[#E6C260] rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black text-[#1A2B27] uppercase tracking-tight heading-font">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STEPPED CREAM "DUBAI JEBEL ALI HQ" PROMISE CTA
      ========================================================================= */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-[2.5rem] bg-[#FAF3E8] border border-[#C59238]/25 p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <Image
                  src="/transparent/boy-tangy.png"
                  alt="AAIZA Dubai Export Hub"
                  fill
                  className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
                  sizes="240px"
                />
              </div>
            </div>

            <div className="md:col-span-8 text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#0B4F43] border border-[#0B4F43]/15 font-black text-[10px] uppercase tracking-widest mb-3">
                <span className="w-2 h-2 bg-[#2E6F2D] rounded-full animate-pulse" />
                {t("exportStrategicHQ")} • Dubai, UAE
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-[#1A2B27] uppercase tracking-tight mb-3 heading-font">
                {t("exportReadyToExpand")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mb-5">
                {t("exportHubDesc")}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {["Port Jebel Ali (Dubai HQ)", "Port Rashid, Dubai", "Port of Mundra", "Port of Mumbai"].map((port, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F43]/15 text-[#0B4F43] font-bold text-[11px] uppercase tracking-wider">
                    {port}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Link
                  href="/contact"
                  className="bg-[#0B4F43] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#06332B] transition-all shadow-[0_4px_0_#06332B]"
                >
                  {t("exportGetStarted")}
                </Link>
                <Link
                  href="/products"
                  className="bg-white text-[#0B4F43] border-2 border-[#C59238]/40 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#FBF3DC] transition-all"
                >
                  {t("heroViewProducts")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
