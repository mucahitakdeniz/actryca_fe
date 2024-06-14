/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
       
        "Primary-900": "#231b32",
        "Primary-800": "#322748",
        "Primary-600": "#513f75",
        "Primary-500": "#614B8B",
        "Primary-100": "#C6BED5" ,
        "Primary-50": "#E3DAF3",
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        'dm-serif-text': ['DM Serif Text', 'serif'],
      },
    },
  },
  plugins: [],
};
