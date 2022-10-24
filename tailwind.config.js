module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#FBFBFB",
        "main-dark-bg": "#EFEFEF",
        "main-theme": "#1A97F5",
      },
      backgroundImage: {
        navlogo: "url('data/navbg.jpg')",
      },
    },
  },
  plugins: [],
};
