module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: { xs: "475px" },
      fontFamily: {
        primary: ["ABeeZee", "sans-serif"],
        accent: ["Oswald", "sans-serif"],
        "accent-2": ["Anton", "sans-serif"],
        bungee: ["Bungee", "cursive"],
      },
      colors: {
        "tr-green": "#1F6D37",
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
    },
  },
  plugins: [],
};
