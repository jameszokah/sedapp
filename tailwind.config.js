module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_5e": "#0000005e",
          "900_26": "#00000026",
          "900_a0": "#000000a0",
          "900_c9": "#000000c9",
          "900_75": "#00000075",
          "900_aa": "#000000aa",
          "900_ce": "#000000ce",
        },
        blue: { 50: "#ebf1fb", A400: "#1a6efd", A700: "#1b6dfc" },
        gray: {
          100: "#f0f3ff",
          500: "#929292",
          600: "#6b6b6b",
          800: "#4e4c4c",
          "500_3f": "#9493933f",
          "800_01": "#474646",
          "700_ea": "#5f5f5fea",
        },
        yellow: { 700: "#ffc33d" },
        blue_gray: { "100_3f": "#ced3dc3f", "400_3f": "#8f8d8d3f" },
        red: { A400: "#fc1a1a" },
        purple: { A200: "#ff3cdf" },
        white: { A700: "#ffffff" },
        indigo: { 500: "#4b48b7" },
      },
      fontFamily: { roboto: "Roboto" },
      boxShadow: {
        bs2: "0px 4px  8px 6px #8f8d8d3f",
        bs1: "0px 8px  13px 13px #ced3dc3f",
        bs: "0px 4px  8px 6px #9493933f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
