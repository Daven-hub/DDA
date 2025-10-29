import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005B99", // Bleu principal : confiance, professionnalisme
          light: "#007ACC",   // Survols, liens
          dark: "#003F6B",    // Fonds foncés, header
        },
        secondary: {
          DEFAULT: "#B00020", // Rouge profond : énergie maîtrisée
          light: "#D32F2F",
          dark: "#7F0000",
        },
        accent: {
          yellow: "#FFD700", // Jaune vif mais équilibré
          green: "#00A651",  // Croissance, fiabilité
          blue: "#007ACC",   // Accent clair
          red: "#C62828",    // Alerte / erreur
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          black: "#000000",
          white: "#FFFFFF",
        },
      },


      fontFamily: {
        sans: ["'Poppins'", "ui-sans-serif", "system-ui"],
        heading: ["'Montserrat'", "ui-sans-serif", "system-ui"],
        serif: ["'Lora'", "serif"],
        artistic: ["'Dancing Script'", "cursive"],
      },


      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },


      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },


      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },


      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        bold: "0 6px 20px rgba(0, 0, 0, 0.15)",
        card: "0 10px 25px rgba(0, 0, 0, 0.1)",
        glow: "0 0 15px rgba(0, 102, 179, 0.5)", // effet lumineux sur hover
      },


      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.8s ease-in-out",
        slideDown: "slideDown 0.8s ease-in-out",
        scaleIn: "scaleIn 0.6s ease-out",
        rotate: "rotate 6s linear infinite",
      },


      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },


      darkMode: "class",
    },
  },
  plugins: [
    scrollbarHide,
  ],
};

export default config;
