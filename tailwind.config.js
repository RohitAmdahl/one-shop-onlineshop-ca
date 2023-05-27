module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "420px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      fontFamily: {
        pins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        size: "6.5rem",
      },
      colors: {
        pink: "#FFE4E0",
        primary: "#1000CB",
        lightBlue: "#301FFD",
        fontcolor: "#373737",
      },
    },
  },
  plugins: [],
};
