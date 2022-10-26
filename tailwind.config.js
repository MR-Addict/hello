module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#FBFBFB",
        "main-dark-bg": "#20232A",
        "main-secondary-dark-bg": "#33373E",
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
