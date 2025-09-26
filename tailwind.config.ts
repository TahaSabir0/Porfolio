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
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#6D28D9",
          50: "#F3F0FF",
          100: "#E9E5FF",
          200: "#D6CEFF",
          300: "#B794F6",
          400: "#9F7AEA",
          500: "#6D28D9",
          600: "#5B21B6",
          700: "#4C1D95",
          800: "#3B0764",
          900: "#2D1B69",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "6xl": ["4rem", { lineHeight: "1.1" }],
        "7xl": ["5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1.1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        typewriter: "typewriter 2s steps(20) 1s forwards",
        blink: "blink 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "currentColor" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        apple: "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
        "apple-lg":
          "0 8px 40px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
        glow: "0 0 20px rgba(109, 40, 217, 0.4), 0 0 40px rgba(109, 40, 217, 0.2)",
        "glow-lg":
          "0 0 30px rgba(109, 40, 217, 0.5), 0 0 60px rgba(109, 40, 217, 0.3)",
        "glow-xl":
          "0 0 40px rgba(109, 40, 217, 0.6), 0 0 80px rgba(109, 40, 217, 0.4)",
        "glow-2xl":
          "0 0 50px rgba(109, 40, 217, 0.7), 0 0 100px rgba(109, 40, 217, 0.5), 0 0 150px rgba(109, 40, 217, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
