/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0d0b09',
        charcoal: '#15120f',
        bronze: '#ba8c4d',
        bronzeSoft: '#d2ac78',
        beige: '#eadac0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(186, 140, 77, 0.45)',
      },
    },
  },
  plugins: [],
};
