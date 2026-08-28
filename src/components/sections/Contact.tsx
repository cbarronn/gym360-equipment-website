"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { SITE_CONFIG, CONTACT_REASONS, EQUIPMENT_INTEREST } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────
// FORMSPREE: Crea tu cuenta gratuita en https://formspree.io
// Reemplaza "YOUR_FORM_ID" con el ID de tu formulario.
// Ejemplo: si tu endpoint es https://formspree.io/f/xpwzabcd
// entonces FORMSPREE_ID = "xpwzabcd"
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = "YOUR_FORM_ID";

const BUDGETS = [
  "Menos de $50,000",
  "$50,000 – $150,000",
  "$150,000 – $300,000",
  "$300,000 – $600,000",
  "Más de $600,000",
  "Por definir / No especificado",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: data.nombre,
          empresa: data.empresa || "",
          telefono: data.telefono,
          correo: data.correo,
          _replyto: data.correo,
          ciudad: data.ciudad,
          tipoProyecto: data.tipoProyecto,
          equipos: data.equipos || "",
          presupuesto: data.presupuesto || "",
          mensaje: data.mensaje,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hola, me interesa recibir información sobre equipos de gimnasio de GYM 360 Equipment."
  )}`;

  const inputClass = (hasError: boolean) =>
    `w-full bg-steel border ${
      hasError ? "border-red-500/60" : "border-white/10"
    } rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200`;

  return (
    <section id="contacto" className="section-padding section-dark" ref={ref}>
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
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Contacto</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Hablemos de tu <span className="text-accent">proyecto</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Completa el formulario y un asesor de GYM 360 Equipment se comunicará contigo
            a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-bold text-white text-xl mb-6">Información de contacto</h3>
              <div className="space-y-5">
                {[
                  { Icon: Phone, label: "Teléfono", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                  { Icon: Mail, label: "Correo electrónico", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                  { Icon: MapPin, label: "Ubicación", value: `${SITE_CONFIG.city} · ${SITE_CONFIG.coverage}`, href: undefined },
                  { Icon: Clock, label: "Horario de atención", value: SITE_CONFIG.hours, href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp direct */}
            <div className="card-dark p-6 rounded-2xl border border-[#25d366]/20">
              <p className="text-white font-bold mb-2">¿Necesitas una respuesta inmediata?</p>
              <p className="text-gray-400 text-sm mb-4">
                Escríbenos directamente por WhatsApp y te atendemos en minutos.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Abrir WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card-dark p-8 md:p-10 rounded-2xl">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-accent" />
                  </div>
                  <h3 className="font-black text-white text-2xl mb-3">
                    ¡Solicitud enviada con éxito!
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Gracias por contactarnos. Un asesor de GYM 360 Equipment se comunicará contigo a la brevedad.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 btn-secondary"
                  >
                    Enviar otra solicitud
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Nombre *
                      </label>
                      <input
                        {...register("nombre")}
                        type="text"
                        placeholder="Tu nombre completo"
                        className={inputClass(!!errors.nombre)}
                      />
                      {errors.nombre && (
                        <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Empresa
                      </label>
                      <input
                        {...register("empresa")}
                        type="text"
                        placeholder="Nombre de tu empresa (opcional)"
                        className={inputClass(false)}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Teléfono *
                      </label>
                      <input
                        {...register("telefono")}
                        type="tel"
                        placeholder="+52 (55) 0000-0000"
                        className={inputClass(!!errors.telefono)}
                      />
                      {errors.telefono && (
                        <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Correo electrónico *
                      </label>
                      <input
                        {...register("correo")}
                        type="email"
                        placeholder="tu@correo.com"
                        className={inputClass(!!errors.correo)}
                      />
                      {errors.correo && (
                        <p className="text-red-400 text-xs mt-1">{errors.correo.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Ciudad *
                      </label>
                      <input
                        {...register("ciudad")}
                        type="text"
                        placeholder="Tu ciudad"
                        className={inputClass(!!errors.ciudad)}
                      />
                      {errors.ciudad && (
                        <p className="text-red-400 text-xs mt-1">{errors.ciudad.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Motivo de consulta *
                      </label>
                      <select
                        {...register("tipoProyecto")}
                        className={`${inputClass(!!errors.tipoProyecto)} appearance-none`}
                        defaultValue=""
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        {CONTACT_REASONS.map((r) => (
                          <option key={r} value={r} className="bg-steel">{r}</option>
                        ))}
                      </select>
                      {errors.tipoProyecto && (
                        <p className="text-red-400 text-xs mt-1">{errors.tipoProyecto.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Equipos de interés
                      </label>
                      <select
                        {...register("equipos")}
                        className={`${inputClass(false)} appearance-none`}
                        defaultValue=""
                      >
                        <option value="" className="bg-steel">Selecciona (opcional)</option>
                        {EQUIPMENT_INTEREST.map((e) => (
                          <option key={e} value={e} className="bg-steel">{e}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Presupuesto estimado
                      </label>
                      <select
                        {...register("presupuesto")}
                        className={`${inputClass(false)} appearance-none`}
                        defaultValue=""
                      >
                        <option value="" className="bg-steel">Selecciona (opcional)</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b} className="bg-steel">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                      Mensaje *
                    </label>
                    <textarea
                      {...register("mensaje")}
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto: espacio disponible, número de usuarios, equipos que necesitas, fechas, etc."
                      className={`${inputClass(!!errors.mensaje)} resize-none`}
                    />
                    {errors.mensaje && (
                      <p className="text-red-400 text-xs mt-1">{errors.mensaje.message}</p>
                    )}
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">
                        Ocurrió un error al enviar. Intenta de nuevo o contáctanos directamente por WhatsApp.
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed py-4 text-base"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      "Enviar solicitud"
                    )}
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    Al enviar este formulario aceptas nuestra{" "}
                    <a href="/privacidad" className="text-gray-400 hover:text-white underline">
                      política de privacidad
                    </a>
                    . Toda la información está protegida.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
