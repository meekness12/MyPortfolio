module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#ffffff", // Pure white for high contrast accents
        secondary: "#a1a1aa", // Zinc-400 for secondary text
        tertiary: "#3b82f6", // Subtle blue accent
        dark: {
          DEFAULT: "#09090b", // Deep black (Zinc-950)
          100: "#18181b", // Zinc-900
          200: "#27272a", // Zinc-800
        },
        light: {
          DEFAULT: "#fafafa", // Off-white
          100: "#f4f4f5", // Zinc-100
        }
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255,255,255,0.1)" },
          "100%": { boxShadow: "0 0 15px rgba(255,255,255,0.2)" },
        }
      }
    },
  },
  plugins: [],
}
