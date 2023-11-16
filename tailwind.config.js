/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('https://i.ibb.co/5jKsXYh/banner.jpg')",
      },
      colors : {
        "primary-c" : '#69BB48',
        "secendary-c" : '#EFF5F9'
      },
      fontFamily : {
        "Roboto": "'Roboto', Noto Rashi Hebrew",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
