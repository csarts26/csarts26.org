/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { 
        'inter': ['Inter', 'sans-serif'] 
      } 
    },
    colors: {
      'brown': '#3C2B04',
      'yellow': '#FDB815',
      'black': '#000',
      'white': '#FFF',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

