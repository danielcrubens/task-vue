export default {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024',
      xxl: '1440px',
    },
    colors: {
      'dark-blue': '#030621',
      'green': '#00dc82',
    },
    fontFamily: {
      popins: ['Poppins', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [
    require('autoprefixer'),
  ]
}