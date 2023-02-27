/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "text-primary-color": "#11142d",
        mediumslateblue: "#475be8",
        "white-color": "#fcfcfc",
        "divider-color": "#e4e4e4",
        "nd-text-color": "#808191",
      },
      fontFamily: {
        poppins: "Poppins",
        manrope: "Manrope",
      },
      borderRadius: { base: "10px" },
      screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      '2sm':'760px',

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },

  plugins: [],
}
}
