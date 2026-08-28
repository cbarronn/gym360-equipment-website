"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingCart, Globe, Wrench, Settings, Cog, RefreshCcw,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart, Globe, Wrench, Settings, Cog, RefreshCcw,
};

const colorMap: Record<string, string> = {
  accent: "border-accent/30 bg-accent/10 text-accent",
  blue: "border-blue-400/30 bg-blue-400/10 text-blue-400",
  orange: "border-orange-400/30 bg-orange-400/10 text-orange-400",
  purple: "border-purple-400/30 bg-purple-400/10 text-purple-400",
  red: "border-red-400/30 bg-red-400/10 text-red-400",
  green: "border-green-400/30 bg-green-400/10 text-green-400",
};

const hoverColorMap: Record<string, string> = {
  accent: "group-hover:border-accent/50 group-hover:shadow-accent/20",
  blue: "group-hover:border-blue-400/50 group-hover:shadow-blue-400/20",
  orange: "group-hover:border-orange-400/50 group-hover:shadow-orange-400/20",
  purple: "group-hover:border-purple-400/50 group-hover:shadow-purple-400/20",
  red: "group-hover:border-red-400/50 group-hover:shadow-red-400/20",
  green: "group-hover:border-green-400/50 group-hover:shadow-green-400/20",
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="section-padding section-graphite" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Lo que hacemos</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Nuestros <span className="text-accent">servicios</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un solo proveedor para todas las etapas de tu proyecto de equipamiento fitness.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || ShoppingCart;
            const iconClass = colorMap[service.color] || colorMap.accent;
            const hoverClass = hoverColorMap[service.color] || hoverColorMap.accent;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group card-dark p-7 rounded-2xl border border-white/5 transition-all duration-300 hover:shadow-xl ${hoverClass}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${iconClass}`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="#contacto" className="btn-primary">
            Solicitar información de servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
