/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,vue}"];
export const theme = {
  extend: {
    fontFamily: {
      'heading': ['Moul', 'Amulya-Bold'],
      'display': ['Amulya-Bold', 'serif'],
      'body': ['Synonym-Regular', 'sans-serif'],
    }, colors: {
      "color-accent": "#f16765",
      "text-heading": "#000000",
      "bg-gray": "#f0eceb",
      "bg-color": "#faf8f9",
      "text-body": "#1e1e1e",
    }
  },
};
export const plugins = [];