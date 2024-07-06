// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scrolling-line": "scrolling-line 4s linear infinite",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
