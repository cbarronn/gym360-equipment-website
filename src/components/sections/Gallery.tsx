"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

const ALL_CATEGORIES = ["Todos", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
    document.body.style.overflow = "";
  };

  const prev = () =>
    setLightboxIdx((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0));
  const next = () =>
    setLightboxIdx((i) => (i !== null ? (i + 1) % filtered.length : 0));

  return (
    <section className="section-padding section-graphite" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Galería</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Proyectos y <span className="text-accent">equipos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Gimnasios equipados, instalaciones realizadas y equipos disponibles.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-carbon font-bold"
                  : "bg-steel text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filtered.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  idx === 0 ? "md:col-span-2 row-span-2" : ""
                }`}
                onClick={() => openLightbox(idx)}
              >
                <div className={`relative w-full ${idx === 0 ? "aspect-video md:aspect-square" : "aspect-square"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                  />
                  <div className="absolute inset-0 bg-carbon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <ZoomIn size={20} className="text-carbon" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-glass px-2.5 py-1 rounded-full text-xs text-white font-medium">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon/95 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={filtered[lightboxIdx].src}
                  alt={filtered[lightboxIdx].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-carbon/80 flex items-center justify-center text-white hover:bg-carbon transition-colors"
              >
                <X size={20} />
              </button>

              {/* Prev */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-carbon/80 flex items-center justify-center text-white hover:bg-accent hover:text-carbon transition-all"
              >
                ‹
              </button>

              {/* Next */}
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-carbon/80 flex items-center justify-center text-white hover:bg-accent hover:text-carbon transition-all"
              >
                ›
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                {filtered[lightboxIdx].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
