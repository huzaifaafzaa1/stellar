/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#6E51E0",
        lightblack:"#363D4F",
        grey:"#505A71"
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};