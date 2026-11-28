import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { LanguageProvider } from "@/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["400", "500", "600", "700", "800"], display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["600", "700", "800", "900"], display: "swap" });

const baseUrl = 'https://www.aaizafoodtrading.com';

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
      <body className={`${jakarta.variable} ${fraunces.variable} font-sans antialiased flex flex-col min-h-screen bg-[#FBF9F4] text-[#11221E]`}>
        <LanguageProvider>
          <Navbar />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AAIZA FOOD TRADING FZCO",
                "url": "https://www.aaizafoodtrading.com",
                "logo": "https://www.aaizafoodtrading.com/aaiza-logo.jpg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+971545897386",
                  "contactType": "sales",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["en", "pt", "es", "fr"]
                },
                "sameAs": [
                  "https://www.facebook.com/aaizafoodtrading",
                  "https://twitter.com/aaizafoodtrading",
                  "https://www.instagram.com/aaizafoodtrading",
                  "https://www.linkedin.com/company/aaizafoodtrading"
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
                "image": "https://www.aaizafoodtrading.com/aaiza-logo.jpg",
                "@id": "https://www.aaizafoodtrading.com",
                "url": "https://www.aaizafoodtrading.com",
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
