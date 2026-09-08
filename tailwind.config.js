/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#3ecf8e',
        'brand-dark-green': '#006239',
        'surface-base': '#000000',
        'card-surface': '#1a1a1a',
        'foreground-white': '#ffffff',
        'muted-text': '#a0a0a0',
        'border-subtle': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}
