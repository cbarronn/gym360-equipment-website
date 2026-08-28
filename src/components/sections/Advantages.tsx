"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Package, Star, Globe2, UserCheck, Wrench, Shield, Cog, MapPin, Layers, Clock,
} from "lucide-react";
import { ADVANTAGES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Package, Star, Globe2, UserCheck, Wrench, Shield, Cog, MapPin, Layers, Clock,
};

export default function Advantages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding section-dark relative overflow-hidden" ref={ref}>
      {/* Accent glow decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Por qué elegirnos</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Ventajas que nos <span className="text-accent">distinguen</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Más de un punto de contacto. Un solo proveedor integral para todo tu proyecto.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = iconMap[adv.icon] || Package;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                className="group card-dark p-6 rounded-2xl flex flex-col gap-3 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-white text-sm leading-tight group-hover:text-accent transition-colors">
                  {adv.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
