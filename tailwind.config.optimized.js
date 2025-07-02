/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}",
    // Ensure all component files are included
    "./src/components/**/*.{js,jsx}",
    "./src/features/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        "2xl": "1400px", // Add larger breakpoint
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Simplified color system - remove duplicates
        "warm-gray": {
          50: "hsl(30, 10%, 98%)",
          100: "hsl(30, 8%, 95%)",
          200: "hsl(30, 6%, 85%)",
          300: "hsl(30, 5%, 70%)",
          400: "hsl(30, 4%, 55%)",
          500: "hsl(30, 3%, 40%)",
          600: "hsl(30, 4%, 30%)",
          700: "hsl(30, 5%, 20%)",
          800: "hsl(30, 6%, 12%)",
          900: "hsl(30, 8%, 8%)",
        },
        bordeaux: {
          50: "hsl(345, 50%, 96%)",
          100: "hsl(345, 45%, 90%)",
          200: "hsl(345, 40%, 80%)",
          300: "hsl(345, 45%, 65%)",
          400: "hsl(345, 50%, 50%)",
          500: "hsl(345, 60%, 35%)",
          600: "hsl(345, 65%, 28%)",
          700: "hsl(345, 70%, 22%)",
          800: "hsl(345, 75%, 18%)",
          900: "hsl(345, 80%, 15%)",
        },
        gold: {
          50: "hsl(45, 50%, 96%)",
          100: "hsl(45, 45%, 90%)",
          200: "hsl(45, 40%, 80%)",
          300: "hsl(45, 45%, 70%)",
          400: "hsl(45, 50%, 60%)",
          500: "hsl(45, 60%, 50%)",
          600: "hsl(45, 65%, 40%)",
          700: "hsl(45, 70%, 30%)",
          800: "hsl(45, 75%, 25%)",
          900: "hsl(45, 80%, 20%)",
        },
        // Use CSS variables for theme colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.6" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.5" }],
        lg: ["18px", { lineHeight: "1.5" }],
        xl: ["20px", { lineHeight: "1.4" }],
        "2xl": ["24px", { lineHeight: "1.3" }],
        "3xl": ["30px", { lineHeight: "1.2" }],
        "4xl": ["36px", { lineHeight: "1.1" }],
        "5xl": ["48px", { lineHeight: "1" }],
        "6xl": ["60px", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0,0,0,0.1)",
        small: "0 4px 6px rgba(0,0,0,0.1)",
        medium: "0 10px 15px rgba(0,0,0,0.1)",
        large: "0 20px 25px rgba(0,0,0,0.15)",
        xlarge: "0 25px 50px rgba(0,0,0,0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add custom utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
