/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'neutral-fog': '#d2d6da',
        'secondary-sand': '#f7edde',
        'primary-green': '#00a398',
        'accent-red': '#ff3e41',
        'primary-blue': '#215273', //
        'neutral-charcoal': '#343a40',
        'accent-purple': '#813679',
        'secondary-orange': '#ff773d',
        'secondary-gold': '#ffca3a',
        bruise: '#773b76',
        'secondary-blue': '#1E3549',
        'dark-grey-blue': '#2f5170',
      },
      boxShadow: {
        around: '-8px 4px 20px 0 rgba(0, 0, 0, 0.2)',
        question: '0 0px 10px 0 rgba(0, 0, 0, 0.16)',
      },
      fontFamily: {
        body: ['Roboto, sans serif'],
        sans: ['Roboto, sans serif'],
        nunito: ['Nunito'],
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
