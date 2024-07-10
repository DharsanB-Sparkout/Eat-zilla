/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: { 
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1440px'
      },
      container: {
        center: true,
        screens: { 
          sm: '600px',
          md: '720px',
          lg: '960px',
          xl:'1140px',
          '2xl':'1140px'
        },
        padding:'1rem',
      },
      colors:{
         litegrey:'#9CA3AF',        
         liteblack:'#111928',
         liteblue:'#D1D5DB',
         skyblue:'#F9FAFB',
         liteviolet:'#FAFAFA',
         lazygreen:'#008352',
         greyish:'#6B7280',
      },
      backgroundColor:{
         liteorange:'#FFF3C7',
         lazyblue:'#E0FFF2',
         litegreen:'#DFFDB9',
         litered:'#FFE3E1',
         liteyellow:'#FAFFC3',
         blue:'#EEE',
         yellow:'#FFF9BE'
         
      },
      fontFamily:{
        inter: 'Inter',
        poppins:'Poppins',
      },
    },
  },
  plugins: ['tailwind-scrollbar'],
}

