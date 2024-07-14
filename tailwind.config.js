/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      xxl: { min: "1441px" },
      xl: { max: "1440px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "426px" },
      xs: { max: "320px" },
    },
  }
  },
  plugins: [],
}

