/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "card": "#101011",
        "dark-bg": "#0D0D0E",
        "wangkan-border": "#292524",
        "lamp_card": "rgba(0, 0, 0, 0.31)",
        "lamp_card_border": "rgba(255, 255, 255, 0.08)",
        "wk_blur":"rgba(161, 171, 255, 0.28)"
      },
      
    },
  },
  plugins: [],
}