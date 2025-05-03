/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // 🌙 Dark Theme Base
        background: "#0F172A", // bg for screens
        surface: "#1E293B",    // cards, inputs, secondary areas
        text: "#FFFFFF",
        muted: "#94A3B8",
        border: "#334155",
        accent: "#3B82F6",     // blue-600 — primary action
        outline: "#64748B",    // input borders
        danger: "#EF4444",

        // You can alias semantic roles too:
        primary: "#3B82F6",    // alias for accent
        secondary: "#1E293B",
        dark: "#0F172A",
        light: "#F1F5F9",
      },
      fontFamily: {
        sans: ["Inter", "System", "ui-sans-serif", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem",
      },
      spacing: {
        screenpad: "1rem",
      },
    },
  },
  plugins: [],
};
