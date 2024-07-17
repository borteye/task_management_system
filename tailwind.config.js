/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg,png}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color: "#16171D",
        light_gray: "#EFF0F5",
        soft_gray: "#B9B9B9",
        error: "#B80020",
        overlay: "#00000057",
        foreground_color: "#F0F1F4",
        wine: "#B80020",
        light_wine: "#FFF0F0",
        blue: "#3754DB",
        light_blue: "#F2F4FD",
        amber : "#DF9A00",
        light_amber: "#FFFDF5",
        green:"#00C271",
        light_green: "#F0FFF9"
      
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
        'custom-70%': '70%',
        'custom-90%': '90%',
        'custom-600': '600px',
        sideBarExpanded: "250px",
        sideBarCollapsed: "75px",
        contentExpanded: 'calc(100% - 75px)',
        contentCollapsed : 'calc(100% - 250px)',

      },
      maxWidth: {
        'custom-600': '600px',
      },
      height:{
        'custom-500': '500px',
      },
      borderRadius: {
        'custom-35': '35px',
      },
      zIndex:{
        'custom-100': '100',
        'custom-200': '200',
        'custom-1000': '1000',
        'custom-2000': '2000',
      }
    },
  },
  plugins: [],
}

