import type { Metadata } from "next";
import { Nunito, Fredoka, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { LanguageProvider } from "@/context/LanguageContext";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800", "900"], display: "swap" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["400", "500", "600", "700"], display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800", "900"], display: "swap" });

const baseUrl = 'https://www.treeindiaexports.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "AAIZA FOOD TRADING FZCO | Premium Confectionery & Beverage Export",
  description: "Global leader in confectionery export. AAIZA FOOD TRADING FZCO delivers high-quality candies, biscuits, chocolates, and beverages to international markets with consistency and competitive pricing.",
  alternates: {
    canonical: baseUrl,
  },
  keywords: ["confectionery export", "india candy exporter", "biscuit manufacturers india", "lollipop export", "bulk candy wholesale", "beverage export", "AAIZA FOOD TRADING FZCO products"],
  authors: [{ name: "AAIZA FOOD TRADING FZCO" }],
  creator: "AAIZA FOOD TRADING FZCO",
  publisher: "AAIZA FOOD TRADING FZCO",
  openGraph: {
    title: "AAIZA FOOD TRADING FZCO | Premium Confectionery & Beverage Export",
    description: "Delivering joy globally with high-quality snacks and confectionery.",
    url: baseUrl,
    siteName: "AAIZA FOOD TRADING FZCO",
    images: [
      {
        url: `${baseUrl}/aaiza-logo.jpg`,
        width: 800,
        height: 600,
        alt: "AAIZA Food Trading FZCO Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAIZA FOOD TRADING FZCO | Premium Confectionery & Beverage Export",
    description: "Delivering joy globally with high-quality snacks and confectionery.",
    images: ["/aaiza-logo.jpg"],
  },
  icons: {
    icon: "/aaiza-logo.jpg",
    shortcut: "/aaiza-logo.jpg",
    apple: "/aaiza-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${fredoka.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen bg-slate-50 text-slate-900`}>
        <LanguageProvider>
          <Navbar />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AAIZA FOOD TRADING FZCO",
                "url": "https://www.treeindiaexports.com",
                "logo": "https://www.treeindiaexports.com/tree.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+971545897386",
                  "contactType": "sales",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["en", "pt", "es", "fr"]
                },
                "sameAs": [
                  "https://www.facebook.com/treeindiaexports",
                  "https://twitter.com/treeindiaexports",
                  "https://www.instagram.com/treeindiaexports",
                  "https://www.linkedin.com/company/treeindiaexports"
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "AAIZA FOOD TRADING FZCO",
                "image": "https://www.treeindiaexports.com/tree.png",
                "@id": "https://www.treeindiaexports.com",
                "url": "https://www.treeindiaexports.com",
                "telephone": "+971545897386",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Building A1, Dubai Digital Park, Dubai Silicon Oasis",
                  "addressLocality": "Dubai",
                  "addressRegion": "Dubai",
                  "postalCode": "00000",
                  "addressCountry": "AE"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              })
            }}
          />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
