/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl1440: "1440px", // custom breakpoint
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide::-webkit-scrollbar": { display: "none" },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
