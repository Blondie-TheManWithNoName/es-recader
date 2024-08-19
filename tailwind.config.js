/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        vs: "3vw", // Custom viewport-sized font, e.g., 3% of the viewport width
        vsm: "3.5vw", // Slightly larger viewport-sized font
        vlg: "5vw", // Even larger viewport-sized font
        vxl: "6vw", // Slightly larger viewport-sized font
        vxxl: "7vw", // Slightly larger viewport-sized font
      },
    },
  },
  plugins: [],
};
