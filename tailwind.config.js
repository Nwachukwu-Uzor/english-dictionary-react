/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-purple": "#A445ED",
        "black-bg": "#050505",
        "primary-text": "#2D2D2D",
        "gray-text": "#757575"
      },
    },
  },
  plugins: [],
};
