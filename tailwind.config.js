/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EE59B3",
        "secondary": "#684FA0",
        "secondary-light": "#a185de",
      },
    },
  },
  plugins: [],
}