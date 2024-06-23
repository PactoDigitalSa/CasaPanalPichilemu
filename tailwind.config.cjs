/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          yellow: '#FFC800',
          white: '#FFFFFF',
        },
        secondary: {
          green: '#01BF62',
          red: '#DF0C0A',
          blue: '#0E67E0',
          orange: '#FFA419',
          cyan: '#0197B2',
        },
      },
      fontFamily: {
        sans: ["Bricolage Grotesque Variable", "Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        patrickHand: ["Patrick Hand", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
