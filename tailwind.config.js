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
        PodcastBg: "#424242",
      },
      animation: {
        fondoAnim: "fondoAnim 20s infinite alternate  ease-in-out ",
      },
      keyframes: {
        fondoAnim: {
          "0%": { backgroundPosition: "left" },
          "100%": { backgroundPosition: "right" },
        },
      },
    },
  },
  plugins: [],
};
