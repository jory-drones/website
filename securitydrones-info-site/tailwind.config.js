/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'ui-sans-serif', 'system-ui'],
        body: ['Anta', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: "#0b1020",
        secondary: "#111a2e",
        accent: "#16a34a",
        cyan: "#22d3ee",
        blue: "#60a5fa"
      }
    }
  },
  plugins: []
}
