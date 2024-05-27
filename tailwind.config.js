/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      colors: {
        'primary': '#000080',
        'secondary': '#102C57',
        'background': '#F5F4FE',
        'fontcolor': '#5E5E5C',
        'fontcolorDark': '#5B5B5E',
      },
      fontFamily: {
        'roboto' : ["Roboto","sans-serif"],
        'archivo' : ["Archivo","sans-serif"],
      }
    },
  },
  plugins: [],
};
