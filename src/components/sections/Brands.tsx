"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BRAND_NAMES = [
  "Life Fitness", "Precor", "Technogym", "Matrix", "Star Trac",
  "BH Fitness", "Cybex", "Hammer Strength", "Nautilus", "NordicTrack",
  "ProForm", "Inspire Fitness", "Bowflex", "BodySolid", "Valor Fitness",
];

export default function Brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Duplicate for seamless loop
  const doubled = [...BRAND_NAMES, ...BRAND_NAMES];

  return (
    <section className="section-padding section-steel relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Marcas</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight mb-3">
            Equipos de <span className="text-accent">múltiples marcas</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Trabajamos con equipos de diferentes marcas internacionales, sujetos a disponibilidad.
          </p>
        </motion.div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-steel to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-steel to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-6 animate-scroll-x"
            style={{ width: "max-content" }}
          >
            {doubled.map((brand, idx) => (
              <div
                key={`${brand}-${idx}`}
                className="flex-shrink-0 px-8 py-4 bg-graphite border border-white/5 rounded-xl flex items-center justify-center hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
              >
                <span className="text-gray-400 text-sm font-semibold group-hover:text-white transition-colors whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          * Los nombres de marcas son utilizados únicamente con fines referenciales.
          GYM 360 Equipment no es distribuidor oficial de ninguna marca, salvo que se indique expresamente.
        </p>
      </div>
    </section>
  );
}
