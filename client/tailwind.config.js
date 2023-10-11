/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'sidecard-shadow': '5px 5px 15px rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
}

