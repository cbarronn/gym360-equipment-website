# GYM 360 Equipment — Sitio Web Corporativo

Sitio web publicitario profesional para **GYM 360 Equipment**, empresa especializada en la comercialización, importación, instalación, mantenimiento y refacciones de equipos para gimnasio en México.

---

## 🚀 Inicio rápido

### Requisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Edita .env.local con tus valores reales

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ⚙️ Variables de entorno

Copia `.env.local.example` a `.env.local` y configura los valores:

| Variable | Descripción | Requerida |
|---|---|---|
| `RESEND_API_KEY` | API Key de [Resend](https://resend.com) para envío de correos | Opcional |
| `CONTACT_EMAIL` | Correo donde recibirás las solicitudes | Recomendada |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp (código de país + número, sin espacios) | Recomendada |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | Opcional |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID | Opcional |

---

## 📦 Tecnología

| Tecnología | Propósito |
|---|---|
| Next.js 14 (App Router) | Framework React con SSR |
| TypeScript | Tipado estático |
| Tailwind CSS | Estilos utilitarios |
| Framer Motion | Animaciones |
| React Hook Form + Zod | Formularios y validación |
| Resend | Correos transaccionales |
| Lucide React | Iconografía |

---

## ✏️ Personalización

Edita `src/lib/constants.ts` para cambiar:
- **SITE_CONFIG**: teléfono, correo, WhatsApp, ciudad, horarios, redes sociales
- **CATEGORIES**: categorías de equipos
- **SERVICES**: servicios ofrecidos
- **PROJECT_TYPES**: tipos de proyecto
- **ADVANTAGES**: ventajas competitivas

Reemplaza las imágenes en `public/images/` con fotografías reales.

---

## 🌐 Despliegue

### Vercel (recomendado)

```bash
npx vercel
```

Configura las variables de entorno en el dashboard de Vercel.

---

## 📧 Configurar correos

1. Crea cuenta en [resend.com](https://resend.com)
2. Obtén tu API Key
3. Configura `RESEND_API_KEY` y `CONTACT_EMAIL` en `.env.local`

---

© 2024 GYM 360 Equipment. Todos los derechos reservados.
