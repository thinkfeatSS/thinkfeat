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
      },
      colors: {
        "primary": "#FCF5A5",
        "on-primary": "#1C1A03", 
        "primary-container": "#4C4A33",
        "on-primary-container": "#F5F4EA",
        "secondary": "#8C6239",
        "on-secondary": "#F6F1ED",
        "secondary-container": "#F8C99B",
        "on-secondary-container": "#1A0E03",
        "surface-color": "#1F1F1F",
        "on-surface-color": "#F3F3F3",
        "error-red": "#BA1A1A",
        "success-green": "#14532d",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
