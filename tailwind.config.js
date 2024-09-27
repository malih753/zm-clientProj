/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alavon: ["Avalon", "sans-serif"], // Add your custom font family
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 600,
      },
      colors: {
        "dark-blue": "#001942",
        "grey-color": "#7D899F",
        "blue-color": "#0259FF",
      },
      backgroundImage: {
        "blur-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.23) 100%)",
        "event-card-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 65.66%, #000000 109.34%)",
        "light-blue-gradient":
          "linear-gradient(99.96deg, #C8DEFE -14.42%, #E7F4FD 60.66%, #C8DEFE 157.98%)",
        "destinations-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 58.17%, rgba(0, 0, 0, 0.75) 95.5%)",
        "boost-card-gradient":
          "linear-gradient(99.9deg, #C8DEFE -5.73%, #E7F4FD 84.08%, #C8DEFE 200.48%)",
      },
      boxShadow: {
        "news-card-shadow": "0px 2px 14px 0px #0259FF26",
        "venue-card-shadow": "0px 1.74px 12.2px 0px #0259FF26",
      },

      screens: {
        xs: "420px",
        lg: "1100px",
      },
    },
  },
  plugins: [],
};
