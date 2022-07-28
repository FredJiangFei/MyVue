/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: [],
};
