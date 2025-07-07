/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/features/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        "2xl": "1400px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Custom warm gray palette (8 shades)
        "warm-gray": {
          50: "hsl(30, 10%, 98%)", // Almost white with warm undertone
          100: "hsl(30, 8%, 95%)", // Very light warm gray
          200: "hsl(30, 6%, 85%)", // Light warm gray
          300: "hsl(30, 5%, 70%)", // Medium-light warm gray
          400: "hsl(30, 4%, 55%)", // Medium warm gray
          500: "hsl(30, 3%, 40%)", // Medium-dark warm gray
          600: "hsl(30, 4%, 30%)", // Dark warm gray
          700: "hsl(30, 5%, 20%)", // Very dark warm gray
          800: "hsl(30, 6%, 12%)", // Almost black with warmth
          900: "hsl(30, 8%, 8%)", // Rich black with warm undertone
        },
        // Bordeaux/Burgundy palette (sophisticated, expensive)
        bordeaux: {
          50: "hsl(345, 50%, 96%)", // Very light bordeaux tint
          100: "hsl(345, 45%, 90%)", // Light bordeaux tint
          200: "hsl(345, 40%, 80%)", // Soft bordeaux
          300: "hsl(345, 45%, 65%)", // Medium-light bordeaux
          400: "hsl(345, 50%, 50%)", // Medium bordeaux
          500: "hsl(345, 60%, 35%)", // Base bordeaux (button color)
          600: "hsl(345, 65%, 28%)", // Dark bordeaux
          700: "hsl(345, 70%, 22%)", // Very dark bordeaux
          800: "hsl(345, 75%, 18%)", // Deep bordeaux
          900: "hsl(345, 80%, 15%)", // Darkest bordeaux
        },
        // Warm Gold palette (luxury accent)
        gold: {
          50: "hsl(45, 50%, 96%)", // Very light gold tint
          100: "hsl(45, 45%, 90%)", // Light gold tint
          200: "hsl(45, 40%, 80%)", // Soft gold
          300: "hsl(45, 45%, 70%)", // Medium-light gold
          400: "hsl(45, 50%, 60%)", // Medium gold
          500: "hsl(45, 60%, 50%)", // Base gold (#D4AF37)
          600: "hsl(45, 65%, 40%)", // Dark gold
          700: "hsl(45, 70%, 30%)", // Very dark gold
          800: "hsl(45, 75%, 25%)", // Deep gold
          900: "hsl(45, 80%, 20%)", // Darkest gold
        },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      // Premium Typography System
      fontFamily: {
        serif: ["Playfair Display", "serif"], // For headings - medical authority
        sans: ["Inter", "sans-serif"], // For body text - modern accessibility
      },
      // Typography scale (elder-friendly)
      fontSize: {
        xs: ["12px", { lineHeight: "1.6" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.5" }], // Base size
        lg: ["18px", { lineHeight: "1.5" }],
        xl: ["20px", { lineHeight: "1.4" }],
        "2xl": ["24px", { lineHeight: "1.3" }],
        "3xl": ["30px", { lineHeight: "1.2" }],
        "4xl": ["36px", { lineHeight: "1.1" }],
        "5xl": ["48px", { lineHeight: "1" }],
      },
      // Non-linear spacing scale
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px", // Base
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        24: "96px",
        32: "128px",
        48: "192px",
        64: "256px",
      },
      // 5-level elevation system
      boxShadow: {
        subtle: "0 2px 4px rgba(0,0,0,0.1)",
        small: "0 4px 6px rgba(0,0,0,0.1)",
        medium: "0 10px 15px rgba(0,0,0,0.1)",
        large: "0 20px 25px rgba(0,0,0,0.15)",
        xlarge: "0 25px 50px rgba(0,0,0,0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
