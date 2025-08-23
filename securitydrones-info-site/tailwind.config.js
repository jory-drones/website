// /tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b1420",
        "primary-light": "#152233",
        secondary: "#6cc1ff"
      },
      fontFamily: {
        display: ['"Orbitron"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"]
      }
    }
  }
};
r
