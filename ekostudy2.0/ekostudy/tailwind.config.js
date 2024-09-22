/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Onest', 'serif']
    },
    extend: {},
    screens: {
      'sm':'320px',
      'bsm':'375px',
      'md':'425px',
      'lg':'768px',
      'xl':'1024px',
    },
  },
  plugins: [],
}