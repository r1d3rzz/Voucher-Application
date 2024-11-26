export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        headingText: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
