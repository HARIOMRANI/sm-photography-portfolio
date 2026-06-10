/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        surface: '#131313',
        charcoal: '#2A2A2A',
        gold: '#D4AF37',
        bronze: '#806031',
        pitchblack: '#050505',
      },
      fontFamily: {
        headline: ['"Bodoni Moda"', 'serif'],
        body: ['"Hanken Grotesk"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      spacing: {
        unit: '8px',
      }
    },
  },
  plugins: [],
}
