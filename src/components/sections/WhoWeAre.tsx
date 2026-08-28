"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Atención personalizada antes, durante y después de la compra",
  "Equipos de distintas marcas internacionales",
  "Opciones nuevas, seminuevas y reacondicionadas",
  "Importación directa de equipos",
  "Instalación profesional certificada",
  "Refacciones y mantenimiento continuo",
];

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-10 bg-accent" />
        <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="section-padding section-graphite" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/installation.jpg"
                alt="Técnico especializado instalando equipo de gimnasio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent frame */}
              <div className="absolute inset-0 rounded-2xl border border-accent/20" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border-2 border-accent/30 -z-10" />
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 -right-4 md:-right-8 bg-glass border border-white/10 rounded-xl px-5 py-4 shadow-xl">
              <p className="text-accent text-2xl font-black leading-none">360°</p>
              <p className="text-white/70 text-xs mt-1 leading-tight max-w-[80px]">
                Cobertura integral
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <SectionTitle
              eyebrow="Quiénes somos"
              title={
                <>
                  Más que una tienda
                  <br />
                  de <span className="text-accent">equipos</span>
                </>
              }
              subtitle="Gym 360 Equipment es una empresa especializada en la comercialización de equipos para gimnasio. Ofrecemos soluciones para proyectos nuevos, ampliaciones, renovaciones y mantenimiento de instalaciones fitness."
            />

            <ul className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#contacto" className="btn-primary">
              Conoce cómo podemos ayudarte
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
