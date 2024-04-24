/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "navbar-black": "#101415",
        "edit-yellow": "#DBAF52",
        "edit-blue": "#0088AF",
      }
    },
  },
  plugins: [],
}

