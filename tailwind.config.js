/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
        fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        animation: {
          gradient: "gradient 8s linear infinite",
        },
        keyframes: {
          gradient: {
            to: {
              backgroundPosition: "var(--bg-size) 0",
            },
          },
        },
      },
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}