/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gradient-from": "#8FCEA1", // Green 400
        "custom-gradient-to": "#6CB8D6", // Cyan 300
        darkBlue: "#082541",
        blueGradient: "#6a5acd",
        blueGradientEnd: "#25CCF7",
        darkBack: "#0B2034",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        blueGradient:
          "linear-gradient(170deg, " + "#4859AB" + ", " + "#80B1CD" + ")",
      },
    },
  },
  plugins: [],
};
