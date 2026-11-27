import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAIZA FOOD TRADING FZCO Products | High-Quality Candy, Biscuits & Chocolates",
  description: "Browse the extensive product catalog of AAIZA FOOD TRADING FZCO. We offer a wide variety of export-quality lollipops, fruit candies, cream biscuits, and premium chocolates for global markets.",
  keywords: ["lollipops", "candies", "biscuits", "chocolates", "confectionery catalog", "indian sweets export"],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
