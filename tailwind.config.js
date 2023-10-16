/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#393939',
        'blue': '#3B8BEB',
        'green': '#5CD595',
        'red': '#EF5C5C',
      },
      screens: {
        'xsm': '395px',
      }
    }
  },
  plugins: [],
}
