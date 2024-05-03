const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "edit-yellow": "#DBAF52",
        "edit-blue": "#0088AF",
        "edit-red": "#D3462C"
      },
      dropShadow: {
        "lg-white": "0px 0px 1px rgb(255, 255, 255, 1)",
      },
      fontFamily: {
        "bolts-sf": ["Bolts SF", "sans-serif"],
        "righteous": ["Righteous", "sans-serif"],
        "bungee": ["Bungee", "sans-serif"],
        "mina": ["Mina", "arial"]
      },
      backgroundImage: {
        "title-background": "url('/src/assets/design/zbrljana-podloga.svg')"
      }
    },
  },
  plugins: [],
}
