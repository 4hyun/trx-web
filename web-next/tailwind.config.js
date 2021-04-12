module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      accent: ["Oswald", "sans-serif"],
    },
    extend: {
      colors: {
        "tr-green": "#1F6D37",
        "tr-black": "#232323",
        "tr-white": "#F9F9FB",
        "tr-gray": "#C4C4C4",
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
    },
  },
  plugins: [],
};
