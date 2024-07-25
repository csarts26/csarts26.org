/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#3C2B04',
        'yellow': '#FDB815',
        'black': '#000',
        'white': '#FFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
