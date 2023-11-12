/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1F1717",

        lightDark: "#4c4545",
        primary: "#FCF5ED",
      },
    },
  },
  plugins: [],
};
