/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Amulya-Bold', 'serif'],
        'body': ['Synonym-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}