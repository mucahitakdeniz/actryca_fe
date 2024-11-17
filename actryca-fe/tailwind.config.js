/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-900": "#36383C",
        "primary-800": "#322748",
        "primary-600": "#513F75",
        "primary-500": "#614B8B",
        "primary-400": "#7A689E",
        "primary-200": "#ADA1C3",
        "primary-100": "#C6BED5",
        "primary-50": "#E3DAF3",
        "star-color": "#FF7A00",
        "star-color-100": "#FFE6CF",
        "grey-100": "#F1F0F4",
        "name-200": "#a4a5a8",
        "name-300": "#88898d",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        "dm-serif-text": ["DM Serif Text", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
      });
    },
  ],
};
