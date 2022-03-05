module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      base: 'var(--font-base)',
      alt: 'var(--font-alt)',
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        blue: 'var(--color-blue)',
        gray: 'var(--color-grey)',
        crimson: 'var(--color-crimson)',
        grey: 'var(--color-grey)',
        white: 'var(--color-white)',
      },
    },
  },

  plugins: [],
}
