/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*{.html,js}", "./src/components/*.js"],
  theme: {
    fontSize: {
      'sm': '0.75rem',
      'base': '1rem',
      'lg': '1.333rem',
      'xl': '1.776rem',
      '2xl': '2.367rem',
      '3xl': '3.155rem',
      '4xl': '4.190rem',
      '5xl': '5.586rem'
    },
    extend: {
      colors: {
        "accent": "#F0A81D",
        "secondary": "#4B4741",
        "background": "#FFFFFF",
        "background-secondary": "#34312E",
        "font": "#242424",
        "font-secondary": "#636B78",
      },
    },
  },
  plugins: [],
}

