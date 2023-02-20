/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
