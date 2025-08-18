/**
 * Tailwind CSS configuration
 *
 * This configuration extends the default Tailwind theme with custom
 * fonts and colours tailored to the SecurityDrones.ai brand. Headings
 * use the bold and modern "Syne" typeface, while body text uses the
 * geometric "Anta" font. A palette of deep blues and bright accents
 * ensures the page remains on‑brand and accessible. Any component
 * classes missing from this file will fall back to the Tailwind
 * defaults.
 */
import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Syne"', ...defaultTheme.fontFamily.sans],
        body: ['"Anta"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#0a2740', // dark base used for backgrounds
          light: '#143e66',   // slightly lighter variant for panels
        },
        secondary: {
          DEFAULT: '#00b5d9', // vibrant cyan accent colour
          dark: '#008fb3',    // darker shade for hover states
        },
        accent: {
          DEFAULT: '#00c49a', // green accent used sparingly
        },
      },
    },
  },
  plugins: [],
};