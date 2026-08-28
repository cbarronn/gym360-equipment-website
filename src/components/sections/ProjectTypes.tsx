"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECT_TYPES } from "@/lib/constants";

export default function ProjectTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proyectos" className="section-padding section-dark" ref={ref}>
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
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Soluciones por proyecto</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Equipamos cualquier <span className="text-accent">tipo de proyecto</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No importa el tamaño de tu proyecto. Te ayudamos a seleccionar el equipo adecuado
            de acuerdo con el espacio, presupuesto y tipo de usuario.
          </p>
        </motion.div>

        {/* Grid — bento-style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PROJECT_TYPES.map((type, idx) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                idx === 0 || idx === 4 ? "md:col-span-2" : "col-span-1"
              }`}
            >
              <div className={`relative w-full ${
                idx === 0 || idx === 4 ? "aspect-[16/9]" : "aspect-square"
              }`}>
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/40 to-transparent" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                <div className="absolute inset-0 border border-transparent group-hover:border-accent/40 rounded-2xl transition-colors duration-300" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight group-hover:text-accent transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {type.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center text-gray-400 mt-10 text-sm"
        >
          También atendemos clubes deportivos, centros de rehabilitación, constructoras e inversionistas.{" "}
          <a href="#contacto" className="text-accent hover:underline font-medium">
            Cuéntanos sobre tu proyecto →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
