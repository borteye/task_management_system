/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg,png}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color: "#6C63FF",
        lighter_shade_primary: "#EFF0F5",
        error: "#B80020",
        overlay: "#00000057"
      },
      fontFamily:{
        'poppins-regular': ['Poppins'],
        'poppins-medium': ["Poppins Medium"],
        'poppins-semibold': ["Poppins SemiBold"],
        'poppins-bold': ["Poppins Bold"],
      },
      width: {
        'custom-428': '428px',
        'custom-370': '370px',
      },
      borderRadius: {
        'custom-35': '35px',
      },
    },
  },
  plugins: [],
}

