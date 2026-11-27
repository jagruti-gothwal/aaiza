import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AAIZA FOOD TRADING FZCO | Our Story & Consistency in Quality",
  description: "Learn about AAIZA FOOD TRADING FZCO's journey, our commitment to international quality standards, and how we became a trusted name in confectionery export.",
  keywords: ["about AAIZA FOOD TRADING FZCO", "confectionery company india", "export quality food", "AAIZA FOOD TRADING FZCO mission"],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
