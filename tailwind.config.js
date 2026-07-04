/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: { blue: '#113B5E', 'blue-mid': '#1A5A8C', pale: '#E4F0F5' },
        text: { primary: '#0A0A0A', muted: '#6B6B6B', faint: '#ADADAD' },
        section: { dark: '#0A0A0A' },
        hairline: '#E5E5E5',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16,1,0.3,1)',
      }
    }
  },
  plugins: [],
}
