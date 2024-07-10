/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightDarkModeBg: "rgb(86, 84, 84)",
        darkerDarkModeBg: "rgba(30, 30, 30, 1)",
        lightGreen: "rgba(76, 187, 23, 1)",
        lightModeBg: "rgba(217, 217, 217, 1)",
        uniqueDark: "#373636",
      },
    },
  },
  plugins: [],
};
