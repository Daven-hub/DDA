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
        primary: "#0066B3", // bleu profond (logo)
        secondary: "#BA0000", // rouge
        accent: {
          yellow: "#FFD300", // jaune vif
          green: "#00843D",  // vert
          blue: "#0066B3",   // bleu
          red: "#BA0000",    // rouge
        },
        neutral: {
          black: "#000000",
          white: "#FFFFFF",
          gray: "#6B7280",
        },
      },

      fontFamily: {
        sans: ["'Poppins'", "ui-sans-serif", "system-ui"], // lisible et moderne
        heading: ["'Montserrat'", "ui-sans-serif", "system-ui"], // titres élégants
        artistic: ["'Dancing Script'", "cursive"], // pour rappeler "galerie"
        serif: ["'Lora'", "serif"], // pour un ton raffiné
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
        glow: "0 0 15px rgba(0, 102, 179, 0.5)", // effet artistique
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
    },
  },
  plugins: [
    scrollbarHide,
  ],
};

export default config;
