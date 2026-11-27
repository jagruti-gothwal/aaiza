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
    <div className="pt-36 pb-36 min-h-screen relative overflow-hidden bg-[#faf7f2]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-10 right-0 w-[45vw] h-[45vw] bg-amber-200/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[45vw] h-[45vw] bg-[#C59238]/15 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-300/70 bg-white/80 backdrop-blur-md shadow-xs mb-6">
            <Sparkles className="w-4 h-4 text-amber-600 animate-sparkle" />
            <span className="text-amber-900 font-black text-[11px] tracking-[0.25em] uppercase">
              🇦🇪 Dubai Corporate Identity • Global Sweet House
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0b192c] uppercase tracking-tight leading-[0.95] mb-6 heading-font">
            {t("aboutTitle1")} <br className="hidden md:block"/>
            <span className="gold-gradient-text">{t("aboutTitle2")}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {t("aboutHeaderDesc")} Operating with Dubai&apos;s trademark precision, we connect the finest confectionery craft with rapid maritime dispatch to 25+ global markets.
          </p>
        </div>

        {/* Hero Banner Showcase */}
        <div className="w-full h-72 md:h-84 rounded-[3rem] mb-20 relative flex flex-col items-center justify-center overflow-hidden border-4 border-white shadow-[0_25px_60px_rgba(212,175,55,0.15)] bg-gradient-to-r from-[#0D5E4F] via-[#0B4F43] to-[#07382F] group">
          <div className="absolute inset-0 bg-radial from-amber-400/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 text-center px-6">
            <div className="bg-white/95 px-6 py-4 inline-block mb-4 rounded-3xl">
              <Image 
                src="/aaiza-logo.jpg" 
                alt="Tree India Dubai" 
                width={200} 
                height={55} 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <div className="text-[#f3e5ab] font-black text-xs uppercase tracking-[0.25em] mb-1">
              Dubai Regional Trade Desk • Direct Jebel Ali Transit
            </div>
            <p className="text-white/70 text-xs font-medium max-w-md mx-auto">
              Empowering bulk importers, supermarket distributors, and retail partners worldwide with certified Halal confectionery.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border-2 border-amber-200/60 shadow-[0_15px_35px_rgba(212,175,55,0.06)] hover:border-amber-300 transition-all group relative overflow-hidden flex flex-col justify-center">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 shadow-xs group-hover:bg-amber-400 group-hover:text-amber-950 transition-colors">
              <Target className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black text-[#0b192c] mb-4 uppercase tracking-tight heading-font">
              {t("aboutMissionTitle")}
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              {t("aboutMissionDesc")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0B4F43] to-[#07382F] p-8 md:p-12 rounded-[2.5rem] border-2 border-amber-400/40 shadow-[0_20px_45px_rgba(11,25,44,0.3)] transition-all group relative overflow-hidden text-white flex flex-col justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-[#E6C260] shadow-lg border border-white/10">
              <Eye className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black text-[#f3e5ab] mb-4 uppercase tracking-tight heading-font">
              {t("aboutVisionTitle")}
            </h2>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
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
