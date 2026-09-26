/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navy: {
          900: '#0B1B32', // Deep Navy
          950: '#071426', // Midnight Navy
        },
        charcoal: {
          DEFAULT: '#151A21'
        },
        ivory: {
          DEFAULT: '#F5F1E8', // Warm Ivory
          dark: '#EAE5D9',
        },
        gold: {
          DEFAULT: '#C9A646', // Champagne Gold
          light: '#D8BE72',   // Soft Gold
          dark: '#8F7440',    // Muted Bronze
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'soft': '0 20px 40px -15px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
