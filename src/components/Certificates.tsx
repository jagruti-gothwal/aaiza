"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const certificates = [
  { name: "FIEO", label: "Export Council" },
  { name: "APEDA", label: "Agri & Food" },
  { name: "GST", label: "Tax Verified" },
  { name: "IEC", label: "Import-Export" },
  { name: "FSSAI", label: "Food Safety" },
  { name: "HALAL", label: "100% Certified" },
];

export default function Certificates() {
  const { t } = useLanguage();
  return (
    <section className="py-14 bg-[#FFFDF9] border-t border-[#0B4F43]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#EAF4F1] border border-[#0B4F43]/15 text-[#0B4F43] font-black tracking-[0.2em] text-[10px] uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C59238]" />
            {t("certTrust")}
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-[#1A2B27] uppercase tracking-tight heading-font leading-tight">
            {t("certRecognized")}{" "}
            <span className="text-[#C59238]">{t("certCertified")}</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className={cn(
                "flex flex-col items-center justify-center p-5 rounded-3xl border transition-all shadow-xs hover:shadow-md text-center",
                idx % 2 === 0
                  ? "bg-[#FAF8F2] border-[#C59238]/25 hover:border-[#C59238]"
                  : "bg-[#EAF4F1]/70 border-[#0B4F43]/15 hover:border-[#0B4F43]"
              )}
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-2.5 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#C59238]" strokeWidth={2.5} />
              </div>
              <div className="text-lg font-black text-[#0B4F43] tracking-wider uppercase heading-font">
                {cert.name}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
