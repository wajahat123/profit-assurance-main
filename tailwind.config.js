/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        "sm-down": { max: "575px" },
        sm: "576px",
        "md-down": { max: "767px" },
        md: "768px",
        "lg-down": { max: "991px" },
        lg: "992px",
        "xl-down": { max: "1199px" },
        xl: "1200px",
      },
      colors: {
        primary: {
          green: '#8ec63f',
          orange: '#f15930',
          blue: '#12d2d4',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
