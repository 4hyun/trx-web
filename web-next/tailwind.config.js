const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: { xs: "475px", ...defaultTheme.screens },
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      fontFamily: {
        primary: ["ABeeZee", "sans-serif"],
        accent: ["Oswald", "sans-serif"],
        "accent-2": ["Anton", "sans-serif"],
        bungee: ["Bungee", "cursive"],
      },
      colors: {
        "tr-green": "#1F6D37",
        "tr-green-light": "#8DAB68",
        "tr-black": "#232323",
        "tr-white": "#F9F9FB",
        "tr-gray": "#C4C4C4",
        "hover-green": { 100: "#96D9A3" },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      textColor: (theme) => theme("colors"),
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
      fill: ["hover", "focus"],
      transform: ["hover", "focus"],
      cursor: ["hover", "focus"],
    },
  },
  plugins: [],
}
