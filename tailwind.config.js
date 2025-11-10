/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          warm: "#BF6D24",
          primary: "#6E7BFF",
          accent: "#2C9AC1",
          lightBg: "#F8F9FA",
          lightBgSecondary: "#E9ECEF",
          lightText: "#122330",
          lightTextMuted: "#495057",
          darkBg: "#1A2A3A",
          darkBgSecondary: "#2A3A4A",
          darkText: "#FFFFFF",
          darkTextMuted: "#B0B0B0",
          white: "#FFFFFF",
          shadowDark: "rgba(48, 165, 191, 0.4)",
          shadowLight: "rgba(0, 0, 0, 0.1)",
          shadowMedium: "rgba(0, 0, 0, 0.15)",
        },
        feedback: {
          star: "#DAA520",
          successBg: "#D4EDDA",
          successText: "#155724",
          successBorder: "#C3E6CB",
          errorBg: "#F8D7DA",
          errorText: "#721C24",
          errorBorder: "#F5C6CB",
        },
        steam: {
          s: "#3CB371",
          t: "#1E90FF",
          e: "#FFA500",
          a: "#FF6347",
          m: "#9370DB",
          text: "#6B82A7",
        },
        overlay: "rgba(81, 94, 166, 0.05)",
      },
      boxShadow: {
        light: "0 10px 30px rgba(0, 0, 0, 0.1)",
        medium: "0 20px 40px rgba(0, 0, 0, 0.15)",
        accent: "0 25px 50px rgba(48, 165, 191, 0.4)",
      },
    },
  },
  plugins: [],
};

