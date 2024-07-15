/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes:{
        scroll:{
          "0%":{transform:"translate(0)"},
          "100%":{transform:"translate(-360%)"},

        }
      },
      animation:{
        scroll:"scroll 120s linear infinite"
      }
    },
  },
  plugins: [],
}

