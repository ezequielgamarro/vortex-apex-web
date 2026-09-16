/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6246ea",
        darkBg: "#090a0f",
        muted: "#2b2c34",
        accentRed: "#e45858",
        textLight: "#d1d1e9",
        textDark: "#fffffe",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"]
      }
    }
  },
  plugins: [],
};
