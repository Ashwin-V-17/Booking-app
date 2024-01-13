/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],//It describes that the files where we are going to add tailwind css
  theme: {
    extend: {},
    container:{
      padding:"10rem",
    }
  },
  plugins: [],
}

