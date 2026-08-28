"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, SITE_CONFIG } from "@/lib/constants";

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappBase = `https://wa.me/${SITE_CONFIG.whatsapp}?text=`;

  return (
    <section id="equipos" className="section-padding section-dark" ref={ref}>
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
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">
              Catálogo
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Categorías de <span className="text-accent">equipos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contamos con una amplia variedad de equipos para cada zona de tu gimnasio.
            Nuevos, seminuevos y reacondicionados.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, idx) => {
            const msg = encodeURIComponent(
              `Hola, me interesa recibir información sobre ${cat.name} de GYM 360 Equipment.`
            );
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer card-dark border-0"
              >
                {/* Image */}
                <div className="relative aspect-square">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/95 via-carbon/40 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/40 rounded-xl transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1 group-hover:text-accent transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.description}
                    </p>
                    <a
                      href={`${whatsappBase}${msg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:gap-2"
                    >
                      Solicitar información
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-5">
            ¿No encuentras lo que buscas? Contáctanos y lo localizamos para ti.
          </p>
          <Link href="#contacto" className="btn-secondary">
            Consultar disponibilidad
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
