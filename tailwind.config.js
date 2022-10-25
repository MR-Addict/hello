module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#FBFBFB",
        "main-dark-bg": "#B2B2B2",
        "main-theme": "#FFA500",
        "navbar-theme": "#150050",
      },
      backgroundImage: {
        welcome: "url('./data/images/welcome.png')",
      },
      fontFamily: {
        cursive: ["cursive"],
      },
    },
  },
  plugins: [],
};
