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
        primary: "#7C3AED",
        secondary: "#CAB3FF",
        "secondary-100": "#E2D6FF",
        black: "#403937",
        "white-100": "#FBFAFF",
        "gray-100": "#7C7C8A",
        "gray-150": "#E3E3E3",
        "gray-200": "#C7C7CD",
        "gray-300": "#756966",
      },
      boxShadow: {
        input: "0 4px 16px rgba(22, 22, 22, 0.1)",
        card: "0px 4px 16px #EAE2FD",
        none: "0px",
      },
    },
  },
  plugins: [],
};
