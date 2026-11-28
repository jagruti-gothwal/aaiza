"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download, ChevronRight, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const languages = [
    { code: "EN", name: "English" },
    { code: "PT", name: "Portuguese" },
    { code: "FR", name: "French" },
    { code: "ES", name: "Spanish" },
    { code: "AR", name: "Arabic" },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navLinks = [
    { name: t("navHome"), href: "/" },
    { name: t("navAbout"), href: "/about" },
    { name: t("navProducts"), href: "/products" },
    { name: t("navExport"), href: "/export" },
    { name: t("navInquiry"), href: "/contact" },
  ];

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -60, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "w-full fixed top-0 inset-x-0 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#093A31]/10 z-[5000] px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between transition-all"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <Image src="/aaiza-logo.jpg" alt="AAIZA Food Trading FZCO" width={135} height={42} priority className="h-10 w-auto object-contain mix-blend-multiply" />
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 flex-grow justify-center px-4">
          {navLinks.map((navItem, idx: number) => {
            const isActive = pathname === navItem.href;
            return (
              <Link
                key={`link=${idx}`}
                href={navItem.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative items-center flex text-xs font-semibold py-1.5 transition-all duration-200 uppercase tracking-[0.14em]",
                  isActive
                    ? "text-[#093A31] border-b-2 border-[#B8862D]"
                    : "text-slate-600 hover:text-[#093A31]"
                )}
              >
                <span className="relative z-10 hidden sm:block">{navItem.name}</span>
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#093A31]/15 hover:border-[#B8862D] transition-colors text-[#093A31] font-bold text-[11px] uppercase tracking-wider"
            >
              <Globe className="w-3.5 h-3.5 text-[#B8862D]" />
              <span>{language}</span>
              <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full mt-2 right-0 bg-white border border-[#093A31]/10 rounded-xl shadow-lg p-1.5 min-w-[155px] z-[6000]"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setLangOpen(false); }}
                      className={cn(
                        "w-full text-left px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all",
                        language === l.code ? "bg-[#093A31] text-white" : "text-slate-600 hover:bg-[#FBF9F4]"
                      )}
                    >
                      {l.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link href="/contact" className="hidden sm:flex items-center gap-2 bg-[#093A31] text-white text-[11px] font-bold px-5 py-2.5 rounded-lg hover:bg-[#062922] transition-all uppercase tracking-[0.14em] border border-[#B8862D]/40">
            {t("navQuote")}
          </Link>
          
          <button 
            className="lg:hidden p-2.5 text-[#0B4F43] ml-1 rounded-full bg-white/40 border border-white/40 hover:bg-white/60 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>


      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 top-24 z-[4999] bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-2xl overflow-hidden lg:hidden p-5"
            key="mobile-menu"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={`mobile-link-${idx}`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-5 py-4 text-sm font-black uppercase tracking-widest rounded-2xl flex items-center justify-between group transition-colors",
                        isActive ? "bg-[#0B4F43] text-white" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {link.name}
                      <ChevronRight className={cn(
                        "w-4 h-4 transition-transform group-hover:translate-x-1",
                        isActive ? "text-white opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"
                      )} />
                    </Link>
                  </motion.div>
                )
              })}
              <div className="h-px bg-slate-100 my-4" />
              <Link
                href="/Tree%20India%20Catalogue%20Compressed.pdf"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="px-5 py-4 text-sm font-black uppercase tracking-widest text-[#0B4F43] flex items-center justify-center gap-3 bg-[#EAF4F1]/60 hover:bg-[#EAF4F1] rounded-2xl transition-colors border border-[#0B4F43]/15"
              >
                <Download className="w-4 h-4" />
                {t("navDownload")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

