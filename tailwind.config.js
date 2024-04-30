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
      },
      dropShadow: {
        "lg-white": "0px 0px 1px rgb(255, 255, 255, 1)",
      }
    },
  },
  plugins: [],
}


