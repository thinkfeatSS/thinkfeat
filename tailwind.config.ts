import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    aspectRatio: {
      'goldenRatio': '1.618',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(45deg, var(--tw-gradient-stops))",
      },
      colors: {
        // Theme Colors - Optimized for better button readability
        primary: "#8C6239", // Dark brown for light theme
        secondary: "#FCF5A5", // Light yellow for dark theme
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#1F1F1F",
        },
        surface: {
          DEFAULT: "#F8F8F8",
          dark: "#2A2A2A",
        },
        text: {
          DEFAULT: "#1A1A1A", // Darker for better contrast
          dark: "#FFFFFF", // Pure white for dark theme
          secondary: {
            DEFAULT: "#4A5568", // Better contrast gray
            dark: "#A0AEC0", // Lighter gray for dark theme
          },
          muted: {
            DEFAULT: "#718096", // Muted text for less emphasis
            dark: "#718096", // Consistent muted color
          },
        },
        border: {
          DEFAULT: "#E0E0E0",
          dark: "#404040",
        },
        // Legacy colors for backward compatibility
        "light": "#f7f7f7",
        "on-primary": "#1C1A03", 
        "primary-container": "#4C4A33",
        "on-primary-container": "#F5F4EA",
        "on-secondary": "#F6F1ED",
        "secondary-container": "#F8C99B",
        "on-secondary-container": "#1A0E03",
        "surface-color": "#1F1F1F",
        "on-surface-color": "#F3F3F3",
        "error-red": "#BA1A1A",
        "success-green": "#14532d",
        "foreground": "hsl(var(--foreground))",
        "muted": {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "accent": {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "popover": {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        "card": {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 3s ease infinite",
        "rotate-slow": "rotate 20s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
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
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(252, 245, 165, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(252, 245, 165, 0.8)" },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
