"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hola, me interesa recibir información sobre equipos de gimnasio de GYM 360 Equipment."
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="Gimnasio premium con equipos profesionales"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/75 to-carbon/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent" />
        {/* Accent accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">
              Soluciones Integrales Fitness
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
          >
            Equipamiento
            <br />
            <span className="text-accent">profesional</span> para
            <br />
            gimnasios que
            <br />
            buscan ir{" "}
            <span className="relative inline-block">
              más lejos.
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-accent/40 rounded-full" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-3 max-w-2xl"
          >
            Comercializamos equipos de gimnasio de diferentes marcas y modelos
            provenientes de Estados Unidos, China y otros mercados internacionales.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          >
            Desde la selección del equipo hasta la instalación, mantenimiento y
            suministro de refacciones.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#contacto" className="btn-primary group">
              Solicitar cotización
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link href="#equipos" className="btn-secondary">
              Conocer nuestros equipos
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { label: "Categorías de equipos", value: "12+" },
              { label: "Tipos de proyecto", value: "8" },
              { label: "Cobertura", value: "Nacional" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-2xl font-black text-accent">{stat.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider leading-tight max-w-[80px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors group"
        aria-label="Desplazar hacia abajo"
      >
        <span className="text-[11px] tracking-widest uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
