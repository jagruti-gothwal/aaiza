import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "AAIZA FOOD TRADING FZCO | Global Confectionery & Snacks Exporter",
  description: "Welcome to AAIZA FOOD TRADING FZCO. We export the finest range of lollipops, candies, biscuits, and chocolates globally from India. Discover our commitment to quality and consistency.",
  keywords: ["indian snacks export", "global confectionery supplier", "AAIZA FOOD TRADING FZCO home", "premium snack exporter"],
};

export default function Home() {
  return <HomeClient />;
}
