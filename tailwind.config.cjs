/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ["Josefin Sans", "sans-serif"],
        "cardo": ["Cardo", "serif"]
      }
    },
  },
  plugins: [],
}