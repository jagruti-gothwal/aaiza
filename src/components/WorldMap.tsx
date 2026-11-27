"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { Globe, Ship, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

// TopoJSON for high fidelity world map (served locally for instant load)
const geoUrl = "/data/countries-110m.json";

const pinnedCountries = [
  { name: "Nigeria", coords: [8.6753, 9.082] as [number, number], yOffset: -11, anchor: "start", region: "West Africa Hub" },
  { name: "South Africa", coords: [22.9375, -30.5595] as [number, number], yOffset: 13, anchor: "middle", region: "Southern Africa" },
  { name: "Kenya", coords: [37.9062, -0.0236] as [number, number], yOffset: -9, anchor: "start", region: "East Africa Port" },
  { name: "Ghana", coords: [-1.0232, 7.9465] as [number, number], yOffset: 14, anchor: "middle", region: "West Africa" },
  { name: "Mali", coords: [-3.9962, 17.5707] as [number, number], yOffset: -10, anchor: "end", region: "West Africa" },
  { name: "Niger", coords: [8.0817, 17.6078] as [number, number], yOffset: 10, anchor: "start", region: "West Africa" },
  { name: "Benin", coords: [2.3158, 9.3077] as [number, number], yOffset: -10, anchor: "end", region: "West Africa" },
  { name: "Ivory Coast", coords: [-5.5471, 7.5399] as [number, number], yOffset: -12, anchor: "end", region: "West Africa" },
  { name: "Ethiopia", coords: [39.1225, 9.145] as [number, number], yOffset: 12, anchor: "start", region: "Horn of Africa" },
  { name: "Cameroon", coords: [12.3547, 7.3697] as [number, number], yOffset: 14, anchor: "middle", region: "Central Africa" },
  { name: "Tanzania", coords: [34.8888, -6.369] as [number, number], yOffset: -11, anchor: "middle", region: "East Africa" },
  { name: "Uganda", coords: [32.2903, 1.3733] as [number, number], yOffset: 10, anchor: "middle", region: "East Africa" },
  { name: "India", coords: [78.9629, 20.5937] as [number, number], isHome: false, yOffset: -13, anchor: "middle", region: "Manufacturing Base" },
  { name: "Dubai (Main Office)", coords: [55.2708, 25.2048] as [number, number], isHome: true, isHub: true, yOffset: -12, anchor: "start", region: "Global HQ & Jebel Ali Port" },
];

const shippingRoutes: Array<{ from: [number, number]; to: [number, number] }> = [
  { from: [78.9629, 20.5937], to: [55.2708, 25.2048] },
  { from: [55.2708, 25.2048], to: [39.1225, 9.145] },
  { from: [55.2708, 25.2048], to: [37.9062, -0.0236] },
  { from: [55.2708, 25.2048], to: [34.8888, -6.369] },
  { from: [55.2708, 25.2048], to: [8.6753, 9.082] },
  { from: [55.2708, 25.2048], to: [-1.0232, 7.9465] },
  { from: [55.2708, 25.2048], to: [22.9375, -30.5595] },
];

const activeGeoNames = new Set([
  "Nigeria",
  "South Africa",
  "Kenya",
  "Ghana",
  "Mali",
  "Niger",
  "Benin",
  "Côte d'Ivoire",
  "Ethiopia",
  "Cameroon",
  "Tanzania",
  "Uganda",
  "India",
  "United Arab Emirates",
]);

export default function WorldMap() {
  const { t } = useLanguage();
  const [activeCountry, setActiveCountry] = useState<string | null>("Dubai (Main Office)");

  const highlights = [
    { title: t("mapHigh1Title"), desc: t("mapHigh1Desc") },
  ];

  const featuredPills = ["Dubai (Main Office)", "India", "Nigeria", "Kenya", "Ghana", "South Africa", "Ethiopia", "Tanzania"];
  const selectedPin = pinnedCountries.find((c) => c.name === activeCountry);

  return (
    <section className="py-14 sm:py-16 bg-[#FAF8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left: Info & Interactive Market Pills */}
          <div className="w-full lg:w-5/12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EAF4F1] border border-[#0B4F43]/20 text-[#0B4F43] rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                <Globe className="w-3.5 h-3.5 text-[#C59238]" />
                {highlights[0].title}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#083830] uppercase tracking-tight leading-[1.05] heading-font">
                {t("mapTitle")} <br />
                <span className="text-[#C59238]">{t("mapSubtitle")}</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {highlights[0].desc}
              </p>

              {/* Quick Export Stats */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="bg-white rounded-2xl p-3 border border-[#0B4F43]/10 shadow-xs">
                  <div className="text-lg sm:text-xl font-black text-[#0B4F43]">25+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Countries</div>
                </div>
                <div className="bg-white rounded-2xl p-3 border border-[#C59238]/25 shadow-xs">
                  <div className="text-lg sm:text-xl font-black text-[#C59238]">15+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Africa Hubs</div>
                </div>
                <div className="bg-white rounded-2xl p-3 border border-[#2E6F2D]/20 shadow-xs">
                  <div className="text-lg sm:text-xl font-black text-[#2E6F2D]">FCL/LCL</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Sea Freight</div>
                </div>
              </div>

              {/* Interactive Country Chips */}
              <div className="pt-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                  Tap or hover a hub to spotlight:
                </span>
                <div className="flex flex-wrap gap-2">
                  {featuredPills.map((name) => {
                    const isSelected = activeCountry === name;
                    return (
                      <button
                        key={name}
                        type="button"
                        onMouseEnter={() => setActiveCountry(name)}
                        onClick={() => setActiveCountry(name)}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer border",
                          isSelected
                            ? "bg-[#0B4F43] text-[#FFD54F] border-[#C59238] shadow-sm scale-105"
                            : "bg-white text-[#0B4F43] border-[#0B4F43]/15 hover:border-[#C59238]"
                        )}
                      >
                        {name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Rich Emerald & Gold Interactive Map */}
          <div className="w-full lg:w-7/12 h-[380px] sm:h-[430px] relative cursor-grab active:cursor-grabbing bg-gradient-to-br from-[#0D5E4F] via-[#0B4F43] to-[#07382F] rounded-[2.5rem] border-2 border-[#C59238]/35 shadow-[0_24px_60px_rgba(11,79,67,0.22)] p-3 overflow-hidden">

            {/* Live Active Hub Pill at Top-Left */}
            {selectedPin && (
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#C59238]/40 shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C59238] animate-pulse" />
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#0B4F43] leading-none">
                    {selectedPin.name}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#A87927] mt-0.5">
                    {selectedPin.region}
                  </div>
                </div>
              </div>
            )}

            <ComposableMap
              projectionConfig={{
                scale: 355,
                center: [28, 4],
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <Sphere stroke="rgba(230, 194, 96, 0.25)" strokeWidth={0.8} id="globe-sphere" fill="#083B32" />
              <Graticule stroke="rgba(230, 194, 96, 0.1)" strokeWidth={0.5} />

              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo) => {
                    const geoName = geo.properties?.name || "";
                    const isExportMarket = activeGeoNames.has(geoName);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isExportMarket ? "#FBF3DC" : "#156E5E"}
                        stroke="#07382F"
                        strokeWidth={0.6}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: "#FFD54F",
                            outline: "none",
                            transition: "all 200ms",
                          },
                          pressed: { fill: "#E6C260", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Golden Maritime Trade Routes from Dubai & India */}
              {shippingRoutes.map((route, idx) => (
                <Line
                  key={idx}
                  from={route.from}
                  to={route.to}
                  stroke="#FFD54F"
                  strokeWidth={1.3}
                  strokeOpacity={0.65}
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
              ))}

              {pinnedCountries.map((country, idx) => {
                const isHighlighted = activeCountry === country.name;
                const isPrimary = country.isHome || country.isHub;
                return (
                  <Marker
                    key={idx}
                    coordinates={country.coords}
                    onMouseEnter={() => setActiveCountry(country.name)}
                    onClick={() => setActiveCountry(country.name)}
                  >
                    <g className="cursor-pointer">
                      {/* Pulse Ring */}
                      {(isPrimary || isHighlighted) && (
                        <circle
                          r={isHighlighted ? 9 : 7}
                          fill="#FFD54F"
                          fillOpacity={0.3}
                          className="animate-ping"
                        />
                      )}

                      {/* Pin Dot */}
                      <circle
                        r={isPrimary || isHighlighted ? 4.2 : 2.8}
                        fill={isPrimary || isHighlighted ? "#FFD54F" : "#0B4F43"}
                        stroke="#FFFFFF"
                        strokeWidth={1.2}
                      />

                      {/* Country Label */}
                      <text
                        textAnchor={country.anchor as any}
                        y={country.yOffset}
                        x={country.anchor === "start" ? 7 : country.anchor === "end" ? -7 : 0}
                        style={{
                          fontFamily: "var(--font-inter)",
                          fill: isPrimary || isHighlighted ? "#FFD54F" : "#FFFFFF",
                          fontSize: isPrimary || isHighlighted ? "8px" : "6.5px",
                          fontWeight: "900",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          pointerEvents: "none",
                          paintOrder: "stroke",
                          stroke: "#07382F",
                          strokeWidth: "2.5px",
                          strokeLinejoin: "round",
                        }}
                      >
                        {country.name}
                      </text>
                    </g>
                  </Marker>
                );
              })}
            </ComposableMap>

            {/* Legend Card */}
            <div className="absolute bottom-4 right-4 text-right bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#C59238]/30 shadow-lg">
              <div className="flex items-center justify-end gap-1.5">
                <Ship className="w-4 h-4 text-[#C59238]" />
                <div className="text-base sm:text-lg font-black text-[#0B4F43] uppercase tracking-tight heading-font">
                  {t("mapLegend")}
                </div>
              </div>
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.16em] mt-0.5">
                {t("mapSubLegend")}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
