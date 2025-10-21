/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {keyframes: {
    'fade-in': {
      '0%': { opacity: '0', transform: 'translateY(-4px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  animation: {
    'fade-in': 'fade-in 1.8s ease-out forwards',
  },},
  },
  plugins: [],
}
