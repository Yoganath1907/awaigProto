/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#ffffff",
        slop: "#ff0000",
      },
      fontFamily: {
        display: ['"Lilita One"', "system-ui", "cursive"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0.15" },
        },
        rise: {
          "0%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        blink: "blink 1.1s steps(1) infinite",
        rise: "rise 0.5s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
