"use client";
import React from "react";
import Image from "next/image";

interface DubaiSkylineProps {
  variant?: "hero" | "card";
  className?: string;
}

export default function DubaiSkyline({ variant = "hero", className = "" }: DubaiSkylineProps) {
  if (variant === "hero") {
    return (
      <div className={`pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
        <div className="relative w-full h-full">
          <Image
            src="/dubai/dubai-burj-sketch.jpg"
            alt="Dubai Skyline Sketch"
            fill
            className="object-cover object-center invert mix-blend-screen opacity-15"
            sizes="100vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#FAF8F2] to-[#FBF3DC] border-2 border-[#C59238]/30 shadow-md p-3 ${className}`}
    >
      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image
          src="/dubai/dubai-museum-sketch.jpg"
          alt="Dubai Museum of the Future Architectural Sketch"
          width={1200}
          height={800}
          className="w-full h-auto object-contain mix-blend-multiply"
          sizes="(max-width: 1024px) 100vw, 450px"
        />
      </div>
      <div className="mt-2.5 flex items-center justify-between px-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#0B4F43]">
          🇦🇪 Dubai Regional Trade Hub
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59238]">
          Jebel Ali Port Dispatch
        </span>
      </div>
    </div>
  );
}
