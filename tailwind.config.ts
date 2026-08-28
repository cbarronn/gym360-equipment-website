import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#090909",
        graphite: "#181818",
        steel: "#2A2A2A",
        accent: "#B7FF00",
        "accent-dim": "#8FCC00",
        "gray-light": "#E5E7EB",
        "gray-mid": "#9CA3AF",
        "gray-dark": "#374151",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #090909 0%, #181818 50%, #090909 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #B7FF00 0%, #8FCC00 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(42,42,42,0.8) 0%, rgba(24,24,24,0.95) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #090909 0%, #181818 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-x": "scrollX 30s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #B7FF00, 0 0 10px #B7FF00" },
          "100%": { boxShadow: "0 0 10px #B7FF00, 0 0 30px #B7FF00, 0 0 60px rgba(183,255,0,0.3)" },
        },
      },
      boxShadow: {
        accent: "0 0 20px rgba(183,255,0,0.3)",
        "accent-strong": "0 0 40px rgba(183,255,0,0.5)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
