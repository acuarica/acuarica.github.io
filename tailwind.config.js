/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {},
  },
  plugins: [
    // https://daisyui.com/docs/layout-and-typography/
    // https://tailwindcss.com/docs/typography-plugin#installation
    require('@tailwindcss/typography'),

    // https://daisyui.com/docs/install/
    require("daisyui")
  ],

  // https://daisyui.com/docs/config/
  daisyui: {
    // https://daisyui.com/docs/config/#themes
    themes: ["dark"],
  },
}
