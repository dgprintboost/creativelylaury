/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        cream: '#F7F0EA',
        sand: '#EFE3D8',
        rosegold: '#C9A08A',
        cocoa: '#3B2C25',
        mocha: '#8A6F60',
      },
      backgroundImage: {
        'main-gradient': 'radial-gradient(circle at top right, rgba(201, 160, 138, 0.22), transparent 45%), radial-gradient(circle at bottom left, rgba(226, 199, 178, 0.28), transparent 45%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease both',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
