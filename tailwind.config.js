/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        // fontFamily: ["Tangerine"],
        fontFamily: {
          script: ["Tangerine", "Roboto", "sans-serif"], // Android
          // Inter: ['Inter', 'Roboto', 'sans-serif'],
        },
      },
      colors: {
        primary: {
          100: "#FBEFF0",
          200: "#F2CFD3",
          300: "#EAAEB5",
          DEFAULT: "#b23040",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-rotate": "bounce-rotate 1.2s infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        "wiggle-tiny": "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "wiggle-tiny": {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" },
        },
        "bounce-rotate": {
          "0%, 100%": {
            transform: "translateX(10%) translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
