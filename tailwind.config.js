/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        primary: "#004aad",     // Royal Blue - rgba(0, 74, 173, 1)
        background: "#000000",  // Black - rgba(0, 0, 0, 1)
        text: "#ffffff",        // White - rgba(255, 255, 255, 1)
        accent: "#00e5d1",      // Bright Turquoise - rgba(0, 229, 209, 1)
        secondary: "#8a939b",   // Slate Gray - rgba(138, 147, 155, 1)
        highlight: "#fad12b",   // Golden Yellow - rgba(250, 209, 43, 1)

      },
      fontFamily: {
        // sans: ['Inter', 'sans-serif'],
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Figtree', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        }
      },
      animation: {
        shine: 'shine 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 