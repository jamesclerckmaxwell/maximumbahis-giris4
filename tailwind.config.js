/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          darker: "rgb(var(--color-primary-darker))",
        },

        dark: "rgb(var(--color-dark))",
        black: "rgb(var(--color-black))",
        light: "rgb(var(--color-light))",
        white: "rgb(var(--color-white))",
      },

      borderRadius: {
        DEFAULT: ".7rem",
      },

      transitionDuration: {
        DEFAULT: ".3s",
      },

      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
    },
  },
  plugins: [],
};
