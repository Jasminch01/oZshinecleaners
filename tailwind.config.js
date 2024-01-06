/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens : {
      'xsm' : {max : '360px'},
      // => @media (max-width: 320px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
