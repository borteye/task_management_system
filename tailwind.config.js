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
        soft_gray: "#B9B9B9",
        error: "#B80020",
        overlay: "#00000057"
      },
      fontSize: {
        'nav-header': 'clamp(1.5rem, 2vw + 1rem, 2.25rem)',
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
        sideBarExpanded: "250px",
        sideBarCollapsed: "75px",
        navBarExpanded: 'calc(100% - 75px)',
        navBarCollapsed: 'calc(100% - 250px)',
      },
      borderRadius: {
        'custom-35': '35px',
      },
      zIndex:{
        'custom-1000': '1000',
      }
    },
  },
  plugins: [],
}

