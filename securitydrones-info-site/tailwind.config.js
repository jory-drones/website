/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // keep your colors; these are examples you already use
      colors: {
        primary: "#0b1420",
        "primary-light": "rgba(255,255,255,0.06)",
        secondary: "rgba(255,255,255,0.16)",
      },
      fontFamily: {
        display: ["Orbitron", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
      boxShadow: {
        inset: "inset 0 0 0 1px rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};
