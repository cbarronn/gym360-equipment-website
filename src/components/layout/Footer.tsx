"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE_CONFIG } from "@/lib/constants";

const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#090909" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hola, me interesa recibir información sobre equipos de gimnasio de GYM 360 Equipment."
  )}`;

  return (
    <footer className="bg-graphite border-t border-white/5">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                <span className="font-black text-carbon text-sm">360</span>
              </div>
              <div>
                <p className="font-black text-white text-lg leading-none">GYM <span className="text-accent">360</span></p>
                <p className="text-[11px] text-gray-400 tracking-[0.15em] uppercase">Equipment</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Soluciones integrales en equipamiento fitness. Venta, importación, instalación,
              mantenimiento y refacciones para gimnasios en toda la República Mexicana.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: SITE_CONFIG.social.facebook, Icon: SocialIcons.Facebook, label: "Facebook" },
                { href: SITE_CONFIG.social.instagram, Icon: SocialIcons.Instagram, label: "Instagram" },
                { href: SITE_CONFIG.social.youtube, Icon: SocialIcons.Youtube, label: "YouTube" },
                { href: SITE_CONFIG.social.linkedin, Icon: SocialIcons.Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-steel flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 hover:border-accent/30 border border-transparent transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#servicios"
                    className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-200 group-hover:w-3" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-steel flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Phone size={14} className="text-accent" />
                  </div>
                  <span className="text-sm">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-steel flex items-center justify-center group-hover:bg-[#25d366]/10 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25d366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-steel flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Mail size={14} className="text-accent" />
                  </div>
                  <span className="text-sm">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-steel flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span className="text-sm">{SITE_CONFIG.city} · Cobertura nacional</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-steel flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-accent" />
                </div>
                <span className="text-sm">{SITE_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {currentYear} GYM 360 Equipment. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacidad" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Aviso de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
