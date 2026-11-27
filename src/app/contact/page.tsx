"use client";
import { useState, Suspense } from "react";
import {
  Phone, Mail, Send, Building2, ArrowRight,
  Plus, Minus, ShieldCheck, Clock, Ship
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { submitInquiry } from "@/app/actions";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { staticProductsFallback } from "@/lib/products";

function CheckeredRibbon() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">
      <div
        className="w-full h-5"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#0B4F43 0% 25%, #FAF6F0 0% 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="w-full h-2.5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #C59238 0 10px, #E6C260 10px 20px)",
        }}
      />
    </div>
  );
}

function ContactForm() {
  const { t, isRTL } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();
  const productIds = searchParams.get("items") || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("product_ids", productIds);

    const result = await submitInquiry(formData);

    if (!result.success) {
      console.error(result.error);
      setErrorMessage(result.error || "Unknown server error");
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  return (
    <div className="relative">
      {status === "success" ? (
        <div className="bg-white p-8 rounded-2xl border border-[#C59238] text-center">
          <div className="w-14 h-14 bg-[#E6C260] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Send className="w-6 h-6 text-[#0B4F43]" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-black text-[#0B4F43] mb-2 uppercase tracking-tight heading-font">
            {t("contactSuccessTitle")}
          </h3>
          <p className="text-slate-600 font-medium text-xs sm:text-sm mb-5 max-w-sm mx-auto leading-relaxed">
            {t("contactSuccessDesc")}
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-2.5 bg-[#0B4F43] hover:bg-[#06332B] text-white rounded-md font-bold uppercase tracking-wider text-xs transition-all cursor-pointer"
          >
            {t("contactNewInquiry")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={cn("space-y-3.5", isRTL && "text-right")}>
          {status === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-bold text-center">
              {t("contactErrorTitle") || "Submission failed"}: {errorMessage}
              <button type="button" onClick={() => setStatus("idle")} className="ml-3 underline cursor-pointer">
                Dismiss
              </button>
            </div>
          )}

          {productIds && (
            <div className="p-3.5 bg-white border border-[#C59238]/40 rounded-xl text-xs font-bold flex items-center justify-between gap-3">
              <div className="flex flex-col flex-1">
                <span className="uppercase tracking-widest text-[10px] text-[#A87927] font-black">
                  Attached Items ({productIds.split(",").filter(Boolean).length}):
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {productIds.split(",").map((id) => {
                    if (!id) return null;
                    const product = staticProductsFallback.find((p) => String(p.id) === id);
                    return product ? (
                      <span
                        key={id}
                        className="px-2 py-0.5 bg-[#FBF3DC] border border-[#C59238]/30 rounded-full text-[10px] text-[#06332B] font-bold uppercase"
                      >
                        {product.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-[10px] font-black text-[#0B4F43] uppercase tracking-widest mb-1">
                {t("contactLabelName")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3.5 py-2.5 bg-white border border-[#0B4F43]/15 rounded-lg focus:ring-2 focus:ring-[#C59238]/30 focus:border-[#0B4F43] outline-none transition-all text-[#1A2B27] text-xs font-semibold"
                placeholder="Your name / Company"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[10px] font-black text-[#0B4F43] uppercase tracking-widest mb-1">
                {t("contactLabelEmail")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3.5 py-2.5 bg-white border border-[#0B4F43]/15 rounded-lg focus:ring-2 focus:ring-[#C59238]/30 focus:border-[#0B4F43] outline-none transition-all text-[#1A2B27] text-xs font-semibold"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-[10px] font-black text-[#0B4F43] uppercase tracking-widest mb-1">
              {t("contactLabelPhone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-3.5 py-2.5 bg-white border border-[#0B4F43]/15 rounded-lg focus:ring-2 focus:ring-[#C59238]/30 focus:border-[#0B4F43] outline-none transition-all text-[#1A2B27] text-xs font-semibold"
              placeholder="+971 / +91 ..."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[10px] font-black text-[#0B4F43] uppercase tracking-widest mb-1">
              {t("contactLabelMessage")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              className="w-full px-3.5 py-2.5 bg-white border border-[#0B4F43]/15 rounded-lg focus:ring-2 focus:ring-[#C59238]/30 focus:border-[#0B4F43] outline-none transition-all text-[#1A2B27] text-xs font-semibold resize-none"
              placeholder="Container size (20ft / 40ft / LCL), destination port & products..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#0B4F43] hover:bg-[#06332B] text-white py-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-all shadow-sm flex justify-center items-center gap-2 disabled:opacity-75 cursor-pointer"
          >
            <span>{status === "submitting" ? t("contactSubmitting") : t("contactLabelSubmit")}</span>
            <ArrowRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactUs() {
  const { t, isRTL } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<"specs" | "office" | null>("office");

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A2B27]" dir={isRTL ? "rtl" : "ltr"}>

      {/* =========================================================================
          SECTION 1: NECTAR-STYLE SPLIT PRODUCT / INQUIRY HERO
      ========================================================================= */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Tall Soft Pastel Showcase Box with Stamp Sticker */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#EAF4F1] via-[#E2F1EC] to-[#D6ECE5] border border-[#0B4F43]/10 p-6 sm:p-8 flex flex-col items-center justify-between min-h-[420px] sm:min-h-[500px] overflow-hidden">

              {/* Cute Tilted Stamp Badge (Like Nectar's "sweet" stamp) */}
              <div className="absolute top-5 right-5 z-20 rotate-12 bg-[#0B4F43] text-[#E6C260] border-2 border-dashed border-[#E6C260] px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                Dubai HQ
              </div>

              {/* Subtle Dubai Museum Sketch Background */}
              <div className="absolute inset-x-0 bottom-0 h-44 opacity-15 pointer-events-none">
                <Image
                  src="/dubai/dubai-museum-sketch.jpg"
                  alt=""
                  fill
                  className="object-cover object-bottom mix-blend-multiply"
                  sizes="450px"
                />
              </div>

              {/* Center Mascot + Featured Product */}
              <div className="relative w-full flex-1 flex items-center justify-center my-4 z-10">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 filter drop-shadow-[0_20px_28px_rgba(11,79,67,0.18)]">
                  <Image
                    src="/transparent/DJ CREMO COMBINE.png"
                    alt="AAIZA Confectionery Export Mix"
                    fill
                    className="object-contain"
                    sizes="300px"
                    priority
                  />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 w-full bg-white/85 backdrop-blur-sm rounded-2xl p-3.5 border border-[#0B4F43]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#C59238] block">
                    AAIZA Food Trading FZCO
                  </span>
                  <span className="text-xs font-black text-[#0B4F43]">
                    Direct Jebel Ali Export Desk
                  </span>
                </div>
                <span className="text-lg">🇦🇪</span>
              </div>
            </div>
          </div>

          {/* Right: Breadcrumb + Title + Form + 3 Icon Highlights + Accordions */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
              <Link href="/" className="hover:text-[#0B4F43]">HOME</Link> &gt;{" "}
              <Link href="/products" className="hover:text-[#0B4F43]">CATALOG</Link> &gt;{" "}
              <span className="text-[#0B4F43]">BULK INQUIRY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#0B4F43] tracking-tight leading-none heading-font mb-2">
              {t("contactTitle1")} <span className="text-[#C59238]">{t("contactTitle2")}</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5 max-w-xl">
              {t("contactSubtitle")} Request FOB / CIF container pricing directly from our Dubai headquarters.
            </p>

            {/* Inquiry Form */}
            <Suspense fallback={<div className="p-8 bg-white rounded-2xl animate-pulse h-[320px]" />}>
              <ContactForm />
            </Suspense>

            {/* 3 Cute Icon Highlights Row (Like Nectar's 8oz / 6-12 months / Free Shipping) */}
            <div className="grid grid-cols-3 gap-4 py-6 my-6 border-y border-[#0B4F43]/15 text-center">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#EAF4F1] flex items-center justify-center mb-1.5 text-[#0B4F43]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-black text-[#0B4F43]">100% Halal</span>
                <span className="text-[10px] text-slate-500 font-medium">Certified Export</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#FBF3DC] flex items-center justify-center mb-1.5 text-[#C59238]">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-black text-[#0B4F43]">24h Response</span>
                <span className="text-[10px] text-slate-500 font-medium">Dubai Trade Desk</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#EAF4F1] flex items-center justify-center mb-1.5 text-[#0B4F43]">
                  <Ship className="w-4 h-4" />
                </div>
                <span className="text-xs font-black text-[#0B4F43]">Global Cargo</span>
                <span className="text-[10px] text-slate-500 font-medium">20ft / 40ft / LCL</span>
              </div>
            </div>

            {/* Expandable Accordion Rows (Like Nectar's INGREDIENTS + / ALLERGENS +) */}
            <div className="divide-y divide-[#0B4F43]/15 border-b border-[#0B4F43]/15">
              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === "office" ? null : "office")}
                  className="w-full py-3.5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0B4F43]">
                    DUBAI HEADQUARTERS &amp; DIRECT CHANNELS
                  </span>
                  {openAccordion === "office" ? (
                    <Minus className="w-4 h-4 text-[#C59238]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#0B4F43]" />
                  )}
                </button>
                {openAccordion === "office" && (
                  <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2.5 text-slate-700 font-semibold">
                      <Building2 className="w-4 h-4 text-[#C59238] shrink-0" />
                      <span>Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-700 font-semibold">
                      <Phone className="w-4 h-4 text-[#C59238] shrink-0" />
                      <span dir="ltr">+971545897386</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-700 font-semibold">
                      <Mail className="w-4 h-4 text-[#C59238] shrink-0" />
                      <a href="mailto:AAIZAFOODTRADING@GMAIL.COM" className="hover:text-[#0B4F43] underline">
                        AAIZAFOODTRADING@GMAIL.COM
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-700 font-semibold">
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                      <a href="https://wa.me/971545897386" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] underline">
                        WhatsApp Commercial
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === "specs" ? null : "specs")}
                  className="w-full py-3.5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0B4F43]">
                    EXPORT CONTAINER &amp; PACKING SPECS
                  </span>
                  {openAccordion === "specs" ? (
                    <Minus className="w-4 h-4 text-[#C59238]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#0B4F43]" />
                  )}
                </button>
                {openAccordion === "specs" && (
                  <p className="pb-4 text-xs text-slate-600 font-medium leading-relaxed">
                    We support 20ft Standard (~1,250 cartons), 40ft High Cube (~2,600 cartons), and LCL mixed pallets with full Halal certification, GCC bilingual labeling, and Jebel Ali Port dispatch.
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Checkered Divider 1 */}
      <CheckeredRibbon />

      {/* =========================================================================
          SECTION 2: "MORE WAYS TO CONNECT!" (Nectar's 3-Card Showcase)
      ========================================================================= */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C59238] block mb-1.5">
          DIRECT TRADE SUPPORT
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-[#0B4F43] tracking-tight heading-font mb-10">
          More ways to connect!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group">
            <div className="relative aspect-square rounded-2xl bg-[#EAF4F1] border border-[#0B4F43]/10 p-4 mb-3 flex items-center justify-center overflow-hidden">
              <span className="absolute top-3 right-3 bg-[#0B4F43] text-[#E6C260] text-[9px] font-black uppercase px-2.5 py-1 rounded-full rotate-6">
                dubai hq
              </span>
              <div className="relative w-36 h-36 group-hover:scale-105 transition-transform">
                <Image src="/transparent/girl-conico.png" alt="Dubai Main Office" fill className="object-contain object-bottom scale-x-[-1]" sizes="150px" />
              </div>
            </div>
            <h3 className="text-sm font-black text-[#0B4F43] heading-font">Dubai Main Office</h3>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE</p>
          </div>

          {/* Card 2 */}
          <a href="https://wa.me/971545897386" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative aspect-square rounded-2xl bg-[#F5DFB0] border border-[#C59238]/25 p-4 mb-3 flex items-center justify-center overflow-hidden">
              <span className="absolute top-3 right-3 bg-white text-[#0B4F43] text-[9px] font-black uppercase px-2.5 py-1 rounded-full -rotate-6 shadow-xs">
                instant
              </span>
              <div className="relative w-36 h-36 group-hover:scale-105 transition-transform">
                <Image src="/transparent/boy-tangy.png" alt="WhatsApp Trade Desk" fill className="object-contain object-bottom" sizes="150px" />
              </div>
            </div>
            <h3 className="text-sm font-black text-[#0B4F43] heading-font group-hover:text-[#C59238] transition-colors">
              WhatsApp Trade Desk
            </h3>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">Direct B2B Sales Support</p>
          </a>

          {/* Card 3 */}
          <Link href="/products" className="group block">
            <div className="relative aspect-square rounded-2xl bg-[#9ED9CC]/55 border border-[#0B4F43]/15 p-4 mb-3 flex items-center justify-center overflow-hidden">
              <span className="absolute top-3 right-3 bg-[#C59238] text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full rotate-3">
                100+ skus
              </span>
              <div className="relative w-36 h-36 group-hover:scale-105 transition-transform">
                <Image src="/transparent/DJ Choco Eclairs Jar Markup.png" alt="Full Catalog" fill className="object-contain" sizes="150px" />
              </div>
            </div>
            <h3 className="text-sm font-black text-[#0B4F43] heading-font group-hover:text-[#C59238] transition-colors">
              Export Product Menu
            </h3>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">Lollipops, Biscuits &amp; Candies</p>
          </Link>
        </div>
      </section>

      {/* Checkered Divider 2 */}
      <CheckeredRibbon />

      {/* =========================================================================
          SECTION 3: NECTAR-STYLE EMERALD BRAND BANNER WITH GIANT "aaiza" WORDMARK
      ========================================================================= */}
      <section className="bg-[#0B4F43] text-white pt-10 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-emerald-100/85 mb-6">
            <div>
              <span className="text-[#E6C260] font-black uppercase tracking-widest block mb-1">AAIZA Food Trading FZCO</span>
              <p className="leading-relaxed">Dubai&apos;s trusted export house for Halal confectionery, lollipops, biscuits, and chocolates.</p>
            </div>
            <div>
              <span className="text-[#E6C260] font-black uppercase tracking-widest block mb-1">Say Hello</span>
              <p>Dubai, United Arab Emirates</p>
              <p>AAIZAFOODTRADING@GMAIL.COM • +971545897386</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end items-start font-bold uppercase tracking-wider text-[11px]">
              <Link href="/products" className="hover:text-[#E6C260]">Products</Link>
              <Link href="/export" className="hover:text-[#E6C260]">Export Desk</Link>
              <Link href="/about" className="hover:text-[#E6C260]">About Us</Link>
            </div>
          </div>

          <div className="text-center select-none pointer-events-none leading-none">
            <span className="text-[5.5rem] sm:text-[9rem] md:text-[12rem] font-black tracking-tighter lowercase text-[#EAF4F1] heading-font block -mb-3">
              aaiza
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
