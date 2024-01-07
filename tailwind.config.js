/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#a855f7",
        light: "#fafaf9",
        dark: "#0c0a09",
        success: "#4ade80",
        danger: "#ef4444"
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}

