"use client";
import Image from "next/image";
import { Target, Eye, ShieldCheck, HeartHandshake, FileCheck, Anchor, Handshake, Sparkles, Ship, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  const values = [
    { name: t("value1Name"), icon: ShieldCheck, desc: t("value1Desc"), color: "from-amber-400 to-amber-600" },
    { name: t("value2Name"), icon: HeartHandshake, desc: t("value2Desc"), color: "from-[#C59238] to-[#A87927]" },
    { name: t("value3Name"), icon: FileCheck, desc: t("value3Desc"), color: "from-[#0B4F43] to-[#06332B]" },
    { name: t("value4Name"), icon: Anchor, desc: t("value4Desc"), color: "from-emerald-400 to-teal-600" },
    { name: t("value5Name"), icon: Handshake, desc: t("value5Desc"), color: "from-[#157A6E] to-[#0B4F43]" },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen relative overflow-hidden bg-[#FFFDF9]">
      {/* Subtle Dubai Skyline Watermark */}
      <div className="absolute top-0 inset-x-0 h-[420px] pointer-events-none opacity-[0.06]">
        <Image src="/dubai/dubai-burj-sketch.jpg" alt="" fill className="object-cover object-bottom mix-blend-multiply" sizes="100vw" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative pt-4">
          <div className="relative text-center md:text-left max-w-2xl">
            <svg viewBox="0 0 100 100" fill="#EAF4F1" className="w-24 h-24 absolute -top-6 -left-6 -z-10 hidden md:block">
              <path d="M50 5 L58 18 L73 13 L73 28 L88 30 L81 44 L93 54 L80 63 L86 78 L71 78 L69 93 L55 86 L45 96 L36 83 L21 88 L22 73 L7 70 L14 56 L3 46 L16 37 L11 22 L26 22 L29 7 L43 15 Z" />
            </svg>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0B4F43]/15 bg-[#EAF4F1] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C59238]" />
              <span className="text-[#0B4F43] font-black text-[10px] tracking-[0.2em] uppercase">
                🇦🇪 Dubai Main Office • Global Sweet House
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1A2B27] uppercase tracking-tight leading-[0.95] mb-4 heading-font">
              {t("aboutTitle1")} <br className="hidden md:block"/>
              <span className="text-[#C59238]">{t("aboutTitle2")}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {t("aboutHeaderDesc")} Operating from Dubai, UAE, we connect the finest confectionery craft with rapid maritime dispatch to 25+ global markets.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <span className="px-4 py-1.5 rounded-full bg-[#FAF8F2] border border-[#0B4F43]/15 text-[#0B4F43] text-xs font-bold -rotate-6 shadow-xs">#ourstory</span>
            <span className="px-4 py-1.5 rounded-full bg-[#E6C260] text-[#06332B] text-xs font-black rotate-3 shadow-xs">#dubaihq</span>
            <span className="px-4 py-1.5 rounded-full bg-[#9ED9CC] text-[#06332B] text-xs font-black -rotate-3 shadow-xs">#halal</span>
          </div>
        </div>

        {/* Clean Editorial Logo + Dubai Banner */}
        <div className="w-full rounded-[2.5rem] mb-12 p-6 sm:p-8 border border-[#0B4F43]/10 bg-gradient-to-br from-[#FAF8F2] via-white to-[#EAF4F1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <Image
              src="/aaiza-logo.jpg"
              alt="AAIZA Food Trading FZCO"
              width={180}
              height={90}
              className="h-20 w-auto object-contain mix-blend-multiply shrink-0"
            />
            <div>
              <div className="text-[#0B4F43] font-black text-xs uppercase tracking-[0.2em] mb-1">
                Dubai Regional Trade Desk • Direct Jebel Ali Transit
              </div>
              <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-md">
                Empowering bulk importers, supermarket distributors, and retail partners worldwide with certified Halal confectionery.
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-64 h-32 rounded-2xl overflow-hidden border border-[#C59238]/25 bg-[#FAF8F2] shrink-0">
            <Image src="/dubai/dubai-museum-sketch.jpg" alt="Dubai Museum of the Future" fill className="object-cover mix-blend-multiply" sizes="260px" />
          </div>
        </div>

        {/* Mission & Vision (Pastel Rounded-Square Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="bg-[#EAF4F1] p-7 md:p-9 rounded-[2.2rem] border border-[#0B4F43]/10 relative overflow-hidden flex flex-col justify-center">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 text-[#0B4F43] shadow-xs">
              <Target className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-black text-[#1A2B27] mb-2 uppercase tracking-tight heading-font">
              {t("aboutMissionTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              {t("aboutMissionDesc")}
            </p>
          </div>

          <div className="bg-[#F5DFB0] p-7 md:p-9 rounded-[2.2rem] border border-[#C59238]/25 relative overflow-hidden flex flex-col justify-center">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 text-[#C59238] shadow-xs">
              <Eye className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-black text-[#06332B] mb-2 uppercase tracking-tight heading-font">
              {t("aboutVisionTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-[#083830]/85 font-medium leading-relaxed">
              {t("aboutVisionDesc")}
            </p>
          </div>
        </div>

        {/* Sweet Moments / Customer Delight Showcase */}
        <div className="mb-24 bg-gradient-to-r from-[#EAF4F1] via-[#FAF8F2] to-[#FBF3DC] rounded-[3rem] p-8 sm:p-12 border-3 border-[#C59238]/30 shadow-[0_20px_50px_rgba(11,79,67,0.08)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0B4F43] border border-[#C59238]/30 text-xs font-black uppercase tracking-widest shadow-xs">
                <span>💖 Sweet Smiles Across 25+ Countries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#083830] uppercase tracking-tight leading-tight heading-font">
                Crafted for Smiles, <br />
                <span className="text-[#0B4F43]">Loved by Generations</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                From playful bubble gums that spark instant childhood joy to crispy chocolate cones savored around dining tables, our confections bring authentic happiness across homes in the Middle East, Africa, and Asia.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-3 rounded-2xl bg-white border border-[#C59238]/30 shadow-xs">
                  <span className="text-2xl font-black text-[#0B4F43] block">100%</span>
                  <span className="text-xs font-bold text-slate-600">Halal Certified Ingredients</span>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white border border-amber-200 shadow-xs">
                  <span className="text-2xl font-black text-amber-500 block">25+</span>
                  <span className="text-xs font-bold text-slate-600">Export Nations Shipped</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Girl with Conico */}
              <div className="relative h-64 sm:h-72 rounded-3xl bg-white/80 border-2 border-[#C59238]/30 p-3 shadow-md flex flex-col justify-end items-center overflow-hidden group">
                <div className="absolute top-3 left-3 z-10 bg-[#0B4F43] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Crispy Cones 🍓
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/transparent/girl-conico.png"
                    alt="Happy Girl with Conico"
                    fill
                    className="object-contain object-bottom scale-x-[-1] group-hover:scale-x-[-1.05] group-hover:scale-y-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
              </div>

              {/* Girl with Gum Pop */}
              <div className="relative h-64 sm:h-72 rounded-3xl bg-white/80 border-2 border-amber-200 p-3 shadow-md flex flex-col justify-end items-center overflow-hidden group">
                <div className="absolute top-3 left-3 z-10 bg-[#FFD54F] text-[#3B2A00] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Gum Pops 🎈
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/transparent/girl-gumpop.png"
                    alt="Happy Girl with Gum Pop"
                    fill
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
              </div>

              {/* Boy with Tang-y Tamarind */}
              <div className="relative h-64 sm:h-72 rounded-3xl bg-white/80 border-2 border-[#0B4F43]/25 p-3 shadow-md flex flex-col justify-end items-center overflow-hidden group">
                <div className="absolute top-3 left-3 z-10 bg-[#C59238] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Tang-y Candy 😋
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/transparent/boy-tangy.png"
                    alt="Happy Boy with DJ Tang-y Tamarind Candy"
                    fill
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-black uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              {t("aboutValuesSub")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b192c] uppercase tracking-tight heading-font">
              {t("aboutValuesTitle")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-3xl border border-amber-200/70 hover:border-amber-400 transition-all shadow-[0_8px_20px_rgba(212,175,55,0.06)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] flex flex-col group hover:-translate-y-2 text-center items-center"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-108 transition-transform`}>
                    <Icon className="w-7 h-7" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-base font-black text-[#0b192c] mb-2 uppercase leading-snug heading-font">
                    {val.name}
                  </h3>
                  <div className="w-8 h-1 rounded-full bg-amber-200 mb-3 group-hover:bg-[#ff7597] transition-colors"></div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
