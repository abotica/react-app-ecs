const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "navbar-black": "#101415",
        "edit-yellow": "#DBAF52",
        "edit-blue": "#0088AF",
        "instagram": "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)"
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
