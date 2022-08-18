/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softgray: "#f7f7f7",
        darkBg: "#202124",
        primary: "#403BF9",
        ExtraordinariosText: "#FBE400",
        Extraordinariosbg1: "#520BF7",
        Extraordinariosbg2: "#5F04E4",
      },
    },
  },
  plugins: [],
};
