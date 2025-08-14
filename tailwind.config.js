/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#151521', // darker shade
      },
        animation: {
        gradient: "gradient 8s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        neon: "neon 6s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
         neon: {
      "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
      "50%": { opacity: 0.55, transform: "scale(1.08)" }
        } 
      },
      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },
  plugins: [],
};
