/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ivory: "#F8F4EE", champagne: "#E9DCCB", chocolate: "#493329", taupe: "#B8A493", gold: "#C6A46A" }, fontFamily: { display: ["Playfair Display", "serif"], sans: ["DM Sans", "sans-serif"] } } },
  plugins: []
}