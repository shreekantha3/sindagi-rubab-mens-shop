/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#EEF0FF',100:'#E0E3FF',500:'#4F46E5',600:'#4338CA',700:'#3730A3' },
        gold: { DEFAULT:'#C9A227', light:'#E7CE6B', dark:'#9A7B14' },
        cream: '#F8F7F5',
        ink: '#1C1C22'
      },
      fontFamily: { display: ['"Plus Jakarta Sans"','system-ui','sans-serif'], body: ['Inter','system-ui','sans-serif'] }
    }
  },
  plugins: []
}
