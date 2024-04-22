/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: "400px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "xxl+": "1500px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    extend: {
      colors: {
        y: {
          49: "#F7DA02",
          30: "#988601",
        },
        g: {
          8: "#002429",
          12: "#00363D",
          40: "#DEE0E0",
          45: "#6E7677",
          64: "#A6AE96",
          89: "#DEE5E6",
          500: "#3B494A",
        },
        glass: "rgba(0, 54, 61, 0.62)",
        n: {
          0: "#FFFFFF",
          91: "#F8F4D7",
        },
      },

      keyframes: {
        "bounce-slow-top": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-top-2": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-200px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-down": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-left": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-right": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-up": {
          "100%": {
            transform: "translateY(-200%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-down": {
          "-100%": {
            transform: "translateY(200%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-right": {
          "100%": {
            transform: "translateX(-400%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "bounce-slow-top": "bounce-slow-top 3s linear infinite",
        "bounce-slow-top-2": "bounce-slow-top 4s linear infinite",
        "bounce-slow-down": "bounce-slow-down 3s linear infinite",
        "bounce-slow-right": "bounce-slow-right 3s linear infinite",
        "bounce-slow-left": "bounce-slow-left 3s linear infinite",
        "fade-slow-up": "fade-slow-up 20s linear infinite",
        "fade-slow-down": "fade-slow-down 20s linear infinite",
        "fade-slow-right": "fade-slow-right 20s linear infinite",
      },
      boxShadow: {
        1: "0px 4px 8px -2px rgba(45, 54, 67, 0.08), 0px 2px 4px -2px rgba(45, 54, 67, 0.06)",
        2: "0px 12.503px 40.009px 0px rgba(00, 0, 0.15)",
        3: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        "1px": "1px",
        15: "60px",
        18: "72px",
        25: "100px",
        30: "120px",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".transition-1": {
          transition: "all 0.5s ease-in-out",
        },
        ".transition-2": {
          transition: "all 0.7s ease-in-out",
        },
        ".transition-3": {
          transition: "all 1s ease-in-out",
        },
        ".transition-4": {
          transition: "all 1.5s ease-in-out",
        },
        ".transition-5": {
          transition: "all 2s ease-in-out",
        },
      });
    }),
  ],
};
