/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-purple": "#A445ED",
        "black-bg": "#050505",
        "primary-text": "#2D2D2D",
        "gray-text": "#757575",
        "gray-bg": "#1F1F1F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
