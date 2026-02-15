/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app/**/*.vue",
  ],
  theme: {
   extend: {
  animation: {
    float1: "float1 12s ease-in-out infinite",
    float2: "float2 15s ease-in-out infinite",
  },
  keyframes: {
    float1: {
      "0%,100%": { transform: "translate(0,0)" },
      "50%": { transform: "translate(60px, -60px)" },
    },
    float2: {
      "0%,100%": { transform: "translate(0,0)" },
      "50%": { transform: "translate(-50px, 50px)" },
    },
  },
}
,
fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
  },
  plugins: [],
}
