// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enables dark mode via class
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#6366f1',
          500: '#4f46e5',
          600: '#4338ca',
        },
        accent: {
          400: '#ec4899',
          500: '#db2777',
          600: '#be185d',
        },
        dark: {
          700: '#1f2937',
          800: '#111827',
          900: '#0f172a',
        },
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
