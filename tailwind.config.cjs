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
        primary: "#00F0FF", // Cyber Cyan
        secondary: "#7000FF", // Neon Purple
        tertiary: "#FF00AA", // Hot Pink (Accent)
        dark: {
          DEFAULT: "#030014", // Deep Space Blue/Black
          100: "#0F172A",
          200: "#1E293B",
        },
        light: {
          DEFAULT: "#E2E8F0", // Off-white/holographic silver
          100: "#F1F5F9",
        }
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        syncopate: ["Syncopate", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
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
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00F0FF, 0 0 10px #00F0FF" },
          "100%": { boxShadow: "0 0 20px #00F0FF, 0 0 30px #00F0FF" },
        }
      }
    },
  },
  plugins: [],
}
