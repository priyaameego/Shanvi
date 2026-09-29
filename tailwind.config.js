/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F6F8FB',
          alt: '#FAFBFD',
          white: '#FFFFFF'
        },
        foreground: '#102A43',
        navy: {
          800: '#1464A5',
          900: '#102A43',
          footer: '#102A43'
        },
        charcoal: {
          DEFAULT: '#475467'
        },
        ivory: {
          DEFAULT: '#F1F5F9'
        },
        accent: {
          DEFAULT: '#165396',
          hover: '#104075',
          light: '#EBF2FA',
          green: '#18A889'
        },
        gold: {
          DEFAULT: '#C6A15B'
        },
        muted: {
          DEFAULT: '#667085'
        },
        border: {
          light: '#E2E8F0',
          medium: '#E4EAF0'
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
