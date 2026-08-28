"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle, Search, ListChecks, FileText, Truck, HeartHandshake,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Search, ListChecks, FileText, Truck, HeartHandshake,
};

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding section-graphite relative overflow-hidden" ref={ref}>
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(183,255,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183,255,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Proceso</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Cómo <span className="text-accent">trabajamos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Un proceso claro y estructurado para acompañarte en cada etapa de tu proyecto.
          </p>
        </motion.div>

        {/* Steps — Desktop Timeline */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.icon] || MessageCircle;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="relative"
              >
                {/* Connector line */}
                {idx < PROCESS_STEPS.length - 1 && idx % 3 !== 2 && (
                  <div className="absolute top-10 left-[calc(100%_+_0px)] w-8 h-px bg-gradient-to-r from-accent/40 to-transparent hidden xl:block" />
                )}

                <div className="card-dark p-7 rounded-2xl h-full group hover:border-accent/30 transition-all duration-300">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-carbon text-xs font-black">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-base leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = iconMap[step.icon] || MessageCircle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-5 pl-2"
                >
                  {/* Circle on line */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/40 flex items-center justify-center relative z-10">
                      <Icon size={16} className="text-accent" />
                    </div>
                  </div>

                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-accent text-xs font-black">0{step.step}</span>
                      <h3 className="font-bold text-white text-sm">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
