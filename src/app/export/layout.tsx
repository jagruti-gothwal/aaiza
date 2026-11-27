import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export & Logistics | AAIZA FOOD TRADING FZCO Global Reach",
  description: "AAIZA FOOD TRADING FZCO's export desk provides seamless logistics, competitive pricing, and reliable delivery of confectionery products to over 15 countries worldwide.",
  keywords: ["confectionery export logistics", "shipping food from india", "bulk orders international", "AAIZA FOOD TRADING FZCO supply chain"],
};

export default function ExportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
