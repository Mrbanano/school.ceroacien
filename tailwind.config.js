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
      },
    },
  },
  plugins: [],
};
