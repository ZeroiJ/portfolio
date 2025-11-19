/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-bg': '#202020',
        'retro-text': '#e0e0e0',
        'retro-primary': '#ff0055', // Pinkish red
        'retro-secondary': '#00ccff', // Cyan
        'retro-accent': '#ffcc00', // Yellow
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'], // We'll need to import this
        'mono': ['"VT323"', 'monospace'],
      },
    },
  },
  plugins: [],
}
