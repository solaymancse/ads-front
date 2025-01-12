/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary1: "#59A044",
        primary2: "#97C479",
        secondary1: "#2B458f",
        secondary2: "#261A6A",
      },
      screens: {
        xsm: "400px",
        xxsm: "370px",
      },
      fontSize: {
        "h1": "75px",
        "h2": "60px",
        "h3": "40px",
        "h4": "27px",
        "h5": "25px",
        "h6": "23px",
        "p1": "22px",
        "p2": "16px",
        "p3": "13px"
      }
    },
  },
  plugins: [],
};
