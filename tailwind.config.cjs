/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      white: "hsl(0, 100%, 100%)",
      black: "hsl(0, 0%, 0%)",
      scissorsGradientFrom: "hsl(39, 89%, 49%)",
      scissorsGradientTo: "hsl(40, 84%, 53%)",
      paperGradientFrom: "hsl(230, 89%, 62%)",
      paperGradientTo: "hsl(230, 89%, 65%)",
      rockGradientFrom: "hsl(349, 71%, 52%)",
      rockGradientTo: "hsl(349, 70%, 56%)",
      cyanFrom: "hsl(189, 59%, 53%)",
      cyanTo: "hsl(189, 58%, 57%)",
      darkText: "hsl(229, 25%, 31%)",
      scoreText: "hsl(229, 64%, 46%)",
      headerOutline: "hsl(217, 16%, 45%)",
      radialGradientFrom: "hsl(214, 47%, 23%)",
      radialGradientTo: "hsl(237, 49%, 15%)",
    },
    extend: {
      backgroundImage: {
        triangle: "url('./bg-triangle.svg')",
      },
      boxShadow: {
        upperEdge: "inset 0px 5px 0px 0px rgba(0,0,0,0.25)",
        lowerEdge: "inset 0px -6px 0px 0px rgba(0,0,0,0.3)",
      },
      transitionDuration: {
        1500: "1500ms",
      },
      transitionProperty: {
        width: "width",
      },
      width: {
        "200%": "200%",
        "300%": "300%",
        "400%": "400%",
      },
      height: {
        "200%": "200%",
        "300%": "300%",
        "400%": "400%",
      },
    },
  },
  plugins: [],
};
