 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html", // ✅ Include index.html in the root folder
    "./src/**/*.{html,js,jsx,ts,tsx}", // ✅ Scan relevant files inside src/
  ],
  theme: {
    extend: {
      fontFamily: {
        ballo: ["ballo", "sans-serif"], // Register the font
        lora: ["lora", "sans-serif"],
        molengo: ["molengo", "sans-serif"],
      },
      
      colors:{
        "primary":"#881415",
        "secondary":"#FDF852",
        "accent":"#282A36",
        "dark":"#000000",
        "light":"#FAF3DD",
        "white":"#ffffff"
      },
      fontSize:{
        "display":"64px"
      },
      borderRadius:{
        "static-card":"12px"
      }
    },
  },
  plugins: [],
}