/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'space-bg': '#1f1122', // Background color used in Pic.js
      },
      textColor: {
        'space-text': '#e1d8ee', // Text color used in Pic.js
      },
      fontFamily: {
        'arial': ['Arial', 'sans'], // Font family used in Pic.js
      },
      fontSize: {
        '4xl': '2rem', // Font size used in Pic.js
        'xl': ['1.25rem', '1.5'], // Font size used in Card.js
      },
      padding: {
        '5': '1.25rem', // Padding used in Pic.js
        '10': '2.5rem', // Padding used in Card.js
        '2px': '2px', // Padding used in Card.js
      },
      borderRadius: {
        'rounded': '0.375rem', // Border radius used in Pic.js
      },
      boxShadow: {
        'hover-shadow': '0 0 10px rgba(0, 0, 0, 0.2)', // Box shadow used for the hover effect
      },
    },
  },
  plugins: [],
}
