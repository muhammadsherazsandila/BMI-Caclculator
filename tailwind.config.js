/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {
    boxShadow: {
      'aqua': '0px 1px 11px 0px rgb(0, 255, 255)',  // Red shadow
    },
  },
  },
  plugins: [],
}