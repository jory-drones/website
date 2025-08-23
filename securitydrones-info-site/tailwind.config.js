/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1420",
        "primary-light": "#152233",
        secondary: "#6cc1ff",
        muted: "#94a3b8",
      },
      fontFamily: {
        display: ["Orbitron", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
