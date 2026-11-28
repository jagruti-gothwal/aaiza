"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, ShieldCheck, Factory } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[#FAF8F2] border-t border-[#0B4F43]/10 font-sans text-[#1A2B27] relative overflow-hidden">
      {/* Top Trust Pills Strip */}
      <div className="bg-white/70 border-b border-[#0B4F43]/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-3xl bg-[#EAF4F1] border border-[#0B4F43]/10">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#0B4F43]" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0B4F43] mb-0.5">{t("footerISO")}</h3>
              <p className="text-xs font-bold text-slate-600">{t("footerISOList")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-3xl bg-[#F5DFB0]/60 border border-[#C59238]/20">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs shrink-0">
              <Factory className="w-6 h-6 text-[#C59238]" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#06332B] mb-0.5">{t("footerBulk")}</h3>
              <p className="text-xs font-bold text-slate-600">{t("footerBulkList")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-3xl bg-[#9ED9CC]/45 border border-[#0B4F43]/10">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs shrink-0">
              <Globe className="w-6 h-6 text-[#0B4F43]" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0B4F43] mb-0.5">{t("footerChain")}</h3>
              <p className="text-xs font-bold text-slate-600">{t("footerChainList")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 text-center md:text-left">

          {/* Brand */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/aaiza-logo.jpg"
                alt="AAIZA Food Trading FZCO"
                width={180}
                height={90}
                className="h-20 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <p className="text-xs text-slate-600 font-bold leading-relaxed max-w-xs uppercase tracking-wider">
              {t("footerBrand")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#0B4F43] font-black mb-5 text-[11px] uppercase tracking-[0.25em] heading-font">{t("footerOrg")}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("navAbout")}</Link></li>
              <li><Link href="/export" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("navExport")}</Link></li>
              <li><Link href="/products" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("navProducts")}</Link></li>
              <li><Link href="/contact" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("navContact")}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-[#0B4F43] font-black mb-5 text-[11px] uppercase tracking-[0.25em] heading-font">{t("footerCommodities")}</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("footerBiscuits")}</Link></li>
              <li><Link href="/products" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("footerCandies")}</Link></li>
              <li><Link href="/products" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("footerLollipops")}</Link></li>
              <li><Link href="/products" className="text-xs font-bold text-slate-600 hover:text-[#0B4F43] transition-colors uppercase tracking-wider">{t("footerGums")}</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-3 text-center md:text-left">
            <h3 className="text-[#0B4F43] font-black mb-5 text-[11px] uppercase tracking-[0.25em] heading-font">{t("footerComm")}</h3>
            <ul className="space-y-4">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59238] shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider leading-relaxed">
                  AAIZA Food Trading FZCO • Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3">
                <Phone className="w-4 h-4 text-[#C59238] shrink-0" />
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">+971545897386</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3">
                <Mail className="w-4 h-4 text-[#C59238] shrink-0" />
                <span
                  className="text-[11px] font-bold text-[#0B4F43] cursor-pointer hover:underline uppercase tracking-wider"
                  onClick={() => (window.location.href = `mailto:${"AAIZAFOODTRADING@GMAIL.COM"}`)}
                >
                  Contact via Email
                </span>
              </li>
            </ul>

            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              <a href="https://www.linkedin.com/company/aaizafoodtrading" target="_blank" className="w-9 h-9 rounded-lg bg-white border border-[#093A31]/15 flex items-center justify-center text-[#093A31] hover:bg-[#093A31] hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/aaizafoodtrading" target="_blank" className="w-9 h-9 rounded-lg bg-white border border-[#B8862D]/25 flex items-center justify-center text-[#B8862D] hover:bg-[#B8862D] hover:text-white transition-all"><ShieldCheck className="w-4 h-4" /></a>
              <a href="https://twitter.com/aaizafoodtrading" target="_blank" className="w-9 h-9 rounded-lg bg-white border border-[#093A31]/15 flex items-center justify-center text-[#093A31] hover:bg-[#093A31] hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0B4F43]/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] text-slate-500 font-bold tracking-[0.18em] uppercase">
            &copy; {new Date().getFullYear()} AAIZA Food Trading FZCO • Dubai, UAE.
          </p>
          <p className="text-[10px] text-slate-500 font-bold tracking-[0.18em] uppercase">
            Developed by{" "}
            <a
              href="https://ajstudio.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B4F43] underline decoration-[#C59238]/50 underline-offset-4 hover:text-[#C59238]"
            >
              AJ Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
